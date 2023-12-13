window.BENCHMARK_DATA = {
  "lastUpdate": 1702488550610,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-11 22.04 Release c++-17": [
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
        "date": 1702397926771,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 948.8499557063201,
            "unit": "ns/iter",
            "extra": "iterations: 735996\ncpu: 948.7987706454928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18577.155923248374,
            "unit": "ns/iter",
            "extra": "iterations: 44663\ncpu: 18575.91742605736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 42198.18122946423,
            "unit": "ns/iter",
            "extra": "iterations: 21001\ncpu: 42195.93352697492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 53586.59600000237,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53584.82999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65340.48201846739,
            "unit": "ns/iter",
            "extra": "iterations: 12346\ncpu: 65336.854041794955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 81422.39057426943,
            "unit": "ns/iter",
            "extra": "iterations: 10779\ncpu: 81415.31681974205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 97662.15434370608,
            "unit": "ns/iter",
            "extra": "iterations: 8967\ncpu: 97655.00167280027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 113385.78448947585,
            "unit": "ns/iter",
            "extra": "iterations: 7698\ncpu: 113381.17692907249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 140071.69805970433,
            "unit": "ns/iter",
            "extra": "iterations: 6700\ncpu: 140063.94029850748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 782.7224330437085,
            "unit": "ns/iter",
            "extra": "iterations: 894912\ncpu: 782.6729332046056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 630.2872015700889,
            "unit": "ns/iter",
            "extra": "iterations: 1115840\ncpu: 630.2364138227707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 621.2963208829865,
            "unit": "ns/iter",
            "extra": "iterations: 1125270\ncpu: 621.2747162903134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 620.23783208722,
            "unit": "ns/iter",
            "extra": "iterations: 1121392\ncpu: 620.224060810137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1210.9784581988959,
            "unit": "ns/iter",
            "extra": "iterations: 578596\ncpu: 1210.9032900331129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5687.502902088251,
            "unit": "ns/iter",
            "extra": "iterations: 147480\ncpu: 5687.280309194467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24095.801632013994,
            "unit": "ns/iter",
            "extra": "iterations: 34436\ncpu: 24094.764200255497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20125.08554744488,
            "unit": "ns/iter",
            "extra": "iterations: 41100\ncpu: 20123.778588807796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19519.38429282137,
            "unit": "ns/iter",
            "extra": "iterations: 42210\ncpu: 19517.8085761668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19658.688960418924,
            "unit": "ns/iter",
            "extra": "iterations: 41940\ncpu: 19657.331902718164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58679.294869124664,
            "unit": "ns/iter",
            "extra": "iterations: 14403\ncpu: 58675.85225300282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 622947.5769999909,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622894.3000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 612223.5247387055,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 612191.4285714292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 608831.7355198836,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 608810.0488485701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 613043.1697312784,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 613015.7708627994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 355381.75395216676,
            "unit": "ns/iter",
            "extra": "iterations: 2467\ncpu: 355362.3023915689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 617011.035511342,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 616953.835227272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2771198.4763314067,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2771021.5976331257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1150805.5769230335,
            "unit": "ns/iter",
            "extra": "iterations: 832\ncpu: 1150758.17307692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3385018.6159420316,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3384926.0869565145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5518.662360414813,
            "unit": "ns/iter",
            "extra": "iterations: 144983\ncpu: 5518.544243118159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24297.600167887067,
            "unit": "ns/iter",
            "extra": "iterations: 34547\ncpu: 24296.72330448374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 20291.354956923093,
            "unit": "ns/iter",
            "extra": "iterations: 41205\ncpu: 20290.763256886446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 21171.81212935341,
            "unit": "ns/iter",
            "extra": "iterations: 39458\ncpu: 21170.991940797885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 20478.2252351829,
            "unit": "ns/iter",
            "extra": "iterations: 40713\ncpu: 20477.805614914025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 58521.32181184764,
            "unit": "ns/iter",
            "extra": "iterations: 14350\ncpu: 58519.35888501738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 601771.5469999985,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601748.9000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 503792.0859999758,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503777.5999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 624761.1680851232,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 624750.2127659572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 618617.4551820928,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 618597.0588235287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 349892.2526860319,
            "unit": "ns/iter",
            "extra": "iterations: 2513\ncpu: 349860.962992441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 620779.0378681904,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 620752.1739130459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2832892.9695123443,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2832676.8292683004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1183908.7972973445,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 1183827.3955773984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5411.458978916393,
            "unit": "ns/iter",
            "extra": "iterations: 147412\ncpu: 5410.946191626216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23964.93390056172,
            "unit": "ns/iter",
            "extra": "iterations: 34554\ncpu: 23963.65399085497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18565.06391194739,
            "unit": "ns/iter",
            "extra": "iterations: 43247\ncpu: 18564.499271625868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19500.02553131843,
            "unit": "ns/iter",
            "extra": "iterations: 42771\ncpu: 19499.64695705023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19063.013607935245,
            "unit": "ns/iter",
            "extra": "iterations: 43651\ncpu: 19062.360541568338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 57313.1612414838,
            "unit": "ns/iter",
            "extra": "iterations: 14531\ncpu: 57311.3756795816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 584020.8700000176,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584005.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 607565.3897364936,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 607541.8862690742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 622789.9693166028,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 622771.1994421186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 610593.9777623188,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 610561.1535788728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 357859.93655956065,
            "unit": "ns/iter",
            "extra": "iterations: 2459\ncpu: 357847.0109800738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 614650.2224546893,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 614645.4672245494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 317.53869151235983,
            "unit": "ns/iter",
            "extra": "iterations: 2205936\ncpu: 317.5288403652681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2386.8659972921946,
            "unit": "ns/iter",
            "extra": "iterations: 294703\ncpu: 2386.7955195569625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1831.9846532313304,
            "unit": "ns/iter",
            "extra": "iterations: 404059\ncpu: 1831.9213283208514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1898.270804898237,
            "unit": "ns/iter",
            "extra": "iterations: 368531\ncpu: 1898.2403108557914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1429.1917982285051,
            "unit": "ns/iter",
            "extra": "iterations: 489504\ncpu: 1429.144807805447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10540.299219701345,
            "unit": "ns/iter",
            "extra": "iterations: 66513\ncpu: 10539.9861681175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31080.47121554031,
            "unit": "ns/iter",
            "extra": "iterations: 22599\ncpu: 31079.246869330706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7285.05154349835,
            "unit": "ns/iter",
            "extra": "iterations: 96210\ncpu: 7284.908013719941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7302.494053570352,
            "unit": "ns/iter",
            "extra": "iterations: 96024\ncpu: 7302.433766558482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7373.788207399199,
            "unit": "ns/iter",
            "extra": "iterations: 86037\ncpu: 7373.55091414167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15467.418211919892,
            "unit": "ns/iter",
            "extra": "iterations: 45300\ncpu: 15466.962472406341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 12694.07931624506,
            "unit": "ns/iter",
            "extra": "iterations: 54932\ncpu: 12693.508337581083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3210.2594918405457,
            "unit": "ns/iter",
            "extra": "iterations: 217845\ncpu: 3210.1875186485954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16061.730470983282,
            "unit": "ns/iter",
            "extra": "iterations: 43717\ncpu: 16061.211885536382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12924.288872105648,
            "unit": "ns/iter",
            "extra": "iterations: 54287\ncpu: 12923.970748061203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13003.476014141967,
            "unit": "ns/iter",
            "extra": "iterations: 53740\ncpu: 13003.048008931914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14171.745167102103,
            "unit": "ns/iter",
            "extra": "iterations: 49401\ncpu: 14171.42770389255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30363.30532503471,
            "unit": "ns/iter",
            "extra": "iterations: 23136\ncpu: 30362.6339903186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 139400.04672897392,
            "unit": "ns/iter",
            "extra": "iterations: 5029\ncpu: 139394.39252336556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 119835.98683310479,
            "unit": "ns/iter",
            "extra": "iterations: 5848\ncpu: 119831.75444596422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 119583.72934132376,
            "unit": "ns/iter",
            "extra": "iterations: 5845\ncpu: 119576.09923011235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 121063.78509681798,
            "unit": "ns/iter",
            "extra": "iterations: 5784\ncpu: 121061.2724757948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 70177.94782173284,
            "unit": "ns/iter",
            "extra": "iterations: 9985\ncpu: 70177.31597396122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 121521.58043780022,
            "unit": "ns/iter",
            "extra": "iterations: 5756\ncpu: 121518.7282835293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3117.533773647197,
            "unit": "ns/iter",
            "extra": "iterations: 218632\ncpu: 3117.2815507336736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15902.233973995777,
            "unit": "ns/iter",
            "extra": "iterations: 44069\ncpu: 15900.639905602624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13064.063246845075,
            "unit": "ns/iter",
            "extra": "iterations: 53726\ncpu: 13063.760562855896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13102.058274796516,
            "unit": "ns/iter",
            "extra": "iterations: 53385\ncpu: 13101.41800131112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13857.99046450932,
            "unit": "ns/iter",
            "extra": "iterations: 50548\ncpu: 13857.06061565246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30313.56772072385,
            "unit": "ns/iter",
            "extra": "iterations: 23117\ncpu: 30311.917636371363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 138350.29547244523,
            "unit": "ns/iter",
            "extra": "iterations: 5080\ncpu: 138342.75590551257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 118899.3996610237,
            "unit": "ns/iter",
            "extra": "iterations: 5900\ncpu: 118887.94915254228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 118900.9120204644,
            "unit": "ns/iter",
            "extra": "iterations: 5865\ncpu: 118893.65728900179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 119612.73558512088,
            "unit": "ns/iter",
            "extra": "iterations: 5862\ncpu: 119611.8560218367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 68717.22481909052,
            "unit": "ns/iter",
            "extra": "iterations: 10226\ncpu: 68713.87639350643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 119959.03967168226,
            "unit": "ns/iter",
            "extra": "iterations: 5848\ncpu: 119956.85704514252 ns\nthreads: 1"
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
        "date": 1702398792056,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 952.1522565175059,
            "unit": "ns/iter",
            "extra": "iterations: 733985\ncpu: 952.1005197653903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18490.749298823226,
            "unit": "ns/iter",
            "extra": "iterations: 45281\ncpu: 18489.9052582761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43112.33920495278,
            "unit": "ns/iter",
            "extra": "iterations: 21005\ncpu: 43110.71649607237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 55530.381400001264,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55529.27000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 64286.89363265128,
            "unit": "ns/iter",
            "extra": "iterations: 12250\ncpu: 64285.844897959156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 80044.54983480026,
            "unit": "ns/iter",
            "extra": "iterations: 10896\ncpu: 80039.57415565345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 95473.60376741798,
            "unit": "ns/iter",
            "extra": "iterations: 9184\ncpu: 95469.16376306619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 111212.45095541695,
            "unit": "ns/iter",
            "extra": "iterations: 7850\ncpu: 111209.92356687893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 140095.6420960473,
            "unit": "ns/iter",
            "extra": "iterations: 6851\ncpu: 140086.9070208728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 792.6890673983393,
            "unit": "ns/iter",
            "extra": "iterations: 881995\ncpu: 792.6571012307321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 636.1926095398048,
            "unit": "ns/iter",
            "extra": "iterations: 1100148\ncpu: 636.1636797958093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 632.5542021376102,
            "unit": "ns/iter",
            "extra": "iterations: 1109947\ncpu: 632.5383103877942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 641.4294549522353,
            "unit": "ns/iter",
            "extra": "iterations: 1091409\ncpu: 641.4248920432211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1209.3051141090007,
            "unit": "ns/iter",
            "extra": "iterations: 579534\ncpu: 1209.2401826294918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5454.509288856077,
            "unit": "ns/iter",
            "extra": "iterations: 146412\ncpu: 5454.302242985545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23882.20426216385,
            "unit": "ns/iter",
            "extra": "iterations: 34818\ncpu: 23881.567005571847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20069.661957446628,
            "unit": "ns/iter",
            "extra": "iterations: 41125\ncpu: 20069.308206686936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20791.4090292771,
            "unit": "ns/iter",
            "extra": "iterations: 39826\ncpu: 20790.435896148247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20289.249981605895,
            "unit": "ns/iter",
            "extra": "iterations: 40775\ncpu: 20288.635193133017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58733.66800028074,
            "unit": "ns/iter",
            "extra": "iterations: 14247\ncpu: 58730.251982873706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 600663.6109999589,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600635.7999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 603131.4639102666,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 603102.8731604763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 602046.0098039227,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 602010.8543417375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 605400.3152709099,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 605358.8318085849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 354568.8424022679,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 354552.5594518335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 610494.1087719135,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 610451.2982456157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2748873.06122436,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2748818.3673469448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1187454.6337499935,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 1187375.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3399242.7934783148,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3398981.884057972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5354.666530601141,
            "unit": "ns/iter",
            "extra": "iterations: 149438\ncpu: 5354.578487399458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23884.69049267225,
            "unit": "ns/iter",
            "extra": "iterations: 34668\ncpu: 23883.053536402495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 20240.563980695908,
            "unit": "ns/iter",
            "extra": "iterations: 41028\ncpu: 20239.79964902021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 21120.473756310294,
            "unit": "ns/iter",
            "extra": "iterations: 39419\ncpu: 21119.21662142618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 20414.710748880647,
            "unit": "ns/iter",
            "extra": "iterations: 40674\ncpu: 20414.581796725248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 57916.166340918295,
            "unit": "ns/iter",
            "extra": "iterations: 14326\ncpu: 57913.38824514839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 602903.356000013,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602900.0999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 500406.9100000379,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500373.7000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 500063.2139999652,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500043.4000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 623035.9086402387,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 623019.4759206785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 358917.86269742984,
            "unit": "ns/iter",
            "extra": "iterations: 2469\ncpu: 358897.16484406637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 615670.3097902406,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 615636.7832167804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2862213.981762997,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2862113.069908816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1180882.0588235375,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 1180808.635794746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5464.326175427032,
            "unit": "ns/iter",
            "extra": "iterations: 145713\ncpu: 5464.034094418494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24158.35163810275,
            "unit": "ns/iter",
            "extra": "iterations: 34308\ncpu: 24157.572577824594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19409.67803223783,
            "unit": "ns/iter",
            "extra": "iterations: 43054\ncpu: 19408.99567984397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 20216.208817967054,
            "unit": "ns/iter",
            "extra": "iterations: 42300\ncpu: 20208.427895981047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19694.14793542704,
            "unit": "ns/iter",
            "extra": "iterations: 42309\ncpu: 19693.644378264667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 57518.1885674936,
            "unit": "ns/iter",
            "extra": "iterations: 14520\ncpu: 57517.08677685984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 589455.8589999974,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589453.4000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 613180.0242886556,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 613162.3872310891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 611535.6878892782,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 611514.671280276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 614274.604008298,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 614270.5597788523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 359298.23107727827,
            "unit": "ns/iter",
            "extra": "iterations: 2497\ncpu: 359286.9042851423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 614160.6988120123,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 614145.8420684835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 305.52510214011977,
            "unit": "ns/iter",
            "extra": "iterations: 2293908\ncpu: 305.51796323130856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2372.464112169844,
            "unit": "ns/iter",
            "extra": "iterations: 294696\ncpu: 2372.3223253793753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1834.5326489667004,
            "unit": "ns/iter",
            "extra": "iterations: 380303\ncpu: 1834.4993334262433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1922.275679279696,
            "unit": "ns/iter",
            "extra": "iterations: 364467\ncpu: 1922.2264292789125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1435.0230950524365,
            "unit": "ns/iter",
            "extra": "iterations: 488373\ncpu: 1435.0115587880648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10656.407220183357,
            "unit": "ns/iter",
            "extra": "iterations: 65677\ncpu: 10656.187097461785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31033.350015513333,
            "unit": "ns/iter",
            "extra": "iterations: 22559\ncpu: 31032.780708364753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7252.143141606239,
            "unit": "ns/iter",
            "extra": "iterations: 96422\ncpu: 7252.093920474555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7191.905603749411,
            "unit": "ns/iter",
            "extra": "iterations: 97292\ncpu: 7191.633433375811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7308.900397730103,
            "unit": "ns/iter",
            "extra": "iterations: 94285\ncpu: 7308.855067083752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15357.545641609337,
            "unit": "ns/iter",
            "extra": "iterations: 45682\ncpu: 15356.845146884838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14170.62949734637,
            "unit": "ns/iter",
            "extra": "iterations: 49557\ncpu: 14170.403777468355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3197.6318754686235,
            "unit": "ns/iter",
            "extra": "iterations: 218676\ncpu: 3197.481205070485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15878.789719520802,
            "unit": "ns/iter",
            "extra": "iterations: 44103\ncpu: 15878.663582976114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12835.154074890514,
            "unit": "ns/iter",
            "extra": "iterations: 54480\ncpu: 12835.080763583155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12985.289687848319,
            "unit": "ns/iter",
            "extra": "iterations: 53820\ncpu: 12984.834633965178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14037.290386619816,
            "unit": "ns/iter",
            "extra": "iterations: 49868\ncpu: 14037.059837972185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 31225.6796367219,
            "unit": "ns/iter",
            "extra": "iterations: 22462\ncpu: 31224.890926898242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 139929.69653930524,
            "unit": "ns/iter",
            "extra": "iterations: 4999\ncpu: 139928.76575315272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 119064.43106960671,
            "unit": "ns/iter",
            "extra": "iterations: 5890\ncpu: 119059.66044142735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 120072.68798216837,
            "unit": "ns/iter",
            "extra": "iterations: 5833\ncpu: 120070.70118292337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 120763.28347676687,
            "unit": "ns/iter",
            "extra": "iterations: 5810\ncpu: 120762.37521514659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 69772.80783843485,
            "unit": "ns/iter",
            "extra": "iterations: 10002\ncpu: 69772.2655468895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 120520.89415617428,
            "unit": "ns/iter",
            "extra": "iterations: 5801\ncpu: 120517.92794345741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3213.092814453571,
            "unit": "ns/iter",
            "extra": "iterations: 218188\ncpu: 3212.9397583734813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15672.845470017726,
            "unit": "ns/iter",
            "extra": "iterations: 44658\ncpu: 15672.405839939114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12781.591254091576,
            "unit": "ns/iter",
            "extra": "iterations: 54677\ncpu: 12781.246227847292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12841.625827026184,
            "unit": "ns/iter",
            "extra": "iterations: 54563\ncpu: 12841.537305499927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13771.504638074026,
            "unit": "ns/iter",
            "extra": "iterations: 50991\ncpu: 13771.071365535208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30640.35419767242,
            "unit": "ns/iter",
            "extra": "iterations: 22846\ncpu: 30639.88444366642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 138703.61072630138,
            "unit": "ns/iter",
            "extra": "iterations: 5053\ncpu: 138702.73105086072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 119077.88274223676,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 119077.19328016455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 118678.86296734444,
            "unit": "ns/iter",
            "extra": "iterations: 5911\ncpu: 118678.17628151076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 119415.15097568675,
            "unit": "ns/iter",
            "extra": "iterations: 5842\ncpu: 119409.75693255698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 68846.62809673915,
            "unit": "ns/iter",
            "extra": "iterations: 10172\ncpu: 68845.34014942928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 119505.6580160434,
            "unit": "ns/iter",
            "extra": "iterations: 5857\ncpu: 119499.0780262945 ns\nthreads: 1"
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
        "date": 1702409120608,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 805.6621639344268,
            "unit": "ns/iter",
            "extra": "iterations: 869250\ncpu: 805.6468219729653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 16696.909871331012,
            "unit": "ns/iter",
            "extra": "iterations: 49740\ncpu: 16696.676718938477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 39350.00228753979,
            "unit": "ns/iter",
            "extra": "iterations: 23169\ncpu: 39348.44404160731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 55487.93106809727,
            "unit": "ns/iter",
            "extra": "iterations: 14362\ncpu: 55487.564406071586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 59634.63009999827,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59632.97000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 75709.3445747828,
            "unit": "ns/iter",
            "extra": "iterations: 11594\ncpu: 75708.36639641195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 90132.81564303262,
            "unit": "ns/iter",
            "extra": "iterations: 9704\ncpu: 90127.56595218461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 116483.3513742611,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 116480.22763046372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 132630.10515812755,
            "unit": "ns/iter",
            "extra": "iterations: 6514\ncpu: 132619.03592262836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 643.3287187026733,
            "unit": "ns/iter",
            "extra": "iterations: 1105325\ncpu: 643.276411915048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 543.6547769206906,
            "unit": "ns/iter",
            "extra": "iterations: 1287524\ncpu: 543.6135559414811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 528.3739096589736,
            "unit": "ns/iter",
            "extra": "iterations: 1325732\ncpu: 528.3359683555951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 548.3447510471608,
            "unit": "ns/iter",
            "extra": "iterations: 1296611\ncpu: 548.333694531359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1128.9084904654924,
            "unit": "ns/iter",
            "extra": "iterations: 619542\ncpu: 1128.8456634094225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5104.675026049672,
            "unit": "ns/iter",
            "extra": "iterations: 156431\ncpu: 5104.602029009593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22319.440504611855,
            "unit": "ns/iter",
            "extra": "iterations: 36860\ncpu: 22318.697775366243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17515.63375579476,
            "unit": "ns/iter",
            "extra": "iterations: 47026\ncpu: 17514.944924084575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17873.92127011698,
            "unit": "ns/iter",
            "extra": "iterations: 45980\ncpu: 17873.486298390624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17693.593003228627,
            "unit": "ns/iter",
            "extra": "iterations: 46450\ncpu: 17693.30032292787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 56009.4744692267,
            "unit": "ns/iter",
            "extra": "iterations: 14884\ncpu: 56005.79817253433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 551254.3780000102,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551237.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 567260.8961564419,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 567244.5043830094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 570223.4482306787,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 570197.968545216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 567677.6510554197,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 567670.1187335084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 348260.2193471283,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 348253.3439490445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 575896.4436387345,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 575863.5464733039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2678311.227011472,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2678203.448275865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1181289.1721106023,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 1181243.5929648248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3328067.676156497,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3327998.5765124545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4904.688707610327,
            "unit": "ns/iter",
            "extra": "iterations: 162304\ncpu: 4904.6006259858095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 22312.109490627925,
            "unit": "ns/iter",
            "extra": "iterations: 37026\ncpu: 22311.942959001728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18187.930544853552,
            "unit": "ns/iter",
            "extra": "iterations: 45425\ncpu: 18187.76224545949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 17636.341176471018,
            "unit": "ns/iter",
            "extra": "iterations: 46750\ncpu: 17636.36791443841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18354.50851885729,
            "unit": "ns/iter",
            "extra": "iterations: 44783\ncpu: 18354.283991693184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 55382.05423639066,
            "unit": "ns/iter",
            "extra": "iterations: 15119\ncpu: 55381.17600370396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 566966.1680000217,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566959.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 589020.6700542121,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 588991.937669377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 593642.8674863377,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 593644.193989068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 588576.7817327147,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 588552.1826729359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 344186.3470193424,
            "unit": "ns/iter",
            "extra": "iterations: 2533\ncpu: 344158.34978286596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 579899.8918918783,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 579891.8918918933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2821632.577844307,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2821395.20958084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1168498.0024906343,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 1168487.9202988776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5045.3089102468775,
            "unit": "ns/iter",
            "extra": "iterations: 159917\ncpu: 5045.060875329057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22154.858539298173,
            "unit": "ns/iter",
            "extra": "iterations: 37749\ncpu: 22153.206707462396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 17927.172316323748,
            "unit": "ns/iter",
            "extra": "iterations: 46699\ncpu: 17926.505920897664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18034.49681281708,
            "unit": "ns/iter",
            "extra": "iterations: 46436\ncpu: 18033.962873632623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18129.56030911276,
            "unit": "ns/iter",
            "extra": "iterations: 46585\ncpu: 18129.387141783845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 54585.23651398625,
            "unit": "ns/iter",
            "extra": "iterations: 15479\ncpu: 54584.19148523792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 570212.5290000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570204.099999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 589964.4743845667,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 589945.9747172287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 590126.2995330052,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 590110.2735156735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 586981.9430840486,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 586977.5645268015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 351304.3248204282,
            "unit": "ns/iter",
            "extra": "iterations: 2506\ncpu: 351287.5498802887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 584917.790247162,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 584907.4148296609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 306.0301995066402,
            "unit": "ns/iter",
            "extra": "iterations: 2288746\ncpu: 306.0283229331694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2013.9246014277512,
            "unit": "ns/iter",
            "extra": "iterations: 347553\ncpu: 2013.9302494871094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1602.887409899055,
            "unit": "ns/iter",
            "extra": "iterations: 437010\ncpu: 1602.8363195350148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1617.8789440643998,
            "unit": "ns/iter",
            "extra": "iterations: 431693\ncpu: 1617.8365180811236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1251.2104761905518,
            "unit": "ns/iter",
            "extra": "iterations: 559650\ncpu: 1251.1846689895503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 9847.92819631998,
            "unit": "ns/iter",
            "extra": "iterations: 71027\ncpu: 9847.643853745712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 25073.939874213058,
            "unit": "ns/iter",
            "extra": "iterations: 27825\ncpu: 25072.686433063358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 6735.1961873817745,
            "unit": "ns/iter",
            "extra": "iterations: 104023\ncpu: 6735.11050440766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 6672.323141889031,
            "unit": "ns/iter",
            "extra": "iterations: 104434\ncpu: 6672.069440986616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 6698.471507908531,
            "unit": "ns/iter",
            "extra": "iterations: 104257\ncpu: 6698.225538812751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 14033.740225088002,
            "unit": "ns/iter",
            "extra": "iterations: 49847\ncpu: 14033.59279394956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 12967.929926277457,
            "unit": "ns/iter",
            "extra": "iterations: 53986\ncpu: 12967.400807616652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2926.477215248174,
            "unit": "ns/iter",
            "extra": "iterations: 239217\ncpu: 2926.4086582475384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 14524.113025658487,
            "unit": "ns/iter",
            "extra": "iterations: 47821\ncpu: 14523.99155182868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 11599.421877327277,
            "unit": "ns/iter",
            "extra": "iterations: 60437\ncpu: 11599.306716084397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 11749.022934396693,
            "unit": "ns/iter",
            "extra": "iterations: 59692\ncpu: 11749.058500301699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12799.303706415456,
            "unit": "ns/iter",
            "extra": "iterations: 54635\ncpu: 12799.002470943606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29026.844091154704,
            "unit": "ns/iter",
            "extra": "iterations: 24091\ncpu: 29026.013864098542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 125875.43035455969,
            "unit": "ns/iter",
            "extra": "iterations: 5528\ncpu: 125873.20911722186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 107677.52018490141,
            "unit": "ns/iter",
            "extra": "iterations: 6490\ncpu: 107669.92295839784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 108424.77479435549,
            "unit": "ns/iter",
            "extra": "iterations: 6443\ncpu: 108418.00403538787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 108266.17853281173,
            "unit": "ns/iter",
            "extra": "iterations: 6475\ncpu: 108259.69111969073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 64552.71275514921,
            "unit": "ns/iter",
            "extra": "iterations: 10827\ncpu: 64552.89553892954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 111281.5813879172,
            "unit": "ns/iter",
            "extra": "iterations: 6254\ncpu: 111278.3018867913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2835.4460794420847,
            "unit": "ns/iter",
            "extra": "iterations: 247299\ncpu: 2835.410980230456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14294.936027416152,
            "unit": "ns/iter",
            "extra": "iterations: 49021\ncpu: 14294.424838334604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11371.257551824823,
            "unit": "ns/iter",
            "extra": "iterations: 61409\ncpu: 11371.132895829467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11684.336518258497,
            "unit": "ns/iter",
            "extra": "iterations: 59970\ncpu: 11684.378856094681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12665.546704943628,
            "unit": "ns/iter",
            "extra": "iterations: 55037\ncpu: 12665.265185239034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28643.5728024216,
            "unit": "ns/iter",
            "extra": "iterations: 24436\ncpu: 28643.660991979326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 124745.57458856331,
            "unit": "ns/iter",
            "extra": "iterations: 5651\ncpu: 124738.54185100006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 106931.64167686108,
            "unit": "ns/iter",
            "extra": "iterations: 6536\ncpu: 106927.96817625496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 107502.48834713246,
            "unit": "ns/iter",
            "extra": "iterations: 6522\ncpu: 107498.80404783959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 108564.19591457922,
            "unit": "ns/iter",
            "extra": "iterations: 6462\ncpu: 108562.79789538991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 63918.41986143371,
            "unit": "ns/iter",
            "extra": "iterations: 10825\ncpu: 63918.632794457364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 108645.22156619346,
            "unit": "ns/iter",
            "extra": "iterations: 6436\ncpu: 108640.2423865742 ns\nthreads: 1"
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
        "date": 1702412528704,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 748.4386748860621,
            "unit": "ns/iter",
            "extra": "iterations: 932750\ncpu: 748.4305548110426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11313.557549957837,
            "unit": "ns/iter",
            "extra": "iterations: 73762\ncpu: 11313.233101054744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25070.85456619073,
            "unit": "ns/iter",
            "extra": "iterations: 33321\ncpu: 25070.304012484623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39202.75782075392,
            "unit": "ns/iter",
            "extra": "iterations: 21769\ncpu: 39202.999678441825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49846.82846624133,
            "unit": "ns/iter",
            "extra": "iterations: 16026\ncpu: 49845.42618245351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51522.88510000176,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51523.240000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62172.4788853156,
            "unit": "ns/iter",
            "extra": "iterations: 13995\ncpu: 62171.13254733837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71689.25716183495,
            "unit": "ns/iter",
            "extra": "iterations: 12043\ncpu: 71687.49481026325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81869.92149883168,
            "unit": "ns/iter",
            "extra": "iterations: 10675\ncpu: 81867.62529274008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 624.7796380573275,
            "unit": "ns/iter",
            "extra": "iterations: 1125040\ncpu: 624.7699637346227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 522.6946903974989,
            "unit": "ns/iter",
            "extra": "iterations: 1340590\ncpu: 522.6897112465401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 522.8995985196328,
            "unit": "ns/iter",
            "extra": "iterations: 1338048\ncpu: 522.8832597933698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 523.9789331593124,
            "unit": "ns/iter",
            "extra": "iterations: 1340875\ncpu: 523.9484664864352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1025.1750753413266,
            "unit": "ns/iter",
            "extra": "iterations: 684551\ncpu: 1025.1541521376782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3642.7514831607223,
            "unit": "ns/iter",
            "extra": "iterations: 220138\ncpu: 3642.7141156910634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 16810.42175615598,
            "unit": "ns/iter",
            "extra": "iterations: 48777\ncpu: 16810.029317096167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 13497.269923689724,
            "unit": "ns/iter",
            "extra": "iterations: 60280\ncpu: 13496.615792966148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13405.835049177414,
            "unit": "ns/iter",
            "extra": "iterations: 60903\ncpu: 13405.54652480173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13123.32052661104,
            "unit": "ns/iter",
            "extra": "iterations: 62285\ncpu: 13123.24797302721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 39222.708441197065,
            "unit": "ns/iter",
            "extra": "iterations: 21632\ncpu: 39221.787167159724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 489101.5371716037,
            "unit": "ns/iter",
            "extra": "iterations: 1789\ncpu: 489091.72722191166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 402328.4307046238,
            "unit": "ns/iter",
            "extra": "iterations: 2143\ncpu: 402324.1717218867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 401539.0978564628,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 401532.57222740015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 405384.70574498567,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 405382.99859878543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 251442.43259558678,
            "unit": "ns/iter",
            "extra": "iterations: 3479\ncpu: 251438.60304685333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 400134.12840645807,
            "unit": "ns/iter",
            "extra": "iterations: 2165\ncpu: 400128.5912240196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2015771.6143790567,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2015585.6209150257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 796722.0161701838,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 796717.5319148927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2545749.199446025,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2545435.1800554027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3553.96857874768,
            "unit": "ns/iter",
            "extra": "iterations: 218610\ncpu: 3553.8923196559967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16802.452798237868,
            "unit": "ns/iter",
            "extra": "iterations: 49013\ncpu: 16802.14432905556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13727.984126984033,
            "unit": "ns/iter",
            "extra": "iterations: 59913\ncpu: 13727.972226394988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13542.932704278704,
            "unit": "ns/iter",
            "extra": "iterations: 61044\ncpu: 13542.770788283791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13408.28459144903,
            "unit": "ns/iter",
            "extra": "iterations: 61706\ncpu: 13408.300651476304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37001.70270150286,
            "unit": "ns/iter",
            "extra": "iterations: 22506\ncpu: 37000.98640362572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 507389.4726744061,
            "unit": "ns/iter",
            "extra": "iterations: 1720\ncpu: 507377.84883721196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 411668.6183529322,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 411672.8470588234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 406735.49067165557,
            "unit": "ns/iter",
            "extra": "iterations: 2144\ncpu: 406707.9757462694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 409867.06466727785,
            "unit": "ns/iter",
            "extra": "iterations: 2134\ncpu: 409857.77881911956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 243181.31193946543,
            "unit": "ns/iter",
            "extra": "iterations: 3568\ncpu: 243174.32735425825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 405028.43393600575,
            "unit": "ns/iter",
            "extra": "iterations: 2157\ncpu: 405015.4381084826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2019330.4713656576,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2019129.5154184992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 799353.5427350547,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 799324.7863247906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3524.7326307987255,
            "unit": "ns/iter",
            "extra": "iterations: 226608\ncpu: 3524.759055284898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16139.513368879545,
            "unit": "ns/iter",
            "extra": "iterations: 51014\ncpu: 16139.167679460554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13609.202130115214,
            "unit": "ns/iter",
            "extra": "iterations: 60654\ncpu: 13609.04639430201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13024.667638345145,
            "unit": "ns/iter",
            "extra": "iterations: 63121\ncpu: 13024.253418038401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13242.762159127096,
            "unit": "ns/iter",
            "extra": "iterations: 62340\ncpu: 13242.637151106877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37390.19096045126,
            "unit": "ns/iter",
            "extra": "iterations: 14160\ncpu: 37388.61581920897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 488125.50255829375,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 488124.2751563421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 401250.2894248569,
            "unit": "ns/iter",
            "extra": "iterations: 2156\ncpu: 401237.8942486072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 399326.3926919462,
            "unit": "ns/iter",
            "extra": "iterations: 2162\ncpu: 399311.2858464399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 408040.497697973,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 408035.54327808414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 246250.04391892196,
            "unit": "ns/iter",
            "extra": "iterations: 3552\ncpu: 246242.82094594548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 398943.1691109092,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 398946.8377635206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 311.0754161218769,
            "unit": "ns/iter",
            "extra": "iterations: 2256971\ncpu: 311.0626587581302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1599.2107722007802,
            "unit": "ns/iter",
            "extra": "iterations: 436661\ncpu: 1599.2252571216607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1274.1021981851618,
            "unit": "ns/iter",
            "extra": "iterations: 548043\ncpu: 1274.0680931970735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1322.3121730372216,
            "unit": "ns/iter",
            "extra": "iterations: 531215\ncpu: 1322.3000103536194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1073.8586839167692,
            "unit": "ns/iter",
            "extra": "iterations: 652056\ncpu: 1073.8267878832542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7024.3160729693955,
            "unit": "ns/iter",
            "extra": "iterations: 100809\ncpu: 7024.116894324961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18849.535069970418,
            "unit": "ns/iter",
            "extra": "iterations: 35586\ncpu: 18849.412690383895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4786.963214487923,
            "unit": "ns/iter",
            "extra": "iterations: 146661\ncpu: 4786.821309005195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4744.672577739905,
            "unit": "ns/iter",
            "extra": "iterations: 147125\ncpu: 4744.504333050077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4753.29062119359,
            "unit": "ns/iter",
            "extra": "iterations: 147780\ncpu: 4753.327919880836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10004.835549524903,
            "unit": "ns/iter",
            "extra": "iterations: 70015\ncpu: 10004.564736127844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9004.69456698427,
            "unit": "ns/iter",
            "extra": "iterations: 77526\ncpu: 9004.20117122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2276.028446131063,
            "unit": "ns/iter",
            "extra": "iterations: 304646\ncpu: 2275.953401653088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11431.570087518116,
            "unit": "ns/iter",
            "extra": "iterations: 61359\ncpu: 11431.175540670363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9125.397510514182,
            "unit": "ns/iter",
            "extra": "iterations: 76803\ncpu: 9125.35708240566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9084.134001740173,
            "unit": "ns/iter",
            "extra": "iterations: 76999\ncpu: 9083.75433447182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9773.536066934059,
            "unit": "ns/iter",
            "extra": "iterations: 72310\ncpu: 9773.371594523702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 23857.296858514193,
            "unit": "ns/iter",
            "extra": "iterations: 29381\ncpu: 23856.386780572455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99322.2979812286,
            "unit": "ns/iter",
            "extra": "iterations: 7034\ncpu: 99317.08842763712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86217.9472713851,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 86217.36725663718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85034.25206812903,
            "unit": "ns/iter",
            "extra": "iterations: 8220\ncpu: 85031.77615571769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85543.5932410895,
            "unit": "ns/iter",
            "extra": "iterations: 8167\ncpu: 85543.47985796595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53094.880656882786,
            "unit": "ns/iter",
            "extra": "iterations: 13214\ncpu: 53092.86362948391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85073.2771421584,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85070.15579357276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2219.827344156566,
            "unit": "ns/iter",
            "extra": "iterations: 315124\ncpu: 2219.7928434521127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11124.209498404036,
            "unit": "ns/iter",
            "extra": "iterations: 62979\ncpu: 11123.80793597852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 8950.333769247673,
            "unit": "ns/iter",
            "extra": "iterations: 77997\ncpu: 8950.419887944247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 8967.110479118795,
            "unit": "ns/iter",
            "extra": "iterations: 78060\ncpu: 8966.793492185472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9557.978160041679,
            "unit": "ns/iter",
            "extra": "iterations: 73306\ncpu: 9557.846560990945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 22697.647066462432,
            "unit": "ns/iter",
            "extra": "iterations: 30799\ncpu: 22697.107048929927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98886.92566421119,
            "unit": "ns/iter",
            "extra": "iterations: 7076\ncpu: 98882.51837196156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83910.10263789385,
            "unit": "ns/iter",
            "extra": "iterations: 8340\ncpu: 83909.54436450897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82528.98041285381,
            "unit": "ns/iter",
            "extra": "iterations: 8526\ncpu: 82525.60403471741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83105.3135532855,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 83102.72964633291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53494.3065994476,
            "unit": "ns/iter",
            "extra": "iterations: 13092\ncpu: 53493.476932477846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83772.5845583822,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 83769.6187402903 ns\nthreads: 1"
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
        "date": 1702416005039,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 748.2768852225979,
            "unit": "ns/iter",
            "extra": "iterations: 937197\ncpu: 748.2387374266029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11212.395220836557,
            "unit": "ns/iter",
            "extra": "iterations: 73946\ncpu: 11212.100722148594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25294.362384906806,
            "unit": "ns/iter",
            "extra": "iterations: 33125\ncpu: 25293.089811320748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40405.99238337227,
            "unit": "ns/iter",
            "extra": "iterations: 22057\ncpu: 40403.69043840958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49073.98991659449,
            "unit": "ns/iter",
            "extra": "iterations: 16066\ncpu: 49072.28930661022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50386.70100000218,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50383.39000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60432.91060000229,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60432.210000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69914.49174282687,
            "unit": "ns/iter",
            "extra": "iterations: 12474\ncpu: 69912.28956228957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80443.25281981158,
            "unit": "ns/iter",
            "extra": "iterations: 10905\ncpu: 80441.16460339299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 624.5762072544775,
            "unit": "ns/iter",
            "extra": "iterations: 1118509\ncpu: 624.5716395666017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 528.1332016581653,
            "unit": "ns/iter",
            "extra": "iterations: 1322446\ncpu: 528.1286343638982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 527.8918598311461,
            "unit": "ns/iter",
            "extra": "iterations: 1326029\ncpu: 527.8921501716775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 527.6646005364071,
            "unit": "ns/iter",
            "extra": "iterations: 1322924\ncpu: 527.6649301093636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1005.4605298521217,
            "unit": "ns/iter",
            "extra": "iterations: 695779\ncpu: 1005.4228425980089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3662.0114286718617,
            "unit": "ns/iter",
            "extra": "iterations: 170536\ncpu: 3662.013885631185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15728.027703533297,
            "unit": "ns/iter",
            "extra": "iterations: 51257\ncpu: 15727.522094543163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12782.684907986622,
            "unit": "ns/iter",
            "extra": "iterations: 64067\ncpu: 12782.60258791576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13408.954139398009,
            "unit": "ns/iter",
            "extra": "iterations: 61120\ncpu: 13408.483311518328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13761.593600502203,
            "unit": "ns/iter",
            "extra": "iterations: 63755\ncpu: 13761.599874519667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 38614.80160014809,
            "unit": "ns/iter",
            "extra": "iterations: 21623\ncpu: 38614.0406049115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 487054.0973303738,
            "unit": "ns/iter",
            "extra": "iterations: 1798\ncpu: 487047.94215795264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 400759.62598243426,
            "unit": "ns/iter",
            "extra": "iterations: 2163\ncpu: 400757.51271382347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 404359.27357176295,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 404355.92196934426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 404040.07642123493,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 404040.21435228246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 250382.60623391025,
            "unit": "ns/iter",
            "extra": "iterations: 3497\ncpu: 250378.29568201362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 398580.8020073064,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 398577.7828467142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1999062.8177873278,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 1998701.952277656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 826676.8407698888,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 826654.5931758529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2572207.3296703272,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2571913.4615384666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3592.11083702466,
            "unit": "ns/iter",
            "extra": "iterations: 226206\ncpu: 3591.942300381071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16825.582752279235,
            "unit": "ns/iter",
            "extra": "iterations: 49479\ncpu: 16825.034863275294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13673.346276078217,
            "unit": "ns/iter",
            "extra": "iterations: 60729\ncpu: 13672.797180918533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13418.463872435654,
            "unit": "ns/iter",
            "extra": "iterations: 61961\ncpu: 13416.645954713369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13274.893149366633,
            "unit": "ns/iter",
            "extra": "iterations: 62330\ncpu: 13274.68153377192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37131.73955828757,
            "unit": "ns/iter",
            "extra": "iterations: 22458\ncpu: 37131.3251402619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 508822.00699299946,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 508775.64102564385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 414050.6609524036,
            "unit": "ns/iter",
            "extra": "iterations: 2100\ncpu: 414018.85714285704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 410109.5861423144,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 410107.63108614256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 408536.2301255169,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 408530.03254300123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 243260.05518580618,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 243260.2052135334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 406178.31420638895,
            "unit": "ns/iter",
            "extra": "iterations: 2161\ncpu: 406172.51272559137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2017216.112334767,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2017159.251101332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 790743.2523050974,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 790664.040234702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3441.6478201607083,
            "unit": "ns/iter",
            "extra": "iterations: 231095\ncpu: 3441.600207706782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16315.069570034933,
            "unit": "ns/iter",
            "extra": "iterations: 50539\ncpu: 16314.784621777126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13701.433695130709,
            "unit": "ns/iter",
            "extra": "iterations: 60531\ncpu: 13701.394326873798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13122.304338859562,
            "unit": "ns/iter",
            "extra": "iterations: 63035\ncpu: 13122.038550011972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13307.921286911345,
            "unit": "ns/iter",
            "extra": "iterations: 61667\ncpu: 13307.88266009372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37693.89048245848,
            "unit": "ns/iter",
            "extra": "iterations: 22033\ncpu: 37693.45981028461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 497874.3917233305,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 497870.0113378692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 400521.48062728555,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 400514.20664206654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 398781.84615383775,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 398776.46520146704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 399683.3853635919,
            "unit": "ns/iter",
            "extra": "iterations: 2159\ncpu: 399678.230662341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 244906.61366180988,
            "unit": "ns/iter",
            "extra": "iterations: 3572\ncpu: 244896.44456886876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 395456.8280459819,
            "unit": "ns/iter",
            "extra": "iterations: 2175\ncpu: 395454.6206896554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 310.87498275061813,
            "unit": "ns/iter",
            "extra": "iterations: 2253705\ncpu: 310.87333967844324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1587.809461142881,
            "unit": "ns/iter",
            "extra": "iterations: 441490\ncpu: 1587.800856191535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1240.3326296214923,
            "unit": "ns/iter",
            "extra": "iterations: 564625\ncpu: 1240.3136595085195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1318.124959883127,
            "unit": "ns/iter",
            "extra": "iterations: 560860\ncpu: 1318.1307278108657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1086.641839327475,
            "unit": "ns/iter",
            "extra": "iterations: 638342\ncpu: 1086.6250379890364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6784.671023413315,
            "unit": "ns/iter",
            "extra": "iterations: 102676\ncpu: 6784.5806225408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20202.802991441135,
            "unit": "ns/iter",
            "extra": "iterations: 34699\ncpu: 20202.219084123422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4825.731759286709,
            "unit": "ns/iter",
            "extra": "iterations: 145019\ncpu: 4825.7049076328685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4761.60392213401,
            "unit": "ns/iter",
            "extra": "iterations: 145686\ncpu: 4761.3772085169985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4827.91562381369,
            "unit": "ns/iter",
            "extra": "iterations: 144875\ncpu: 4827.769456427984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10036.322381341542,
            "unit": "ns/iter",
            "extra": "iterations: 69759\ncpu: 10035.882108401836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8999.30133977336,
            "unit": "ns/iter",
            "extra": "iterations: 77849\ncpu: 8999.054580020258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2274.5166204895686,
            "unit": "ns/iter",
            "extra": "iterations: 307512\ncpu: 2274.4156325606623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11553.880490262252,
            "unit": "ns/iter",
            "extra": "iterations: 60539\ncpu: 11553.586943953445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9479.25885953386,
            "unit": "ns/iter",
            "extra": "iterations: 73847\ncpu: 9478.993053204647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9363.758744779603,
            "unit": "ns/iter",
            "extra": "iterations: 74473\ncpu: 9363.232312381568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9952.354014547107,
            "unit": "ns/iter",
            "extra": "iterations: 70257\ncpu: 9952.306531733517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24170.591712496098,
            "unit": "ns/iter",
            "extra": "iterations: 28911\ncpu: 24169.873058697383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100275.84670692837,
            "unit": "ns/iter",
            "extra": "iterations: 6954\ncpu: 100272.9508196718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86253.95334810257,
            "unit": "ns/iter",
            "extra": "iterations: 8124\ncpu: 86247.18119153196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84854.98930481188,
            "unit": "ns/iter",
            "extra": "iterations: 8228\ncpu: 84851.49489547893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85312.02080038894,
            "unit": "ns/iter",
            "extra": "iterations: 8221\ncpu: 85311.61659165677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53075.04127466088,
            "unit": "ns/iter",
            "extra": "iterations: 13180\ncpu: 53073.254931714786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85087.83938699312,
            "unit": "ns/iter",
            "extra": "iterations: 8287\ncpu: 85085.39881742459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2218.5290265638187,
            "unit": "ns/iter",
            "extra": "iterations: 316107\ncpu: 2218.410854552432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11447.175233644635,
            "unit": "ns/iter",
            "extra": "iterations: 61204\ncpu: 11446.773086726469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9012.015718052811,
            "unit": "ns/iter",
            "extra": "iterations: 77745\ncpu: 9011.762814328738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9062.7157215204,
            "unit": "ns/iter",
            "extra": "iterations: 77607\ncpu: 9062.378393701636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9543.562347687774,
            "unit": "ns/iter",
            "extra": "iterations: 73451\ncpu: 9543.518808457322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23094.535449176255,
            "unit": "ns/iter",
            "extra": "iterations: 30311\ncpu: 23092.85407937758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98496.36389201572,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 98493.39145106869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82998.20603550354,
            "unit": "ns/iter",
            "extra": "iterations: 8450\ncpu: 82995.86982248546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82829.73555476945,
            "unit": "ns/iter",
            "extra": "iterations: 8463\ncpu: 82826.20820040035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83410.49148302832,
            "unit": "ns/iter",
            "extra": "iterations: 8395\ncpu: 83410.08933889211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53810.35678546603,
            "unit": "ns/iter",
            "extra": "iterations: 12991\ncpu: 53807.0510353321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84327.13570567216,
            "unit": "ns/iter",
            "extra": "iterations: 8290\ncpu: 84324.74065138758 ns\nthreads: 1"
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
        "date": 1702418337736,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 748.9135288795841,
            "unit": "ns/iter",
            "extra": "iterations: 933965\ncpu: 748.9078284518156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11506.197559727592,
            "unit": "ns/iter",
            "extra": "iterations: 72287\ncpu: 11506.10483212749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25374.03299323804,
            "unit": "ns/iter",
            "extra": "iterations: 33128\ncpu: 25373.70200434678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40655.14062125033,
            "unit": "ns/iter",
            "extra": "iterations: 20829\ncpu: 40650.92419223198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48972.6245701782,
            "unit": "ns/iter",
            "extra": "iterations: 15995\ncpu: 48971.50359487335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50834.20039999851,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50834.28000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61476.58504325368,
            "unit": "ns/iter",
            "extra": "iterations: 13987\ncpu: 61475.15550153709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70596.74526678087,
            "unit": "ns/iter",
            "extra": "iterations: 12201\ncpu: 70594.70535202032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81259.41996668988,
            "unit": "ns/iter",
            "extra": "iterations: 10808\ncpu: 81253.43264248704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 657.6160167903795,
            "unit": "ns/iter",
            "extra": "iterations: 1079667\ncpu: 657.5478365088491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 519.2412681450222,
            "unit": "ns/iter",
            "extra": "iterations: 1343758\ncpu: 519.2240715962253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 520.5772962447728,
            "unit": "ns/iter",
            "extra": "iterations: 1346579\ncpu: 520.5780722853988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 523.7172694339062,
            "unit": "ns/iter",
            "extra": "iterations: 1343194\ncpu: 523.6980659532428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1021.2538081472543,
            "unit": "ns/iter",
            "extra": "iterations: 682878\ncpu: 1021.202323108958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3455.837190065278,
            "unit": "ns/iter",
            "extra": "iterations: 239365\ncpu: 3455.584149729491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 16400.42437873181,
            "unit": "ns/iter",
            "extra": "iterations: 49576\ncpu: 16399.626835565592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 13656.623654124061,
            "unit": "ns/iter",
            "extra": "iterations: 60091\ncpu: 13655.579038458358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13281.188202891619,
            "unit": "ns/iter",
            "extra": "iterations: 60998\ncpu: 13280.553460769233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13508.75687218631,
            "unit": "ns/iter",
            "extra": "iterations: 60643\ncpu: 13507.796448064904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 39252.958188805474,
            "unit": "ns/iter",
            "extra": "iterations: 21334\ncpu: 39251.11090278419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 496909.64249578136,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 496705.845980888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 401682.9018885303,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 401659.9263012439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 399139.72621807875,
            "unit": "ns/iter",
            "extra": "iterations: 2155\ncpu: 399136.8445475639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 400792.5257540723,
            "unit": "ns/iter",
            "extra": "iterations: 2155\ncpu: 400774.66357308545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 247592.73989257118,
            "unit": "ns/iter",
            "extra": "iterations: 3537\ncpu: 247579.5024031669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 399223.5816843009,
            "unit": "ns/iter",
            "extra": "iterations: 2173\ncpu: 399204.50989415526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2010778.7314410608,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2010712.2270742303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 808526.8437768383,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 808487.7253218862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2549238.659279785,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2549057.3407202144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3541.6538282348047,
            "unit": "ns/iter",
            "extra": "iterations: 214642\ncpu: 3541.5799330978953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16253.955340454888,
            "unit": "ns/iter",
            "extra": "iterations: 50829\ncpu: 16252.176906883833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13703.492226347891,
            "unit": "ns/iter",
            "extra": "iterations: 60332\ncpu: 13700.823775111023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13514.906282049573,
            "unit": "ns/iter",
            "extra": "iterations: 61429\ncpu: 13514.68687427766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13430.474091537344,
            "unit": "ns/iter",
            "extra": "iterations: 61505\ncpu: 13430.160149581365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 38566.57235930311,
            "unit": "ns/iter",
            "extra": "iterations: 21642\ncpu: 38565.668607337284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 502819.42461006244,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 502814.67359907477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 413421.55131827365,
            "unit": "ns/iter",
            "extra": "iterations: 2124\ncpu: 413412.4293785336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 407004.90144116996,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 407000.6043700596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 406595.9939138628,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 406569.52247190883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 243794.0289082285,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 243786.50014033055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 406947.00783407624,
            "unit": "ns/iter",
            "extra": "iterations: 2170\ncpu: 406946.5898617487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2024883.6807095178,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2024630.5986696202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 783922.5554628662,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 783904.5037531257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3643.3195570171056,
            "unit": "ns/iter",
            "extra": "iterations: 219241\ncpu: 3643.1876336998976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16807.067642430044,
            "unit": "ns/iter",
            "extra": "iterations: 48919\ncpu: 16807.05656288977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13474.404787365467,
            "unit": "ns/iter",
            "extra": "iterations: 60785\ncpu: 13473.61026569061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13336.675549177142,
            "unit": "ns/iter",
            "extra": "iterations: 61319\ncpu: 13336.222051892473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13473.869845339514,
            "unit": "ns/iter",
            "extra": "iterations: 60843\ncpu: 13473.341222490655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37313.694805194296,
            "unit": "ns/iter",
            "extra": "iterations: 22638\ncpu: 37313.48617369022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 500316.9499999963,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 500301.2068965543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 407923.6193367694,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 407910.0887435792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 403892.4316081355,
            "unit": "ns/iter",
            "extra": "iterations: 2164\ncpu: 403890.34195933485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 404755.9715086504,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 404733.0219523594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 246203.3035170376,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 246197.92301301667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 401673.1317117902,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 401661.2207434619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 303.9777921012741,
            "unit": "ns/iter",
            "extra": "iterations: 2300803\ncpu: 303.97687242236617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1592.031070334454,
            "unit": "ns/iter",
            "extra": "iterations: 439358\ncpu: 1591.9860341680328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1308.4933192261572,
            "unit": "ns/iter",
            "extra": "iterations: 562360\ncpu: 1308.452059179178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1334.883692122468,
            "unit": "ns/iter",
            "extra": "iterations: 524728\ncpu: 1334.8441478251557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1078.5328662666993,
            "unit": "ns/iter",
            "extra": "iterations: 650728\ncpu: 1078.529124303853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6911.914708961457,
            "unit": "ns/iter",
            "extra": "iterations: 102203\ncpu: 6911.652299834606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20136.90892070269,
            "unit": "ns/iter",
            "extra": "iterations: 34717\ncpu: 20136.512371460492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4837.710317974385,
            "unit": "ns/iter",
            "extra": "iterations: 138942\ncpu: 4837.560996674897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4797.239270525894,
            "unit": "ns/iter",
            "extra": "iterations: 146023\ncpu: 4797.069639714241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4806.655846345752,
            "unit": "ns/iter",
            "extra": "iterations: 145313\ncpu: 4806.585783790784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10146.410402947206,
            "unit": "ns/iter",
            "extra": "iterations: 68942\ncpu: 10146.243218937745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9112.44562423722,
            "unit": "ns/iter",
            "extra": "iterations: 77038\ncpu: 9112.187491887082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2299.8720931756457,
            "unit": "ns/iter",
            "extra": "iterations: 305230\ncpu: 2299.832257641807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11472.848415587243,
            "unit": "ns/iter",
            "extra": "iterations: 61253\ncpu: 11472.806229899066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9177.66188400907,
            "unit": "ns/iter",
            "extra": "iterations: 76178\ncpu: 9177.317598256821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9129.006195013113,
            "unit": "ns/iter",
            "extra": "iterations: 76836\ncpu: 9128.965589046758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9723.983266044863,
            "unit": "ns/iter",
            "extra": "iterations: 71830\ncpu: 9723.733815954407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 23712.762494034454,
            "unit": "ns/iter",
            "extra": "iterations: 29334\ncpu: 23712.25881229957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99441.52103605797,
            "unit": "ns/iter",
            "extra": "iterations: 6988\ncpu: 99441.17057813515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86126.37013066115,
            "unit": "ns/iter",
            "extra": "iterations: 8189\ncpu: 86122.72560752205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85165.48054020714,
            "unit": "ns/iter",
            "extra": "iterations: 8145\ncpu: 85164.1988950286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84879.8240426528,
            "unit": "ns/iter",
            "extra": "iterations: 8252\ncpu: 84877.20552593336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53430.92115707396,
            "unit": "ns/iter",
            "extra": "iterations: 13102\ncpu: 53429.7817127163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84461.66216545406,
            "unit": "ns/iter",
            "extra": "iterations: 8220\ncpu: 84461.33819951343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2238.4787347758133,
            "unit": "ns/iter",
            "extra": "iterations: 313399\ncpu: 2238.4066318016125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11167.916439773959,
            "unit": "ns/iter",
            "extra": "iterations: 62805\ncpu: 11167.779635379398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9021.89829441023,
            "unit": "ns/iter",
            "extra": "iterations: 77803\ncpu: 9021.661118465914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9107.621523594997,
            "unit": "ns/iter",
            "extra": "iterations: 77199\ncpu: 9107.575227658279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9572.2693476764,
            "unit": "ns/iter",
            "extra": "iterations: 71391\ncpu: 9572.22058802912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 22696.31725657915,
            "unit": "ns/iter",
            "extra": "iterations: 30852\ncpu: 22695.72475042144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97853.28317469484,
            "unit": "ns/iter",
            "extra": "iterations: 7144\ncpu: 97850.41993281186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82839.87692307944,
            "unit": "ns/iter",
            "extra": "iterations: 8450\ncpu: 82835.44378698291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82058.61423220809,
            "unit": "ns/iter",
            "extra": "iterations: 8544\ncpu: 82058.3099250934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82650.31588277037,
            "unit": "ns/iter",
            "extra": "iterations: 8462\ncpu: 82649.91727723995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53303.10852359014,
            "unit": "ns/iter",
            "extra": "iterations: 13140\ncpu: 53301.240487062176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83879.44775940041,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 83876.79127725867 ns\nthreads: 1"
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
        "date": 1702421908822,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 745.7839951428991,
            "unit": "ns/iter",
            "extra": "iterations: 937178\ncpu: 745.7898072724712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11274.043045819448,
            "unit": "ns/iter",
            "extra": "iterations: 73898\ncpu: 11273.858561801402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25143.714027148148,
            "unit": "ns/iter",
            "extra": "iterations: 33150\ncpu: 25142.464555052782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39679.09729453251,
            "unit": "ns/iter",
            "extra": "iterations: 21512\ncpu: 39677.714763852746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50026.62275222489,
            "unit": "ns/iter",
            "extra": "iterations: 15849\ncpu: 50024.310682061965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51906.23799999798,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51906.73999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62626.23176247084,
            "unit": "ns/iter",
            "extra": "iterations: 13708\ncpu: 62623.45345783485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72148.00124316523,
            "unit": "ns/iter",
            "extra": "iterations: 12066\ncpu: 72145.06050058015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82082.27454890677,
            "unit": "ns/iter",
            "extra": "iterations: 10530\ncpu: 82078.91737891735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 630.7767120457003,
            "unit": "ns/iter",
            "extra": "iterations: 1108367\ncpu: 630.7829446383723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 527.3514261234292,
            "unit": "ns/iter",
            "extra": "iterations: 1330530\ncpu: 527.3412098938022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 518.4615381759178,
            "unit": "ns/iter",
            "extra": "iterations: 1346426\ncpu: 518.459685121945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 521.4913575863993,
            "unit": "ns/iter",
            "extra": "iterations: 1346441\ncpu: 521.4956318175099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 989.7557692361835,
            "unit": "ns/iter",
            "extra": "iterations: 707806\ncpu: 989.7310845062074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3476.5877238716707,
            "unit": "ns/iter",
            "extra": "iterations: 230154\ncpu: 3476.4944341614723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 16515.450906026697,
            "unit": "ns/iter",
            "extra": "iterations: 49833\ncpu: 16514.85963116812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 13757.577880308561,
            "unit": "ns/iter",
            "extra": "iterations: 59386\ncpu: 13757.198666352351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13139.964018062874,
            "unit": "ns/iter",
            "extra": "iterations: 62448\ncpu: 13139.66500128106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13388.354414731248,
            "unit": "ns/iter",
            "extra": "iterations: 61476\ncpu: 13387.987181989683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 38570.20963565865,
            "unit": "ns/iter",
            "extra": "iterations: 21628\ncpu: 38568.02755687072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 490604.40589569934,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 490591.156462586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 400213.6093457821,
            "unit": "ns/iter",
            "extra": "iterations: 2140\ncpu: 400207.336448598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 404933.7613526609,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 404929.3719806774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 404518.8487668568,
            "unit": "ns/iter",
            "extra": "iterations: 2149\ncpu: 404516.4262447647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 250962.48815976747,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 250959.0299572035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 399572.9440880083,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 399576.489459213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2014923.9956331893,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2014771.8340611367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 798950.6188455044,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 798935.8234295424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2564972.8614958473,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2564754.016620492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3576.962657219009,
            "unit": "ns/iter",
            "extra": "iterations: 225800\ncpu: 3576.8290522586376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16702.348090382377,
            "unit": "ns/iter",
            "extra": "iterations: 50010\ncpu: 16702.15956808644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13695.855559259333,
            "unit": "ns/iter",
            "extra": "iterations: 59990\ncpu: 13695.719286547785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13438.22870639197,
            "unit": "ns/iter",
            "extra": "iterations: 60969\ncpu: 13438.0570453837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13428.444127577468,
            "unit": "ns/iter",
            "extra": "iterations: 61014\ncpu: 13428.560658209642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37608.29639326416,
            "unit": "ns/iter",
            "extra": "iterations: 22153\ncpu: 37608.32844310044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 512931.9214076179,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 512924.0469208213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 410373.6865321523,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 410365.6030032873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 411065.1694273642,
            "unit": "ns/iter",
            "extra": "iterations: 2113\ncpu: 411036.8670137246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 418874.9663865418,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 418868.4873949564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 246053.1778401042,
            "unit": "ns/iter",
            "extra": "iterations: 3565\ncpu: 246046.39551192132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 406920.694986076,
            "unit": "ns/iter",
            "extra": "iterations: 2154\ncpu: 406903.11049210944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2035427.412026729,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2035182.4053451985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 797977.474978764,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 797938.9312977043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3644.275085255767,
            "unit": "ns/iter",
            "extra": "iterations: 218754\ncpu: 3644.3091326329827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15862.678723691539,
            "unit": "ns/iter",
            "extra": "iterations: 51837\ncpu: 15862.017477863319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12763.740879629522,
            "unit": "ns/iter",
            "extra": "iterations: 64800\ncpu: 12763.192901234572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13304.264622164072,
            "unit": "ns/iter",
            "extra": "iterations: 62183\ncpu: 13303.579756525049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13121.057833240888,
            "unit": "ns/iter",
            "extra": "iterations: 62905\ncpu: 13120.526190286897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37718.11739758186,
            "unit": "ns/iter",
            "extra": "iterations: 22164\ncpu: 37716.4636347229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 486118.32168606383,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 486097.7814753187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 399695.2236421665,
            "unit": "ns/iter",
            "extra": "iterations: 2191\ncpu: 399681.69785485935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 401810.57371795,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 401795.3296703304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 399226.26856093126,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 399213.47387717734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 246620.73018974098,
            "unit": "ns/iter",
            "extra": "iterations: 3584\ncpu: 246613.30915178423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 399705.7342177366,
            "unit": "ns/iter",
            "extra": "iterations: 2186\ncpu: 399693.41262580035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 306.2973947285737,
            "unit": "ns/iter",
            "extra": "iterations: 2286019\ncpu: 306.2874805502516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1564.194631307216,
            "unit": "ns/iter",
            "extra": "iterations: 447744\ncpu: 1564.208118925106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1273.278140728342,
            "unit": "ns/iter",
            "extra": "iterations: 547978\ncpu: 1273.2781243042652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1324.6564786090426,
            "unit": "ns/iter",
            "extra": "iterations: 528331\ncpu: 1324.628310661307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1052.7882148234366,
            "unit": "ns/iter",
            "extra": "iterations: 665514\ncpu: 1052.7423915950735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6828.548661574656,
            "unit": "ns/iter",
            "extra": "iterations: 102247\ncpu: 6828.3333496337655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19930.76072673104,
            "unit": "ns/iter",
            "extra": "iterations: 35006\ncpu: 19930.360509627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4755.698853603576,
            "unit": "ns/iter",
            "extra": "iterations: 147244\ncpu: 4755.51261851079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4780.731399877343,
            "unit": "ns/iter",
            "extra": "iterations: 146370\ncpu: 4780.5205984832855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4759.581801845878,
            "unit": "ns/iter",
            "extra": "iterations: 146916\ncpu: 4759.51496093006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10132.913082411565,
            "unit": "ns/iter",
            "extra": "iterations: 69238\ncpu: 10132.565932002635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9094.44282563566,
            "unit": "ns/iter",
            "extra": "iterations: 77080\ncpu: 9094.411001556868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2263.3113579767873,
            "unit": "ns/iter",
            "extra": "iterations: 309210\ncpu: 2263.261537466457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11412.142157020433,
            "unit": "ns/iter",
            "extra": "iterations: 61622\ncpu: 11411.794488981011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9314.847884369481,
            "unit": "ns/iter",
            "extra": "iterations: 75344\ncpu: 9314.725791038449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9154.95123861164,
            "unit": "ns/iter",
            "extra": "iterations: 76618\ncpu: 9154.712991725268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9758.586883094926,
            "unit": "ns/iter",
            "extra": "iterations: 71648\ncpu: 9758.667373827659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 23847.63285205812,
            "unit": "ns/iter",
            "extra": "iterations: 29228\ncpu: 23846.520459833162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99484.24681213989,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99485.1232643816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85393.67038217369,
            "unit": "ns/iter",
            "extra": "iterations: 8164\ncpu: 85392.20970112683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84443.53599126596,
            "unit": "ns/iter",
            "extra": "iterations: 8252\ncpu: 84441.5535627724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84890.66282175343,
            "unit": "ns/iter",
            "extra": "iterations: 8236\ncpu: 84890.14084507126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53044.59021985929,
            "unit": "ns/iter",
            "extra": "iterations: 13190\ncpu: 53041.10689916528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84998.12584869545,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 84999.10281280351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2230.683742925859,
            "unit": "ns/iter",
            "extra": "iterations: 313808\ncpu: 2230.6544128894056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11180.544825160167,
            "unit": "ns/iter",
            "extra": "iterations: 62543\ncpu: 11180.387893129655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 8917.001627753467,
            "unit": "ns/iter",
            "extra": "iterations: 78636\ncpu: 8917.088865150723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 8969.40997783443,
            "unit": "ns/iter",
            "extra": "iterations: 78053\ncpu: 8969.026174522449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9395.655160358869,
            "unit": "ns/iter",
            "extra": "iterations: 74365\ncpu: 9395.737241982246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23016.04101588117,
            "unit": "ns/iter",
            "extra": "iterations: 30476\ncpu: 23015.241501509037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97623.09436855823,
            "unit": "ns/iter",
            "extra": "iterations: 7174\ncpu: 97622.58154446694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83069.48460715904,
            "unit": "ns/iter",
            "extra": "iterations: 8413\ncpu: 83069.07167478955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83087.36023739177,
            "unit": "ns/iter",
            "extra": "iterations: 8425\ncpu: 83084.97329376891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83636.17360357754,
            "unit": "ns/iter",
            "extra": "iterations: 8289\ncpu: 83635.20328145777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53220.816102397104,
            "unit": "ns/iter",
            "extra": "iterations: 13203\ncpu: 53219.52586533307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84356.50227763919,
            "unit": "ns/iter",
            "extra": "iterations: 8342\ncpu: 84355.8379285541 ns\nthreads: 1"
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
        "date": 1702422466858,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 761.8111253936266,
            "unit": "ns/iter",
            "extra": "iterations: 918763\ncpu: 761.7794795828739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11150.009210880185,
            "unit": "ns/iter",
            "extra": "iterations: 74260\ncpu: 11149.636412604363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24980.64951321236,
            "unit": "ns/iter",
            "extra": "iterations: 33793\ncpu: 24979.415855354655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39344.09220892658,
            "unit": "ns/iter",
            "extra": "iterations: 20562\ncpu: 39343.80410465909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49277.323600223404,
            "unit": "ns/iter",
            "extra": "iterations: 16199\ncpu: 49274.70214210756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50951.3716000015,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50950.61999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61322.117899999284,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61317.100000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71638.78643765734,
            "unit": "ns/iter",
            "extra": "iterations: 12343\ncpu: 71638.00534716033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81077.40930018412,
            "unit": "ns/iter",
            "extra": "iterations: 10860\ncpu: 81072.04419889508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 618.2525898090416,
            "unit": "ns/iter",
            "extra": "iterations: 1126724\ncpu: 618.1788086523399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 519.7685772072597,
            "unit": "ns/iter",
            "extra": "iterations: 1344349\ncpu: 519.7610144389587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 517.7872743452884,
            "unit": "ns/iter",
            "extra": "iterations: 1355168\ncpu: 517.7772792745994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 520.4571123365394,
            "unit": "ns/iter",
            "extra": "iterations: 1337739\ncpu: 520.4240887048973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1005.1405477674139,
            "unit": "ns/iter",
            "extra": "iterations: 696354\ncpu: 1005.0754357697372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3585.7647636005117,
            "unit": "ns/iter",
            "extra": "iterations: 220136\ncpu: 3585.546207798813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 16893.956357824984,
            "unit": "ns/iter",
            "extra": "iterations: 48806\ncpu: 16893.002909478342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 13658.576846640884,
            "unit": "ns/iter",
            "extra": "iterations: 59879\ncpu: 13657.896758462886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13139.223461793586,
            "unit": "ns/iter",
            "extra": "iterations: 61939\ncpu: 13138.27959766866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13224.012849855904,
            "unit": "ns/iter",
            "extra": "iterations: 61168\ncpu: 13223.268702589587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 38341.78571758422,
            "unit": "ns/iter",
            "extra": "iterations: 21649\ncpu: 38338.86553651427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 483109.5041597497,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 483082.97282307275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 400139.6310234022,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 400116.3377696192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 393745.3334849831,
            "unit": "ns/iter",
            "extra": "iterations: 2198\ncpu: 393738.08007279295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 398844.5155308366,
            "unit": "ns/iter",
            "extra": "iterations: 2157\ncpu: 398830.9689383396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 248535.10469416858,
            "unit": "ns/iter",
            "extra": "iterations: 3515\ncpu: 248519.74395448004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 399555.9794426748,
            "unit": "ns/iter",
            "extra": "iterations: 2189\ncpu: 399478.25491091795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2006800.9475983118,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2006569.2139737974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 777728.7500000149,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 777686.6279069795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2544480.422651858,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2544125.414364634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3474.5118950102183,
            "unit": "ns/iter",
            "extra": "iterations: 229508\ncpu: 3474.444028094876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16844.304295207923,
            "unit": "ns/iter",
            "extra": "iterations: 48752\ncpu: 16844.277157860237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13645.379034259136,
            "unit": "ns/iter",
            "extra": "iterations: 60451\ncpu: 13644.31523051728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13449.690687361051,
            "unit": "ns/iter",
            "extra": "iterations: 61336\ncpu: 13448.697339246159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13364.158885310944,
            "unit": "ns/iter",
            "extra": "iterations: 61793\ncpu: 13363.486155389843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36904.86989194628,
            "unit": "ns/iter",
            "extra": "iterations: 22489\ncpu: 36904.375472453255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 504387.4747706347,
            "unit": "ns/iter",
            "extra": "iterations: 1744\ncpu: 504355.10321100825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 410167.24482108117,
            "unit": "ns/iter",
            "extra": "iterations: 2124\ncpu: 410157.8154425594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 407842.7320930164,
            "unit": "ns/iter",
            "extra": "iterations: 2150\ncpu: 407834.7441860463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 407085.2473218192,
            "unit": "ns/iter",
            "extra": "iterations: 2147\ncpu: 407053.00419189315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 244299.34977703248,
            "unit": "ns/iter",
            "extra": "iterations: 3588\ncpu: 244294.06354514966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 403840.5510579423,
            "unit": "ns/iter",
            "extra": "iterations: 2174\ncpu: 403810.9475620971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2014265.1773836354,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2014103.9911308163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 803218.8537211674,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 803172.5406330187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3535.4820424707223,
            "unit": "ns/iter",
            "extra": "iterations: 226980\ncpu: 3535.421623050487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16256.40711353793,
            "unit": "ns/iter",
            "extra": "iterations: 50917\ncpu: 16255.936131350989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13701.98539134962,
            "unit": "ns/iter",
            "extra": "iterations: 60649\ncpu: 13701.813714983002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13113.123078629109,
            "unit": "ns/iter",
            "extra": "iterations: 63106\ncpu: 13112.377586917279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13275.266697826792,
            "unit": "ns/iter",
            "extra": "iterations: 62044\ncpu: 13275.166011217832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37533.33705307399,
            "unit": "ns/iter",
            "extra": "iterations: 22403\ncpu: 37530.745882248026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 487666.8355856069,
            "unit": "ns/iter",
            "extra": "iterations: 1776\ncpu: 487639.41441441537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 404340.5647382759,
            "unit": "ns/iter",
            "extra": "iterations: 2178\ncpu: 404337.46556473983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 399539.34095064964,
            "unit": "ns/iter",
            "extra": "iterations: 2188\ncpu: 399523.537477146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 400955.88394495076,
            "unit": "ns/iter",
            "extra": "iterations: 2180\ncpu: 400949.495412845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 247044.37517395196,
            "unit": "ns/iter",
            "extra": "iterations: 3593\ncpu: 247025.5218480389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 397622.161439116,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 397617.20479704585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 309.15853227585313,
            "unit": "ns/iter",
            "extra": "iterations: 2258190\ncpu: 309.15808678632163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1593.2104435063104,
            "unit": "ns/iter",
            "extra": "iterations: 439182\ncpu: 1593.1279059706576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1204.4908602712437,
            "unit": "ns/iter",
            "extra": "iterations: 583223\ncpu: 1204.419578788914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1331.2244491298336,
            "unit": "ns/iter",
            "extra": "iterations: 526939\ncpu: 1331.1798898923807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1068.4093430191072,
            "unit": "ns/iter",
            "extra": "iterations: 651952\ncpu: 1068.3340184553483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6755.660789171601,
            "unit": "ns/iter",
            "extra": "iterations: 103729\ncpu: 6755.591975243127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20172.90873998867,
            "unit": "ns/iter",
            "extra": "iterations: 34714\ncpu: 20171.919110445207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4886.562406449862,
            "unit": "ns/iter",
            "extra": "iterations: 138295\ncpu: 4886.345854875445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4824.353279124012,
            "unit": "ns/iter",
            "extra": "iterations: 144993\ncpu: 4824.317035994902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4840.1996629228515,
            "unit": "ns/iter",
            "extra": "iterations: 144774\ncpu: 4840.168814842444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9794.955423705129,
            "unit": "ns/iter",
            "extra": "iterations: 71630\ncpu: 9794.722881474172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9143.439391962478,
            "unit": "ns/iter",
            "extra": "iterations: 76640\ncpu: 9143.067588726448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2269.367728657474,
            "unit": "ns/iter",
            "extra": "iterations: 308540\ncpu: 2269.339469760803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11507.845312755904,
            "unit": "ns/iter",
            "extra": "iterations: 60910\ncpu: 11507.33377113761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9220.349589868027,
            "unit": "ns/iter",
            "extra": "iterations: 76195\ncpu: 9220.101056499787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9106.076628054981,
            "unit": "ns/iter",
            "extra": "iterations: 77178\ncpu: 9105.649278291814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9757.548265344174,
            "unit": "ns/iter",
            "extra": "iterations: 71801\ncpu: 9757.378030946538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24936.245766330303,
            "unit": "ns/iter",
            "extra": "iterations: 28108\ncpu: 24935.765618328936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100277.73010430034,
            "unit": "ns/iter",
            "extra": "iterations: 6999\ncpu: 100274.01057293908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84832.7586336819,
            "unit": "ns/iter",
            "extra": "iterations: 7963\ncpu: 84831.16915735399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84733.92912526871,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 84728.6164283978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85027.59919961079,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 85025.95197671514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53384.63248058749,
            "unit": "ns/iter",
            "extra": "iterations: 13134\ncpu: 53385.20633470348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84911.75925251975,
            "unit": "ns/iter",
            "extra": "iterations: 8241\ncpu: 84907.32920762131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2231.9188053211224,
            "unit": "ns/iter",
            "extra": "iterations: 314528\ncpu: 2231.853443890517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11146.357075839172,
            "unit": "ns/iter",
            "extra": "iterations: 62883\ncpu: 11145.866132340987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 8908.045047569321,
            "unit": "ns/iter",
            "extra": "iterations: 78517\ncpu: 8907.574155915372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 8908.41209433538,
            "unit": "ns/iter",
            "extra": "iterations: 78698\ncpu: 8908.13616610337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9418.647069912731,
            "unit": "ns/iter",
            "extra": "iterations: 74264\ncpu: 9418.59043412708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 22758.28608113369,
            "unit": "ns/iter",
            "extra": "iterations: 30764\ncpu: 22757.22597841663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98832.46506057984,
            "unit": "ns/iter",
            "extra": "iterations: 7098\ncpu: 98826.2468300939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83539.28318689507,
            "unit": "ns/iter",
            "extra": "iterations: 8422\ncpu: 83332.68819757752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82693.82114589622,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 82690.18310690997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83198.32913198498,
            "unit": "ns/iter",
            "extra": "iterations: 8410\ncpu: 83197.5386444723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52977.25204421437,
            "unit": "ns/iter",
            "extra": "iterations: 13208\ncpu: 52975.54512416751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83949.12458073538,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 83945.0766650691 ns\nthreads: 1"
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
        "date": 1702469386963,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 752.6900351258348,
            "unit": "ns/iter",
            "extra": "iterations: 929515\ncpu: 752.6275530787561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11316.146616387308,
            "unit": "ns/iter",
            "extra": "iterations: 73457\ncpu: 11315.870509277536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25252.522358766237,
            "unit": "ns/iter",
            "extra": "iterations: 33119\ncpu: 25250.777499320633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39804.67668437328,
            "unit": "ns/iter",
            "extra": "iterations: 21462\ncpu: 39802.846892181544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 52248.367552181386,
            "unit": "ns/iter",
            "extra": "iterations: 15810\ncpu: 52245.37001897536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51655.30460000128,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51651.320000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62039.46546182034,
            "unit": "ns/iter",
            "extra": "iterations: 13999\ncpu: 62037.3169512108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 73565.42148488713,
            "unit": "ns/iter",
            "extra": "iterations: 12176\ncpu: 73563.0009855453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81886.41497747612,
            "unit": "ns/iter",
            "extra": "iterations: 10656\ncpu: 81884.47822822817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 635.5802982072337,
            "unit": "ns/iter",
            "extra": "iterations: 1105473\ncpu: 635.5617007380549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 530.3174670563122,
            "unit": "ns/iter",
            "extra": "iterations: 1337890\ncpu: 530.3052567849375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 521.8816257983113,
            "unit": "ns/iter",
            "extra": "iterations: 1342725\ncpu: 521.8700031652054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 521.0219040278789,
            "unit": "ns/iter",
            "extra": "iterations: 1344182\ncpu: 521.0025874472354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1021.3205243978125,
            "unit": "ns/iter",
            "extra": "iterations: 686578\ncpu: 1021.3136744841801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3641.909685774519,
            "unit": "ns/iter",
            "extra": "iterations: 220065\ncpu: 3641.8135550859924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 16911.9567796957,
            "unit": "ns/iter",
            "extra": "iterations: 48542\ncpu: 16911.713567632145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 13607.43806424699,
            "unit": "ns/iter",
            "extra": "iterations: 59925\ncpu: 13607.02878598248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13536.622618498064,
            "unit": "ns/iter",
            "extra": "iterations: 60676\ncpu: 13536.46746654361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13297.36261809713,
            "unit": "ns/iter",
            "extra": "iterations: 61602\ncpu: 13296.969254245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 38434.26446467062,
            "unit": "ns/iter",
            "extra": "iterations: 22192\ncpu: 38432.93078586883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 490338.8360471624,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 490321.72936552577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 400488.77477478125,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 400482.40872451424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 400819.97183749155,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 400815.9279778392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 402252.3885819552,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 402241.2062615089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 248317.17689221387,
            "unit": "ns/iter",
            "extra": "iterations: 3488\ncpu: 248314.76490825674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 397220.56971926754,
            "unit": "ns/iter",
            "extra": "iterations: 2173\ncpu: 397198.8495167969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2009197.9650654509,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2008996.0698689946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 782718.6590135808,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 782688.605442176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2544249.473684194,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2544093.628808865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3552.6926079752798,
            "unit": "ns/iter",
            "extra": "iterations: 220305\ncpu: 3552.6129683847344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16757.68332044462,
            "unit": "ns/iter",
            "extra": "iterations: 49138\ncpu: 16757.44027025927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13652.3483249119,
            "unit": "ns/iter",
            "extra": "iterations: 59967\ncpu: 13651.99526406188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13510.566295796845,
            "unit": "ns/iter",
            "extra": "iterations: 60758\ncpu: 13510.485861943998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13355.52624062892,
            "unit": "ns/iter",
            "extra": "iterations: 61622\ncpu: 13355.05014442886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37951.74473847841,
            "unit": "ns/iter",
            "extra": "iterations: 22522\ncpu: 37951.50075481752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 502645.46577726875,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 502642.3433874685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 412535.64096498507,
            "unit": "ns/iter",
            "extra": "iterations: 2114\ncpu: 412524.2667928114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 411892.8790588357,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 411885.59999999835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 408727.2250233399,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 408720.7282913169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 243195.33370412732,
            "unit": "ns/iter",
            "extra": "iterations: 3596\ncpu: 243193.79866518278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 404757.18236658035,
            "unit": "ns/iter",
            "extra": "iterations: 2155\ncpu: 404751.41531322355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2022062.614699362,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2021911.581291763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 792975.1895534784,
            "unit": "ns/iter",
            "extra": "iterations: 1187\ncpu: 792969.7556866044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3268.166020626724,
            "unit": "ns/iter",
            "extra": "iterations: 229604\ncpu: 3268.0789533283287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16364.333009400827,
            "unit": "ns/iter",
            "extra": "iterations: 50422\ncpu: 16364.089088096534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13869.883555912356,
            "unit": "ns/iter",
            "extra": "iterations: 59754\ncpu: 13869.503296850367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13332.515791177611,
            "unit": "ns/iter",
            "extra": "iterations: 61775\ncpu: 13332.294617563735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13392.781063253622,
            "unit": "ns/iter",
            "extra": "iterations: 61246\ncpu: 13392.343989811603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37733.79728092431,
            "unit": "ns/iter",
            "extra": "iterations: 22287\ncpu: 37733.23462107967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 492774.4445073613,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 492761.21177802695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 403767.0036934492,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 403764.08125577046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 403275.7359525122,
            "unit": "ns/iter",
            "extra": "iterations: 2189\ncpu: 403270.169026953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 404427.0128735724,
            "unit": "ns/iter",
            "extra": "iterations: 2175\ncpu: 404416.4137931063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 244757.03144128722,
            "unit": "ns/iter",
            "extra": "iterations: 3594\ncpu: 244755.3144129118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 400818.9419622163,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 400804.65223399433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 307.42101736382426,
            "unit": "ns/iter",
            "extra": "iterations: 2274329\ncpu: 307.41519806501265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1545.570653589278,
            "unit": "ns/iter",
            "extra": "iterations: 453098\ncpu: 1545.5135533593173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1300.2139406652811,
            "unit": "ns/iter",
            "extra": "iterations: 582526\ncpu: 1300.204969391922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1328.356523602322,
            "unit": "ns/iter",
            "extra": "iterations: 527362\ncpu: 1328.3073107277323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1069.7870839031907,
            "unit": "ns/iter",
            "extra": "iterations: 655136\ncpu: 1069.7714672983873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6722.970849188435,
            "unit": "ns/iter",
            "extra": "iterations: 103805\ncpu: 6722.9276046433215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19223.11543208214,
            "unit": "ns/iter",
            "extra": "iterations: 36463\ncpu: 19222.98768614747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4832.906637962698,
            "unit": "ns/iter",
            "extra": "iterations: 145391\ncpu: 4832.803956228305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4822.601099920891,
            "unit": "ns/iter",
            "extra": "iterations: 145465\ncpu: 4822.514006805806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4824.28356498266,
            "unit": "ns/iter",
            "extra": "iterations: 144831\ncpu: 4824.127431282011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9637.802766449466,
            "unit": "ns/iter",
            "extra": "iterations: 72584\ncpu: 9637.734211396408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9034.614313061407,
            "unit": "ns/iter",
            "extra": "iterations: 77314\ncpu: 9034.37669762275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2301.211868203851,
            "unit": "ns/iter",
            "extra": "iterations: 305775\ncpu: 2301.178971465946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11531.182129453651,
            "unit": "ns/iter",
            "extra": "iterations: 60748\ncpu: 11531.108843089396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9343.842880177488,
            "unit": "ns/iter",
            "extra": "iterations: 75662\ncpu: 9343.514577991522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9235.78660366394,
            "unit": "ns/iter",
            "extra": "iterations: 75976\ncpu: 9235.733652732408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9853.107606995025,
            "unit": "ns/iter",
            "extra": "iterations: 70330\ncpu: 9852.698706099663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 23910.598878172474,
            "unit": "ns/iter",
            "extra": "iterations: 29238\ncpu: 23909.179834461713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101813.66472896567,
            "unit": "ns/iter",
            "extra": "iterations: 6881\ncpu: 101813.16669088835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85358.52681080165,
            "unit": "ns/iter",
            "extra": "iterations: 8187\ncpu: 85350.82447783145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84110.18075032714,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 84105.1300491442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84823.61071384815,
            "unit": "ns/iter",
            "extra": "iterations: 8251\ncpu: 84817.35547206529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53084.19120096868,
            "unit": "ns/iter",
            "extra": "iterations: 13206\ncpu: 53082.303498409885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84805.34592565848,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 84801.13815231972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2223.557278326141,
            "unit": "ns/iter",
            "extra": "iterations: 314674\ncpu: 2223.4528432600046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11156.30060908391,
            "unit": "ns/iter",
            "extra": "iterations: 62553\ncpu: 11155.655204386854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 8887.315507410513,
            "unit": "ns/iter",
            "extra": "iterations: 78743\ncpu: 8886.407680682794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 8977.734502078009,
            "unit": "ns/iter",
            "extra": "iterations: 77462\ncpu: 8977.07262916004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9520.589548985157,
            "unit": "ns/iter",
            "extra": "iterations: 73390\ncpu: 9520.393786619441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 22752.994607938763,
            "unit": "ns/iter",
            "extra": "iterations: 30786\ncpu: 22752.419931137614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100187.38354394094,
            "unit": "ns/iter",
            "extra": "iterations: 6964\ncpu: 100181.37564618033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83546.14018802873,
            "unit": "ns/iter",
            "extra": "iterations: 8403\ncpu: 83540.18802808381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82515.06799199845,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 82508.89307140275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83495.11076517469,
            "unit": "ns/iter",
            "extra": "iterations: 8351\ncpu: 83492.08478026674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53875.88795754854,
            "unit": "ns/iter",
            "extra": "iterations: 13004\ncpu: 53874.530913564806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84488.95268480323,
            "unit": "ns/iter",
            "extra": "iterations: 8306\ncpu: 84486.50373224106 ns\nthreads: 1"
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
        "date": 1702479710255,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 747.0050171386318,
            "unit": "ns/iter",
            "extra": "iterations: 936191\ncpu: 746.9639208238491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11301.189034490551,
            "unit": "ns/iter",
            "extra": "iterations: 74251\ncpu: 11300.46194664045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25052.644949282116,
            "unit": "ns/iter",
            "extra": "iterations: 33322\ncpu: 25051.20641017946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40625.84717376082,
            "unit": "ns/iter",
            "extra": "iterations: 21495\ncpu: 40624.20097697137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49608.733914206416,
            "unit": "ns/iter",
            "extra": "iterations: 14920\ncpu: 49605.9852546917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51218.93399999635,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51213.849999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62074.15200000241,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62074.50999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71849.47219464059,
            "unit": "ns/iter",
            "extra": "iterations: 12084\ncpu: 71846.68983780207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83205.01762654386,
            "unit": "ns/iter",
            "extra": "iterations: 10609\ncpu: 83201.75322839091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 619.6858463650907,
            "unit": "ns/iter",
            "extra": "iterations: 1131787\ncpu: 619.6599713550339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 528.304859313084,
            "unit": "ns/iter",
            "extra": "iterations: 1327842\ncpu: 528.2658629565859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 524.7088917219022,
            "unit": "ns/iter",
            "extra": "iterations: 1340539\ncpu: 524.6709719001101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 526.5529107772047,
            "unit": "ns/iter",
            "extra": "iterations: 1325883\ncpu: 526.5251911367747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 999.2547183690639,
            "unit": "ns/iter",
            "extra": "iterations: 700083\ncpu: 999.2369476190687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3534.2543302998047,
            "unit": "ns/iter",
            "extra": "iterations: 227236\ncpu: 3534.195285958216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 16377.807560273832,
            "unit": "ns/iter",
            "extra": "iterations: 50395\ncpu: 16377.13066772497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 13565.468765526426,
            "unit": "ns/iter",
            "extra": "iterations: 60382\ncpu: 13564.906760292824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12582.764004603401,
            "unit": "ns/iter",
            "extra": "iterations: 65175\ncpu: 12582.525508247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13121.916478229581,
            "unit": "ns/iter",
            "extra": "iterations: 62355\ncpu: 13121.728810841154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 38065.31779816757,
            "unit": "ns/iter",
            "extra": "iterations: 21800\ncpu: 38063.77522935792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 486047.969170408,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 486046.4686098672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 402126.3243369126,
            "unit": "ns/iter",
            "extra": "iterations: 2149\ncpu: 402104.9790600275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 399135.00960218,
            "unit": "ns/iter",
            "extra": "iterations: 2187\ncpu: 399127.1604938273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 402802.39260644675,
            "unit": "ns/iter",
            "extra": "iterations: 2137\ncpu: 402782.8731867103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 249527.7463581881,
            "unit": "ns/iter",
            "extra": "iterations: 3501\ncpu: 249523.53613253395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 397023.7236296741,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 397027.1764163978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2012484.352297525,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2012211.1597374226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 817656.4866494529,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 817624.8923341944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2548847.7713498753,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2548639.393939391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3539.1500199217435,
            "unit": "ns/iter",
            "extra": "iterations: 220864\ncpu: 3538.914445088382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16288.113331737524,
            "unit": "ns/iter",
            "extra": "iterations: 50136\ncpu: 16287.268629328199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13741.670845870338,
            "unit": "ns/iter",
            "extra": "iterations: 59820\ncpu: 13741.058174523583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13463.230694679369,
            "unit": "ns/iter",
            "extra": "iterations: 60877\ncpu: 13462.71334001349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13447.777883495735,
            "unit": "ns/iter",
            "extra": "iterations: 60959\ncpu: 13447.677947472937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37941.4151046154,
            "unit": "ns/iter",
            "extra": "iterations: 22033\ncpu: 37939.862932873104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 512779.1738109425,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 512775.0440399276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 413168.6178977422,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 413165.62499999773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 410771.4435028365,
            "unit": "ns/iter",
            "extra": "iterations: 2124\ncpu: 410753.95480225974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 409696.97707065864,
            "unit": "ns/iter",
            "extra": "iterations: 2137\ncpu: 409699.064108562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 244182.17024985276,
            "unit": "ns/iter",
            "extra": "iterations: 3442\ncpu: 244172.63219058636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 404347.95908878313,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 404332.728963275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2023727.438752774,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2023465.701559018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 802658.3382353107,
            "unit": "ns/iter",
            "extra": "iterations: 1156\ncpu: 802639.3598615961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3649.670617714253,
            "unit": "ns/iter",
            "extra": "iterations: 219098\ncpu: 3649.6449077581688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16756.31340357777,
            "unit": "ns/iter",
            "extra": "iterations: 48972\ncpu: 16755.79514824797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13544.314019981619,
            "unit": "ns/iter",
            "extra": "iterations: 60856\ncpu: 13543.749178388316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13306.079579677102,
            "unit": "ns/iter",
            "extra": "iterations: 61762\ncpu: 13305.743013503432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13503.10424240365,
            "unit": "ns/iter",
            "extra": "iterations: 60791\ncpu: 13502.55300949156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37310.04982947287,
            "unit": "ns/iter",
            "extra": "iterations: 22577\ncpu: 37309.22620365866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 493769.76285715756,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 493748.457142857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 403680.1560613119,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 403655.3181607058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 400945.9338539184,
            "unit": "ns/iter",
            "extra": "iterations: 2177\ncpu: 400938.12586127466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 403751.8964235743,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 403731.76962377963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 246117.300167703,
            "unit": "ns/iter",
            "extra": "iterations: 3578\ncpu: 246112.8004471779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 398341.33865087404,
            "unit": "ns/iter",
            "extra": "iterations: 2194\ncpu: 398338.37739288755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 308.3919779572295,
            "unit": "ns/iter",
            "extra": "iterations: 2277026\ncpu: 308.37605719038555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1597.6676386451404,
            "unit": "ns/iter",
            "extra": "iterations: 452342\ncpu: 1597.659956404665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1331.4831216947207,
            "unit": "ns/iter",
            "extra": "iterations: 524164\ncpu: 1331.4582840484998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1294.0447319853997,
            "unit": "ns/iter",
            "extra": "iterations: 540754\ncpu: 1294.036659922987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1100.1302594882677,
            "unit": "ns/iter",
            "extra": "iterations: 636445\ncpu: 1100.0983588526958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6831.348069199751,
            "unit": "ns/iter",
            "extra": "iterations: 102833\ncpu: 6830.915173144818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19139.37809843976,
            "unit": "ns/iter",
            "extra": "iterations: 36591\ncpu: 19139.468721816826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4823.080790527879,
            "unit": "ns/iter",
            "extra": "iterations: 145017\ncpu: 4822.993855892712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4777.011190970898,
            "unit": "ns/iter",
            "extra": "iterations: 146368\ncpu: 4776.915036073512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4810.969796734356,
            "unit": "ns/iter",
            "extra": "iterations: 143064\ncpu: 4810.929374266048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10111.860679415291,
            "unit": "ns/iter",
            "extra": "iterations: 69236\ncpu: 10111.641342654086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9105.671930943337,
            "unit": "ns/iter",
            "extra": "iterations: 76807\ncpu: 9105.421380863629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2289.061584722144,
            "unit": "ns/iter",
            "extra": "iterations: 304962\ncpu: 2289.0140410936565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11586.997286475857,
            "unit": "ns/iter",
            "extra": "iterations: 60438\ncpu: 11586.372811807307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9433.052178821757,
            "unit": "ns/iter",
            "extra": "iterations: 74398\ncpu: 9433.115137503684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9301.663357905092,
            "unit": "ns/iter",
            "extra": "iterations: 75154\ncpu: 9301.427735050667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9913.504150425362,
            "unit": "ns/iter",
            "extra": "iterations: 71318\ncpu: 9913.330435514206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 23894.44611075088,
            "unit": "ns/iter",
            "extra": "iterations: 29273\ncpu: 23893.536706179995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100789.33726958271,
            "unit": "ns/iter",
            "extra": "iterations: 6944\ncpu: 100784.27419354749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86368.00234712438,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 86368.37554045682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85389.08517119878,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 85383.81869136076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85576.14652327943,
            "unit": "ns/iter",
            "extra": "iterations: 8183\ncpu: 85576.58560430136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53769.538190187544,
            "unit": "ns/iter",
            "extra": "iterations: 13040\ncpu: 53768.41257668629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85462.0600419223,
            "unit": "ns/iter",
            "extra": "iterations: 8111\ncpu: 85457.45284181873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2231.7644778149875,
            "unit": "ns/iter",
            "extra": "iterations: 313117\ncpu: 2231.775342763248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11200.302845106824,
            "unit": "ns/iter",
            "extra": "iterations: 62669\ncpu: 11199.896280457613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 8904.120490345167,
            "unit": "ns/iter",
            "extra": "iterations: 78720\ncpu: 8904.042174796721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 8954.308643080114,
            "unit": "ns/iter",
            "extra": "iterations: 78236\ncpu: 8954.030114013914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9434.396151815403,
            "unit": "ns/iter",
            "extra": "iterations: 73853\ncpu: 9433.891649628493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 22832.277483487334,
            "unit": "ns/iter",
            "extra": "iterations: 30582\ncpu: 22832.02210450578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98643.29852008159,
            "unit": "ns/iter",
            "extra": "iterations: 7095\ncpu: 98638.37914024071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83877.90879713198,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 83877.16337522338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83481.37662802717,
            "unit": "ns/iter",
            "extra": "iterations: 8369\ncpu: 83478.360616561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84197.15083463407,
            "unit": "ns/iter",
            "extra": "iterations: 8327\ncpu: 84193.4189984391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53286.319187773355,
            "unit": "ns/iter",
            "extra": "iterations: 13149\ncpu: 53284.98745151672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84709.50380849298,
            "unit": "ns/iter",
            "extra": "iterations: 8271\ncpu: 84705.4648772824 ns\nthreads: 1"
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
        "date": 1702488550275,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 742.6794134697656,
            "unit": "ns/iter",
            "extra": "iterations: 943583\ncpu: 742.6614298901105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11256.792138330204,
            "unit": "ns/iter",
            "extra": "iterations: 73852\ncpu: 11256.465633970645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25168.494023424584,
            "unit": "ns/iter",
            "extra": "iterations: 33213\ncpu: 25167.861981754126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39702.008683940665,
            "unit": "ns/iter",
            "extra": "iterations: 21534\ncpu: 39701.4628030092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49831.49654485575,
            "unit": "ns/iter",
            "extra": "iterations: 16063\ncpu: 49829.72047562725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51188.64480000411,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51187.17999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62318.70569999956,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62314.23999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71588.17340373012,
            "unit": "ns/iter",
            "extra": "iterations: 12122\ncpu: 71586.73486223395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81884.21179018341,
            "unit": "ns/iter",
            "extra": "iterations: 10619\ncpu: 81880.36538280435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 623.4182047668278,
            "unit": "ns/iter",
            "extra": "iterations: 1121080\ncpu: 623.3857530238694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 532.3894923785847,
            "unit": "ns/iter",
            "extra": "iterations: 1318719\ncpu: 532.3815763631219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 525.5596248821714,
            "unit": "ns/iter",
            "extra": "iterations: 1331315\ncpu: 525.5488746089391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 528.824504359489,
            "unit": "ns/iter",
            "extra": "iterations: 1326768\ncpu: 528.8203363361185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1007.3873690778981,
            "unit": "ns/iter",
            "extra": "iterations: 692301\ncpu: 1007.3222485595137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3313.4279568906873,
            "unit": "ns/iter",
            "extra": "iterations: 240134\ncpu: 3313.2771702466107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 16198.415430740772,
            "unit": "ns/iter",
            "extra": "iterations: 50030\ncpu: 16197.541475114944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 13370.295708231752,
            "unit": "ns/iter",
            "extra": "iterations: 60651\ncpu: 13369.60808560453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13091.010424114966,
            "unit": "ns/iter",
            "extra": "iterations: 62931\ncpu: 13090.712049705246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13249.665089064583,
            "unit": "ns/iter",
            "extra": "iterations: 61697\ncpu: 13249.235781318384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 38902.97059098469,
            "unit": "ns/iter",
            "extra": "iterations: 21388\ncpu: 38900.981858986335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 487671.729201586,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 487654.4388609699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 400069.8257050243,
            "unit": "ns/iter",
            "extra": "iterations: 2163\ncpu: 400051.595006934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 401868.10446386394,
            "unit": "ns/iter",
            "extra": "iterations: 2173\ncpu: 401855.8674643351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 403717.7660764293,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 403714.44547996257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 248222.85126581465,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 248213.46375143854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 398393.2151029697,
            "unit": "ns/iter",
            "extra": "iterations: 2185\ncpu: 398376.24713958876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2006358.6876356017,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2006166.59436008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 801690.6759493556,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 801662.6160337545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2549185.849162052,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2548926.815642452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3561.065907151669,
            "unit": "ns/iter",
            "extra": "iterations: 226197\ncpu: 3561.012745527129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16447.32946339559,
            "unit": "ns/iter",
            "extra": "iterations: 50130\ncpu: 16446.860163574704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13647.73141877858,
            "unit": "ns/iter",
            "extra": "iterations: 60101\ncpu: 13647.663100447557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13396.707884195963,
            "unit": "ns/iter",
            "extra": "iterations: 61414\ncpu: 13396.258182173438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13375.258591833315,
            "unit": "ns/iter",
            "extra": "iterations: 61541\ncpu: 13375.104401943418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37369.22580497792,
            "unit": "ns/iter",
            "extra": "iterations: 21895\ncpu: 37368.44941767538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 509739.03159743664,
            "unit": "ns/iter",
            "extra": "iterations: 1709\ncpu: 509727.1503803425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 412112.4306122652,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 412101.5306122442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 407527.3353488376,
            "unit": "ns/iter",
            "extra": "iterations: 2150\ncpu: 407511.34883720725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 407098.89456572145,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 407096.9345099848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 243036.368553805,
            "unit": "ns/iter",
            "extra": "iterations: 3568\ncpu: 243026.45739910385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 404414.0886426578,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 404405.3554939991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2012461.3436806933,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2012277.6053215081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 786825.2169890297,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 786779.3944491164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3547.617907188229,
            "unit": "ns/iter",
            "extra": "iterations: 219800\ncpu: 3547.5409463148053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16795.17456839187,
            "unit": "ns/iter",
            "extra": "iterations: 48829\ncpu: 16794.583137070207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13434.330626317427,
            "unit": "ns/iter",
            "extra": "iterations: 61199\ncpu: 13434.279971894957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13283.90028158103,
            "unit": "ns/iter",
            "extra": "iterations: 61794\ncpu: 13283.391591416588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13447.817311306111,
            "unit": "ns/iter",
            "extra": "iterations: 61197\ncpu: 13447.744170465861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 38457.27118566223,
            "unit": "ns/iter",
            "extra": "iterations: 21819\ncpu: 38455.58916540616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 494027.97035348625,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 494026.22576966713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 401383.4489510394,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 401363.0303030306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 400228.4863741233,
            "unit": "ns/iter",
            "extra": "iterations: 2165\ncpu: 400219.1224018449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 401575.0936051759,
            "unit": "ns/iter",
            "extra": "iterations: 2158\ncpu: 401571.96478220605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 246279.76609980097,
            "unit": "ns/iter",
            "extra": "iterations: 3587\ncpu: 246272.09367159198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 396131.631530724,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 396123.1897341892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 303.56822126725723,
            "unit": "ns/iter",
            "extra": "iterations: 2276812\ncpu: 303.5579134333435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1614.8555314977636,
            "unit": "ns/iter",
            "extra": "iterations: 429983\ncpu: 1614.8229116034834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1248.8784276267277,
            "unit": "ns/iter",
            "extra": "iterations: 561139\ncpu: 1248.8299690451051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1300.1269722864995,
            "unit": "ns/iter",
            "extra": "iterations: 546954\ncpu: 1300.0974487799779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1082.362390789103,
            "unit": "ns/iter",
            "extra": "iterations: 646799\ncpu: 1082.3319145515025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6848.950336766027,
            "unit": "ns/iter",
            "extra": "iterations: 102148\ncpu: 6848.8330657477145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20141.35275994135,
            "unit": "ns/iter",
            "extra": "iterations: 34729\ncpu: 20141.475423997246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4816.895216243456,
            "unit": "ns/iter",
            "extra": "iterations: 144698\ncpu: 4816.720341677184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4798.156994925454,
            "unit": "ns/iter",
            "extra": "iterations: 145820\ncpu: 4798.067480455437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4800.199079291263,
            "unit": "ns/iter",
            "extra": "iterations: 145540\ncpu: 4800.146351518519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10172.767901198506,
            "unit": "ns/iter",
            "extra": "iterations: 68501\ncpu: 10172.228142654882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9131.240251078563,
            "unit": "ns/iter",
            "extra": "iterations: 76470\ncpu: 9130.989930691863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2290.6355725573994,
            "unit": "ns/iter",
            "extra": "iterations: 306371\ncpu: 2290.6009380783094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11466.12416953055,
            "unit": "ns/iter",
            "extra": "iterations: 61110\ncpu: 11465.935198821706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9264.594802429083,
            "unit": "ns/iter",
            "extra": "iterations: 76074\ncpu: 9264.643636459365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9174.96746937569,
            "unit": "ns/iter",
            "extra": "iterations: 76574\ncpu: 9174.6362995274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9686.41661592151,
            "unit": "ns/iter",
            "extra": "iterations: 72256\ncpu: 9686.146479184988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 23885.814062286474,
            "unit": "ns/iter",
            "extra": "iterations: 29284\ncpu: 23885.063515913163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99213.74515155407,
            "unit": "ns/iter",
            "extra": "iterations: 6961\ncpu: 99212.58439879266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85296.23422108233,
            "unit": "ns/iter",
            "extra": "iterations: 8223\ncpu: 85295.68284081285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85026.98953771181,
            "unit": "ns/iter",
            "extra": "iterations: 8220\ncpu: 85024.3552311432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84938.11477203916,
            "unit": "ns/iter",
            "extra": "iterations: 8225\ncpu: 84935.6717325229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53488.491120591454,
            "unit": "ns/iter",
            "extra": "iterations: 12895\ncpu: 53485.381930981224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84843.56422685378,
            "unit": "ns/iter",
            "extra": "iterations: 8252\ncpu: 84841.50508967503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2244.353391740949,
            "unit": "ns/iter",
            "extra": "iterations: 312288\ncpu: 2244.3315144994385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11209.605838013913,
            "unit": "ns/iter",
            "extra": "iterations: 62487\ncpu: 11209.112295357367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 8974.753234313732,
            "unit": "ns/iter",
            "extra": "iterations: 78301\ncpu: 8974.469036155377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 8987.292325476914,
            "unit": "ns/iter",
            "extra": "iterations: 77855\ncpu: 8986.925695202652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9353.490845637374,
            "unit": "ns/iter",
            "extra": "iterations: 74500\ncpu: 9353.42684563761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 22679.442325777185,
            "unit": "ns/iter",
            "extra": "iterations: 30837\ncpu: 22679.06411129474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98972.57772753437,
            "unit": "ns/iter",
            "extra": "iterations: 7076\ncpu: 98968.66873940139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83551.51837663031,
            "unit": "ns/iter",
            "extra": "iterations: 8353\ncpu: 83551.21513228868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82813.2176171922,
            "unit": "ns/iter",
            "extra": "iterations: 8469\ncpu: 82809.56429330485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83139.64834123089,
            "unit": "ns/iter",
            "extra": "iterations: 8440\ncpu: 83138.75592417122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53577.91973039171,
            "unit": "ns/iter",
            "extra": "iterations: 13056\ncpu: 53577.473958333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 87420.66239884157,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 87417.40548375351 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}