window.BENCHMARK_DATA = {
  "lastUpdate": 1702503283554,
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
      }
    ]
  }
}