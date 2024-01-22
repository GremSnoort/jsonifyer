window.BENCHMARK_DATA = {
  "lastUpdate": 1705952901619,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-14 18.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489611439,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16570.93941837792,
            "unit": "ns/iter",
            "extra": "iterations: 42158\ncpu: 16570.05787750842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 134734.7364575011,
            "unit": "ns/iter",
            "extra": "iterations: 6295\ncpu: 134720.76250992852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 254057.48421974064,
            "unit": "ns/iter",
            "extra": "iterations: 3422\ncpu: 254048.21741671543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 372379.6390202025,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 372364.84744305984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 488838.20303715847,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 488822.7221597301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 606322.3885793565,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 606304.3175487465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 582449.2809999811,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582443.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 674520.338224509,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 674487.8209831252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 771991.4118136901,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 771959.9001663893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13353.973733476907,
            "unit": "ns/iter",
            "extra": "iterations: 52348\ncpu: 13353.337281271484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11113.604603041804,
            "unit": "ns/iter",
            "extra": "iterations: 62828\ncpu: 11113.248869930621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11143.25252541114,
            "unit": "ns/iter",
            "extra": "iterations: 63257\ncpu: 11142.863240431889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10960.612322363686,
            "unit": "ns/iter",
            "extra": "iterations: 63754\ncpu: 10960.509144524245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18558.609614873632,
            "unit": "ns/iter",
            "extra": "iterations: 37650\ncpu: 18558.201859229725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55980.345900002256,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55978.089999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 288678.98987171,
            "unit": "ns/iter",
            "extra": "iterations: 2962\ncpu: 288672.6198514517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 225210.9857482139,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 225204.01161256238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 227759.24933402342,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 227754.02237613272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 222592.98411045017,
            "unit": "ns/iter",
            "extra": "iterations: 3839\ncpu: 222579.34357905757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 623164.2947658187,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 623138.0165289271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4235044.66210046,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4234915.525114148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3391439.39051077,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3391312.773722631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3374418.734545295,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3374292.3636363675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3367918.232727127,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3367843.272727268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1967626.6297870881,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1967533.8297872336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3292400.6797152953,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3292250.889679705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12536792.976470679,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12536425.882352918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5515144.299999975,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5515012.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16048508.166666882,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16047854.54545451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 64434.61152275886,
            "unit": "ns/iter",
            "extra": "iterations: 13226\ncpu: 64431.20368970203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 330769.67899804434,
            "unit": "ns/iter",
            "extra": "iterations: 2595\ncpu: 330753.48747591575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 258541.1490832563,
            "unit": "ns/iter",
            "extra": "iterations: 3327\ncpu: 258532.3414487535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 254167.82083823835,
            "unit": "ns/iter",
            "extra": "iterations: 3388\ncpu: 254160.56670602015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 254284.09495548738,
            "unit": "ns/iter",
            "extra": "iterations: 3370\ncpu: 254276.3798219567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 600750.9217993033,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 600746.0899653967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4315698.200000127,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4315574.418604666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3456925.708486799,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3456774.1697416813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3425238.5166053004,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3425107.011070114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3407121.915750931,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3407059.340659345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2013261.5369566733,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2013228.0434782594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3333469.7482013875,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3333370.8633093494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12788918.843373623,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12788533.734939786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5706957.390000298,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5706720.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52961.70230000144,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52961.29000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 283268.71485277987,
            "unit": "ns/iter",
            "extra": "iterations: 3023\ncpu: 283261.3628845521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 219789.3846153787,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 219782.6858759961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 219746.5359897162,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 219738.6889460145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 213679.91625001538,
            "unit": "ns/iter",
            "extra": "iterations: 4000\ncpu: 213670.02499999898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 544236.6082603696,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 544216.5206508143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4250434.662100471,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4250293.607305943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3404657.8284671116,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3404467.883211675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3395515.734545453,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3395408.3636363787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3369588.274368252,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3369519.4945848365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1977309.5774946879,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1977222.5053078502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3306337.252669262,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3306151.957295386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6707.033733230799,
            "unit": "ns/iter",
            "extra": "iterations: 107194\ncpu: 6706.212101423541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36337.61328937357,
            "unit": "ns/iter",
            "extra": "iterations: 19715\ncpu: 36336.95155972612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30019.760584424843,
            "unit": "ns/iter",
            "extra": "iterations: 24092\ncpu: 30019.525153577888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30005.857708666554,
            "unit": "ns/iter",
            "extra": "iterations: 23986\ncpu: 30004.765279746538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22896.526936910548,
            "unit": "ns/iter",
            "extra": "iterations: 30590\ncpu: 22895.763321347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 167460.9906698613,
            "unit": "ns/iter",
            "extra": "iterations: 4180\ncpu: 167452.65550239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 284786.11364560924,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 284765.09164969565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71438.73963890172,
            "unit": "ns/iter",
            "extra": "iterations: 9748\ncpu: 71436.20229790651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71067.17995537004,
            "unit": "ns/iter",
            "extra": "iterations: 9858\ncpu: 71066.7376749852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70860.06721245474,
            "unit": "ns/iter",
            "extra": "iterations: 9894\ncpu: 70853.02203355542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 144284.69581356752,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 144273.27283976143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 133033.48946668804,
            "unit": "ns/iter",
            "extra": "iterations: 5269\ncpu: 133022.88859366192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44620.72012738732,
            "unit": "ns/iter",
            "extra": "iterations: 15700\ncpu: 44620.2866242034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 219195.27386539322,
            "unit": "ns/iter",
            "extra": "iterations: 3195\ncpu: 219184.1940532084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 176491.6530047709,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 176486.29620316866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175829.3866834066,
            "unit": "ns/iter",
            "extra": "iterations: 3980\ncpu: 175823.04020100593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174567.43832873838,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 174561.42106579905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 320969.6484375237,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 320959.0992647073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1223671.4727592133,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1223659.7539543216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1022496.368804706,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1022440.3790087488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1007443.1354466996,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1007381.8443804036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1016757.7456394118,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1016697.5290697794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 655132.9467787027,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 655075.7236227825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 998318.4663805708,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 998272.5321888492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44663.91752314091,
            "unit": "ns/iter",
            "extra": "iterations: 15665\ncpu: 44661.3341844873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219478.0658720296,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 219454.7051442912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 177937.45037381348,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 177926.11497808743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 175698.1659079386,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 175694.2336874041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 176459.49622354805,
            "unit": "ns/iter",
            "extra": "iterations: 3972\ncpu: 176452.08962739262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 318452.0733819338,
            "unit": "ns/iter",
            "extra": "iterations: 2194\ncpu: 318442.5250683692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1222334.4543860804,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1222323.3333333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1016525.8556851321,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1016493.002915443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1014714.305916322,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1014680.086580091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1013443.9724637282,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1013402.4637681171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 655707.6763602609,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 655702.5328330209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1002937.1430615415,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1002930.615164519 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702492183712,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16039.725176731488,
            "unit": "ns/iter",
            "extra": "iterations: 43286\ncpu: 16039.458485422541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131639.7596258793,
            "unit": "ns/iter",
            "extra": "iterations: 6415\ncpu: 131633.6399064692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 247386.29906008698,
            "unit": "ns/iter",
            "extra": "iterations: 3511\ncpu: 247375.1637710054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 359133.38949125237,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 359126.60550458706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 476429.41337718285,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 476409.7039473685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 601368.5023761055,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 601324.9830278344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 569106.2199999805,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569088.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 659137.5067905781,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 659115.7969978562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 754389.0570496963,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 754367.8891605549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12820.517427499553,
            "unit": "ns/iter",
            "extra": "iterations: 54655\ncpu: 12820.245174275004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10811.275057412695,
            "unit": "ns/iter",
            "extra": "iterations: 64881\ncpu: 10810.973936899865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10724.294744437702,
            "unit": "ns/iter",
            "extra": "iterations: 65131\ncpu: 10723.90106093872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10779.919205134649,
            "unit": "ns/iter",
            "extra": "iterations: 64967\ncpu: 10779.247925870055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18157.477054954383,
            "unit": "ns/iter",
            "extra": "iterations: 38614\ncpu: 18156.769565442555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56151.68460000745,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56150.140000000094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 285259.768101436,
            "unit": "ns/iter",
            "extra": "iterations: 2997\ncpu: 285249.51618284953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 231440.86882129792,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 231427.07767517673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 237035.5126143832,
            "unit": "ns/iter",
            "extra": "iterations: 3607\ncpu: 237031.9656224005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 229374.7830417316,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 229358.5464333777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 645530.8869132245,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 645516.2873399719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4082637.8149777874,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4082533.920704844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3259875.856140258,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3259764.5614035064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3238068.2937062825,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3237978.3216783195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3250562.652631647,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3250342.8070175466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1894421.6270491981,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1894379.3032786844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3175542.6666665804,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3175186.5979381413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12117073.636363525,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12116407.954545453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5423127.179999483,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5422710.000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15489892.521738669,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15489060.869565248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63317.32759781724,
            "unit": "ns/iter",
            "extra": "iterations: 13367\ncpu: 63312.9273584199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 355701.6811832304,
            "unit": "ns/iter",
            "extra": "iterations: 2434\ncpu: 355666.7214461797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 270875.40750076546,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 270857.7056413487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 263266.20245022123,
            "unit": "ns/iter",
            "extra": "iterations: 3265\ncpu: 263252.710566617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 265009.0598395769,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 264998.76619370864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 505268.78599998786,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505236.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4182479.0900902683,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4182240.9909909926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3319917.84642826,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3319764.642857161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3312744.9608540623,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3312557.2953736586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3332884.292857281,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3332721.4285714393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1954482.1768422,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1954425.0526315696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3246947.4668986,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3246743.902439021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12492687.305883223,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12492092.941176439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5537536.010000395,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5537185.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53669.26240000111,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53666.660000000375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 284050.4567085255,
            "unit": "ns/iter",
            "extra": "iterations: 3026\ncpu: 284037.34302709764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 227211.70879702418,
            "unit": "ns/iter",
            "extra": "iterations: 3774\ncpu: 227195.2570217279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 227274.80911984757,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 227258.51007422977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 223197.68769551982,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 223177.4244004168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 558900.1562700347,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 558861.6077170417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4121775.3744494948,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4121655.947136572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3258416.6807019324,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3258311.929824549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3265700.986014031,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3265308.041958046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3274358.9964787,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3274103.8732394334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1880206.9090908861,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1880084.646464642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3178283.7133106505,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3178098.293515365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6493.356050365166,
            "unit": "ns/iter",
            "extra": "iterations: 108010\ncpu: 6492.898805666154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36471.02734293301,
            "unit": "ns/iter",
            "extra": "iterations: 19164\ncpu: 36468.67564182833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28984.33890728564,
            "unit": "ns/iter",
            "extra": "iterations: 24160\ncpu: 28982.45447019862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28951.50500537664,
            "unit": "ns/iter",
            "extra": "iterations: 24174\ncpu: 28949.362951931675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22816.861593163398,
            "unit": "ns/iter",
            "extra": "iterations: 30656\ncpu: 22814.551800626155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 168641.95359462517,
            "unit": "ns/iter",
            "extra": "iterations: 4159\ncpu: 168625.7994710278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 276117.3199369787,
            "unit": "ns/iter",
            "extra": "iterations: 2538\ncpu: 276090.9377462585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69588.99731315856,
            "unit": "ns/iter",
            "extra": "iterations: 10049\ncpu: 69583.69987063341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69717.92920442445,
            "unit": "ns/iter",
            "extra": "iterations: 10043\ncpu: 69713.06382555043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69165.09713375523,
            "unit": "ns/iter",
            "extra": "iterations: 10048\ncpu: 69162.86823248361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 145807.39329451582,
            "unit": "ns/iter",
            "extra": "iterations: 4981\ncpu: 145803.81449508283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135744.58967241173,
            "unit": "ns/iter",
            "extra": "iterations: 5403\ncpu: 135734.33277808543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42480.16471374287,
            "unit": "ns/iter",
            "extra": "iterations: 16471\ncpu: 42479.539797219324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 212725.18557955054,
            "unit": "ns/iter",
            "extra": "iterations: 3287\ncpu: 212719.40979616664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 169164.2193766648,
            "unit": "ns/iter",
            "extra": "iterations: 4139\ncpu: 169151.55834742685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 170952.1401025236,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170938.4183548936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 170139.88309790927,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 170126.5465172892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 313668.5929558397,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 313643.4239857346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1186165.3513513012,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1186064.8648648541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 974729.1418637681,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 974641.7246175294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 982225.5710267766,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 982202.8129395262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 982614.0140647268,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 982602.5316455681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 632189.9032549782,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 632136.6184448468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 966589.0965516154,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 966502.7586206947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42346.949537121596,
            "unit": "ns/iter",
            "extra": "iterations: 16527\ncpu: 42343.68003872386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 214986.74132103915,
            "unit": "ns/iter",
            "extra": "iterations: 3255\ncpu: 214968.44854070808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 171838.75018385117,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 171817.11203726268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 171293.2157006584,
            "unit": "ns/iter",
            "extra": "iterations: 4089\ncpu: 171276.37564196545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171875.56349791135,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 171863.54704004008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 311483.06175034837,
            "unit": "ns/iter",
            "extra": "iterations: 2251\ncpu: 311456.24167036806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1178258.3946036918,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1178234.5699831364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 972863.8286908164,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 972843.3147632397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 970428.7447988748,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 970358.8072122126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 981641.4495798408,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 981553.921568624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 631998.1189189061,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 631946.7567567574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 968100.7872928322,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 968089.6408839829 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702503281384,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16783.71118266369,
            "unit": "ns/iter",
            "extra": "iterations: 41618\ncpu: 16781.395069441107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 137159.577605677,
            "unit": "ns/iter",
            "extra": "iterations: 6198\ncpu: 137150.03226847373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 263605.9764670878,
            "unit": "ns/iter",
            "extra": "iterations: 3357\ncpu: 263327.7628835269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 382335.3285087562,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 382300.3070175439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 499960.6919977445,
            "unit": "ns/iter",
            "extra": "iterations: 1737\ncpu: 499902.24525043176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 617358.5298295107,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 617303.4801136366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 595334.362000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595315.9000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 691361.8482810534,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 691313.6771300444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 788910.6737649244,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 788820.5281090296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13245.843173292562,
            "unit": "ns/iter",
            "extra": "iterations: 52778\ncpu: 13244.5810754481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11102.111815315226,
            "unit": "ns/iter",
            "extra": "iterations: 63113\ncpu: 11101.628824489393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10898.994227388434,
            "unit": "ns/iter",
            "extra": "iterations: 64269\ncpu: 10898.566960743132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10946.708043926885,
            "unit": "ns/iter",
            "extra": "iterations: 63924\ncpu: 10946.290907953193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18534.39914026415,
            "unit": "ns/iter",
            "extra": "iterations: 37686\ncpu: 18533.901183463357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55646.23789999814,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55644.56 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 282727.0711214075,
            "unit": "ns/iter",
            "extra": "iterations: 3023\ncpu: 282702.8779358252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 224524.38374242355,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 224509.3692267085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 230582.04426449147,
            "unit": "ns/iter",
            "extra": "iterations: 3705\ncpu: 230558.9743589741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 224950.72145877258,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 224937.9492600424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 518084.3979999281,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518014.100000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4141531.6964287083,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4141186.1607142864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3320533.1075270157,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3320135.4838709664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3271373.5669012335,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3271081.6901408383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3345151.9964539832,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3344947.5177304917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1940516.2857144887,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1940302.9411764715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3223791.972125436,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3223505.923344949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12492908.717647022,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12491316.47058824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5765210.380000099,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5764598.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15915636.757575048,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15914087.87878788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 64726.82199819438,
            "unit": "ns/iter",
            "extra": "iterations: 13292\ncpu: 64722.07342762562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 328535.70680429484,
            "unit": "ns/iter",
            "extra": "iterations: 2616\ncpu: 328499.54128440307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 261607.21350362516,
            "unit": "ns/iter",
            "extra": "iterations: 3288\ncpu: 261532.72506082657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 259148.2449532747,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 259131.63603494846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 258845.147358921,
            "unit": "ns/iter",
            "extra": "iterations: 3332\ncpu: 258831.39255702327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 520900.51600009704,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520861.69999999757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4213794.240909217,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4213635.909090902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3395000.4343063133,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3394620.4379562093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3327186.042857225,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3326952.8571428554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3355091.3021581634,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3354811.8705036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1991466.0922746668,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1991163.304721041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3291927.595744545,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3291643.971631212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12797077.68292599,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12795452.439024428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5458936.95000018,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5458302.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53257.46129999516,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53255.80000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 272847.73823340225,
            "unit": "ns/iter",
            "extra": "iterations: 3102\ncpu: 272833.65570599446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 217812.33060035197,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 217784.765934939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 222518.14409449388,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 222498.2414698173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 216540.22546756762,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 216524.3402510894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 589342.898480609,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 589291.7127071843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4171231.3273542407,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4170680.26905831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3348905.982079079,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3348876.7025089413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3296989.021201343,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3296753.7102473555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3328646.7813618286,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3328261.2903225957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1951085.3542975339,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1950913.4171907643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3258402.9230770604,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3258275.5244755303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6554.262484054177,
            "unit": "ns/iter",
            "extra": "iterations: 107397\ncpu: 6553.947503189125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37066.521900129614,
            "unit": "ns/iter",
            "extra": "iterations: 18904\ncpu: 37064.55776555215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29353.214333809192,
            "unit": "ns/iter",
            "extra": "iterations: 23762\ncpu: 29352.600791179215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28318.63746565588,
            "unit": "ns/iter",
            "extra": "iterations: 24748\ncpu: 28317.11249393885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23088.046064501603,
            "unit": "ns/iter",
            "extra": "iterations: 30479\ncpu: 23087.496308933798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 177581.07042969158,
            "unit": "ns/iter",
            "extra": "iterations: 3933\ncpu: 177565.1411136541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 267578.83034006046,
            "unit": "ns/iter",
            "extra": "iterations: 2617\ncpu: 267566.4883454329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71334.02532804612,
            "unit": "ns/iter",
            "extra": "iterations: 9831\ncpu: 71329.17302410743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70048.18396226343,
            "unit": "ns/iter",
            "extra": "iterations: 9964\ncpu: 70046.33681252522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70896.49691514543,
            "unit": "ns/iter",
            "extra": "iterations: 9887\ncpu: 70892.87953878906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 144972.53371949852,
            "unit": "ns/iter",
            "extra": "iterations: 4834\ncpu: 144957.2196938351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 132566.52351275468,
            "unit": "ns/iter",
            "extra": "iterations: 5295\ncpu: 132555.31633616492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44447.51088267247,
            "unit": "ns/iter",
            "extra": "iterations: 15759\ncpu: 44442.33136620367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 217475.47102804846,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 217460.3115264783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 178103.11591257455,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 178068.55617691812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173831.73470398906,
            "unit": "ns/iter",
            "extra": "iterations: 4037\ncpu: 173793.70819915502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175866.23514602246,
            "unit": "ns/iter",
            "extra": "iterations: 3972\ncpu: 175840.25679758235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 328482.8741784152,
            "unit": "ns/iter",
            "extra": "iterations: 2130\ncpu: 328454.88262910856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1215612.6625873933,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1215442.6573426644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1011124.4428365495,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1010997.2503618087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 998864.8801711403,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 998859.0584878913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1013035.0984080564,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1012872.9377713462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 655903.9121495058,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 655850.4672897264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 999770.2174534479,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 999617.4535050066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44722.84480993282,
            "unit": "ns/iter",
            "extra": "iterations: 15626\ncpu: 44717.99564827787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 221470.72494467467,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 221441.19506797724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 180253.07129939782,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 180232.26556445417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 175979.1962851398,
            "unit": "ns/iter",
            "extra": "iterations: 3984\ncpu: 175953.99096385404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178298.14856269478,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 178282.930552022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323646.61891516345,
            "unit": "ns/iter",
            "extra": "iterations: 2157\ncpu: 323618.2661103398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1210466.1848013129,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1210383.4196891175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1012989.3023255666,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1012965.2616279066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 995982.870554668,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 995826.458036994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1007745.4985633623,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1007656.1781609264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 656303.503773574,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 656228.3018867866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 999232.7539341728,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 999120.8869814029 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1705574899410,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16022.677950174928,
            "unit": "ns/iter",
            "extra": "iterations: 43633\ncpu: 16022.91614145257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128122.09856575978,
            "unit": "ns/iter",
            "extra": "iterations: 6554\ncpu: 128117.45498931948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 240720.54925289887,
            "unit": "ns/iter",
            "extra": "iterations: 3614\ncpu: 240718.9263973437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 351503.34041681746,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 351494.6873722925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 462596.2915778505,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 462592.91044776153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 575115.8955717232,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 575115.7303370787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 558188.8440000284,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558191.5000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 639432.1139999875,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639406.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 729529.4917127341,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 729535.2801894236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12630.637671491499,
            "unit": "ns/iter",
            "extra": "iterations: 55469\ncpu: 12630.337666083744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10666.030494679966,
            "unit": "ns/iter",
            "extra": "iterations: 65618\ncpu: 10666.004754792883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10575.148032374991,
            "unit": "ns/iter",
            "extra": "iterations: 66222\ncpu: 10575.216695358042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10604.717376503622,
            "unit": "ns/iter",
            "extra": "iterations: 66095\ncpu: 10604.41334442847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18319.71763658679,
            "unit": "ns/iter",
            "extra": "iterations: 38199\ncpu: 18319.77538679022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54602.158099999084,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54601.40000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 279651.93483956455,
            "unit": "ns/iter",
            "extra": "iterations: 3054\ncpu: 279654.22396856616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 219197.36534501126,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 219193.74356333681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 221568.91734026535,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 221570.35202086045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 218909.8226729048,
            "unit": "ns/iter",
            "extra": "iterations: 3846\ncpu: 218901.79407176338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 622793.2777017234,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 622790.218878247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3966960.397436305,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3966965.811965802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3202978.434482922,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3202885.172413786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3194888.403448533,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3194864.4827586254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3178007.818493205,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3177950.3424657607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1911820.5185951083,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1911816.7355371865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3109519.5268456694,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3109379.530201343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12244640.87356305,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12244458.620689638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5520128.419999537,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5520139.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15704082.205881858,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15704169.117647067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61291.96250000581,
            "unit": "ns/iter",
            "extra": "iterations: 13760\ncpu: 61290.39970930224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 316161.26016259857,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 316161.19733924704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 253069.24594989893,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 253063.79970544938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 255018.61951366972,
            "unit": "ns/iter",
            "extra": "iterations: 3372\ncpu: 255011.12099643992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 250375.49620325083,
            "unit": "ns/iter",
            "extra": "iterations: 3424\ncpu: 250373.89018691538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 617498.6683274152,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 617486.3345195744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4069078.8209609534,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4069018.340611351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3262497.6363636972,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3262428.6713286904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3231123.6864109463,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3231049.4773519104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3215559.743944613,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3215518.3391003385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1968431.4968153867,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1968392.1443736623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3159735.1258502617,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3159673.1292517013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12549409.258824252,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12548938.823529372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5616221.93000062,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5616105.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51710.55360000309,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51711.319999999716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 269881.393891688,
            "unit": "ns/iter",
            "extra": "iterations: 3176\ncpu: 269861.93324937014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 215092.35786038253,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 215088.6991461576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 214230.36719338575,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 214228.21670428937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 209997.33833661492,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 209994.75885826742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 548564.2854442269,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 548564.0831758038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3966623.7948721508,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3966514.1025640974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3208480.9965516767,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3208496.2068965496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3188904.9897259856,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3188886.3013698687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3166121.8020478743,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3166105.460750855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1883957.987829527,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1883953.9553752644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3110030.440000173,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3109953.333333332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6986.507999584562,
            "unit": "ns/iter",
            "extra": "iterations: 105943\ncpu: 6986.503119602029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35756.66624236348,
            "unit": "ns/iter",
            "extra": "iterations: 19640\ncpu: 35755.96232179195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29587.612520539322,
            "unit": "ns/iter",
            "extra": "iterations: 24951\ncpu: 29587.695883932487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28905.486883486436,
            "unit": "ns/iter",
            "extra": "iterations: 25121\ncpu: 28904.94407069783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22595.148820678132,
            "unit": "ns/iter",
            "extra": "iterations: 30950\ncpu: 22595.056542811006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 168238.133637238,
            "unit": "ns/iter",
            "extra": "iterations: 4168\ncpu: 168230.2063339746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 257081.40985400454,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 257078.43065693317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 68795.70188716568,
            "unit": "ns/iter",
            "extra": "iterations: 10174\ncpu: 68794.99705130748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67922.85352113166,
            "unit": "ns/iter",
            "extra": "iterations: 10295\ncpu: 67922.06896551762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 68027.52182789496,
            "unit": "ns/iter",
            "extra": "iterations: 10285\ncpu: 68027.97277588643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142231.1705555625,
            "unit": "ns/iter",
            "extra": "iterations: 5400\ncpu: 142225.2962962955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 127119.23463281865,
            "unit": "ns/iter",
            "extra": "iterations: 5515\ncpu: 127118.34995467034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42294.9246240262,
            "unit": "ns/iter",
            "extra": "iterations: 16557\ncpu: 42293.664311168235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 206771.13404191504,
            "unit": "ns/iter",
            "extra": "iterations: 3387\ncpu: 206769.64865662652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 169156.86810261192,
            "unit": "ns/iter",
            "extra": "iterations: 4132\ncpu: 169152.6621490822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 167176.34718242614,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 167176.5759312325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 167428.1288005624,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 167423.7730428537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 321016.7757353003,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 321015.9466911728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1154866.3190082575,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1154836.3636363503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 970554.7531206101,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 970538.6962552114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 956461.0451437219,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 956462.6538987515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 954650.176870674,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 954632.244897948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 642677.395412877,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 642664.2201834818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 951564.282993223,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 951528.2993197152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42875.66511570569,
            "unit": "ns/iter",
            "extra": "iterations: 16334\ncpu: 42875.78670258324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 207883.91914389646,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 207881.8073721777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 180223.56986366943,
            "unit": "ns/iter",
            "extra": "iterations: 4108\ncpu: 180224.46445959416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 166997.72970392325,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 166993.14708691297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 168315.02855085387,
            "unit": "ns/iter",
            "extra": "iterations: 4168\ncpu: 168315.95489443323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 317747.54916175845,
            "unit": "ns/iter",
            "extra": "iterations: 2207\ncpu: 317743.996375171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1147429.6995072956,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1147407.2249589618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 963695.4077134663,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 963684.9862258912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 955418.4293478184,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 955396.4673913138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 960617.194787381,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 960585.1851851937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 643774.8721251793,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 643777.9208831609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 954722.5088676481,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 954710.9140518375 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772720866,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16496.044409161612,
            "unit": "ns/iter",
            "extra": "iterations: 42829\ncpu: 16494.924000093397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131850.08580295762,
            "unit": "ns/iter",
            "extra": "iterations: 6445\ncpu: 131823.41349883634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 247452.84545456446,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 247437.3863636364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 359940.07175639656,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 359928.7442636628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 483545.61353708484,
            "unit": "ns/iter",
            "extra": "iterations: 1832\ncpu: 483535.0982532748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 589446.6650847712,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 589435.186440678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 568855.726000038,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568850.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 656101.7709999533,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656084.6000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 748212.6502423025,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 748176.9789983836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13066.802269074627,
            "unit": "ns/iter",
            "extra": "iterations: 53502\ncpu: 13065.535867818038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10964.967315277594,
            "unit": "ns/iter",
            "extra": "iterations: 60334\ncpu: 10963.71366062252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10921.46190765686,
            "unit": "ns/iter",
            "extra": "iterations: 64173\ncpu: 10920.675361912325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10851.63624996133,
            "unit": "ns/iter",
            "extra": "iterations: 63978\ncpu: 10851.373909781483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18487.194781507464,
            "unit": "ns/iter",
            "extra": "iterations: 37827\ncpu: 18486.46733814471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56636.20899999842,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56629.41000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 289412.6837114543,
            "unit": "ns/iter",
            "extra": "iterations: 2953\ncpu: 289393.5658652218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 228090.3362232585,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 228075.34543484164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 224893.26552177116,
            "unit": "ns/iter",
            "extra": "iterations: 3785\ncpu: 224876.48612945824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 223104.1920251822,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 223085.6768100741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 620726.6265389632,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 620706.4295485641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4027217.5474137645,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4026924.9999999916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3251046.646853267,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3250812.9370629373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3221873.923875511,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3221708.304498266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3217250.2595156115,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3217105.8823529477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1898383.5267491904,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1898255.1440329212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3148753.156996379,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3148670.3071672297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12212354.390804837,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12212044.827586193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5567174.750000277,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5567042.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15805755.835821632,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15804595.522388026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61452.86762348689,
            "unit": "ns/iter",
            "extra": "iterations: 13726\ncpu: 61447.632230802876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 327772.1108571703,
            "unit": "ns/iter",
            "extra": "iterations: 2625\ncpu: 327750.2095238087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 258148.60686335576,
            "unit": "ns/iter",
            "extra": "iterations: 3322\ncpu: 258130.55388320333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 252246.41558823432,
            "unit": "ns/iter",
            "extra": "iterations: 3400\ncpu: 252218.58823529264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 256700.56489235902,
            "unit": "ns/iter",
            "extra": "iterations: 3344\ncpu: 256681.5490430619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 609292.6293951867,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 609258.7201125213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4095995.3568283063,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4095685.022026409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3313447.2775800303,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3313248.7544484064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3273260.794326282,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3273015.2482269327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3271571.7508772127,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3271377.5438596685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1960429.5762711267,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1960266.3135593175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3194943.87586215,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3194821.0344827706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12536514.964706251,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12535417.647058848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5426527.029999306,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5426390.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53965.01129999933,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53958.80000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 287302.75467290985,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 287282.71028037276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 221894.2457868961,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 221878.63624578706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 218310.4763849827,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 218297.6002042388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 216698.12144309838,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 216681.04674796815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 545679.0909091006,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 545666.2068965557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4035431.922077951,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4035114.71861474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3271835.255244699,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3271572.727272725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3227793.5674740276,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3227546.02076126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3232224.6354168113,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3232031.597222222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1904347.0552145634,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1904234.355828224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3155165.9999998724,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3154917.006802728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6507.13648145191,
            "unit": "ns/iter",
            "extra": "iterations: 107641\ncpu: 6507.001978799866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37043.31930010293,
            "unit": "ns/iter",
            "extra": "iterations: 18860\ncpu: 37042.14740190856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30267.254016832474,
            "unit": "ns/iter",
            "extra": "iterations: 24833\ncpu: 30218.076752708064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29858.073987206477,
            "unit": "ns/iter",
            "extra": "iterations: 23450\ncpu: 29857.773987206656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22857.138979723135,
            "unit": "ns/iter",
            "extra": "iterations: 30580\ncpu: 22856.90647482011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 165905.95746692774,
            "unit": "ns/iter",
            "extra": "iterations: 4232\ncpu: 165902.69376181564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 272806.5357282391,
            "unit": "ns/iter",
            "extra": "iterations: 2561\ncpu: 272794.884810622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69678.87930163505,
            "unit": "ns/iter",
            "extra": "iterations: 9909\ncpu: 69675.48693107221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69071.34923289182,
            "unit": "ns/iter",
            "extra": "iterations: 10168\ncpu: 69070.62352478417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69604.64085830524,
            "unit": "ns/iter",
            "extra": "iterations: 10113\ncpu: 69600.47463660678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142302.42308472886,
            "unit": "ns/iter",
            "extra": "iterations: 4921\ncpu: 142299.55293639304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 128942.10631230137,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 128935.12366186829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43669.760573075204,
            "unit": "ns/iter",
            "extra": "iterations: 15984\ncpu: 43668.80005004983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 217259.7964629297,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 217252.21843003135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 176505.17393498414,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 176501.48726997862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173862.45906943013,
            "unit": "ns/iter",
            "extra": "iterations: 4019\ncpu: 173858.12391141936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174457.8067729151,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 174450.02490039822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 321277.7052873396,
            "unit": "ns/iter",
            "extra": "iterations: 2175\ncpu: 321274.52873563184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1182467.6017093798,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1182425.6410256517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 980830.712482391,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 980758.0645161296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 974695.0278939463,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 974611.7154811636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 976393.739860201,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 976321.9580419632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 646223.3219241435,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 646207.8630897303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 966651.3621170482,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 966579.9442896897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44471.591757687616,
            "unit": "ns/iter",
            "extra": "iterations: 15748\ncpu: 44470.57404114762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219786.862936199,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 219776.89405846802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 176749.53232323896,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 176742.0959595938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 173460.97617863992,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 173450.22332506021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174718.73062547305,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 174704.43558435136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 318622.5428960856,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 318604.9024058078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1169399.5544389053,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1169296.3149078612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 982498.9663393876,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 982429.1725105258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 981299.6960783663,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 981238.6554621892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 980542.9971949802,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 980520.4768583395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 642019.4705881537,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 641973.5294117611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 966884.2448132149,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 966813.4163208926 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774168120,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16221.582515280801,
            "unit": "ns/iter",
            "extra": "iterations: 43192\ncpu: 16221.825801074274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 133165.20590092317,
            "unit": "ns/iter",
            "extra": "iterations: 6338\ncpu: 133165.28873461662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 251936.69232995476,
            "unit": "ns/iter",
            "extra": "iterations: 3455\ncpu: 251933.6903039074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 370107.65741136664,
            "unit": "ns/iter",
            "extra": "iterations: 2341\ncpu: 370105.2968816743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 487918.9674157674,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 487906.4606741575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 606257.9951253706,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 606253.0640668527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 583072.1500000209,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583072.6000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 679155.0722100225,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 679137.855579869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 772106.9858333371,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 772093.333333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13204.200741892253,
            "unit": "ns/iter",
            "extra": "iterations: 53377\ncpu: 13203.803136182243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10994.651323451648,
            "unit": "ns/iter",
            "extra": "iterations: 63546\ncpu: 10994.825795486715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10905.661626239822,
            "unit": "ns/iter",
            "extra": "iterations: 64148\ncpu: 10905.549666396471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10979.646147344482,
            "unit": "ns/iter",
            "extra": "iterations: 63891\ncpu: 10979.681019235888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18656.476187938428,
            "unit": "ns/iter",
            "extra": "iterations: 37544\ncpu: 18656.190070317505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57599.94980001011,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57600.89999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 300079.99544339266,
            "unit": "ns/iter",
            "extra": "iterations: 2853\ncpu: 300081.14265685243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 235730.33250550544,
            "unit": "ns/iter",
            "extra": "iterations: 3624\ncpu: 235726.26931567278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 237622.11160466928,
            "unit": "ns/iter",
            "extra": "iterations: 3602\ncpu: 237623.37590227585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 235138.764961908,
            "unit": "ns/iter",
            "extra": "iterations: 3676\ncpu: 235139.8803046791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 632076.1749643802,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 632051.9203413938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4102960.3141589533,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4102894.247787606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3294730.074733244,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3294679.3594306023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3298503.590747138,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3298412.455516018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3284210.989399354,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3284201.4134275583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1962445.2553192354,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1962355.319148936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3213708.284722117,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3213594.097222229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12548319.32941242,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12547791.764705895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5596719.369999618,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5596427.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16034053.136364132,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16033230.303030329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63763.37888152142,
            "unit": "ns/iter",
            "extra": "iterations: 13268\ncpu: 63761.97618329815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 345355.9070512605,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 345341.9871794882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 269448.11860683945,
            "unit": "ns/iter",
            "extra": "iterations: 3187\ncpu: 269449.54502666986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 268096.32479701925,
            "unit": "ns/iter",
            "extra": "iterations: 3202\ncpu: 268084.00999375316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 263749.73755378317,
            "unit": "ns/iter",
            "extra": "iterations: 3254\ncpu: 263742.3478795339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 618176.6245539286,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 618164.5967166304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4196931.612612261,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4196795.945945924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3342261.1696749674,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3342257.0397111885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3372366.2021659683,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3372218.411552334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3324513.353571287,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3324356.071428574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1999518.1956989644,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1999466.666666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3254454.157894814,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3254293.3333333298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12743595.060240855,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12743240.963855464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5311807.670000235,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5311403.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54984.58660000552,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54981.45999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 294550.5244110659,
            "unit": "ns/iter",
            "extra": "iterations: 2929\ncpu: 294546.0566746337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 230801.68511553717,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 230788.09779688384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 231963.12979989685,
            "unit": "ns/iter",
            "extra": "iterations: 3698\ncpu: 231956.6252028114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 223643.79205851606,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 223636.23301985368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 556069.6329684248,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 556046.6194462318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4136482.479999965,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4136465.7777777817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3307769.444839508,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3307637.010676152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3284157.8445230504,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3284146.6431095246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3271376.50000003,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3271310.9154929654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1943308.1148225975,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1943251.7745302662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3205339.422680259,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3205257.0446735295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6596.47033938323,
            "unit": "ns/iter",
            "extra": "iterations: 105898\ncpu: 6596.220891801554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37080.08632025129,
            "unit": "ns/iter",
            "extra": "iterations: 18860\ncpu: 37080.65747613993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30404.570627189678,
            "unit": "ns/iter",
            "extra": "iterations: 23709\ncpu: 30404.652241764932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30359.052222608087,
            "unit": "ns/iter",
            "extra": "iterations: 23036\ncpu: 30359.111824969757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22962.580591133323,
            "unit": "ns/iter",
            "extra": "iterations: 30450\ncpu: 22962.068965517345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 171630.35861561517,
            "unit": "ns/iter",
            "extra": "iterations: 4074\ncpu: 171627.9086892516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 275488.1357839415,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 275478.91972993035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69231.8021760691,
            "unit": "ns/iter",
            "extra": "iterations: 10110\ncpu: 69230.20771513392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69165.94459833245,
            "unit": "ns/iter",
            "extra": "iterations: 10108\ncpu: 69164.40443213219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69775.99811620294,
            "unit": "ns/iter",
            "extra": "iterations: 10086\ncpu: 69773.9044219702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137908.7995672699,
            "unit": "ns/iter",
            "extra": "iterations: 5084\ncpu: 137910.75924469135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130603.57289910241,
            "unit": "ns/iter",
            "extra": "iterations: 5343\ncpu: 130599.12034437647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43966.389420051535,
            "unit": "ns/iter",
            "extra": "iterations: 15898\ncpu: 43967.05874952801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 215546.49953717052,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 215542.39432274053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 173909.53543893583,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 173907.98308878535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 171671.7073947189,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 171664.7894221369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 171352.22973301908,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 171343.521920159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 325283.73967516376,
            "unit": "ns/iter",
            "extra": "iterations: 2155\ncpu: 325271.2761020836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1194544.0803419142,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1194499.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 990589.5546100176,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 990554.7517730603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 975814.6476323149,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 975760.7242339927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 980522.6013984703,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 980524.1958041968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 650007.8830083071,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 649966.5738161522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 973486.8064067496,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 973455.5710306392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44778.4226540534,
            "unit": "ns/iter",
            "extra": "iterations: 15644\ncpu: 44776.78982357461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 216178.00339609294,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 216170.9169496769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 176817.56087723645,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 176809.37736324596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 174430.60374065375,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 174427.35660847687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 175340.05830832478,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 175336.91191191252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 322747.5871475142,
            "unit": "ns/iter",
            "extra": "iterations: 2163\ncpu: 322725.98243180325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1187272.3327674598,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1187252.2920203651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 986844.3855931979,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 986809.8870056381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 975221.381356045,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 975206.073446328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 983299.4464789049,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 983267.0422535188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 654239.392523327,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 654218.7850467196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 978884.7160839746,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 978866.2937062987 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705777740221,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16580.12984150836,
            "unit": "ns/iter",
            "extra": "iterations: 42652\ncpu: 16579.56719497327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131524.97345133658,
            "unit": "ns/iter",
            "extra": "iterations: 6441\ncpu: 131524.76323552243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 247405.27164007648,
            "unit": "ns/iter",
            "extra": "iterations: 3512\ncpu: 247399.2312072893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 361319.36824467784,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 361316.38039379974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 477711.24396932486,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 477704.9890350876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 591250.2129251375,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 591233.4693877551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 571035.5769999751,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571015.2000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 683956.1470000035,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 683943.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 753128.3065630451,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 753090.5872193438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13016.218109530444,
            "unit": "ns/iter",
            "extra": "iterations: 53574\ncpu: 13016.089894351739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11036.229628461373,
            "unit": "ns/iter",
            "extra": "iterations: 63385\ncpu: 11036.077936420279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10940.104220996325,
            "unit": "ns/iter",
            "extra": "iterations: 64037\ncpu: 10939.658322532263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10958.674133048751,
            "unit": "ns/iter",
            "extra": "iterations: 63931\ncpu: 10958.161142481751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18662.297455284515,
            "unit": "ns/iter",
            "extra": "iterations: 37293\ncpu: 18661.351996353187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56467.818600003746,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56467.7399999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 288842.474519071,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 288831.7921025986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 228713.31614289634,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 228704.05586892331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 228611.6922665263,
            "unit": "ns/iter",
            "extra": "iterations: 3737\ncpu: 228599.09017928792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 224532.04260914892,
            "unit": "ns/iter",
            "extra": "iterations: 3802\ncpu: 224518.41136244131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 642719.9096045386,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 642679.3785310731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4100297.646017523,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4100163.2743362756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3285387.3074205923,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3285210.9540635976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3266090.40845057,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3265885.5633802866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3287010.1843973603,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3286882.624113474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1929193.202083231,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1929093.5416666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3200445.5655173217,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3200187.5862068865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12268157.954022642,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12267216.091954028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5461441.15000061,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5461413.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15818868.358210305,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15817776.119402993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61793.050051148675,
            "unit": "ns/iter",
            "extra": "iterations: 13686\ncpu: 61788.76223878419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 353737.45787547796,
            "unit": "ns/iter",
            "extra": "iterations: 2457\ncpu: 353718.5592185599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 267927.23084111675,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 267925.3271028042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 257969.85233084438,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 257969.92481202882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 255540.86974663756,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 255537.73472429244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 615837.9459843682,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 615834.6126510318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4168168.7757849507,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4168082.959641251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3340560.370503658,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3340362.589928048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3322138.0785716646,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3321991.0714285714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3327776.4535318036,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3327552.0446096607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1968412.4872879456,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1968270.1271186431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3252204.4701752015,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3252045.2631578976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12481119.741176585,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12480468.235294161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5476348.93999998,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5475934.000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53252.8640999999,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53249.13999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 283408.1282135776,
            "unit": "ns/iter",
            "extra": "iterations: 3034\ncpu: 283392.5181278844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 220438.70085248954,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 220423.14647377856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 224159.03733891388,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 224143.59716013708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 216048.59964594312,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 216027.4658573592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 561823.7749675908,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 561802.594033721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4097832.5526313246,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4097576.7543859556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3273542.7964912322,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3273396.491228073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3310183.8480566363,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3310055.477031788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3278316.729824438,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3278140.350877186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1912321.6919917683,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1912247.4332648818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3200245.34246565,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3200043.49315067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6575.653397301695,
            "unit": "ns/iter",
            "extra": "iterations: 106511\ncpu: 6575.407234933501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36398.66060857945,
            "unit": "ns/iter",
            "extra": "iterations: 19258\ncpu: 36396.15224841615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30183.854599150112,
            "unit": "ns/iter",
            "extra": "iterations: 23363\ncpu: 30183.14000770425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29889.343605939164,
            "unit": "ns/iter",
            "extra": "iterations: 23428\ncpu: 29888.693016902987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22920.982051198487,
            "unit": "ns/iter",
            "extra": "iterations: 30587\ncpu: 22920.47274986099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 169967.62706509928,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 169964.1885325567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 272871.43057722214,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 272867.70670826966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69658.75622137687,
            "unit": "ns/iter",
            "extra": "iterations: 10046\ncpu: 69656.8285884924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69569.89413291193,
            "unit": "ns/iter",
            "extra": "iterations: 10022\ncpu: 69569.78646976654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69232.22354796316,
            "unit": "ns/iter",
            "extra": "iterations: 10141\ncpu: 69231.05216448175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142747.41799590443,
            "unit": "ns/iter",
            "extra": "iterations: 4890\ncpu: 142743.64008179965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 129258.0837028794,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 129255.08130081292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43444.336046224926,
            "unit": "ns/iter",
            "extra": "iterations: 16096\ncpu: 43442.82430417463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 208309.76824542612,
            "unit": "ns/iter",
            "extra": "iterations: 3357\ncpu: 208306.94072088334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 168816.10547912103,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 168814.892589912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 171024.19936556212,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 171022.2547584171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 169254.46976294566,
            "unit": "ns/iter",
            "extra": "iterations: 4134\ncpu: 169249.03241412624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 316322.5381489647,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 316319.7291196403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1178394.702020205,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1178365.6565656427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 980171.5988779988,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 980159.7475455864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 976063.2618384542,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 976053.4818941371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 978628.8139861159,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 978586.293706286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 645977.7355371088,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 645960.6978879737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 971208.6435506025,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 971179.0568654587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43749.081222705885,
            "unit": "ns/iter",
            "extra": "iterations: 16030\ncpu: 43748.55271366183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 214182.03181401236,
            "unit": "ns/iter",
            "extra": "iterations: 3269\ncpu: 214176.75130009375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172538.38887523182,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 172537.92763967265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 170964.74480566126,
            "unit": "ns/iter",
            "extra": "iterations: 4091\ncpu: 170962.01417746066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171128.84841076276,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 171128.5330073328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 317304.1358473295,
            "unit": "ns/iter",
            "extra": "iterations: 2201\ncpu: 317298.18264425267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1180834.348561824,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1180831.6412859405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 984303.059154902,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 984303.6619718333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 977807.7006992382,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 977797.2027972158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 982905.7570225665,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 982893.3988763998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 639696.040182625,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 639665.5707762549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 974241.6801675428,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 974252.0949720651 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705952898083,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16571.15060454817,
            "unit": "ns/iter",
            "extra": "iterations: 42263\ncpu: 16571.42890944798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 138189.55590551466,
            "unit": "ns/iter",
            "extra": "iterations: 6350\ncpu: 138175.7637795275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 249851.9606773759,
            "unit": "ns/iter",
            "extra": "iterations: 3484\ncpu: 249841.67623421352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 363105.74052234006,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 363098.14658803714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 480232.5322669492,
            "unit": "ns/iter",
            "extra": "iterations: 1813\ncpu: 480207.2807501381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 598891.8319327716,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 598880.2521008404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 572207.321999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572099.8999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 664937.4542836738,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 664906.4794816406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 758393.7230895474,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 758340.8381265412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13226.455231827968,
            "unit": "ns/iter",
            "extra": "iterations: 52582\ncpu: 13225.835837358814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11146.357759786179,
            "unit": "ns/iter",
            "extra": "iterations: 62869\ncpu: 11145.825446563507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11110.489402819516,
            "unit": "ns/iter",
            "extra": "iterations: 63130\ncpu: 11110.221764612697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11100.24997225485,
            "unit": "ns/iter",
            "extra": "iterations: 63075\ncpu: 11099.809750297274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18587.29019555623,
            "unit": "ns/iter",
            "extra": "iterations: 37585\ncpu: 18585.531462019437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54201.18579999666,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54199.379999999845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 289675.13550135394,
            "unit": "ns/iter",
            "extra": "iterations: 2952\ncpu: 289651.1178861788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 227417.02340425414,
            "unit": "ns/iter",
            "extra": "iterations: 3760\ncpu: 227407.4202127658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 231759.9403025477,
            "unit": "ns/iter",
            "extra": "iterations: 3702\ncpu: 231740.03241491131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 223920.79000000146,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 223916.15789473744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 632123.5208044411,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 632077.1151178936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4138267.888889055,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4137809.3333333274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3304771.601423481,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3304525.2669039075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3291675.0283688256,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3291396.4539007084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3283516.7385159023,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3283398.233215548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1945235.0484211342,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1945044.4210526324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3226641.9263157584,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3226485.964912285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12415598.906976795,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12414994.186046515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5569506.51999955,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5569430.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15888561.447761118,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15888064.17910446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61257.29655921852,
            "unit": "ns/iter",
            "extra": "iterations: 13805\ncpu: 61257.01557406736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 338950.99095199833,
            "unit": "ns/iter",
            "extra": "iterations: 2542\ncpu: 338937.4901652257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 263572.41712707584,
            "unit": "ns/iter",
            "extra": "iterations: 3258\ncpu: 263562.49232658034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 265282.7739049987,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 265273.3806292428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 254124.15348147182,
            "unit": "ns/iter",
            "extra": "iterations: 3375\ncpu: 254108.6518518522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 615026.4911284473,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 615023.2789212198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4178463.699551558,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4178328.6995515563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3349192.6353790914,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3349027.4368231124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3336845.617328544,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3336767.148014436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3324083.0824371274,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3323908.9605734632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1979120.3525640045,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1979056.4102564189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3265224.407017573,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3264924.2105263127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12706053.952381272,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12705013.095238151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5388119.680000045,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5387650.00000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52405.607200000755,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52403.729999999625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282717.8199208557,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 282690.79815303383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 222917.72148263728,
            "unit": "ns/iter",
            "extra": "iterations: 3831\ncpu: 222906.42129992179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 223381.62282297882,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 223362.5942292696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 218240.59515923582,
            "unit": "ns/iter",
            "extra": "iterations: 3925\ncpu: 218234.82802547858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 555205.7605095392,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 555138.9808917189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4132371.9688888458,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4132025.333333331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3303888.7304964685,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3303764.893617019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3303177.833333324,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3302846.453900708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3278310.4070174713,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3278254.736842113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1943505.2630481953,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1943316.0751565658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3218519.401384174,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3218451.557093423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6552.082805807907,
            "unit": "ns/iter",
            "extra": "iterations: 105524\ncpu: 6551.696296577043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35596.50626426292,
            "unit": "ns/iter",
            "extra": "iterations: 19715\ncpu: 35596.784174486194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29785.758794183952,
            "unit": "ns/iter",
            "extra": "iterations: 23453\ncpu: 29785.114910672444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28942.672225444032,
            "unit": "ns/iter",
            "extra": "iterations: 24166\ncpu: 28942.48117189442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21818.635170111902,
            "unit": "ns/iter",
            "extra": "iterations: 32067\ncpu: 21817.8127046496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 168728.0832731771,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 168716.89530686062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263259.30925509654,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 263226.109857038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69895.98245963655,
            "unit": "ns/iter",
            "extra": "iterations: 10034\ncpu: 69892.95395654715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69539.5309155835,
            "unit": "ns/iter",
            "extra": "iterations: 10092\ncpu: 69530.54894966389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 71397.88563251741,
            "unit": "ns/iter",
            "extra": "iterations: 10134\ncpu: 71391.9873692519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 136674.06425234696,
            "unit": "ns/iter",
            "extra": "iterations: 5136\ncpu: 136672.4883177575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130318.03506155583,
            "unit": "ns/iter",
            "extra": "iterations: 5362\ncpu: 130309.23162998761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43212.068476016255,
            "unit": "ns/iter",
            "extra": "iterations: 15991\ncpu: 43211.131261333874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 211652.39866505202,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 211646.81432038898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 171083.66601516347,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 171080.9430735415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 169692.54878639826,
            "unit": "ns/iter",
            "extra": "iterations: 4120\ncpu: 169671.55339805948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 168539.4790462454,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 168531.2620423888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 319163.5886363222,
            "unit": "ns/iter",
            "extra": "iterations: 2200\ncpu: 319135.5909090923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1202141.9707903657,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1202133.6769759606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 999213.5221113163,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 999185.0213980076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 990649.354107724,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 990609.6317280546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 987226.2274011082,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 987213.4180790933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 647782.4261838166,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 647705.849582166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 979504.5070223991,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 979481.741573048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43575.10449619995,
            "unit": "ns/iter",
            "extra": "iterations: 16058\ncpu: 43570.22667829071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 216079.09648583014,
            "unit": "ns/iter",
            "extra": "iterations: 3244\ncpu: 216073.6744759585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 173610.274105374,
            "unit": "ns/iter",
            "extra": "iterations: 4024\ncpu: 173595.30318091542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 171371.37963189362,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 171364.0490797536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171182.3844611284,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 171167.1929824551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 316520.3025248057,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 316504.14788097364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1188479.3039047793,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1188340.57724957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 990721.6827196082,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 990710.4815864024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 987100.1622003218,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 987110.0141043704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 991259.8571429064,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 991140.5940594012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 648367.0101946433,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 648337.9054680204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 985092.1669004615,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 985001.8232819125 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}