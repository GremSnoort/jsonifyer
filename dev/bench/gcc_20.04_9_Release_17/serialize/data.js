window.BENCHMARK_DATA = {
  "lastUpdate": 1702381106525,
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
      }
    ]
  }
}