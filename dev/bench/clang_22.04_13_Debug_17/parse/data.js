window.BENCHMARK_DATA = {
  "lastUpdate": 1702492209262,
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
        "date": 1702492207311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7608.503618889773,
            "unit": "ns/iter",
            "extra": "iterations: 91879\ncpu: 7608.000740103834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54878.29510000211,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54876.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102588.24029182858,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 102586.18498470228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147364.7194392287,
            "unit": "ns/iter",
            "extra": "iterations: 5849\ncpu: 147364.09642673965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192758.40633364202,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 192755.66458519176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 239295.99246232567,
            "unit": "ns/iter",
            "extra": "iterations: 3582\ncpu: 239285.48297040758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284217.72284032305,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 284214.8232984294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330336.05777271383,
            "unit": "ns/iter",
            "extra": "iterations: 2631\ncpu: 330325.46560243226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374999.6596112302,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 374997.0626349898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6397.420812754456,
            "unit": "ns/iter",
            "extra": "iterations: 110144\ncpu: 6383.397189134237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5118.860126536072,
            "unit": "ns/iter",
            "extra": "iterations: 135930\ncpu: 5118.889869785925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5131.675039304565,
            "unit": "ns/iter",
            "extra": "iterations: 136118\ncpu: 5131.284620696745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5129.283537454663,
            "unit": "ns/iter",
            "extra": "iterations: 136765\ncpu: 5129.11563631046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7913.188590778103,
            "unit": "ns/iter",
            "extra": "iterations: 88297\ncpu: 7913.084249748005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27671.55925297126,
            "unit": "ns/iter",
            "extra": "iterations: 29450\ncpu: 27670.81833616303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139152.17341792464,
            "unit": "ns/iter",
            "extra": "iterations: 6147\ncpu: 139147.1286806572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109743.85054523294,
            "unit": "ns/iter",
            "extra": "iterations: 7795\ncpu: 109740.74406670946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109996.85974194371,
            "unit": "ns/iter",
            "extra": "iterations: 7750\ncpu: 109995.07096774198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 107691.55528938062,
            "unit": "ns/iter",
            "extra": "iterations: 7931\ncpu: 107690.15256588109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 207946.12964262333,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 207941.6024293393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1884783.5398772426,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1884714.31492843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1450366.538341283,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1450277.9342722998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1457571.7048665797,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1457479.2778649922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1434122.328173431,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1434090.8668730648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 788231.001706469,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 788202.645051197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1418285.4390243413,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1418260.0609756112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36682.88489208775,
            "unit": "ns/iter",
            "extra": "iterations: 23074\ncpu: 36682.27008754439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 177878.62715692463,
            "unit": "ns/iter",
            "extra": "iterations: 4868\ncpu: 177876.15036976142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 141434.56825910506,
            "unit": "ns/iter",
            "extra": "iterations: 6175\ncpu: 141432.48582995957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 139242.9046387726,
            "unit": "ns/iter",
            "extra": "iterations: 6187\ncpu: 139239.03345724932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 135558.91602454302,
            "unit": "ns/iter",
            "extra": "iterations: 6359\ncpu: 135554.56832835329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 228116.99947506655,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 228106.06299212557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1927086.7913222495,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1927067.975206605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1512942.7245900857,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1512862.1311475388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1509291.0761750303,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1509242.6256077795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1458633.1527557985,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1458544.4094488104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 825510.9786856567,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 825476.642984019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1449475.0640626107,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1449421.4062499956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5087282.010000536,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5087245.000000067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3137273.614093819,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3137094.966442946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28288.21766387669,
            "unit": "ns/iter",
            "extra": "iterations: 29031\ncpu: 28287.768247735217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 136236.08813774717,
            "unit": "ns/iter",
            "extra": "iterations: 6331\ncpu: 136227.84710156414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109628.78055626142,
            "unit": "ns/iter",
            "extra": "iterations: 7838\ncpu: 109628.20872671652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110543.05504468485,
            "unit": "ns/iter",
            "extra": "iterations: 7721\ncpu: 110540.5646936923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110913.35340483957,
            "unit": "ns/iter",
            "extra": "iterations: 7739\ncpu: 110911.74570357894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 191396.68606702785,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 191392.83509700175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1884377.0161943524,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1884370.8502024428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1451610.2133956766,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1451536.7601246084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1453167.9252336912,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1453134.4236760095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1432246.1669241872,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1432157.8052550242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 796099.4337349097,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 796086.6609294337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1412926.664133706,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1412840.4255319114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2848.6411990770484,
            "unit": "ns/iter",
            "extra": "iterations: 246156\ncpu: 2848.610637156933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19987.14471572728,
            "unit": "ns/iter",
            "extra": "iterations: 34896\ncpu: 19986.181797340552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15643.209405024856,
            "unit": "ns/iter",
            "extra": "iterations: 46422\ncpu: 15642.55309982347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15317.422115490033,
            "unit": "ns/iter",
            "extra": "iterations: 45805\ncpu: 15317.231743259534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11312.72645000608,
            "unit": "ns/iter",
            "extra": "iterations: 61879\ncpu: 11312.639182921479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 70182.87957485295,
            "unit": "ns/iter",
            "extra": "iterations: 9973\ncpu: 70180.65777599461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130620.39227034821,
            "unit": "ns/iter",
            "extra": "iterations: 5356\ncpu: 130613.40552651315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31794.291413819534,
            "unit": "ns/iter",
            "extra": "iterations: 22082\ncpu: 31793.22072276061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31397.593562000176,
            "unit": "ns/iter",
            "extra": "iterations: 22274\ncpu: 31395.600251413995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31424.322368127865,
            "unit": "ns/iter",
            "extra": "iterations: 22465\ncpu: 31423.298464277796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61437.57672747094,
            "unit": "ns/iter",
            "extra": "iterations: 11404\ncpu: 61434.60189407259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59468.48183751673,
            "unit": "ns/iter",
            "extra": "iterations: 11755\ncpu: 59467.61378136931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21020.22552552743,
            "unit": "ns/iter",
            "extra": "iterations: 33300\ncpu: 21019.921921921963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114531.5824068047,
            "unit": "ns/iter",
            "extra": "iterations: 6116\ncpu: 114529.41465009819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90594.8383055686,
            "unit": "ns/iter",
            "extra": "iterations: 7743\ncpu: 90590.06844892153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91913.17938930642,
            "unit": "ns/iter",
            "extra": "iterations: 7598\ncpu: 91906.936035799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90694.62556663358,
            "unit": "ns/iter",
            "extra": "iterations: 7721\ncpu: 90693.23921771813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132665.55447805274,
            "unit": "ns/iter",
            "extra": "iterations: 5259\ncpu: 132658.96558281066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 555811.0253565555,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 555806.8145800391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 461316.0726072544,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 461295.2475247537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 461386.7358747626,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 461377.2634445208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 447804.74967985245,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 447801.9846350846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 292871.8800668453,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 292865.52444629837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 449380.40500641894,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 449376.4441591818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21501.110077092173,
            "unit": "ns/iter",
            "extra": "iterations: 32559\ncpu: 21500.635768912012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116305.03192020919,
            "unit": "ns/iter",
            "extra": "iterations: 6015\ncpu: 116302.32751454611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91433.48358170256,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 91429.42107345321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91719.62741261498,
            "unit": "ns/iter",
            "extra": "iterations: 7668\ncpu: 91719.27490871283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90542.04688104337,
            "unit": "ns/iter",
            "extra": "iterations: 7743\ncpu: 90537.49192819264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127711.73531557123,
            "unit": "ns/iter",
            "extra": "iterations: 5482\ncpu: 127709.12075884866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 556601.4275534417,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 556558.749010295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 447289.82289001276,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 447273.2097186661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 448642.2554557115,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 448616.81643131893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 440512.1437578923,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 440500.50441361667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 282403.67786323355,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 282392.75596923975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 440042.3869949716,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 440020.2651515079 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}