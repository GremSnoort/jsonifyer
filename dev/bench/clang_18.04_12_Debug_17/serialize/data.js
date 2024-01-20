window.BENCHMARK_DATA = {
  "lastUpdate": 1705772700868,
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
      }
    ]
  }
}