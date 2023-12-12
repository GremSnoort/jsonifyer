window.BENCHMARK_DATA = {
  "lastUpdate": 1702381126371,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-7 18.04 Release c++-17": [
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381125609,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 995.068886520524,
            "unit": "ns/iter",
            "extra": "iterations: 702779\ncpu: 994.9775107110487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20246.11230389993,
            "unit": "ns/iter",
            "extra": "iterations: 40987\ncpu: 20245.27045160661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 46367.92987026322,
            "unit": "ns/iter",
            "extra": "iterations: 19193\ncpu: 46363.1428124837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 57225.809800002025,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57222.74 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 70546.28448351331,
            "unit": "ns/iter",
            "extra": "iterations: 11375\ncpu: 70540.71208791208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87099.77968311001,
            "unit": "ns/iter",
            "extra": "iterations: 9972\ncpu: 87095.12635379069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 102499.63670543821,
            "unit": "ns/iter",
            "extra": "iterations: 8511\ncpu: 102495.57043825634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 131879.3144507064,
            "unit": "ns/iter",
            "extra": "iterations: 7273\ncpu: 131870.86484256844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 148114.33367732915,
            "unit": "ns/iter",
            "extra": "iterations: 5814\ncpu: 148102.3563811489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 803.3523075651182,
            "unit": "ns/iter",
            "extra": "iterations: 870918\ncpu: 803.3152374850442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 651.6742197253986,
            "unit": "ns/iter",
            "extra": "iterations: 1075679\ncpu: 651.6610438615985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 651.4652569381021,
            "unit": "ns/iter",
            "extra": "iterations: 1075006\ncpu: 651.4362710533699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 659.4558103478884,
            "unit": "ns/iter",
            "extra": "iterations: 1024233\ncpu: 659.4308131060021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1304.4963350041758,
            "unit": "ns/iter",
            "extra": "iterations: 521283\ncpu: 1304.3966521064388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6472.744080809873,
            "unit": "ns/iter",
            "extra": "iterations: 127509\ncpu: 6472.358029629271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 36640.09707701421,
            "unit": "ns/iter",
            "extra": "iterations: 22477\ncpu: 36637.49165813947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 27860.126740294985,
            "unit": "ns/iter",
            "extra": "iterations: 29880\ncpu: 27858.50736278448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 27439.213981160297,
            "unit": "ns/iter",
            "extra": "iterations: 30255\ncpu: 27436.99223268885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28673.172328316028,
            "unit": "ns/iter",
            "extra": "iterations: 28643\ncpu: 28671.319345040738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 66693.33656229044,
            "unit": "ns/iter",
            "extra": "iterations: 13317\ncpu: 66687.36201847266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 637378.7140000218,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637346.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 506672.5059999726,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506649.7999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 508151.02699999674,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508131.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 509448.25799996353,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509446.0999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 376421.5075075165,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 376413.5993135986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 633662.6414825093,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 633534.9964362084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2966850.102167189,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2966754.7987616067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1281305.2959459713,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1281227.4324324294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3711626.498023668,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3711503.952569164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6839.438670257919,
            "unit": "ns/iter",
            "extra": "iterations: 121768\ncpu: 6838.86735431313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 37350.05342966531,
            "unit": "ns/iter",
            "extra": "iterations: 22422\ncpu: 37348.95638212464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 28039.971607669602,
            "unit": "ns/iter",
            "extra": "iterations: 29832\ncpu: 28039.06543309202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 27612.06983203352,
            "unit": "ns/iter",
            "extra": "iterations: 30244\ncpu: 27611.245205660663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 29116.117261675907,
            "unit": "ns/iter",
            "extra": "iterations: 28543\ncpu: 29114.42735521844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 69313.96501618715,
            "unit": "ns/iter",
            "extra": "iterations: 12663\ncpu: 69310.58990760468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 640959.81600002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640926.3000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 555727.657000034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555707.8000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 532045.7320000287,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532020.6999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 531753.8749999927,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531742.1000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 382293.380251194,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 382266.6522304023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 520407.3349999589,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520394.59999999596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3072106.5841585235,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3071928.7128712987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1288865.777327927,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1288811.3360323878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6693.3821001043,
            "unit": "ns/iter",
            "extra": "iterations: 124470\ncpu: 6693.134088535392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 36907.18480831869,
            "unit": "ns/iter",
            "extra": "iterations: 22407\ncpu: 36905.06091846311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 27896.52889304525,
            "unit": "ns/iter",
            "extra": "iterations: 29938\ncpu: 27894.74246776663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 27232.19777304725,
            "unit": "ns/iter",
            "extra": "iterations: 30535\ncpu: 27230.784345832562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 28068.811468493335,
            "unit": "ns/iter",
            "extra": "iterations: 29629\ncpu: 28067.494684261957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 67803.67502285895,
            "unit": "ns/iter",
            "extra": "iterations: 13124\ncpu: 67800.73148430345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 632375.421000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632303.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 518905.87999997707,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518880.69999999687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 516922.1570000104,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516900.39999999723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 520050.30499998387,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520011.2000000061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 385324.4047306142,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 385309.5488392465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 518175.9086614363,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 518133.77952756104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 354.77630562071835,
            "unit": "ns/iter",
            "extra": "iterations: 2028920\ncpu: 354.76524456361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3035.392638595212,
            "unit": "ns/iter",
            "extra": "iterations: 230744\ncpu: 3035.1857469749875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2426.350107014662,
            "unit": "ns/iter",
            "extra": "iterations: 289680\ncpu: 2426.1878624689375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2059.7800385324645,
            "unit": "ns/iter",
            "extra": "iterations: 336859\ncpu: 2059.6507737658785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1659.9601676054842,
            "unit": "ns/iter",
            "extra": "iterations: 421466\ncpu: 1659.88169864237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 13998.215655271344,
            "unit": "ns/iter",
            "extra": "iterations: 49964\ncpu: 13997.266031542684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 33255.765058521116,
            "unit": "ns/iter",
            "extra": "iterations: 21018\ncpu: 33255.019507089186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7838.4517309279445,
            "unit": "ns/iter",
            "extra": "iterations: 89374\ncpu: 7838.149797480237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7775.82652541063,
            "unit": "ns/iter",
            "extra": "iterations: 90238\ncpu: 7775.252111084025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7838.301329182519,
            "unit": "ns/iter",
            "extra": "iterations: 90582\ncpu: 7837.909297652918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 17141.136050923484,
            "unit": "ns/iter",
            "extra": "iterations: 40845\ncpu: 17140.02448280084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15559.175430411764,
            "unit": "ns/iter",
            "extra": "iterations: 45015\ncpu: 15558.109519049087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4436.079429683398,
            "unit": "ns/iter",
            "extra": "iterations: 157737\ncpu: 4435.792490030885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22682.295348152176,
            "unit": "ns/iter",
            "extra": "iterations: 30547\ncpu: 22681.42534455106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 18153.821158429157,
            "unit": "ns/iter",
            "extra": "iterations: 38604\ncpu: 18152.3546782718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17915.078186463586,
            "unit": "ns/iter",
            "extra": "iterations: 39150\ncpu: 17913.703703703857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18999.95629380106,
            "unit": "ns/iter",
            "extra": "iterations: 36814\ncpu: 18998.975933068778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38218.762426422996,
            "unit": "ns/iter",
            "extra": "iterations: 18348\ncpu: 38217.32068890372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 155915.1485612314,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 155905.88891367576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 139821.37602291588,
            "unit": "ns/iter",
            "extra": "iterations: 4888\ncpu: 139814.1162029454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 134887.59438137274,
            "unit": "ns/iter",
            "extra": "iterations: 5197\ncpu: 134880.54646911766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 136302.232362717,
            "unit": "ns/iter",
            "extra": "iterations: 5117\ncpu: 136293.37502442833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 83612.36011410013,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83608.61659139667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 133315.82133995742,
            "unit": "ns/iter",
            "extra": "iterations: 5239\ncpu: 133304.00839854736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4220.547275273589,
            "unit": "ns/iter",
            "extra": "iterations: 161374\ncpu: 4220.358917793452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22106.87089970383,
            "unit": "ns/iter",
            "extra": "iterations: 31766\ncpu: 22105.10294025022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17394.067399249387,
            "unit": "ns/iter",
            "extra": "iterations: 40223\ncpu: 17393.297367177976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17082.450490412615,
            "unit": "ns/iter",
            "extra": "iterations: 40578\ncpu: 17081.556508452923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17879.238737935626,
            "unit": "ns/iter",
            "extra": "iterations: 39269\ncpu: 17874.753622450145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37030.16965993819,
            "unit": "ns/iter",
            "extra": "iterations: 18820\ncpu: 37026.82252922466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 150455.5197934658,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 150451.6996557679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 133221.17493820254,
            "unit": "ns/iter",
            "extra": "iterations: 5259\ncpu: 133215.49724282156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 134766.45304398693,
            "unit": "ns/iter",
            "extra": "iterations: 5207\ncpu: 134754.84924140517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 135603.0110744132,
            "unit": "ns/iter",
            "extra": "iterations: 5147\ncpu: 135595.14280163212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 81952.48952269932,
            "unit": "ns/iter",
            "extra": "iterations: 8590\ncpu: 81945.22700814839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 132388.26791453676,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 132383.56967290604 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}