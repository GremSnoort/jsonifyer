window.BENCHMARK_DATA = {
  "lastUpdate": 1702398792473,
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
      }
    ]
  }
}