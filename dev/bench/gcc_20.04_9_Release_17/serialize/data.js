window.BENCHMARK_DATA = {
  "lastUpdate": 1702390851323,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-9 20.04 Release c++-17": [
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
        "date": 1702381104695,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 959.563739657526,
            "unit": "ns/iter",
            "extra": "iterations: 726612\ncpu: 959.568930873699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19137.748289729054,
            "unit": "ns/iter",
            "extra": "iterations: 43268\ncpu: 19137.3647961542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43706.74138351221,
            "unit": "ns/iter",
            "extra": "iterations: 20513\ncpu: 43703.84634134452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54200.43580000424,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54197.20000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65501.4000991569,
            "unit": "ns/iter",
            "extra": "iterations: 12102\ncpu: 65496.587340935424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84344.20659156419,
            "unit": "ns/iter",
            "extra": "iterations: 10741\ncpu: 84338.83251093935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98051.85357102477,
            "unit": "ns/iter",
            "extra": "iterations: 8919\ncpu: 98046.12624733707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 114541.29795328977,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 114534.54473891371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 138954.24770917796,
            "unit": "ns/iter",
            "extra": "iterations: 6657\ncpu: 138947.42376445854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 793.3600748696263,
            "unit": "ns/iter",
            "extra": "iterations: 883669\ncpu: 793.3240840178855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 640.8284132722225,
            "unit": "ns/iter",
            "extra": "iterations: 1083015\ncpu: 640.8155011703434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 629.4224307105114,
            "unit": "ns/iter",
            "extra": "iterations: 1115970\ncpu: 629.4187119725441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 640.388090474585,
            "unit": "ns/iter",
            "extra": "iterations: 1096131\ncpu: 640.3043066932692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1198.734375288844,
            "unit": "ns/iter",
            "extra": "iterations: 594971\ncpu: 1198.7147272724205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5530.398070000047,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5530.357000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 30834.203948345054,
            "unit": "ns/iter",
            "extra": "iterations: 26948\ncpu: 30833.37167878876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 22914.081455425163,
            "unit": "ns/iter",
            "extra": "iterations: 36388\ncpu: 22913.990876113032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21439.6045092572,
            "unit": "ns/iter",
            "extra": "iterations: 38676\ncpu: 21439.316371910252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22362.778265939625,
            "unit": "ns/iter",
            "extra": "iterations: 36873\ncpu: 22362.894258671688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 53337.437499999396,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53336.33000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 622779.8570000118,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622721.2999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 607746.7478813351,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 607744.4209039572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 610287.7091661212,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 610262.4396967605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 610372.6744515446,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 610339.2073602261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 360019.56021372933,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 360014.4677353053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 612002.7722494525,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 611976.8745620169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2811518.041666667,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2811390.476190474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1212848.8255373382,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 1212787.2313527183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3654176.8798450665,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3653955.0387596856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5475.757020000174,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5475.580999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 31057.984962405284,
            "unit": "ns/iter",
            "extra": "iterations: 26600\ncpu: 31056.394736842023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 22934.0674135551,
            "unit": "ns/iter",
            "extra": "iterations: 36150\ncpu: 22933.053941908667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 22913.234879674135,
            "unit": "ns/iter",
            "extra": "iterations: 36193\ncpu: 22912.32835078614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 22944.028957528877,
            "unit": "ns/iter",
            "extra": "iterations: 36260\ncpu: 22943.587975730712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 53451.96609999903,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53446.31999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 611388.2729999886,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611357.5999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 504701.05499999813,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504673.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 626208.4665718605,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 626167.0697012816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 626760.6433120966,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 626743.0997876846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 360032.1398858192,
            "unit": "ns/iter",
            "extra": "iterations: 2452\ncpu: 360017.3735725936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 620230.3824561408,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 620213.4035087712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2959875.059190065,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2959780.996884734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1247293.1422873077,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1247229.3882978724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5506.040949999829,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5505.977999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 31311.28097461849,
            "unit": "ns/iter",
            "extra": "iterations: 26554\ncpu: 31309.083377268886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 22964.470366153895,
            "unit": "ns/iter",
            "extra": "iterations: 36023\ncpu: 22964.39496988035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 22774.6949469907,
            "unit": "ns/iter",
            "extra": "iterations: 36315\ncpu: 22773.87030152813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 22844.640346760447,
            "unit": "ns/iter",
            "extra": "iterations: 36221\ncpu: 22844.526655807498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 52023.22270000081,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52019.759999999595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 598743.4620000159,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598713.0000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 623171.6795774689,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 623146.8309859127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 622181.4919184718,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 622179.6907940949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 624765.4608879568,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 624742.0718816044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 368619.7944976863,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 368597.9157982498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 624275.8140351006,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 624257.1228070173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 299.3981528209444,
            "unit": "ns/iter",
            "extra": "iterations: 2342166\ncpu: 299.38262275175833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2751.2220861679216,
            "unit": "ns/iter",
            "extra": "iterations: 255617\ncpu: 2751.160916527458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1949.1144068140657,
            "unit": "ns/iter",
            "extra": "iterations: 369707\ncpu: 1949.077783217529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1913.6476790815839,
            "unit": "ns/iter",
            "extra": "iterations: 372805\ncpu: 1913.659688040665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1466.332282770646,
            "unit": "ns/iter",
            "extra": "iterations: 476570\ncpu: 1466.2853305915096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11537.378145728442,
            "unit": "ns/iter",
            "extra": "iterations: 60757\ncpu: 11537.093668219295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31923.085930727088,
            "unit": "ns/iter",
            "extra": "iterations: 21913\ncpu: 31921.57623328616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7527.455803121159,
            "unit": "ns/iter",
            "extra": "iterations: 93174\ncpu: 7527.054757765034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7527.150402527908,
            "unit": "ns/iter",
            "extra": "iterations: 93037\ncpu: 7526.644238313796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7583.6293120226455,
            "unit": "ns/iter",
            "extra": "iterations: 92474\ncpu: 7583.131474792985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15832.068490023878,
            "unit": "ns/iter",
            "extra": "iterations: 43802\ncpu: 15831.774804803406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14713.75709249654,
            "unit": "ns/iter",
            "extra": "iterations: 47656\ncpu: 14713.259610542227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4136.255856995968,
            "unit": "ns/iter",
            "extra": "iterations: 169114\ncpu: 4136.227042113563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 21956.2948227181,
            "unit": "ns/iter",
            "extra": "iterations: 31870\ncpu: 21955.644807028646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17153.37060741955,
            "unit": "ns/iter",
            "extra": "iterations: 40779\ncpu: 17153.28477893031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 16975.967374442404,
            "unit": "ns/iter",
            "extra": "iterations: 41256\ncpu: 16974.980608881197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18109.6146140708,
            "unit": "ns/iter",
            "extra": "iterations: 38634\ncpu: 18108.44851685035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37387.74434606553,
            "unit": "ns/iter",
            "extra": "iterations: 18748\ncpu: 37385.42244506032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 149125.476647475,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 149117.46641074866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 131072.1206210942,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 131062.12838477669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 127219.85496460539,
            "unit": "ns/iter",
            "extra": "iterations: 5509\ncpu: 127208.56779814717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 130846.63104800068,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 130841.77096954938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 79513.73616444651,
            "unit": "ns/iter",
            "extra": "iterations: 8854\ncpu: 79511.73480912662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 129843.49478778578,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 129836.65301563524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4143.579446621461,
            "unit": "ns/iter",
            "extra": "iterations: 168673\ncpu: 4143.516152555583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21945.69097298539,
            "unit": "ns/iter",
            "extra": "iterations: 31871\ncpu: 21945.36098647662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17342.457415747067,
            "unit": "ns/iter",
            "extra": "iterations: 40414\ncpu: 17342.3739298263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17204.782287369315,
            "unit": "ns/iter",
            "extra": "iterations: 40728\ncpu: 17204.883618149743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18110.44983359524,
            "unit": "ns/iter",
            "extra": "iterations: 38761\ncpu: 18110.34545032374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37587.850782254834,
            "unit": "ns/iter",
            "extra": "iterations: 18664\ncpu: 37587.167809687344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 149618.27179705817,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 149617.50159880533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 129411.22972972518,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129411.99555720002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 126617.69512416114,
            "unit": "ns/iter",
            "extra": "iterations: 5517\ncpu: 126614.55501178157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 127809.30350621107,
            "unit": "ns/iter",
            "extra": "iterations: 5476\ncpu: 127808.12636961234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 78082.44346663765,
            "unit": "ns/iter",
            "extra": "iterations: 8977\ncpu: 78081.10727414479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 128415.05620652401,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 128414.4269498356 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381104695,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 959.563739657526,
            "unit": "ns/iter",
            "extra": "iterations: 726612\ncpu: 959.568930873699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19137.748289729054,
            "unit": "ns/iter",
            "extra": "iterations: 43268\ncpu: 19137.3647961542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43706.74138351221,
            "unit": "ns/iter",
            "extra": "iterations: 20513\ncpu: 43703.84634134452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54200.43580000424,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54197.20000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65501.4000991569,
            "unit": "ns/iter",
            "extra": "iterations: 12102\ncpu: 65496.587340935424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84344.20659156419,
            "unit": "ns/iter",
            "extra": "iterations: 10741\ncpu: 84338.83251093935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98051.85357102477,
            "unit": "ns/iter",
            "extra": "iterations: 8919\ncpu: 98046.12624733707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 114541.29795328977,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 114534.54473891371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 138954.24770917796,
            "unit": "ns/iter",
            "extra": "iterations: 6657\ncpu: 138947.42376445854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 793.3600748696263,
            "unit": "ns/iter",
            "extra": "iterations: 883669\ncpu: 793.3240840178855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 640.8284132722225,
            "unit": "ns/iter",
            "extra": "iterations: 1083015\ncpu: 640.8155011703434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 629.4224307105114,
            "unit": "ns/iter",
            "extra": "iterations: 1115970\ncpu: 629.4187119725441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 640.388090474585,
            "unit": "ns/iter",
            "extra": "iterations: 1096131\ncpu: 640.3043066932692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1198.734375288844,
            "unit": "ns/iter",
            "extra": "iterations: 594971\ncpu: 1198.7147272724205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5530.398070000047,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5530.357000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 30834.203948345054,
            "unit": "ns/iter",
            "extra": "iterations: 26948\ncpu: 30833.37167878876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 22914.081455425163,
            "unit": "ns/iter",
            "extra": "iterations: 36388\ncpu: 22913.990876113032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21439.6045092572,
            "unit": "ns/iter",
            "extra": "iterations: 38676\ncpu: 21439.316371910252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22362.778265939625,
            "unit": "ns/iter",
            "extra": "iterations: 36873\ncpu: 22362.894258671688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 53337.437499999396,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53336.33000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 622779.8570000118,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622721.2999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 607746.7478813351,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 607744.4209039572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 610287.7091661212,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 610262.4396967605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 610372.6744515446,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 610339.2073602261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 360019.56021372933,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 360014.4677353053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 612002.7722494525,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 611976.8745620169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2811518.041666667,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2811390.476190474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1212848.8255373382,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 1212787.2313527183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3654176.8798450665,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3653955.0387596856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5475.757020000174,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5475.580999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 31057.984962405284,
            "unit": "ns/iter",
            "extra": "iterations: 26600\ncpu: 31056.394736842023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 22934.0674135551,
            "unit": "ns/iter",
            "extra": "iterations: 36150\ncpu: 22933.053941908667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 22913.234879674135,
            "unit": "ns/iter",
            "extra": "iterations: 36193\ncpu: 22912.32835078614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 22944.028957528877,
            "unit": "ns/iter",
            "extra": "iterations: 36260\ncpu: 22943.587975730712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 53451.96609999903,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53446.31999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 611388.2729999886,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611357.5999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 504701.05499999813,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504673.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 626208.4665718605,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 626167.0697012816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 626760.6433120966,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 626743.0997876846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 360032.1398858192,
            "unit": "ns/iter",
            "extra": "iterations: 2452\ncpu: 360017.3735725936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 620230.3824561408,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 620213.4035087712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2959875.059190065,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2959780.996884734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1247293.1422873077,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1247229.3882978724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5506.040949999829,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5505.977999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 31311.28097461849,
            "unit": "ns/iter",
            "extra": "iterations: 26554\ncpu: 31309.083377268886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 22964.470366153895,
            "unit": "ns/iter",
            "extra": "iterations: 36023\ncpu: 22964.39496988035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 22774.6949469907,
            "unit": "ns/iter",
            "extra": "iterations: 36315\ncpu: 22773.87030152813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 22844.640346760447,
            "unit": "ns/iter",
            "extra": "iterations: 36221\ncpu: 22844.526655807498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 52023.22270000081,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52019.759999999595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 598743.4620000159,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598713.0000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 623171.6795774689,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 623146.8309859127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 622181.4919184718,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 622179.6907940949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 624765.4608879568,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 624742.0718816044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 368619.7944976863,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 368597.9157982498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 624275.8140351006,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 624257.1228070173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 299.3981528209444,
            "unit": "ns/iter",
            "extra": "iterations: 2342166\ncpu: 299.38262275175833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2751.2220861679216,
            "unit": "ns/iter",
            "extra": "iterations: 255617\ncpu: 2751.160916527458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1949.1144068140657,
            "unit": "ns/iter",
            "extra": "iterations: 369707\ncpu: 1949.077783217529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1913.6476790815839,
            "unit": "ns/iter",
            "extra": "iterations: 372805\ncpu: 1913.659688040665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1466.332282770646,
            "unit": "ns/iter",
            "extra": "iterations: 476570\ncpu: 1466.2853305915096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11537.378145728442,
            "unit": "ns/iter",
            "extra": "iterations: 60757\ncpu: 11537.093668219295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31923.085930727088,
            "unit": "ns/iter",
            "extra": "iterations: 21913\ncpu: 31921.57623328616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7527.455803121159,
            "unit": "ns/iter",
            "extra": "iterations: 93174\ncpu: 7527.054757765034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7527.150402527908,
            "unit": "ns/iter",
            "extra": "iterations: 93037\ncpu: 7526.644238313796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7583.6293120226455,
            "unit": "ns/iter",
            "extra": "iterations: 92474\ncpu: 7583.131474792985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15832.068490023878,
            "unit": "ns/iter",
            "extra": "iterations: 43802\ncpu: 15831.774804803406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14713.75709249654,
            "unit": "ns/iter",
            "extra": "iterations: 47656\ncpu: 14713.259610542227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4136.255856995968,
            "unit": "ns/iter",
            "extra": "iterations: 169114\ncpu: 4136.227042113563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 21956.2948227181,
            "unit": "ns/iter",
            "extra": "iterations: 31870\ncpu: 21955.644807028646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17153.37060741955,
            "unit": "ns/iter",
            "extra": "iterations: 40779\ncpu: 17153.28477893031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 16975.967374442404,
            "unit": "ns/iter",
            "extra": "iterations: 41256\ncpu: 16974.980608881197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18109.6146140708,
            "unit": "ns/iter",
            "extra": "iterations: 38634\ncpu: 18108.44851685035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37387.74434606553,
            "unit": "ns/iter",
            "extra": "iterations: 18748\ncpu: 37385.42244506032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 149125.476647475,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 149117.46641074866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 131072.1206210942,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 131062.12838477669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 127219.85496460539,
            "unit": "ns/iter",
            "extra": "iterations: 5509\ncpu: 127208.56779814717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 130846.63104800068,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 130841.77096954938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 79513.73616444651,
            "unit": "ns/iter",
            "extra": "iterations: 8854\ncpu: 79511.73480912662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 129843.49478778578,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 129836.65301563524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4143.579446621461,
            "unit": "ns/iter",
            "extra": "iterations: 168673\ncpu: 4143.516152555583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21945.69097298539,
            "unit": "ns/iter",
            "extra": "iterations: 31871\ncpu: 21945.36098647662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17342.457415747067,
            "unit": "ns/iter",
            "extra": "iterations: 40414\ncpu: 17342.3739298263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17204.782287369315,
            "unit": "ns/iter",
            "extra": "iterations: 40728\ncpu: 17204.883618149743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18110.44983359524,
            "unit": "ns/iter",
            "extra": "iterations: 38761\ncpu: 18110.34545032374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37587.850782254834,
            "unit": "ns/iter",
            "extra": "iterations: 18664\ncpu: 37587.167809687344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 149618.27179705817,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 149617.50159880533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 129411.22972972518,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129411.99555720002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 126617.69512416114,
            "unit": "ns/iter",
            "extra": "iterations: 5517\ncpu: 126614.55501178157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 127809.30350621107,
            "unit": "ns/iter",
            "extra": "iterations: 5476\ncpu: 127808.12636961234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 78082.44346663765,
            "unit": "ns/iter",
            "extra": "iterations: 8977\ncpu: 78081.10727414479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 128415.05620652401,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 128414.4269498356 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381104695,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 959.563739657526,
            "unit": "ns/iter",
            "extra": "iterations: 726612\ncpu: 959.568930873699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19137.748289729054,
            "unit": "ns/iter",
            "extra": "iterations: 43268\ncpu: 19137.3647961542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43706.74138351221,
            "unit": "ns/iter",
            "extra": "iterations: 20513\ncpu: 43703.84634134452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54200.43580000424,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54197.20000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65501.4000991569,
            "unit": "ns/iter",
            "extra": "iterations: 12102\ncpu: 65496.587340935424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84344.20659156419,
            "unit": "ns/iter",
            "extra": "iterations: 10741\ncpu: 84338.83251093935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98051.85357102477,
            "unit": "ns/iter",
            "extra": "iterations: 8919\ncpu: 98046.12624733707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 114541.29795328977,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 114534.54473891371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 138954.24770917796,
            "unit": "ns/iter",
            "extra": "iterations: 6657\ncpu: 138947.42376445854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 793.3600748696263,
            "unit": "ns/iter",
            "extra": "iterations: 883669\ncpu: 793.3240840178855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 640.8284132722225,
            "unit": "ns/iter",
            "extra": "iterations: 1083015\ncpu: 640.8155011703434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 629.4224307105114,
            "unit": "ns/iter",
            "extra": "iterations: 1115970\ncpu: 629.4187119725441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 640.388090474585,
            "unit": "ns/iter",
            "extra": "iterations: 1096131\ncpu: 640.3043066932692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1198.734375288844,
            "unit": "ns/iter",
            "extra": "iterations: 594971\ncpu: 1198.7147272724205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5530.398070000047,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5530.357000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 30834.203948345054,
            "unit": "ns/iter",
            "extra": "iterations: 26948\ncpu: 30833.37167878876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 22914.081455425163,
            "unit": "ns/iter",
            "extra": "iterations: 36388\ncpu: 22913.990876113032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21439.6045092572,
            "unit": "ns/iter",
            "extra": "iterations: 38676\ncpu: 21439.316371910252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22362.778265939625,
            "unit": "ns/iter",
            "extra": "iterations: 36873\ncpu: 22362.894258671688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 53337.437499999396,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53336.33000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 622779.8570000118,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622721.2999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 607746.7478813351,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 607744.4209039572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 610287.7091661212,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 610262.4396967605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 610372.6744515446,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 610339.2073602261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 360019.56021372933,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 360014.4677353053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 612002.7722494525,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 611976.8745620169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2811518.041666667,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2811390.476190474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1212848.8255373382,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 1212787.2313527183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3654176.8798450665,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3653955.0387596856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5475.757020000174,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5475.580999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 31057.984962405284,
            "unit": "ns/iter",
            "extra": "iterations: 26600\ncpu: 31056.394736842023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 22934.0674135551,
            "unit": "ns/iter",
            "extra": "iterations: 36150\ncpu: 22933.053941908667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 22913.234879674135,
            "unit": "ns/iter",
            "extra": "iterations: 36193\ncpu: 22912.32835078614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 22944.028957528877,
            "unit": "ns/iter",
            "extra": "iterations: 36260\ncpu: 22943.587975730712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 53451.96609999903,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53446.31999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 611388.2729999886,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611357.5999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 504701.05499999813,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504673.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 626208.4665718605,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 626167.0697012816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 626760.6433120966,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 626743.0997876846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 360032.1398858192,
            "unit": "ns/iter",
            "extra": "iterations: 2452\ncpu: 360017.3735725936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 620230.3824561408,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 620213.4035087712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2959875.059190065,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2959780.996884734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1247293.1422873077,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1247229.3882978724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5506.040949999829,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5505.977999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 31311.28097461849,
            "unit": "ns/iter",
            "extra": "iterations: 26554\ncpu: 31309.083377268886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 22964.470366153895,
            "unit": "ns/iter",
            "extra": "iterations: 36023\ncpu: 22964.39496988035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 22774.6949469907,
            "unit": "ns/iter",
            "extra": "iterations: 36315\ncpu: 22773.87030152813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 22844.640346760447,
            "unit": "ns/iter",
            "extra": "iterations: 36221\ncpu: 22844.526655807498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 52023.22270000081,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52019.759999999595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 598743.4620000159,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598713.0000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 623171.6795774689,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 623146.8309859127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 622181.4919184718,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 622179.6907940949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 624765.4608879568,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 624742.0718816044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 368619.7944976863,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 368597.9157982498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 624275.8140351006,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 624257.1228070173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 299.3981528209444,
            "unit": "ns/iter",
            "extra": "iterations: 2342166\ncpu: 299.38262275175833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2751.2220861679216,
            "unit": "ns/iter",
            "extra": "iterations: 255617\ncpu: 2751.160916527458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1949.1144068140657,
            "unit": "ns/iter",
            "extra": "iterations: 369707\ncpu: 1949.077783217529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1913.6476790815839,
            "unit": "ns/iter",
            "extra": "iterations: 372805\ncpu: 1913.659688040665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1466.332282770646,
            "unit": "ns/iter",
            "extra": "iterations: 476570\ncpu: 1466.2853305915096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11537.378145728442,
            "unit": "ns/iter",
            "extra": "iterations: 60757\ncpu: 11537.093668219295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31923.085930727088,
            "unit": "ns/iter",
            "extra": "iterations: 21913\ncpu: 31921.57623328616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7527.455803121159,
            "unit": "ns/iter",
            "extra": "iterations: 93174\ncpu: 7527.054757765034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7527.150402527908,
            "unit": "ns/iter",
            "extra": "iterations: 93037\ncpu: 7526.644238313796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7583.6293120226455,
            "unit": "ns/iter",
            "extra": "iterations: 92474\ncpu: 7583.131474792985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15832.068490023878,
            "unit": "ns/iter",
            "extra": "iterations: 43802\ncpu: 15831.774804803406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14713.75709249654,
            "unit": "ns/iter",
            "extra": "iterations: 47656\ncpu: 14713.259610542227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4136.255856995968,
            "unit": "ns/iter",
            "extra": "iterations: 169114\ncpu: 4136.227042113563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 21956.2948227181,
            "unit": "ns/iter",
            "extra": "iterations: 31870\ncpu: 21955.644807028646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17153.37060741955,
            "unit": "ns/iter",
            "extra": "iterations: 40779\ncpu: 17153.28477893031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 16975.967374442404,
            "unit": "ns/iter",
            "extra": "iterations: 41256\ncpu: 16974.980608881197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18109.6146140708,
            "unit": "ns/iter",
            "extra": "iterations: 38634\ncpu: 18108.44851685035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37387.74434606553,
            "unit": "ns/iter",
            "extra": "iterations: 18748\ncpu: 37385.42244506032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 149125.476647475,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 149117.46641074866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 131072.1206210942,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 131062.12838477669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 127219.85496460539,
            "unit": "ns/iter",
            "extra": "iterations: 5509\ncpu: 127208.56779814717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 130846.63104800068,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 130841.77096954938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 79513.73616444651,
            "unit": "ns/iter",
            "extra": "iterations: 8854\ncpu: 79511.73480912662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 129843.49478778578,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 129836.65301563524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4143.579446621461,
            "unit": "ns/iter",
            "extra": "iterations: 168673\ncpu: 4143.516152555583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21945.69097298539,
            "unit": "ns/iter",
            "extra": "iterations: 31871\ncpu: 21945.36098647662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17342.457415747067,
            "unit": "ns/iter",
            "extra": "iterations: 40414\ncpu: 17342.3739298263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17204.782287369315,
            "unit": "ns/iter",
            "extra": "iterations: 40728\ncpu: 17204.883618149743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18110.44983359524,
            "unit": "ns/iter",
            "extra": "iterations: 38761\ncpu: 18110.34545032374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37587.850782254834,
            "unit": "ns/iter",
            "extra": "iterations: 18664\ncpu: 37587.167809687344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 149618.27179705817,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 149617.50159880533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 129411.22972972518,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129411.99555720002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 126617.69512416114,
            "unit": "ns/iter",
            "extra": "iterations: 5517\ncpu: 126614.55501178157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 127809.30350621107,
            "unit": "ns/iter",
            "extra": "iterations: 5476\ncpu: 127808.12636961234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 78082.44346663765,
            "unit": "ns/iter",
            "extra": "iterations: 8977\ncpu: 78081.10727414479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 128415.05620652401,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 128414.4269498356 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381104695,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 959.563739657526,
            "unit": "ns/iter",
            "extra": "iterations: 726612\ncpu: 959.568930873699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19137.748289729054,
            "unit": "ns/iter",
            "extra": "iterations: 43268\ncpu: 19137.3647961542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43706.74138351221,
            "unit": "ns/iter",
            "extra": "iterations: 20513\ncpu: 43703.84634134452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54200.43580000424,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54197.20000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65501.4000991569,
            "unit": "ns/iter",
            "extra": "iterations: 12102\ncpu: 65496.587340935424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84344.20659156419,
            "unit": "ns/iter",
            "extra": "iterations: 10741\ncpu: 84338.83251093935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98051.85357102477,
            "unit": "ns/iter",
            "extra": "iterations: 8919\ncpu: 98046.12624733707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 114541.29795328977,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 114534.54473891371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 138954.24770917796,
            "unit": "ns/iter",
            "extra": "iterations: 6657\ncpu: 138947.42376445854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 793.3600748696263,
            "unit": "ns/iter",
            "extra": "iterations: 883669\ncpu: 793.3240840178855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 640.8284132722225,
            "unit": "ns/iter",
            "extra": "iterations: 1083015\ncpu: 640.8155011703434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 629.4224307105114,
            "unit": "ns/iter",
            "extra": "iterations: 1115970\ncpu: 629.4187119725441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 640.388090474585,
            "unit": "ns/iter",
            "extra": "iterations: 1096131\ncpu: 640.3043066932692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1198.734375288844,
            "unit": "ns/iter",
            "extra": "iterations: 594971\ncpu: 1198.7147272724205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5530.398070000047,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5530.357000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 30834.203948345054,
            "unit": "ns/iter",
            "extra": "iterations: 26948\ncpu: 30833.37167878876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 22914.081455425163,
            "unit": "ns/iter",
            "extra": "iterations: 36388\ncpu: 22913.990876113032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21439.6045092572,
            "unit": "ns/iter",
            "extra": "iterations: 38676\ncpu: 21439.316371910252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22362.778265939625,
            "unit": "ns/iter",
            "extra": "iterations: 36873\ncpu: 22362.894258671688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 53337.437499999396,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53336.33000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 622779.8570000118,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622721.2999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 607746.7478813351,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 607744.4209039572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 610287.7091661212,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 610262.4396967605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 610372.6744515446,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 610339.2073602261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 360019.56021372933,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 360014.4677353053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 612002.7722494525,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 611976.8745620169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2811518.041666667,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2811390.476190474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1212848.8255373382,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 1212787.2313527183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3654176.8798450665,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3653955.0387596856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5475.757020000174,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5475.580999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 31057.984962405284,
            "unit": "ns/iter",
            "extra": "iterations: 26600\ncpu: 31056.394736842023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 22934.0674135551,
            "unit": "ns/iter",
            "extra": "iterations: 36150\ncpu: 22933.053941908667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 22913.234879674135,
            "unit": "ns/iter",
            "extra": "iterations: 36193\ncpu: 22912.32835078614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 22944.028957528877,
            "unit": "ns/iter",
            "extra": "iterations: 36260\ncpu: 22943.587975730712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 53451.96609999903,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53446.31999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 611388.2729999886,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611357.5999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 504701.05499999813,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504673.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 626208.4665718605,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 626167.0697012816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 626760.6433120966,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 626743.0997876846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 360032.1398858192,
            "unit": "ns/iter",
            "extra": "iterations: 2452\ncpu: 360017.3735725936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 620230.3824561408,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 620213.4035087712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2959875.059190065,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2959780.996884734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1247293.1422873077,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1247229.3882978724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5506.040949999829,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5505.977999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 31311.28097461849,
            "unit": "ns/iter",
            "extra": "iterations: 26554\ncpu: 31309.083377268886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 22964.470366153895,
            "unit": "ns/iter",
            "extra": "iterations: 36023\ncpu: 22964.39496988035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 22774.6949469907,
            "unit": "ns/iter",
            "extra": "iterations: 36315\ncpu: 22773.87030152813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 22844.640346760447,
            "unit": "ns/iter",
            "extra": "iterations: 36221\ncpu: 22844.526655807498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 52023.22270000081,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52019.759999999595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 598743.4620000159,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598713.0000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 623171.6795774689,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 623146.8309859127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 622181.4919184718,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 622179.6907940949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 624765.4608879568,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 624742.0718816044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 368619.7944976863,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 368597.9157982498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 624275.8140351006,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 624257.1228070173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 299.3981528209444,
            "unit": "ns/iter",
            "extra": "iterations: 2342166\ncpu: 299.38262275175833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2751.2220861679216,
            "unit": "ns/iter",
            "extra": "iterations: 255617\ncpu: 2751.160916527458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1949.1144068140657,
            "unit": "ns/iter",
            "extra": "iterations: 369707\ncpu: 1949.077783217529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1913.6476790815839,
            "unit": "ns/iter",
            "extra": "iterations: 372805\ncpu: 1913.659688040665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1466.332282770646,
            "unit": "ns/iter",
            "extra": "iterations: 476570\ncpu: 1466.2853305915096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11537.378145728442,
            "unit": "ns/iter",
            "extra": "iterations: 60757\ncpu: 11537.093668219295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31923.085930727088,
            "unit": "ns/iter",
            "extra": "iterations: 21913\ncpu: 31921.57623328616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7527.455803121159,
            "unit": "ns/iter",
            "extra": "iterations: 93174\ncpu: 7527.054757765034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7527.150402527908,
            "unit": "ns/iter",
            "extra": "iterations: 93037\ncpu: 7526.644238313796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7583.6293120226455,
            "unit": "ns/iter",
            "extra": "iterations: 92474\ncpu: 7583.131474792985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15832.068490023878,
            "unit": "ns/iter",
            "extra": "iterations: 43802\ncpu: 15831.774804803406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14713.75709249654,
            "unit": "ns/iter",
            "extra": "iterations: 47656\ncpu: 14713.259610542227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4136.255856995968,
            "unit": "ns/iter",
            "extra": "iterations: 169114\ncpu: 4136.227042113563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 21956.2948227181,
            "unit": "ns/iter",
            "extra": "iterations: 31870\ncpu: 21955.644807028646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17153.37060741955,
            "unit": "ns/iter",
            "extra": "iterations: 40779\ncpu: 17153.28477893031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 16975.967374442404,
            "unit": "ns/iter",
            "extra": "iterations: 41256\ncpu: 16974.980608881197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18109.6146140708,
            "unit": "ns/iter",
            "extra": "iterations: 38634\ncpu: 18108.44851685035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37387.74434606553,
            "unit": "ns/iter",
            "extra": "iterations: 18748\ncpu: 37385.42244506032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 149125.476647475,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 149117.46641074866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 131072.1206210942,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 131062.12838477669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 127219.85496460539,
            "unit": "ns/iter",
            "extra": "iterations: 5509\ncpu: 127208.56779814717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 130846.63104800068,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 130841.77096954938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 79513.73616444651,
            "unit": "ns/iter",
            "extra": "iterations: 8854\ncpu: 79511.73480912662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 129843.49478778578,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 129836.65301563524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4143.579446621461,
            "unit": "ns/iter",
            "extra": "iterations: 168673\ncpu: 4143.516152555583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21945.69097298539,
            "unit": "ns/iter",
            "extra": "iterations: 31871\ncpu: 21945.36098647662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17342.457415747067,
            "unit": "ns/iter",
            "extra": "iterations: 40414\ncpu: 17342.3739298263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17204.782287369315,
            "unit": "ns/iter",
            "extra": "iterations: 40728\ncpu: 17204.883618149743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18110.44983359524,
            "unit": "ns/iter",
            "extra": "iterations: 38761\ncpu: 18110.34545032374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37587.850782254834,
            "unit": "ns/iter",
            "extra": "iterations: 18664\ncpu: 37587.167809687344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 149618.27179705817,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 149617.50159880533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 129411.22972972518,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129411.99555720002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 126617.69512416114,
            "unit": "ns/iter",
            "extra": "iterations: 5517\ncpu: 126614.55501178157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 127809.30350621107,
            "unit": "ns/iter",
            "extra": "iterations: 5476\ncpu: 127808.12636961234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 78082.44346663765,
            "unit": "ns/iter",
            "extra": "iterations: 8977\ncpu: 78081.10727414479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 128415.05620652401,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 128414.4269498356 ns\nthreads: 1"
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
        "date": 1702382292422,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 945.8966174767653,
            "unit": "ns/iter",
            "extra": "iterations: 739448\ncpu: 945.8542047581441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19090.200780352956,
            "unit": "ns/iter",
            "extra": "iterations: 43570\ncpu: 19089.226532017445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43172.92183521598,
            "unit": "ns/iter",
            "extra": "iterations: 20815\ncpu: 43170.3675234206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54378.74200000011,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54378.35 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65537.23649829449,
            "unit": "ns/iter",
            "extra": "iterations: 12017\ncpu: 65531.730049097125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 81823.022220139,
            "unit": "ns/iter",
            "extra": "iterations: 10666\ncpu: 81819.16369773111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 97848.77457360286,
            "unit": "ns/iter",
            "extra": "iterations: 8912\ncpu: 97843.90709156195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 114232.0840754314,
            "unit": "ns/iter",
            "extra": "iterations: 7636\ncpu: 114226.87270822423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 142373.0984541492,
            "unit": "ns/iter",
            "extra": "iterations: 6663\ncpu: 142364.2353294311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 792.6842257506079,
            "unit": "ns/iter",
            "extra": "iterations: 885012\ncpu: 792.6500431632569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 652.3853496419895,
            "unit": "ns/iter",
            "extra": "iterations: 1087441\ncpu: 652.3684503343179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 637.6258818662625,
            "unit": "ns/iter",
            "extra": "iterations: 1102208\ncpu: 637.5937209673668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 641.1698308966468,
            "unit": "ns/iter",
            "extra": "iterations: 1087205\ncpu: 641.152588518264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1178.8970300714334,
            "unit": "ns/iter",
            "extra": "iterations: 580519\ncpu: 1178.8132688163516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5510.197199999993,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5509.865999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 31303.58756174378,
            "unit": "ns/iter",
            "extra": "iterations: 26724\ncpu: 31301.335877862606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 22977.390340829774,
            "unit": "ns/iter",
            "extra": "iterations: 36235\ncpu: 22975.628535945903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 22909.513364410326,
            "unit": "ns/iter",
            "extra": "iterations: 36253\ncpu: 22908.49033183462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22894.934858814773,
            "unit": "ns/iter",
            "extra": "iterations: 36229\ncpu: 22893.781224985487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 54463.865599996105,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54462.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 621307.5919999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621259.2000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 605307.3440111543,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 605274.3036211699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 606187.7381443445,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 606154.0893470785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 609910.7036780149,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 609885.2879944472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 361168.5047344441,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 361162.2890078228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 610201.3980239783,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 610168.2427664065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2822352.1666666395,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2822158.928571432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1207505.4569620562,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 1207458.101265821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3657598.322957376,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3657378.988326849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5475.82838999972,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5475.637999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 31081.263629573088,
            "unit": "ns/iter",
            "extra": "iterations: 26780\ncpu: 31080.08215085884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 22981.447801666265,
            "unit": "ns/iter",
            "extra": "iterations: 36141\ncpu: 22980.578843972256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 22968.520514237494,
            "unit": "ns/iter",
            "extra": "iterations: 36170\ncpu: 22967.14127730161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 22976.18751037212,
            "unit": "ns/iter",
            "extra": "iterations: 36158\ncpu: 22975.272415509837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 53371.37330000132,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53368.610000000415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 612984.1919999989,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612940.2999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 506995.0090000361,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506970.10000000376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 503342.6440000426,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503325.90000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 504144.74799998745,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504110.2999999936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 364490.1753948572,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 364472.48545303434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 620482.7833450967,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 620430.2046577262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2947489.1755486173,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2947349.216300937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1238821.6631853573,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 1238744.386422971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5475.000779999847,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5474.788000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 31350.1572160136,
            "unit": "ns/iter",
            "extra": "iterations: 26753\ncpu: 31349.32157141264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 23140.494031957944,
            "unit": "ns/iter",
            "extra": "iterations: 36109\ncpu: 23139.17305934823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 22823.479060376947,
            "unit": "ns/iter",
            "extra": "iterations: 36653\ncpu: 22822.08823288677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 22989.047206989668,
            "unit": "ns/iter",
            "extra": "iterations: 36287\ncpu: 22987.888224433005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 52145.07929999854,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52142.75999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 599516.9330000181,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599486.8000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 621779.682328206,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 621738.7798036484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 621274.4698457192,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 621244.4600280507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 625252.676966282,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 625220.8567415747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 369897.2031839145,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 369870.9258483456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 623055.0467422025,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 623022.4504249323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 293.5128912710261,
            "unit": "ns/iter",
            "extra": "iterations: 2372109\ncpu: 293.5049359030325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2706.2833252264413,
            "unit": "ns/iter",
            "extra": "iterations: 259038\ncpu: 2706.096016800623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1865.6233638191572,
            "unit": "ns/iter",
            "extra": "iterations: 374271\ncpu: 1865.5794865218006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1965.4421649224903,
            "unit": "ns/iter",
            "extra": "iterations: 356410\ncpu: 1965.3699391150587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1468.7746079549458,
            "unit": "ns/iter",
            "extra": "iterations: 476157\ncpu: 1468.719981014666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11519.140006907628,
            "unit": "ns/iter",
            "extra": "iterations: 60797\ncpu: 11519.05521654032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 32321.776026985455,
            "unit": "ns/iter",
            "extra": "iterations: 21641\ncpu: 32320.207014463293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7447.030582508603,
            "unit": "ns/iter",
            "extra": "iterations: 93681\ncpu: 7446.712780606502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7430.186359535194,
            "unit": "ns/iter",
            "extra": "iterations: 94205\ncpu: 7429.6024627142415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7480.231571731262,
            "unit": "ns/iter",
            "extra": "iterations: 93362\ncpu: 7480.044343523046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16151.905591815355,
            "unit": "ns/iter",
            "extra": "iterations: 43206\ncpu: 16151.18039161244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14989.72603916202,
            "unit": "ns/iter",
            "extra": "iterations: 46576\ncpu: 14988.614307797774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4227.287393504847,
            "unit": "ns/iter",
            "extra": "iterations: 165383\ncpu: 4227.123706789651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22028.91285906979,
            "unit": "ns/iter",
            "extra": "iterations: 31122\ncpu: 22026.98412698408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17456.598232951128,
            "unit": "ns/iter",
            "extra": "iterations: 40180\ncpu: 17456.07516177228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17348.100960824,
            "unit": "ns/iter",
            "extra": "iterations: 40382\ncpu: 17347.323064731983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18255.556302130997,
            "unit": "ns/iter",
            "extra": "iterations: 38844\ncpu: 18254.44856348491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37311.74349125115,
            "unit": "ns/iter",
            "extra": "iterations: 18744\ncpu: 37310.2059325651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 148688.262967682,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 148682.07908163482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 129802.88522158397,
            "unit": "ns/iter",
            "extra": "iterations: 5393\ncpu: 129794.69682922322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 129241.60143858839,
            "unit": "ns/iter",
            "extra": "iterations: 5422\ncpu: 129233.9542604223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 130211.26890130561,
            "unit": "ns/iter",
            "extra": "iterations: 5370\ncpu: 130201.09869646262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 79116.89273200114,
            "unit": "ns/iter",
            "extra": "iterations: 8847\ncpu: 79110.93025884539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 128167.8230321232,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 128164.92579372568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4161.780710267117,
            "unit": "ns/iter",
            "extra": "iterations: 167965\ncpu: 4161.5271038609135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21955.523443118887,
            "unit": "ns/iter",
            "extra": "iterations: 31971\ncpu: 21954.97482093175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17210.49735281159,
            "unit": "ns/iter",
            "extra": "iterations: 40798\ncpu: 17209.83136428241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17049.718900511685,
            "unit": "ns/iter",
            "extra": "iterations: 41110\ncpu: 17049.593772804856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18033.349272938056,
            "unit": "ns/iter",
            "extra": "iterations: 38855\ncpu: 18031.614978767113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37288.830980661005,
            "unit": "ns/iter",
            "extra": "iterations: 18773\ncpu: 37288.54738187779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 148050.93776461345,
            "unit": "ns/iter",
            "extra": "iterations: 4724\ncpu: 148039.4580863679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 128685.33973654894,
            "unit": "ns/iter",
            "extra": "iterations: 5466\ncpu: 128677.2228320534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 127810.37390189907,
            "unit": "ns/iter",
            "extra": "iterations: 5464\ncpu: 127800.25622254946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 128918.64636397427,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 128905.90623846567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 78162.12072816532,
            "unit": "ns/iter",
            "extra": "iterations: 8954\ncpu: 78160.33057851219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 127001.52146350498,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 126996.37746785111 ns\nthreads: 1"
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
        "date": 1702387041877,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 942.3218666440459,
            "unit": "ns/iter",
            "extra": "iterations: 743109\ncpu: 942.3108857516193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18934.78414107014,
            "unit": "ns/iter",
            "extra": "iterations: 43723\ncpu: 18933.84488713034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 42954.628029757405,
            "unit": "ns/iter",
            "extra": "iterations: 20835\ncpu: 42952.810175185994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 53212.17750000073,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53209.96999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69774.62806817492,
            "unit": "ns/iter",
            "extra": "iterations: 12263\ncpu: 69773.19579222046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 81747.43114723657,
            "unit": "ns/iter",
            "extra": "iterations: 10704\ncpu: 81744.19843049328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98067.23035413129,
            "unit": "ns/iter",
            "extra": "iterations: 8895\ncpu: 98062.06857785277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 114525.9691261129,
            "unit": "ns/iter",
            "extra": "iterations: 7644\ncpu: 114522.23966509671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 140734.27283635578,
            "unit": "ns/iter",
            "extra": "iterations: 6667\ncpu: 140730.64346782645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 781.148928582191,
            "unit": "ns/iter",
            "extra": "iterations: 897269\ncpu: 781.0997593809659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 639.0382535385304,
            "unit": "ns/iter",
            "extra": "iterations: 1096709\ncpu: 639.0155456005199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 643.4302913067436,
            "unit": "ns/iter",
            "extra": "iterations: 1088200\ncpu: 643.399926484102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 645.5155171954103,
            "unit": "ns/iter",
            "extra": "iterations: 1088051\ncpu: 645.5151458893009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1186.0555486980543,
            "unit": "ns/iter",
            "extra": "iterations: 591409\ncpu: 1186.0475576124127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5490.405549999764,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5489.893000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 30798.20698097228,
            "unit": "ns/iter",
            "extra": "iterations: 26959\ncpu: 30797.84487555177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 22689.673103826757,
            "unit": "ns/iter",
            "extra": "iterations: 36455\ncpu: 22689.68591414073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 22852.461602004532,
            "unit": "ns/iter",
            "extra": "iterations: 36317\ncpu: 22852.501583280547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22729.09679108895,
            "unit": "ns/iter",
            "extra": "iterations: 36274\ncpu: 22728.838837735013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 54012.20829999715,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54011.3299999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 624212.7099999947,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624151.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 611232.4129669019,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 611220.4369274131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 609925.9335199498,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 609913.855843248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 607620.650602432,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 607617.2218284908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 360723.5092250863,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 360710.20910209016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 605557.3024390254,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 605543.7630662018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2807390.9910448045,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2807342.0895522404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1167612.14303176,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 1167597.1882640559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3618182.7586206333,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3618213.7931034416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5543.9781600000515,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5543.8630000000085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 31199.74603888255,
            "unit": "ns/iter",
            "extra": "iterations: 26697\ncpu: 31199.29954676552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 23068.47684800063,
            "unit": "ns/iter",
            "extra": "iterations: 36066\ncpu: 23068.39405534307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 22951.24215580726,
            "unit": "ns/iter",
            "extra": "iterations: 36237\ncpu: 22950.876176283975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 22974.737766867347,
            "unit": "ns/iter",
            "extra": "iterations: 36254\ncpu: 22974.223533954806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 53464.15040000352,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53464.029999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 606220.3079999903,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606192.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 503547.12000000745,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503545.00000000256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 500984.2040000194,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500958.49999999587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 500934.8709999699,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500927.5999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 355996.67699836014,
            "unit": "ns/iter",
            "extra": "iterations: 2452\ncpu: 355979.2822185981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 613703.6183473605,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 613675.0700280069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2927117.0624999953,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2927014.3750000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1204484.484771596,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 1204428.1725888303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5412.407179999832,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5412.20299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 31434.26227901637,
            "unit": "ns/iter",
            "extra": "iterations: 26529\ncpu: 31433.06947114481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 23079.61101434773,
            "unit": "ns/iter",
            "extra": "iterations: 36171\ncpu: 23079.110337010337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 22813.520494846078,
            "unit": "ns/iter",
            "extra": "iterations: 36375\ncpu: 22812.731271477736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 23019.455734351002,
            "unit": "ns/iter",
            "extra": "iterations: 36168\ncpu: 23018.969807564667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 51646.98950000002,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51644.08000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 603826.8810000318,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603820.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 624011.8146582321,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 623994.9260042276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 626540.1971529991,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 626530.8896797159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 621600.2292545779,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 621597.1870604781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 364297.5688796782,
            "unit": "ns/iter",
            "extra": "iterations: 2410\ncpu: 364287.34439834027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 616588.951646806,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 616572.1093202524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 300.08383765948685,
            "unit": "ns/iter",
            "extra": "iterations: 2337112\ncpu: 300.0721831046188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2611.4751853368825,
            "unit": "ns/iter",
            "extra": "iterations: 268430\ncpu: 2611.4212271355777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1932.9489526880845,
            "unit": "ns/iter",
            "extra": "iterations: 362213\ncpu: 1932.8417257249096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1787.4423565119457,
            "unit": "ns/iter",
            "extra": "iterations: 392733\ncpu: 1787.4056929262495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1465.0793107347527,
            "unit": "ns/iter",
            "extra": "iterations: 477552\ncpu: 1465.0251700338363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11639.910562491568,
            "unit": "ns/iter",
            "extra": "iterations: 60232\ncpu: 11639.542103865051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31858.05694256078,
            "unit": "ns/iter",
            "extra": "iterations: 22110\ncpu: 31856.8792401628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7451.175913021992,
            "unit": "ns/iter",
            "extra": "iterations: 94001\ncpu: 7450.9515856213675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7450.085144381575,
            "unit": "ns/iter",
            "extra": "iterations: 92948\ncpu: 7449.9107027584705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7539.184676533564,
            "unit": "ns/iter",
            "extra": "iterations: 92838\ncpu: 7538.9592623709395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15712.289689884446,
            "unit": "ns/iter",
            "extra": "iterations: 44306\ncpu: 15711.813298424522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14959.709263843524,
            "unit": "ns/iter",
            "extra": "iterations: 38375\ncpu: 14959.041042345503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4204.6851509288745,
            "unit": "ns/iter",
            "extra": "iterations: 166502\ncpu: 4204.617361953583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22144.411211995455,
            "unit": "ns/iter",
            "extra": "iterations: 31609\ncpu: 22143.610996868305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17162.449564630962,
            "unit": "ns/iter",
            "extra": "iterations: 40081\ncpu: 17162.039370275248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17468.6544960619,
            "unit": "ns/iter",
            "extra": "iterations: 40124\ncpu: 17468.08144751271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18240.232712247354,
            "unit": "ns/iter",
            "extra": "iterations: 38481\ncpu: 18239.90021049352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 36990.24062499923,
            "unit": "ns/iter",
            "extra": "iterations: 18880\ncpu: 36988.99894067777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 149325.77744680637,
            "unit": "ns/iter",
            "extra": "iterations: 4700\ncpu: 149324.1276595734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 127318.81281152174,
            "unit": "ns/iter",
            "extra": "iterations: 5417\ncpu: 127318.07273398648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 129579.85724838397,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 129573.591874422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 130567.4118088142,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 130563.89878163088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 77813.86762054714,
            "unit": "ns/iter",
            "extra": "iterations: 8876\ncpu: 77810.894547094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 127459.886301619,
            "unit": "ns/iter",
            "extra": "iterations: 5497\ncpu: 127456.68546479841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4150.685514127017,
            "unit": "ns/iter",
            "extra": "iterations: 168723\ncpu: 4150.565127457384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22067.565056111456,
            "unit": "ns/iter",
            "extra": "iterations: 31811\ncpu: 22066.998836880062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17288.452524157354,
            "unit": "ns/iter",
            "extra": "iterations: 40568\ncpu: 17287.803194636246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 16997.059611390145,
            "unit": "ns/iter",
            "extra": "iterations: 40915\ncpu: 16996.903336184852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18129.207591135506,
            "unit": "ns/iter",
            "extra": "iterations: 38624\ncpu: 18129.30302402659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37171.1428267914,
            "unit": "ns/iter",
            "extra": "iterations: 18827\ncpu: 37171.37621501051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 146211.5530350706,
            "unit": "ns/iter",
            "extra": "iterations: 4761\ncpu: 146209.1577399723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 131352.28096732017,
            "unit": "ns/iter",
            "extra": "iterations: 5417\ncpu: 131347.11094702015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 128892.23992606351,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 128889.61182994448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 134734.97959183741,
            "unit": "ns/iter",
            "extra": "iterations: 5194\ncpu: 134727.06969580293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 77691.95985695967,
            "unit": "ns/iter",
            "extra": "iterations: 8669\ncpu: 77689.77967470262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 128695.37426578863,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 128691.37298090909 ns\nthreads: 1"
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
        "date": 1702388092259,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 944.8131309379048,
            "unit": "ns/iter",
            "extra": "iterations: 740267\ncpu: 944.7970799724964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19062.936625513936,
            "unit": "ns/iter",
            "extra": "iterations: 43740\ncpu: 19062.47599451303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43802.343413683826,
            "unit": "ns/iter",
            "extra": "iterations: 20535\ncpu: 43801.17847577308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54924.74769999944,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54921.09999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66205.8963907632,
            "unit": "ns/iter",
            "extra": "iterations: 11997\ncpu: 66205.96815870634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 82626.20536051274,
            "unit": "ns/iter",
            "extra": "iterations: 10596\ncpu: 82623.11249528125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98377.77014723576,
            "unit": "ns/iter",
            "extra": "iterations: 8897\ncpu: 98372.88973811397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 118057.62524577521,
            "unit": "ns/iter",
            "extra": "iterations: 7629\ncpu: 118050.95032114309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 143800.17430775918,
            "unit": "ns/iter",
            "extra": "iterations: 6609\ncpu: 143791.5872295355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 783.5150815883634,
            "unit": "ns/iter",
            "extra": "iterations: 893142\ncpu: 783.453023147495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 683.4010387539179,
            "unit": "ns/iter",
            "extra": "iterations: 1083606\ncpu: 683.3711699639906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 617.7453414619915,
            "unit": "ns/iter",
            "extra": "iterations: 1137374\ncpu: 617.7310189963904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 630.9651862683935,
            "unit": "ns/iter",
            "extra": "iterations: 1101663\ncpu: 630.9471226681851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1188.3730805286648,
            "unit": "ns/iter",
            "extra": "iterations: 592025\ncpu: 1188.318229804487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5580.730330000279,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5580.2559999999885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 31235.216895237205,
            "unit": "ns/iter",
            "extra": "iterations: 26469\ncpu: 31233.5713476142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 23429.68351288846,
            "unit": "ns/iter",
            "extra": "iterations: 35458\ncpu: 23428.205200518973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 22007.779404652392,
            "unit": "ns/iter",
            "extra": "iterations: 37222\ncpu: 22003.36897533723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 23494.827212643693,
            "unit": "ns/iter",
            "extra": "iterations: 34800\ncpu: 23493.114942528777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 53824.46220000361,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53823.94999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 626911.8919999528,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 626841.8000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 606684.5671852794,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 606673.1966053757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 600103.3556771879,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 600072.2982216148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 606349.989690712,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 606294.5017182125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 359843.7918719007,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 359832.7586206897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 607489.5041782681,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 607470.6128133686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2836736.307462663,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2836585.074626875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1229466.3999999608,
            "unit": "ns/iter",
            "extra": "iterations: 780\ncpu: 1229377.6923076923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3653750.669230887,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3653479.230769231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5615.137859999777,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5614.635999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 29677.91351841773,
            "unit": "ns/iter",
            "extra": "iterations: 27555\ncpu: 29676.258392306292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 22512.994280188457,
            "unit": "ns/iter",
            "extra": "iterations: 36190\ncpu: 22511.58331030666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 23367.352443501008,
            "unit": "ns/iter",
            "extra": "iterations: 34868\ncpu: 23366.290008030217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 23557.641181229843,
            "unit": "ns/iter",
            "extra": "iterations: 34608\ncpu: 23556.622746185833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 53076.93439999639,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53073.730000000556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 605652.3130000073,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605626.7999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 503545.09700002836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503484.29999999667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 505901.01200003806,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505897.400000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 626245.3473609214,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 626209.7004279611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 360408.8102397229,
            "unit": "ns/iter",
            "extra": "iterations: 2461\ncpu: 360385.1686306397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 615284.3011204599,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 615236.2745098027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2936957.63836481,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2936606.918238997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1231658.0527670425,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 1231615.7014157032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5611.767769999575,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5611.66 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 31780.219124117306,
            "unit": "ns/iter",
            "extra": "iterations: 26145\ncpu: 31779.384203480568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 23795.734303485417,
            "unit": "ns/iter",
            "extra": "iterations: 34084\ncpu: 23795.37319563437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 23087.677936485212,
            "unit": "ns/iter",
            "extra": "iterations: 36055\ncpu: 23086.95881292479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 24560.405529953547,
            "unit": "ns/iter",
            "extra": "iterations: 33635\ncpu: 24559.30132302656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 52695.14830000048,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52693.67000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 602549.8449999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602543.6999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 621570.7556022396,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 621550.980392159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 624157.2674664942,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 624127.2406492574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 624420.3396624638,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 624417.9324894513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 365870.1968569069,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 365857.19602977694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 621040.0252100788,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 621011.8347338944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.6980091763898,
            "unit": "ns/iter",
            "extra": "iterations: 2352343\ncpu: 296.6983556394603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2741.8340314298757,
            "unit": "ns/iter",
            "extra": "iterations: 255934\ncpu: 2741.718177342611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1908.4790204634824,
            "unit": "ns/iter",
            "extra": "iterations: 366214\ncpu: 1908.4289513781637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1934.7877324055733,
            "unit": "ns/iter",
            "extra": "iterations: 368483\ncpu: 1934.6857249859502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1525.2571217973273,
            "unit": "ns/iter",
            "extra": "iterations: 458557\ncpu: 1525.2247812158532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11528.069415682203,
            "unit": "ns/iter",
            "extra": "iterations: 60361\ncpu: 11527.819287288181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 32556.10499883601,
            "unit": "ns/iter",
            "extra": "iterations: 21505\ncpu: 32555.582422692623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7540.4667061677665,
            "unit": "ns/iter",
            "extra": "iterations: 92825\ncpu: 7540.377053595423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7499.075946519131,
            "unit": "ns/iter",
            "extra": "iterations: 93342\ncpu: 7498.7979687600255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7556.017813983523,
            "unit": "ns/iter",
            "extra": "iterations: 92680\ncpu: 7555.931160983954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16196.480972273603,
            "unit": "ns/iter",
            "extra": "iterations: 43568\ncpu: 16195.923613661409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14878.7194669824,
            "unit": "ns/iter",
            "extra": "iterations: 47203\ncpu: 14878.44628519376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4268.33655036955,
            "unit": "ns/iter",
            "extra": "iterations: 163919\ncpu: 4268.031161732288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22417.50844691887,
            "unit": "ns/iter",
            "extra": "iterations: 31254\ncpu: 22416.692263390465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17395.84493226224,
            "unit": "ns/iter",
            "extra": "iterations: 39860\ncpu: 17395.373808329154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17407.123235627045,
            "unit": "ns/iter",
            "extra": "iterations: 39745\ncpu: 17406.9090451629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18261.158465105433,
            "unit": "ns/iter",
            "extra": "iterations: 38387\ncpu: 18260.801833954185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37638.05240410633,
            "unit": "ns/iter",
            "extra": "iterations: 18510\ncpu: 37637.152890329664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 148384.97362869303,
            "unit": "ns/iter",
            "extra": "iterations: 4740\ncpu: 148385.12658227794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 128890.45219160838,
            "unit": "ns/iter",
            "extra": "iterations: 5407\ncpu: 128885.9441464773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 129491.23665678682,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 129491.41957005193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 130783.85482061998,
            "unit": "ns/iter",
            "extra": "iterations: 5352\ncpu: 130778.45665171923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 79204.79753561104,
            "unit": "ns/iter",
            "extra": "iterations: 8846\ncpu: 79203.27831788393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 129279.49695627835,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 129276.49880095941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4209.548468973378,
            "unit": "ns/iter",
            "extra": "iterations: 166261\ncpu: 4209.4435856875425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22265.30892368363,
            "unit": "ns/iter",
            "extra": "iterations: 31422\ncpu: 22264.27662147539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17590.315193085185,
            "unit": "ns/iter",
            "extra": "iterations: 39801\ncpu: 17589.967588754243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17286.48642109395,
            "unit": "ns/iter",
            "extra": "iterations: 40504\ncpu: 17286.12976496136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18060.754407468485,
            "unit": "ns/iter",
            "extra": "iterations: 38344\ncpu: 18059.795535155503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37688.65180684094,
            "unit": "ns/iter",
            "extra": "iterations: 18596\ncpu: 37686.88965368893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 146340.3222245393,
            "unit": "ns/iter",
            "extra": "iterations: 4801\ncpu: 146332.3265986243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 128477.51734263169,
            "unit": "ns/iter",
            "extra": "iterations: 5449\ncpu: 128470.08625435925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 127538.1549398481,
            "unit": "ns/iter",
            "extra": "iterations: 5486\ncpu: 127529.03755012694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 128210.35230401857,
            "unit": "ns/iter",
            "extra": "iterations: 5447\ncpu: 128200.80778410209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 78369.22750671812,
            "unit": "ns/iter",
            "extra": "iterations: 8936\ncpu: 78366.6293643687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 125930.1663380521,
            "unit": "ns/iter",
            "extra": "iterations: 5579\ncpu: 125925.36296827378 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390851015,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 939.5870744278704,
            "unit": "ns/iter",
            "extra": "iterations: 742853\ncpu: 939.5620667884494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18699.03306081326,
            "unit": "ns/iter",
            "extra": "iterations: 44645\ncpu: 18698.09161160264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43123.231101511126,
            "unit": "ns/iter",
            "extra": "iterations: 20835\ncpu: 43121.19990400768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 53193.959199995785,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53189.70999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65180.56695316934,
            "unit": "ns/iter",
            "extra": "iterations: 12449\ncpu: 65179.331673226734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 83145.11748147196,
            "unit": "ns/iter",
            "extra": "iterations: 10657\ncpu: 83138.95092427515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98857.355568113,
            "unit": "ns/iter",
            "extra": "iterations: 8845\ncpu: 98851.47540983609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 114937.60868420934,
            "unit": "ns/iter",
            "extra": "iterations: 7600\ncpu: 114933.18421052635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 145422.31785063594,
            "unit": "ns/iter",
            "extra": "iterations: 6588\ncpu: 145414.07103825125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 786.7460522031962,
            "unit": "ns/iter",
            "extra": "iterations: 887647\ncpu: 786.7320004461252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 640.2702837369213,
            "unit": "ns/iter",
            "extra": "iterations: 1091786\ncpu: 640.251477853718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 652.3800834395603,
            "unit": "ns/iter",
            "extra": "iterations: 1079584\ncpu: 652.2995894715007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 627.2062488233544,
            "unit": "ns/iter",
            "extra": "iterations: 1120787\ncpu: 627.181525124757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1174.6222858023132,
            "unit": "ns/iter",
            "extra": "iterations: 597322\ncpu: 1174.569327766263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5518.102350000049,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5518.1119999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 31250.74999053276,
            "unit": "ns/iter",
            "extra": "iterations: 26407\ncpu: 31249.66107471509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 23617.58597557464,
            "unit": "ns/iter",
            "extra": "iterations: 34882\ncpu: 23617.61080213292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 22379.344185665115,
            "unit": "ns/iter",
            "extra": "iterations: 36582\ncpu: 22373.864195505994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22362.934436405576,
            "unit": "ns/iter",
            "extra": "iterations: 37048\ncpu: 22362.980457784462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58605.591700001016,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58603.22999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 620177.4269999873,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620168.7999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 605608.0689414924,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 605583.704735377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 596196.1488054709,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 596191.67235495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 605206.8523442621,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 605168.6494051776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 365076.5928659139,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 365055.8835588363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 607806.0718270406,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 607787.5174337509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2809732.949253715,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2809607.164179106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1206496.357414437,
            "unit": "ns/iter",
            "extra": "iterations: 789\ncpu: 1206448.5424588076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3645323.600775213,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3645113.178294574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5503.614069999685,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5503.480000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 31652.19239578614,
            "unit": "ns/iter",
            "extra": "iterations: 26196\ncpu: 31651.935409986265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 23271.068277457063,
            "unit": "ns/iter",
            "extra": "iterations: 35883\ncpu: 23270.782821949124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 23127.668758015527,
            "unit": "ns/iter",
            "extra": "iterations: 35862\ncpu: 23127.254475489346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 23017.945320715484,
            "unit": "ns/iter",
            "extra": "iterations: 36138\ncpu: 23016.98489125003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 52685.87570000136,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52685.259999999806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 600546.3289999967,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600520.1000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 626974.7640769446,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 626925.0178189578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 626430.7787985868,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 626407.9858657268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 624440.9524485441,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 624410.2909865138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 361118.6535626489,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 361095.37264537084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 618288.8846153817,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 618266.5034965046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2933127.3354232092,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2932957.9937303965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1226576.0569948608,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 1226514.1191709824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5610.564689999933,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5610.584000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 31788.548219104636,
            "unit": "ns/iter",
            "extra": "iterations: 26307\ncpu: 31787.383586117823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 23532.084809417087,
            "unit": "ns/iter",
            "extra": "iterations: 35680\ncpu: 23531.143497757876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 23414.184489590785,
            "unit": "ns/iter",
            "extra": "iterations: 35834\ncpu: 23413.37277446006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 23494.099498726682,
            "unit": "ns/iter",
            "extra": "iterations: 35709\ncpu: 23493.029768405737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 52109.672699998555,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52109.87999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 605143.3849999625,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605094.9000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 627690.4049469898,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 627665.8657243808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 628327.1361702249,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 628309.5744680854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 626951.1739745105,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 626920.2263083425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 369474.5127030278,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 369461.68263223517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 621025.49684213,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 621007.4385964902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 298.2750334635462,
            "unit": "ns/iter",
            "extra": "iterations: 2352561\ncpu: 298.2619791792878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2721.1356283619352,
            "unit": "ns/iter",
            "extra": "iterations: 258036\ncpu: 2721.0350493729647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1915.5144896665172,
            "unit": "ns/iter",
            "extra": "iterations: 366192\ncpu: 1915.388375497022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1826.449180353523,
            "unit": "ns/iter",
            "extra": "iterations: 382421\ncpu: 1826.3709367424904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1548.740498471263,
            "unit": "ns/iter",
            "extra": "iterations: 452664\ncpu: 1548.6707580015245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11649.18662748026,
            "unit": "ns/iter",
            "extra": "iterations: 59884\ncpu: 11649.039810299859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30638.693328677655,
            "unit": "ns/iter",
            "extra": "iterations: 22904\ncpu: 30638.40813831632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7458.17727209975,
            "unit": "ns/iter",
            "extra": "iterations: 94087\ncpu: 7457.692348571089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7414.654822065419,
            "unit": "ns/iter",
            "extra": "iterations: 94192\ncpu: 7414.3568455919585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7550.055485511739,
            "unit": "ns/iter",
            "extra": "iterations: 92799\ncpu: 7549.62553475795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15430.80104343192,
            "unit": "ns/iter",
            "extra": "iterations: 45427\ncpu: 15427.94153256894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14833.08325551767,
            "unit": "ns/iter",
            "extra": "iterations: 47120\ncpu: 14832.964770798031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4199.553148852623,
            "unit": "ns/iter",
            "extra": "iterations: 167172\ncpu: 4199.3581461010035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22187.762783325306,
            "unit": "ns/iter",
            "extra": "iterations: 31545\ncpu: 22186.216516088367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17170.865391688534,
            "unit": "ns/iter",
            "extra": "iterations: 40785\ncpu: 17170.663234032094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17135.534068944806,
            "unit": "ns/iter",
            "extra": "iterations: 40873\ncpu: 17135.563819636347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18225.09353622089,
            "unit": "ns/iter",
            "extra": "iterations: 38445\ncpu: 18224.59357523724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37589.06743438682,
            "unit": "ns/iter",
            "extra": "iterations: 18670\ncpu: 37588.76272094251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 147371.28258602525,
            "unit": "ns/iter",
            "extra": "iterations: 4795\ncpu: 147367.34098018572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 129310.89041849798,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 129306.02055800335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 127221.46896551861,
            "unit": "ns/iter",
            "extra": "iterations: 5510\ncpu: 127212.52268602545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 130801.92237357137,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 130797.12632953822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 78451.81004025387,
            "unit": "ns/iter",
            "extra": "iterations: 8944\ncpu: 78448.07692307772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 129475.48626727673,
            "unit": "ns/iter",
            "extra": "iterations: 5425\ncpu: 129474.4700460829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4167.876476331148,
            "unit": "ns/iter",
            "extra": "iterations: 167984\ncpu: 4167.611796361511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22677.768431916145,
            "unit": "ns/iter",
            "extra": "iterations: 31006\ncpu: 22676.478746049434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17488.952495070153,
            "unit": "ns/iter",
            "extra": "iterations: 40059\ncpu: 17488.841458847906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17184.653776181625,
            "unit": "ns/iter",
            "extra": "iterations: 40676\ncpu: 17184.472416166867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18038.845132857903,
            "unit": "ns/iter",
            "extra": "iterations: 38801\ncpu: 18038.88044122605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37457.132917464914,
            "unit": "ns/iter",
            "extra": "iterations: 18756\ncpu: 37456.24866709261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 146372.38493636504,
            "unit": "ns/iter",
            "extra": "iterations: 4793\ncpu: 146372.68933861906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 127722.3236741407,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 127713.52287224361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 127957.23371156385,
            "unit": "ns/iter",
            "extra": "iterations: 5464\ncpu: 127952.10468521364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 128449.40681694132,
            "unit": "ns/iter",
            "extra": "iterations: 5457\ncpu: 128445.15301447689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 78178.66685212222,
            "unit": "ns/iter",
            "extra": "iterations: 8987\ncpu: 78177.1892733957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 128171.52193062627,
            "unit": "ns/iter",
            "extra": "iterations: 5449\ncpu: 128171.79298953839 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}