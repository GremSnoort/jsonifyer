window.BENCHMARK_DATA = {
  "lastUpdate": 1702416006971,
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
      }
    ]
  }
}