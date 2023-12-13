window.BENCHMARK_DATA = {
  "lastUpdate": 1702492169695,
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
      }
    ]
  }
}