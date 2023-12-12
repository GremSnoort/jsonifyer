window.BENCHMARK_DATA = {
  "lastUpdate": 1702418336786,
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
        "date": 1702398789684,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1562.645430347739,
            "unit": "ns/iter",
            "extra": "iterations: 444443\ncpu: 1562.6044284643929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24289.32823163797,
            "unit": "ns/iter",
            "extra": "iterations: 34433\ncpu: 24287.99988383237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50104.83569931067,
            "unit": "ns/iter",
            "extra": "iterations: 16695\ncpu: 50102.99490865527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 62247.63129999929,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62245.91999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 88985.303422054,
            "unit": "ns/iter",
            "extra": "iterations: 10520\ncpu: 88983.94486692018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 111550.04721688779,
            "unit": "ns/iter",
            "extra": "iterations: 7815\ncpu: 111544.20985284715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 136707.52669420533,
            "unit": "ns/iter",
            "extra": "iterations: 6537\ncpu: 136704.68104635164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 158275.7097128266,
            "unit": "ns/iter",
            "extra": "iterations: 5467\ncpu: 158265.11798061102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 179976.3179528506,
            "unit": "ns/iter",
            "extra": "iterations: 4963\ncpu: 179973.64497279894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1380.357295978441,
            "unit": "ns/iter",
            "extra": "iterations: 506135\ncpu: 1380.2777914983149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1097.2389761975178,
            "unit": "ns/iter",
            "extra": "iterations: 637076\ncpu: 1097.2169725433064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1089.9031110228614,
            "unit": "ns/iter",
            "extra": "iterations: 634293\ncpu: 1089.8707695024223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1087.4591746396761,
            "unit": "ns/iter",
            "extra": "iterations: 643840\ncpu: 1087.4187686381722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2213.6270668588777,
            "unit": "ns/iter",
            "extra": "iterations: 321079\ncpu: 2213.506644782123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6552.907663089017,
            "unit": "ns/iter",
            "extra": "iterations: 126894\ncpu: 6552.472930162188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32068.631574845524,
            "unit": "ns/iter",
            "extra": "iterations: 25666\ncpu: 32065.803007870345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 28345.09788874116,
            "unit": "ns/iter",
            "extra": "iterations: 29319\ncpu: 28342.068283365723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27711.004288368516,
            "unit": "ns/iter",
            "extra": "iterations: 29615\ncpu: 27708.343744723894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28280.612318468895,
            "unit": "ns/iter",
            "extra": "iterations: 29127\ncpu: 28278.26072029389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73783.32360831661,
            "unit": "ns/iter",
            "extra": "iterations: 11928\ncpu: 73776.2156270958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 797760.0903716608,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 797690.6249999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 657373.8690000256,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657305.0999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 653130.6259999496,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653120.5999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 658099.2120000246,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658048.6000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 466581.16640001023,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 466577.91999999934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 651757.233000012,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651685.1000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3492999.5762082166,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3492453.531598513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1556122.6546052871,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1556077.1381578923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4502028.411483105,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4501722.488038281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10172.00247355312,
            "unit": "ns/iter",
            "extra": "iterations: 83281\ncpu: 10171.656200093661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50560.8101503756,
            "unit": "ns/iter",
            "extra": "iterations: 16492\ncpu: 50559.79869027406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42807.54544527787,
            "unit": "ns/iter",
            "extra": "iterations: 19617\ncpu: 42807.23861956472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42467.22037149234,
            "unit": "ns/iter",
            "extra": "iterations: 19812\ncpu: 42466.404199475095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 42405.023897151004,
            "unit": "ns/iter",
            "extra": "iterations: 19835\ncpu: 42402.001512477946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83763.66296045714,
            "unit": "ns/iter",
            "extra": "iterations: 10343\ncpu: 83755.0420574307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 848213.1119133646,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 848153.3393501801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 682776.6999271684,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 682706.9919883483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 674372.8673835021,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 674295.4838709723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 671787.1546170505,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 671773.0851825309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 480224.77128823416,
            "unit": "ns/iter",
            "extra": "iterations: 1832\ncpu: 480215.7205240165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 663765.0430000122,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663761.0000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3751512.7450200478,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3751373.7051793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1567159.6556291431,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1567134.6026490082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6812.704089188562,
            "unit": "ns/iter",
            "extra": "iterations: 121540\ncpu: 6812.544018430137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32121.378012106663,
            "unit": "ns/iter",
            "extra": "iterations: 25605\ncpu: 32120.968560828143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 27625.826610877702,
            "unit": "ns/iter",
            "extra": "iterations: 29875\ncpu: 27625.225104602683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 27044.995059063527,
            "unit": "ns/iter",
            "extra": "iterations: 30561\ncpu: 27044.772749582935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 27289.336766051045,
            "unit": "ns/iter",
            "extra": "iterations: 30588\ncpu: 27288.315679351264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69289.27763598446,
            "unit": "ns/iter",
            "extra": "iterations: 12538\ncpu: 69288.22778752618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 819017.1542461177,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 819003.0329289429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 654105.3939999983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654100.899999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 651253.9619999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651249.9000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 651838.8810000033,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651807.9000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 461198.51181102835,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 461191.3910761148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 643030.6059999679,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643012.3000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 568.3217575894128,
            "unit": "ns/iter",
            "extra": "iterations: 1233758\ncpu: 568.3187464640556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3963.052903802833,
            "unit": "ns/iter",
            "extra": "iterations: 174392\ncpu: 3962.9157300793668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3261.63933424014,
            "unit": "ns/iter",
            "extra": "iterations: 232276\ncpu: 3261.391620313788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3339.0649624254524,
            "unit": "ns/iter",
            "extra": "iterations: 215971\ncpu: 3338.886239356218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2453.678596085526,
            "unit": "ns/iter",
            "extra": "iterations: 285345\ncpu: 2453.659955492474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19834.550803649923,
            "unit": "ns/iter",
            "extra": "iterations: 35401\ncpu: 19832.821106748397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 43794.77661638449,
            "unit": "ns/iter",
            "extra": "iterations: 15977\ncpu: 43793.947549602664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10415.730264803971,
            "unit": "ns/iter",
            "extra": "iterations: 67937\ncpu: 10414.854939134708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10335.34026557154,
            "unit": "ns/iter",
            "extra": "iterations: 67703\ncpu: 10334.152105519683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10249.268506992516,
            "unit": "ns/iter",
            "extra": "iterations: 68285\ncpu: 10248.202387054258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21210.901969125924,
            "unit": "ns/iter",
            "extra": "iterations: 32908\ncpu: 21208.766865200007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20090.599770708395,
            "unit": "ns/iter",
            "extra": "iterations: 34890\ncpu: 20088.586987675444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5125.686771328066,
            "unit": "ns/iter",
            "extra": "iterations: 136121\ncpu: 5125.580182337731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26170.78587065418,
            "unit": "ns/iter",
            "extra": "iterations: 26951\ncpu: 26170.60962487472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20978.204298812678,
            "unit": "ns/iter",
            "extra": "iterations: 33265\ncpu: 20977.04794829391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21108.203238549522,
            "unit": "ns/iter",
            "extra": "iterations: 33163\ncpu: 21107.85815517277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21924.454591481328,
            "unit": "ns/iter",
            "extra": "iterations: 31602\ncpu: 21923.511170179292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50418.72793428816,
            "unit": "ns/iter",
            "extra": "iterations: 13879\ncpu: 50413.43756754831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 197247.12539007037,
            "unit": "ns/iter",
            "extra": "iterations: 3525\ncpu: 197221.41843971633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 166025.55396711966,
            "unit": "ns/iter",
            "extra": "iterations: 4197\ncpu: 166008.98260662257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 167723.6354291234,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 167706.64594788462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 168769.2197352561,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 168754.24789410364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 99605.14236657598,
            "unit": "ns/iter",
            "extra": "iterations: 6989\ncpu: 99604.53569895607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 169150.14584333508,
            "unit": "ns/iter",
            "extra": "iterations: 4162\ncpu: 168675.22825564633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5092.23541381989,
            "unit": "ns/iter",
            "extra": "iterations: 137596\ncpu: 5091.776650484001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25539.46280871522,
            "unit": "ns/iter",
            "extra": "iterations: 27493\ncpu: 25536.26013894452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20424.940359762077,
            "unit": "ns/iter",
            "extra": "iterations: 34356\ncpu: 20423.390383048172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20624.15821369748,
            "unit": "ns/iter",
            "extra": "iterations: 33992\ncpu: 20621.78159566935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21378.054000426702,
            "unit": "ns/iter",
            "extra": "iterations: 32759\ncpu: 21376.189749381912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49127.917530828425,
            "unit": "ns/iter",
            "extra": "iterations: 14272\ncpu: 49123.58464125563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 195833.6465493127,
            "unit": "ns/iter",
            "extra": "iterations: 3579\ncpu: 195815.00419111713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 164845.01155933447,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 164829.13422977272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 165207.70777988754,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 165202.08728652901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 167851.04669540472,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 167850.04789272262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 96963.53317633977,
            "unit": "ns/iter",
            "extra": "iterations: 7219\ncpu: 96962.87574456225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 166428.4172012358,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 166424.30506058558 ns\nthreads: 1"
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
        "date": 1702409118444,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1451.3798611284521,
            "unit": "ns/iter",
            "extra": "iterations: 483324\ncpu: 1451.316715081395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 22102.452445324478,
            "unit": "ns/iter",
            "extra": "iterations: 37357\ncpu: 22101.507080333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 45686.19982523986,
            "unit": "ns/iter",
            "extra": "iterations: 18311\ncpu: 45685.571514390234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 57596.54059999662,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57594.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 82285.90696202236,
            "unit": "ns/iter",
            "extra": "iterations: 11060\ncpu: 82284.02350813746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 102562.19352592733,
            "unit": "ns/iter",
            "extra": "iterations: 8619\ncpu: 102557.14119967514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 124836.10390179833,
            "unit": "ns/iter",
            "extra": "iterations: 6843\ncpu: 124830.67368113401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 146042.08079447623,
            "unit": "ns/iter",
            "extra": "iterations: 5941\ncpu: 146034.9604443697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 166295.64265073766,
            "unit": "ns/iter",
            "extra": "iterations: 5191\ncpu: 166289.52032363726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1255.7528722908048,
            "unit": "ns/iter",
            "extra": "iterations: 555567\ncpu: 1255.6865328574236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1018.1052661256546,
            "unit": "ns/iter",
            "extra": "iterations: 691628\ncpu: 1018.086312295048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1008.9528261409747,
            "unit": "ns/iter",
            "extra": "iterations: 696869\ncpu: 1008.9356823161864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1017.3286269534931,
            "unit": "ns/iter",
            "extra": "iterations: 690552\ncpu: 1017.3060102642526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2090.395287178194,
            "unit": "ns/iter",
            "extra": "iterations: 335680\ncpu: 2090.4006792183077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6703.174822456934,
            "unit": "ns/iter",
            "extra": "iterations: 123491\ncpu: 6702.8139702488415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30356.45086361032,
            "unit": "ns/iter",
            "extra": "iterations: 26864\ncpu: 30355.99687313874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25872.083141326188,
            "unit": "ns/iter",
            "extra": "iterations: 30815\ncpu: 25870.546811617718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 26802.79821528575,
            "unit": "ns/iter",
            "extra": "iterations: 30369\ncpu: 26801.669465573486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 26281.0595383533,
            "unit": "ns/iter",
            "extra": "iterations: 31106\ncpu: 26280.37999099849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71048.13825396687,
            "unit": "ns/iter",
            "extra": "iterations: 12600\ncpu: 71045.71428571451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 768208.8642797956,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 768153.5387177358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 633011.6579999868,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633001.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 644507.4310000223,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 644490.6999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 628303.582000001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628281.4999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 450116.05684753857,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 450087.54521963734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 637078.2970000164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637061.3999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3455431.000000115,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3455247.0370370364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1543038.338358467,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1542993.4673366863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4428801.165876969,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4428698.104265402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9851.893019939338,
            "unit": "ns/iter",
            "extra": "iterations: 85558\ncpu: 9851.335935856356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48755.86126157539,
            "unit": "ns/iter",
            "extra": "iterations: 17169\ncpu: 48752.74622866795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 40877.03425398126,
            "unit": "ns/iter",
            "extra": "iterations: 20348\ncpu: 40875.481619815255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 40521.002234852225,
            "unit": "ns/iter",
            "extra": "iterations: 20583\ncpu: 40519.40436282365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 40534.0281024751,
            "unit": "ns/iter",
            "extra": "iterations: 20532\ncpu: 40531.024741866386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83161.54866828292,
            "unit": "ns/iter",
            "extra": "iterations: 10325\ncpu: 83154.4503631965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 832283.0468611971,
            "unit": "ns/iter",
            "extra": "iterations: 1131\ncpu: 832255.7029177708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 659298.1360000181,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 659271.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 668161.5749999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668152.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 653630.3459999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653592.7000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 462917.61385608313,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 462887.7551020403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 652475.0859999813,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652425.2999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3634234.8274508687,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3634024.7058823686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1571886.4647651182,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1571592.6174496599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6531.444890677297,
            "unit": "ns/iter",
            "extra": "iterations: 127238\ncpu: 6531.166789795509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31291.02363865142,
            "unit": "ns/iter",
            "extra": "iterations: 27032\ncpu: 31289.453240603652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 26386.05975350954,
            "unit": "ns/iter",
            "extra": "iterations: 31563\ncpu: 26384.30757532555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 26452.253488889597,
            "unit": "ns/iter",
            "extra": "iterations: 31457\ncpu: 26450.31630479689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 26046.52132182865,
            "unit": "ns/iter",
            "extra": "iterations: 31986\ncpu: 26044.750828487602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 67962.74294525826,
            "unit": "ns/iter",
            "extra": "iterations: 12970\ncpu: 67828.57363145729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 791768.5075376955,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 791729.4807370218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 643526.2719999742,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643462.3000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 646311.8369999847,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646292.6999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 636706.5200000184,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636707.9000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 453341.91827173333,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 453331.0255075474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 632577.6650000421,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632578.6999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 545.9856117450508,
            "unit": "ns/iter",
            "extra": "iterations: 1290080\ncpu: 545.9560647401706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3667.545496518759,
            "unit": "ns/iter",
            "extra": "iterations: 190597\ncpu: 3667.4213130322055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3030.9364347169303,
            "unit": "ns/iter",
            "extra": "iterations: 239549\ncpu: 3030.8216690531167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3096.9242278994657,
            "unit": "ns/iter",
            "extra": "iterations: 226363\ncpu: 3096.9270596343017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2292.0229724351225,
            "unit": "ns/iter",
            "extra": "iterations: 303973\ncpu: 2291.9045441536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18823.014475829586,
            "unit": "ns/iter",
            "extra": "iterations: 36820\ncpu: 18822.08582292227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 41080.55846559198,
            "unit": "ns/iter",
            "extra": "iterations: 17831\ncpu: 41079.72631933153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9780.754837899245,
            "unit": "ns/iter",
            "extra": "iterations: 71622\ncpu: 9780.168104772272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 9736.95116891083,
            "unit": "ns/iter",
            "extra": "iterations: 71819\ncpu: 9736.246675670762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9688.588275156113,
            "unit": "ns/iter",
            "extra": "iterations: 72308\ncpu: 9687.91281739218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 19582.28575825475,
            "unit": "ns/iter",
            "extra": "iterations: 35740\ncpu: 19581.057638500253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 17884.669022169575,
            "unit": "ns/iter",
            "extra": "iterations: 39199\ncpu: 17883.198550983412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4850.028570042199,
            "unit": "ns/iter",
            "extra": "iterations: 144277\ncpu: 4849.55190362983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 24414.015918907597,
            "unit": "ns/iter",
            "extra": "iterations: 28708\ncpu: 24411.24425247339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 19689.585645852367,
            "unit": "ns/iter",
            "extra": "iterations: 35279\ncpu: 19688.43221179734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 19886.82696724702,
            "unit": "ns/iter",
            "extra": "iterations: 35265\ncpu: 19885.73373032748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20830.719087670193,
            "unit": "ns/iter",
            "extra": "iterations: 33409\ncpu: 20830.366069023305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48818.073829239656,
            "unit": "ns/iter",
            "extra": "iterations: 14371\ncpu: 48814.76584788879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 185110.70291776318,
            "unit": "ns/iter",
            "extra": "iterations: 3770\ncpu: 185101.2997347472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 158578.7302568949,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 158574.04852521385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 158408.53844403214,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 158408.89444949926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 157794.4292815204,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 157785.40442837484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 93407.64074172963,
            "unit": "ns/iter",
            "extra": "iterations: 7496\ncpu: 93400.2134471727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 160177.41117445647,
            "unit": "ns/iter",
            "extra": "iterations: 4385\ncpu: 160157.10376282764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4847.089063291536,
            "unit": "ns/iter",
            "extra": "iterations: 144111\ncpu: 4847.016535864676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 23924.02493348737,
            "unit": "ns/iter",
            "extra": "iterations: 29318\ncpu: 23922.030834299578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19204.434614434616,
            "unit": "ns/iter",
            "extra": "iterations: 36453\ncpu: 19204.493457328885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19206.254485687423,
            "unit": "ns/iter",
            "extra": "iterations: 36505\ncpu: 19205.295165046067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20258.067297946807,
            "unit": "ns/iter",
            "extra": "iterations: 34533\ncpu: 20257.750557437656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47680.01954109223,
            "unit": "ns/iter",
            "extra": "iterations: 14687\ncpu: 47678.55927010271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 181637.01688311674,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 181624.18181817996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 156762.92751678065,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 156753.28859060185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 155884.8163949093,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 155873.06231851844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 156822.79306513473,
            "unit": "ns/iter",
            "extra": "iterations: 4499\ncpu: 156809.11313625268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 92014.8712220749,
            "unit": "ns/iter",
            "extra": "iterations: 7610\ncpu: 92013.14060446802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 159110.15113918376,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 159105.61696368174 ns\nthreads: 1"
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
        "date": 1702412526744,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1389.8823085298352,
            "unit": "ns/iter",
            "extra": "iterations: 503316\ncpu: 1389.8652139014062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16931.63765037495,
            "unit": "ns/iter",
            "extra": "iterations: 48961\ncpu: 16931.47198790875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37489.0886380541,
            "unit": "ns/iter",
            "extra": "iterations: 22857\ncpu: 37488.97493109333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53677.14333863259,
            "unit": "ns/iter",
            "extra": "iterations: 15725\ncpu: 53676.190779014294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59616.69099999653,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59617.26999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 75335.9225595072,
            "unit": "ns/iter",
            "extra": "iterations: 11596\ncpu: 75335.52086926528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 89307.96381578787,
            "unit": "ns/iter",
            "extra": "iterations: 9728\ncpu: 89305.75657894737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103652.05676167306,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 103649.29047907822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 121289.98700573193,
            "unit": "ns/iter",
            "extra": "iterations: 7157\ncpu: 121290.47086768199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1240.1225728026975,
            "unit": "ns/iter",
            "extra": "iterations: 565158\ncpu: 1240.1043601966167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1011.4096421819775,
            "unit": "ns/iter",
            "extra": "iterations: 690798\ncpu: 1011.3555626970532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1007.2753920898831,
            "unit": "ns/iter",
            "extra": "iterations: 694675\ncpu: 1007.2366214416809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1010.1620056076999,
            "unit": "ns/iter",
            "extra": "iterations: 692618\ncpu: 1010.1120675466144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1940.156274747869,
            "unit": "ns/iter",
            "extra": "iterations: 359879\ncpu: 1940.1598870731548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5160.500690000163,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5160.551999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24854.99757104651,
            "unit": "ns/iter",
            "extra": "iterations: 32936\ncpu: 24852.189094000467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22721.65517717125,
            "unit": "ns/iter",
            "extra": "iterations: 36236\ncpu: 22721.867755822946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23681.627444757836,
            "unit": "ns/iter",
            "extra": "iterations: 34666\ncpu: 23681.575607223233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23181.512671609904,
            "unit": "ns/iter",
            "extra": "iterations: 35473\ncpu: 23181.07292870632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 58852.36380000265,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58851.21000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 605308.9389999968,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605308.8000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 614527.1406469864,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 614509.0717299596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 607732.7806770261,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 607718.8293370963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 610195.4225351927,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 610195.2112676045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 358919.74259868864,
            "unit": "ns/iter",
            "extra": "iterations: 2432\ncpu: 358911.1019736851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 610379.4036440117,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 610373.5809390349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2553356.7142856857,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2553332.4175824183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1148724.7257861278,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 1148677.9874213822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3320768.8602149696,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3320762.3655913877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8561.844580320401,
            "unit": "ns/iter",
            "extra": "iterations: 98456\ncpu: 8561.746363857967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43527.46698236093,
            "unit": "ns/iter",
            "extra": "iterations: 19217\ncpu: 43527.985637716534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37188.934240762384,
            "unit": "ns/iter",
            "extra": "iterations: 22628\ncpu: 37188.430263390386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38023.28726050068,
            "unit": "ns/iter",
            "extra": "iterations: 21712\ncpu: 38023.66433308754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37286.408454507175,
            "unit": "ns/iter",
            "extra": "iterations: 22213\ncpu: 37286.23328681392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75692.8441086645,
            "unit": "ns/iter",
            "extra": "iterations: 12111\ncpu: 75691.89166873103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 641459.2099999936,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641459.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 514164.48399999127,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514166.59999999584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 509824.66699997534,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509829.6999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 505263.4919999832,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505232.4999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 370885.24440692546,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 370888.8138455025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 501645.3029999752,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501636.9999999952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2713554.187134573,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2713550.5847953223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1188087.7867177466,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 1188039.2081736906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5300.353650000034,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5300.322000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24606.13667240214,
            "unit": "ns/iter",
            "extra": "iterations: 33123\ncpu: 24605.986776560163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 21760.083061587247,
            "unit": "ns/iter",
            "extra": "iterations: 37719\ncpu: 21760.354198149456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22144.103271292963,
            "unit": "ns/iter",
            "extra": "iterations: 37019\ncpu: 22144.336691968852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22071.272692960218,
            "unit": "ns/iter",
            "extra": "iterations: 37093\ncpu: 22071.274903620473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 56168.02289999896,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56168.65999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 624391.8129999883,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624324.6999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 619536.7033898166,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 619510.8050847467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 613798.6974144072,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 613755.6254367555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 618136.0568022768,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 618105.6100981742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 355859.81521739025,
            "unit": "ns/iter",
            "extra": "iterations: 2484\ncpu: 355844.9275362333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 607794.3999999771,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 607763.0344827573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 607.1446932545615,
            "unit": "ns/iter",
            "extra": "iterations: 1153758\ncpu: 607.1420523194671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3199.010198048442,
            "unit": "ns/iter",
            "extra": "iterations: 218179\ncpu: 3199.011362230079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2667.6615717786435,
            "unit": "ns/iter",
            "extra": "iterations: 263205\ncpu: 2664.741551262325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2602.768936151089,
            "unit": "ns/iter",
            "extra": "iterations: 268666\ncpu: 2602.6843739066217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2213.7364286233337,
            "unit": "ns/iter",
            "extra": "iterations: 316567\ncpu: 2213.7326379565648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16757.054559831275,
            "unit": "ns/iter",
            "extra": "iterations: 41734\ncpu: 16756.558201945667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33586.40756782526,
            "unit": "ns/iter",
            "extra": "iterations: 21010\ncpu: 33586.31603998107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7980.909082613085,
            "unit": "ns/iter",
            "extra": "iterations: 87662\ncpu: 7980.51151011834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7906.213990701723,
            "unit": "ns/iter",
            "extra": "iterations: 88616\ncpu: 7905.975218922127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7928.154066856451,
            "unit": "ns/iter",
            "extra": "iterations: 88877\ncpu: 7927.8677273084695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15879.347834961758,
            "unit": "ns/iter",
            "extra": "iterations: 44087\ncpu: 15879.120829269348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14905.926011732727,
            "unit": "ns/iter",
            "extra": "iterations: 47048\ncpu: 14905.91098452651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4228.036776095057,
            "unit": "ns/iter",
            "extra": "iterations: 165923\ncpu: 4227.894264206826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 21677.08643819876,
            "unit": "ns/iter",
            "extra": "iterations: 32127\ncpu: 21676.37812431881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17505.715833019258,
            "unit": "ns/iter",
            "extra": "iterations: 39885\ncpu: 17505.646232919622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17334.69222018814,
            "unit": "ns/iter",
            "extra": "iterations: 40438\ncpu: 17334.660467876845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 17861.98537616925,
            "unit": "ns/iter",
            "extra": "iterations: 39251\ncpu: 17861.499070087466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 44935.363933796856,
            "unit": "ns/iter",
            "extra": "iterations: 15588\ncpu: 44935.3797793174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 162310.26769657034,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 162309.59188379062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134459.5259202072,
            "unit": "ns/iter",
            "extra": "iterations: 5189\ncpu: 134452.39930622617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133163.84732534047,
            "unit": "ns/iter",
            "extra": "iterations: 5253\ncpu: 133156.38682657602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133311.69459253925,
            "unit": "ns/iter",
            "extra": "iterations: 5252\ncpu: 133304.81721249272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83138.85108657283,
            "unit": "ns/iter",
            "extra": "iterations: 8421\ncpu: 83133.77271107919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134543.3789272079,
            "unit": "ns/iter",
            "extra": "iterations: 5220\ncpu: 134539.80842911813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4170.686600946801,
            "unit": "ns/iter",
            "extra": "iterations: 167885\ncpu: 4170.388063257581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 20874.27462098589,
            "unit": "ns/iter",
            "extra": "iterations: 33508\ncpu: 20873.23922645345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17139.10557973403,
            "unit": "ns/iter",
            "extra": "iterations: 40898\ncpu: 17138.87476160182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 16977.954463852024,
            "unit": "ns/iter",
            "extra": "iterations: 41220\ncpu: 16977.353226589235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17562.62352911766,
            "unit": "ns/iter",
            "extra": "iterations: 39942\ncpu: 17562.28030644441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 42669.7881267959,
            "unit": "ns/iter",
            "extra": "iterations: 16373\ncpu: 42669.504672326206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 158531.37745651868,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 158530.90128755465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131809.82853378603,
            "unit": "ns/iter",
            "extra": "iterations: 5313\ncpu: 131805.9100319954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131031.9154876483,
            "unit": "ns/iter",
            "extra": "iterations: 5301\ncpu: 131025.6744010565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130645.54065646391,
            "unit": "ns/iter",
            "extra": "iterations: 5362\ncpu: 130635.9194330488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81811.62483979847,
            "unit": "ns/iter",
            "extra": "iterations: 8583\ncpu: 81808.09740184092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131090.89765258675,
            "unit": "ns/iter",
            "extra": "iterations: 5325\ncpu: 131087.94366197352 ns\nthreads: 1"
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
        "date": 1702416000583,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1387.511626394563,
            "unit": "ns/iter",
            "extra": "iterations: 507423\ncpu: 1387.4755381604698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17005.726043141953,
            "unit": "ns/iter",
            "extra": "iterations: 48723\ncpu: 17005.336288816376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35376.34069359613,
            "unit": "ns/iter",
            "extra": "iterations: 23097\ncpu: 35375.06169632421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52648.48333020608,
            "unit": "ns/iter",
            "extra": "iterations: 15987\ncpu: 52647.06323888158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59083.23339999981,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59079.83000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74034.84142367687,
            "unit": "ns/iter",
            "extra": "iterations: 11969\ncpu: 74032.57582087057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87977.73355698027,
            "unit": "ns/iter",
            "extra": "iterations: 9837\ncpu: 87974.59591338818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102489.83492625313,
            "unit": "ns/iter",
            "extra": "iterations: 8475\ncpu: 102481.97050147489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 119941.32736930213,
            "unit": "ns/iter",
            "extra": "iterations: 7154\ncpu: 119937.43360357829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1238.5940782514344,
            "unit": "ns/iter",
            "extra": "iterations: 565306\ncpu: 1238.5485029346935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1009.6585302377005,
            "unit": "ns/iter",
            "extra": "iterations: 695473\ncpu: 1009.5878632240198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 992.5947976780542,
            "unit": "ns/iter",
            "extra": "iterations: 707338\ncpu: 992.5953363172922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 998.5106007771675,
            "unit": "ns/iter",
            "extra": "iterations: 702024\ncpu: 998.4668615317975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1928.1576297700246,
            "unit": "ns/iter",
            "extra": "iterations: 363104\ncpu: 1928.0875451661238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5357.479250000097,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5357.220000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25015.238487951057,
            "unit": "ns/iter",
            "extra": "iterations: 32618\ncpu: 25014.685143172446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22740.570866690905,
            "unit": "ns/iter",
            "extra": "iterations: 35849\ncpu: 22739.73332589471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23490.042550747967,
            "unit": "ns/iter",
            "extra": "iterations: 34829\ncpu: 23489.497258032046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22976.065076775805,
            "unit": "ns/iter",
            "extra": "iterations: 35558\ncpu: 22975.389504471554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 59077.60790000225,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59077.65999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 613942.2509999975,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613911.3999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 610150.5207600172,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 610127.5862068956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 605087.0246652506,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 605062.6497533469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 604683.2566063969,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 604666.203059804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 359929.4350515523,
            "unit": "ns/iter",
            "extra": "iterations: 2425\ncpu: 359922.4329896901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 633217.6407562979,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 633185.1540616238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2560701.560773486,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2560601.6574585666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1160861.887359189,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 1160796.495619524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3299413.5749999844,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3299283.2142857104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8504.543008833925,
            "unit": "ns/iter",
            "extra": "iterations: 89656\ncpu: 8503.930579102358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43351.27485998177,
            "unit": "ns/iter",
            "extra": "iterations: 18926\ncpu: 43350.91408644197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37302.40579840317,
            "unit": "ns/iter",
            "extra": "iterations: 22282\ncpu: 37300.906561350035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38101.33967128544,
            "unit": "ns/iter",
            "extra": "iterations: 21721\ncpu: 38099.34625477649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37436.74533375573,
            "unit": "ns/iter",
            "extra": "iterations: 22127\ncpu: 37435.684909838536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 72282.14829692809,
            "unit": "ns/iter",
            "extra": "iterations: 11949\ncpu: 72278.58398192326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 644111.1409999962,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 644105.8999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 516590.23700000264,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516590.50000000664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 509518.5580000248,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509488.59999999736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 506136.74300001323,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506129.3999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 369965.2106374017,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 369955.88856057555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 534271.662000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534219.9000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2713826.2991202227,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2713677.4193548444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1189905.4814814655,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 1189831.4176245204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5299.469599999895,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5299.230000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24361.482049442428,
            "unit": "ns/iter",
            "extra": "iterations: 33453\ncpu: 24360.12315786323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 21883.064648225532,
            "unit": "ns/iter",
            "extra": "iterations: 37851\ncpu: 21882.48659216402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22363.109158837873,
            "unit": "ns/iter",
            "extra": "iterations: 36937\ncpu: 22362.057016000253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 21930.552179938408,
            "unit": "ns/iter",
            "extra": "iterations: 37524\ncpu: 21929.84756422563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 55568.86630000122,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55568.910000000214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 623477.1539999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623424.2000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 620544.8072805067,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 620544.896502501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 617880.79099226,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 617866.7135819859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 617669.6969057779,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 617627.8481012649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 356062.1008950321,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 356050.2034174151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 607475.8498957721,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 607456.9840166789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 572.4258480079784,
            "unit": "ns/iter",
            "extra": "iterations: 1208774\ncpu: 572.3957497431269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3185.8359599343075,
            "unit": "ns/iter",
            "extra": "iterations: 219739\ncpu: 3185.7371700062313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2743.1241832886444,
            "unit": "ns/iter",
            "extra": "iterations: 254833\ncpu: 2742.957152331139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2711.9363558722785,
            "unit": "ns/iter",
            "extra": "iterations: 258767\ncpu: 2711.8357441250128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2131.212631611074,
            "unit": "ns/iter",
            "extra": "iterations: 328145\ncpu: 2131.1225220558076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16471.514905400796,
            "unit": "ns/iter",
            "extra": "iterations: 42971\ncpu: 16470.68022619918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33625.931795291945,
            "unit": "ns/iter",
            "extra": "iterations: 20849\ncpu: 33624.586311093786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7966.073638423752,
            "unit": "ns/iter",
            "extra": "iterations: 87821\ncpu: 7965.962582981346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7851.960607386532,
            "unit": "ns/iter",
            "extra": "iterations: 89103\ncpu: 7851.963458020543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7874.294783508774,
            "unit": "ns/iter",
            "extra": "iterations: 88872\ncpu: 7874.086326402025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15947.318307811574,
            "unit": "ns/iter",
            "extra": "iterations: 44014\ncpu: 15947.209978643337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15083.397598686668,
            "unit": "ns/iter",
            "extra": "iterations: 46308\ncpu: 15083.238317353314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4224.533263536258,
            "unit": "ns/iter",
            "extra": "iterations: 165241\ncpu: 4224.53325748447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 21473.604534394137,
            "unit": "ns/iter",
            "extra": "iterations: 32463\ncpu: 21473.10168499503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17454.04078120348,
            "unit": "ns/iter",
            "extra": "iterations: 40092\ncpu: 17453.891050583654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17276.84056932415,
            "unit": "ns/iter",
            "extra": "iterations: 40469\ncpu: 17276.653734957712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 17895.4352683122,
            "unit": "ns/iter",
            "extra": "iterations: 39208\ncpu: 17895.449908181923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 44802.17312743966,
            "unit": "ns/iter",
            "extra": "iterations: 15607\ncpu: 44800.64073813059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160087.53272311206,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 160087.75743707156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 145608.36831119895,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 145600.05692599626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133546.99523173584,
            "unit": "ns/iter",
            "extra": "iterations: 5243\ncpu: 133543.92523364665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133765.48089415437,
            "unit": "ns/iter",
            "extra": "iterations: 5234\ncpu: 133765.55215896253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83304.37987754196,
            "unit": "ns/iter",
            "extra": "iterations: 8329\ncpu: 83298.97946932305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134478.4859723279,
            "unit": "ns/iter",
            "extra": "iterations: 5204\ncpu: 134475.07686395096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4217.946189582348,
            "unit": "ns/iter",
            "extra": "iterations: 166176\ncpu: 4217.70472270359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 20934.09918466055,
            "unit": "ns/iter",
            "extra": "iterations: 33483\ncpu: 20933.634978944534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17166.097539435763,
            "unit": "ns/iter",
            "extra": "iterations: 40763\ncpu: 17165.152221377073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 16978.154393609668,
            "unit": "ns/iter",
            "extra": "iterations: 41310\ncpu: 16977.775357056547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17506.310729807545,
            "unit": "ns/iter",
            "extra": "iterations: 40038\ncpu: 17505.679604375862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 42944.96778152705,
            "unit": "ns/iter",
            "extra": "iterations: 16295\ncpu: 42943.97667996344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157926.85949110123,
            "unit": "ns/iter",
            "extra": "iterations: 4441\ncpu: 157920.1531186653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130991.89428304325,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 130987.81630740351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131741.54760562629,
            "unit": "ns/iter",
            "extra": "iterations: 5325\ncpu: 131741.61502347424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131175.68193766728,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 131171.7048441588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81904.06014510179,
            "unit": "ns/iter",
            "extra": "iterations: 8546\ncpu: 81902.1296512976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 132093.7890064133,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 132085.68190404226 ns\nthreads: 1"
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
        "date": 1702418335833,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1392.5464535345538,
            "unit": "ns/iter",
            "extra": "iterations: 504601\ncpu: 1392.5043747436096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17007.930057100857,
            "unit": "ns/iter",
            "extra": "iterations: 48511\ncpu: 17007.802354105253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35771.41807249758,
            "unit": "ns/iter",
            "extra": "iterations: 23118\ncpu: 35770.69815728004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53429.97168735633,
            "unit": "ns/iter",
            "extra": "iterations: 15788\ncpu: 53429.522422092734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59444.93620000059,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59445.08000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74751.07968229578,
            "unit": "ns/iter",
            "extra": "iterations: 11709\ncpu: 74751.1572294816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 89050.69244233887,
            "unit": "ns/iter",
            "extra": "iterations: 9712\ncpu: 89047.4258649094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 105696.46996676063,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 105691.96343779688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 123279.5037445235,
            "unit": "ns/iter",
            "extra": "iterations: 7077\ncpu: 123274.66440582162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1244.1297467284317,
            "unit": "ns/iter",
            "extra": "iterations: 561887\ncpu: 1244.0439091845885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1027.6469074206072,
            "unit": "ns/iter",
            "extra": "iterations: 681858\ncpu: 1027.5987082354375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1020.5634417582506,
            "unit": "ns/iter",
            "extra": "iterations: 682500\ncpu: 1020.5381684981685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1008.2751726895775,
            "unit": "ns/iter",
            "extra": "iterations: 695178\ncpu: 1008.2281084844464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1962.0628140491895,
            "unit": "ns/iter",
            "extra": "iterations: 356831\ncpu: 1961.9593028632596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5334.819290000041,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5334.525000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25410.32026384436,
            "unit": "ns/iter",
            "extra": "iterations: 32595\ncpu: 25409.105691056902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23168.38396576985,
            "unit": "ns/iter",
            "extra": "iterations: 35524\ncpu: 23167.379799572125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24278.779046221596,
            "unit": "ns/iter",
            "extra": "iterations: 34075\ncpu: 24277.32942039622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23071.136254687914,
            "unit": "ns/iter",
            "extra": "iterations: 35463\ncpu: 23070.1294306742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 59070.56819999922,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59069.670000000224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 624089.3220000032,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624040.0000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 613845.5412843861,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 613799.1531404379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 609309.5079916671,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 609282.8353022925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 609509.7900629807,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 609470.048985305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 361931.69492933905,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 361326.39235245145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 606668.8710581537,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 606638.1219341274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2575194.1906076972,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2574975.9668508326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1197858.133504503,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 1197801.283697051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3333887.589928023,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3333624.1007194286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8661.36180672906,
            "unit": "ns/iter",
            "extra": "iterations: 97635\ncpu: 8660.804014953632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43138.22535137842,
            "unit": "ns/iter",
            "extra": "iterations: 19210\ncpu: 43137.91775117138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36906.71740389274,
            "unit": "ns/iter",
            "extra": "iterations: 22449\ncpu: 36906.0002672726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37906.35374521599,
            "unit": "ns/iter",
            "extra": "iterations: 21948\ncpu: 37906.4288317843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37217.341778952345,
            "unit": "ns/iter",
            "extra": "iterations: 22339\ncpu: 37216.4420967815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 71517.96734860796,
            "unit": "ns/iter",
            "extra": "iterations: 12220\ncpu: 71518.0523731588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 647518.2590000088,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647512.5999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 517091.6019999936,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517093.0999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 511643.5220000142,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511644.699999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 513905.9300000213,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513908.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 375440.0511945451,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 375433.0204778158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 505202.8979999932,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505204.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2713746.0233918824,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2713666.374269009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1268718.7861716007,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 1268649.2957746466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5384.903789999954,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5384.273000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24282.70456625047,
            "unit": "ns/iter",
            "extra": "iterations: 33879\ncpu: 24281.805838424858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 21606.149998695346,
            "unit": "ns/iter",
            "extra": "iterations: 38287\ncpu: 21604.651709457397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22551.292859089644,
            "unit": "ns/iter",
            "extra": "iterations: 36690\ncpu: 22550.40883074401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22131.77695374927,
            "unit": "ns/iter",
            "extra": "iterations: 37620\ncpu: 22129.883040935583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 56192.357700001594,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56189.45999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 626971.5710000128,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 626963.8000000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 625850.5334757919,
            "unit": "ns/iter",
            "extra": "iterations: 1404\ncpu: 625815.242165243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 514216.79499998165,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514218.80000000185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 617615.143564354,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 617598.6562942037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 359475.6362153311,
            "unit": "ns/iter",
            "extra": "iterations: 2452\ncpu: 359463.9885807512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 640034.9819067591,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 640035.6993736918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 575.8874320463874,
            "unit": "ns/iter",
            "extra": "iterations: 1212592\ncpu: 575.8759747714031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3230.575615621145,
            "unit": "ns/iter",
            "extra": "iterations: 216245\ncpu: 3230.5107632546396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2672.264993431419,
            "unit": "ns/iter",
            "extra": "iterations: 261848\ncpu: 2672.207540252362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2809.2663934585453,
            "unit": "ns/iter",
            "extra": "iterations: 258655\ncpu: 2809.2729697860123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2149.918511514204,
            "unit": "ns/iter",
            "extra": "iterations: 325727\ncpu: 2149.8770442732807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16639.635174901643,
            "unit": "ns/iter",
            "extra": "iterations: 42138\ncpu: 16639.287578907344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33293.27310824171,
            "unit": "ns/iter",
            "extra": "iterations: 20999\ncpu: 33292.17105576456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7921.594766067907,
            "unit": "ns/iter",
            "extra": "iterations: 88423\ncpu: 7921.602976601161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7946.9092042195825,
            "unit": "ns/iter",
            "extra": "iterations: 88253\ncpu: 7946.838067827771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7857.443329517213,
            "unit": "ns/iter",
            "extra": "iterations: 89094\ncpu: 7857.375356365141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15867.030192443,
            "unit": "ns/iter",
            "extra": "iterations: 44117\ncpu: 15866.674977899695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14941.180145959832,
            "unit": "ns/iter",
            "extra": "iterations: 46862\ncpu: 14941.022576927964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4565.546937842879,
            "unit": "ns/iter",
            "extra": "iterations: 153160\ncpu: 4565.554322277396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 21588.34894111971,
            "unit": "ns/iter",
            "extra": "iterations: 32676\ncpu: 21587.929979189503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17491.74879154831,
            "unit": "ns/iter",
            "extra": "iterations: 40134\ncpu: 17491.35396421959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17304.896971196304,
            "unit": "ns/iter",
            "extra": "iterations: 40445\ncpu: 17304.69526517508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 17719.99984798268,
            "unit": "ns/iter",
            "extra": "iterations: 39469\ncpu: 17720.028376700724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45339.04234001525,
            "unit": "ns/iter",
            "extra": "iterations: 15470\ncpu: 45338.08661926326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160664.27327051156,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 160660.62974029008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 135136.77355946208,
            "unit": "ns/iter",
            "extra": "iterations: 5189\ncpu: 135130.1599537486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 135337.58386412018,
            "unit": "ns/iter",
            "extra": "iterations: 5181\ncpu: 135337.92704111265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 135352.7658875767,
            "unit": "ns/iter",
            "extra": "iterations: 5177\ncpu: 135349.8551284526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83900.89981982125,
            "unit": "ns/iter",
            "extra": "iterations: 8325\ncpu: 83900.34834834725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 136291.0007757924,
            "unit": "ns/iter",
            "extra": "iterations: 5156\ncpu: 136287.37393328192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4225.193737993902,
            "unit": "ns/iter",
            "extra": "iterations: 165538\ncpu: 4225.19783977094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21243.689689842606,
            "unit": "ns/iter",
            "extra": "iterations: 32822\ncpu: 21243.748095789146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17242.379841333208,
            "unit": "ns/iter",
            "extra": "iterations: 40588\ncpu: 17242.027200157572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17299.40451878121,
            "unit": "ns/iter",
            "extra": "iterations: 38683\ncpu: 17299.1081353566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17384.191017382596,
            "unit": "ns/iter",
            "extra": "iterations: 40211\ncpu: 17383.805426375682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 43040.44666707833,
            "unit": "ns/iter",
            "extra": "iterations: 16247\ncpu: 43040.536714471054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 158857.8479147808,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 158851.99456028786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 133988.1353968855,
            "unit": "ns/iter",
            "extra": "iterations: 5266\ncpu: 133983.68780858425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 132793.03100775555,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 132790.0359236147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 132857.99924556725,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 132858.22331195706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82131.25339419603,
            "unit": "ns/iter",
            "extra": "iterations: 8544\ncpu: 82130.20833333256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131625.03460075866,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 131618.85931559128 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}