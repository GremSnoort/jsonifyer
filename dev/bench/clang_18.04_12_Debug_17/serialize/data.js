window.BENCHMARK_DATA = {
  "lastUpdate": 1705962715775,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-12 18.04 Debug c++-17": [
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
        "date": 1702489601191,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8286.032396819037,
            "unit": "ns/iter",
            "extra": "iterations: 84391\ncpu: 8285.76980957685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76322.03750224283,
            "unit": "ns/iter",
            "extra": "iterations: 11146\ncpu: 76321.72976852683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145672.31045969692,
            "unit": "ns/iter",
            "extra": "iterations: 6004\ncpu: 145668.7541638908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 214953.33283803784,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 214946.7062902426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 284004.16955810064,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 283994.5662847791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 350353.41825559345,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 350345.354969574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 418711.91241579904,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 418706.06352261786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 486275.3413676993,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 486256.3340807168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 554418.8975174921,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 554411.139401655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6315.6995630661995,
            "unit": "ns/iter",
            "extra": "iterations: 110772\ncpu: 6315.453363665913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5336.4566622949405,
            "unit": "ns/iter",
            "extra": "iterations: 131156\ncpu: 5336.384153222115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5245.945574310173,
            "unit": "ns/iter",
            "extra": "iterations: 133595\ncpu: 5245.815337400342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5381.560362266855,
            "unit": "ns/iter",
            "extra": "iterations: 128524\ncpu: 5381.442376521109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9296.517839846281,
            "unit": "ns/iter",
            "extra": "iterations: 75365\ncpu: 9296.363033238216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34319.46601058514,
            "unit": "ns/iter",
            "extra": "iterations: 24184\ncpu: 34318.49983460137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 134626.2033764634,
            "unit": "ns/iter",
            "extra": "iterations: 6338\ncpu: 134619.17008520034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 110873.58553401867,
            "unit": "ns/iter",
            "extra": "iterations: 7687\ncpu: 110869.92324704082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 110478.63851793486,
            "unit": "ns/iter",
            "extra": "iterations: 7638\ncpu: 110472.38805970117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111505.69065310812,
            "unit": "ns/iter",
            "extra": "iterations: 7671\ncpu: 111499.99999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 286345.226366567,
            "unit": "ns/iter",
            "extra": "iterations: 3110\ncpu: 286341.1254019288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2250573.7864079694,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2250467.2330097095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1854826.6567460727,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1854778.9682539687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1818875.9785992575,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1818842.8015564205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1856145.9376256713,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1856076.0563380318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1081382.3442239892,
            "unit": "ns/iter",
            "extra": "iterations: 857\ncpu: 1081347.257876313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1790236.4429400216,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1790167.1179883934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7232874.500000435,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7232714.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4153062.977777356,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4152918.222222218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9404890.93043494,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9404602.60869565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34766.0774987316,
            "unit": "ns/iter",
            "extra": "iterations: 23652\ncpu: 34764.43006933867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 136450.54649680768,
            "unit": "ns/iter",
            "extra": "iterations: 6280\ncpu: 136446.99044585956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 112970.60791319907,
            "unit": "ns/iter",
            "extra": "iterations: 7557\ncpu: 112967.30183935467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 111684.28092243623,
            "unit": "ns/iter",
            "extra": "iterations: 7632\ncpu: 111681.17138364718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 112101.03454616753,
            "unit": "ns/iter",
            "extra": "iterations: 7613\ncpu: 112097.97714435852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 275712.60363523185,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 275705.8673469383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2373396.046797879,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2371204.4334975285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1886922.3360324074,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1886853.4412955462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1839077.7584157842,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1838952.871287136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1866895.6467067373,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1866759.8802395219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1093520.7683216415,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1093459.3380614668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1822775.442495143,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1822659.8440545895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7332683.299999871,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7331949.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4102538.8017619,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4102493.392070488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 36062.69150469123,
            "unit": "ns/iter",
            "extra": "iterations: 25673\ncpu: 36060.77980757974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 153872.63887890358,
            "unit": "ns/iter",
            "extra": "iterations: 5566\ncpu: 153870.05030542583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 123073.87578977633,
            "unit": "ns/iter",
            "extra": "iterations: 6964\ncpu: 123067.57610568636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 127319.39217444183,
            "unit": "ns/iter",
            "extra": "iterations: 6696\ncpu: 127314.72520907994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 114809.87072300739,
            "unit": "ns/iter",
            "extra": "iterations: 6722\ncpu: 114804.92412972344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 286330.35170340264,
            "unit": "ns/iter",
            "extra": "iterations: 2994\ncpu: 286315.4642618564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2380046.9921875233,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2379959.6354166693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1903780.0107066366,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1903671.9486081332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1860845.8811880578,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1860755.4455445523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1858808.6307385177,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1858697.8043912186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1075572.6763342153,
            "unit": "ns/iter",
            "extra": "iterations: 862\ncpu: 1075507.5406032554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1804227.1825242564,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1804097.0873786435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3234.2663116458466,
            "unit": "ns/iter",
            "extra": "iterations: 217452\ncpu: 3234.118334161105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17069.933087679125,
            "unit": "ns/iter",
            "extra": "iterations: 40979\ncpu: 17068.87430147134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12692.324196955678,
            "unit": "ns/iter",
            "extra": "iterations: 55383\ncpu: 12691.782676994713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13265.414230462953,
            "unit": "ns/iter",
            "extra": "iterations: 52746\ncpu: 13264.275964054174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10872.428129468544,
            "unit": "ns/iter",
            "extra": "iterations: 64324\ncpu: 10872.15813693179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64275.78297559651,
            "unit": "ns/iter",
            "extra": "iterations: 10902\ncpu: 64271.01449275365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 151542.48863389718,
            "unit": "ns/iter",
            "extra": "iterations: 4619\ncpu: 151535.8735657063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38893.67970008828,
            "unit": "ns/iter",
            "extra": "iterations: 18005\ncpu: 38892.72979727851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38156.664013516835,
            "unit": "ns/iter",
            "extra": "iterations: 18343\ncpu: 38155.31810499917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38763.23779335344,
            "unit": "ns/iter",
            "extra": "iterations: 17982\ncpu: 38762.12323434589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 78309.36269141255,
            "unit": "ns/iter",
            "extra": "iterations: 8947\ncpu: 78304.47077232585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70122.56607356954,
            "unit": "ns/iter",
            "extra": "iterations: 10004\ncpu: 70121.03158736526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21410.03105266391,
            "unit": "ns/iter",
            "extra": "iterations: 32622\ncpu: 21409.076696707587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 107858.17938113185,
            "unit": "ns/iter",
            "extra": "iterations: 6528\ncpu: 107852.20588235126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 85750.92531831986,
            "unit": "ns/iter",
            "extra": "iterations: 8168\ncpu: 85748.91038197716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83409.37362505715,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 83409.0148254436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84695.1983649807,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 84689.32435681678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 155238.16511319345,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 155227.74079005775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 656510.1686972637,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 656474.0393626947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 555509.2658227967,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 555481.2499999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 550864.6522422933,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 550857.907159724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 565210.6440000352,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 565173.7599999934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 369777.2459102484,
            "unit": "ns/iter",
            "extra": "iterations: 1895\ncpu: 369753.4036939322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 545188.4581358756,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 545124.5655608254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21495.633940102638,
            "unit": "ns/iter",
            "extra": "iterations: 32522\ncpu: 21494.41608757145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 105238.55765765457,
            "unit": "ns/iter",
            "extra": "iterations: 6660\ncpu: 105236.51651651632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 84015.17139438505,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 84012.39976062246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83311.04579972617,
            "unit": "ns/iter",
            "extra": "iterations: 8428\ncpu: 83309.0887517797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83854.28422690349,
            "unit": "ns/iter",
            "extra": "iterations: 8356\ncpu: 83848.67161321135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150264.77742004552,
            "unit": "ns/iter",
            "extra": "iterations: 4659\ncpu: 150256.27817128258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 666707.6824643632,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 666681.0426540324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 554373.2929133626,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 554339.6850393692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 556263.6830818179,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 556240.6671961836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 561027.8809332327,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 561015.5269509272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 366559.17181770626,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 366537.9779989506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 546093.0179547222,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 546045.0429352083 ns\nthreads: 1"
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
        "date": 1702492168642,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8226.158821183388,
            "unit": "ns/iter",
            "extra": "iterations: 85272\ncpu: 8225.829111548926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75617.03448582419,
            "unit": "ns/iter",
            "extra": "iterations: 11222\ncpu: 75615.8082338264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145021.8506794802,
            "unit": "ns/iter",
            "extra": "iterations: 6034\ncpu: 145017.23566456744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 214683.49138779994,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 214673.8927165354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 283233.77393008873,
            "unit": "ns/iter",
            "extra": "iterations: 3061\ncpu: 283216.88990525977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 348927.94048581994,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 348912.3076923077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 415549.08361204795,
            "unit": "ns/iter",
            "extra": "iterations: 2093\ncpu: 415517.82130912563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 499031.0627080827,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 499002.77469478355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 551072.7948232397,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 551046.1489898995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6382.395957183193,
            "unit": "ns/iter",
            "extra": "iterations: 109676\ncpu: 6381.840147343083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5420.484464472671,
            "unit": "ns/iter",
            "extra": "iterations: 128705\ncpu: 5420.356629501579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5341.772005441195,
            "unit": "ns/iter",
            "extra": "iterations: 130854\ncpu: 5341.463004569976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5383.894366089741,
            "unit": "ns/iter",
            "extra": "iterations: 130460\ncpu: 5383.499156829686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9249.450534145535,
            "unit": "ns/iter",
            "extra": "iterations: 76103\ncpu: 9248.970474225722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33909.015156533766,
            "unit": "ns/iter",
            "extra": "iterations: 24148\ncpu: 33906.32350505216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 137895.81961923814,
            "unit": "ns/iter",
            "extra": "iterations: 6198\ncpu: 137888.60922878372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113444.144469517,
            "unit": "ns/iter",
            "extra": "iterations: 7531\ncpu: 113437.31244190714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 110509.05827505265,
            "unit": "ns/iter",
            "extra": "iterations: 7722\ncpu: 110504.90805490824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 113837.05731887238,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 113829.24869425458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 280645.00322474435,
            "unit": "ns/iter",
            "extra": "iterations: 3101\ncpu: 280629.5066107704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2266431.4560973076,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2266273.6585365855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1830574.2215687255,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1830484.117647058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1805372.3976835234,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1805279.7297297253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1845597.4722221815,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1845481.3492063505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1084554.0326340226,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1084486.4801864834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1786649.0863724984,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1786572.360844531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7239361.370000097,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7238338.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4186634.9732145076,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4186510.2678571497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9307070.3589739,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9306893.162393164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34145.00212899277,
            "unit": "ns/iter",
            "extra": "iterations: 23955\ncpu: 34143.76956793981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 144047.62794216978,
            "unit": "ns/iter",
            "extra": "iterations: 5948\ncpu: 144042.9556153329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 116099.18927359743,
            "unit": "ns/iter",
            "extra": "iterations: 7365\ncpu: 116097.5016972162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115413.50304589892,
            "unit": "ns/iter",
            "extra": "iterations: 7387\ncpu: 115410.0988222548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 116654.21893732424,
            "unit": "ns/iter",
            "extra": "iterations: 7340\ncpu: 116647.87465940113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 279765.71145233326,
            "unit": "ns/iter",
            "extra": "iterations: 3126\ncpu: 279749.5521433139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2288221.3103448655,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2288178.5714285737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1855348.5904574564,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1855285.8846918545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1817202.5917968515,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1817164.2578125035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1854138.4023904018,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1854069.322709172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1094749.7294117003,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1094703.0588235324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1797372.91119688,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1797317.1814671892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7261531.080000622,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7261318.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4261578.278538706,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4261361.187214631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32335.896510803585,
            "unit": "ns/iter",
            "extra": "iterations: 25278\ncpu: 32334.40145581138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133395.82919981692,
            "unit": "ns/iter",
            "extra": "iterations: 6411\ncpu: 133390.23553267776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 111503.18866207005,
            "unit": "ns/iter",
            "extra": "iterations: 7691\ncpu: 111498.79079443544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 110632.4022259631,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 110627.79862818703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 113130.80753470889,
            "unit": "ns/iter",
            "extra": "iterations: 7565\ncpu: 113126.1863846659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 275671.5184950833,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 275661.65033196285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2276068.7463413132,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2275963.6585365785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1845330.7801978958,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1845244.158415839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1813477.9689319753,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1813400.3883495166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1841345.1482214255,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1841260.474308306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1074935.4292290646,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1074897.9286536213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1784429.5402297557,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1784400.766283519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3218.482822655305,
            "unit": "ns/iter",
            "extra": "iterations: 217554\ncpu: 3218.371990402399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16864.261191565798,
            "unit": "ns/iter",
            "extra": "iterations: 42398\ncpu: 16863.9063163358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12590.221368012919,
            "unit": "ns/iter",
            "extra": "iterations: 55672\ncpu: 12590.04706135941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12556.046544175555,
            "unit": "ns/iter",
            "extra": "iterations: 55732\ncpu: 12555.39725830768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10796.989962745363,
            "unit": "ns/iter",
            "extra": "iterations: 64958\ncpu: 10796.4376982049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64231.798307736884,
            "unit": "ns/iter",
            "extra": "iterations: 10873\ncpu: 64230.460774395564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 148430.93891832468,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 148424.75079533373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38160.3509775102,
            "unit": "ns/iter",
            "extra": "iterations: 18363\ncpu: 38159.72880248335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37375.12642697204,
            "unit": "ns/iter",
            "extra": "iterations: 18746\ncpu: 37373.39699135854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37988.62848145825,
            "unit": "ns/iter",
            "extra": "iterations: 18419\ncpu: 37986.834247244806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77997.81291040556,
            "unit": "ns/iter",
            "extra": "iterations: 8985\ncpu: 77994.53533667202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69377.07570633476,
            "unit": "ns/iter",
            "extra": "iterations: 10052\ncpu: 69376.14405093461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21498.959897901823,
            "unit": "ns/iter",
            "extra": "iterations: 32517\ncpu: 21498.699141986857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 103986.5063811057,
            "unit": "ns/iter",
            "extra": "iterations: 6817\ncpu: 103986.15226639133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 82853.00094674839,
            "unit": "ns/iter",
            "extra": "iterations: 8450\ncpu: 82849.4792899407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81561.15197215008,
            "unit": "ns/iter",
            "extra": "iterations: 8620\ncpu: 81558.42227378165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82850.4978046796,
            "unit": "ns/iter",
            "extra": "iterations: 8427\ncpu: 82844.51168862075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 152466.72880614895,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 152463.02300109583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 647261.2490706845,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 647251.9516728589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 544330.9976672316,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 544308.4758942439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 537381.8687643282,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 537356.6385264794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 542764.5780885562,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 542740.0155400151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 360548.69607846765,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 360532.7657378737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 533545.4352134423,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 533543.8262195069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20993.029067674368,
            "unit": "ns/iter",
            "extra": "iterations: 33336\ncpu: 20992.605591552692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 102976.95550350848,
            "unit": "ns/iter",
            "extra": "iterations: 6832\ncpu: 102973.53629976555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82609.62270805232,
            "unit": "ns/iter",
            "extra": "iterations: 8508\ncpu: 82605.41842971474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81271.79272517689,
            "unit": "ns/iter",
            "extra": "iterations: 8660\ncpu: 81268.22170900682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83505.37195703806,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 83502.58949880755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150063.97337341766,
            "unit": "ns/iter",
            "extra": "iterations: 4657\ncpu: 150060.7472621858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 644696.4523589717,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 644678.5383903715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 537433.3530768966,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 537406.3846153814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 536648.4665641736,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 536618.4473481954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 542283.6476042918,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 542282.0710973709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 360162.7372750758,
            "unit": "ns/iter",
            "extra": "iterations: 1945\ncpu: 360147.09511568444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 532597.3493150537,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 532589.4977168984 ns\nthreads: 1"
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
        "date": 1702503263179,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8327.635742546974,
            "unit": "ns/iter",
            "extra": "iterations: 84163\ncpu: 8327.417035989687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77970.28719252619,
            "unit": "ns/iter",
            "extra": "iterations: 11017\ncpu: 77969.4472179359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 149433.4649692258,
            "unit": "ns/iter",
            "extra": "iterations: 5852\ncpu: 149432.8776486671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 221872.22830236363,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 221871.49401883435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 291348.97270887083,
            "unit": "ns/iter",
            "extra": "iterations: 2968\ncpu: 291345.3167115905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 361445.75823261944,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 361441.43393080466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 431731.91753601603,
            "unit": "ns/iter",
            "extra": "iterations: 2013\ncpu: 431722.2056631888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 501385.2095566926,
            "unit": "ns/iter",
            "extra": "iterations: 1737\ncpu: 501370.52389176766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 573045.497371936,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 573040.6701708273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6304.217767181803,
            "unit": "ns/iter",
            "extra": "iterations: 111160\ncpu: 6303.993342929113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5415.338630750432,
            "unit": "ns/iter",
            "extra": "iterations: 129560\ncpu: 5415.043995060198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5353.348033135869,
            "unit": "ns/iter",
            "extra": "iterations: 130614\ncpu: 5353.004272130098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5395.869013769935,
            "unit": "ns/iter",
            "extra": "iterations: 129777\ncpu: 5395.633278624098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9047.904126324842,
            "unit": "ns/iter",
            "extra": "iterations: 76945\ncpu: 9047.792579114948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33875.43509843625,
            "unit": "ns/iter",
            "extra": "iterations: 24229\ncpu: 33874.29939328903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135064.947493285,
            "unit": "ns/iter",
            "extra": "iterations: 6323\ncpu: 135060.12968527604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112253.75414760444,
            "unit": "ns/iter",
            "extra": "iterations: 7655\ncpu: 112253.55976485938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 108821.89737683148,
            "unit": "ns/iter",
            "extra": "iterations: 7815\ncpu: 108819.1554702493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 109878.51533505507,
            "unit": "ns/iter",
            "extra": "iterations: 7760\ncpu: 109878.4793814434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 281706.97924772673,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 281695.590142673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2251816.0024332325,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2251721.6545012114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1871880.403225734,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1871800.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1848862.2270916742,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1848806.3745019906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1842213.7213439383,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1842149.0118577052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1118615.0457832129,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 1118557.5903614466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1807765.5486380788,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1807689.6887159478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7470403.649999754,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7469836.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4216559.266666688,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4216381.777777782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9585959.079646047,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 9584654.867256626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33399.31900443303,
            "unit": "ns/iter",
            "extra": "iterations: 24589\ncpu: 33398.20244824932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 142312.5670205767,
            "unit": "ns/iter",
            "extra": "iterations: 6028\ncpu: 142304.79429329795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 113821.2396276631,
            "unit": "ns/iter",
            "extra": "iterations: 7520\ncpu: 113816.30319148934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 111436.25900783321,
            "unit": "ns/iter",
            "extra": "iterations: 7660\ncpu: 111431.94516971237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 111526.45599789926,
            "unit": "ns/iter",
            "extra": "iterations: 7636\ncpu: 111522.17129387132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 278004.983643381,
            "unit": "ns/iter",
            "extra": "iterations: 3118\ncpu: 277992.68762026884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2273926.4205377595,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2273868.9486552454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1902245.7230143074,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1902198.3706720944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1872397.7042254335,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1872335.2112675987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1862454.446000129,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1862358.7999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1130470.289890288,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 1130439.5858708816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1828155.1866406272,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1828072.2986247528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7560383.860000001,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7560144.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4258869.207372987,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4258808.755760354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31773.89416058306,
            "unit": "ns/iter",
            "extra": "iterations: 25756\ncpu: 31772.468551017027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132097.5460465141,
            "unit": "ns/iter",
            "extra": "iterations: 6450\ncpu: 132095.89147286818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 109727.8608493639,
            "unit": "ns/iter",
            "extra": "iterations: 7747\ncpu: 109723.55750613133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 108511.07547653021,
            "unit": "ns/iter",
            "extra": "iterations: 7817\ncpu: 108508.7757451711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 110466.65784994168,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 110464.37082624092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 276287.8222718624,
            "unit": "ns/iter",
            "extra": "iterations: 3134\ncpu: 276284.5564773468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2273401.8997556306,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2273307.5794621157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1898291.7261663554,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1898282.9614604325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1883905.0789473702,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1883830.5668016195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1872085.7695389932,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1872065.5310621236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1118747.8393719245,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 1118704.951690825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1820052.6054688026,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1820043.75 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3317.6715591904535,
            "unit": "ns/iter",
            "extra": "iterations: 211411\ncpu: 3317.5298352498194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16977.43731665399,
            "unit": "ns/iter",
            "extra": "iterations: 41247\ncpu: 16977.375324266104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13131.84310157183,
            "unit": "ns/iter",
            "extra": "iterations: 53302\ncpu: 13131.216464672993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12754.345467808802,
            "unit": "ns/iter",
            "extra": "iterations: 54830\ncpu: 12754.276855735921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10905.217708900922,
            "unit": "ns/iter",
            "extra": "iterations: 64205\ncpu: 10904.89992991207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64889.1005664399,
            "unit": "ns/iter",
            "extra": "iterations: 10769\ncpu: 64888.68975763784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 149570.2657087775,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 149568.8612481226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38657.857047943595,
            "unit": "ns/iter",
            "extra": "iterations: 18062\ncpu: 38657.31369726486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38143.63593238809,
            "unit": "ns/iter",
            "extra": "iterations: 18340\ncpu: 38142.71537622744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38437.32998573712,
            "unit": "ns/iter",
            "extra": "iterations: 18222\ncpu: 38436.73581385089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80021.13938560864,
            "unit": "ns/iter",
            "extra": "iterations: 8724\ncpu: 80020.03668042262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70049.87497499483,
            "unit": "ns/iter",
            "extra": "iterations: 9998\ncpu: 70047.82956591362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21660.70358458658,
            "unit": "ns/iter",
            "extra": "iterations: 32026\ncpu: 21660.841191532007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102091.89918770113,
            "unit": "ns/iter",
            "extra": "iterations: 6894\ncpu: 102087.04670728126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 84073.72491286475,
            "unit": "ns/iter",
            "extra": "iterations: 8321\ncpu: 84072.27496695078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 82716.76379533496,
            "unit": "ns/iter",
            "extra": "iterations: 8463\ncpu: 82715.70365118772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 83940.63954747542,
            "unit": "ns/iter",
            "extra": "iterations: 8309\ncpu: 83939.51137320984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 153334.36312119366,
            "unit": "ns/iter",
            "extra": "iterations: 4588\ncpu: 153335.37489102033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 662270.5299144288,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 662243.0199430179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 560934.8096385361,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 560927.3895582344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 556241.5011914135,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 556228.5941223211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 558625.016759756,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 558608.7789305692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 373837.1305511403,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 373832.20973782707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 549990.0518053212,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 549963.9717425386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22109.147936069763,
            "unit": "ns/iter",
            "extra": "iterations: 31784\ncpu: 22108.91958217978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103039.8966179266,
            "unit": "ns/iter",
            "extra": "iterations: 6771\ncpu: 103035.09082853179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 84155.91377459264,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 84155.37268932699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82178.90057382839,
            "unit": "ns/iter",
            "extra": "iterations: 8539\ncpu: 82174.21243705407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84098.612019231,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 84097.3076923076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 149961.4630383427,
            "unit": "ns/iter",
            "extra": "iterations: 4667\ncpu: 149962.35268909467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 662282.3944866781,
            "unit": "ns/iter",
            "extra": "iterations: 1052\ncpu: 662247.0532319357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 562137.8885324262,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 562111.1467522116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 555813.3614650074,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 555781.7675159228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 555162.4492405647,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 555148.2813749006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 372770.1529851062,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 372772.4413646011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 545934.635019451,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 545925.8365758788 ns\nthreads: 1"
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
        "date": 1705772699363,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8189.713811133876,
            "unit": "ns/iter",
            "extra": "iterations: 85489\ncpu: 8189.710956965224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74042.69103793365,
            "unit": "ns/iter",
            "extra": "iterations: 11571\ncpu: 74037.50756200848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 140798.4826584896,
            "unit": "ns/iter",
            "extra": "iterations: 6199\ncpu: 140794.4991127601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 207165.75690474178,
            "unit": "ns/iter",
            "extra": "iterations: 4200\ncpu: 207157.9761904761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 273841.88393425185,
            "unit": "ns/iter",
            "extra": "iterations: 3162\ncpu: 273839.2473118279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 335952.8661417065,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 335937.40157480317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 403461.3452270595,
            "unit": "ns/iter",
            "extra": "iterations: 2158\ncpu: 403437.8127896204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 469451.50538218353,
            "unit": "ns/iter",
            "extra": "iterations: 1858\ncpu: 469425.83423035516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 532772.6334758584,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 532754.7342700062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6325.361497808688,
            "unit": "ns/iter",
            "extra": "iterations: 110695\ncpu: 6325.211617507573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5316.839344362889,
            "unit": "ns/iter",
            "extra": "iterations: 130926\ncpu: 5316.683470051781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5274.327252920211,
            "unit": "ns/iter",
            "extra": "iterations: 133105\ncpu: 5274.14672626873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5304.578423859436,
            "unit": "ns/iter",
            "extra": "iterations: 131803\ncpu: 5304.474101499964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9290.013233087111,
            "unit": "ns/iter",
            "extra": "iterations: 75946\ncpu: 9289.603139072484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33906.98980560485,
            "unit": "ns/iter",
            "extra": "iterations: 24229\ncpu: 33906.06710966202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 137516.83952999892,
            "unit": "ns/iter",
            "extra": "iterations: 5702\ncpu: 137515.25780427895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111642.92532042475,
            "unit": "ns/iter",
            "extra": "iterations: 7646\ncpu: 111642.70206643982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 108826.19414995959,
            "unit": "ns/iter",
            "extra": "iterations: 7829\ncpu: 108823.82168859364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110683.74193967269,
            "unit": "ns/iter",
            "extra": "iterations: 7692\ncpu: 110682.60530421253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 276645.2078005065,
            "unit": "ns/iter",
            "extra": "iterations: 3128\ncpu: 276638.6508951417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2204561.2641508523,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 2204541.037735844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1797896.6982592393,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1797852.8046421665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1794091.042226583,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1794048.5604606562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1787541.12475994,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1787500.9596928954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1066630.9230769644,
            "unit": "ns/iter",
            "extra": "iterations: 871\ncpu: 1066619.4029850725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1739397.5528302947,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1739383.2075471682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7155841.420000115,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7155548.999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4085534.223684474,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4085457.0175438593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9112734.932202937,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9112418.64406779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33690.04921483062,
            "unit": "ns/iter",
            "extra": "iterations: 24708\ncpu: 33689.27472883279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 141653.04125768153,
            "unit": "ns/iter",
            "extra": "iterations: 6011\ncpu: 141649.24305440014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 113510.44420686483,
            "unit": "ns/iter",
            "extra": "iterations: 7483\ncpu: 113508.80662835811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 111063.34460338834,
            "unit": "ns/iter",
            "extra": "iterations: 7690\ncpu: 111061.15734720422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 112816.69990803038,
            "unit": "ns/iter",
            "extra": "iterations: 7611\ncpu: 112815.59584811488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 274950.8892054417,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 274946.8819246613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2216504.3421054045,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2216486.363636369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1828946.728880049,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1828912.1807465614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1801224.377175993,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1801204.255319159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1804749.9052225484,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1804697.6789168166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1073775.5017340542,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1073774.5664739886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1761373.376893971,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1761327.0833333228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7222094.700000525,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7222010.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3982630.849785474,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3982546.351931328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31805.153682090448,
            "unit": "ns/iter",
            "extra": "iterations: 25787\ncpu: 31804.88618296041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 134469.91847314875,
            "unit": "ns/iter",
            "extra": "iterations: 6366\ncpu: 134467.43638077358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 109508.90598617871,
            "unit": "ns/iter",
            "extra": "iterations: 7818\ncpu: 109507.87925300618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109245.67548320994,
            "unit": "ns/iter",
            "extra": "iterations: 7864\ncpu: 109243.89623601297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 110548.12842023224,
            "unit": "ns/iter",
            "extra": "iterations: 7748\ncpu: 110546.32163138855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 273324.8222711454,
            "unit": "ns/iter",
            "extra": "iterations: 3179\ncpu: 273317.6785152575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2207989.694312977,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2207932.7014218043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1813346.6920077417,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1813331.9688109236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1800564.133462207,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1800531.141199218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1793849.771760149,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1793833.8491296037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1062204.4937286656,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 1062176.5108323859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1744511.8851225202,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1744480.2259886994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3218.541757195083,
            "unit": "ns/iter",
            "extra": "iterations: 216322\ncpu: 3218.454433668316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16675.42811874361,
            "unit": "ns/iter",
            "extra": "iterations: 41972\ncpu: 16675.111979414825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12773.220105820383,
            "unit": "ns/iter",
            "extra": "iterations: 54810\ncpu: 12772.24594052172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12591.489678940852,
            "unit": "ns/iter",
            "extra": "iterations: 55130\ncpu: 12590.776346816661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10719.57640080989,
            "unit": "ns/iter",
            "extra": "iterations: 65248\ncpu: 10719.476459048525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64499.024436428335,
            "unit": "ns/iter",
            "extra": "iterations: 11090\ncpu: 64494.17493237142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 137997.8954518535,
            "unit": "ns/iter",
            "extra": "iterations: 5079\ncpu: 137990.9824768663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37352.4382316801,
            "unit": "ns/iter",
            "extra": "iterations: 18707\ncpu: 37349.53226065092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37367.399637372626,
            "unit": "ns/iter",
            "extra": "iterations: 18752\ncpu: 37367.027517064984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37464.10233498116,
            "unit": "ns/iter",
            "extra": "iterations: 18801\ncpu: 37463.666826232635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75930.99493861578,
            "unit": "ns/iter",
            "extra": "iterations: 9286\ncpu: 75930.86366573363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67771.93831830879,
            "unit": "ns/iter",
            "extra": "iterations: 10311\ncpu: 67771.26369896263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20698.20416186393,
            "unit": "ns/iter",
            "extra": "iterations: 33831\ncpu: 20697.966362211846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 101865.95950065485,
            "unit": "ns/iter",
            "extra": "iterations: 6889\ncpu: 101864.88605022496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81722.71018885338,
            "unit": "ns/iter",
            "extra": "iterations: 8578\ncpu: 81720.89065050131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81136.90202663364,
            "unit": "ns/iter",
            "extra": "iterations: 8635\ncpu: 81135.94672843149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82084.83078731106,
            "unit": "ns/iter",
            "extra": "iterations: 8510\ncpu: 82083.33725029495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 157771.6306559841,
            "unit": "ns/iter",
            "extra": "iterations: 4619\ncpu: 157769.97185538066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 635190.099728067,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 635183.227561196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 537041.6748844817,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 537035.9013867476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 537444.6392308458,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 537438.6923076949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 538713.7297298085,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 538703.166023172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 355570.05894310214,
            "unit": "ns/iter",
            "extra": "iterations: 1968\ncpu: 355566.31097561563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 530197.3007519329,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 530170.3759398495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20968.238070959233,
            "unit": "ns/iter",
            "extra": "iterations: 33343\ncpu: 20967.876315868325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 100417.14182969561,
            "unit": "ns/iter",
            "extra": "iterations: 6952\ncpu: 100416.02416570841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81501.14154561442,
            "unit": "ns/iter",
            "extra": "iterations: 8605\ncpu: 81500.13945380575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80449.1255461037,
            "unit": "ns/iter",
            "extra": "iterations: 8698\ncpu: 80449.02276385376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81588.67152688761,
            "unit": "ns/iter",
            "extra": "iterations: 8573\ncpu: 81586.8424122244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 149756.29549817755,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 149754.76850864134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 636927.462727189,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 636913.5454545472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 531676.4379283764,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 531676.1614622914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 537443.8984615783,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 537437.7692307719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 538478.8854726391,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 538465.6418139825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 352808.8664314769,
            "unit": "ns/iter",
            "extra": "iterations: 1984\ncpu: 352804.6875000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 526960.6000000137,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 526945.6505576153 ns\nthreads: 1"
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
        "date": 1705774118705,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8570.5991638777,
            "unit": "ns/iter",
            "extra": "iterations: 81567\ncpu: 8570.37159635637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 79945.0235835741,
            "unit": "ns/iter",
            "extra": "iterations: 10643\ncpu: 79945.13764915908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 153205.24308231502,
            "unit": "ns/iter",
            "extra": "iterations: 5710\ncpu: 153202.13660245185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 225801.34371753773,
            "unit": "ns/iter",
            "extra": "iterations: 3852\ncpu: 225799.81827622012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 298841.8294707542,
            "unit": "ns/iter",
            "extra": "iterations: 2891\ncpu: 298834.7630577655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 371284.6062286541,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 371265.82764505094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 442091.8487009393,
            "unit": "ns/iter",
            "extra": "iterations: 1963\ncpu: 442077.1268466636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 514101.14580871124,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 514101.65289256227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 587016.809011374,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 586995.2925353057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6375.156198286899,
            "unit": "ns/iter",
            "extra": "iterations: 109982\ncpu: 6374.933170882504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5463.287764227461,
            "unit": "ns/iter",
            "extra": "iterations: 128157\ncpu: 5463.159249982449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5373.721813236286,
            "unit": "ns/iter",
            "extra": "iterations: 130132\ncpu: 5373.687486552105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5371.689501752266,
            "unit": "ns/iter",
            "extra": "iterations: 130136\ncpu: 5371.721890944855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9179.36978526377,
            "unit": "ns/iter",
            "extra": "iterations: 76466\ncpu: 9179.113592969448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33673.365169475575,
            "unit": "ns/iter",
            "extra": "iterations: 23956\ncpu: 33673.39288695941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 138359.89097381168,
            "unit": "ns/iter",
            "extra": "iterations: 6182\ncpu: 138356.77774183083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113163.33601795005,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 113163.41431212077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 110471.73215437519,
            "unit": "ns/iter",
            "extra": "iterations: 7747\ncpu: 110467.79398476824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111457.56434737565,
            "unit": "ns/iter",
            "extra": "iterations: 7646\ncpu: 111456.87941407257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 284822.76654710126,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 284811.0205412463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2335060.427135751,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2335044.221105527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1915650.8595040874,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1915575.826446282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1911358.7695472948,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1911272.4279835362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1900381.167006057,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1900384.317718939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1128870.0206310602,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 1128845.0242718467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1860050.5803212938,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1859995.3815261044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7588449.480000463,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7588271.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4269609.36486493,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4269558.558558565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9661569.044642502,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 9661126.785714293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34098.50679240298,
            "unit": "ns/iter",
            "extra": "iterations: 24071\ncpu: 34097.75663661658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143416.9622200006,
            "unit": "ns/iter",
            "extra": "iterations: 5982\ncpu: 143412.7382146438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 115722.51756407434,
            "unit": "ns/iter",
            "extra": "iterations: 7373\ncpu: 115719.57140919601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113977.29845785737,
            "unit": "ns/iter",
            "extra": "iterations: 7522\ncpu: 113971.7229460246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 114950.29789829599,
            "unit": "ns/iter",
            "extra": "iterations: 7375\ncpu: 114948.17627118724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 287853.0842070643,
            "unit": "ns/iter",
            "extra": "iterations: 3052\ncpu: 287845.7404980338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2360158.7525510406,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2360164.030612258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1947329.7286013956,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1947239.4572025072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1940750.6729166356,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1940755.6249999865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1922501.5422680185,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1922491.3402061977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1132393.1367522185,
            "unit": "ns/iter",
            "extra": "iterations: 819\ncpu: 1132385.4700854684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1880887.8444443427,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1880834.5454545335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7672188.949999281,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7672055.999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4296186.778801691,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4296093.087557606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32123.95375334915,
            "unit": "ns/iter",
            "extra": "iterations: 25364\ncpu: 32122.90253903161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 135289.12157670024,
            "unit": "ns/iter",
            "extra": "iterations: 6317\ncpu: 135286.73420927662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 112312.71728573646,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 112310.08006299965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111046.10777591317,
            "unit": "ns/iter",
            "extra": "iterations: 7729\ncpu: 111044.74058739819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 112474.06155663032,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 112469.73356083455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 281093.744749609,
            "unit": "ns/iter",
            "extra": "iterations: 3095\ncpu: 281090.69466881995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2344171.5328283636,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2344103.5353535255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1942727.2437499235,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1942701.6666666574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1931215.257796385,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1931154.885654885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1931628.2520662753,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1931556.6115702493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1123630.029197073,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1123589.7810218972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1863733.6760000382,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1863682.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3244.9632434086907,
            "unit": "ns/iter",
            "extra": "iterations: 215662\ncpu: 3244.7663473398097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17240.78263760894,
            "unit": "ns/iter",
            "extra": "iterations: 40605\ncpu: 17240.091121783058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13495.565371706689,
            "unit": "ns/iter",
            "extra": "iterations: 51842\ncpu: 13495.43613286518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13076.449419321549,
            "unit": "ns/iter",
            "extra": "iterations: 53558\ncpu: 13076.464767168289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10854.9422459891,
            "unit": "ns/iter",
            "extra": "iterations: 64515\ncpu: 10854.409052158422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66835.26819303958,
            "unit": "ns/iter",
            "extra": "iterations: 10526\ncpu: 66828.9758692761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 154866.51372896024,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 154860.18600531455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39128.92343829163,
            "unit": "ns/iter",
            "extra": "iterations: 17881\ncpu: 39127.705385605004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39054.43537756712,
            "unit": "ns/iter",
            "extra": "iterations: 17904\ncpu: 39053.239499553885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39374.46683874104,
            "unit": "ns/iter",
            "extra": "iterations: 17822\ncpu: 39372.43294804173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80345.7795113025,
            "unit": "ns/iter",
            "extra": "iterations: 8717\ncpu: 80343.214408626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71418.73832823812,
            "unit": "ns/iter",
            "extra": "iterations: 9810\ncpu: 71416.27930682966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22093.405752210696,
            "unit": "ns/iter",
            "extra": "iterations: 31640\ncpu: 22092.702275600564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 104881.85617977889,
            "unit": "ns/iter",
            "extra": "iterations: 6675\ncpu: 104877.52808988761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 86028.09915325775,
            "unit": "ns/iter",
            "extra": "iterations: 8149\ncpu: 86025.79457602235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 85803.18526238568,
            "unit": "ns/iter",
            "extra": "iterations: 8156\ncpu: 85800.46591466467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 87220.9830929894,
            "unit": "ns/iter",
            "extra": "iterations: 8044\ncpu: 87218.28692192974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 157833.5038392027,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 157827.10027100085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 671417.052581287,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 671380.8795410994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 569375.2502031444,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 569358.9764419182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 571383.9853658611,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 571365.4471544643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 568906.2001620717,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 568889.3841166843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 372805.84463425545,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 372792.4719701063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 556913.213206044,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 556882.0206841718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21880.062881085545,
            "unit": "ns/iter",
            "extra": "iterations: 31981\ncpu: 21879.43153747514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 105935.13738501891,
            "unit": "ns/iter",
            "extra": "iterations: 6631\ncpu: 105931.50354396009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 85170.27553502558,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 85170.40369649835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 84759.91895820758,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 84757.40763173973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 85890.20901739765,
            "unit": "ns/iter",
            "extra": "iterations: 8162\ncpu: 85884.0357755454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 153588.45164835476,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 153581.5384615388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 665268.1213270591,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 665236.1137440722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 568283.350891453,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 568285.7374392234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 566855.0040420591,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 566824.8181083323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 570533.0575831508,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 570499.1078669914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 373242.6017085016,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 373231.55365723383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 554850.1654789809,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 554833.333333335 ns\nthreads: 1"
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
        "date": 1705777719327,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8243.933726886953,
            "unit": "ns/iter",
            "extra": "iterations: 84529\ncpu: 8243.846490553538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76050.22951699664,
            "unit": "ns/iter",
            "extra": "iterations: 11180\ncpu: 76048.22898032199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 146492.5055898632,
            "unit": "ns/iter",
            "extra": "iterations: 5993\ncpu: 146492.37443684298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 216625.11431410172,
            "unit": "ns/iter",
            "extra": "iterations: 4024\ncpu: 216622.58946322065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 286554.2665562924,
            "unit": "ns/iter",
            "extra": "iterations: 3020\ncpu: 286551.4569536424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 352942.414584174,
            "unit": "ns/iter",
            "extra": "iterations: 2441\ncpu: 352938.34494059795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 422784.4516755897,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 422764.40019426914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 492694.7965050983,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 492687.4859075539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 560913.2027027257,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 560897.6190476192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6296.270390229684,
            "unit": "ns/iter",
            "extra": "iterations: 111524\ncpu: 6296.128187654682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5386.507715503129,
            "unit": "ns/iter",
            "extra": "iterations: 129998\ncpu: 5386.291327558886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5290.325107037725,
            "unit": "ns/iter",
            "extra": "iterations: 132664\ncpu: 5290.096032081049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5404.514841082522,
            "unit": "ns/iter",
            "extra": "iterations: 129438\ncpu: 5404.461595512911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9227.673869737699,
            "unit": "ns/iter",
            "extra": "iterations: 75801\ncpu: 9227.669819659384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33602.09487712267,
            "unit": "ns/iter",
            "extra": "iterations: 24537\ncpu: 33601.37751151322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 134927.05126581778,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 134923.21202531643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 114433.35110245783,
            "unit": "ns/iter",
            "extra": "iterations: 7710\ncpu: 114431.69909208786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 110151.97111511542,
            "unit": "ns/iter",
            "extra": "iterations: 7201\ncpu: 110150.93736980998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111770.88192267684,
            "unit": "ns/iter",
            "extra": "iterations: 7656\ncpu: 111769.44879832781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 277802.04956267355,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 277793.5536119217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2277462.4113299516,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2277398.5221674857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1851710.5129741773,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1851687.6247504964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1848271.6772906494,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1848240.2390438244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1877342.4618472971,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1877296.5863453813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1129197.9294403347,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1129182.846715331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1812318.320312478,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1812277.7343749993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7497076.19999981,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7496793.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4230728.227272803,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4230638.636363647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9470665.365216993,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9470359.130434781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33934.41950699535,
            "unit": "ns/iter",
            "extra": "iterations: 24381\ncpu: 33933.513801730835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 142178.46390042026,
            "unit": "ns/iter",
            "extra": "iterations: 6025\ncpu: 142173.77593361007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 114197.49892617355,
            "unit": "ns/iter",
            "extra": "iterations: 7450\ncpu: 114193.18120805365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115598.14749662527,
            "unit": "ns/iter",
            "extra": "iterations: 7390\ncpu: 115597.22598105572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 115368.45275377402,
            "unit": "ns/iter",
            "extra": "iterations: 7408\ncpu: 115364.91630669548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 277131.431737883,
            "unit": "ns/iter",
            "extra": "iterations: 3113\ncpu: 277123.89977513574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2311991.310173915,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2311918.3622828783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1873345.5110662414,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1873344.4668008117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1860888.43912183,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1860828.3433133815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1889002.0583501544,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1888861.9718309792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1136026.1325153036,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 1135981.5950920284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1829771.1078431865,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1829699.019607842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7512122.410000757,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7511681.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4311935.240909551,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4311762.727272721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31897.789132388658,
            "unit": "ns/iter",
            "extra": "iterations: 25599\ncpu: 31897.28505019732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132644.2264705881,
            "unit": "ns/iter",
            "extra": "iterations: 6460\ncpu: 132640.32507739926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 111666.06775488678,
            "unit": "ns/iter",
            "extra": "iterations: 7719\ncpu: 111663.49268039898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111278.00905563058,
            "unit": "ns/iter",
            "extra": "iterations: 7730\ncpu: 111273.10478654591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 113229.47703646003,
            "unit": "ns/iter",
            "extra": "iterations: 7599\ncpu: 113227.7536517962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 273433.1174623184,
            "unit": "ns/iter",
            "extra": "iterations: 3184\ncpu: 273425.09422110463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2306403.6069649095,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2306310.199004971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1881374.811623272,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1881309.8196392735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1861592.1015934763,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1861577.2908366588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1880095.3975905173,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1880038.1526104412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1116115.1426858797,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1116077.2182254242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1818828.0839843696,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1818767.3828125028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3263.2194732085677,
            "unit": "ns/iter",
            "extra": "iterations: 214582\ncpu: 3263.2135966669944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16788.857077788674,
            "unit": "ns/iter",
            "extra": "iterations: 41715\ncpu: 16788.368692316893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13390.817319342244,
            "unit": "ns/iter",
            "extra": "iterations: 53651\ncpu: 13390.333824159881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12978.789585880419,
            "unit": "ns/iter",
            "extra": "iterations: 53946\ncpu: 12978.274570867245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10855.196128475907,
            "unit": "ns/iter",
            "extra": "iterations: 65039\ncpu: 10855.003920724503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64738.45298196773,
            "unit": "ns/iter",
            "extra": "iterations: 10815\ncpu: 64737.56819232573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 149899.61272502792,
            "unit": "ns/iter",
            "extra": "iterations: 4888\ncpu: 149893.0646481176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38279.24572520964,
            "unit": "ns/iter",
            "extra": "iterations: 18305\ncpu: 38277.96776836923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37884.043220295665,
            "unit": "ns/iter",
            "extra": "iterations: 18371\ncpu: 37883.56104730247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38594.15163484483,
            "unit": "ns/iter",
            "extra": "iterations: 18228\ncpu: 38592.91200351032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 79308.38655461575,
            "unit": "ns/iter",
            "extra": "iterations: 8806\ncpu: 79306.82489211924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69641.7046312827,
            "unit": "ns/iter",
            "extra": "iterations: 10062\ncpu: 69640.03180282199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21308.680943817457,
            "unit": "ns/iter",
            "extra": "iterations: 32803\ncpu: 21308.118159924554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 104521.50829471479,
            "unit": "ns/iter",
            "extra": "iterations: 6691\ncpu: 104520.32581078951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83711.44261709112,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 83707.36503396471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 82664.28359088732,
            "unit": "ns/iter",
            "extra": "iterations: 8477\ncpu: 82661.80252447825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84370.12759113772,
            "unit": "ns/iter",
            "extra": "iterations: 8394\ncpu: 84366.51179413908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150949.89375402548,
            "unit": "ns/iter",
            "extra": "iterations: 4659\ncpu: 150943.91500321776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 652793.0990653862,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 652793.2710280305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 551260.3658536493,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 551234.8544453202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 549290.0243137353,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 549278.4313725553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 557795.3607343147,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 557789.3056663991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 364729.2190126354,
            "unit": "ns/iter",
            "extra": "iterations: 1904\ncpu: 364721.53361344256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 547845.5903800931,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 547827.1528316514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21292.103812654757,
            "unit": "ns/iter",
            "extra": "iterations: 32838\ncpu: 21290.849016383374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103233.92155706366,
            "unit": "ns/iter",
            "extra": "iterations: 6782\ncpu: 103227.48451784182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82915.3748813965,
            "unit": "ns/iter",
            "extra": "iterations: 8432\ncpu: 82911.12428842594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82595.6031913657,
            "unit": "ns/iter",
            "extra": "iterations: 8523\ncpu: 82590.10911650753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83942.8091236549,
            "unit": "ns/iter",
            "extra": "iterations: 8330\ncpu: 83941.98079231694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 151902.83666024386,
            "unit": "ns/iter",
            "extra": "iterations: 4659\ncpu: 151898.4975316581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 652647.0915888223,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 652631.9626168164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 550893.9192156736,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 550874.4313725539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 544054.5358255464,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 544042.679127731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 552591.4284585323,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 552585.1383399264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 364338.4856695846,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 364321.0526315789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 540657.9630200005,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 540642.5269645673 ns\nthreads: 1"
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
        "date": 1705952866816,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8162.8418556966535,
            "unit": "ns/iter",
            "extra": "iterations: 85833\ncpu: 8162.87558398285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75714.90435555259,
            "unit": "ns/iter",
            "extra": "iterations: 11250\ncpu: 75708.61333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 144951.29096934642,
            "unit": "ns/iter",
            "extra": "iterations: 6035\ncpu: 144943.94366197186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 213336.5744106197,
            "unit": "ns/iter",
            "extra": "iterations: 4072\ncpu: 213315.56974459728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 281169.7642810103,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 281163.23046618514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 346838.6428571142,
            "unit": "ns/iter",
            "extra": "iterations: 2478\ncpu: 346839.9515738499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 414884.5157743771,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 414869.2160611854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 482475.6171745326,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 482448.03324099677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 550485.5969677421,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 550467.2773215413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6403.3696469563165,
            "unit": "ns/iter",
            "extra": "iterations: 110638\ncpu: 6403.134546900702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5329.164195517859,
            "unit": "ns/iter",
            "extra": "iterations: 131855\ncpu: 5328.706533692319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5323.0709217708745,
            "unit": "ns/iter",
            "extra": "iterations: 131920\ncpu: 5322.9343541540275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5370.662649122921,
            "unit": "ns/iter",
            "extra": "iterations: 130262\ncpu: 5370.438807940918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8935.774838405363,
            "unit": "ns/iter",
            "extra": "iterations: 78437\ncpu: 8935.063809171694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33871.05625313707,
            "unit": "ns/iter",
            "extra": "iterations: 23892\ncpu: 33870.755901557015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 143671.99328970685,
            "unit": "ns/iter",
            "extra": "iterations: 5961\ncpu: 143664.804562993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 114340.32005365138,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 114339.61099932918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 111385.23751141682,
            "unit": "ns/iter",
            "extra": "iterations: 7667\ncpu: 111372.74031563832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110903.34497134507,
            "unit": "ns/iter",
            "extra": "iterations: 7676\ncpu: 110898.37154768086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 282758.5935758626,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 282735.79154375684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2293183.449382698,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2293131.8518518545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1840778.3747533818,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1840621.3017751505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1838894.5793650427,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1838832.9365079384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1860559.392000141,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1860475.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1106720.4452381302,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1106647.142857144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1801116.4863813522,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1801032.8793774277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7397540.460000301,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7397178.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4200609.524663696,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4200311.659192813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9477412.747826194,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9476727.826086959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33827.89722648392,
            "unit": "ns/iter",
            "extra": "iterations: 24121\ncpu: 33826.64068653875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 140384.01213909982,
            "unit": "ns/iter",
            "extra": "iterations: 6096\ncpu: 140373.4087926505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 113775.83863667486,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 113769.60457994929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 114465.7603161789,
            "unit": "ns/iter",
            "extra": "iterations: 7464\ncpu: 114459.47213290483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 114108.16719999275,
            "unit": "ns/iter",
            "extra": "iterations: 7500\ncpu: 114103.01333333355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 283518.1644151571,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 283499.7034596383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2315789.574257363,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2315711.3861386073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1881837.6068548646,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1881716.1290322538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1871307.8467741648,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1871242.9435483888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1867865.9740519882,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1867791.8163672704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1113473.350119884,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1113448.0815347743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1826803.5549019314,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1826773.7254901994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7453164.439999682,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7452684.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4283044.031818276,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4282965.000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31766.44905116322,
            "unit": "ns/iter",
            "extra": "iterations: 25663\ncpu: 31765.23399446678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 131496.15419115702,
            "unit": "ns/iter",
            "extra": "iterations: 6466\ncpu: 131494.94277760625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 110145.53800490526,
            "unit": "ns/iter",
            "extra": "iterations: 7749\ncpu: 110141.46341463493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111069.82929357969,
            "unit": "ns/iter",
            "extra": "iterations: 7715\ncpu: 111067.2585871678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111508.02516382281,
            "unit": "ns/iter",
            "extra": "iterations: 7630\ncpu: 111503.09305373553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 278222.86128827685,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 278220.59948979586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2282598.995121844,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2282523.658536588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1858270.7784431395,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1858237.9241516986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1850081.8984063764,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1850017.7290836587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1870197.931726994,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1870062.8514056327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1101746.2990543882,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1101699.527186765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1808723.320388346,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1808607.5728155423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3181.764583560629,
            "unit": "ns/iter",
            "extra": "iterations: 220248\ncpu: 3181.706076786155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17021.006168154436,
            "unit": "ns/iter",
            "extra": "iterations: 42152\ncpu: 17020.041753653455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13019.66409998859,
            "unit": "ns/iter",
            "extra": "iterations: 53766\ncpu: 13019.510471301555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12809.084440540357,
            "unit": "ns/iter",
            "extra": "iterations: 54642\ncpu: 12808.927198857997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10773.858261669991,
            "unit": "ns/iter",
            "extra": "iterations: 65120\ncpu: 10773.343058968087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65435.99672561002,
            "unit": "ns/iter",
            "extra": "iterations: 10689\ncpu: 65434.42791654948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 149803.61008978842,
            "unit": "ns/iter",
            "extra": "iterations: 4678\ncpu: 149802.37280889245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38067.856334966134,
            "unit": "ns/iter",
            "extra": "iterations: 18390\ncpu: 38065.410549211556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37969.972600508474,
            "unit": "ns/iter",
            "extra": "iterations: 18431\ncpu: 37967.2508274101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38086.02338862883,
            "unit": "ns/iter",
            "extra": "iterations: 18385\ncpu: 38083.99782431332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74937.58251178979,
            "unit": "ns/iter",
            "extra": "iterations: 9332\ncpu: 74937.63394770585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69398.82713478364,
            "unit": "ns/iter",
            "extra": "iterations: 10083\ncpu: 69395.20975899999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21365.97872990011,
            "unit": "ns/iter",
            "extra": "iterations: 32769\ncpu: 21364.99130275529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 104998.35147256823,
            "unit": "ns/iter",
            "extra": "iterations: 6689\ncpu: 104991.71774555244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 84414.46463914776,
            "unit": "ns/iter",
            "extra": "iterations: 8286\ncpu: 84411.06685976354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 84363.17491271577,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 84360.76802696547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 85324.09984171427,
            "unit": "ns/iter",
            "extra": "iterations: 8213\ncpu: 85318.60465116137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 151451.5995245332,
            "unit": "ns/iter",
            "extra": "iterations: 4627\ncpu: 151447.2012102869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 649600.3858998496,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 649552.3191094616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 550935.2403467575,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 550910.2442868488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 546876.3992156906,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 546841.4901960783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 552816.0229249601,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 552787.5889328128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 361270.2369374114,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 361266.3217796105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 538335.1123941566,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 538282.909930717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21457.913728728094,
            "unit": "ns/iter",
            "extra": "iterations: 32676\ncpu: 21457.01738278882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 105862.31075757786,
            "unit": "ns/iter",
            "extra": "iterations: 6600\ncpu: 105855.22727272732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83933.7931700257,
            "unit": "ns/iter",
            "extra": "iterations: 8287\ncpu: 83929.64884759304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82429.00556609475,
            "unit": "ns/iter",
            "extra": "iterations: 8444\ncpu: 82428.2212221696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84381.4712823577,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 84379.03672486483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 148313.40496393546,
            "unit": "ns/iter",
            "extra": "iterations: 4714\ncpu: 148307.23377174462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 649312.2894248666,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 649272.912801488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 549592.9301412714,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 549563.5792778719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 547899.3117186803,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 547878.6718750016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 551411.8715524296,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 551388.6524822754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 361275.41228066495,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 361271.87822497316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 537663.5970724069,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 537634.3605546961 ns\nthreads: 1"
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
        "date": 1705954276097,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8306.755427448425,
            "unit": "ns/iter",
            "extra": "iterations: 84478\ncpu: 8306.257250408391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75063.34117231469,
            "unit": "ns/iter",
            "extra": "iterations: 11311\ncpu: 75058.10273185394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 144625.9460396134,
            "unit": "ns/iter",
            "extra": "iterations: 6060\ncpu: 144617.90429042903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 212788.2403656027,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 212777.2233201581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 290270.2592229893,
            "unit": "ns/iter",
            "extra": "iterations: 3063\ncpu: 290254.8481880509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 347652.79572063976,
            "unit": "ns/iter",
            "extra": "iterations: 2477\ncpu: 347632.4182478804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 415825.27806977433,
            "unit": "ns/iter",
            "extra": "iterations: 2093\ncpu: 415804.1089345437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 483415.84914034477,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 483403.88241819234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 551360.3190145277,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 551331.838281743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6290.023040482035,
            "unit": "ns/iter",
            "extra": "iterations: 111456\ncpu: 6289.734962675855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5413.127510373046,
            "unit": "ns/iter",
            "extra": "iterations: 129911\ncpu: 5413.053552047162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5339.7901100077315,
            "unit": "ns/iter",
            "extra": "iterations: 131264\ncpu: 5339.544734275958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5416.3117712295325,
            "unit": "ns/iter",
            "extra": "iterations: 129842\ncpu: 5415.987892977615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9255.286619718236,
            "unit": "ns/iter",
            "extra": "iterations: 75260\ncpu: 9254.784746213141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33564.85526154514,
            "unit": "ns/iter",
            "extra": "iterations: 24451\ncpu: 33563.8746881518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135041.69088320533,
            "unit": "ns/iter",
            "extra": "iterations: 6318\ncpu: 135036.41975308646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 110816.46592977713,
            "unit": "ns/iter",
            "extra": "iterations: 7690\ncpu: 110810.42912873859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109115.68060884757,
            "unit": "ns/iter",
            "extra": "iterations: 7818\ncpu: 109110.42466103847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111214.28948400368,
            "unit": "ns/iter",
            "extra": "iterations: 7655\ncpu: 111210.50293925562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 279461.36826736294,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 279448.37767683336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2229601.485507356,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2229482.6086956575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1830084.3865878459,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1830005.522682442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1824024.5371092812,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1823965.4296875047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1847019.181818166,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1846941.6996047478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1080510.39860136,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1080462.0046620031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1786903.2337164327,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1786839.2720306525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7237364.759999991,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7236976.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4105631.855895014,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4105435.8078602566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9208664.822033448,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9208133.898305083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33324.41351384313,
            "unit": "ns/iter",
            "extra": "iterations: 24449\ncpu: 33323.30974682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 140975.50469601175,
            "unit": "ns/iter",
            "extra": "iterations: 6069\ncpu: 140972.6149283239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 113115.7667680864,
            "unit": "ns/iter",
            "extra": "iterations: 7559\ncpu: 113113.05728270943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113075.08764253244,
            "unit": "ns/iter",
            "extra": "iterations: 7542\ncpu: 113071.86422699601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 112131.23431905566,
            "unit": "ns/iter",
            "extra": "iterations: 7541\ncpu: 112127.51624453021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 282731.5201837717,
            "unit": "ns/iter",
            "extra": "iterations: 3047\ncpu: 282727.8306531023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2259171.226277555,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2259112.165450137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1846957.1980199136,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1846873.8613861438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1836829.5984251874,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1836764.9606299205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1861260.264940277,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1861191.2350597703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1091134.4764150928,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1091076.886792454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1794249.3800383143,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1794185.2207293648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7278829.680000172,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7278399.999999933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4156454.902222322,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4156247.1111111185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31852.80157717764,
            "unit": "ns/iter",
            "extra": "iterations: 25869\ncpu: 31851.320112876387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132799.8233000656,
            "unit": "ns/iter",
            "extra": "iterations: 6412\ncpu: 132794.93137866515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 110899.81555035542,
            "unit": "ns/iter",
            "extra": "iterations: 7704\ncpu: 110896.53426791224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109210.69686588172,
            "unit": "ns/iter",
            "extra": "iterations: 7881\ncpu: 109205.18969673858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111662.00131095643,
            "unit": "ns/iter",
            "extra": "iterations: 7628\ncpu: 111655.4273728366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 273679.39396826265,
            "unit": "ns/iter",
            "extra": "iterations: 3150\ncpu: 273666.3492063489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2244983.645783325,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2244892.7710843305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1841966.128205028,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1841873.3727810613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1822896.1624265972,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1822813.3072407078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1839062.4514853302,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1838984.5544554433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1075355.5215869488,
            "unit": "ns/iter",
            "extra": "iterations: 857\ncpu: 1075324.387397903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1783493.3946360985,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1783461.6858237595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3218.921210114419,
            "unit": "ns/iter",
            "extra": "iterations: 217401\ncpu: 3218.777742512675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16594.32802027513,
            "unit": "ns/iter",
            "extra": "iterations: 42223\ncpu: 16594.26142150014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12220.438880064261,
            "unit": "ns/iter",
            "extra": "iterations: 57289\ncpu: 12220.384366981363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13154.687658139792,
            "unit": "ns/iter",
            "extra": "iterations: 53355\ncpu: 13154.051166713574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10846.983346242321,
            "unit": "ns/iter",
            "extra": "iterations: 64550\ncpu: 10846.334624322306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64567.760301694965,
            "unit": "ns/iter",
            "extra": "iterations: 10872\ncpu: 64563.08866813798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 147247.6961651816,
            "unit": "ns/iter",
            "extra": "iterations: 4746\ncpu: 147239.67551622415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38010.2848320664,
            "unit": "ns/iter",
            "extra": "iterations: 18460\ncpu: 38007.80606717247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37436.02261427045,
            "unit": "ns/iter",
            "extra": "iterations: 18705\ncpu: 37434.07110398267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38150.977057220334,
            "unit": "ns/iter",
            "extra": "iterations: 18350\ncpu: 38148.61035422375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77404.72070074205,
            "unit": "ns/iter",
            "extra": "iterations: 9019\ncpu: 77402.12883911643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68687.85784409654,
            "unit": "ns/iter",
            "extra": "iterations: 10186\ncpu: 68686.7759670129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21159.4955328926,
            "unit": "ns/iter",
            "extra": "iterations: 33243\ncpu: 21159.224498390824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100018.13702540565,
            "unit": "ns/iter",
            "extra": "iterations: 7006\ncpu: 100015.77219526113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81001.85367263366,
            "unit": "ns/iter",
            "extra": "iterations: 8645\ncpu: 80996.96934644323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80764.31206081317,
            "unit": "ns/iter",
            "extra": "iterations: 8681\ncpu: 80760.82248588985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81426.21466028936,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 81422.77123878327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 148853.8836170324,
            "unit": "ns/iter",
            "extra": "iterations: 4700\ncpu: 148850.78723404466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 640951.2022058507,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 640935.9374999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 541787.0842349561,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 541753.5548686241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 538734.8616938363,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 538717.4048174064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 545866.736760107,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 545858.4112149606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 357871.92452831496,
            "unit": "ns/iter",
            "extra": "iterations: 1961\ncpu: 357854.9209586921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 530917.1226199549,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 530908.6062452339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20613.51607584505,
            "unit": "ns/iter",
            "extra": "iterations: 33964\ncpu: 20613.284654339608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 99383.29775759546,
            "unit": "ns/iter",
            "extra": "iterations: 7046\ncpu: 99380.78342321904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80327.24865298772,
            "unit": "ns/iter",
            "extra": "iterations: 8723\ncpu: 80323.28327410285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80505.02319706471,
            "unit": "ns/iter",
            "extra": "iterations: 8708\ncpu: 80501.5043638032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81491.21459377557,
            "unit": "ns/iter",
            "extra": "iterations: 8579\ncpu: 81489.0779811164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147694.0898355245,
            "unit": "ns/iter",
            "extra": "iterations: 4742\ncpu: 147689.73007170018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 641007.9528214509,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 640974.0055504199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 539734.8289675959,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 539696.1479198813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 537705.6117917635,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 537670.4441041278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 541069.198455623,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 541060.8494208416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 356963.0362614888,
            "unit": "ns/iter",
            "extra": "iterations: 1958\ncpu: 356961.5423901968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 530494.3072837748,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 530492.033383919 ns\nthreads: 1"
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
        "date": 1705956106360,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8211.687082837812,
            "unit": "ns/iter",
            "extra": "iterations: 84949\ncpu: 8211.590483701986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75983.9671652348,
            "unit": "ns/iter",
            "extra": "iterations: 11299\ncpu: 75982.86574033099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 143592.33893279848,
            "unit": "ns/iter",
            "extra": "iterations: 6072\ncpu: 143589.97035573123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 212111.84841848307,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 212108.44282238444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 280753.90449982765,
            "unit": "ns/iter",
            "extra": "iterations: 3089\ncpu: 280746.32567173836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 345219.1777059691,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 345206.4216478192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 411893.3946994577,
            "unit": "ns/iter",
            "extra": "iterations: 2113\ncpu: 411864.4581164223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 478769.1609702717,
            "unit": "ns/iter",
            "extra": "iterations: 1814\ncpu: 478746.08599779475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 546243.7000625639,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 546218.4721352528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6267.580473611002,
            "unit": "ns/iter",
            "extra": "iterations: 111695\ncpu: 6267.3396302430765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5367.788485252367,
            "unit": "ns/iter",
            "extra": "iterations: 130563\ncpu: 5367.509937731206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5380.873346342963,
            "unit": "ns/iter",
            "extra": "iterations: 130166\ncpu: 5380.571731481329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5343.263062842947,
            "unit": "ns/iter",
            "extra": "iterations: 131231\ncpu: 5343.0812841477955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9364.910504274007,
            "unit": "ns/iter",
            "extra": "iterations: 74741\ncpu: 9364.55492969054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36240.166504939865,
            "unit": "ns/iter",
            "extra": "iterations: 22672\ncpu: 36239.27311220894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 141118.04245515875,
            "unit": "ns/iter",
            "extra": "iterations: 6077\ncpu: 141111.9631397071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 114545.04331551291,
            "unit": "ns/iter",
            "extra": "iterations: 7480\ncpu: 114538.91711229952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 113540.24782723216,
            "unit": "ns/iter",
            "extra": "iterations: 7594\ncpu: 113530.19489070334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111585.27835186255,
            "unit": "ns/iter",
            "extra": "iterations: 7645\ncpu: 111583.92413342046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 291333.7944051024,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 291326.12066060054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2209505.0023752223,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2209430.403800473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1807704.7348928226,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1807684.60038986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1807205.5252919146,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1807191.6342412462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1829360.4114174333,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1829337.5984251963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1085050.357647052,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1085003.5294117662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1762991.8114285136,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1762919.047619046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7218194.629999744,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7217773.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4223339.854545636,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4222224.999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9398143.191303818,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9397463.47826088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33904.549725346886,
            "unit": "ns/iter",
            "extra": "iterations: 24394\ncpu: 33903.914897105824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 146680.28314799635,
            "unit": "ns/iter",
            "extra": "iterations: 5845\ncpu: 146672.86569717716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 115971.4637759895,
            "unit": "ns/iter",
            "extra": "iterations: 7357\ncpu: 115964.33328802478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 114647.51165907242,
            "unit": "ns/iter",
            "extra": "iterations: 7462\ncpu: 114644.00964888721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 114764.38115746233,
            "unit": "ns/iter",
            "extra": "iterations: 7430\ncpu: 114757.64468371509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 289302.82085562136,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 289287.366310161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2225593.9928059536,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2225460.9112709817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1830945.017612488,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1830888.062622302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1828952.8133594003,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1828846.1689587524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1831495.921414666,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1831395.6777996072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1098617.548042604,
            "unit": "ns/iter",
            "extra": "iterations: 843\ncpu: 1098546.9750889747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1781295.5028679979,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1781268.833651999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7311824.89000048,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7311653.999999948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4245224.398189798,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4245197.737556551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31773.31013862426,
            "unit": "ns/iter",
            "extra": "iterations: 25753\ncpu: 31772.70220945115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 134526.21460530735,
            "unit": "ns/iter",
            "extra": "iterations: 6258\ncpu: 134525.43943751985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 111775.22428912716,
            "unit": "ns/iter",
            "extra": "iterations: 7526\ncpu: 111774.30241828339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 114566.63204585214,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 114565.07438242096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 112091.3027034167,
            "unit": "ns/iter",
            "extra": "iterations: 7509\ncpu: 112086.11000133245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 283210.1594250257,
            "unit": "ns/iter",
            "extra": "iterations: 3061\ncpu: 283207.154524666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2228584.249400451,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2228553.4772182233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1823435.447058906,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1823395.4901960732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1823579.0215686287,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1823532.549019616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1811470.5067961323,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1811420.194174756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1074661.612716816,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1074641.734104052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1772445.9390475594,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1772393.9047619114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3229.2914576102626,
            "unit": "ns/iter",
            "extra": "iterations: 217445\ncpu: 3229.227160891248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16829.14710263148,
            "unit": "ns/iter",
            "extra": "iterations: 41624\ncpu: 16828.579665577552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13008.55617904438,
            "unit": "ns/iter",
            "extra": "iterations: 53819\ncpu: 13008.142105947652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13040.931073891048,
            "unit": "ns/iter",
            "extra": "iterations: 53376\ncpu: 13040.649355515536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10913.684774317257,
            "unit": "ns/iter",
            "extra": "iterations: 64227\ncpu: 10913.481868995874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66517.37305502532,
            "unit": "ns/iter",
            "extra": "iterations: 10540\ncpu: 66517.01138519919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 145928.31197830662,
            "unit": "ns/iter",
            "extra": "iterations: 4792\ncpu: 145918.38480801324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37740.656120300046,
            "unit": "ns/iter",
            "extra": "iterations: 18553\ncpu: 37739.998922007304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37469.15159574825,
            "unit": "ns/iter",
            "extra": "iterations: 18800\ncpu: 37467.79255319108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37492.76851009027,
            "unit": "ns/iter",
            "extra": "iterations: 18679\ncpu: 37492.1034316614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77879.52557260789,
            "unit": "ns/iter",
            "extra": "iterations: 8994\ncpu: 77875.79497442722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 57968.5693400441,
            "unit": "ns/iter",
            "extra": "iterations: 12107\ncpu: 57967.39902535629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21003.74331758849,
            "unit": "ns/iter",
            "extra": "iterations: 33446\ncpu: 21003.124439394538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99423.48096786709,
            "unit": "ns/iter",
            "extra": "iterations: 7067\ncpu: 99422.62629121263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 79201.92414105391,
            "unit": "ns/iter",
            "extra": "iterations: 8819\ncpu: 79202.1090826625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78894.31295733813,
            "unit": "ns/iter",
            "extra": "iterations: 8883\ncpu: 78892.77271192208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81050.56246388234,
            "unit": "ns/iter",
            "extra": "iterations: 8653\ncpu: 81048.79232636037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 151527.38802421425,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 151521.4223951582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 629433.7231740282,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 629415.9603246086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 538954.5691244475,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 538956.2211981615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 537273.6194486839,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 537246.6309341469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 539263.3139356652,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 539251.6079632409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 367098.84425799653,
            "unit": "ns/iter",
            "extra": "iterations: 1907\ncpu: 367080.8075511252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 528825.434716964,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 528799.1698113158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21069.30661443451,
            "unit": "ns/iter",
            "extra": "iterations: 33185\ncpu: 21068.21455476857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96987.92857142686,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 96984.64006696605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78761.63503485288,
            "unit": "ns/iter",
            "extra": "iterations: 8894\ncpu: 78761.86192939052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79426.56888536626,
            "unit": "ns/iter",
            "extra": "iterations: 8819\ncpu: 79423.31330082657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 80803.4010862119,
            "unit": "ns/iter",
            "extra": "iterations: 8654\ncpu: 80801.50219551742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150752.09579290036,
            "unit": "ns/iter",
            "extra": "iterations: 4635\ncpu: 150746.6666666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 633017.8633484283,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 633005.3393665107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 537292.7524980966,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 537294.0046118414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 536867.7111111147,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 536847.7394635997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 532410.8892260933,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 532393.7025796606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 364309.4302142811,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 364293.77940407756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 525568.1216215795,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 525557.1321321356 ns\nthreads: 1"
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
        "date": 1705957719704,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8289.51349714328,
            "unit": "ns/iter",
            "extra": "iterations: 84203\ncpu: 8288.956450482761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77088.09365942341,
            "unit": "ns/iter",
            "extra": "iterations: 11040\ncpu: 77084.20289855072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 149299.4282824888,
            "unit": "ns/iter",
            "extra": "iterations: 5933\ncpu: 149289.8196527895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 217219.47878183972,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 217214.35346979531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 288789.3244136121,
            "unit": "ns/iter",
            "extra": "iterations: 3027\ncpu: 288790.32044928975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 354290.69827587256,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 354288.957307061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 423376.5124087597,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 423374.4038929439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 491780.1640270966,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 491778.4502262442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 561909.6705276268,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 561880.0514800511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6362.631572244413,
            "unit": "ns/iter",
            "extra": "iterations: 109932\ncpu: 6362.391296437804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5386.67793208352,
            "unit": "ns/iter",
            "extra": "iterations: 129541\ncpu: 5386.489219629307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5442.250438834854,
            "unit": "ns/iter",
            "extra": "iterations: 128750\ncpu: 5442.218252427184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5405.364428051698,
            "unit": "ns/iter",
            "extra": "iterations: 129872\ncpu: 5405.178175434273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9195.35640024719,
            "unit": "ns/iter",
            "extra": "iterations: 76083\ncpu: 9194.913449785108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 38327.255218567894,
            "unit": "ns/iter",
            "extra": "iterations: 21366\ncpu: 38325.59206215489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 149073.0247214606,
            "unit": "ns/iter",
            "extra": "iterations: 5744\ncpu: 149069.39415041808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 122237.11172944627,
            "unit": "ns/iter",
            "extra": "iterations: 7008\ncpu: 122233.66152968009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 121405.8202103473,
            "unit": "ns/iter",
            "extra": "iterations: 7036\ncpu: 121402.47299602072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 123208.54883318624,
            "unit": "ns/iter",
            "extra": "iterations: 6942\ncpu: 123200.4465571882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 292564.1919973399,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 292549.8655010084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2310683.582089469,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2310583.333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1871119.261044118,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1871027.7108433733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1882137.0444444218,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1882058.5858585814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1905125.6775511245,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1905137.5510204071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1114024.062801952,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 1113994.6859903387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1831812.5601577377,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1831728.796844184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7532017.959999848,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7531834.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4259423.272727438,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4259268.636363635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9360928.06896556,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 9360566.379310323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 37246.347063344714,
            "unit": "ns/iter",
            "extra": "iterations: 22117\ncpu: 37244.25555002943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 155193.66419663213,
            "unit": "ns/iter",
            "extra": "iterations: 5533\ncpu: 155188.3245978675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 124109.91478260336,
            "unit": "ns/iter",
            "extra": "iterations: 6900\ncpu: 124105.13043478252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 123898.83924177884,
            "unit": "ns/iter",
            "extra": "iterations: 6911\ncpu: 123894.704094921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 122993.47182591727,
            "unit": "ns/iter",
            "extra": "iterations: 6939\ncpu: 122985.70399193016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 290159.0659083557,
            "unit": "ns/iter",
            "extra": "iterations: 2989\ncpu: 290150.95349615306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2342385.617128409,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2342319.3954659915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1901014.749490739,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1900947.2505091715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1948272.997722096,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 1948180.865603645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1918988.7304528027,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1918938.6831275723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1118357.2986698959,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 1118322.611850056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1848800.2405567267,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1848727.2365805116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7582369.159999872,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7581851.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4320949.262672647,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4320797.235023037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 36269.25760937218,
            "unit": "ns/iter",
            "extra": "iterations: 22538\ncpu: 36268.16044014563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 149247.1053729756,
            "unit": "ns/iter",
            "extra": "iterations: 5751\ncpu: 149238.04555729483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 121706.92955938922,
            "unit": "ns/iter",
            "extra": "iterations: 7013\ncpu: 121701.72536717527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 121843.26661892352,
            "unit": "ns/iter",
            "extra": "iterations: 6980\ncpu: 121836.56160458417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 123354.11047180976,
            "unit": "ns/iter",
            "extra": "iterations: 6952\ncpu: 123346.0586881475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 285101.4449617519,
            "unit": "ns/iter",
            "extra": "iterations: 3007\ncpu: 285092.45094778825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2321313.3990025413,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2321198.254364081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1905169.220859071,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1905108.5889570452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1898016.469262248,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1897963.1147540994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1914085.2546202012,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1913967.3511293666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1107436.8973747157,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1107403.221957041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1843475.710317639,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1843423.0158730077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3286.595621241662,
            "unit": "ns/iter",
            "extra": "iterations: 212526\ncpu: 3286.4346009429355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16739.863070638155,
            "unit": "ns/iter",
            "extra": "iterations: 41861\ncpu: 16738.787893265744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13673.534718961731,
            "unit": "ns/iter",
            "extra": "iterations: 51096\ncpu: 13673.031157037738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13450.63566785999,
            "unit": "ns/iter",
            "extra": "iterations: 52002\ncpu: 13450.163455251695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10936.834161665969,
            "unit": "ns/iter",
            "extra": "iterations: 63984\ncpu: 10936.421605401361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66702.4504384366,
            "unit": "ns/iter",
            "extra": "iterations: 10492\ncpu: 66702.06824247054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 152312.50779559193,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 152307.23256821127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38651.07259267272,
            "unit": "ns/iter",
            "extra": "iterations: 18101\ncpu: 38651.234738411964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38713.46204875397,
            "unit": "ns/iter",
            "extra": "iterations: 18089\ncpu: 38713.66023550211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39054.41067349511,
            "unit": "ns/iter",
            "extra": "iterations: 17951\ncpu: 39052.15865411385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 79190.26928297251,
            "unit": "ns/iter",
            "extra": "iterations: 8842\ncpu: 79189.62904320259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70573.36069702641,
            "unit": "ns/iter",
            "extra": "iterations: 9928\ncpu: 70573.70064464129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22036.36967182363,
            "unit": "ns/iter",
            "extra": "iterations: 31812\ncpu: 22035.20369671813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 105030.97329332436,
            "unit": "ns/iter",
            "extra": "iterations: 6665\ncpu: 105027.32183045663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83902.11209475464,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 83897.48773776767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83099.55364552546,
            "unit": "ns/iter",
            "extra": "iterations: 8435\ncpu: 83094.93775933623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 85580.88372662653,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 85581.23242450198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 155561.5662891473,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 155560.692871419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 661058.0122526404,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 661034.6842601288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 552562.4509493522,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 552520.2531645527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 550747.0267295514,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 550719.025157237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 557678.8737093006,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 557674.5830023797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 357861.0220852784,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 357858.8084232153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 541936.534456378,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 541933.6140888141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21823.421804349102,
            "unit": "ns/iter",
            "extra": "iterations: 32067\ncpu: 21823.017432251298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 102733.98562207418,
            "unit": "ns/iter",
            "extra": "iterations: 6816\ncpu: 102732.1449530506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83402.58893515142,
            "unit": "ns/iter",
            "extra": "iterations: 8405\ncpu: 83403.01011302783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83458.27441860751,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 83456.72033392976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83568.1077858695,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 83566.53153690266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150675.39310344838,
            "unit": "ns/iter",
            "extra": "iterations: 4640\ncpu: 150668.36206896577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 664681.8800374992,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 664645.6419868816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 549617.9137255204,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 549584.8627450909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 551181.2765957372,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 551169.0307328588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 551962.8443916963,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 551958.5308056764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 357616.2698412647,
            "unit": "ns/iter",
            "extra": "iterations: 1953\ncpu: 357603.737839222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 541947.9759690296,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 541925.7364341096 ns\nthreads: 1"
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
        "date": 1705959175606,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8168.9254072718095,
            "unit": "ns/iter",
            "extra": "iterations: 85692\ncpu: 8168.533818792886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76253.24358400342,
            "unit": "ns/iter",
            "extra": "iterations: 11183\ncpu: 76246.37396047573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145748.64782390022,
            "unit": "ns/iter",
            "extra": "iterations: 5997\ncpu: 145736.98515924634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 214611.8352679452,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 214598.8145221041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 283589.66264667374,
            "unit": "ns/iter",
            "extra": "iterations: 3068\ncpu: 283565.7105606257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 350309.2416297111,
            "unit": "ns/iter",
            "extra": "iterations: 2479\ncpu: 350271.07704719645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 418262.4335260112,
            "unit": "ns/iter",
            "extra": "iterations: 2076\ncpu: 418239.3545279387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 484439.57997767965,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 484413.4787472032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 553957.4446565049,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 553940.7124681937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6368.01533917971,
            "unit": "ns/iter",
            "extra": "iterations: 110045\ncpu: 6367.573265482296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5392.868860673493,
            "unit": "ns/iter",
            "extra": "iterations: 129717\ncpu: 5392.852131948776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5480.696614033005,
            "unit": "ns/iter",
            "extra": "iterations: 130273\ncpu: 5480.430327082359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5421.118050084002,
            "unit": "ns/iter",
            "extra": "iterations: 129462\ncpu: 5420.691786006698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9272.068847682227,
            "unit": "ns/iter",
            "extra": "iterations: 75500\ncpu: 9271.77880794701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33957.89996302512,
            "unit": "ns/iter",
            "extra": "iterations: 24341\ncpu: 33955.01828191123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 141256.8872427919,
            "unit": "ns/iter",
            "extra": "iterations: 6075\ncpu: 141245.72839506183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 115884.96660355479,
            "unit": "ns/iter",
            "extra": "iterations: 7396\ncpu: 115874.60789616013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112808.86355239332,
            "unit": "ns/iter",
            "extra": "iterations: 7578\ncpu: 112801.34600158378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 113410.13301409547,
            "unit": "ns/iter",
            "extra": "iterations: 7518\ncpu: 113400.89119446678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 283728.9541254061,
            "unit": "ns/iter",
            "extra": "iterations: 3030\ncpu: 283710.29702970287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2237629.40481939,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2237421.6867469926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1817191.9687499648,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1817132.226562504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1813981.7568094754,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1813880.739299608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1838711.1264823836,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1838684.9802371548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1089236.0693302378,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1089164.5123384248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1778903.1931166379,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1778876.2906309736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7297406.139999794,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7297106.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4201602.328829178,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4201427.477477473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9338975.525861707,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 9338549.137931043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33622.860782788244,
            "unit": "ns/iter",
            "extra": "iterations: 24451\ncpu: 33620.8825814895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 141076.1220277393,
            "unit": "ns/iter",
            "extra": "iterations: 6056\ncpu: 141073.79458388357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 114544.03216296487,
            "unit": "ns/iter",
            "extra": "iterations: 7462\ncpu: 114537.73787188446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 114350.8066202146,
            "unit": "ns/iter",
            "extra": "iterations: 7462\ncpu: 114347.78879656938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 115855.5060585518,
            "unit": "ns/iter",
            "extra": "iterations: 7345\ncpu: 115850.36078965261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 282737.4034799694,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 282732.2061720296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2265027.965853644,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2264927.560975606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1847433.365805078,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1847388.4691848918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1832334.2573673395,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1832196.8565815282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1856208.3174602084,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1856180.3571428596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1098896.0579196124,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1098855.4373522478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1799305.8036072236,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1799278.5571142186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7404090.729999098,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7403009.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4107295.1982380394,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4106981.0572687085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32160.32603568682,
            "unit": "ns/iter",
            "extra": "iterations: 25442\ncpu: 32157.33825957064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 135717.1823669609,
            "unit": "ns/iter",
            "extra": "iterations: 6295\ncpu: 135710.37331215254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 112148.40332503719,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 112139.74342191331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 112450.86753314959,
            "unit": "ns/iter",
            "extra": "iterations: 7617\ncpu: 112443.66548509843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 113893.25767691365,
            "unit": "ns/iter",
            "extra": "iterations: 7490\ncpu: 113883.32443257616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 275832.4327784889,
            "unit": "ns/iter",
            "extra": "iterations: 3124\ncpu: 275815.5569782331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2266497.9975670776,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2266326.277372269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1850775.952286148,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1850644.7316103366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1843881.2125984125,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1843759.6456692908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1856715.543824856,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1856648.8047808807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1090706.48941176,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1090681.176470587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1799356.1395346995,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1799212.7906976647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3295.667964978863,
            "unit": "ns/iter",
            "extra": "iterations: 212327\ncpu: 3295.421213505595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17037.273426658965,
            "unit": "ns/iter",
            "extra": "iterations: 41075\ncpu: 17036.187461959827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13256.501593022498,
            "unit": "ns/iter",
            "extra": "iterations: 52730\ncpu: 13256.459321069637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13082.559399562839,
            "unit": "ns/iter",
            "extra": "iterations: 53561\ncpu: 13082.339762140487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10882.810944577215,
            "unit": "ns/iter",
            "extra": "iterations: 64251\ncpu: 10882.246190720742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65883.51856028849,
            "unit": "ns/iter",
            "extra": "iterations: 10641\ncpu: 65881.46790715131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 149432.53306313796,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 149422.01365187706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38116.261920311714,
            "unit": "ns/iter",
            "extra": "iterations: 18372\ncpu: 38115.63792728058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37902.3295184611,
            "unit": "ns/iter",
            "extra": "iterations: 18524\ncpu: 37897.57611746958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38552.372609369166,
            "unit": "ns/iter",
            "extra": "iterations: 18196\ncpu: 38548.724994504504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77959.9501838833,
            "unit": "ns/iter",
            "extra": "iterations: 8973\ncpu: 77951.19803855922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69556.96612021892,
            "unit": "ns/iter",
            "extra": "iterations: 10065\ncpu: 69551.76353700995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21923.28375015734,
            "unit": "ns/iter",
            "extra": "iterations: 32148\ncpu: 21921.460121935717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 105027.76004196396,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 105021.9724220629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83890.00071899086,
            "unit": "ns/iter",
            "extra": "iterations: 8345\ncpu: 83883.69083283562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83488.94857416865,
            "unit": "ns/iter",
            "extra": "iterations: 8381\ncpu: 83479.53704808463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 83493.32201769503,
            "unit": "ns/iter",
            "extra": "iterations: 8366\ncpu: 83487.19818312096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 154774.88785665156,
            "unit": "ns/iter",
            "extra": "iterations: 4521\ncpu: 154756.97854457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 642537.7520660763,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 642504.2240587615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 553691.8272087701,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 553655.4339327647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 542741.1808927782,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 542666.249021136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 556876.4723538824,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 556824.1706161143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 362428.1755844106,
            "unit": "ns/iter",
            "extra": "iterations: 1925\ncpu: 362378.75324675255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 538918.6983882774,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 538876.6692248646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22217.146495601137,
            "unit": "ns/iter",
            "extra": "iterations: 31489\ncpu: 22215.017942773728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103690.92386313647,
            "unit": "ns/iter",
            "extra": "iterations: 6751\ncpu: 103688.801659014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83315.27149159274,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 83309.52664838296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82433.72179125182,
            "unit": "ns/iter",
            "extra": "iterations: 8508\ncpu: 82425.58768218271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84674.88132718897,
            "unit": "ns/iter",
            "extra": "iterations: 8258\ncpu: 84670.64664567645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 153817.66600703172,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 153803.01231310258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 647502.031192681,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 647487.8899082612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 552569.1004746819,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 552535.36392406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 542539.7810789985,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 542486.5519937491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 548733.5090195783,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 548731.8431372547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 364870.2812499849,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 364845.00000000256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 539920.605873232,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 539919.7063369349 ns\nthreads: 1"
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
        "date": 1705961092685,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8045.33526612511,
            "unit": "ns/iter",
            "extra": "iterations: 86576\ncpu: 8044.870402883017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75719.90154284748,
            "unit": "ns/iter",
            "extra": "iterations: 11213\ncpu: 75715.67823062516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145779.5406658991,
            "unit": "ns/iter",
            "extra": "iterations: 6037\ncpu: 145772.53602782838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 215356.7530344246,
            "unit": "ns/iter",
            "extra": "iterations: 4037\ncpu: 215345.9995045826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 284289.18032247917,
            "unit": "ns/iter",
            "extra": "iterations: 3039\ncpu: 284276.2750904904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 353013.872712512,
            "unit": "ns/iter",
            "extra": "iterations: 2459\ncpu: 353008.13338755583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 422573.9047388867,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 422570.696324952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 490779.00452231563,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 490769.8134539287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 560521.3982016984,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 560517.469492614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6167.817805894806,
            "unit": "ns/iter",
            "extra": "iterations: 113176\ncpu: 6167.5903018307745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5290.400299317303,
            "unit": "ns/iter",
            "extra": "iterations: 132301\ncpu: 5290.3167776509645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5235.178073397314,
            "unit": "ns/iter",
            "extra": "iterations: 133956\ncpu: 5235.19961778495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5220.427509266353,
            "unit": "ns/iter",
            "extra": "iterations: 133286\ncpu: 5220.36222859115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9054.191644510556,
            "unit": "ns/iter",
            "extra": "iterations: 77482\ncpu: 9054.217753800895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34190.70349053744,
            "unit": "ns/iter",
            "extra": "iterations: 24151\ncpu: 34189.843070680305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139138.69439480736,
            "unit": "ns/iter",
            "extra": "iterations: 6155\ncpu: 139139.00893582462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112109.29744262759,
            "unit": "ns/iter",
            "extra": "iterations: 7625\ncpu: 112107.80327868836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 108872.81758045955,
            "unit": "ns/iter",
            "extra": "iterations: 7861\ncpu: 108871.18687189894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110685.05948051333,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 110681.03896103882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 281675.04025279917,
            "unit": "ns/iter",
            "extra": "iterations: 3006\ncpu: 281670.9248170323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2231802.8389423606,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2231707.4519230775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1853074.4063743707,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1853064.143426298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1794911.7046332785,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1794870.463320458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1815012.8730469728,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1815016.796874999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1087239.830429713,
            "unit": "ns/iter",
            "extra": "iterations: 861\ncpu: 1087233.6817653887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1780631.1111111066,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1780635.6321839099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7353774.509999766,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7353702.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4137160.2544642324,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4137085.2678571497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9398006.834782751,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9397289.56521738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32810.27009940444,
            "unit": "ns/iter",
            "extra": "iterations: 25150\ncpu: 32807.73757455279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 137192.28982016162,
            "unit": "ns/iter",
            "extra": "iterations: 6228\ncpu: 137185.13166345554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 111998.64893617989,
            "unit": "ns/iter",
            "extra": "iterations: 7614\ncpu: 111992.90780141875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 111800.92171750088,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 111796.04660295881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 112410.62042541851,
            "unit": "ns/iter",
            "extra": "iterations: 7569\ncpu: 112405.52252609389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 279453.1548877039,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 279441.1492734469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2279253.90909088,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2279068.796068805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1895363.202839767,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1895279.918864099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1831020.4872297675,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1830920.4322200413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1833975.2992127487,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1833903.1496062982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1097658.0814640073,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 1097609.0909090934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1796617.9418602826,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1796549.0310077476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7407608.750000918,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7406998.999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4188464.732142754,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4188251.785714295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32093.56301795232,
            "unit": "ns/iter",
            "extra": "iterations: 25461\ncpu: 32092.486548054072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132462.4026637761,
            "unit": "ns/iter",
            "extra": "iterations: 6457\ncpu: 132455.70698466766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 110750.42357346797,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 110743.72579395819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 108997.5475584924,
            "unit": "ns/iter",
            "extra": "iterations: 7864\ncpu: 108989.36927772114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 110736.84844961535,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 110733.7338501292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 280063.20552448806,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 280054.8832620844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2262609.31143562,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2262540.1459854026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1871867.708582849,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1871871.257485026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1827720.1019607086,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1827701.3725490242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1841580.7430278258,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1841531.673306776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1091277.6835293162,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1091256.8235294085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1870234.281853284,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1870179.9227799126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3283.6622933312533,
            "unit": "ns/iter",
            "extra": "iterations: 215320\ncpu: 3283.6248374512224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16780.026438683028,
            "unit": "ns/iter",
            "extra": "iterations: 41757\ncpu: 16779.363938980314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12812.111530843853,
            "unit": "ns/iter",
            "extra": "iterations: 54532\ncpu: 12812.013129905412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12339.05780673576,
            "unit": "ns/iter",
            "extra": "iterations: 56637\ncpu: 12339.094584812034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10712.920871912398,
            "unit": "ns/iter",
            "extra": "iterations: 65236\ncpu: 10712.72763504814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65917.71019138597,
            "unit": "ns/iter",
            "extra": "iterations: 10607\ncpu: 65915.90459130784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 147100.39978947525,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 147094.75789473756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37981.06121120442,
            "unit": "ns/iter",
            "extra": "iterations: 18428\ncpu: 37980.627306273236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37409.29702970464,
            "unit": "ns/iter",
            "extra": "iterations: 18685\ncpu: 37408.05994112915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37842.64014232555,
            "unit": "ns/iter",
            "extra": "iterations: 18549\ncpu: 37842.18556256377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77564.6378605327,
            "unit": "ns/iter",
            "extra": "iterations: 9049\ncpu: 77561.66427229614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68621.9249314018,
            "unit": "ns/iter",
            "extra": "iterations: 10204\ncpu: 68620.78596628705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20798.754377578924,
            "unit": "ns/iter",
            "extra": "iterations: 33466\ncpu: 20798.141397238996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102449.18205765043,
            "unit": "ns/iter",
            "extra": "iterations: 6833\ncpu: 102448.39748280255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81554.95709800931,
            "unit": "ns/iter",
            "extra": "iterations: 8601\ncpu: 81555.09824439023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81519.66771233303,
            "unit": "ns/iter",
            "extra": "iterations: 8607\ncpu: 81516.31230393767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81254.88857938975,
            "unit": "ns/iter",
            "extra": "iterations: 8616\ncpu: 81253.15691736418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 153592.6695709042,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 153587.32302330667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 647995.2306976566,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 647996.9302325587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 548950.1848938224,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 548952.3210070806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 539535.802003042,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 539511.556240374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 546863.1917057225,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 546858.450704224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 365476.8200312811,
            "unit": "ns/iter",
            "extra": "iterations: 1917\ncpu: 365461.971830985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 535286.1695951679,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 535280.0611153521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20591.887420921532,
            "unit": "ns/iter",
            "extra": "iterations: 33985\ncpu: 20591.47270854819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 102314.10941848913,
            "unit": "ns/iter",
            "extra": "iterations: 6827\ncpu: 102311.95254138146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81001.75832177821,
            "unit": "ns/iter",
            "extra": "iterations: 8652\ncpu: 80998.9944521486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80214.12802015258,
            "unit": "ns/iter",
            "extra": "iterations: 8733\ncpu: 80211.69128592788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82610.47903626123,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 82609.4248257946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150765.6465647179,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 150761.8780960581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 643608.0975161048,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 643609.2916283411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 547584.7014107049,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 547578.9184952918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 536639.2810106946,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 536624.2725880475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 542899.4500386518,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 542893.4159566236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 360629.0952135829,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 360613.3299022136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 532178.8410646506,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 532172.8517110292 ns\nthreads: 1"
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
        "date": 1705962714841,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8207.520061964578,
            "unit": "ns/iter",
            "extra": "iterations: 84563\ncpu: 8207.165072194697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76490.70192050071,
            "unit": "ns/iter",
            "extra": "iterations: 11195\ncpu: 76490.67440821795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 146376.46057257074,
            "unit": "ns/iter",
            "extra": "iterations: 5973\ncpu: 146374.20056922818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 216063.7059115531,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 216065.77247888717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 286712.61955086834,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 286707.43064729177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 353084.1935351585,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 353087.6841243862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 421886.7816593804,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 421877.6807375063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 491157.02714934084,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 491150.90497737535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 559689.8858733976,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 559684.3423799579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6296.899246035173,
            "unit": "ns/iter",
            "extra": "iterations: 111013\ncpu: 6296.469782818231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5361.338086441588,
            "unit": "ns/iter",
            "extra": "iterations: 131002\ncpu: 5361.038762766972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5330.1455978937065,
            "unit": "ns/iter",
            "extra": "iterations: 131403\ncpu: 5329.981050660942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5393.244529443754,
            "unit": "ns/iter",
            "extra": "iterations: 130197\ncpu: 5393.164973079257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9111.565574516113,
            "unit": "ns/iter",
            "extra": "iterations: 76943\ncpu: 9111.657980583039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35645.93716641431,
            "unit": "ns/iter",
            "extra": "iterations: 23045\ncpu: 35645.79301366893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 136829.92970121873,
            "unit": "ns/iter",
            "extra": "iterations: 6259\ncpu: 136831.33088352773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112450.59039473996,
            "unit": "ns/iter",
            "extra": "iterations: 7600\ncpu: 112446.9342105261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 110341.644641928,
            "unit": "ns/iter",
            "extra": "iterations: 7764\ncpu: 110340.86810922186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110830.88686321187,
            "unit": "ns/iter",
            "extra": "iterations: 7734\ncpu: 110829.77760537878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 294140.5422236906,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 294124.7799152263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2244325.8771085287,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2244161.4457831313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1850989.4890656027,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1850899.0059642112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1823707.1862744433,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1823610.7843137286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1870898.0744467478,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1870787.3239436585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1120737.265625056,
            "unit": "ns/iter",
            "extra": "iterations: 832\ncpu: 1120679.8076923066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1795522.3888888005,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1795384.1269841236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7418251.889999965,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7417723.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4134574.1946903234,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4134236.283185843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9335428.155172223,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 9334939.655172413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34353.98918828962,
            "unit": "ns/iter",
            "extra": "iterations: 24048\ncpu: 34350.28692614776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 142042.86482002548,
            "unit": "ns/iter",
            "extra": "iterations: 6029\ncpu: 142038.24846574836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 116402.93225410409,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 116399.2245952934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113621.84079734713,
            "unit": "ns/iter",
            "extra": "iterations: 7525\ncpu: 113619.85382059813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 112257.19600845917,
            "unit": "ns/iter",
            "extra": "iterations: 7566\ncpu: 112254.03119217548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 287230.5784248869,
            "unit": "ns/iter",
            "extra": "iterations: 3022\ncpu: 287227.0019854408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2277761.394607887,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2277680.8823529324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1909538.623742449,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1909539.0342052313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1839973.4831683137,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1839864.752475246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1883417.2888888372,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1883417.5757575764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1118557.6903615703,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 1118498.0722891553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1817331.1106794837,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1817281.3592232922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7492205.009999679,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7491896.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4129296.916666566,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4129026.7543859645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32422.636356468414,
            "unit": "ns/iter",
            "extra": "iterations: 25360\ncpu: 32420.090694006234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 135489.66236663528,
            "unit": "ns/iter",
            "extra": "iterations: 6279\ncpu: 135481.30275521608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 112620.96050552714,
            "unit": "ns/iter",
            "extra": "iterations: 7596\ncpu: 112613.34913112213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111241.96088589306,
            "unit": "ns/iter",
            "extra": "iterations: 7721\ncpu: 111233.37650563437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 112574.87261732337,
            "unit": "ns/iter",
            "extra": "iterations: 7607\ncpu: 112566.767451032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 281071.7633538131,
            "unit": "ns/iter",
            "extra": "iterations: 3089\ncpu: 281051.0197474895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2254625.8029199475,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2254503.1630170383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1868573.235412324,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1868445.8752515144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1837174.9604742902,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1837091.1067193623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1873470.7746476869,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1873357.5452716323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1104804.4152744568,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1104753.4606205253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1812438.4883719813,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1812312.2093023136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3222.474016882782,
            "unit": "ns/iter",
            "extra": "iterations: 219277\ncpu: 3222.5048682716415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16249.351462978533,
            "unit": "ns/iter",
            "extra": "iterations: 43097\ncpu: 16248.395479963843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12484.770148137082,
            "unit": "ns/iter",
            "extra": "iterations: 56097\ncpu: 12483.986665953635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13143.46016254036,
            "unit": "ns/iter",
            "extra": "iterations: 53279\ncpu: 13142.256799114057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10734.900439823388,
            "unit": "ns/iter",
            "extra": "iterations: 65026\ncpu: 10734.026389444214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65830.21881178184,
            "unit": "ns/iter",
            "extra": "iterations: 10621\ncpu: 65829.51699463329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 134049.11170722425,
            "unit": "ns/iter",
            "extra": "iterations: 5219\ncpu: 134048.11266526123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37991.20808934742,
            "unit": "ns/iter",
            "extra": "iterations: 18444\ncpu: 37990.50097592729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37414.6099593972,
            "unit": "ns/iter",
            "extra": "iterations: 18716\ncpu: 37412.4545843126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38039.74663469452,
            "unit": "ns/iter",
            "extra": "iterations: 18349\ncpu: 38036.999291514854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 78411.71062066077,
            "unit": "ns/iter",
            "extra": "iterations: 8926\ncpu: 78409.51153932449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68963.3918812667,
            "unit": "ns/iter",
            "extra": "iterations: 10174\ncpu: 68960.35974051456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21075.638858726314,
            "unit": "ns/iter",
            "extra": "iterations: 33156\ncpu: 21074.426951381603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100841.94512636638,
            "unit": "ns/iter",
            "extra": "iterations: 6925\ncpu: 100840.11552346543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 82013.73497652526,
            "unit": "ns/iter",
            "extra": "iterations: 8520\ncpu: 82011.17370892037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81347.93625174262,
            "unit": "ns/iter",
            "extra": "iterations: 8612\ncpu: 81347.43381328475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82480.59636706063,
            "unit": "ns/iter",
            "extra": "iterations: 8478\ncpu: 82480.70299598969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 152664.15366173274,
            "unit": "ns/iter",
            "extra": "iterations: 4588\ncpu: 152657.19267654722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 649521.7476894873,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 649498.521256941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 553069.442778259,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 553057.3007103421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 546977.0173364375,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 546961.2293144243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 554669.7694136646,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 554666.006339147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 362224.20548654924,
            "unit": "ns/iter",
            "extra": "iterations: 1932\ncpu: 362211.3871635647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 540805.4514637452,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 540792.8351309763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21030.391768980393,
            "unit": "ns/iter",
            "extra": "iterations: 33313\ncpu: 21029.511001711046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 100718.99158704883,
            "unit": "ns/iter",
            "extra": "iterations: 7013\ncpu: 100715.64237844081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80937.21963914635,
            "unit": "ns/iter",
            "extra": "iterations: 8646\ncpu: 80936.5718251203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82096.31776792124,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 82095.45879056834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82824.06016548444,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 82822.73049645245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 148742.73399747498,
            "unit": "ns/iter",
            "extra": "iterations: 4718\ncpu: 148735.96863077732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 646376.8480073797,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 646363.3920296583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 551294.364640853,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 551291.71270719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 543620.3698523451,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 543609.8679098686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 550734.1984374748,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 550732.7343750035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 361742.8484536157,
            "unit": "ns/iter",
            "extra": "iterations: 1940\ncpu: 361718.35051546246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 535077.285496147,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 535065.9541984758 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}