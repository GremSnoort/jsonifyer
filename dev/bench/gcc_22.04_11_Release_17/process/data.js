window.BENCHMARK_DATA = {
  "lastUpdate": 1702397925602,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-11 22.04 Release c++-17": [
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
        "date": 1702397923843,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1571.4981913829151,
            "unit": "ns/iter",
            "extra": "iterations: 438733\ncpu: 1571.3559271812242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24146.314696952195,
            "unit": "ns/iter",
            "extra": "iterations: 34252\ncpu: 24143.997430806965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 49892.13420406126,
            "unit": "ns/iter",
            "extra": "iterations: 16691\ncpu: 49889.281648792756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 62095.46779999755,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62088.52999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 88870.07427005554,
            "unit": "ns/iter",
            "extra": "iterations: 10583\ncpu: 88865.60521591229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 110465.6379615548,
            "unit": "ns/iter",
            "extra": "iterations: 7908\ncpu: 110453.43955488113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 135614.6110188693,
            "unit": "ns/iter",
            "extra": "iterations: 6625\ncpu: 135607.78867924522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 159774.31297572347,
            "unit": "ns/iter",
            "extra": "iterations: 5518\ncpu: 159549.96375498376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 177473.86297550958,
            "unit": "ns/iter",
            "extra": "iterations: 5021\ncpu: 177467.0185222068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1336.499614490557,
            "unit": "ns/iter",
            "extra": "iterations: 525279\ncpu: 1336.415504903108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1073.767939238016,
            "unit": "ns/iter",
            "extra": "iterations: 652118\ncpu: 1073.7214737210136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1077.9269229701579,
            "unit": "ns/iter",
            "extra": "iterations: 648138\ncpu: 1077.9164313772694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1073.7340880479885,
            "unit": "ns/iter",
            "extra": "iterations: 652167\ncpu: 1073.6907877890155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2159.8499862857143,
            "unit": "ns/iter",
            "extra": "iterations: 324477\ncpu: 2159.7034612622783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6785.067826272124,
            "unit": "ns/iter",
            "extra": "iterations: 122283\ncpu: 6784.71496446766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30479.689816707887,
            "unit": "ns/iter",
            "extra": "iterations: 26897\ncpu: 30478.52176822695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 28277.390687332114,
            "unit": "ns/iter",
            "extra": "iterations: 30582\ncpu: 28276.24746582953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27367.89100328902,
            "unit": "ns/iter",
            "extra": "iterations: 30111\ncpu: 27367.629769851534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28362.40134168457,
            "unit": "ns/iter",
            "extra": "iterations: 29217\ncpu: 28361.672998596692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72251.50757451082,
            "unit": "ns/iter",
            "extra": "iterations: 12146\ncpu: 72249.69537296222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 803488.4243733491,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 803479.429559207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 660154.7679999839,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660136.9999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 659249.8979999847,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 659215.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 662536.6260000191,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 662510.6999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 472244.68511550914,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 472227.6195593764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 661741.9949999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661721.7000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3550798.42481196,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3550629.699248127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1556318.7105262587,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1556288.9802631594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4544608.211538468,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4544492.788461525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10411.910389270437,
            "unit": "ns/iter",
            "extra": "iterations: 83952\ncpu: 10411.501810558417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50240.6381773277,
            "unit": "ns/iter",
            "extra": "iterations: 16591\ncpu: 50239.37677053823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42369.74168436119,
            "unit": "ns/iter",
            "extra": "iterations: 19782\ncpu: 42368.77464361555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41732.807940767365,
            "unit": "ns/iter",
            "extra": "iterations: 20124\ncpu: 41730.41144901584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41878.42898594356,
            "unit": "ns/iter",
            "extra": "iterations: 19989\ncpu: 41875.946770724026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84441.81557735072,
            "unit": "ns/iter",
            "extra": "iterations: 10297\ncpu: 84439.62319122134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 837904.6293958275,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 837887.7366997295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 678381.4871060465,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 678342.6217765041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 676598.5416069082,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 676566.7144906748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 675013.4067191017,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 674999.14224446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 480205.843459226,
            "unit": "ns/iter",
            "extra": "iterations: 1827\ncpu: 480201.3683634359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 664171.9510000143,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 664143.6999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3759381.5198411066,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3759156.7460317495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1564843.7034596568,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1564812.3558484358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6378.314704091732,
            "unit": "ns/iter",
            "extra": "iterations: 128114\ncpu: 6377.900151427618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32632.191576607383,
            "unit": "ns/iter",
            "extra": "iterations: 26094\ncpu: 32631.877059860497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 27739.305170631756,
            "unit": "ns/iter",
            "extra": "iterations: 29010\ncpu: 27737.61806273709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 27411.128590790657,
            "unit": "ns/iter",
            "extra": "iterations: 30251\ncpu: 27410.174870252147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 27144.853341623126,
            "unit": "ns/iter",
            "extra": "iterations: 30554\ncpu: 27143.693133468634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69576.37800884304,
            "unit": "ns/iter",
            "extra": "iterations: 12214\ncpu: 69572.60520713944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 822807.6646394471,
            "unit": "ns/iter",
            "extra": "iterations: 1151\ncpu: 822664.0312771464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 660325.8040000242,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660308.8000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 656765.0520000256,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656710.799999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 659059.1970000332,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 659009.3000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 471055.56493851275,
            "unit": "ns/iter",
            "extra": "iterations: 1871\ncpu: 471020.3099946549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 655130.4750000213,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655102.2999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 563.735345385285,
            "unit": "ns/iter",
            "extra": "iterations: 1204177\ncpu: 563.729833737064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3967.658132734778,
            "unit": "ns/iter",
            "extra": "iterations: 176472\ncpu: 3967.507026610475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3286.737647744386,
            "unit": "ns/iter",
            "extra": "iterations: 235119\ncpu: 3286.56382512686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3306.0335074142263,
            "unit": "ns/iter",
            "extra": "iterations: 212162\ncpu: 3305.8766414343872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2551.6028728903334,
            "unit": "ns/iter",
            "extra": "iterations: 274149\ncpu: 2551.5037443142032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19800.832071207005,
            "unit": "ns/iter",
            "extra": "iterations: 35390\ncpu: 19800.08194405192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44122.194541415,
            "unit": "ns/iter",
            "extra": "iterations: 15755\ncpu: 44120.14598540134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10196.508186929928,
            "unit": "ns/iter",
            "extra": "iterations: 68646\ncpu: 10196.168749817909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10106.850666666698,
            "unit": "ns/iter",
            "extra": "iterations: 69000\ncpu: 10106.352173913021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10203.364569773994,
            "unit": "ns/iter",
            "extra": "iterations: 68371\ncpu: 10203.182635912799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21095.810171746307,
            "unit": "ns/iter",
            "extra": "iterations: 33072\ncpu: 21095.180212868792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 19955.312879742345,
            "unit": "ns/iter",
            "extra": "iterations: 34892\ncpu: 19954.93809469199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5139.755585190322,
            "unit": "ns/iter",
            "extra": "iterations: 136477\ncpu: 5139.589820995469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26118.01918537121,
            "unit": "ns/iter",
            "extra": "iterations: 26687\ncpu: 26117.326788323913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20990.98277416909,
            "unit": "ns/iter",
            "extra": "iterations: 33264\ncpu: 20990.46416546418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20884.83161409518,
            "unit": "ns/iter",
            "extra": "iterations: 33542\ncpu: 20884.1005306781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21650.364604479077,
            "unit": "ns/iter",
            "extra": "iterations: 32021\ncpu: 21649.782954935843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51006.875907638554,
            "unit": "ns/iter",
            "extra": "iterations: 13772\ncpu: 51005.63462096967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 197780.1183314348,
            "unit": "ns/iter",
            "extra": "iterations: 3524\ncpu: 197778.12145289485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 168173.97925712663,
            "unit": "ns/iter",
            "extra": "iterations: 4146\ncpu: 168169.53690304104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 164964.13456091812,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 164959.56090651613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 168024.71479713413,
            "unit": "ns/iter",
            "extra": "iterations: 4190\ncpu: 168015.44152744787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 99329.02245274662,
            "unit": "ns/iter",
            "extra": "iterations: 7037\ncpu: 99326.01961062885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 169167.34525246586,
            "unit": "ns/iter",
            "extra": "iterations: 4139\ncpu: 169163.73520173758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5070.425298264009,
            "unit": "ns/iter",
            "extra": "iterations: 138049\ncpu: 5070.15987077058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25233.101727517183,
            "unit": "ns/iter",
            "extra": "iterations: 27554\ncpu: 25231.85018509087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20649.136170087633,
            "unit": "ns/iter",
            "extra": "iterations: 34053\ncpu: 20648.941356121115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20448.971522389784,
            "unit": "ns/iter",
            "extra": "iterations: 34413\ncpu: 20448.17074942621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21315.019292409543,
            "unit": "ns/iter",
            "extra": "iterations: 32759\ncpu: 21314.41741200894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49134.10818816509,
            "unit": "ns/iter",
            "extra": "iterations: 14179\ncpu: 49131.82170815969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 193536.24283728193,
            "unit": "ns/iter",
            "extra": "iterations: 3595\ncpu: 193528.31710709262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 165594.6959105974,
            "unit": "ns/iter",
            "extra": "iterations: 4206\ncpu: 165591.32192106408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 164073.6059252391,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 164068.8925464369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 164434.63705104025,
            "unit": "ns/iter",
            "extra": "iterations: 4232\ncpu: 164429.98582230814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 97283.5439667169,
            "unit": "ns/iter",
            "extra": "iterations: 7210\ncpu: 97280.76282940416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 165107.84553612678,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 165104.62919225133 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}