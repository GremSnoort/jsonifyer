window.BENCHMARK_DATA = {
  "lastUpdate": 1702388095068,
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382286265,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 986.1602121635331,
            "unit": "ns/iter",
            "extra": "iterations: 613112\ncpu: 986.1575046647268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20136.56180321163,
            "unit": "ns/iter",
            "extra": "iterations: 41171\ncpu: 20135.447280853026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45434.320503523886,
            "unit": "ns/iter",
            "extra": "iterations: 19304\ncpu: 45432.66162453378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 57813.82050000161,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57812.89000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 71243.82416800143,
            "unit": "ns/iter",
            "extra": "iterations: 11238\ncpu: 71241.53764014944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 88956.34716024838,
            "unit": "ns/iter",
            "extra": "iterations: 9860\ncpu: 88952.91075050707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 107143.30373433663,
            "unit": "ns/iter",
            "extra": "iterations: 8221\ncpu: 107139.82483882736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 124036.89072517186,
            "unit": "ns/iter",
            "extra": "iterations: 7019\ncpu: 124032.96765921068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 153949.05941558283,
            "unit": "ns/iter",
            "extra": "iterations: 6160\ncpu: 153941.50974025982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 814.21013009237,
            "unit": "ns/iter",
            "extra": "iterations: 830871\ncpu: 814.1599598493625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 649.762977906541,
            "unit": "ns/iter",
            "extra": "iterations: 1073170\ncpu: 649.7469180092625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 657.112655588401,
            "unit": "ns/iter",
            "extra": "iterations: 1061776\ncpu: 657.0996142312501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 658.1634563739311,
            "unit": "ns/iter",
            "extra": "iterations: 1063091\ncpu: 658.1320884101178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1381.216442121257,
            "unit": "ns/iter",
            "extra": "iterations: 504278\ncpu: 1381.1734797076213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6724.667813352226,
            "unit": "ns/iter",
            "extra": "iterations: 122091\ncpu: 6724.542349558936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 36564.07966753442,
            "unit": "ns/iter",
            "extra": "iterations: 22619\ncpu: 36564.074450683016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 27531.283972654124,
            "unit": "ns/iter",
            "extra": "iterations: 29693\ncpu: 27530.037382548107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 27142.630843580748,
            "unit": "ns/iter",
            "extra": "iterations: 30418\ncpu: 27141.376816358756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28403.03513091705,
            "unit": "ns/iter",
            "extra": "iterations: 28835\ncpu: 28402.58366568405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 69759.1499283796,
            "unit": "ns/iter",
            "extra": "iterations: 12566\ncpu: 69756.14356199246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 645466.5710000427,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645452.5999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 509035.206999954,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509014.30000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 516507.15800002444,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516513.2999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 515586.59200003376,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515541.2999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 379118.96707107127,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 379097.4003466203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 506665.7989999612,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506659.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2942915.915887779,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2942806.23052959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1238082.631168812,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 1238070.6493506494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3706500.0274511105,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3706368.62745098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6819.484035666298,
            "unit": "ns/iter",
            "extra": "iterations: 122805\ncpu: 6819.415333251916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 36769.210338758385,
            "unit": "ns/iter",
            "extra": "iterations: 22730\ncpu: 36767.87945446551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 27810.12149781792,
            "unit": "ns/iter",
            "extra": "iterations: 30017\ncpu: 27809.50794549758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 27428.85102322822,
            "unit": "ns/iter",
            "extra": "iterations: 30394\ncpu: 27428.72606435482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 29209.142841171582,
            "unit": "ns/iter",
            "extra": "iterations: 26834\ncpu: 29147.961541328095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 68645.9432997715,
            "unit": "ns/iter",
            "extra": "iterations: 12910\ncpu: 68643.86522075892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 637569.7379999678,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637558.5999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 533238.5329999739,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533206.9000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 532172.4030000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532177.7999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 533407.6269999741,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533402.1000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 379440.79233089014,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 379427.3158121491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 517054.4430000064,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517059.1000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3091420.2524916716,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3091194.0199335567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1304323.5186207062,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1304277.6551724137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6670.392277559928,
            "unit": "ns/iter",
            "extra": "iterations: 125090\ncpu: 6670.261411783536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 36826.979118125186,
            "unit": "ns/iter",
            "extra": "iterations: 22747\ncpu: 36825.91990152533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 27697.195706275663,
            "unit": "ns/iter",
            "extra": "iterations: 30137\ncpu: 27695.739456481973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 27377.06230438193,
            "unit": "ns/iter",
            "extra": "iterations: 30672\ncpu: 27376.209572248372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 28333.140140724496,
            "unit": "ns/iter",
            "extra": "iterations: 29135\ncpu: 28332.661747039605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 67374.22112186124,
            "unit": "ns/iter",
            "extra": "iterations: 13228\ncpu: 67374.10039310562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 632237.2160000213,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632212.899999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 518199.1629999629,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518204.79999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 517833.7739999961,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517823.40000000456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 520251.95499999204,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520249.29999999615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 382098.1552251917,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 382094.66550065414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 514783.35199999495,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514788.5999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 347.9210478745505,
            "unit": "ns/iter",
            "extra": "iterations: 2019173\ncpu: 347.92199578738513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2958.9863965146105,
            "unit": "ns/iter",
            "extra": "iterations: 236410\ncpu: 2958.9577429043006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2195.669935133088,
            "unit": "ns/iter",
            "extra": "iterations: 318498\ncpu: 2195.6561736651415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2065.406873401587,
            "unit": "ns/iter",
            "extra": "iterations: 339017\ncpu: 2065.371058088545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1678.3635911119595,
            "unit": "ns/iter",
            "extra": "iterations: 417865\ncpu: 1678.3327151113333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 13837.051424956773,
            "unit": "ns/iter",
            "extra": "iterations: 50598\ncpu: 13836.758369896057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 34223.57091637127,
            "unit": "ns/iter",
            "extra": "iterations: 21476\ncpu: 34222.95585770135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 8008.537333562071,
            "unit": "ns/iter",
            "extra": "iterations: 87495\ncpu: 8008.466769529686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7938.289507484777,
            "unit": "ns/iter",
            "extra": "iterations: 87977\ncpu: 7938.108823897174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7887.742386500506,
            "unit": "ns/iter",
            "extra": "iterations: 87115\ncpu: 7887.301842392233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 17146.92256772331,
            "unit": "ns/iter",
            "extra": "iterations: 40939\ncpu: 17146.288380273025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15728.929587242243,
            "unit": "ns/iter",
            "extra": "iterations: 44651\ncpu: 15727.831403551983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4558.887214614744,
            "unit": "ns/iter",
            "extra": "iterations: 153433\ncpu: 4558.746814570524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 23153.58592406468,
            "unit": "ns/iter",
            "extra": "iterations: 30236\ncpu: 23152.490408784244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 19013.95536370322,
            "unit": "ns/iter",
            "extra": "iterations: 38108\ncpu: 19012.85032014265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 18152.208849604474,
            "unit": "ns/iter",
            "extra": "iterations: 38578\ncpu: 18151.1846129919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 19574.739655409594,
            "unit": "ns/iter",
            "extra": "iterations: 36275\ncpu: 19574.221915920138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38526.592661556206,
            "unit": "ns/iter",
            "extra": "iterations: 18260\ncpu: 38522.85870755802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 156536.71671134402,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 156530.25022341308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 134166.34666922357,
            "unit": "ns/iter",
            "extra": "iterations: 5224\ncpu: 134152.52679938634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 132249.715041575,
            "unit": "ns/iter",
            "extra": "iterations: 5292\ncpu: 132243.76417233478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 134610.94247788147,
            "unit": "ns/iter",
            "extra": "iterations: 5198\ncpu: 134603.98230088377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 83427.01423614682,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 83422.37109702047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 133645.22874571098,
            "unit": "ns/iter",
            "extra": "iterations: 5246\ncpu: 133639.8780022876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4235.068506870156,
            "unit": "ns/iter",
            "extra": "iterations: 163750\ncpu: 4235.115114503782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22057.158829279946,
            "unit": "ns/iter",
            "extra": "iterations: 31707\ncpu: 22056.58371968318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 16825.24707459807,
            "unit": "ns/iter",
            "extra": "iterations: 41020\ncpu: 16823.6250609458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17098.180673707375,
            "unit": "ns/iter",
            "extra": "iterations: 40908\ncpu: 17097.496822137433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17980.553095299554,
            "unit": "ns/iter",
            "extra": "iterations: 38930\ncpu: 17979.047007449066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 36731.16050881471,
            "unit": "ns/iter",
            "extra": "iterations: 18946\ncpu: 36729.91660508836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 149713.0593383056,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 149701.4087513333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 131449.60329649833,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 131443.84716238832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 134292.52620505556,
            "unit": "ns/iter",
            "extra": "iterations: 5228\ncpu: 134286.78270849152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 133712.92507644958,
            "unit": "ns/iter",
            "extra": "iterations: 5232\ncpu: 133712.8631498471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79701.95116411422,
            "unit": "ns/iter",
            "extra": "iterations: 8805\ncpu: 79697.25156161252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 129973.73264017428,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 129963.14519123519 ns\nthreads: 1"
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387013709,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 995.2492424175407,
            "unit": "ns/iter",
            "extra": "iterations: 681774\ncpu: 995.1244840665676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20213.045897962278,
            "unit": "ns/iter",
            "extra": "iterations: 41004\ncpu: 20212.079309335677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 46402.94081579798,
            "unit": "ns/iter",
            "extra": "iterations: 19245\ncpu: 46400.10911925175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 57410.99050000002,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57408.26000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 70303.20904399498,
            "unit": "ns/iter",
            "extra": "iterations: 11433\ncpu: 70299.03787282431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 88068.50160868555,
            "unit": "ns/iter",
            "extra": "iterations: 9946\ncpu: 88064.12628192236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 105489.20086601147,
            "unit": "ns/iter",
            "extra": "iterations: 8314\ncpu: 105483.58191003125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 123595.58714550067,
            "unit": "ns/iter",
            "extra": "iterations: 7017\ncpu: 123589.6109448482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 155288.03622837315,
            "unit": "ns/iter",
            "extra": "iterations: 6183\ncpu: 155280.2846514636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 827.1908935894131,
            "unit": "ns/iter",
            "extra": "iterations: 843318\ncpu: 827.170770693853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 668.8064592427843,
            "unit": "ns/iter",
            "extra": "iterations: 1048513\ncpu: 668.8053462379582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 671.5595508270462,
            "unit": "ns/iter",
            "extra": "iterations: 1042093\ncpu: 671.513770843869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 675.9399879753184,
            "unit": "ns/iter",
            "extra": "iterations: 1031210\ncpu: 675.9137324114386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1330.003474778813,
            "unit": "ns/iter",
            "extra": "iterations: 526940\ncpu: 1329.9220025050286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6416.430268574857,
            "unit": "ns/iter",
            "extra": "iterations: 127525\ncpu: 6416.228190550867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 36822.354154650886,
            "unit": "ns/iter",
            "extra": "iterations: 22541\ncpu: 36821.76922053145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 27884.195017961825,
            "unit": "ns/iter",
            "extra": "iterations: 29787\ncpu: 27883.27794004095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 27146.770996383137,
            "unit": "ns/iter",
            "extra": "iterations: 30410\ncpu: 27146.132851035807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28328.878415393927,
            "unit": "ns/iter",
            "extra": "iterations: 29206\ncpu: 28328.25789221387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 67004.19575706423,
            "unit": "ns/iter",
            "extra": "iterations: 13057\ncpu: 67003.38515738685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 616965.5520000106,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616915.6000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 504541.44100001483,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504523.59999999887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 507465.9239999732,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507438.00000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 507151.27000000846,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507109.49999999854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 370425.14152146113,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 370424.7768805787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 616027.0669992679,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 615981.82466144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2905434.3944953494,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2905239.4495412796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1251084.0262122953,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 1251034.9934469222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3692361.531007723,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3692137.209302326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6736.03706945895,
            "unit": "ns/iter",
            "extra": "iterations: 122230\ncpu: 6735.701546265229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 37425.573319754614,
            "unit": "ns/iter",
            "extra": "iterations: 22586\ncpu: 37422.567076950225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 27448.661282235327,
            "unit": "ns/iter",
            "extra": "iterations: 27920\ncpu: 27448.635386819493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 27407.437568703226,
            "unit": "ns/iter",
            "extra": "iterations: 30930\ncpu: 27406.527643064983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 28569.69869161803,
            "unit": "ns/iter",
            "extra": "iterations: 26292\ncpu: 28568.233683249644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 68171.10095383365,
            "unit": "ns/iter",
            "extra": "iterations: 13105\ncpu: 68167.98168637956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 634536.0899999832,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 634520.7999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 532591.836999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532547.3999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 527887.9659999802,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527880.599999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 522433.0849999887,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522403.70000000525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 373176.3458102843,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 373096.00170140335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 511876.3229999672,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511835.5000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3019938.0776700224,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3019715.210355994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1267660.1117092653,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1267588.694481824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6756.124885111088,
            "unit": "ns/iter",
            "extra": "iterations: 122945\ncpu: 6755.6281263980045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 36870.99322838921,
            "unit": "ns/iter",
            "extra": "iterations: 22742\ncpu: 36869.51455456873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 27691.73717630757,
            "unit": "ns/iter",
            "extra": "iterations: 30237\ncpu: 27689.899791646058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 27177.507725759267,
            "unit": "ns/iter",
            "extra": "iterations: 30353\ncpu: 27176.4636115046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 28260.050729626786,
            "unit": "ns/iter",
            "extra": "iterations: 29056\ncpu: 28258.077505506466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 67812.08726415363,
            "unit": "ns/iter",
            "extra": "iterations: 12720\ncpu: 67809.63836477992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 627446.740000039,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 627407.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 515459.1350000146,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515449.199999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 509793.2240000204,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509766.4999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 512469.62799996254,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512469.5999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 388504.2003491944,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 388490.44085552177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 517637.74599999125,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517620.2000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 340.0260084204765,
            "unit": "ns/iter",
            "extra": "iterations: 2046914\ncpu: 340.01790011695647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3059.5283601920623,
            "unit": "ns/iter",
            "extra": "iterations: 228789\ncpu: 3059.5251519959716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2259.7435178353453,
            "unit": "ns/iter",
            "extra": "iterations: 326627\ncpu: 2259.6702048514035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2229.08904985748,
            "unit": "ns/iter",
            "extra": "iterations: 322078\ncpu: 2229.0886058656483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1679.0532512279003,
            "unit": "ns/iter",
            "extra": "iterations: 440572\ncpu: 1679.0200012710895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 13925.085461709303,
            "unit": "ns/iter",
            "extra": "iterations: 49999\ncpu: 13924.912498250076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 33873.67830193368,
            "unit": "ns/iter",
            "extra": "iterations: 20541\ncpu: 33872.25062070955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7873.268003727941,
            "unit": "ns/iter",
            "extra": "iterations: 89051\ncpu: 7873.110913970674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7849.579687219464,
            "unit": "ns/iter",
            "extra": "iterations: 89136\ncpu: 7849.338090109568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7831.203705578461,
            "unit": "ns/iter",
            "extra": "iterations: 88893\ncpu: 7831.01931535664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 17042.045869105397,
            "unit": "ns/iter",
            "extra": "iterations: 41117\ncpu: 17041.474329352874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15461.030242113795,
            "unit": "ns/iter",
            "extra": "iterations: 45268\ncpu: 15460.192630555799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4467.4661443978675,
            "unit": "ns/iter",
            "extra": "iterations: 155986\ncpu: 4467.399638429074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22962.4192586286,
            "unit": "ns/iter",
            "extra": "iterations: 30511\ncpu: 22961.70889187507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17973.96041397223,
            "unit": "ns/iter",
            "extra": "iterations: 38650\ncpu: 17973.93531694686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17703.186613249778,
            "unit": "ns/iter",
            "extra": "iterations: 39188\ncpu: 17702.401245279103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 19186.611400360638,
            "unit": "ns/iter",
            "extra": "iterations: 37069\ncpu: 19185.66457147479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38176.76080566106,
            "unit": "ns/iter",
            "extra": "iterations: 18370\ncpu: 38175.07348938493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 152695.83022182598,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 152688.8205578726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 133209.01188194772,
            "unit": "ns/iter",
            "extra": "iterations: 5218\ncpu: 133200.53660406487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 132451.0442009788,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 132445.33434076238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 134352.91018998262,
            "unit": "ns/iter",
            "extra": "iterations: 5211\ncpu: 134340.35693724634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 81872.40300769145,
            "unit": "ns/iter",
            "extra": "iterations: 8578\ncpu: 81868.80391699763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 133271.18003428518,
            "unit": "ns/iter",
            "extra": "iterations: 5249\ncpu: 133269.36559344621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4243.781153134358,
            "unit": "ns/iter",
            "extra": "iterations: 164855\ncpu: 4243.575869703675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21921.09179302867,
            "unit": "ns/iter",
            "extra": "iterations: 31985\ncpu: 21920.834766296895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17235.040359620958,
            "unit": "ns/iter",
            "extra": "iterations: 40932\ncpu: 17234.440046906817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17291.827889944816,
            "unit": "ns/iter",
            "extra": "iterations: 40416\ncpu: 17291.09263657945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18177.582322811028,
            "unit": "ns/iter",
            "extra": "iterations: 38264\ncpu: 18176.408634748033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37070.03972945418,
            "unit": "ns/iter",
            "extra": "iterations: 18777\ncpu: 37068.365553603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 152556.10972131242,
            "unit": "ns/iter",
            "extra": "iterations: 4557\ncpu: 152548.14570989736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 133550.27574304736,
            "unit": "ns/iter",
            "extra": "iterations: 5215\ncpu: 133546.34707574343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 133938.6567278294,
            "unit": "ns/iter",
            "extra": "iterations: 5232\ncpu: 133928.5168195728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 139055.02980453058,
            "unit": "ns/iter",
            "extra": "iterations: 5167\ncpu: 139046.75827366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 80981.99988440632,
            "unit": "ns/iter",
            "extra": "iterations: 8651\ncpu: 80981.89804646952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 132193.02666918325,
            "unit": "ns/iter",
            "extra": "iterations: 5287\ncpu: 132189.23775297735 ns\nthreads: 1"
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
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388094548,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1009.3821782979451,
            "unit": "ns/iter",
            "extra": "iterations: 692504\ncpu: 1009.3410290770886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20525.383220010935,
            "unit": "ns/iter",
            "extra": "iterations: 40298\ncpu: 20525.016129832744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 46889.0752957114,
            "unit": "ns/iter",
            "extra": "iterations: 19191\ncpu: 46888.09337710386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 59025.327500000916,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59025.140000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 72551.84366360703,
            "unit": "ns/iter",
            "extra": "iterations: 11213\ncpu: 72550.96762686172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 90176.31758991249,
            "unit": "ns/iter",
            "extra": "iterations: 9676\ncpu: 90172.54030591149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 107215.50485079303,
            "unit": "ns/iter",
            "extra": "iterations: 8143\ncpu: 107214.28220557535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 125188.32217752971,
            "unit": "ns/iter",
            "extra": "iterations: 6962\ncpu: 125183.09393852342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 152279.44171779745,
            "unit": "ns/iter",
            "extra": "iterations: 6194\ncpu: 152276.25121084924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 821.8554220677295,
            "unit": "ns/iter",
            "extra": "iterations: 853844\ncpu: 821.8398208572072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 676.9791000430159,
            "unit": "ns/iter",
            "extra": "iterations: 992203\ncpu: 676.9615693562706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 680.1713107490951,
            "unit": "ns/iter",
            "extra": "iterations: 1026970\ncpu: 680.1487872089733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 691.5759281400746,
            "unit": "ns/iter",
            "extra": "iterations: 1021209\ncpu: 691.573125579583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1310.8210277094288,
            "unit": "ns/iter",
            "extra": "iterations: 522891\ncpu: 1310.804546262987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6879.028238372087,
            "unit": "ns/iter",
            "extra": "iterations: 120014\ncpu: 6878.904961087872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 35211.03913394665,
            "unit": "ns/iter",
            "extra": "iterations: 23509\ncpu: 35210.44706282697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 26509.481193877113,
            "unit": "ns/iter",
            "extra": "iterations: 31293\ncpu: 26509.32796472053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 27391.441976203365,
            "unit": "ns/iter",
            "extra": "iterations: 30341\ncpu: 27391.134108961483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 27881.83830534749,
            "unit": "ns/iter",
            "extra": "iterations: 29599\ncpu: 27881.725733977604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 68389.04540820072,
            "unit": "ns/iter",
            "extra": "iterations: 12751\ncpu: 68386.61281468104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 629803.9250000329,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629754.799999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 509348.7540000297,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509323.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 506712.41499998135,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506689.90000000136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 516311.0870000196,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516282.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 379111.5513698475,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 379100.85616438347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 505562.2710000307,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505522.20000000147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2956641.253164538,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2956607.278481016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1268405.646820012,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1268374.9661705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3720345.501976267,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3720308.6956521724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6777.717030754385,
            "unit": "ns/iter",
            "extra": "iterations: 121674\ncpu: 6777.511218501908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 37064.454118577916,
            "unit": "ns/iter",
            "extra": "iterations: 22787\ncpu: 37064.31298547417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 27711.27888539532,
            "unit": "ns/iter",
            "extra": "iterations: 29894\ncpu: 27710.89516290895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 27080.99892132342,
            "unit": "ns/iter",
            "extra": "iterations: 30593\ncpu: 27080.430163762965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 28697.79848358284,
            "unit": "ns/iter",
            "extra": "iterations: 28752\ncpu: 28696.588063439078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 69054.93254060819,
            "unit": "ns/iter",
            "extra": "iterations: 12867\ncpu: 69053.21364731468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 639525.5190000171,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639497.4000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 534591.7279999525,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534550.8000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 527117.7199999783,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527116.4999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 532651.3299999647,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532603.8000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 381452.32184403774,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 381437.52692804905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 515214.80700000667,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515188.69999999594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3052560.666666637,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3052450.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1300867.1752020922,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1300792.8571428587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 7004.807775501003,
            "unit": "ns/iter",
            "extra": "iterations: 122976\ncpu: 7004.509009888123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 36684.44840640984,
            "unit": "ns/iter",
            "extra": "iterations: 22716\ncpu: 36682.73903856302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 27800.267859536714,
            "unit": "ns/iter",
            "extra": "iterations: 29844\ncpu: 27798.998123576082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 25971.99667763715,
            "unit": "ns/iter",
            "extra": "iterations: 31905\ncpu: 25970.69738285539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 27905.30573812444,
            "unit": "ns/iter",
            "extra": "iterations: 29365\ncpu: 27904.40320108956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 68378.20675696716,
            "unit": "ns/iter",
            "extra": "iterations: 12846\ncpu: 68374.8793398725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 635221.988000012,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 635184.8999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 513930.73999997793,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513929.0999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 522198.42099998455,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522164.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 524008.3970000455,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523975.699999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 389203.50088967243,
            "unit": "ns/iter",
            "extra": "iterations: 2248\ncpu: 389194.17259786325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 521740.07500002516,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521723.39999999903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 414.1021205479512,
            "unit": "ns/iter",
            "extra": "iterations: 1686781\ncpu: 414.0972064541831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3058.164909674657,
            "unit": "ns/iter",
            "extra": "iterations: 228895\ncpu: 3058.0672360689223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2300.3142719087746,
            "unit": "ns/iter",
            "extra": "iterations: 304227\ncpu: 2300.273480000136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2227.4518997497103,
            "unit": "ns/iter",
            "extra": "iterations: 314094\ncpu: 2227.3822486262234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1763.7590922616675,
            "unit": "ns/iter",
            "extra": "iterations: 396546\ncpu: 1763.753763749985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 13996.173358981401,
            "unit": "ns/iter",
            "extra": "iterations: 49908\ncpu: 13995.331409794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 33731.075004823426,
            "unit": "ns/iter",
            "extra": "iterations: 20732\ncpu: 33730.96662164743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 8069.865518234494,
            "unit": "ns/iter",
            "extra": "iterations: 86785\ncpu: 8069.385262430097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7896.887410486549,
            "unit": "ns/iter",
            "extra": "iterations: 88534\ncpu: 7896.486095737193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7890.56862767152,
            "unit": "ns/iter",
            "extra": "iterations: 88798\ncpu: 7890.240771188544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 17095.755232983603,
            "unit": "ns/iter",
            "extra": "iterations: 40990\ncpu: 17094.815808733805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15411.348056262508,
            "unit": "ns/iter",
            "extra": "iterations: 45145\ncpu: 15411.137446007338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4569.408255088448,
            "unit": "ns/iter",
            "extra": "iterations: 153578\ncpu: 4569.097787443539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 23047.428674707433,
            "unit": "ns/iter",
            "extra": "iterations: 30431\ncpu: 23046.948835069514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 18131.85434332965,
            "unit": "ns/iter",
            "extra": "iterations: 38680\ncpu: 18131.489141675327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17986.085100359174,
            "unit": "ns/iter",
            "extra": "iterations: 38860\ncpu: 17986.02418939783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18914.5643971127,
            "unit": "ns/iter",
            "extra": "iterations: 36997\ncpu: 18914.31467416275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37662.12183969712,
            "unit": "ns/iter",
            "extra": "iterations: 18590\ncpu: 37661.99031737522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 155609.2004003462,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 155606.3612099624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 134138.92230575957,
            "unit": "ns/iter",
            "extra": "iterations: 5187\ncpu: 134138.51937536302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 133333.62954458405,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 133330.86490623973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 134341.15837017645,
            "unit": "ns/iter",
            "extra": "iterations: 5203\ncpu: 134340.80338266242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 82639.87367178148,
            "unit": "ns/iter",
            "extra": "iterations: 8470\ncpu: 82638.77213695298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 132888.34402886254,
            "unit": "ns/iter",
            "extra": "iterations: 5267\ncpu: 132883.53901651793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4230.019809008316,
            "unit": "ns/iter",
            "extra": "iterations: 164824\ncpu: 4229.846988302671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21326.803319629867,
            "unit": "ns/iter",
            "extra": "iterations: 32835\ncpu: 21325.972285670632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 16553.392318600523,
            "unit": "ns/iter",
            "extra": "iterations: 42310\ncpu: 16553.35381706467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 16631.708606441713,
            "unit": "ns/iter",
            "extra": "iterations: 42108\ncpu: 16631.18409803371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17690.634263328135,
            "unit": "ns/iter",
            "extra": "iterations: 39821\ncpu: 17690.09818939764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 36615.05212799306,
            "unit": "ns/iter",
            "extra": "iterations: 19126\ncpu: 36614.12736588932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 151633.34783549886,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 151630.30303030205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 132785.97066616282,
            "unit": "ns/iter",
            "extra": "iterations: 5284\ncpu: 132777.40348221175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 134742.65478927555,
            "unit": "ns/iter",
            "extra": "iterations: 5220\ncpu: 134737.126436781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 135152.65948697232,
            "unit": "ns/iter",
            "extra": "iterations: 5107\ncpu: 135146.99432152024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 80409.3219106948,
            "unit": "ns/iter",
            "extra": "iterations: 8667\ncpu: 80404.30368062756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 130987.05066568324,
            "unit": "ns/iter",
            "extra": "iterations: 5408\ncpu: 130986.7418639075 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}