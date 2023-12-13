window.BENCHMARK_DATA = {
  "lastUpdate": 1702489613074,
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
      }
    ]
  }
}