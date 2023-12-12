window.BENCHMARK_DATA = {
  "lastUpdate": 1702381122053,
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
      }
    ]
  }
}