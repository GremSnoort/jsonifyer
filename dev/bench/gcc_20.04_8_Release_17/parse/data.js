window.BENCHMARK_DATA = {
  "lastUpdate": 1702390826780,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-8 20.04 Release c++-17": [
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
        "date": 1702381121665,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 661.0967829507435,
            "unit": "ns/iter",
            "extra": "iterations: 1060879\ncpu: 661.0850059243326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5951.425018663105,
            "unit": "ns/iter",
            "extra": "iterations: 136634\ncpu: 5951.328366292431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11514.128419979485,
            "unit": "ns/iter",
            "extra": "iterations: 70651\ncpu: 11514.090387963373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16941.160122969944,
            "unit": "ns/iter",
            "extra": "iterations: 49768\ncpu: 16940.503938273596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22367.256918068637,
            "unit": "ns/iter",
            "extra": "iterations: 36860\ncpu: 22367.09441128595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27747.360992528826,
            "unit": "ns/iter",
            "extra": "iterations: 29984\ncpu: 27746.204642475997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32995.60334177864,
            "unit": "ns/iter",
            "extra": "iterations: 25256\ncpu: 32994.2191954387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38481.640383909056,
            "unit": "ns/iter",
            "extra": "iterations: 21776\ncpu: 38482.07659808964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44306.189633832415,
            "unit": "ns/iter",
            "extra": "iterations: 19390\ncpu: 44268.99948427018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 628.158622188554,
            "unit": "ns/iter",
            "extra": "iterations: 1113476\ncpu: 628.150674105235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 513.383117348925,
            "unit": "ns/iter",
            "extra": "iterations: 1380115\ncpu: 513.3719291508309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 483.5151265881572,
            "unit": "ns/iter",
            "extra": "iterations: 1434494\ncpu: 483.52080942827183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 493.7415460412428,
            "unit": "ns/iter",
            "extra": "iterations: 1424451\ncpu: 493.72179176398504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 950.8259142811897,
            "unit": "ns/iter",
            "extra": "iterations: 735988\ncpu: 950.7953934031528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2525.1307636455986,
            "unit": "ns/iter",
            "extra": "iterations: 316770\ncpu: 2525.1040186886357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12626.308268228995,
            "unit": "ns/iter",
            "extra": "iterations: 64512\ncpu: 12626.450892857178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9872.205920068112,
            "unit": "ns/iter",
            "extra": "iterations: 84222\ncpu: 9871.997815297675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10050.8341694332,
            "unit": "ns/iter",
            "extra": "iterations: 81330\ncpu: 10050.757408090505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9867.935210073341,
            "unit": "ns/iter",
            "extra": "iterations: 82590\ncpu: 9867.68131735075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34251.27935973049,
            "unit": "ns/iter",
            "extra": "iterations: 23740\ncpu: 34251.63858466724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 275715.08346408844,
            "unit": "ns/iter",
            "extra": "iterations: 3187\ncpu: 275710.66834013216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 216488.28259791413,
            "unit": "ns/iter",
            "extra": "iterations: 4034\ncpu: 216481.97818542446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 214495.63767408967,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 214491.180063523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 214264.68525799463,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 214258.3046683046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110562.45479762748,
            "unit": "ns/iter",
            "extra": "iterations: 7931\ncpu: 110557.13024839234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 215803.77301475665,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 215800.9369875849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5444.188139999824,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5444.023999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29034.960982356857,
            "unit": "ns/iter",
            "extra": "iterations: 28910\ncpu: 29035.285368384713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22942.41815362817,
            "unit": "ns/iter",
            "extra": "iterations: 36764\ncpu: 22941.90784463063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22803.468915468326,
            "unit": "ns/iter",
            "extra": "iterations: 37205\ncpu: 22803.550598037946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22186.408100350316,
            "unit": "ns/iter",
            "extra": "iterations: 37628\ncpu: 22186.143297544368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50349.551220966896,
            "unit": "ns/iter",
            "extra": "iterations: 16790\ncpu: 50348.2966051221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 294480.1297113721,
            "unit": "ns/iter",
            "extra": "iterations: 2945\ncpu: 294462.2750424434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 227740.49045753057,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 227730.40522875905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 226483.00493505326,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 226467.50649350716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 225728.07137337737,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 225718.62921927468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 120378.54729729447,
            "unit": "ns/iter",
            "extra": "iterations: 7252\ncpu: 120374.503585218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 218219.0773915359,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 218211.16467901532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 858616.5797100711,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 858617.2101449316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 494025.7591241202,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 494014.43009545084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2446.1602732496226,
            "unit": "ns/iter",
            "extra": "iterations: 329662\ncpu: 2446.0896311979977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12037.574010782359,
            "unit": "ns/iter",
            "extra": "iterations: 67882\ncpu: 12037.3810435756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9666.087687757286,
            "unit": "ns/iter",
            "extra": "iterations: 86215\ncpu: 9666.206576581768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9500.598873297713,
            "unit": "ns/iter",
            "extra": "iterations: 87157\ncpu: 9500.466973392873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8847.366435862541,
            "unit": "ns/iter",
            "extra": "iterations: 91997\ncpu: 8847.26458471475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33065.00860877605,
            "unit": "ns/iter",
            "extra": "iterations: 25323\ncpu: 33064.91726888589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 278716.49764078367,
            "unit": "ns/iter",
            "extra": "iterations: 3179\ncpu: 278714.092481913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 211386.85439230115,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 211380.40914560723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 209773.05524864022,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 209767.4513571933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 208890.21523493066,
            "unit": "ns/iter",
            "extra": "iterations: 4214\ncpu: 208884.409112481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106376.86851294502,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 106375.74954846432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 201983.70992192844,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 201972.92145153927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 246.11664727289704,
            "unit": "ns/iter",
            "extra": "iterations: 2835960\ncpu: 246.11094655777833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1724.3939082963116,
            "unit": "ns/iter",
            "extra": "iterations: 405371\ncpu: 1724.3441193375988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1245.6918405196247,
            "unit": "ns/iter",
            "extra": "iterations: 563455\ncpu: 1245.7062232121375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1326.1979747715318,
            "unit": "ns/iter",
            "extra": "iterations: 569911\ncpu: 1326.1854921206966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 992.4520759697565,
            "unit": "ns/iter",
            "extra": "iterations: 704490\ncpu: 992.4275717185496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10236.793228269662,
            "unit": "ns/iter",
            "extra": "iterations: 67959\ncpu: 10236.627966862332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13479.246232416448,
            "unit": "ns/iter",
            "extra": "iterations: 51890\ncpu: 13478.83021776832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3117.906754887248,
            "unit": "ns/iter",
            "extra": "iterations: 223379\ncpu: 3117.8306823828502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3125.996458923891,
            "unit": "ns/iter",
            "extra": "iterations: 223096\ncpu: 3125.8516513070504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3134.4832160902024,
            "unit": "ns/iter",
            "extra": "iterations: 223041\ncpu: 3134.424164167113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5593.346120620802,
            "unit": "ns/iter",
            "extra": "iterations: 125020\ncpu: 5593.061910094386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5950.362816173955,
            "unit": "ns/iter",
            "extra": "iterations: 118487\ncpu: 5950.3067847105995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1995.2576785570154,
            "unit": "ns/iter",
            "extra": "iterations: 350196\ncpu: 1995.228386389313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10434.014306490339,
            "unit": "ns/iter",
            "extra": "iterations: 67382\ncpu: 10434.031343682267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8309.233035810754,
            "unit": "ns/iter",
            "extra": "iterations: 83691\ncpu: 8309.018890920139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8260.461774653093,
            "unit": "ns/iter",
            "extra": "iterations: 83374\ncpu: 8260.180631851723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8169.448082783872,
            "unit": "ns/iter",
            "extra": "iterations: 84654\ncpu: 8169.256030429891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18933.866268248257,
            "unit": "ns/iter",
            "extra": "iterations: 38151\ncpu: 18915.96812665463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59031.30434782048,
            "unit": "ns/iter",
            "extra": "iterations: 11799\ncpu: 59031.17213323194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47999.98637676707,
            "unit": "ns/iter",
            "extra": "iterations: 14534\ncpu: 48000.52979221111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47902.75668284364,
            "unit": "ns/iter",
            "extra": "iterations: 14627\ncpu: 47902.80987215402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47889.735203556374,
            "unit": "ns/iter",
            "extra": "iterations: 14615\ncpu: 47889.59972630938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27108.475394434183,
            "unit": "ns/iter",
            "extra": "iterations: 25543\ncpu: 27108.51113808135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46694.85102108848,
            "unit": "ns/iter",
            "extra": "iterations: 14935\ncpu: 46695.359892869266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2036.3878761775961,
            "unit": "ns/iter",
            "extra": "iterations: 348240\ncpu: 2036.4108086376825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10326.771979764804,
            "unit": "ns/iter",
            "extra": "iterations: 67801\ncpu: 10326.660373740915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8838.037098989264,
            "unit": "ns/iter",
            "extra": "iterations: 80110\ncpu: 8838.028960179809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9103.228331057773,
            "unit": "ns/iter",
            "extra": "iterations: 76192\ncpu: 9103.332370852519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8951.763445130788,
            "unit": "ns/iter",
            "extra": "iterations: 78058\ncpu: 8951.866560762592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18694.73928031401,
            "unit": "ns/iter",
            "extra": "iterations: 37711\ncpu: 18694.677945427353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58553.84870725187,
            "unit": "ns/iter",
            "extra": "iterations: 11990\ncpu: 58550.959132610806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49193.31644588965,
            "unit": "ns/iter",
            "extra": "iterations: 14192\ncpu: 49191.805242390095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48114.994400824165,
            "unit": "ns/iter",
            "extra": "iterations: 14645\ncpu: 48113.89552748376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47927.225623504564,
            "unit": "ns/iter",
            "extra": "iterations: 14635\ncpu: 47924.78988725653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26901.034333119027,
            "unit": "ns/iter",
            "extra": "iterations: 26039\ncpu: 26899.99615960643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48127.07938479023,
            "unit": "ns/iter",
            "extra": "iterations: 14499\ncpu: 48125.69142699497 ns\nthreads: 1"
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
        "date": 1702382317600,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 662.07594877093,
            "unit": "ns/iter",
            "extra": "iterations: 1061663\ncpu: 662.0587700616863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5931.911696252025,
            "unit": "ns/iter",
            "extra": "iterations: 137061\ncpu: 5931.61657947921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11350.882194713404,
            "unit": "ns/iter",
            "extra": "iterations: 72866\ncpu: 11350.5050366426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16852.449395648873,
            "unit": "ns/iter",
            "extra": "iterations: 49640\ncpu: 16851.623690572113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22348.200749608102,
            "unit": "ns/iter",
            "extra": "iterations: 37086\ncpu: 22347.62444048968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27599.42366260556,
            "unit": "ns/iter",
            "extra": "iterations: 30208\ncpu: 27597.52714512713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33155.5733910648,
            "unit": "ns/iter",
            "extra": "iterations: 25405\ncpu: 33154.58767959065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38500.69824851795,
            "unit": "ns/iter",
            "extra": "iterations: 21753\ncpu: 38498.20254677516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43673.330125275854,
            "unit": "ns/iter",
            "extra": "iterations: 18599\ncpu: 43672.63831388782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 639.8960994492933,
            "unit": "ns/iter",
            "extra": "iterations: 1089359\ncpu: 639.8448078181752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 513.6177100092785,
            "unit": "ns/iter",
            "extra": "iterations: 1362416\ncpu: 513.5823419572292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 492.5152365180142,
            "unit": "ns/iter",
            "extra": "iterations: 1425621\ncpu: 492.4635650007959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 493.4515380919421,
            "unit": "ns/iter",
            "extra": "iterations: 1419486\ncpu: 493.42430992626856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 969.3229282722309,
            "unit": "ns/iter",
            "extra": "iterations: 723430\ncpu: 969.248303222148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2540.375692465635,
            "unit": "ns/iter",
            "extra": "iterations: 315178\ncpu: 2540.243925654706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12179.916237267209,
            "unit": "ns/iter",
            "extra": "iterations: 66760\ncpu: 12178.928999400838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9816.905621038339,
            "unit": "ns/iter",
            "extra": "iterations: 82974\ncpu: 9816.419601320882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9779.1812394344,
            "unit": "ns/iter",
            "extra": "iterations: 83409\ncpu: 9778.50831445049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9430.775388482583,
            "unit": "ns/iter",
            "extra": "iterations: 87520\ncpu: 9430.506170018285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34422.782947988,
            "unit": "ns/iter",
            "extra": "iterations: 24091\ncpu: 34420.78784608355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 276739.841985708,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 276736.2751460084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 216441.66460702685,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 216427.3850716758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210175.00344827244,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 210163.6945812806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 215380.62445095862,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 215366.59346022442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 115069.68699237825,
            "unit": "ns/iter",
            "extra": "iterations: 8003\ncpu: 115068.42434087198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205495.8778013484,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 205486.3882991267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5448.835359999293,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5448.684999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28901.84080295388,
            "unit": "ns/iter",
            "extra": "iterations: 28694\ncpu: 28899.95817941036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23139.798225299513,
            "unit": "ns/iter",
            "extra": "iterations: 35837\ncpu: 23139.727097692343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22896.80843280478,
            "unit": "ns/iter",
            "extra": "iterations: 36358\ncpu: 22895.36553165747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22157.381306072257,
            "unit": "ns/iter",
            "extra": "iterations: 37563\ncpu: 22156.64616777154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50084.91134600129,
            "unit": "ns/iter",
            "extra": "iterations: 16367\ncpu: 50083.65002749437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 298501.7890466487,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 298485.598377283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 236028.27641212443,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 236020.31903765703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 228150.7915795083,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 228134.85878661202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 225622.07214893866,
            "unit": "ns/iter",
            "extra": "iterations: 3867\ncpu: 225612.9557796748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122121.31470954965,
            "unit": "ns/iter",
            "extra": "iterations: 7213\ncpu: 122118.0784694303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 219164.43603921536,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 219155.943704449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 876324.6826568176,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 876245.0184501847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 484728.92920354364,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 484705.42035397846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2479.3819531773565,
            "unit": "ns/iter",
            "extra": "iterations: 323647\ncpu: 2479.202958779159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12084.735699471423,
            "unit": "ns/iter",
            "extra": "iterations: 67987\ncpu: 12083.863091473375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9603.807150786646,
            "unit": "ns/iter",
            "extra": "iterations: 85585\ncpu: 9603.099842262092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9685.275931366712,
            "unit": "ns/iter",
            "extra": "iterations: 85090\ncpu: 9684.840756845726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9128.069543698393,
            "unit": "ns/iter",
            "extra": "iterations: 90116\ncpu: 9127.445736606092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 32640.399109903796,
            "unit": "ns/iter",
            "extra": "iterations: 25840\ncpu: 32637.10913312678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 282413.13168855786,
            "unit": "ns/iter",
            "extra": "iterations: 3121\ncpu: 282396.4114066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 212596.31989314512,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 212595.8464901642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 214195.90262899952,
            "unit": "ns/iter",
            "extra": "iterations: 4108\ncpu: 214183.3495618317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 209658.24498087674,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 209655.2103250478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 107290.70265313188,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 107283.57989974349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 203616.78671001605,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 203616.3104089208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 240.88117679759094,
            "unit": "ns/iter",
            "extra": "iterations: 2900006\ncpu: 240.87439819089926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1698.040415432245,
            "unit": "ns/iter",
            "extra": "iterations: 411427\ncpu: 1697.9933256689583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1291.2440456174602,
            "unit": "ns/iter",
            "extra": "iterations: 538301\ncpu: 1291.1698101991335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1274.8705377723747,
            "unit": "ns/iter",
            "extra": "iterations: 548801\ncpu: 1274.8666638726925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 969.4793236984594,
            "unit": "ns/iter",
            "extra": "iterations: 722518\ncpu: 969.4366091917384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10249.587578527246,
            "unit": "ns/iter",
            "extra": "iterations: 68607\ncpu: 10249.311294765883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13571.389046306604,
            "unit": "ns/iter",
            "extra": "iterations: 51526\ncpu: 13570.971936498063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3134.336569057172,
            "unit": "ns/iter",
            "extra": "iterations: 223134\ncpu: 3134.241756074827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3128.6267512755603,
            "unit": "ns/iter",
            "extra": "iterations: 225193\ncpu: 3128.6158983627424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3115.0196459821095,
            "unit": "ns/iter",
            "extra": "iterations: 225695\ncpu: 3114.9077294578915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5792.316188006783,
            "unit": "ns/iter",
            "extra": "iterations: 121102\ncpu: 5792.1611534079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5284.022009888181,
            "unit": "ns/iter",
            "extra": "iterations: 132077\ncpu: 5283.713288460512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2042.971639835277,
            "unit": "ns/iter",
            "extra": "iterations: 342699\ncpu: 2042.9694863422353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10543.39733309474,
            "unit": "ns/iter",
            "extra": "iterations: 66969\ncpu: 10542.931804267646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8317.255311164548,
            "unit": "ns/iter",
            "extra": "iterations: 82609\ncpu: 8317.10104225919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8413.210957856172,
            "unit": "ns/iter",
            "extra": "iterations: 83666\ncpu: 8412.33595486806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8302.914717775193,
            "unit": "ns/iter",
            "extra": "iterations: 84578\ncpu: 8302.257088131535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18593.711134116318,
            "unit": "ns/iter",
            "extra": "iterations: 37668\ncpu: 18592.633004141182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59590.563207627405,
            "unit": "ns/iter",
            "extra": "iterations: 11747\ncpu: 59585.094066570644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48168.56415898653,
            "unit": "ns/iter",
            "extra": "iterations: 14542\ncpu: 48164.55095585196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47658.83085565299,
            "unit": "ns/iter",
            "extra": "iterations: 14597\ncpu: 47656.40200041077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47332.71247715206,
            "unit": "ns/iter",
            "extra": "iterations: 14771\ncpu: 47331.913885315094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27609.351497666325,
            "unit": "ns/iter",
            "extra": "iterations: 25306\ncpu: 27608.91488184591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47213.06200767357,
            "unit": "ns/iter",
            "extra": "iterations: 14853\ncpu: 47211.62054803756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2083.6578686521375,
            "unit": "ns/iter",
            "extra": "iterations: 335947\ncpu: 2083.6280722852043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10554.471130943313,
            "unit": "ns/iter",
            "extra": "iterations: 66334\ncpu: 10554.334127295127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 10335.352632335615,
            "unit": "ns/iter",
            "extra": "iterations: 69520\ncpu: 10334.896432681164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9596.22539695821,
            "unit": "ns/iter",
            "extra": "iterations: 71922\ncpu: 9595.959511693205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9978.859551672502,
            "unit": "ns/iter",
            "extra": "iterations: 70752\ncpu: 9978.29036635008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19586.104917390436,
            "unit": "ns/iter",
            "extra": "iterations: 35771\ncpu: 19586.083699085833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59208.905206496616,
            "unit": "ns/iter",
            "extra": "iterations: 11889\ncpu: 59206.52704180403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48288.83117151918,
            "unit": "ns/iter",
            "extra": "iterations: 14494\ncpu: 48287.46377811488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48572.349032975864,
            "unit": "ns/iter",
            "extra": "iterations: 14374\ncpu: 48569.31264783666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 49006.969384933174,
            "unit": "ns/iter",
            "extra": "iterations: 14470\ncpu: 49006.89702833445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27762.155806916486,
            "unit": "ns/iter",
            "extra": "iterations: 25108\ncpu: 27761.378843396855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48852.59810215222,
            "unit": "ns/iter",
            "extra": "iterations: 14332\ncpu: 48848.96036840601 ns\nthreads: 1"
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
        "date": 1702387049942,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 649.9798193349858,
            "unit": "ns/iter",
            "extra": "iterations: 1077021\ncpu: 649.9719132681721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6012.680084419788,
            "unit": "ns/iter",
            "extra": "iterations: 136461\ncpu: 6012.665889887952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11473.54079289557,
            "unit": "ns/iter",
            "extra": "iterations: 72292\ncpu: 11473.356664637857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17096.699772939504,
            "unit": "ns/iter",
            "extra": "iterations: 49326\ncpu: 17096.926570165833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22433.486211353174,
            "unit": "ns/iter",
            "extra": "iterations: 37132\ncpu: 22432.72648928148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27651.271499883365,
            "unit": "ns/iter",
            "extra": "iterations: 29849\ncpu: 27650.93637977822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33181.36765522298,
            "unit": "ns/iter",
            "extra": "iterations: 25222\ncpu: 33181.09190389344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38299.320761661744,
            "unit": "ns/iter",
            "extra": "iterations: 21742\ncpu: 38298.886946922976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43956.25187453665,
            "unit": "ns/iter",
            "extra": "iterations: 18938\ncpu: 43956.531840743475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 648.6021851956158,
            "unit": "ns/iter",
            "extra": "iterations: 1119076\ncpu: 648.5937505584961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 535.4277249452803,
            "unit": "ns/iter",
            "extra": "iterations: 1416111\ncpu: 535.41332565032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 508.9381687637457,
            "unit": "ns/iter",
            "extra": "iterations: 1435391\ncpu: 508.9299013300205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 524.0473749703831,
            "unit": "ns/iter",
            "extra": "iterations: 1431241\ncpu: 524.0436795759774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 942.102950409689,
            "unit": "ns/iter",
            "extra": "iterations: 734237\ncpu: 942.0990770010238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2668.7443336628317,
            "unit": "ns/iter",
            "extra": "iterations: 299488\ncpu: 2668.7600170958417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12819.091213613236,
            "unit": "ns/iter",
            "extra": "iterations: 63587\ncpu: 12818.711371821255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10098.559241705374,
            "unit": "ns/iter",
            "extra": "iterations: 80813\ncpu: 10098.266368034841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10179.175525339113,
            "unit": "ns/iter",
            "extra": "iterations: 80091\ncpu: 10178.918979660599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9970.910725864607,
            "unit": "ns/iter",
            "extra": "iterations: 81737\ncpu: 9970.59104200057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34341.37431717492,
            "unit": "ns/iter",
            "extra": "iterations: 23066\ncpu: 34339.837856585524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 274382.2590322555,
            "unit": "ns/iter",
            "extra": "iterations: 3100\ncpu: 274373.0322580641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213779.502449775,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 213775.08574228315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213153.56736893154,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 213147.20725134766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 212126.88345500114,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 212121.33819951303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109176.99152225275,
            "unit": "ns/iter",
            "extra": "iterations: 8021\ncpu: 109173.39483854885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 203941.90400945675,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 203937.1698113205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5457.891590000372,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5457.666000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28757.812320667814,
            "unit": "ns/iter",
            "extra": "iterations: 28927\ncpu: 28756.611470252723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22731.927215798252,
            "unit": "ns/iter",
            "extra": "iterations: 36409\ncpu: 22725.490950039824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22726.294417496923,
            "unit": "ns/iter",
            "extra": "iterations: 36489\ncpu: 22725.443284277495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22125.022414575495,
            "unit": "ns/iter",
            "extra": "iterations: 37431\ncpu: 22124.538484144174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50686.590764717075,
            "unit": "ns/iter",
            "extra": "iterations: 16372\ncpu: 50686.507451747224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 292156.65018501686,
            "unit": "ns/iter",
            "extra": "iterations: 2973\ncpu: 292148.50319542596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 225803.99190388486,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 225791.9822407949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 225613.45405403906,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 225606.84684684756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 230627.19846154485,
            "unit": "ns/iter",
            "extra": "iterations: 3900\ncpu: 230626.33333333372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 120677.812225878,
            "unit": "ns/iter",
            "extra": "iterations: 7296\ncpu: 120677.01480263166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 214107.53326739083,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 214103.41330695053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 856466.6741877676,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 856457.6714801501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 477705.40075509495,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 477705.0161812282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2432.6336486386845,
            "unit": "ns/iter",
            "extra": "iterations: 331425\ncpu: 2432.5874632269733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12209.32984575732,
            "unit": "ns/iter",
            "extra": "iterations: 66713\ncpu: 12209.40146598112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9462.584388185078,
            "unit": "ns/iter",
            "extra": "iterations: 86742\ncpu: 9462.487606926346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9734.705769971173,
            "unit": "ns/iter",
            "extra": "iterations: 83224\ncpu: 9734.682303181788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8997.184227586458,
            "unit": "ns/iter",
            "extra": "iterations: 91007\ncpu: 8997.084839627772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 32636.21561294837,
            "unit": "ns/iter",
            "extra": "iterations: 25671\ncpu: 32636.16142729149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 277650.07156429876,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 277647.49841671984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 210127.16924541455,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 210128.23137348262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 214287.5030142074,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 214285.21823004523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 208403.52842651974,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 208404.7652748289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105119.14258510286,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 105118.26945965196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 200555.55269748237,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 200556.6127930805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 240.17817337008333,
            "unit": "ns/iter",
            "extra": "iterations: 2920066\ncpu: 240.17717407757243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1646.767577596664,
            "unit": "ns/iter",
            "extra": "iterations: 425243\ncpu: 1646.772551223644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1289.2252875385639,
            "unit": "ns/iter",
            "extra": "iterations: 542449\ncpu: 1289.212995138717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1280.943748859478,
            "unit": "ns/iter",
            "extra": "iterations: 548060\ncpu: 1280.959566470824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 960.6842024371804,
            "unit": "ns/iter",
            "extra": "iterations: 728720\ncpu: 960.6785871116426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10353.80460058773,
            "unit": "ns/iter",
            "extra": "iterations: 67687\ncpu: 10353.666139731335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13875.740004754745,
            "unit": "ns/iter",
            "extra": "iterations: 50474\ncpu: 13875.825177319059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3159.892748725944,
            "unit": "ns/iter",
            "extra": "iterations: 221368\ncpu: 3159.872248924873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3158.347511879426,
            "unit": "ns/iter",
            "extra": "iterations: 221814\ncpu: 3158.36511671942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3164.4035077404483,
            "unit": "ns/iter",
            "extra": "iterations: 221168\ncpu: 3164.356507270489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5827.969381592685,
            "unit": "ns/iter",
            "extra": "iterations: 120875\ncpu: 5827.8254395036265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5374.228611469062,
            "unit": "ns/iter",
            "extra": "iterations: 130584\ncpu: 5373.791582429736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2012.6808427376325,
            "unit": "ns/iter",
            "extra": "iterations: 347534\ncpu: 2012.622649870223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10542.965674122961,
            "unit": "ns/iter",
            "extra": "iterations: 66160\ncpu: 10542.667775090742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8423.605452923719,
            "unit": "ns/iter",
            "extra": "iterations: 82928\ncpu: 8423.581902373224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8326.701736990097,
            "unit": "ns/iter",
            "extra": "iterations: 83708\ncpu: 8326.74893678014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8290.949178644341,
            "unit": "ns/iter",
            "extra": "iterations: 83764\ncpu: 8290.806312974562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18584.57323655387,
            "unit": "ns/iter",
            "extra": "iterations: 37611\ncpu: 18584.661402249436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58833.526816532285,
            "unit": "ns/iter",
            "extra": "iterations: 11877\ncpu: 58833.61960091013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47964.824210455045,
            "unit": "ns/iter",
            "extra": "iterations: 14597\ncpu: 47964.629718435855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47945.51089340011,
            "unit": "ns/iter",
            "extra": "iterations: 14596\ncpu: 47944.375171279826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47580.57709311693,
            "unit": "ns/iter",
            "extra": "iterations: 14703\ncpu: 47580.09929946246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27149.81277473107,
            "unit": "ns/iter",
            "extra": "iterations: 25707\ncpu: 27149.422336328695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47093.623834126985,
            "unit": "ns/iter",
            "extra": "iterations: 14903\ncpu: 47093.72609541749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2321.536515628941,
            "unit": "ns/iter",
            "extra": "iterations: 304979\ncpu: 2321.5690260640613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10309.157902473424,
            "unit": "ns/iter",
            "extra": "iterations: 68023\ncpu: 10309.088102553509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8892.57198547618,
            "unit": "ns/iter",
            "extra": "iterations: 78495\ncpu: 8892.502707178712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 10064.618403933244,
            "unit": "ns/iter",
            "extra": "iterations: 69170\ncpu: 10064.584357380354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9858.11047036324,
            "unit": "ns/iter",
            "extra": "iterations: 70924\ncpu: 9857.923974958958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19120.426803672126,
            "unit": "ns/iter",
            "extra": "iterations: 36689\ncpu: 19120.66559459242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58668.175300808914,
            "unit": "ns/iter",
            "extra": "iterations: 11968\ncpu: 58668.273729946595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48709.71760587933,
            "unit": "ns/iter",
            "extra": "iterations: 14285\ncpu: 48709.55547777443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47478.974479063305,
            "unit": "ns/iter",
            "extra": "iterations: 14733\ncpu: 47478.21896423019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47590.19109235077,
            "unit": "ns/iter",
            "extra": "iterations: 14684\ncpu: 47590.37728139468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28668.621807267296,
            "unit": "ns/iter",
            "extra": "iterations: 24313\ncpu: 28668.481882120683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47985.58645325433,
            "unit": "ns/iter",
            "extra": "iterations: 14557\ncpu: 47985.74568935871 ns\nthreads: 1"
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
        "date": 1702390826470,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 660.2738239046528,
            "unit": "ns/iter",
            "extra": "iterations: 1062095\ncpu: 660.2505425597521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5979.031409611015,
            "unit": "ns/iter",
            "extra": "iterations: 136073\ncpu: 5978.828275998912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11601.820620051325,
            "unit": "ns/iter",
            "extra": "iterations: 71736\ncpu: 11601.552916248467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17003.25006014729,
            "unit": "ns/iter",
            "extra": "iterations: 45721\ncpu: 17002.79084009535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22338.890196923563,
            "unit": "ns/iter",
            "extra": "iterations: 37121\ncpu: 22337.824950836446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27989.18171813555,
            "unit": "ns/iter",
            "extra": "iterations: 29986\ncpu: 27988.394584139278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33569.31065292221,
            "unit": "ns/iter",
            "extra": "iterations: 24735\ncpu: 33566.35940974329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39200.65185185031,
            "unit": "ns/iter",
            "extra": "iterations: 21330\ncpu: 39199.65775902488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44396.541878981414,
            "unit": "ns/iter",
            "extra": "iterations: 18840\ncpu: 44394.973460721885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 646.5658878414222,
            "unit": "ns/iter",
            "extra": "iterations: 1084411\ncpu: 646.540841064872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 504.11536899870924,
            "unit": "ns/iter",
            "extra": "iterations: 1391509\ncpu: 504.08017483178327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 491.0630540660362,
            "unit": "ns/iter",
            "extra": "iterations: 1422890\ncpu: 491.03880131282125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 492.77695588926207,
            "unit": "ns/iter",
            "extra": "iterations: 1423010\ncpu: 492.7756656664401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 955.3821368646148,
            "unit": "ns/iter",
            "extra": "iterations: 730678\ncpu: 955.3528366804529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2907.6890663874883,
            "unit": "ns/iter",
            "extra": "iterations: 301849\ncpu: 2907.4732730603732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12877.85747834123,
            "unit": "ns/iter",
            "extra": "iterations: 63022\ncpu: 12877.212719367872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10265.382577616612,
            "unit": "ns/iter",
            "extra": "iterations: 79461\ncpu: 10264.850681466374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10145.202044953992,
            "unit": "ns/iter",
            "extra": "iterations: 80393\ncpu: 10144.76011593048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9849.289370783137,
            "unit": "ns/iter",
            "extra": "iterations: 83882\ncpu: 9848.737512219532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34639.70552995447,
            "unit": "ns/iter",
            "extra": "iterations: 23870\ncpu: 34638.19857561793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 281041.35284657276,
            "unit": "ns/iter",
            "extra": "iterations: 3109\ncpu: 281025.6352524933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213929.7727607428,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 213922.60122699384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 212844.0520782294,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 212831.1735941325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213603.77377766956,
            "unit": "ns/iter",
            "extra": "iterations: 4111\ncpu: 213592.60520554657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108687.93206183,
            "unit": "ns/iter",
            "extra": "iterations: 8022\ncpu: 108685.07853403139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 204231.25869361125,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 204225.7283834582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5377.195550000237,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5376.586000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28979.971287025397,
            "unit": "ns/iter",
            "extra": "iterations: 28663\ncpu: 28978.68680877788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23032.916246022152,
            "unit": "ns/iter",
            "extra": "iterations: 36452\ncpu: 23031.885767584776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22994.923005107416,
            "unit": "ns/iter",
            "extra": "iterations: 36418\ncpu: 22994.28579273986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22535.318266858536,
            "unit": "ns/iter",
            "extra": "iterations: 36881\ncpu: 22534.06360998889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50670.86167827761,
            "unit": "ns/iter",
            "extra": "iterations: 16505\ncpu: 50669.00939109362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 295026.71771466976,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 295014.908722109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 227715.794918814,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 227702.27867993724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 226225.96055021204,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 226218.47910719048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 225751.66580578237,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 225743.46590909048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121144.79344670093,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 121141.13092769282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 217423.24905754393,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 217416.63734606697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 866063.5930971724,
            "unit": "ns/iter",
            "extra": "iterations: 1101\ncpu: 866038.5104450472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 470652.90356953244,
            "unit": "ns/iter",
            "extra": "iterations: 1877\ncpu: 470636.70751199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2460.101496612901,
            "unit": "ns/iter",
            "extra": "iterations: 326671\ncpu: 2460.0947130293353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12508.049977648643,
            "unit": "ns/iter",
            "extra": "iterations: 67110\ncpu: 12507.65608702123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9684.335060123616,
            "unit": "ns/iter",
            "extra": "iterations: 84743\ncpu: 9684.077740934346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9756.97275104013,
            "unit": "ns/iter",
            "extra": "iterations: 84150\ncpu: 9756.625074272099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9070.764782455522,
            "unit": "ns/iter",
            "extra": "iterations: 90648\ncpu: 9070.542096902296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33469.84049665832,
            "unit": "ns/iter",
            "extra": "iterations: 25128\ncpu: 33469.13005412272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 281423.286579541,
            "unit": "ns/iter",
            "extra": "iterations: 3137\ncpu: 281413.54797577317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215740.7141446585,
            "unit": "ns/iter",
            "extra": "iterations: 4051\ncpu: 215730.70846704542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 211104.76282673088,
            "unit": "ns/iter",
            "extra": "iterations: 4132\ncpu: 211097.91868344627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 209499.12607862242,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 209491.41898369978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106294.1762715898,
            "unit": "ns/iter",
            "extra": "iterations: 8277\ncpu: 106289.70641536829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 204824.44833178777,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 204818.92956441245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 243.00561546938684,
            "unit": "ns/iter",
            "extra": "iterations: 2882751\ncpu: 243.00253473158034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1710.7856824732671,
            "unit": "ns/iter",
            "extra": "iterations: 408646\ncpu: 1710.763594896312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1394.016615090777,
            "unit": "ns/iter",
            "extra": "iterations: 502495\ncpu: 1393.9603379138077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1320.7927485384855,
            "unit": "ns/iter",
            "extra": "iterations: 527866\ncpu: 1320.7115063292497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 988.7893976046432,
            "unit": "ns/iter",
            "extra": "iterations: 707708\ncpu: 988.7584992680497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10417.834630697706,
            "unit": "ns/iter",
            "extra": "iterations: 67316\ncpu: 10417.26186939208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13753.001374570027,
            "unit": "ns/iter",
            "extra": "iterations: 50925\ncpu: 13752.826705940097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3145.628448675124,
            "unit": "ns/iter",
            "extra": "iterations: 222513\ncpu: 3145.531721742088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3103.798093464062,
            "unit": "ns/iter",
            "extra": "iterations: 224386\ncpu: 3103.6526342998295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3129.8628763138895,
            "unit": "ns/iter",
            "extra": "iterations: 224148\ncpu: 3129.8235986937293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5858.501121255011,
            "unit": "ns/iter",
            "extra": "iterations: 119063\ncpu: 5858.318705223257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5940.0851744139845,
            "unit": "ns/iter",
            "extra": "iterations: 117594\ncpu: 5939.94591560792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2003.9019289635544,
            "unit": "ns/iter",
            "extra": "iterations: 351847\ncpu: 2003.8133052150806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10256.02141540594,
            "unit": "ns/iter",
            "extra": "iterations: 68362\ncpu: 10255.694684181188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8233.869919079943,
            "unit": "ns/iter",
            "extra": "iterations: 85270\ncpu: 8233.443180485583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8270.519936898594,
            "unit": "ns/iter",
            "extra": "iterations: 84943\ncpu: 8270.41074602963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8319.15582337873,
            "unit": "ns/iter",
            "extra": "iterations: 84384\ncpu: 8318.675341296932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18427.81962675888,
            "unit": "ns/iter",
            "extra": "iterations: 37938\ncpu: 18426.680373240393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59368.975719119946,
            "unit": "ns/iter",
            "extra": "iterations: 11820\ncpu: 59367.09813874834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48316.231216270746,
            "unit": "ns/iter",
            "extra": "iterations: 14454\ncpu: 48312.23882662231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47831.40339354247,
            "unit": "ns/iter",
            "extra": "iterations: 14616\ncpu: 47830.38451012634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47706.89284017647,
            "unit": "ns/iter",
            "extra": "iterations: 14735\ncpu: 47705.3681710211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27164.683001473357,
            "unit": "ns/iter",
            "extra": "iterations: 25814\ncpu: 27162.62880607414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47155.91590924544,
            "unit": "ns/iter",
            "extra": "iterations: 14853\ncpu: 47154.41998249461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2159.65982716425,
            "unit": "ns/iter",
            "extra": "iterations: 326437\ncpu: 2159.538593970658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11028.71375152483,
            "unit": "ns/iter",
            "extra": "iterations: 63113\ncpu: 11028.357073820029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9153.192448070267,
            "unit": "ns/iter",
            "extra": "iterations: 74524\ncpu: 9153.173474316896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9279.489390736664,
            "unit": "ns/iter",
            "extra": "iterations: 74746\ncpu: 9278.942016964209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9724.060025171551,
            "unit": "ns/iter",
            "extra": "iterations: 72303\ncpu: 9723.758350275823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19814.969181033226,
            "unit": "ns/iter",
            "extra": "iterations: 32480\ncpu: 19813.69766009849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60322.07390479087,
            "unit": "ns/iter",
            "extra": "iterations: 11596\ncpu: 60320.101759227844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 50381.128824358675,
            "unit": "ns/iter",
            "extra": "iterations: 14120\ncpu: 50378.01699716766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47992.10771869739,
            "unit": "ns/iter",
            "extra": "iterations: 14575\ncpu: 47989.90737564303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47814.23392650093,
            "unit": "ns/iter",
            "extra": "iterations: 14667\ncpu: 47814.13376968747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28180.5243123895,
            "unit": "ns/iter",
            "extra": "iterations: 24905\ncpu: 28180.45773940982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48186.92628028814,
            "unit": "ns/iter",
            "extra": "iterations: 14528\ncpu: 48185.53827092529 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}