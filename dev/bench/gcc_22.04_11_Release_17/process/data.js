window.BENCHMARK_DATA = {
  "lastUpdate": 1702398790862,
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
      }
    ]
  }
}