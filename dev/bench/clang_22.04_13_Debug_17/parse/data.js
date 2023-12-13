window.BENCHMARK_DATA = {
  "lastUpdate": 1702489601124,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-13 22.04 Debug c++-17": [
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
        "date": 1702489599059,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7305.044868334491,
            "unit": "ns/iter",
            "extra": "iterations: 96304\ncpu: 7304.699700947002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53056.30840000504,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53056.45 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98057.53385000634,
            "unit": "ns/iter",
            "extra": "iterations: 8774\ncpu: 98053.35080920902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144321.09400861093,
            "unit": "ns/iter",
            "extra": "iterations: 6042\ncpu: 144310.19529956972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187145.24918954706,
            "unit": "ns/iter",
            "extra": "iterations: 4627\ncpu: 187135.16317268208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 231028.28056335697,
            "unit": "ns/iter",
            "extra": "iterations: 3550\ncpu: 231011.57746478874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 275802.0299172596,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 275790.89751750475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 320251.9996316695,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 320230.5340699814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 363362.92893189425,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 363360.21867115254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6196.051154649058,
            "unit": "ns/iter",
            "extra": "iterations: 113108\ncpu: 6195.934858719101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5073.449469999787,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5073.077000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5073.3508795998,
            "unit": "ns/iter",
            "extra": "iterations: 138472\ncpu: 5073.138973944183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5018.094193390266,
            "unit": "ns/iter",
            "extra": "iterations: 138704\ncpu: 5018.0016437882105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7810.808296591528,
            "unit": "ns/iter",
            "extra": "iterations: 89362\ncpu: 7810.328775094558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26460.614737048723,
            "unit": "ns/iter",
            "extra": "iterations: 30766\ncpu: 26458.603653383612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136419.33275122105,
            "unit": "ns/iter",
            "extra": "iterations: 6299\ncpu: 136413.04969042723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102235.0422097354,
            "unit": "ns/iter",
            "extra": "iterations: 8363\ncpu: 102229.05655865121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103255.89436898025,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 103248.72741658991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98904.86413736186,
            "unit": "ns/iter",
            "extra": "iterations: 8619\ncpu: 98899.41988629739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201154.89889414003,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 201142.31550440082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1810291.6647058455,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1810198.6274509782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1403917.850226963,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1403835.8547655072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1412756.6869300702,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1412682.9787234021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1394286.9789789543,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1394217.5675675664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 774623.7500000083,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 774584.0833333309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1367125.026509532,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1367032.8424153188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34814.377856330226,
            "unit": "ns/iter",
            "extra": "iterations: 23763\ncpu: 34813.64305853628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176662.17717594697,
            "unit": "ns/iter",
            "extra": "iterations: 4837\ncpu: 176659.45834194776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132964.27408328155,
            "unit": "ns/iter",
            "extra": "iterations: 6436\ncpu: 132963.1448104417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 131618.10342192737,
            "unit": "ns/iter",
            "extra": "iterations: 6546\ncpu: 131617.01802627594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128204.80635062535,
            "unit": "ns/iter",
            "extra": "iterations: 6708\ncpu: 128202.28085867621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 223499.8670984355,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 223498.18652849735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1852598.1138210443,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1852548.1707317056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1452041.339089613,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1451978.649921504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1468999.7803737957,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1468843.4579439205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1431430.3941716147,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1431321.6257668668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 814967.9859772491,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 814916.7397020153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1401401.552710688,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1401355.271084339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5037174.799999775,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5037015.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3093846.727574525,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3093674.4186046505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26966.39106053677,
            "unit": "ns/iter",
            "extra": "iterations: 30494\ncpu: 26965.675214796232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132339.47960443952,
            "unit": "ns/iter",
            "extra": "iterations: 6472\ncpu: 132336.20210135917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102612.78561203355,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 102607.99331901688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104497.76788745202,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 104494.40941062296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102453.57139440301,
            "unit": "ns/iter",
            "extra": "iterations: 8362\ncpu: 102448.20617077278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187827.185708098,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 187809.03562119763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1818569.9902533903,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1818451.0721247508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1401833.130500759,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1401773.4446130558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1413099.9136363808,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1413029.3939393952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1393456.5351270481,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1393380.4185351203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 781316.2989949624,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 781282.9983249545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1367903.6158356422,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1367828.885630494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2880.755754229362,
            "unit": "ns/iter",
            "extra": "iterations: 243951\ncpu: 2880.570688375938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18979.965960093577,
            "unit": "ns/iter",
            "extra": "iterations: 36986\ncpu: 18979.021792029384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15105.612684568358,
            "unit": "ns/iter",
            "extra": "iterations: 46324\ncpu: 15105.057853380524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14180.510675938804,
            "unit": "ns/iter",
            "extra": "iterations: 49176\ncpu: 14179.762485765323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10978.437675124978,
            "unit": "ns/iter",
            "extra": "iterations: 63883\ncpu: 10977.926834995253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 70390.24319163336,
            "unit": "ns/iter",
            "extra": "iterations: 9951\ncpu: 70382.2932368605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123967.74694527565,
            "unit": "ns/iter",
            "extra": "iterations: 5647\ncpu: 123959.69541349396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30485.242754255716,
            "unit": "ns/iter",
            "extra": "iterations: 23048\ncpu: 30482.03314821247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30489.776696063327,
            "unit": "ns/iter",
            "extra": "iterations: 22906\ncpu: 30487.907098576965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30062.62820126113,
            "unit": "ns/iter",
            "extra": "iterations: 23233\ncpu: 30059.78995394468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61971.64760473116,
            "unit": "ns/iter",
            "extra": "iterations: 11314\ncpu: 61968.15449885048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57148.413215711706,
            "unit": "ns/iter",
            "extra": "iterations: 12243\ncpu: 57145.78943069542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21191.320513207756,
            "unit": "ns/iter",
            "extra": "iterations: 33125\ncpu: 21190.599245282967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106832.59768363902,
            "unit": "ns/iter",
            "extra": "iterations: 6562\ncpu: 106829.38128619296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86437.94983319001,
            "unit": "ns/iter",
            "extra": "iterations: 8093\ncpu: 86430.91560607938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88554.5531269658,
            "unit": "ns/iter",
            "extra": "iterations: 7915\ncpu: 88548.75552747803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88047.21529780075,
            "unit": "ns/iter",
            "extra": "iterations: 7975\ncpu: 88039.52351097287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 129536.5515836294,
            "unit": "ns/iter",
            "extra": "iterations: 5399\ncpu: 129530.02407853403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 536943.8404907186,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 536922.9294478527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 446945.77713921905,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 446920.6257982131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 449655.8316195935,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 449632.1979434406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 438028.9125546534,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 438002.9981261641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 283421.3751517928,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 283399.5548360999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 436109.6350592258,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 436086.3381160326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21631.08282085301,
            "unit": "ns/iter",
            "extra": "iterations: 32359\ncpu: 21629.438486974137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109098.99127861368,
            "unit": "ns/iter",
            "extra": "iterations: 6421\ncpu: 109094.34667497296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87118.39241447648,
            "unit": "ns/iter",
            "extra": "iterations: 8068\ncpu: 87114.35299950508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87816.5236537449,
            "unit": "ns/iter",
            "extra": "iterations: 7948\ncpu: 87811.19778560562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86707.58652298397,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 86703.39402948086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128805.35104224387,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 128794.76111418566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 540298.712634872,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 540264.7149460632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 434577.22483013314,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 434541.0747374964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 443023.13734178076,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 443002.40506329096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 430302.58783787716,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 430287.4692874689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276454.9877422095,
            "unit": "ns/iter",
            "extra": "iterations: 2529\ncpu: 276452.90628706844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 430027.0923645963,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 430011.2684729084 ns\nthreads: 1"
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
        "date": 1702489599059,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7305.044868334491,
            "unit": "ns/iter",
            "extra": "iterations: 96304\ncpu: 7304.699700947002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53056.30840000504,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53056.45 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98057.53385000634,
            "unit": "ns/iter",
            "extra": "iterations: 8774\ncpu: 98053.35080920902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144321.09400861093,
            "unit": "ns/iter",
            "extra": "iterations: 6042\ncpu: 144310.19529956972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187145.24918954706,
            "unit": "ns/iter",
            "extra": "iterations: 4627\ncpu: 187135.16317268208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 231028.28056335697,
            "unit": "ns/iter",
            "extra": "iterations: 3550\ncpu: 231011.57746478874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 275802.0299172596,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 275790.89751750475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 320251.9996316695,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 320230.5340699814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 363362.92893189425,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 363360.21867115254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6196.051154649058,
            "unit": "ns/iter",
            "extra": "iterations: 113108\ncpu: 6195.934858719101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5073.449469999787,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5073.077000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5073.3508795998,
            "unit": "ns/iter",
            "extra": "iterations: 138472\ncpu: 5073.138973944183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5018.094193390266,
            "unit": "ns/iter",
            "extra": "iterations: 138704\ncpu: 5018.0016437882105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7810.808296591528,
            "unit": "ns/iter",
            "extra": "iterations: 89362\ncpu: 7810.328775094558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26460.614737048723,
            "unit": "ns/iter",
            "extra": "iterations: 30766\ncpu: 26458.603653383612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136419.33275122105,
            "unit": "ns/iter",
            "extra": "iterations: 6299\ncpu: 136413.04969042723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102235.0422097354,
            "unit": "ns/iter",
            "extra": "iterations: 8363\ncpu: 102229.05655865121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103255.89436898025,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 103248.72741658991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98904.86413736186,
            "unit": "ns/iter",
            "extra": "iterations: 8619\ncpu: 98899.41988629739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201154.89889414003,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 201142.31550440082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1810291.6647058455,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1810198.6274509782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1403917.850226963,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1403835.8547655072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1412756.6869300702,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1412682.9787234021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1394286.9789789543,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1394217.5675675664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 774623.7500000083,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 774584.0833333309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1367125.026509532,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1367032.8424153188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34814.377856330226,
            "unit": "ns/iter",
            "extra": "iterations: 23763\ncpu: 34813.64305853628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176662.17717594697,
            "unit": "ns/iter",
            "extra": "iterations: 4837\ncpu: 176659.45834194776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132964.27408328155,
            "unit": "ns/iter",
            "extra": "iterations: 6436\ncpu: 132963.1448104417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 131618.10342192737,
            "unit": "ns/iter",
            "extra": "iterations: 6546\ncpu: 131617.01802627594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128204.80635062535,
            "unit": "ns/iter",
            "extra": "iterations: 6708\ncpu: 128202.28085867621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 223499.8670984355,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 223498.18652849735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1852598.1138210443,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1852548.1707317056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1452041.339089613,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1451978.649921504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1468999.7803737957,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1468843.4579439205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1431430.3941716147,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1431321.6257668668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 814967.9859772491,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 814916.7397020153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1401401.552710688,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1401355.271084339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5037174.799999775,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5037015.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3093846.727574525,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3093674.4186046505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26966.39106053677,
            "unit": "ns/iter",
            "extra": "iterations: 30494\ncpu: 26965.675214796232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132339.47960443952,
            "unit": "ns/iter",
            "extra": "iterations: 6472\ncpu: 132336.20210135917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102612.78561203355,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 102607.99331901688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104497.76788745202,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 104494.40941062296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102453.57139440301,
            "unit": "ns/iter",
            "extra": "iterations: 8362\ncpu: 102448.20617077278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187827.185708098,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 187809.03562119763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1818569.9902533903,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1818451.0721247508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1401833.130500759,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1401773.4446130558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1413099.9136363808,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1413029.3939393952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1393456.5351270481,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1393380.4185351203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 781316.2989949624,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 781282.9983249545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1367903.6158356422,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1367828.885630494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2880.755754229362,
            "unit": "ns/iter",
            "extra": "iterations: 243951\ncpu: 2880.570688375938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18979.965960093577,
            "unit": "ns/iter",
            "extra": "iterations: 36986\ncpu: 18979.021792029384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15105.612684568358,
            "unit": "ns/iter",
            "extra": "iterations: 46324\ncpu: 15105.057853380524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14180.510675938804,
            "unit": "ns/iter",
            "extra": "iterations: 49176\ncpu: 14179.762485765323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10978.437675124978,
            "unit": "ns/iter",
            "extra": "iterations: 63883\ncpu: 10977.926834995253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 70390.24319163336,
            "unit": "ns/iter",
            "extra": "iterations: 9951\ncpu: 70382.2932368605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123967.74694527565,
            "unit": "ns/iter",
            "extra": "iterations: 5647\ncpu: 123959.69541349396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30485.242754255716,
            "unit": "ns/iter",
            "extra": "iterations: 23048\ncpu: 30482.03314821247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30489.776696063327,
            "unit": "ns/iter",
            "extra": "iterations: 22906\ncpu: 30487.907098576965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30062.62820126113,
            "unit": "ns/iter",
            "extra": "iterations: 23233\ncpu: 30059.78995394468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61971.64760473116,
            "unit": "ns/iter",
            "extra": "iterations: 11314\ncpu: 61968.15449885048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57148.413215711706,
            "unit": "ns/iter",
            "extra": "iterations: 12243\ncpu: 57145.78943069542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21191.320513207756,
            "unit": "ns/iter",
            "extra": "iterations: 33125\ncpu: 21190.599245282967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106832.59768363902,
            "unit": "ns/iter",
            "extra": "iterations: 6562\ncpu: 106829.38128619296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86437.94983319001,
            "unit": "ns/iter",
            "extra": "iterations: 8093\ncpu: 86430.91560607938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88554.5531269658,
            "unit": "ns/iter",
            "extra": "iterations: 7915\ncpu: 88548.75552747803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88047.21529780075,
            "unit": "ns/iter",
            "extra": "iterations: 7975\ncpu: 88039.52351097287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 129536.5515836294,
            "unit": "ns/iter",
            "extra": "iterations: 5399\ncpu: 129530.02407853403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 536943.8404907186,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 536922.9294478527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 446945.77713921905,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 446920.6257982131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 449655.8316195935,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 449632.1979434406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 438028.9125546534,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 438002.9981261641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 283421.3751517928,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 283399.5548360999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 436109.6350592258,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 436086.3381160326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21631.08282085301,
            "unit": "ns/iter",
            "extra": "iterations: 32359\ncpu: 21629.438486974137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109098.99127861368,
            "unit": "ns/iter",
            "extra": "iterations: 6421\ncpu: 109094.34667497296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87118.39241447648,
            "unit": "ns/iter",
            "extra": "iterations: 8068\ncpu: 87114.35299950508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87816.5236537449,
            "unit": "ns/iter",
            "extra": "iterations: 7948\ncpu: 87811.19778560562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86707.58652298397,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 86703.39402948086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128805.35104224387,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 128794.76111418566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 540298.712634872,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 540264.7149460632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 434577.22483013314,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 434541.0747374964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 443023.13734178076,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 443002.40506329096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 430302.58783787716,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 430287.4692874689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276454.9877422095,
            "unit": "ns/iter",
            "extra": "iterations: 2529\ncpu: 276452.90628706844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 430027.0923645963,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 430011.2684729084 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}