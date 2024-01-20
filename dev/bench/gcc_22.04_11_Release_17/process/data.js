window.BENCHMARK_DATA = {
  "lastUpdate": 1705772064051,
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
        "date": 1702421906391,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1382.5803860299177,
            "unit": "ns/iter",
            "extra": "iterations: 497319\ncpu: 1382.4265712751778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16791.685438976532,
            "unit": "ns/iter",
            "extra": "iterations: 49399\ncpu: 16790.61519463957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35645.05820056632,
            "unit": "ns/iter",
            "extra": "iterations: 21529\ncpu: 35641.562543545915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52960.906810487955,
            "unit": "ns/iter",
            "extra": "iterations: 15946\ncpu: 52958.390819014174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58955.971699998605,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58951.37000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72986.41701453035,
            "unit": "ns/iter",
            "extra": "iterations: 11978\ncpu: 72982.03372850227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88595.26421643229,
            "unit": "ns/iter",
            "extra": "iterations: 9795\ncpu: 88586.31955079119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102629.7166276358,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 102626.99063231841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 118325.8222437399,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 118324.23571724993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1246.135171303816,
            "unit": "ns/iter",
            "extra": "iterations: 560437\ncpu: 1246.1263264202762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1024.7264390962234,
            "unit": "ns/iter",
            "extra": "iterations: 684301\ncpu: 1024.726838043493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 998.1063287083141,
            "unit": "ns/iter",
            "extra": "iterations: 699021\ncpu: 998.0816026986315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1010.4057869093787,
            "unit": "ns/iter",
            "extra": "iterations: 691077\ncpu: 1010.3991306323327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1973.3454813209364,
            "unit": "ns/iter",
            "extra": "iterations: 354462\ncpu: 1973.2233638584648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5280.948129999956,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5280.886999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25767.415443140213,
            "unit": "ns/iter",
            "extra": "iterations: 31807\ncpu: 25766.035778287795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23272.472437908833,
            "unit": "ns/iter",
            "extra": "iterations: 36318\ncpu: 23270.851919158562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23850.28693272783,
            "unit": "ns/iter",
            "extra": "iterations: 34353\ncpu: 23848.630396180768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23131.333773239574,
            "unit": "ns/iter",
            "extra": "iterations: 34856\ncpu: 23130.47681891212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 58315.47800000294,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58314.15 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 616095.2489999544,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616040.2000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 612418.3531073836,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 612380.5084745776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 606678.4842986821,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 606624.494068389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 601571.8442105473,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 601513.4736842111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 359182.5846090289,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 359159.5366156393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 609152.1709881034,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 609142.0462508763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2564812.0331491116,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2564685.082872934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1163047.6992481253,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 1163032.8320801998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3293624.4107142035,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3293564.285714279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8572.000544744504,
            "unit": "ns/iter",
            "extra": "iterations: 99129\ncpu: 8571.924462064586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 42487.49710627408,
            "unit": "ns/iter",
            "extra": "iterations: 19525\ncpu: 42486.366197183124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37138.54404836041,
            "unit": "ns/iter",
            "extra": "iterations: 22498\ncpu: 37137.87003289187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37647.10617873764,
            "unit": "ns/iter",
            "extra": "iterations: 22189\ncpu: 37644.652755869996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37090.343863098264,
            "unit": "ns/iter",
            "extra": "iterations: 22381\ncpu: 37088.00768508986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 71087.96275118605,
            "unit": "ns/iter",
            "extra": "iterations: 12242\ncpu: 71083.80166639412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 650542.382000026,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650525.199999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 515813.01600003825,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515766.9000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 509113.91300002154,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509039.3999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 506445.4760000103,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506449.9999999939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 371984.74607885786,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 371953.20050869026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 624743.6578571604,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 624696.2857142892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2703172.6976742623,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2702995.34883721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1196294.9261146605,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 1196188.6624203853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5137.549749999835,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5137.331999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24872.997313633565,
            "unit": "ns/iter",
            "extra": "iterations: 32758\ncpu: 24872.476952194815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 21606.591993252743,
            "unit": "ns/iter",
            "extra": "iterations: 37943\ncpu: 21605.864059246727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22004.94441601729,
            "unit": "ns/iter",
            "extra": "iterations: 37133\ncpu: 22003.74599412923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 21570.434090427334,
            "unit": "ns/iter",
            "extra": "iterations: 37688\ncpu: 21568.730099766646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 56539.18649999809,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56538.71000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 618431.381999983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 618382.1999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 621431.9163150584,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 621415.4008438811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 617335.6705963971,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 617296.4632454914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 614542.0740997178,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 614491.6897506936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 353248.00000001397,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 353238.1810897422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 615072.9496898657,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 615026.3955892473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 573.2224248870521,
            "unit": "ns/iter",
            "extra": "iterations: 1226985\ncpu: 573.2080669282832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3162.3800118586496,
            "unit": "ns/iter",
            "extra": "iterations: 222622\ncpu: 3162.207239176724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2697.167651715317,
            "unit": "ns/iter",
            "extra": "iterations: 260224\ncpu: 2697.1439990162353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2683.149151370287,
            "unit": "ns/iter",
            "extra": "iterations: 263189\ncpu: 2678.272268217891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2095.1117267845502,
            "unit": "ns/iter",
            "extra": "iterations: 334593\ncpu: 2095.1302029630074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16700.881270385682,
            "unit": "ns/iter",
            "extra": "iterations: 42003\ncpu: 16700.585672451933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33189.226801682344,
            "unit": "ns/iter",
            "extra": "iterations: 21133\ncpu: 33189.518762125335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7820.9475595453,
            "unit": "ns/iter",
            "extra": "iterations: 88672\ncpu: 7820.8385961746335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7781.579503522168,
            "unit": "ns/iter",
            "extra": "iterations: 89430\ncpu: 7781.422341496148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7859.810921816716,
            "unit": "ns/iter",
            "extra": "iterations: 88868\ncpu: 7859.4916055273125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15717.193672033396,
            "unit": "ns/iter",
            "extra": "iterations: 44090\ncpu: 15716.856430029431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14719.281526419245,
            "unit": "ns/iter",
            "extra": "iterations: 47143\ncpu: 14719.419638122134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4185.13701233492,
            "unit": "ns/iter",
            "extra": "iterations: 166277\ncpu: 4184.974470311575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 21410.61502677988,
            "unit": "ns/iter",
            "extra": "iterations: 32675\ncpu: 21410.19127773535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17168.31388043621,
            "unit": "ns/iter",
            "extra": "iterations: 40748\ncpu: 17167.883086286205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17181.394156668848,
            "unit": "ns/iter",
            "extra": "iterations: 41004\ncpu: 17181.262803629128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 17811.11510681652,
            "unit": "ns/iter",
            "extra": "iterations: 39320\ncpu: 17810.422177009037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 44849.19635227337,
            "unit": "ns/iter",
            "extra": "iterations: 15681\ncpu: 44848.54919966823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158573.53539723044,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 158562.0305030725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132929.15575792265,
            "unit": "ns/iter",
            "extra": "iterations: 5271\ncpu: 132924.39764750708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133191.67300307177,
            "unit": "ns/iter",
            "extra": "iterations: 5208\ncpu: 133183.7365591396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133104.7309007947,
            "unit": "ns/iter",
            "extra": "iterations: 5262\ncpu: 133093.27251995483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83141.68616007644,
            "unit": "ns/iter",
            "extra": "iterations: 8396\ncpu: 83130.33587422587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133873.16723940842,
            "unit": "ns/iter",
            "extra": "iterations: 5238\ncpu: 133859.90836196922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4149.963761135183,
            "unit": "ns/iter",
            "extra": "iterations: 168162\ncpu: 4149.637849216863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 20863.818108399013,
            "unit": "ns/iter",
            "extra": "iterations: 33432\ncpu: 20861.83895668808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17732.6307963214,
            "unit": "ns/iter",
            "extra": "iterations: 40888\ncpu: 17730.879475640886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 16815.45222547671,
            "unit": "ns/iter",
            "extra": "iterations: 41654\ncpu: 16814.39477601166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17345.112970918803,
            "unit": "ns/iter",
            "extra": "iterations: 40267\ncpu: 17344.992177217355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 42696.16379782394,
            "unit": "ns/iter",
            "extra": "iterations: 16441\ncpu: 42694.288668572386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156117.7681514461,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 156112.36080178298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130563.4423292223,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 130551.41843971633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130207.89690912553,
            "unit": "ns/iter",
            "extra": "iterations: 5403\ncpu: 130203.12789191346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129469.32261064224,
            "unit": "ns/iter",
            "extra": "iterations: 5378\ncpu: 129454.20230568903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81576.53820985658,
            "unit": "ns/iter",
            "extra": "iterations: 8558\ncpu: 81568.3921476985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130358.2164123596,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 130346.9110532191 ns\nthreads: 1"
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
        "date": 1702422464847,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1378.8007387399605,
            "unit": "ns/iter",
            "extra": "iterations: 498687\ncpu: 1378.7415753769399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16920.378987989294,
            "unit": "ns/iter",
            "extra": "iterations: 48458\ncpu: 16919.406496347354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35944.9023937083,
            "unit": "ns/iter",
            "extra": "iterations: 23144\ncpu: 35943.350328378845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52533.540616772,
            "unit": "ns/iter",
            "extra": "iterations: 15954\ncpu: 52530.167982950974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59094.73560000151,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59092.41000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74696.54152571071,
            "unit": "ns/iter",
            "extra": "iterations: 11824\ncpu: 74690.95060893102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88065.80650754672,
            "unit": "ns/iter",
            "extra": "iterations: 9804\ncpu: 88062.06650346796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103263.61038807326,
            "unit": "ns/iter",
            "extra": "iterations: 8452\ncpu: 103260.6010411737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120103.88077621112,
            "unit": "ns/iter",
            "extra": "iterations: 7163\ncpu: 120101.63339382948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1235.577145803929,
            "unit": "ns/iter",
            "extra": "iterations: 566233\ncpu: 1235.5583302280174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1007.1713962273683,
            "unit": "ns/iter",
            "extra": "iterations: 694321\ncpu: 1007.1443899867661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 998.8796054432598,
            "unit": "ns/iter",
            "extra": "iterations: 701344\ncpu: 999.0399860838617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 992.0116868970623,
            "unit": "ns/iter",
            "extra": "iterations: 702325\ncpu: 992.5232620225672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1922.262238568367,
            "unit": "ns/iter",
            "extra": "iterations: 364340\ncpu: 1922.2017895372478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5430.493650000017,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5430.471000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25583.971508293715,
            "unit": "ns/iter",
            "extra": "iterations: 32255\ncpu: 25582.684855061267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22641.815004660275,
            "unit": "ns/iter",
            "extra": "iterations: 36482\ncpu: 22640.71871059701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23454.189763578008,
            "unit": "ns/iter",
            "extra": "iterations: 35149\ncpu: 23453.762553699988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22850.93970229648,
            "unit": "ns/iter",
            "extra": "iterations: 35673\ncpu: 22850.28172567494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 58460.64549999994,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58454.65000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 612371.1790000072,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612329.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 608368.9194677912,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 608355.8123249293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 606754.2358229652,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 606741.0096818804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 598622.1657381646,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 598588.7186629516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 357049.1171428576,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 357032.16326530604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 602177.271716473,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 602153.6483669205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2555764.7768595326,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2555668.59504132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1170858.445979904,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 1170813.442211054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3316374.1043166276,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3316350.719424472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8707.332653637362,
            "unit": "ns/iter",
            "extra": "iterations: 95631\ncpu: 8706.813690121391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 42444.01121294339,
            "unit": "ns/iter",
            "extra": "iterations: 19531\ncpu: 42443.82264092989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36958.83314843611,
            "unit": "ns/iter",
            "extra": "iterations: 22535\ncpu: 36957.71022853337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37677.555460519914,
            "unit": "ns/iter",
            "extra": "iterations: 22214\ncpu: 37676.91996038554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37525.604343719824,
            "unit": "ns/iter",
            "extra": "iterations: 22239\ncpu: 37524.8167633435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 72534.72209204956,
            "unit": "ns/iter",
            "extra": "iterations: 11950\ncpu: 72533.79079497897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 648392.0329999932,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648362.8999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 515253.0490000231,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515245.3000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 511072.2409999653,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511037.39999999927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 510480.7039999741,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510435.3999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 372032.66510838206,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 372013.64215894457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 504844.48800000333,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504801.2999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2708430.41982507,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2708365.5976676377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1171803.0438047596,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 1171779.974968709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5279.838019999943,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5279.826000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24671.87463789481,
            "unit": "ns/iter",
            "extra": "iterations: 33830\ncpu: 24671.68785101987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 21886.30293622451,
            "unit": "ns/iter",
            "extra": "iterations: 38008\ncpu: 21886.097663649783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22016.574717510342,
            "unit": "ns/iter",
            "extra": "iterations: 37789\ncpu: 22016.213712985245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 21685.019538280245,
            "unit": "ns/iter",
            "extra": "iterations: 38335\ncpu: 21685.000652145703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 56124.70320000398,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56123.93000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 624010.4600000223,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623978.8999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 624335.0745953467,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 624296.9739619951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 616120.7305808284,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 616099.7200839744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 613062.231904412,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 613031.9747013331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 355163.3207623612,
            "unit": "ns/iter",
            "extra": "iterations: 2466\ncpu: 355150.44606650266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 609089.888501755,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 609067.8048780466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 562.1498915214818,
            "unit": "ns/iter",
            "extra": "iterations: 1244947\ncpu: 562.1383882205422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3096.778330182722,
            "unit": "ns/iter",
            "extra": "iterations: 225881\ncpu: 3096.711100092516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2723.336248118107,
            "unit": "ns/iter",
            "extra": "iterations: 256394\ncpu: 2723.2458637877726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2771.3044611004784,
            "unit": "ns/iter",
            "extra": "iterations: 252561\ncpu: 2771.28020557411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2119.782874986764,
            "unit": "ns/iter",
            "extra": "iterations: 331445\ncpu: 2119.7477711233996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16366.450673955946,
            "unit": "ns/iter",
            "extra": "iterations: 42807\ncpu: 16366.010231971404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33177.90372919675,
            "unit": "ns/iter",
            "extra": "iterations: 21211\ncpu: 33177.43152138051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7829.678702625508,
            "unit": "ns/iter",
            "extra": "iterations: 89288\ncpu: 7829.290610160396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7775.245338436656,
            "unit": "ns/iter",
            "extra": "iterations: 89884\ncpu: 7775.13350540702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7850.580991901799,
            "unit": "ns/iter",
            "extra": "iterations: 89404\ncpu: 7850.2818665831865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15677.808772794886,
            "unit": "ns/iter",
            "extra": "iterations: 44638\ncpu: 15677.458667503115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15016.360689610809,
            "unit": "ns/iter",
            "extra": "iterations: 46461\ncpu: 15015.94886033467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4203.935660746033,
            "unit": "ns/iter",
            "extra": "iterations: 165964\ncpu: 4203.85264274181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 21152.031791294397,
            "unit": "ns/iter",
            "extra": "iterations: 32965\ncpu: 21151.1057181858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17243.909081929945,
            "unit": "ns/iter",
            "extra": "iterations: 40498\ncpu: 17243.204602696187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17148.453493786626,
            "unit": "ns/iter",
            "extra": "iterations: 40801\ncpu: 17148.474302100218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 17513.033403340236,
            "unit": "ns/iter",
            "extra": "iterations: 39996\ncpu: 17512.971297129807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45070.54610793668,
            "unit": "ns/iter",
            "extra": "iterations: 15583\ncpu: 45070.46781749369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 162570.64227830898,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 162568.34915489532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 135461.94146246472,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 135461.29910540802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134363.51447191753,
            "unit": "ns/iter",
            "extra": "iterations: 5217\ncpu: 134365.30573126377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 135518.51064242044,
            "unit": "ns/iter",
            "extra": "iterations: 5168\ncpu: 135520.22058823454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82747.6139749338,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 82746.60676282801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134799.8618624429,
            "unit": "ns/iter",
            "extra": "iterations: 5176\ncpu: 134797.623647606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4121.727991344547,
            "unit": "ns/iter",
            "extra": "iterations: 169138\ncpu: 4121.574099256195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 20959.010806765717,
            "unit": "ns/iter",
            "extra": "iterations: 33405\ncpu: 20957.940428079815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17078.5091189504,
            "unit": "ns/iter",
            "extra": "iterations: 40849\ncpu: 17078.704497050134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 16506.86575889325,
            "unit": "ns/iter",
            "extra": "iterations: 42081\ncpu: 16506.580166820997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17348.126226793007,
            "unit": "ns/iter",
            "extra": "iterations: 40451\ncpu: 17347.845541519255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 42911.479083481405,
            "unit": "ns/iter",
            "extra": "iterations: 16279\ncpu: 42911.573192456955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 159702.68798360307,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 159699.22621756716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 132617.40666414067,
            "unit": "ns/iter",
            "extra": "iterations: 5282\ncpu: 132605.13063233712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 132624.70509180054,
            "unit": "ns/iter",
            "extra": "iterations: 5283\ncpu: 132626.50009464243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131390.2450778131,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 131389.91186949398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82375.48530960725,
            "unit": "ns/iter",
            "extra": "iterations: 8543\ncpu: 82375.24288891393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 133786.12061361523,
            "unit": "ns/iter",
            "extra": "iterations: 5215\ncpu: 133782.7804410357 ns\nthreads: 1"
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
        "date": 1702469384441,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1360.9451525400552,
            "unit": "ns/iter",
            "extra": "iterations: 513898\ncpu: 1360.868304605194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16858.25204219803,
            "unit": "ns/iter",
            "extra": "iterations: 48722\ncpu: 16857.26365912729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35769.8286123274,
            "unit": "ns/iter",
            "extra": "iterations: 23053\ncpu: 35769.5787966859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53046.557013687016,
            "unit": "ns/iter",
            "extra": "iterations: 15926\ncpu: 53045.573276403324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59423.62540000091,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59423.22999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74124.0216395113,
            "unit": "ns/iter",
            "extra": "iterations: 11784\ncpu: 74121.3424983028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88377.27902698166,
            "unit": "ns/iter",
            "extra": "iterations: 9784\ncpu: 88372.20973017177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103603.71559632843,
            "unit": "ns/iter",
            "extra": "iterations: 8502\ncpu: 103597.48294518936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120585.99915706621,
            "unit": "ns/iter",
            "extra": "iterations: 7118\ncpu: 120579.36218038775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1254.9309172398239,
            "unit": "ns/iter",
            "extra": "iterations: 556463\ncpu: 1254.8863087033617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1018.1720438603044,
            "unit": "ns/iter",
            "extra": "iterations: 683442\ncpu: 1018.1452120296976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1016.8561985747953,
            "unit": "ns/iter",
            "extra": "iterations: 689715\ncpu: 1016.7635907585023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1008.3661956607478,
            "unit": "ns/iter",
            "extra": "iterations: 693905\ncpu: 1008.2999834271257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1926.4635444575963,
            "unit": "ns/iter",
            "extra": "iterations: 363909\ncpu: 1926.3565891472917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5425.944200000004,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5425.851999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25474.986935049845,
            "unit": "ns/iter",
            "extra": "iterations: 31994\ncpu: 25473.82946802523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22729.51094993884,
            "unit": "ns/iter",
            "extra": "iterations: 35297\ncpu: 22728.812646967166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24069.454923104135,
            "unit": "ns/iter",
            "extra": "iterations: 33942\ncpu: 24067.17341347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23355.8373268609,
            "unit": "ns/iter",
            "extra": "iterations: 35015\ncpu: 23354.390975296323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 58577.74809999796,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58576.179999999666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 617546.1149999818,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617496.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 602505.8470175426,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 602473.3333333343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 613965.416666675,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 613946.2885154067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 610544.5041899569,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 610523.7430167617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 357591.2114427951,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 357581.4676616927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 604715.4947368414,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 604663.7894736836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2585265.5722221443,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2585094.444444438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1162647.189762799,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 1162583.5205992502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3334560.3501804583,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3334450.5415162444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8693.755439412846,
            "unit": "ns/iter",
            "extra": "iterations: 96242\ncpu: 8693.547515637656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 42794.19965975785,
            "unit": "ns/iter",
            "extra": "iterations: 19398\ncpu: 42793.09207134752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36665.029591564555,
            "unit": "ns/iter",
            "extra": "iterations: 22574\ncpu: 36664.36608487657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37714.67006956311,
            "unit": "ns/iter",
            "extra": "iterations: 22138\ncpu: 37713.72301020875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37391.09042937234,
            "unit": "ns/iter",
            "extra": "iterations: 22172\ncpu: 37387.38499007756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 71682.23777207454,
            "unit": "ns/iter",
            "extra": "iterations: 12083\ncpu: 71679.56633286455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 650784.437000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650770.399999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 521524.15399996244,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521502.3999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 516261.67899996747,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516235.2000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 527701.3470000043,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526442.4000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 381584.93388428603,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 381565.1587646784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 507064.07699999545,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507053.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2732409.3870968632,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2732367.1554252217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1195126.575641016,
            "unit": "ns/iter",
            "extra": "iterations: 780\ncpu: 1195077.1794871774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5309.640329999752,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5309.252999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24472.962085025552,
            "unit": "ns/iter",
            "extra": "iterations: 33496\ncpu: 24471.333890613838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 21759.02629714211,
            "unit": "ns/iter",
            "extra": "iterations: 38103\ncpu: 21757.937695194665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22129.468902997425,
            "unit": "ns/iter",
            "extra": "iterations: 37174\ncpu: 22128.280518642016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 21813.12876332827,
            "unit": "ns/iter",
            "extra": "iterations: 38264\ncpu: 21812.0008362952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 56313.619100001226,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56311.99999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 624844.7240000132,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624801.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 618103.2780141693,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 618077.0921985819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 616644.9830628047,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 616620.6774876531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 612025.7943859798,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 612011.4385964925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 357557.3563031858,
            "unit": "ns/iter",
            "extra": "iterations: 2467\ncpu: 357547.3044183204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 610067.9247386495,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 610063.066202088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 552.7481575884738,
            "unit": "ns/iter",
            "extra": "iterations: 1256234\ncpu: 552.6999746862475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3217.0962697531304,
            "unit": "ns/iter",
            "extra": "iterations: 224650\ncpu: 3216.9116403293774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2738.0044914214723,
            "unit": "ns/iter",
            "extra": "iterations: 263391\ncpu: 2737.8342464244997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2813.0459101795864,
            "unit": "ns/iter",
            "extra": "iterations: 248006\ncpu: 2812.8698499229954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2142.9606449195453,
            "unit": "ns/iter",
            "extra": "iterations: 325498\ncpu: 2142.862014513152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16541.96889744277,
            "unit": "ns/iter",
            "extra": "iterations: 42601\ncpu: 16541.682120137946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33276.60979376872,
            "unit": "ns/iter",
            "extra": "iterations: 22014\ncpu: 33275.11129281345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7964.1207747684875,
            "unit": "ns/iter",
            "extra": "iterations: 87510\ncpu: 7963.726431264941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7943.282824851022,
            "unit": "ns/iter",
            "extra": "iterations: 88302\ncpu: 7942.920885144175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7891.51408252313,
            "unit": "ns/iter",
            "extra": "iterations: 88727\ncpu: 7890.988087053524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15962.278969175486,
            "unit": "ns/iter",
            "extra": "iterations: 43926\ncpu: 15961.350908345958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14923.585898009078,
            "unit": "ns/iter",
            "extra": "iterations: 46887\ncpu: 14922.912534391126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4259.092807849239,
            "unit": "ns/iter",
            "extra": "iterations: 163887\ncpu: 4258.860068217765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 21505.593388735088,
            "unit": "ns/iter",
            "extra": "iterations: 32611\ncpu: 21503.879059213064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17456.57670568147,
            "unit": "ns/iter",
            "extra": "iterations: 39984\ncpu: 17455.58223289333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17205.689146392393,
            "unit": "ns/iter",
            "extra": "iterations: 40733\ncpu: 17204.829008420726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 17639.59369725715,
            "unit": "ns/iter",
            "extra": "iterations: 39697\ncpu: 17638.919817618353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45486.93246921799,
            "unit": "ns/iter",
            "extra": "iterations: 15430\ncpu: 45484.828256643195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 162872.8243936583,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 162861.52052238645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 136593.0688780503,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 136592.15609756045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 136191.71631343663,
            "unit": "ns/iter",
            "extra": "iterations: 5143\ncpu: 136183.93933501904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 135521.55598381054,
            "unit": "ns/iter",
            "extra": "iterations: 5189\ncpu: 135515.22451339292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84815.1330102934,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 84809.23076923008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 136849.75351288295,
            "unit": "ns/iter",
            "extra": "iterations: 5124\ncpu: 136841.60811865894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4195.108974895966,
            "unit": "ns/iter",
            "extra": "iterations: 167066\ncpu: 4194.787688697908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 20973.804641934927,
            "unit": "ns/iter",
            "extra": "iterations: 33262\ncpu: 20972.764716493246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 16953.680070648687,
            "unit": "ns/iter",
            "extra": "iterations: 41331\ncpu: 16953.240908761058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 16668.294242561584,
            "unit": "ns/iter",
            "extra": "iterations: 41911\ncpu: 16667.361790460523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17140.151013794766,
            "unit": "ns/iter",
            "extra": "iterations: 40738\ncpu: 17140.01914674284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 42984.68364282657,
            "unit": "ns/iter",
            "extra": "iterations: 16317\ncpu: 42982.306796592966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157718.98583633796,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157709.28507194156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131300.0426611523,
            "unit": "ns/iter",
            "extra": "iterations: 5321\ncpu: 131294.47472279688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130327.84244494712,
            "unit": "ns/iter",
            "extra": "iterations: 5268\ncpu: 130326.8982536046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131552.347923678,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 131541.37673026638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81925.15831968146,
            "unit": "ns/iter",
            "extra": "iterations: 8546\ncpu: 81921.1794991811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 132816.97010153896,
            "unit": "ns/iter",
            "extra": "iterations: 5318\ncpu: 132808.89432117358 ns\nthreads: 1"
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
        "date": 1702479706463,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1345.1026439452858,
            "unit": "ns/iter",
            "extra": "iterations: 492635\ncpu: 1344.9854354643905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16883.260489939967,
            "unit": "ns/iter",
            "extra": "iterations: 48904\ncpu: 16882.371585146408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35608.08812095043,
            "unit": "ns/iter",
            "extra": "iterations: 23150\ncpu: 35605.4514038877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52937.99033634495,
            "unit": "ns/iter",
            "extra": "iterations: 15936\ncpu: 52935.66767068274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58793.77820000116,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58789.83999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73853.05494412265,
            "unit": "ns/iter",
            "extra": "iterations: 11812\ncpu: 73848.14595326787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 90347.44569974489,
            "unit": "ns/iter",
            "extra": "iterations: 9825\ncpu: 90343.21628498734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 104290.41172324178,
            "unit": "ns/iter",
            "extra": "iterations: 8513\ncpu: 104120.94443791847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 119859.13336955241,
            "unit": "ns/iter",
            "extra": "iterations: 7363\ncpu: 119855.01833491778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1248.22180147123,
            "unit": "ns/iter",
            "extra": "iterations: 561430\ncpu: 1248.1940758420458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1025.2200032517737,
            "unit": "ns/iter",
            "extra": "iterations: 682699\ncpu: 1025.1793250026726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1001.8156730899135,
            "unit": "ns/iter",
            "extra": "iterations: 697782\ncpu: 1001.7986993072335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1007.3503827783451,
            "unit": "ns/iter",
            "extra": "iterations: 695311\ncpu: 1007.339881002888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1975.7326898665037,
            "unit": "ns/iter",
            "extra": "iterations: 353709\ncpu: 1975.7113898713355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5290.061100000116,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5290.096000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25651.377974527157,
            "unit": "ns/iter",
            "extra": "iterations: 32190\ncpu: 25650.53743398572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22814.404058836542,
            "unit": "ns/iter",
            "extra": "iterations: 36168\ncpu: 22814.518358770165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23773.59468085098,
            "unit": "ns/iter",
            "extra": "iterations: 34780\ncpu: 23772.63082231172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23093.88696355743,
            "unit": "ns/iter",
            "extra": "iterations: 35838\ncpu: 23093.169261677536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61089.031500000594,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61086.900000000096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 609905.1699999905,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609892.300000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 618316.3497191346,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 618273.2443820222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 604683.5909407685,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 604637.5609756109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 606431.2460262721,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 606392.0525224593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 357873.56676195504,
            "unit": "ns/iter",
            "extra": "iterations: 2449\ncpu: 357859.28950592154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 610084.0603508722,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 610035.2982456159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2581048.50833326,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2580857.5000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1156476.4441687595,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 1156426.9230769235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3355476.36559144,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3355439.426523301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8644.047523612853,
            "unit": "ns/iter",
            "extra": "iterations: 97299\ncpu: 8643.783594898197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 42319.728097909705,
            "unit": "ns/iter",
            "extra": "iterations: 19610\ncpu: 42319.1687914328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36830.1057960109,
            "unit": "ns/iter",
            "extra": "iterations: 22619\ncpu: 36829.338167027774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38029.456412348416,
            "unit": "ns/iter",
            "extra": "iterations: 22059\ncpu: 38029.14456684363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37456.563843574884,
            "unit": "ns/iter",
            "extra": "iterations: 22375\ncpu: 37454.918435754065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 71567.92029348314,
            "unit": "ns/iter",
            "extra": "iterations: 11994\ncpu: 71568.30915457758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 646919.7280701768,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 646898.7240829347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 514705.0460000173,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514698.7999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 508415.57900002954,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508408.1999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 512059.65700000885,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512033.5000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 370803.05475382507,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 370788.8794567041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 501172.7510000128,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501153.6000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2731410.5946745793,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2731229.2899408285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1190324.0101651482,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 1190301.5247776362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5096.273149999888,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5095.997000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24857.957566711575,
            "unit": "ns/iter",
            "extra": "iterations: 32828\ncpu: 24858.10893140012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 21490.471669940394,
            "unit": "ns/iter",
            "extra": "iterations: 38175\ncpu: 21489.930582842153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 21699.412350440725,
            "unit": "ns/iter",
            "extra": "iterations: 37861\ncpu: 21699.10726076968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 21819.221272880975,
            "unit": "ns/iter",
            "extra": "iterations: 37804\ncpu: 21818.28377949437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 56478.21320000048,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56478.52000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 630071.3729999643,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630058.4000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 622460.9101283936,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 622454.4935806008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 618163.9426751618,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 618122.0806794066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 617934.4531360081,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 617903.3121916858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 357365.15362671186,
            "unit": "ns/iter",
            "extra": "iterations: 2454\ncpu: 357358.63895680354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 609637.6166666633,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 609600.833333331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 576.2026834753049,
            "unit": "ns/iter",
            "extra": "iterations: 1215886\ncpu: 576.2029499476128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3145.5899460324445,
            "unit": "ns/iter",
            "extra": "iterations: 220132\ncpu: 3145.5449457598042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2619.5483786393834,
            "unit": "ns/iter",
            "extra": "iterations: 278439\ncpu: 2619.5270777441483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2556.908210261169,
            "unit": "ns/iter",
            "extra": "iterations: 273146\ncpu: 2556.782453339963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2140.620896922256,
            "unit": "ns/iter",
            "extra": "iterations: 328412\ncpu: 2140.4564997624893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16446.308765932972,
            "unit": "ns/iter",
            "extra": "iterations: 42129\ncpu: 16444.99513399324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33339.61424955822,
            "unit": "ns/iter",
            "extra": "iterations: 20941\ncpu: 33337.228403610156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7951.793932050056,
            "unit": "ns/iter",
            "extra": "iterations: 87476\ncpu: 7951.296355571867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7860.506230634859,
            "unit": "ns/iter",
            "extra": "iterations: 88434\ncpu: 7860.204220096327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7868.764726229225,
            "unit": "ns/iter",
            "extra": "iterations: 86733\ncpu: 7868.555221196121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15679.098834593842,
            "unit": "ns/iter",
            "extra": "iterations: 44448\ncpu: 15678.642458603486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14946.627452653667,
            "unit": "ns/iter",
            "extra": "iterations: 46888\ncpu: 14944.28851731794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4224.1971997874725,
            "unit": "ns/iter",
            "extra": "iterations: 165416\ncpu: 4223.9614063935815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 21554.729397977724,
            "unit": "ns/iter",
            "extra": "iterations: 32424\ncpu: 21553.82432765884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17489.018536169817,
            "unit": "ns/iter",
            "extra": "iterations: 39868\ncpu: 17487.869970903957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17242.519886713733,
            "unit": "ns/iter",
            "extra": "iterations: 40605\ncpu: 17242.01699298112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 17713.767806232445,
            "unit": "ns/iter",
            "extra": "iterations: 39635\ncpu: 17712.82200075676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 44974.66963941671,
            "unit": "ns/iter",
            "extra": "iterations: 15586\ncpu: 44974.43218272772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 162057.80407124996,
            "unit": "ns/iter",
            "extra": "iterations: 4323\ncpu: 162053.38885033567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 135060.29905642534,
            "unit": "ns/iter",
            "extra": "iterations: 5193\ncpu: 135058.8484498365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134544.55947560843,
            "unit": "ns/iter",
            "extra": "iterations: 5187\ncpu: 134539.75322922695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134735.4114713226,
            "unit": "ns/iter",
            "extra": "iterations: 5213\ncpu: 134734.12622290512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84046.57336532138,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 84046.01079784076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 136382.9742632594,
            "unit": "ns/iter",
            "extra": "iterations: 5090\ncpu: 136377.3477406703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4162.189938098058,
            "unit": "ns/iter",
            "extra": "iterations: 167523\ncpu: 4162.130573115326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21110.863362864213,
            "unit": "ns/iter",
            "extra": "iterations: 33073\ncpu: 21109.15550449037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17191.318016689984,
            "unit": "ns/iter",
            "extra": "iterations: 40740\ncpu: 17191.394207167596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17012.63513513574,
            "unit": "ns/iter",
            "extra": "iterations: 41218\ncpu: 17011.49012567333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17462.09367050752,
            "unit": "ns/iter",
            "extra": "iterations: 40098\ncpu: 17461.915806274705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 43042.042568897356,
            "unit": "ns/iter",
            "extra": "iterations: 16256\ncpu: 43039.70226377881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 158958.54574346147,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 158959.3870601602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 132121.1625188474,
            "unit": "ns/iter",
            "extra": "iterations: 5304\ncpu: 132114.04600301496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131579.94278747728,
            "unit": "ns/iter",
            "extra": "iterations: 5331\ncpu: 131578.31551303604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130406.79714179476,
            "unit": "ns/iter",
            "extra": "iterations: 5388\ncpu: 130403.45211581455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82235.18854191134,
            "unit": "ns/iter",
            "extra": "iterations: 8518\ncpu: 82228.8917586284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 132345.21743240615,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 132337.60635280664 ns\nthreads: 1"
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
        "date": 1702488547564,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1378.7669708208016,
            "unit": "ns/iter",
            "extra": "iterations: 499637\ncpu: 1378.757578001629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16885.85185866741,
            "unit": "ns/iter",
            "extra": "iterations: 48906\ncpu: 16883.177933177936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35372.4987000807,
            "unit": "ns/iter",
            "extra": "iterations: 23463\ncpu: 35372.66760431318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52921.13368077311,
            "unit": "ns/iter",
            "extra": "iterations: 15926\ncpu: 52920.06153459752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58892.371199999616,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58891.32999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74394.92676918212,
            "unit": "ns/iter",
            "extra": "iterations: 11771\ncpu: 74390.82490867387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88599.36874746038,
            "unit": "ns/iter",
            "extra": "iterations: 9836\ncpu: 88594.54046360306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102647.15683520673,
            "unit": "ns/iter",
            "extra": "iterations: 8544\ncpu: 102642.75514981268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 119750.74371025528,
            "unit": "ns/iter",
            "extra": "iterations: 7234\ncpu: 119745.3414431849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1239.4355672153386,
            "unit": "ns/iter",
            "extra": "iterations: 565667\ncpu: 1239.3485920161534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1022.7029252871132,
            "unit": "ns/iter",
            "extra": "iterations: 685437\ncpu: 1022.6353406658823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1006.4160225838276,
            "unit": "ns/iter",
            "extra": "iterations: 694657\ncpu: 1006.3668832243824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 997.1446408491607,
            "unit": "ns/iter",
            "extra": "iterations: 701669\ncpu: 997.1399620048778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1944.2191858341669,
            "unit": "ns/iter",
            "extra": "iterations: 358723\ncpu: 1944.2020723510918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5373.141209999517,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5372.789000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25507.40832840509,
            "unit": "ns/iter",
            "extra": "iterations: 32131\ncpu: 25505.9039556814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22801.459815950737,
            "unit": "ns/iter",
            "extra": "iterations: 35860\ncpu: 22800.62465142221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23548.505765080874,
            "unit": "ns/iter",
            "extra": "iterations: 35212\ncpu: 23547.53777121436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22888.706784283342,
            "unit": "ns/iter",
            "extra": "iterations: 35936\ncpu: 22887.408170080133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 58496.41529999871,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58491.360000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 609303.5339999915,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609297.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 612925.8395495792,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 612890.7811400403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 612290.5762237752,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 612280.8391608399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 608700.8833333525,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 608696.8055555555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 357690.427396121,
            "unit": "ns/iter",
            "extra": "iterations: 2431\ncpu: 357685.9728506793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 610159.5893854602,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 610125.8379888281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2561914.300275562,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2561926.997245184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1153627.794808365,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1153609.517923364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3318409.2553956164,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3318212.9496402983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8922.532251761377,
            "unit": "ns/iter",
            "extra": "iterations: 94677\ncpu: 8922.483813386549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43270.596882071906,
            "unit": "ns/iter",
            "extra": "iterations: 19436\ncpu: 43269.29409343488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36755.0620185765,
            "unit": "ns/iter",
            "extra": "iterations: 22719\ncpu: 36753.100928737986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38186.52054669475,
            "unit": "ns/iter",
            "extra": "iterations: 21877\ncpu: 38185.06650820509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37425.829710469945,
            "unit": "ns/iter",
            "extra": "iterations: 22174\ncpu: 37424.339316316284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 71695.89570044077,
            "unit": "ns/iter",
            "extra": "iterations: 12071\ncpu: 71692.69323171253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 645714.7360000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645666.9000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 516188.2839999521,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516191.70000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 514168.58400000364,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514129.1999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 511965.23800001614,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511936.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 375118.07584149967,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 375104.9850873461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 504060.19699994434,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504061.8999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2713385.774853805,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2713174.5614035195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1166828.7264743296,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 1166818.695106642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5265.559869999947,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5265.238999999938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25103.68437904151,
            "unit": "ns/iter",
            "extra": "iterations: 32482\ncpu: 25102.810787513146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 21978.452965043358,
            "unit": "ns/iter",
            "extra": "iterations: 37217\ncpu: 21977.604320606144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22121.807285389794,
            "unit": "ns/iter",
            "extra": "iterations: 37335\ncpu: 22120.460693719026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 21633.82948045329,
            "unit": "ns/iter",
            "extra": "iterations: 37937\ncpu: 21632.656773071198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 56441.470300001136,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56438.90000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 623315.8969999978,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623307.699999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 621841.8793470592,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 621813.4847409512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 614874.0996466315,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 614840.1413427545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 636662.7805049209,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 636629.3828892022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 356588.2285485315,
            "unit": "ns/iter",
            "extra": "iterations: 2494\ncpu: 356586.1668003191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 613826.49267273,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 613829.3789253328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 568.8752002826967,
            "unit": "ns/iter",
            "extra": "iterations: 1228264\ncpu: 568.8600333478753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3392.660116425362,
            "unit": "ns/iter",
            "extra": "iterations: 220399\ncpu: 3392.6279157346626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2640.0052621885743,
            "unit": "ns/iter",
            "extra": "iterations: 266049\ncpu: 2639.944897368533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2713.4535168795014,
            "unit": "ns/iter",
            "extra": "iterations: 260643\ncpu: 2713.468614158054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2133.0269885280663,
            "unit": "ns/iter",
            "extra": "iterations: 327843\ncpu: 2133.0151932479966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16604.779529053736,
            "unit": "ns/iter",
            "extra": "iterations: 42128\ncpu: 16604.65011393849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31781.292586894342,
            "unit": "ns/iter",
            "extra": "iterations: 22096\ncpu: 31780.553041274656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7917.05488141547,
            "unit": "ns/iter",
            "extra": "iterations: 88755\ncpu: 7916.924116951164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7842.610068572922,
            "unit": "ns/iter",
            "extra": "iterations: 89685\ncpu: 7842.651502480904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7901.15278781067,
            "unit": "ns/iter",
            "extra": "iterations: 88600\ncpu: 7900.946952595914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16318.841595415824,
            "unit": "ns/iter",
            "extra": "iterations: 43976\ncpu: 16318.571493541862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14908.998721962906,
            "unit": "ns/iter",
            "extra": "iterations: 46947\ncpu: 14908.5777578971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4245.813192015206,
            "unit": "ns/iter",
            "extra": "iterations: 162659\ncpu: 4245.836996415784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 21273.63757121559,
            "unit": "ns/iter",
            "extra": "iterations: 32823\ncpu: 21273.296164275012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17839.50542880096,
            "unit": "ns/iter",
            "extra": "iterations: 39972\ncpu: 17839.14990493372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17138.63272300064,
            "unit": "ns/iter",
            "extra": "iterations: 40852\ncpu: 17138.328600802975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 17670.208966545684,
            "unit": "ns/iter",
            "extra": "iterations: 39547\ncpu: 17670.05082560022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45208.73589047888,
            "unit": "ns/iter",
            "extra": "iterations: 15486\ncpu: 45208.104094020346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161234.2519013576,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 161224.33740493242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134155.31585036014,
            "unit": "ns/iter",
            "extra": "iterations: 5186\ncpu: 134154.1264944075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 135827.61750436362,
            "unit": "ns/iter",
            "extra": "iterations: 5153\ncpu: 135825.3444595369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 135206.91583397624,
            "unit": "ns/iter",
            "extra": "iterations: 5204\ncpu: 135207.45580322755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83860.37236874226,
            "unit": "ns/iter",
            "extra": "iterations: 8266\ncpu: 83858.22646987639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 135533.0496906405,
            "unit": "ns/iter",
            "extra": "iterations: 5172\ncpu: 135530.62645011398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4234.905083134461,
            "unit": "ns/iter",
            "extra": "iterations: 166177\ncpu: 4234.82190676211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21108.185408318797,
            "unit": "ns/iter",
            "extra": "iterations: 33197\ncpu: 21108.30195499589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17177.156010480798,
            "unit": "ns/iter",
            "extra": "iterations: 40837\ncpu: 17176.82738692823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 16706.185950215153,
            "unit": "ns/iter",
            "extra": "iterations: 41780\ncpu: 16705.603159406488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18077.376814123447,
            "unit": "ns/iter",
            "extra": "iterations: 40102\ncpu: 18076.956261533105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 42603.674940392666,
            "unit": "ns/iter",
            "extra": "iterations: 16357\ncpu: 42603.91269792758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 158623.91621376213,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 158622.2826086977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131509.36025544442,
            "unit": "ns/iter",
            "extra": "iterations: 5324\ncpu: 131505.9166040565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131887.72631578834,
            "unit": "ns/iter",
            "extra": "iterations: 5320\ncpu: 131886.7481203015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131135.70041322318,
            "unit": "ns/iter",
            "extra": "iterations: 5324\ncpu: 131128.64387678445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81631.16514619935,
            "unit": "ns/iter",
            "extra": "iterations: 8550\ncpu: 81631.57894736745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 133160.35077630836,
            "unit": "ns/iter",
            "extra": "iterations: 5217\ncpu: 133159.3636189369 ns\nthreads: 1"
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
        "date": 1702491190348,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1396.9013355800837,
            "unit": "ns/iter",
            "extra": "iterations: 505623\ncpu: 1396.822138233427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16864.13751255634,
            "unit": "ns/iter",
            "extra": "iterations: 48781\ncpu: 16863.32998503516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35546.35431949544,
            "unit": "ns/iter",
            "extra": "iterations: 23174\ncpu: 35543.99326831794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53914.29416177009,
            "unit": "ns/iter",
            "extra": "iterations: 15998\ncpu: 53912.839104888095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58345.83719999954,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58340.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74329.97143581696,
            "unit": "ns/iter",
            "extra": "iterations: 11833\ncpu: 74328.665596214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88261.3062734354,
            "unit": "ns/iter",
            "extra": "iterations: 9867\ncpu: 88257.52508361202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103316.27225501716,
            "unit": "ns/iter",
            "extra": "iterations: 8470\ncpu: 103313.707201889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120235.37746756767,
            "unit": "ns/iter",
            "extra": "iterations: 7092\ncpu: 120230.92216582067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1223.618192914937,
            "unit": "ns/iter",
            "extra": "iterations: 565275\ncpu: 1223.5897571978248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 989.0332504282388,
            "unit": "ns/iter",
            "extra": "iterations: 705224\ncpu: 989.0365330731776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 982.756059726283,
            "unit": "ns/iter",
            "extra": "iterations: 712986\ncpu: 982.7331812966879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 978.1047245644495,
            "unit": "ns/iter",
            "extra": "iterations: 716193\ncpu: 978.087191581042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1968.4668990131893,
            "unit": "ns/iter",
            "extra": "iterations: 357799\ncpu: 1968.4060044885514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5287.750390000099,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5287.7840000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25053.41560760055,
            "unit": "ns/iter",
            "extra": "iterations: 33048\ncpu: 25052.74449285889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22877.134667073475,
            "unit": "ns/iter",
            "extra": "iterations: 36089\ncpu: 22877.23406023993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23671.958142350755,
            "unit": "ns/iter",
            "extra": "iterations: 34689\ncpu: 23671.32808671337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23096.0630265122,
            "unit": "ns/iter",
            "extra": "iterations: 35493\ncpu: 23096.221790212112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 59030.221400001894,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59030.6100000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 606896.5740000181,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606873.499999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 608624.5295373786,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 608628.8256227768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 601013.4267955797,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 601011.4640883993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 610809.0258560539,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 610797.6240391353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 353720.04658766196,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 353721.25051082973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 601808.6476719882,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 601804.2390548986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2570638.0635359376,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2570598.066298347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1186488.8094028258,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 1186488.6912325267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3300290.0681004194,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3300225.0896057426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8674.281671507177,
            "unit": "ns/iter",
            "extra": "iterations: 96751\ncpu: 8674.190447643947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43198.65092915517,
            "unit": "ns/iter",
            "extra": "iterations: 19211\ncpu: 43195.96585289672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37108.21026719853,
            "unit": "ns/iter",
            "extra": "iterations: 22343\ncpu: 37107.75634426866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37959.77767699149,
            "unit": "ns/iter",
            "extra": "iterations: 22049\ncpu: 37957.67608508302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37451.71529770445,
            "unit": "ns/iter",
            "extra": "iterations: 22304\ncpu: 37449.57855093259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 71241.50476664136,
            "unit": "ns/iter",
            "extra": "iterations: 12063\ncpu: 71238.6139434636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 647647.1360000175,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647650.5999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 517392.4050000096,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517347.2999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 507370.74400001345,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507374.30000000214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 510974.3010000045,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510977.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 374755.08595744416,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 374732.93617021275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 502353.2630000034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502326.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2706928.177842633,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2706753.9358600536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1187885.8711734687,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 1187848.4693877546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5274.801809999872,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5274.487000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24683.090208171878,
            "unit": "ns/iter",
            "extra": "iterations: 33722\ncpu: 24682.112567463413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 21972.696107542517,
            "unit": "ns/iter",
            "extra": "iterations: 37046\ncpu: 21971.683852507533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22765.71659316461,
            "unit": "ns/iter",
            "extra": "iterations: 36280\ncpu: 22765.01102535825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 21915.82691944685,
            "unit": "ns/iter",
            "extra": "iterations: 37081\ncpu: 21914.961840295506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 56061.52009999618,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56060.58999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 629016.772,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628999.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 615846.4726368212,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 615811.7270788928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 613672.9019054583,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 613649.2589978816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 613338.6973125881,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 613325.3182461085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 357206.4615384663,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 357185.30364372494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 609813.4368055557,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 609783.1944444465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 562.842989320073,
            "unit": "ns/iter",
            "extra": "iterations: 1245514\ncpu: 562.8186435479627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3183.6849179643978,
            "unit": "ns/iter",
            "extra": "iterations: 220514\ncpu: 3183.5733785609905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2658.9984276610744,
            "unit": "ns/iter",
            "extra": "iterations: 263938\ncpu: 2658.8892088293474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2764.806175802161,
            "unit": "ns/iter",
            "extra": "iterations: 251692\ncpu: 2764.6842172178754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2124.492343025206,
            "unit": "ns/iter",
            "extra": "iterations: 330483\ncpu: 2124.397321496107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16505.11522361276,
            "unit": "ns/iter",
            "extra": "iterations: 42283\ncpu: 16504.857744247147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32991.903533952,
            "unit": "ns/iter",
            "extra": "iterations: 21251\ncpu: 32990.96042539194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7811.291460824712,
            "unit": "ns/iter",
            "extra": "iterations: 89470\ncpu: 7811.319995529258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7805.482491312544,
            "unit": "ns/iter",
            "extra": "iterations: 89784\ncpu: 7804.954112091269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7784.897162961083,
            "unit": "ns/iter",
            "extra": "iterations: 88966\ncpu: 7784.595238630497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15676.54224579847,
            "unit": "ns/iter",
            "extra": "iterations: 44679\ncpu: 15675.509747308502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14850.237057278233,
            "unit": "ns/iter",
            "extra": "iterations: 47208\ncpu: 14849.557278427612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4155.036222077885,
            "unit": "ns/iter",
            "extra": "iterations: 167743\ncpu: 4154.820767483598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 21233.131237101505,
            "unit": "ns/iter",
            "extra": "iterations: 32948\ncpu: 21232.129416049636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17376.03560128676,
            "unit": "ns/iter",
            "extra": "iterations: 40139\ncpu: 17375.402974663175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17334.626670863425,
            "unit": "ns/iter",
            "extra": "iterations: 41296\ncpu: 17333.715129794782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 17714.077867512384,
            "unit": "ns/iter",
            "extra": "iterations: 39747\ncpu: 17713.988477117808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 44658.04350322,
            "unit": "ns/iter",
            "extra": "iterations: 15677\ncpu: 44656.305415576906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159807.17672512584,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 159806.42222728112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133343.59724875813,
            "unit": "ns/iter",
            "extra": "iterations: 5234\ncpu: 133334.98280473956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134484.4028094126,
            "unit": "ns/iter",
            "extra": "iterations: 5268\ncpu: 134481.28321943758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134457.77916346636,
            "unit": "ns/iter",
            "extra": "iterations: 5212\ncpu: 134451.07444358995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83241.32079277997,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 83239.41371943925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134921.6026133676,
            "unit": "ns/iter",
            "extra": "iterations: 5204\ncpu: 134916.48731744962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4097.364886567601,
            "unit": "ns/iter",
            "extra": "iterations: 168118\ncpu: 4097.226352918777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 20964.350022458326,
            "unit": "ns/iter",
            "extra": "iterations: 33395\ncpu: 20963.823925737455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 16990.68548621854,
            "unit": "ns/iter",
            "extra": "iterations: 41216\ncpu: 16990.287752329237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 16522.01104358283,
            "unit": "ns/iter",
            "extra": "iterations: 42287\ncpu: 16522.054059166927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17124.810406290395,
            "unit": "ns/iter",
            "extra": "iterations: 40956\ncpu: 17124.328547709538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 42763.48889837757,
            "unit": "ns/iter",
            "extra": "iterations: 16394\ncpu: 42762.19348542169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156936.07476845544,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 156931.081996835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131329.5604747618,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 131329.67219291689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131117.62339864916,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 131110.24868123568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131259.9691497392,
            "unit": "ns/iter",
            "extra": "iterations: 5316\ncpu: 131256.7155756214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81992.83442931339,
            "unit": "ns/iter",
            "extra": "iterations: 8516\ncpu: 81990.68811648726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 132148.9627048395,
            "unit": "ns/iter",
            "extra": "iterations: 5309\ncpu: 132143.15313618432 ns\nthreads: 1"
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
        "date": 1705573908949,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1407.1957499911553,
            "unit": "ns/iter",
            "extra": "iterations: 508046\ncpu: 1407.190687457435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17008.562163949988,
            "unit": "ns/iter",
            "extra": "iterations: 48356\ncpu: 17008.0899991728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35909.40549872816,
            "unit": "ns/iter",
            "extra": "iterations: 23169\ncpu: 35908.87824247917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53286.295615366165,
            "unit": "ns/iter",
            "extra": "iterations: 15828\ncpu: 53286.2522112712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59180.98810000174,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59181.439999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74361.12725225493,
            "unit": "ns/iter",
            "extra": "iterations: 11544\ncpu: 74358.79244629244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88249.96665643349,
            "unit": "ns/iter",
            "extra": "iterations: 9777\ncpu: 88247.67311036107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103441.44779116532,
            "unit": "ns/iter",
            "extra": "iterations: 8466\ncpu: 103438.19985825664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120890.0068568293,
            "unit": "ns/iter",
            "extra": "iterations: 7292\ncpu: 120888.28853538122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1275.6961536776407,
            "unit": "ns/iter",
            "extra": "iterations: 547744\ncpu: 1275.6362461295778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1007.5417429521374,
            "unit": "ns/iter",
            "extra": "iterations: 688751\ncpu: 1007.5246351729426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 999.0543021720363,
            "unit": "ns/iter",
            "extra": "iterations: 699972\ncpu: 999.0273896670142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1024.7379639800986,
            "unit": "ns/iter",
            "extra": "iterations: 686398\ncpu: 1024.7285102812054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1923.722567401405,
            "unit": "ns/iter",
            "extra": "iterations: 364384\ncpu: 1923.7021932905975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5251.265419999527,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5250.793999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24738.282574330384,
            "unit": "ns/iter",
            "extra": "iterations: 32894\ncpu: 24737.471879370107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22777.94931254423,
            "unit": "ns/iter",
            "extra": "iterations: 35275\ncpu: 22777.236002834907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23555.21169302312,
            "unit": "ns/iter",
            "extra": "iterations: 34465\ncpu: 23555.093573190188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23092.495227239655,
            "unit": "ns/iter",
            "extra": "iterations: 35095\ncpu: 23091.57429833314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 58659.44330000161,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58657.589999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 632261.4450000401,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 631731.3999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 611315.0775740136,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 611305.0775740481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 609680.4070922086,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 609631.0638297889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 612094.5854341582,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 612059.0336134465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 363909.91943522735,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 363897.9651162795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 609806.9178947378,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 609757.7543859669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2580691.5911602047,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2580599.7237569145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1179535.3547980331,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 1179495.9595959561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3360037.0288808425,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3359876.173285204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8680.744436046149,
            "unit": "ns/iter",
            "extra": "iterations: 95256\ncpu: 8680.536659108102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43322.39359531269,
            "unit": "ns/iter",
            "extra": "iterations: 19111\ncpu: 43321.699544764786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37150.628874277194,
            "unit": "ns/iter",
            "extra": "iterations: 22359\ncpu: 37150.436066013586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37991.14424575692,
            "unit": "ns/iter",
            "extra": "iterations: 21810\ncpu: 37988.85373681811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37624.45660754106,
            "unit": "ns/iter",
            "extra": "iterations: 22043\ncpu: 37623.36342603087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 71041.3166761598,
            "unit": "ns/iter",
            "extra": "iterations: 12287\ncpu: 71039.09823390582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 649805.592000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649801.1999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 516846.5250000054,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516850.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 514731.44800002046,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514701.3999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 522511.0080000377,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522515.49999999726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 375975.94525234186,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 375966.21043626877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 504759.89800003165,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504746.00000000437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2702521.7871720027,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2702445.4810495684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1170551.2254407923,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 1170477.959697729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5270.16352999965,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5270.036999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24191.27938528056,
            "unit": "ns/iter",
            "extra": "iterations: 33316\ncpu: 24190.47904910564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 21523.482020865787,
            "unit": "ns/iter",
            "extra": "iterations: 37766\ncpu: 21522.716199756327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22499.744664444057,
            "unit": "ns/iter",
            "extra": "iterations: 36313\ncpu: 22498.854404758724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 21754.440634228664,
            "unit": "ns/iter",
            "extra": "iterations: 37589\ncpu: 21754.670249275056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 55858.283300000265,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55856.29999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 632802.7010000028,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632799.5000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 623328.4643109593,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 623308.9045936409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 623816.0402542327,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 623810.9463276815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 615422.0056417256,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 615420.3102961935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 357823.35620916425,
            "unit": "ns/iter",
            "extra": "iterations: 2448\ncpu: 357803.4313725485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 608204.531293474,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 608185.8136300455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 577.5969432300186,
            "unit": "ns/iter",
            "extra": "iterations: 1211802\ncpu: 577.571665998241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3237.320055542646,
            "unit": "ns/iter",
            "extra": "iterations: 216050\ncpu: 3237.3473732932234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2741.7368373479135,
            "unit": "ns/iter",
            "extra": "iterations: 254451\ncpu: 2741.6119410023903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2750.7107916866253,
            "unit": "ns/iter",
            "extra": "iterations: 256642\ncpu: 2750.679935474311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2146.352646308378,
            "unit": "ns/iter",
            "extra": "iterations: 323375\ncpu: 2146.249710088904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16760.35474442142,
            "unit": "ns/iter",
            "extra": "iterations: 42081\ncpu: 16759.798959150266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31910.274414151496,
            "unit": "ns/iter",
            "extra": "iterations: 21934\ncpu: 31908.967812528375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8030.288905204926,
            "unit": "ns/iter",
            "extra": "iterations: 87167\ncpu: 8029.896635194513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7850.486059584397,
            "unit": "ns/iter",
            "extra": "iterations: 88950\ncpu: 7850.251826868979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7918.676100379881,
            "unit": "ns/iter",
            "extra": "iterations: 88583\ncpu: 7918.278902272437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15864.033959356773,
            "unit": "ns/iter",
            "extra": "iterations: 44141\ncpu: 15863.76158220247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14986.028277436319,
            "unit": "ns/iter",
            "extra": "iterations: 51702\ncpu: 14985.10309078949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4234.4667082423375,
            "unit": "ns/iter",
            "extra": "iterations: 165161\ncpu: 4234.34224786725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 21545.093458520078,
            "unit": "ns/iter",
            "extra": "iterations: 32485\ncpu: 21544.36816992428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18177.951147556807,
            "unit": "ns/iter",
            "extra": "iterations: 39998\ncpu: 18177.303865193317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17359.323145083607,
            "unit": "ns/iter",
            "extra": "iterations: 40177\ncpu: 17358.531000323528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 17852.032881814644,
            "unit": "ns/iter",
            "extra": "iterations: 39201\ncpu: 17851.241039769444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45113.448878289084,
            "unit": "ns/iter",
            "extra": "iterations: 15512\ncpu: 45113.247808148095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161463.0532012876,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 161456.95532013208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134080.2695768747,
            "unit": "ns/iter",
            "extra": "iterations: 5223\ncpu: 134074.1336396695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133421.96776050318,
            "unit": "ns/iter",
            "extra": "iterations: 5211\ncpu: 133417.63577048498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134468.19800652485,
            "unit": "ns/iter",
            "extra": "iterations: 5217\ncpu: 134467.79758481728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83336.10445287016,
            "unit": "ns/iter",
            "extra": "iterations: 8444\ncpu: 83334.56892467942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 135551.6743427384,
            "unit": "ns/iter",
            "extra": "iterations: 5211\ncpu: 135552.71540970894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4180.988966380416,
            "unit": "ns/iter",
            "extra": "iterations: 167760\ncpu: 4180.874463519347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 20930.256196371218,
            "unit": "ns/iter",
            "extra": "iterations: 33447\ncpu: 20930.008670433832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 16851.684851974558,
            "unit": "ns/iter",
            "extra": "iterations: 41682\ncpu: 16851.22115061682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 16950.61283603793,
            "unit": "ns/iter",
            "extra": "iterations: 41290\ncpu: 16950.748365221607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17522.495827258135,
            "unit": "ns/iter",
            "extra": "iterations: 39782\ncpu: 17521.801317178517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 42736.22821957978,
            "unit": "ns/iter",
            "extra": "iterations: 16322\ncpu: 42735.68190172731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157362.4505617951,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 157357.97752808998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130224.36873709755,
            "unit": "ns/iter",
            "extra": "iterations: 5329\ncpu: 130225.40814411844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131280.96319132642,
            "unit": "ns/iter",
            "extra": "iterations: 5352\ncpu: 131278.00822122488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130159.87458131806,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 130160.77409750618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82463.84419396713,
            "unit": "ns/iter",
            "extra": "iterations: 8517\ncpu: 82464.45931666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131270.1308586516,
            "unit": "ns/iter",
            "extra": "iterations: 5334\ncpu: 131266.2167229104 ns\nthreads: 1"
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
        "date": 1705771617293,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1383.431456093776,
            "unit": "ns/iter",
            "extra": "iterations: 510235\ncpu: 1383.3882426724942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16909.848811208074,
            "unit": "ns/iter",
            "extra": "iterations: 48747\ncpu: 16909.51443165733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36067.843064114524,
            "unit": "ns/iter",
            "extra": "iterations: 23054\ncpu: 36066.79101240566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53450.73050051063,
            "unit": "ns/iter",
            "extra": "iterations: 15744\ncpu: 53449.98094512195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59124.5167000011,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59124.68000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74710.25793349209,
            "unit": "ns/iter",
            "extra": "iterations: 11817\ncpu: 74709.52864517219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 89297.14933934789,
            "unit": "ns/iter",
            "extra": "iterations: 9763\ncpu: 89293.56755095774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 104120.7690164745,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 104118.96802325582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120885.26968175292,
            "unit": "ns/iter",
            "extra": "iterations: 7164\ncpu: 120883.44500279173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1226.0507044029976,
            "unit": "ns/iter",
            "extra": "iterations: 571193\ncpu: 1226.0432113138647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1001.6480418232929,
            "unit": "ns/iter",
            "extra": "iterations: 698941\ncpu: 1001.6246006458339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 988.1723659693113,
            "unit": "ns/iter",
            "extra": "iterations: 709502\ncpu: 988.1595823549452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 998.270553400748,
            "unit": "ns/iter",
            "extra": "iterations: 701806\ncpu: 998.244244135845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1947.4196094552583,
            "unit": "ns/iter",
            "extra": "iterations: 364875\ncpu: 1947.4124015073671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5171.848249999584,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5171.762999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24964.635756360192,
            "unit": "ns/iter",
            "extra": "iterations: 32934\ncpu: 24963.882310074663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24114.263741260227,
            "unit": "ns/iter",
            "extra": "iterations: 35186\ncpu: 24113.40305803447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23496.74635577067,
            "unit": "ns/iter",
            "extra": "iterations: 34438\ncpu: 23495.98408734534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23076.135675813613,
            "unit": "ns/iter",
            "extra": "iterations: 35091\ncpu: 23075.395400529964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 58688.995199997866,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58686.270000000106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 630963.248999933,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630367.2999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 605589.1973314726,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 605559.6910112365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 612620.1683029208,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 612592.496493689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 610956.9789768457,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 610909.6005606162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 359980.5651815035,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 359960.4785478548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 610455.712982449,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 610424.8421052622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2570981.6005507037,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2570858.9531680397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1154778.7860696185,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 1154716.7910447745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3309711.812949726,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3309592.0863309423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8724.583076152907,
            "unit": "ns/iter",
            "extra": "iterations: 95912\ncpu: 8724.128367670364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43408.15486933659,
            "unit": "ns/iter",
            "extra": "iterations: 19171\ncpu: 43406.79150800686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36740.061706550805,
            "unit": "ns/iter",
            "extra": "iterations: 22607\ncpu: 36738.51461936581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37891.188409737704,
            "unit": "ns/iter",
            "extra": "iterations: 22053\ncpu: 37890.18727610764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37428.90814907996,
            "unit": "ns/iter",
            "extra": "iterations: 22297\ncpu: 37428.40292416033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 71290.89073770479,
            "unit": "ns/iter",
            "extra": "iterations: 12200\ncpu: 71287.59836065606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 646722.1359999939,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646696.299999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 517954.1249999602,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517922.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 561720.1530000103,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561708.0999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 507677.63300007116,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507669.80000000214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 373157.6692015492,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 373155.72454583965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 501282.7200000629,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501283.99999999825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2709129.1778425616,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2709070.2623906597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1170707.9799246537,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 1170685.3199498164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5379.4803599998895,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5379.343999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24525.262365717565,
            "unit": "ns/iter",
            "extra": "iterations: 33884\ncpu: 24524.95278007323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 21559.427307760885,
            "unit": "ns/iter",
            "extra": "iterations: 38663\ncpu: 21559.084913224546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22429.105169339477,
            "unit": "ns/iter",
            "extra": "iterations: 37026\ncpu: 22428.963431102424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22434.0410892707,
            "unit": "ns/iter",
            "extra": "iterations: 37236\ncpu: 22433.62068965508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 56555.86530000391,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56554.23000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 628386.42600002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628343.700000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 618960.15269883,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 618942.3295454527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 610888.3173484252,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 610871.0860366708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 607902.0168302882,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 607872.7910238451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 356866.3676768013,
            "unit": "ns/iter",
            "extra": "iterations: 2475\ncpu: 356850.86868686875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 608494.1672473968,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 608470.801393726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 589.3465611026473,
            "unit": "ns/iter",
            "extra": "iterations: 1187779\ncpu: 589.3433037627381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3163.407143788685,
            "unit": "ns/iter",
            "extra": "iterations: 222403\ncpu: 3163.413712944533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2756.3667535491522,
            "unit": "ns/iter",
            "extra": "iterations: 254367\ncpu: 2756.3732716901322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2794.944965162156,
            "unit": "ns/iter",
            "extra": "iterations: 257764\ncpu: 2794.894942660729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2165.672406961581,
            "unit": "ns/iter",
            "extra": "iterations: 323038\ncpu: 2165.6325262043533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16383.05555949565,
            "unit": "ns/iter",
            "extra": "iterations: 42279\ncpu: 16382.698266278827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33845.820500412025,
            "unit": "ns/iter",
            "extra": "iterations: 20663\ncpu: 33845.30803852301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7991.28884134513,
            "unit": "ns/iter",
            "extra": "iterations: 86937\ncpu: 7991.0360375903665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7897.182238500995,
            "unit": "ns/iter",
            "extra": "iterations: 88461\ncpu: 7897.119634641226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7883.825096806741,
            "unit": "ns/iter",
            "extra": "iterations: 89095\ncpu: 7883.721869914132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16008.131734887733,
            "unit": "ns/iter",
            "extra": "iterations: 43876\ncpu: 16007.936001458776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15080.407349136909,
            "unit": "ns/iter",
            "extra": "iterations: 46400\ncpu: 15080.32112068969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4197.799109123554,
            "unit": "ns/iter",
            "extra": "iterations: 166802\ncpu: 4197.812376350407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 21689.762107996838,
            "unit": "ns/iter",
            "extra": "iterations: 32334\ncpu: 21689.71361415261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17575.06109887997,
            "unit": "ns/iter",
            "extra": "iterations: 39968\ncpu: 17574.829863891162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17435.41227787776,
            "unit": "ns/iter",
            "extra": "iterations: 40349\ncpu: 17435.28959825522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18014.42441979789,
            "unit": "ns/iter",
            "extra": "iterations: 38952\ncpu: 18013.98644485535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45265.659573089375,
            "unit": "ns/iter",
            "extra": "iterations: 15460\ncpu: 45264.53428201789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161633.30633965766,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 161629.80101804828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 136978.9245837485,
            "unit": "ns/iter",
            "extra": "iterations: 5105\ncpu: 136977.96278158794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 135526.30599185012,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 135522.9784758582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 135941.50009719562,
            "unit": "ns/iter",
            "extra": "iterations: 5145\ncpu: 135940.15549076843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84544.52686621086,
            "unit": "ns/iter",
            "extra": "iterations: 8319\ncpu: 84540.6659454258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 135206.7279907644,
            "unit": "ns/iter",
            "extra": "iterations: 5191\ncpu: 135204.87382007262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4190.187053204866,
            "unit": "ns/iter",
            "extra": "iterations: 166883\ncpu: 4190.006771211008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21082.36824813026,
            "unit": "ns/iter",
            "extra": "iterations: 33176\ncpu: 21081.543887147065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17297.44066580964,
            "unit": "ns/iter",
            "extra": "iterations: 40432\ncpu: 17297.296695686564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 16904.067192914215,
            "unit": "ns/iter",
            "extra": "iterations: 41552\ncpu: 16904.098479014097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17330.258018796994,
            "unit": "ns/iter",
            "extra": "iterations: 40218\ncpu: 17329.96668158534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 43125.428306431764,
            "unit": "ns/iter",
            "extra": "iterations: 16173\ncpu: 43124.89952389755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 158249.38261263934,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 158246.8417477922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131593.31420508143,
            "unit": "ns/iter",
            "extra": "iterations: 5315\ncpu: 131589.55785512718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130663.25373413273,
            "unit": "ns/iter",
            "extra": "iterations: 5356\ncpu: 130662.43465272791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131826.0524732149,
            "unit": "ns/iter",
            "extra": "iterations: 5317\ncpu: 131824.95768290586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82294.05665922853,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 82294.21652756544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131915.63422439978,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 131914.777861446 ns\nthreads: 1"
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
        "date": 1705772059967,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1392.5075716211022,
            "unit": "ns/iter",
            "extra": "iterations: 488997\ncpu: 1392.4649844477574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17030.874021732583,
            "unit": "ns/iter",
            "extra": "iterations: 48683\ncpu: 17030.6410862108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35955.74077084246,
            "unit": "ns/iter",
            "extra": "iterations: 23377\ncpu: 35954.00179663773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53139.91235034679,
            "unit": "ns/iter",
            "extra": "iterations: 15870\ncpu: 53138.59483301828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59291.94750000021,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59291.58999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74544.81294227905,
            "unit": "ns/iter",
            "extra": "iterations: 11729\ncpu: 74542.69758717713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88803.64560213641,
            "unit": "ns/iter",
            "extra": "iterations: 9732\ncpu: 88799.39375256893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102527.9712467597,
            "unit": "ns/iter",
            "extra": "iterations: 8486\ncpu: 102525.59509780812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 119969.1685032771,
            "unit": "ns/iter",
            "extra": "iterations: 7169\ncpu: 119964.94629655473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1210.1148630120178,
            "unit": "ns/iter",
            "extra": "iterations: 576182\ncpu: 1210.0780656112101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 997.2662319816757,
            "unit": "ns/iter",
            "extra": "iterations: 702271\ncpu: 997.2057795352492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 985.4031389321119,
            "unit": "ns/iter",
            "extra": "iterations: 711261\ncpu: 985.3883454878023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 989.4010048768732,
            "unit": "ns/iter",
            "extra": "iterations: 705161\ncpu: 989.3614366080951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1955.7741638712398,
            "unit": "ns/iter",
            "extra": "iterations: 353265\ncpu: 1955.7230407767534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5429.7248999998255,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5429.604999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25441.01079425988,
            "unit": "ns/iter",
            "extra": "iterations: 32332\ncpu: 25401.803167140908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22443.722375803813,
            "unit": "ns/iter",
            "extra": "iterations: 36535\ncpu: 22443.26536198166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23287.30134264397,
            "unit": "ns/iter",
            "extra": "iterations: 35229\ncpu: 23286.340798773705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22634.056458344785,
            "unit": "ns/iter",
            "extra": "iterations: 35938\ncpu: 22633.413100339483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 58878.01949999982,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58876.170000000275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 618002.1430000124,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617991.5000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 611424.065201974,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 611397.0233876689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 607569.6367461454,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 607551.6830294522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 610014.3201970423,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 609993.5256861366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 362672.9303380033,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 362658.28524319787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 610098.601551496,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 610066.5021156558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2570765.787292773,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2570586.7403314915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1178418.8585987294,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 1178365.2229299368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3324559.489208621,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3324349.640287775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8669.693442446296,
            "unit": "ns/iter",
            "extra": "iterations: 92870\ncpu: 8669.081511790673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 42617.86806771754,
            "unit": "ns/iter",
            "extra": "iterations: 18843\ncpu: 42615.93164570392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37057.469816509714,
            "unit": "ns/iter",
            "extra": "iterations: 22181\ncpu: 37056.27789549612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37902.72734795302,
            "unit": "ns/iter",
            "extra": "iterations: 21753\ncpu: 37901.0986990302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37153.46945527055,
            "unit": "ns/iter",
            "extra": "iterations: 22066\ncpu: 37151.336898395566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 72477.51936256367,
            "unit": "ns/iter",
            "extra": "iterations: 12111\ncpu: 72475.92271488703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 653345.1409999884,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653289.2999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 521459.3999999977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521457.29999999446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 518091.8660000202,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518080.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 516454.8109999885,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516442.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 376230.73159246414,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 376225.9845890406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 503246.50600001065,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503237.5000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2741548.253687375,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2741377.8761062003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1207266.305412365,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 1207201.030927835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5223.664069999927,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5223.28899999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24414.626414758055,
            "unit": "ns/iter",
            "extra": "iterations: 33663\ncpu: 24413.733178861152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 21389.331209696644,
            "unit": "ns/iter",
            "extra": "iterations: 38613\ncpu: 21388.206044596274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 21678.398679225425,
            "unit": "ns/iter",
            "extra": "iterations: 38008\ncpu: 21677.30477794155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 21853.544213712932,
            "unit": "ns/iter",
            "extra": "iterations: 37658\ncpu: 21851.77651495035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 56666.529699998595,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56665.44000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 627533.6100000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 627483.0999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 503363.59900001076,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503313.99999999604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 621211.0989399332,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 621175.2650176721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 619766.5142653319,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 619753.9942938681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 359956.5348646483,
            "unit": "ns/iter",
            "extra": "iterations: 2438\ncpu: 359935.1107465122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 614043.3135059449,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 614007.6976906937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 565.4926273021277,
            "unit": "ns/iter",
            "extra": "iterations: 1241947\ncpu: 565.454322930047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3228.666751257372,
            "unit": "ns/iter",
            "extra": "iterations: 216730\ncpu: 3228.4423014811214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2631.882190271789,
            "unit": "ns/iter",
            "extra": "iterations: 265063\ncpu: 2631.6879383392006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2797.4603508902474,
            "unit": "ns/iter",
            "extra": "iterations: 270170\ncpu: 2797.336121701157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2142.697608919477,
            "unit": "ns/iter",
            "extra": "iterations: 326296\ncpu: 2142.5622747444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16471.905455658412,
            "unit": "ns/iter",
            "extra": "iterations: 42488\ncpu: 16471.149501035678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33261.16148651803,
            "unit": "ns/iter",
            "extra": "iterations: 20881\ncpu: 33259.24045783248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7842.607671171417,
            "unit": "ns/iter",
            "extra": "iterations: 89165\ncpu: 7842.227331351949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7789.377865094726,
            "unit": "ns/iter",
            "extra": "iterations: 90093\ncpu: 7789.168969842268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7822.264745413344,
            "unit": "ns/iter",
            "extra": "iterations: 89282\ncpu: 7821.644900427797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15752.851555815425,
            "unit": "ns/iter",
            "extra": "iterations: 44414\ncpu: 15751.97009951812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14654.971012666503,
            "unit": "ns/iter",
            "extra": "iterations: 47607\ncpu: 14654.0844833743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4180.842906225849,
            "unit": "ns/iter",
            "extra": "iterations: 166773\ncpu: 4180.59637950982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 21624.473432798095,
            "unit": "ns/iter",
            "extra": "iterations: 32239\ncpu: 21622.88842706047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17210.95962969337,
            "unit": "ns/iter",
            "extra": "iterations: 40723\ncpu: 17210.42654028456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17204.690485551375,
            "unit": "ns/iter",
            "extra": "iterations: 40696\ncpu: 17204.162571260014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 17753.74113069336,
            "unit": "ns/iter",
            "extra": "iterations: 39321\ncpu: 17753.18277765061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 44603.711089866265,
            "unit": "ns/iter",
            "extra": "iterations: 15690\ncpu: 44602.00764818424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159568.16792323554,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 159559.24148960444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134077.12619503023,
            "unit": "ns/iter",
            "extra": "iterations: 5230\ncpu: 134070.97514340552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133769.53837342246,
            "unit": "ns/iter",
            "extra": "iterations: 5238\ncpu: 133765.38755250094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 135002.32975665756,
            "unit": "ns/iter",
            "extra": "iterations: 5219\ncpu: 134643.66736922608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83056.31001063684,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 83054.26072568116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 135712.81275206522,
            "unit": "ns/iter",
            "extra": "iterations: 5207\ncpu: 135705.5694257748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4119.788820134197,
            "unit": "ns/iter",
            "extra": "iterations: 168231\ncpu: 4119.702076311696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 20843.43668448251,
            "unit": "ns/iter",
            "extra": "iterations: 33491\ncpu: 20843.319100653836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 16989.488294233084,
            "unit": "ns/iter",
            "extra": "iterations: 41219\ncpu: 16988.997792280024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 16744.054590807016,
            "unit": "ns/iter",
            "extra": "iterations: 42095\ncpu: 16743.96009027195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17261.56884280992,
            "unit": "ns/iter",
            "extra": "iterations: 40607\ncpu: 17261.48201049071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44024.439200785775,
            "unit": "ns/iter",
            "extra": "iterations: 16316\ncpu: 44022.732287325154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157944.61427280967,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 157941.57633242925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131360.2715492941,
            "unit": "ns/iter",
            "extra": "iterations: 5325\ncpu: 131359.3427230049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131466.50848722135,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 131465.60343219628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131138.23282226143,
            "unit": "ns/iter",
            "extra": "iterations: 5283\ncpu: 131136.0590573528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83261.5777856885,
            "unit": "ns/iter",
            "extra": "iterations: 8427\ncpu: 83261.05375578509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 132369.004706322,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 132365.15436747103 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}