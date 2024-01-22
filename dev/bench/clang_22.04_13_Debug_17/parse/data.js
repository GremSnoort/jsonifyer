window.BENCHMARK_DATA = {
  "lastUpdate": 1705963328180,
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
        "date": 1702503259572,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7441.814976658322,
            "unit": "ns/iter",
            "extra": "iterations: 93826\ncpu: 7441.33822181485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54311.91709999438,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54308.07999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100204.52131417084,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 100201.51907677816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145447.65060037814,
            "unit": "ns/iter",
            "extra": "iterations: 5913\ncpu: 145444.47826822256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 191212.2280353219,
            "unit": "ns/iter",
            "extra": "iterations: 4530\ncpu: 191205.6953642384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 236503.54286495308,
            "unit": "ns/iter",
            "extra": "iterations: 3651\ncpu: 236491.70090386196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 282315.8635179493,
            "unit": "ns/iter",
            "extra": "iterations: 3070\ncpu: 282306.7426710098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 326660.81578949356,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 326655.48872180464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 371659.56586828944,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 371637.98118049663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6355.217371965919,
            "unit": "ns/iter",
            "extra": "iterations: 110166\ncpu: 6355.004266289055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5129.926276199971,
            "unit": "ns/iter",
            "extra": "iterations: 136401\ncpu: 5129.798168635129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5098.205874015743,
            "unit": "ns/iter",
            "extra": "iterations: 137589\ncpu: 5098.164097420582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5086.952294496848,
            "unit": "ns/iter",
            "extra": "iterations: 137699\ncpu: 5086.867007022561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7954.956483730745,
            "unit": "ns/iter",
            "extra": "iterations: 88082\ncpu: 7954.658159442338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26002.93484935695,
            "unit": "ns/iter",
            "extra": "iterations: 31266\ncpu: 26001.931810912818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129909.51783276751,
            "unit": "ns/iter",
            "extra": "iterations: 6589\ncpu: 129906.7840339961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100385.7003529447,
            "unit": "ns/iter",
            "extra": "iterations: 8500\ncpu: 100382.34117647077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100118.69314587922,
            "unit": "ns/iter",
            "extra": "iterations: 8535\ncpu: 100112.85295840653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95418.1925187491,
            "unit": "ns/iter",
            "extra": "iterations: 8929\ncpu: 95415.47765707258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 215453.21520526172,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 215446.17439883368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1833588.833663514,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1833527.3267326772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1445605.9174455386,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1445527.1028037365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1422583.2676923417,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1422520.4615384585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1432021.9169230068,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1431982.769230767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 779098.9637436812,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 779067.0320404742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1394451.6266865716,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1394328.03598201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34889.60313469122,
            "unit": "ns/iter",
            "extra": "iterations: 23862\ncpu: 34888.848378174516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172329.40569040738,
            "unit": "ns/iter",
            "extra": "iterations: 5026\ncpu: 172322.7417429363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130414.07122378143,
            "unit": "ns/iter",
            "extra": "iterations: 6627\ncpu: 130411.18153010459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128585.4963449305,
            "unit": "ns/iter",
            "extra": "iterations: 6703\ncpu: 128579.03923616263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123307.72521367234,
            "unit": "ns/iter",
            "extra": "iterations: 7020\ncpu: 123303.2051282053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 234842.06661272247,
            "unit": "ns/iter",
            "extra": "iterations: 3708\ncpu: 234838.5922330096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1870334.4828974486,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1870272.837022129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1493960.8699840093,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1493906.5810593842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1459396.3516484208,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1459356.3579277813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1460740.7680249834,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1460693.57366771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 824389.6663692921,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 824352.7207850097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1426718.4270352642,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1426664.3625192023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5046393.540000054,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5046125.999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3100196.887043167,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3100151.162790704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26637.197283543865,
            "unit": "ns/iter",
            "extra": "iterations: 30849\ncpu: 26636.23132030207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126421.64690304665,
            "unit": "ns/iter",
            "extra": "iterations: 6797\ncpu: 126417.84610857765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 99295.96097730075,
            "unit": "ns/iter",
            "extra": "iterations: 8636\ncpu: 99293.21445113477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101326.84050961667,
            "unit": "ns/iter",
            "extra": "iterations: 8477\ncpu: 101325.22118674104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98157.30816091996,
            "unit": "ns/iter",
            "extra": "iterations: 8700\ncpu: 98152.62068965529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 200658.33455715576,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 200650.642496559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1848751.1289683266,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1848722.8174603246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1450897.7142857895,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1450867.7018633625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1432655.0261536725,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1432615.3846153799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1426847.666156235,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1426805.0535987746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 788397.086148718,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 788370.4391891902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1401136.2572741543,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1401096.4777947904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2837.7685835127318,
            "unit": "ns/iter",
            "extra": "iterations: 246603\ncpu: 2837.6576927288042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18877.12215387931,
            "unit": "ns/iter",
            "extra": "iterations: 37068\ncpu: 18876.41361821516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14081.226221132254,
            "unit": "ns/iter",
            "extra": "iterations: 49708\ncpu: 14080.984952120494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15370.724619568651,
            "unit": "ns/iter",
            "extra": "iterations: 45606\ncpu: 15370.59158882597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11193.226232760346,
            "unit": "ns/iter",
            "extra": "iterations: 62502\ncpu: 11192.827429522247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71446.06669381843,
            "unit": "ns/iter",
            "extra": "iterations: 9821\ncpu: 71442.93860095747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134194.07277038676,
            "unit": "ns/iter",
            "extra": "iterations: 5483\ncpu: 134190.91738099625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31133.320580122654,
            "unit": "ns/iter",
            "extra": "iterations: 22478\ncpu: 31132.34273511898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30718.554889257255,
            "unit": "ns/iter",
            "extra": "iterations: 22846\ncpu: 30717.547929615866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30644.193587889407,
            "unit": "ns/iter",
            "extra": "iterations: 22863\ncpu: 30642.5972094648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59737.48721249747,
            "unit": "ns/iter",
            "extra": "iterations: 11652\ncpu: 59734.13147957436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57774.01937664602,
            "unit": "ns/iter",
            "extra": "iterations: 12128\ncpu: 57773.01286279691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21567.345738961547,
            "unit": "ns/iter",
            "extra": "iterations: 32539\ncpu: 21566.981161068295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108345.20746823179,
            "unit": "ns/iter",
            "extra": "iterations: 6454\ncpu: 108342.48528044668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90210.96860120812,
            "unit": "ns/iter",
            "extra": "iterations: 7771\ncpu: 90207.00038605141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90072.44859932456,
            "unit": "ns/iter",
            "extra": "iterations: 7782\ncpu: 90068.51709072247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89157.3554961145,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 89153.78932620071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 131497.6871257356,
            "unit": "ns/iter",
            "extra": "iterations: 5344\ncpu: 131494.10553892137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 551665.2237153933,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 551639.9209486245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 458699.1997381017,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 458678.9783890021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 436008.8366179364,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 435996.69421487406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 436590.5138190362,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 436572.4246231172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 284932.9943043303,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 284924.1659886072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 439138.49780836253,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 439119.8497182233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21528.86053180902,
            "unit": "ns/iter",
            "extra": "iterations: 32079\ncpu: 21528.501511892413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111690.4358932795,
            "unit": "ns/iter",
            "extra": "iterations: 6185\ncpu: 111686.5966046878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90482.89322275243,
            "unit": "ns/iter",
            "extra": "iterations: 7717\ncpu: 90479.13697032546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87347.81595799781,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 87344.04456967232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88082.92916615045,
            "unit": "ns/iter",
            "extra": "iterations: 8047\ncpu: 88078.57586678122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130763.06530536726,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 130751.41648270762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 538716.9596837979,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 538687.7470355692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 446723.6762268627,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 446696.74952199147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 439830.2931143204,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 439816.2349968482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 437539.88242654526,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 437532.64540337585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 278741.462977724,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 278732.5636942624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 437412.6616822421,
            "unit": "ns/iter",
            "extra": "iterations: 1605\ncpu: 437395.70093457855 ns\nthreads: 1"
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
        "date": 1705574900780,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7350.85311618193,
            "unit": "ns/iter",
            "extra": "iterations: 94619\ncpu: 7350.44230017227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53528.68049999415,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53527.54999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98101.80467769023,
            "unit": "ns/iter",
            "extra": "iterations: 8765\ncpu: 98098.84768967483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143180.24189526954,
            "unit": "ns/iter",
            "extra": "iterations: 6015\ncpu: 143172.4189526184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189521.95085888772,
            "unit": "ns/iter",
            "extra": "iterations: 4599\ncpu: 189518.91715590344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 233149.6495956815,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 233145.63342318046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 277921.2585709668,
            "unit": "ns/iter",
            "extra": "iterations: 3121\ncpu: 277925.85709708417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 323027.46829809435,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 323019.72562106047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 368131.07607777586,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 368128.44463229075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6316.099215352449,
            "unit": "ns/iter",
            "extra": "iterations: 111515\ncpu: 6316.025646773975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5050.643435768924,
            "unit": "ns/iter",
            "extra": "iterations: 137518\ncpu: 5050.67554792828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5082.078022636717,
            "unit": "ns/iter",
            "extra": "iterations: 136768\ncpu: 5082.101076275149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5123.25602471261,
            "unit": "ns/iter",
            "extra": "iterations: 136936\ncpu: 5123.090348776073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7886.77022891321,
            "unit": "ns/iter",
            "extra": "iterations: 88549\ncpu: 7886.528362827353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26009.295351657023,
            "unit": "ns/iter",
            "extra": "iterations: 31366\ncpu: 26007.935344003046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 135530.0468774757,
            "unit": "ns/iter",
            "extra": "iterations: 6293\ncpu: 135526.77578261576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103615.60759031838,
            "unit": "ns/iter",
            "extra": "iterations: 8221\ncpu: 103611.16652475379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103653.5344973918,
            "unit": "ns/iter",
            "extra": "iterations: 8247\ncpu: 103650.9397356616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100280.06713864428,
            "unit": "ns/iter",
            "extra": "iterations: 8475\ncpu: 100274.20648967517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 204771.87307071552,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 204763.6028564848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1833923.7658728908,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1833844.444444446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1434072.4089506033,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1434031.172839507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1451117.6248038674,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1451065.4631083207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1427214.6251920338,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1427153.6098310284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 786043.5395744563,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 786005.3617021258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1421310.102102097,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1421255.1051051049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34826.01798892993,
            "unit": "ns/iter",
            "extra": "iterations: 23848\ncpu: 34825.28094599127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178343.08635897638,
            "unit": "ns/iter",
            "extra": "iterations: 4875\ncpu: 178335.22051282102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 133622.09975139378,
            "unit": "ns/iter",
            "extra": "iterations: 6436\ncpu: 133616.33001864504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 133345.249574769,
            "unit": "ns/iter",
            "extra": "iterations: 6467\ncpu: 133336.18370187067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127783.03788440401,
            "unit": "ns/iter",
            "extra": "iterations: 6731\ncpu: 127780.43381369792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 222841.14877102055,
            "unit": "ns/iter",
            "extra": "iterations: 3865\ncpu: 222833.42820181063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1904587.7122447547,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1904542.6530612318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1489251.7328000395,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1489154.2400000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1478635.8648648644,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1478607.7901430822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1461628.3432600994,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1461514.1065830702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 806223.5684574663,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 806207.5389947995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1429705.685582728,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1429623.4662576756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6651225.435714586,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6650927.857142821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3153168.1554055796,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3153067.2297297386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24471.20308252825,
            "unit": "ns/iter",
            "extra": "iterations: 33479\ncpu: 24469.494309865815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132244.17163836057,
            "unit": "ns/iter",
            "extra": "iterations: 6537\ncpu: 132241.74697873558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103963.96476143677,
            "unit": "ns/iter",
            "extra": "iterations: 8258\ncpu: 103960.6926616615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106200.79866353286,
            "unit": "ns/iter",
            "extra": "iterations: 8081\ncpu: 106196.0400940482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104269.619598298,
            "unit": "ns/iter",
            "extra": "iterations: 8215\ncpu: 104271.40596469866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 185579.7547491852,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 185575.45357524068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1862366.303393384,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1862363.4730538994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1431870.8538460738,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1431829.846153844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1436378.3113497815,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1436377.3006134962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1408833.9003020884,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1408833.0815709888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 778502.4732441739,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 778507.8595317698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1389335.1872213942,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1389329.5690936132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2831.4657290800037,
            "unit": "ns/iter",
            "extra": "iterations: 247586\ncpu: 2831.484009596664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18856.652224164452,
            "unit": "ns/iter",
            "extra": "iterations: 37205\ncpu: 18856.546163150204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14721.774704719015,
            "unit": "ns/iter",
            "extra": "iterations: 47582\ncpu: 14721.831785128861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14334.55111011154,
            "unit": "ns/iter",
            "extra": "iterations: 48914\ncpu: 14334.423682381374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10540.097446056108,
            "unit": "ns/iter",
            "extra": "iterations: 66642\ncpu: 10540.1713634045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 72170.72503871148,
            "unit": "ns/iter",
            "extra": "iterations: 9685\ncpu: 72170.61435209111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 127987.56714781687,
            "unit": "ns/iter",
            "extra": "iterations: 5473\ncpu: 127986.22327790987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30762.766286897917,
            "unit": "ns/iter",
            "extra": "iterations: 22733\ncpu: 30762.279505564667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30653.897526968365,
            "unit": "ns/iter",
            "extra": "iterations: 22806\ncpu: 30653.692010874525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30806.777557669127,
            "unit": "ns/iter",
            "extra": "iterations: 22716\ncpu: 30806.58566649071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63257.270193498225,
            "unit": "ns/iter",
            "extra": "iterations: 11266\ncpu: 63256.470797088725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57795.687768593925,
            "unit": "ns/iter",
            "extra": "iterations: 12100\ncpu: 57795.89256198345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21293.512166227036,
            "unit": "ns/iter",
            "extra": "iterations: 32919\ncpu: 21293.38983565733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108702.17802028134,
            "unit": "ns/iter",
            "extra": "iterations: 6415\ncpu: 108702.7591582231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88987.89808351058,
            "unit": "ns/iter",
            "extra": "iterations: 7879\ncpu: 88989.40220840267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90620.17228464164,
            "unit": "ns/iter",
            "extra": "iterations: 7743\ncpu: 90619.51440010231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88825.71291560057,
            "unit": "ns/iter",
            "extra": "iterations: 7820\ncpu: 88826.12531969452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132811.69303558426,
            "unit": "ns/iter",
            "extra": "iterations: 5284\ncpu: 132809.63285389863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 548407.0148669676,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 548399.8435054695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 443733.1702668508,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 443723.88818297384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 450554.6872189759,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 450556.71162491536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 445476.06305731146,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 445471.7834394873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 283234.96716658137,
            "unit": "ns/iter",
            "extra": "iterations: 2467\ncpu: 283237.1706526178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 437797.0507518858,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 437804.8245614007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22139.535549518154,
            "unit": "ns/iter",
            "extra": "iterations: 31646\ncpu: 22139.61954117406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113750.077710939,
            "unit": "ns/iter",
            "extra": "iterations: 6151\ncpu: 113747.60201593314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89629.93647749604,
            "unit": "ns/iter",
            "extra": "iterations: 7824\ncpu: 89628.68098159521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89997.77334018059,
            "unit": "ns/iter",
            "extra": "iterations: 7787\ncpu: 89994.60639527455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89043.38248027048,
            "unit": "ns/iter",
            "extra": "iterations: 7854\ncpu: 89040.6035141339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 131883.78438803213,
            "unit": "ns/iter",
            "extra": "iterations: 5278\ncpu: 131882.92913982726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 568958.9392307845,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 568942.9230769223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 439201.713656358,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 439204.5940843261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 442311.3561904843,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 442313.2063492096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 433593.03095978766,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 433585.6965944255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 280836.9991970784,
            "unit": "ns/iter",
            "extra": "iterations: 2491\ncpu: 280830.0281011652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 434577.64993809233,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 434561.0904584912 ns\nthreads: 1"
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
        "date": 1705773270342,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7581.8067738784375,
            "unit": "ns/iter",
            "extra": "iterations: 94392\ncpu: 7581.565175014833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54688.75980000121,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54685.62 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100863.39741479544,
            "unit": "ns/iter",
            "extra": "iterations: 8510\ncpu: 100851.93889541716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147372.54917750577,
            "unit": "ns/iter",
            "extra": "iterations: 5836\ncpu: 147359.04729266622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192661.58342589784,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 192642.52388358128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238440.7830993749,
            "unit": "ns/iter",
            "extra": "iterations: 3633\ncpu: 238418.08422791093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284527.8523026488,
            "unit": "ns/iter",
            "extra": "iterations: 3040\ncpu: 284499.2434210527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336175.41118295706,
            "unit": "ns/iter",
            "extra": "iterations: 2629\ncpu: 336129.51692658814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 375503.32037993084,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 375454.31778929237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6249.828136726181,
            "unit": "ns/iter",
            "extra": "iterations: 111932\ncpu: 6249.520244434127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5057.983960665739,
            "unit": "ns/iter",
            "extra": "iterations: 138098\ncpu: 5057.468609248501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5050.529631388468,
            "unit": "ns/iter",
            "extra": "iterations: 139008\ncpu: 5050.070499539585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5108.988659981959,
            "unit": "ns/iter",
            "extra": "iterations: 137125\ncpu: 5108.638103919777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8116.944346217845,
            "unit": "ns/iter",
            "extra": "iterations: 86535\ncpu: 8116.510082625544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26912.786147874336,
            "unit": "ns/iter",
            "extra": "iterations: 30147\ncpu: 26911.48041264472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129926.95658774214,
            "unit": "ns/iter",
            "extra": "iterations: 6588\ncpu: 129915.37644201577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102370.86104097961,
            "unit": "ns/iter",
            "extra": "iterations: 8319\ncpu: 102367.01526625792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102588.97989163561,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 102584.81637567739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98434.74320241362,
            "unit": "ns/iter",
            "extra": "iterations: 8606\ncpu: 98427.32976992801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 204834.16608996646,
            "unit": "ns/iter",
            "extra": "iterations: 4335\ncpu: 204818.75432525895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1849721.4721115285,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1849660.5577689263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1446632.1273291865,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1446499.6894409915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1431229.592592648,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1431120.3703703692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1425080.424196132,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1424956.5084226613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 781420.0135249381,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 781367.4556213001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1389735.4116767552,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1389619.161676646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35905.69659563181,
            "unit": "ns/iter",
            "extra": "iterations: 23088\ncpu: 35903.465003465026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 180881.42732195376,
            "unit": "ns/iter",
            "extra": "iterations: 4802\ncpu: 180867.7426072468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134438.97734021873,
            "unit": "ns/iter",
            "extra": "iterations: 6399\ncpu: 134431.30176590086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130539.67505686692,
            "unit": "ns/iter",
            "extra": "iterations: 6595\ncpu: 130533.88931008332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126907.55581983,
            "unit": "ns/iter",
            "extra": "iterations: 6727\ncpu: 126904.62316039814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 234538.31375202877,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 234536.6811044937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1890474.7018256618,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1890400.6085192747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1509097.7073169798,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1509071.5447154534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1495201.6169872833,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1495139.4230769197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1459245.1711145304,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1459224.0188383034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 824164.7475642016,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 824138.8839681112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1441855.1565891593,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1441821.5503876044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5055774.0399995055,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5055498.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3082481.514851598,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3082380.858085789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27402.70833890793,
            "unit": "ns/iter",
            "extra": "iterations: 29908\ncpu: 27401.70522936992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 130465.87607676696,
            "unit": "ns/iter",
            "extra": "iterations: 6617\ncpu: 130462.82303158543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 101308.64071999742,
            "unit": "ns/iter",
            "extra": "iterations: 8389\ncpu: 101302.77744665631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103242.80979966177,
            "unit": "ns/iter",
            "extra": "iterations: 8286\ncpu: 103240.55032585138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101682.52664838606,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 101680.36246572084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 188675.91019787255,
            "unit": "ns/iter",
            "extra": "iterations: 4599\ncpu: 188670.79799956508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1850220.7400794239,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1850123.0158730177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1452692.1519379264,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1452679.8449612325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1433536.041860347,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1433479.8449612479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1422175.7792998878,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1422165.1445966498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 786404.6382080071,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 786372.5274725294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1389793.250746152,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1389778.5074626862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2824.1041187488636,
            "unit": "ns/iter",
            "extra": "iterations: 248255\ncpu: 2823.986626654023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19062.237021115943,
            "unit": "ns/iter",
            "extra": "iterations: 36752\ncpu: 19062.080975184872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15236.365544537757,
            "unit": "ns/iter",
            "extra": "iterations: 47499\ncpu: 15235.61338133424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14892.195654026356,
            "unit": "ns/iter",
            "extra": "iterations: 46940\ncpu: 14892.08351086483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11207.839271158338,
            "unit": "ns/iter",
            "extra": "iterations: 62565\ncpu: 11207.892591704613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71750.90615384342,
            "unit": "ns/iter",
            "extra": "iterations: 9750\ncpu: 71748.48205128244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 128246.87442797037,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 128242.98004759298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32129.052319841383,
            "unit": "ns/iter",
            "extra": "iterations: 22286\ncpu: 32126.729785515625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31374.365439597957,
            "unit": "ns/iter",
            "extra": "iterations: 22384\ncpu: 31373.271086490415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31357.897239398975,
            "unit": "ns/iter",
            "extra": "iterations: 22314\ncpu: 31355.83042036397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60354.151256889,
            "unit": "ns/iter",
            "extra": "iterations: 11616\ncpu: 60352.35881542714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58492.37941744732,
            "unit": "ns/iter",
            "extra": "iterations: 11913\ncpu: 58489.188281708666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21293.823260628644,
            "unit": "ns/iter",
            "extra": "iterations: 32828\ncpu: 21293.307542341947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 107066.00428069207,
            "unit": "ns/iter",
            "extra": "iterations: 6541\ncpu: 107066.48830454038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88724.57771298036,
            "unit": "ns/iter",
            "extra": "iterations: 7888\ncpu: 88719.19371196884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90110.0554412267,
            "unit": "ns/iter",
            "extra": "iterations: 7774\ncpu: 90106.94623102703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88917.35703421665,
            "unit": "ns/iter",
            "extra": "iterations: 7890\ncpu: 88832.73764258523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 134590.01991573587,
            "unit": "ns/iter",
            "extra": "iterations: 5222\ncpu: 134575.79471466754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 552308.4711005322,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 552267.7751385594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 454029.71586474654,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 453990.1170351129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 449390.8412292068,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 449349.4878361066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 445942.70509555156,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 445925.1592356687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 282968.2838657333,
            "unit": "ns/iter",
            "extra": "iterations: 2473\ncpu: 282962.3938536178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 441758.8237523386,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 441721.6677195169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21819.85176192301,
            "unit": "ns/iter",
            "extra": "iterations: 32124\ncpu: 21819.28464699267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111184.44680514431,
            "unit": "ns/iter",
            "extra": "iterations: 6307\ncpu: 111181.44918344605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89184.47397225464,
            "unit": "ns/iter",
            "extra": "iterations: 7857\ncpu: 89175.461372025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90325.94951706253,
            "unit": "ns/iter",
            "extra": "iterations: 7765\ncpu: 90318.78943979417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89175.93792224264,
            "unit": "ns/iter",
            "extra": "iterations: 7845\ncpu: 89169.40726577437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 129936.92805489479,
            "unit": "ns/iter",
            "extra": "iterations: 5393\ncpu: 129926.60856666067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 549103.2970219244,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 549091.222570531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 448653.66047404136,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 448618.8981422215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 456933.6523157119,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 456899.86953685817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 444185.09119695483,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 444149.4616846114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 288028.1582852434,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 288009.52184665995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 443404.2530044397,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 443368.8804554146 ns\nthreads: 1"
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
        "date": 1705774766079,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7354.164198258025,
            "unit": "ns/iter",
            "extra": "iterations: 95068\ncpu: 7353.927714898809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52594.80349999421,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52591.030000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97367.62920454112,
            "unit": "ns/iter",
            "extra": "iterations: 8800\ncpu: 97363.26136363638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 142392.60757399854,
            "unit": "ns/iter",
            "extra": "iterations: 6047\ncpu: 142386.125351414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187788.54825416545,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 187779.78746475824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 231819.3896763779,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 231808.63867344195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 275228.1740787956,
            "unit": "ns/iter",
            "extra": "iterations: 3148\ncpu: 275217.2490470139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 321292.8111603712,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 321271.8773096821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 363461.59489970386,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 363449.1638795988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6302.652377961019,
            "unit": "ns/iter",
            "extra": "iterations: 111440\ncpu: 6302.294508255561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5090.007618505466,
            "unit": "ns/iter",
            "extra": "iterations: 137166\ncpu: 5089.76058206843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5096.737848577073,
            "unit": "ns/iter",
            "extra": "iterations: 138420\ncpu: 5096.431151567696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5058.945357534402,
            "unit": "ns/iter",
            "extra": "iterations: 137567\ncpu: 5058.896392303383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7740.61336359631,
            "unit": "ns/iter",
            "extra": "iterations: 90320\ncpu: 7740.259078830825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26195.237480222375,
            "unit": "ns/iter",
            "extra": "iterations: 30971\ncpu: 26194.136450227645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138544.61221200708,
            "unit": "ns/iter",
            "extra": "iterations: 6207\ncpu: 138538.11825358463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107188.19295827193,
            "unit": "ns/iter",
            "extra": "iterations: 7981\ncpu: 107183.92432026069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 106340.80765861137,
            "unit": "ns/iter",
            "extra": "iterations: 7991\ncpu: 106334.58891252655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 103470.2553681965,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 103465.5222613129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 202253.4691921322,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 202239.34276586096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1791715.4427184039,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1791611.6504854364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1396872.8601502902,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1396783.6090225547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1409922.2473444464,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1409870.7132018171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1389163.6008968998,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1389059.192825115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 767699.5901911429,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 767664.5054031602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1360274.0850438827,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1360195.8944281514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35242.3028196036,
            "unit": "ns/iter",
            "extra": "iterations: 23443\ncpu: 35240.668856374985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178610.8880888564,
            "unit": "ns/iter",
            "extra": "iterations: 4861\ncpu: 178599.77370911284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137442.68027428555,
            "unit": "ns/iter",
            "extra": "iterations: 6271\ncpu: 137437.0435337263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135209.2745251894,
            "unit": "ns/iter",
            "extra": "iterations: 6371\ncpu: 135196.5468529275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 131646.26313370725,
            "unit": "ns/iter",
            "extra": "iterations: 6529\ncpu: 131639.86827998192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 234322.26209897542,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 234307.04187058198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1832320.21104532,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1832224.6548323492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1441603.247677898,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1441553.4055727567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1449048.9750389596,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1449005.7722308917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1419042.4679877819,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1418984.1463414617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 805040.5402597289,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 805012.2077922084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1395761.8828829585,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1395709.1591591614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6624360.750000084,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6624172.142857176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3121991.5585280894,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3121929.765886278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26696.016375368392,
            "unit": "ns/iter",
            "extra": "iterations: 30839\ncpu: 26694.737183436588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134030.2579787393,
            "unit": "ns/iter",
            "extra": "iterations: 6392\ncpu: 134028.14455569518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106089.5255790894,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 106085.8788554446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108514.75704003694,
            "unit": "ns/iter",
            "extra": "iterations: 7919\ncpu: 108511.11251420708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 107352.61197200195,
            "unit": "ns/iter",
            "extra": "iterations: 8002\ncpu: 107347.23819045247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187727.96618252937,
            "unit": "ns/iter",
            "extra": "iterations: 4613\ncpu: 187721.52612182836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1817648.6152343685,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1817567.7734375007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1394377.576751061,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1394356.6318926974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1396377.6751497218,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1396301.4970059872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1368078.6108663727,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1368049.9265785662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 775114.9593022707,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 775090.3654485013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1354293.7321688235,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1354236.8267831171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2859.1167460412044,
            "unit": "ns/iter",
            "extra": "iterations: 245670\ncpu: 2859.0409899458537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19078.676485029195,
            "unit": "ns/iter",
            "extra": "iterations: 36666\ncpu: 19077.712322042345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14763.807116776976,
            "unit": "ns/iter",
            "extra": "iterations: 47381\ncpu: 14763.109685316915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14824.54889463111,
            "unit": "ns/iter",
            "extra": "iterations: 47224\ncpu: 14823.875571743127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11154.886436635865,
            "unit": "ns/iter",
            "extra": "iterations: 62890\ncpu: 11154.2629988869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 72372.27831549442,
            "unit": "ns/iter",
            "extra": "iterations: 9712\ncpu: 72370.212108731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125305.97674001052,
            "unit": "ns/iter",
            "extra": "iterations: 5589\ncpu: 125299.74950796245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30348.608586188184,
            "unit": "ns/iter",
            "extra": "iterations: 23037\ncpu: 30347.710205322004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30295.728017594673,
            "unit": "ns/iter",
            "extra": "iterations: 23189\ncpu: 30294.51032817287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29875.633972720083,
            "unit": "ns/iter",
            "extra": "iterations: 23460\ncpu: 29874.73572037509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62781.93313614388,
            "unit": "ns/iter",
            "extra": "iterations: 11157\ncpu: 62779.76158465529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57043.452623019206,
            "unit": "ns/iter",
            "extra": "iterations: 12295\ncpu: 57040.95160634398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20795.68308434046,
            "unit": "ns/iter",
            "extra": "iterations: 33602\ncpu: 20794.955657401348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 107112.28814338133,
            "unit": "ns/iter",
            "extra": "iterations: 6528\ncpu: 107108.14950980387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87710.35932836153,
            "unit": "ns/iter",
            "extra": "iterations: 8040\ncpu: 87707.84825870485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88393.12837068179,
            "unit": "ns/iter",
            "extra": "iterations: 7899\ncpu: 88389.1885048752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87477.15716969743,
            "unit": "ns/iter",
            "extra": "iterations: 7985\ncpu: 87473.32498434605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 131461.16972993844,
            "unit": "ns/iter",
            "extra": "iterations: 5332\ncpu: 131458.4208552129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 536346.8865900387,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 536326.5900383149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 440762.2183763239,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 440753.36689742294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 438527.7235772664,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 438506.0037523429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 439597.09318321897,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 439580.86303940485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 283860.9825770131,
            "unit": "ns/iter",
            "extra": "iterations: 2468\ncpu: 283851.5802269069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 432614.33436339174,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 432599.81458590593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21650.138889747817,
            "unit": "ns/iter",
            "extra": "iterations: 32299\ncpu: 21649.332796680977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111985.98527998911,
            "unit": "ns/iter",
            "extra": "iterations: 6250\ncpu: 111981.04000000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88367.84311498418,
            "unit": "ns/iter",
            "extra": "iterations: 7923\ncpu: 88363.88994067862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88493.81826197146,
            "unit": "ns/iter",
            "extra": "iterations: 7940\ncpu: 88491.19647355039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87270.21323529337,
            "unit": "ns/iter",
            "extra": "iterations: 8024\ncpu: 87265.54087736887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127033.71566659123,
            "unit": "ns/iter",
            "extra": "iterations: 5483\ncpu: 127030.18420572644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 536494.6252873925,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 536470.8045976993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 432001.705049261,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 431988.85467979626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 435208.18781096477,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 435195.211442788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 425301.2784194354,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 425298.1762917891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276978.1616600782,
            "unit": "ns/iter",
            "extra": "iterations: 2530\ncpu: 276958.30039525713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 426066.9737644916,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 426058.8163514319 ns\nthreads: 1"
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
        "date": 1705777727791,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7387.291300861294,
            "unit": "ns/iter",
            "extra": "iterations: 94768\ncpu: 7387.086358264394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53752.79099999943,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53751.37000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98246.07555150341,
            "unit": "ns/iter",
            "extra": "iterations: 8749\ncpu: 98241.53617556291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143887.06317719194,
            "unit": "ns/iter",
            "extra": "iterations: 5999\ncpu: 143881.9636606101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189349.178181021,
            "unit": "ns/iter",
            "extra": "iterations: 4574\ncpu: 189347.55137735026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 233648.02296055033,
            "unit": "ns/iter",
            "extra": "iterations: 3702\ncpu: 233637.16909778494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 279181.4063103651,
            "unit": "ns/iter",
            "extra": "iterations: 3106\ncpu: 279168.3837733417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 323514.8507073902,
            "unit": "ns/iter",
            "extra": "iterations: 2686\ncpu: 323503.23901712574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 371430.80305605533,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 371406.83361629874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6267.456482296186,
            "unit": "ns/iter",
            "extra": "iterations: 111334\ncpu: 6267.270555266142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5044.637585975634,
            "unit": "ns/iter",
            "extra": "iterations: 138557\ncpu: 5044.552061606422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5070.560463494406,
            "unit": "ns/iter",
            "extra": "iterations: 139117\ncpu: 5070.294069021044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5064.209036959509,
            "unit": "ns/iter",
            "extra": "iterations: 139693\ncpu: 5064.006786309984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8077.400101908295,
            "unit": "ns/iter",
            "extra": "iterations: 86353\ncpu: 8076.987481616164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26162.353639265722,
            "unit": "ns/iter",
            "extra": "iterations: 31009\ncpu: 26161.391853977915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127928.90921327945,
            "unit": "ns/iter",
            "extra": "iterations: 6686\ncpu: 127921.52258450494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97416.79184280755,
            "unit": "ns/iter",
            "extra": "iterations: 8753\ncpu: 97413.70958528516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99548.1915216624,
            "unit": "ns/iter",
            "extra": "iterations: 8563\ncpu: 99546.61917552262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93974.45820467868,
            "unit": "ns/iter",
            "extra": "iterations: 9068\ncpu: 93972.11071901176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 204709.37278785996,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 204705.05630889419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1845765.1192843253,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1845725.2485089484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1448991.8703125326,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1448968.2812499958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1449021.879687429,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1448986.5624999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1421917.7009201522,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1421891.8711656479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 795660.4067067761,
            "unit": "ns/iter",
            "extra": "iterations: 1163\ncpu: 795641.5305245065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1412323.7254902802,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1412291.5535444946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35908.90068151095,
            "unit": "ns/iter",
            "extra": "iterations: 23037\ncpu: 35906.41142509881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 168033.782397498,
            "unit": "ns/iter",
            "extra": "iterations: 5147\ncpu: 168023.0814066449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 127519.77367171951,
            "unit": "ns/iter",
            "extra": "iterations: 6738\ncpu: 127515.74651231818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128537.56331097036,
            "unit": "ns/iter",
            "extra": "iterations: 6705\ncpu: 128531.60328113356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123073.7275608802,
            "unit": "ns/iter",
            "extra": "iterations: 6941\ncpu: 123067.33900014451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 226494.61193641167,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 226482.1214490488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1887769.981781432,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1887707.0850202364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1478993.387301548,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1478903.650793653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1496216.84083598,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1496131.6720257204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1466638.091338559,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1466562.5196850402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 836433.5724572042,
            "unit": "ns/iter",
            "extra": "iterations: 1111\ncpu: 836385.1485148484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1436699.0154319776,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1436666.666666665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5128849.280000622,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5128614.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3214219.4270833437,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3214153.47222224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26557.072120211185,
            "unit": "ns/iter",
            "extra": "iterations: 30879\ncpu: 26556.886557207265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126405.9684876954,
            "unit": "ns/iter",
            "extra": "iterations: 6791\ncpu: 126404.78574584002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100206.5092388204,
            "unit": "ns/iter",
            "extra": "iterations: 8605\ncpu: 100202.59151656048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 99869.20104712533,
            "unit": "ns/iter",
            "extra": "iterations: 8595\ncpu: 99866.9109947646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98288.10659187062,
            "unit": "ns/iter",
            "extra": "iterations: 8556\ncpu: 98284.60729312818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 190067.15828596833,
            "unit": "ns/iter",
            "extra": "iterations: 4574\ncpu: 190065.609969391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1866904.244000125,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1866798.3999999934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1434710.1833590134,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1434676.7334360627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1428795.2730060336,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1428763.0368098153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1420436.0579269035,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1420425.0000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 786092.44388186,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 786067.4261603337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1392333.17814362,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1392261.826347303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2772.3113261420913,
            "unit": "ns/iter",
            "extra": "iterations: 252160\ncpu: 2772.2065355329905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18642.97821397088,
            "unit": "ns/iter",
            "extra": "iterations: 37547\ncpu: 18641.9234559353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14021.27972727151,
            "unit": "ns/iter",
            "extra": "iterations: 50013\ncpu: 14020.004798752214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14152.298635296509,
            "unit": "ns/iter",
            "extra": "iterations: 49388\ncpu: 14150.939499473589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11082.289594048625,
            "unit": "ns/iter",
            "extra": "iterations: 63185\ncpu: 11081.62538577194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71360.99969510057,
            "unit": "ns/iter",
            "extra": "iterations: 9839\ncpu: 71356.27604431352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121557.99722464352,
            "unit": "ns/iter",
            "extra": "iterations: 5765\ncpu: 121548.48222029375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30829.2097828007,
            "unit": "ns/iter",
            "extra": "iterations: 22652\ncpu: 30828.34628288875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31214.546988806967,
            "unit": "ns/iter",
            "extra": "iterations: 22516\ncpu: 31213.523716468153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30690.393171374806,
            "unit": "ns/iter",
            "extra": "iterations: 22845\ncpu: 30689.660757277383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64059.882568141555,
            "unit": "ns/iter",
            "extra": "iterations: 10934\ncpu: 64056.76788000722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58533.04706570652,
            "unit": "ns/iter",
            "extra": "iterations: 11962\ncpu: 58509.91472997808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21381.986678858957,
            "unit": "ns/iter",
            "extra": "iterations: 32805\ncpu: 21367.800640146295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116119.7489213555,
            "unit": "ns/iter",
            "extra": "iterations: 6026\ncpu: 116115.58247593709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90321.2058177075,
            "unit": "ns/iter",
            "extra": "iterations: 7735\ncpu: 90318.02197802303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90487.48658409811,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 90486.70020639738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90072.87448559485,
            "unit": "ns/iter",
            "extra": "iterations: 7776\ncpu: 90068.7885802469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 139294.34923474133,
            "unit": "ns/iter",
            "extra": "iterations: 5031\ncpu: 139285.47008547012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 553617.4260701063,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 553591.1478599234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 447765.7823302994,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 447739.0524967973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 452349.75935485517,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 452285.0322580637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 445868.60611851775,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 445827.4697259423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 288865.72667217575,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 288849.3806771303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443163.8771374257,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 443145.9151361624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22333.55411337981,
            "unit": "ns/iter",
            "extra": "iterations: 31434\ncpu: 22332.65254183398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115405.16652940746,
            "unit": "ns/iter",
            "extra": "iterations: 6071\ncpu: 115396.09619502597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90767.33324726074,
            "unit": "ns/iter",
            "extra": "iterations: 7745\ncpu: 90755.35183989698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90620.81561569957,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 90612.39155768452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89005.63351185426,
            "unit": "ns/iter",
            "extra": "iterations: 7842\ncpu: 88998.96710023023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 133901.5987358833,
            "unit": "ns/iter",
            "extra": "iterations: 5221\ncpu: 133893.9283662144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 541775.5034856468,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 541736.7157242402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 442367.6668769618,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 442350.78864353447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 444707.1326984091,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 444668.88888888346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 436958.77666247607,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 436921.7691342456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 287886.0843968565,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 287866.44709757116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 436410.8143036614,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 436368.94604767417 ns\nthreads: 1"
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
        "date": 1705953499125,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7609.332518522819,
            "unit": "ns/iter",
            "extra": "iterations: 92046\ncpu: 7608.731503813312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56762.16580000073,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56760.959999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 104908.0200660782,
            "unit": "ns/iter",
            "extra": "iterations: 8173\ncpu: 104907.79395570779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 152254.57800917554,
            "unit": "ns/iter",
            "extra": "iterations: 5666\ncpu: 152253.4592304977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 200158.35215178662,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 200158.74595094874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 247621.17782844437,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 247610.28783129095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 296735.464139342,
            "unit": "ns/iter",
            "extra": "iterations: 2928\ncpu: 296724.59016393457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 343042.2210857597,
            "unit": "ns/iter",
            "extra": "iterations: 2542\ncpu: 343031.5106215578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 392345.03811654664,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 392326.905829597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6459.696163372473,
            "unit": "ns/iter",
            "extra": "iterations: 108611\ncpu: 6459.555661949526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5240.352338086378,
            "unit": "ns/iter",
            "extra": "iterations: 133528\ncpu: 5240.1031993289835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5223.230961623191,
            "unit": "ns/iter",
            "extra": "iterations: 134741\ncpu: 5223.217877260814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5214.33255433163,
            "unit": "ns/iter",
            "extra": "iterations: 134360\ncpu: 5214.038404286987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8084.416226973806,
            "unit": "ns/iter",
            "extra": "iterations: 86424\ncpu: 8084.166435249459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26698.331555351426,
            "unit": "ns/iter",
            "extra": "iterations: 30559\ncpu: 26697.71916620311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 131587.1260594714,
            "unit": "ns/iter",
            "extra": "iterations: 6489\ncpu: 131582.67837879487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102261.96357297881,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 102260.03847078633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101922.9938892914,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 101918.38006230509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95354.41669468331,
            "unit": "ns/iter",
            "extra": "iterations: 8925\ncpu: 95351.64145658295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 200723.11409849912,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 200704.99322187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1921954.7536533359,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1921886.4300626314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1503074.6268173673,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1502984.814216474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1502170.166666527,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1502109.5469255676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1471829.9603804057,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1471783.5182250375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 824963.4669642855,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 824936.5178571428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1451958.2312498614,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1451864.0624999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34852.069950489175,
            "unit": "ns/iter",
            "extra": "iterations: 23631\ncpu: 34851.27586644657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172849.65794728376,
            "unit": "ns/iter",
            "extra": "iterations: 5008\ncpu: 172842.47204472846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130877.34300911493,
            "unit": "ns/iter",
            "extra": "iterations: 6580\ncpu: 130871.88449848015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 129305.6450352923,
            "unit": "ns/iter",
            "extra": "iterations: 6657\ncpu: 129294.27670121669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126745.27815249635,
            "unit": "ns/iter",
            "extra": "iterations: 6820\ncpu: 126739.17888563067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 223351.5060458074,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 223340.69976845873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1973808.205508524,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1973711.4406779653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1544857.0165836595,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1544826.699834164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1540828.8625827853,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1540770.198675499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1520425.876019559,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1520390.5383360558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 855258.2316176557,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 855216.6360294139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1490336.6362178673,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1490319.0705128284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5213855.8100000415,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5213182.000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3150797.0808080346,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3150618.1818181784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26716.012077766536,
            "unit": "ns/iter",
            "extra": "iterations: 30552\ncpu: 26714.14637339616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 128588.50627427742,
            "unit": "ns/iter",
            "extra": "iterations: 6694\ncpu: 128585.77830893303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97448.62121040473,
            "unit": "ns/iter",
            "extra": "iterations: 8873\ncpu: 97447.83049701358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101264.31210116294,
            "unit": "ns/iter",
            "extra": "iterations: 8462\ncpu: 101261.20302528943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100008.62283372771,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 100005.10538641736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 186279.88260403989,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 186275.11205976436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1956179.113445192,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1956157.3529411904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1501155.7849116465,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1501104.494382019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1498911.9323672273,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1498842.6731079014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1469379.069291296,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1469341.73228346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 824363.6542882409,
            "unit": "ns/iter",
            "extra": "iterations: 1131\ncpu: 824316.0035366932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1451396.6006240854,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1451376.9110764428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2809.985642190275,
            "unit": "ns/iter",
            "extra": "iterations: 249272\ncpu: 2809.857103886518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19014.042257723977,
            "unit": "ns/iter",
            "extra": "iterations: 36869\ncpu: 19013.51270715239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14779.278239536045,
            "unit": "ns/iter",
            "extra": "iterations: 47283\ncpu: 14779.034748218179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15536.563848533384,
            "unit": "ns/iter",
            "extra": "iterations: 46532\ncpu: 15536.29115447441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11246.999644805703,
            "unit": "ns/iter",
            "extra": "iterations: 61938\ncpu: 11246.758048370988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 69880.73956461682,
            "unit": "ns/iter",
            "extra": "iterations: 10014\ncpu: 69878.84961054515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 131999.11555136848,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 131997.4363807724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31925.136407172162,
            "unit": "ns/iter",
            "extra": "iterations: 21927\ncpu: 31923.81082683435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31798.42968075804,
            "unit": "ns/iter",
            "extra": "iterations: 22021\ncpu: 31797.22991689735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31506.597443654475,
            "unit": "ns/iter",
            "extra": "iterations: 22141\ncpu: 31505.4965900368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64344.33510834124,
            "unit": "ns/iter",
            "extra": "iterations: 10892\ncpu: 64342.11347778164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59956.921800131735,
            "unit": "ns/iter",
            "extra": "iterations: 11688\ncpu: 59954.10677618032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21637.981090685957,
            "unit": "ns/iter",
            "extra": "iterations: 32365\ncpu: 21637.889695658836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111650.30489154521,
            "unit": "ns/iter",
            "extra": "iterations: 6317\ncpu: 111648.47237612776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89264.98307673684,
            "unit": "ns/iter",
            "extra": "iterations: 7859\ncpu: 89259.94401323357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91324.42674826828,
            "unit": "ns/iter",
            "extra": "iterations: 7679\ncpu: 91323.27125927989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89683.56422368732,
            "unit": "ns/iter",
            "extra": "iterations: 7832\ncpu: 89678.85597548493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132245.39395655232,
            "unit": "ns/iter",
            "extra": "iterations: 5295\ncpu: 132245.4202077449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 573669.6737012726,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 572186.282467529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 464571.4793333203,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 464555.33333333203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 469939.51744964963,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 469904.16107383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 461236.5257936553,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 461223.54497354926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 292184.17927289475,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 292166.86167990015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 456588.6055880672,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 456577.2579597123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22341.86442678885,
            "unit": "ns/iter",
            "extra": "iterations: 31341\ncpu: 22340.675153951684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113309.17492335099,
            "unit": "ns/iter",
            "extra": "iterations: 6197\ncpu: 113308.0361465227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90237.89408740313,
            "unit": "ns/iter",
            "extra": "iterations: 7780\ncpu: 90233.5989717227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90689.10683761258,
            "unit": "ns/iter",
            "extra": "iterations: 7722\ncpu: 90679.79797979769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88987.02382773312,
            "unit": "ns/iter",
            "extra": "iterations: 7848\ncpu: 88988.02242609649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 131081.07695188408,
            "unit": "ns/iter",
            "extra": "iterations: 5341\ncpu: 131073.60044935514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 560183.2014389097,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 560143.5651478863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 454598.7542262351,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 454574.90247073997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 459007.6143232963,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 459012.549277262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 452050.8304319319,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 452055.5770470681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 289478.22781674686,
            "unit": "ns/iter",
            "extra": "iterations: 2423\ncpu: 289477.9612051186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 448249.19114818046,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 448254.39384220575 ns\nthreads: 1"
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
        "date": 1705954947222,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7344.511566125333,
            "unit": "ns/iter",
            "extra": "iterations: 95235\ncpu: 7343.774872683363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51586.44120000417,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51582.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95751.75455960419,
            "unit": "ns/iter",
            "extra": "iterations: 8992\ncpu: 95747.19750889679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139689.37469666652,
            "unit": "ns/iter",
            "extra": "iterations: 6181\ncpu: 139680.9092379874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183684.27716700497,
            "unit": "ns/iter",
            "extra": "iterations: 4730\ncpu: 183673.48837209307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 227303.33201788965,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 227287.63483293875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 276272.32545115205,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 276245.8618543869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 313767.07325871877,
            "unit": "ns/iter",
            "extra": "iterations: 2771\ncpu: 313747.7444965716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 356914.8444170866,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 356889.03940886696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6228.965449642944,
            "unit": "ns/iter",
            "extra": "iterations: 112734\ncpu: 6228.421771603953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5010.69466596746,
            "unit": "ns/iter",
            "extra": "iterations: 139313\ncpu: 5010.31203118158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5082.622948400199,
            "unit": "ns/iter",
            "extra": "iterations: 135504\ncpu: 5082.528191049718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5039.543802603917,
            "unit": "ns/iter",
            "extra": "iterations: 139010\ncpu: 5039.26623983885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7858.682230373074,
            "unit": "ns/iter",
            "extra": "iterations: 88882\ncpu: 7858.131005152898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26313.312605312676,
            "unit": "ns/iter",
            "extra": "iterations: 30860\ncpu: 26311.487362281314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 134169.12313725476,
            "unit": "ns/iter",
            "extra": "iterations: 6375\ncpu: 134157.77254901963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102973.45660559845,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 102971.68514946975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103772.64947201853,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 103762.84743294115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98706.60349415321,
            "unit": "ns/iter",
            "extra": "iterations: 8643\ncpu: 98699.74545875276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199689.23657603757,
            "unit": "ns/iter",
            "extra": "iterations: 4451\ncpu: 199675.6459222648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1797534.0175097724,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1797421.2062256811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1420597.424427401,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1420500.6106870198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1385298.5417909608,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1385210.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1386040.3919521822,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1385936.661698956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 756520.4840294553,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 756471.0073710079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1357092.9429824727,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1357001.3157894716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34592.367776710846,
            "unit": "ns/iter",
            "extra": "iterations: 23933\ncpu: 34590.26448836342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 175239.054685913,
            "unit": "ns/iter",
            "extra": "iterations: 4919\ncpu: 175229.55885342613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 133449.91843040867,
            "unit": "ns/iter",
            "extra": "iterations: 6473\ncpu: 133440.3367835622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132193.34492797655,
            "unit": "ns/iter",
            "extra": "iterations: 6526\ncpu: 132185.01379098973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126204.18633082305,
            "unit": "ns/iter",
            "extra": "iterations: 6789\ncpu: 126193.5778465163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 223166.72969477813,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 223155.56130367293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1864812.2297029002,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1861350.8910891076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1457190.554687493,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1457080.312499992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1428562.7626340357,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1428487.9019908041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1430656.0860215062,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1430554.8387096727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 803642.6528138352,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 803595.0649350656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1396678.161919094,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1396583.0584707577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6617346.163120311,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6617125.531914851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3027748.280130331,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3027676.547231275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26461.20041268796,
            "unit": "ns/iter",
            "extra": "iterations: 31016\ncpu: 26460.820221820944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 133475.08684211408,
            "unit": "ns/iter",
            "extra": "iterations: 6460\ncpu: 133471.48606811216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103492.51130455916,
            "unit": "ns/iter",
            "extra": "iterations: 8271\ncpu: 103490.7145447948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104850.33231033436,
            "unit": "ns/iter",
            "extra": "iterations: 8146\ncpu: 104845.88755217248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104075.20996224356,
            "unit": "ns/iter",
            "extra": "iterations: 8211\ncpu: 104068.29862379744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 186927.69625163215,
            "unit": "ns/iter",
            "extra": "iterations: 4642\ncpu: 186914.75657044427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1809469.4233009382,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1809335.9223300905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1410340.1963471833,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1410224.353120246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1390780.6989568197,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1390709.5380029823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1387824.4880597368,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1387727.761194032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 767047.4749383397,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 767007.8882497933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1358717.0131579076,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1358633.4795321575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2796.8220765500623,
            "unit": "ns/iter",
            "extra": "iterations: 248961\ncpu: 2796.725189889174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18199.999455096386,
            "unit": "ns/iter",
            "extra": "iterations: 38539\ncpu: 18199.455097433864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14816.109625837456,
            "unit": "ns/iter",
            "extra": "iterations: 47279\ncpu: 14815.122993295116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15413.854269692656,
            "unit": "ns/iter",
            "extra": "iterations: 45296\ncpu: 15412.51986930405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11208.285241815294,
            "unit": "ns/iter",
            "extra": "iterations: 62589\ncpu: 11207.392672833861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 69434.10221956889,
            "unit": "ns/iter",
            "extra": "iterations: 10047\ncpu: 69429.491390465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125249.3047432189,
            "unit": "ns/iter",
            "extra": "iterations: 5608\ncpu: 125239.42582025724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30759.01913602329,
            "unit": "ns/iter",
            "extra": "iterations: 22732\ncpu: 30758.472637691455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30523.642477104808,
            "unit": "ns/iter",
            "extra": "iterations: 22930\ncpu: 30523.475795900675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30247.703494633242,
            "unit": "ns/iter",
            "extra": "iterations: 23207\ncpu: 30246.91256948342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61767.19862409654,
            "unit": "ns/iter",
            "extra": "iterations: 11338\ncpu: 61766.16687246409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57182.06274541882,
            "unit": "ns/iter",
            "extra": "iterations: 12224\ncpu: 57181.05366492136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22151.307938214057,
            "unit": "ns/iter",
            "extra": "iterations: 31594\ncpu: 22150.443122111832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110431.08751770022,
            "unit": "ns/iter",
            "extra": "iterations: 6353\ncpu: 110420.41555170885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88902.28547854886,
            "unit": "ns/iter",
            "extra": "iterations: 7878\ncpu: 88896.49657273378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88665.1201265758,
            "unit": "ns/iter",
            "extra": "iterations: 7900\ncpu: 88659.11392405044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88318.50718789996,
            "unit": "ns/iter",
            "extra": "iterations: 7930\ncpu: 88314.51450189235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 133476.82949133124,
            "unit": "ns/iter",
            "extra": "iterations: 5249\ncpu: 133469.46084968603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 532943.6920731831,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 532889.3292682914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 436364.54834679083,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 436329.6319401099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 436010.33084111335,
            "unit": "ns/iter",
            "extra": "iterations: 1605\ncpu: 435995.95015575824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 433680.6189591085,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 433652.23048327625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 277107.65558198123,
            "unit": "ns/iter",
            "extra": "iterations: 2526\ncpu: 277085.3919239906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 427089.9700122254,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 427063.0354957189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22073.50330771151,
            "unit": "ns/iter",
            "extra": "iterations: 31744\ncpu: 22070.835433467408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 110921.65868836659,
            "unit": "ns/iter",
            "extra": "iterations: 6267\ncpu: 110918.04691239828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88440.74363177418,
            "unit": "ns/iter",
            "extra": "iterations: 7930\ncpu: 88437.91929381946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88924.1525552911,
            "unit": "ns/iter",
            "extra": "iterations: 7866\ncpu: 88915.0012712946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87088.42245990381,
            "unit": "ns/iter",
            "extra": "iterations: 8041\ncpu: 87081.33316751636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128328.68069079616,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 128316.38802131027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 530141.7182991345,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 530126.5755504972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 427952.5897435682,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 427917.4603174602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 427147.34978670406,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 427104.6922608154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 424275.6053269067,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 424268.40193704795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 280963.92857145454,
            "unit": "ns/iter",
            "extra": "iterations: 2492\ncpu: 280959.14927769266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 423210.27895693464,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 423208.24742267997 ns\nthreads: 1"
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
        "date": 1705956490277,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7412.337686290542,
            "unit": "ns/iter",
            "extra": "iterations: 94342\ncpu: 7412.2151321786705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52853.567499994366,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52852.47999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98781.45732337747,
            "unit": "ns/iter",
            "extra": "iterations: 8705\ncpu: 98776.97874784605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144700.19367312448,
            "unit": "ns/iter",
            "extra": "iterations: 5690\ncpu: 144698.13708260105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189495.1116462382,
            "unit": "ns/iter",
            "extra": "iterations: 4568\ncpu: 189491.1339754815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 235114.52701601395,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 235103.61118653262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 279597.7057878038,
            "unit": "ns/iter",
            "extra": "iterations: 3110\ncpu: 279589.61414791003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 324507.17825114453,
            "unit": "ns/iter",
            "extra": "iterations: 2676\ncpu: 324502.65321375214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 369950.159438787,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 369946.4710884355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6223.982476217589,
            "unit": "ns/iter",
            "extra": "iterations: 111848\ncpu: 6223.844860882619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5150.246072608426,
            "unit": "ns/iter",
            "extra": "iterations: 136541\ncpu: 5150.094843307144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5143.213390846286,
            "unit": "ns/iter",
            "extra": "iterations: 135854\ncpu: 5143.2206633591895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5141.947387159571,
            "unit": "ns/iter",
            "extra": "iterations: 137628\ncpu: 5141.788008254132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7982.086195125912,
            "unit": "ns/iter",
            "extra": "iterations: 87882\ncpu: 7981.947383992171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26329.743857834248,
            "unit": "ns/iter",
            "extra": "iterations: 30893\ncpu: 26329.11339138317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 140273.9395326056,
            "unit": "ns/iter",
            "extra": "iterations: 6119\ncpu: 140270.97564961595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110000.41380640767,
            "unit": "ns/iter",
            "extra": "iterations: 7779\ncpu: 109998.36739940867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110720.26577512997,
            "unit": "ns/iter",
            "extra": "iterations: 7702\ncpu: 110716.07374707842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 107874.31123481631,
            "unit": "ns/iter",
            "extra": "iterations: 7904\ncpu: 107873.08957489868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 218731.88497537014,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 218720.73891625603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1834014.8359682825,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1833972.7272727273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1450486.195312628,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1450423.5937499998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1435956.6877897088,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1435904.9459041725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1422844.603077045,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1422797.8461538434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 779479.6925021523,
            "unit": "ns/iter",
            "extra": "iterations: 1187\ncpu: 779463.1002527372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1386121.7593422472,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1386027.2047832557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35112.48281540155,
            "unit": "ns/iter",
            "extra": "iterations: 23684\ncpu: 35107.60851207567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176369.68705401986,
            "unit": "ns/iter",
            "extra": "iterations: 4905\ncpu: 176357.8593272169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138342.50522088414,
            "unit": "ns/iter",
            "extra": "iterations: 6225\ncpu: 138326.8755020081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138335.96118685347,
            "unit": "ns/iter",
            "extra": "iterations: 6235\ncpu: 138324.00962309507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 136861.6033882297,
            "unit": "ns/iter",
            "extra": "iterations: 6316\ncpu: 136849.06586447082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 242034.97546696308,
            "unit": "ns/iter",
            "extra": "iterations: 3587\ncpu: 242026.09422916095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1857070.7940000375,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1856886.0000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1480484.4372017703,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1480357.392686802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1489669.0673077218,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1489485.096153844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1470442.5299684373,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1470373.6593059942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 840236.5362318575,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 840104.7101449285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1431726.892307534,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1431615.3846153794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5202536.350000173,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5201592.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3111309.7781455405,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3111123.5099337716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28114.6139848713,
            "unit": "ns/iter",
            "extra": "iterations: 29346\ncpu: 28111.016833639882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137366.1843486561,
            "unit": "ns/iter",
            "extra": "iterations: 6287\ncpu: 137355.98854779726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109499.62401021786,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 109488.21200510883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110041.7051609659,
            "unit": "ns/iter",
            "extra": "iterations: 7828\ncpu: 110035.28359734325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 111316.35970013455,
            "unit": "ns/iter",
            "extra": "iterations: 7737\ncpu: 111306.03593123957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 202705.1063029019,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 202688.781749765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1844750.936633507,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1844499.009900989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1481537.7931034216,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1481455.353901996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1466285.367378015,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1466207.6219512247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1423838.9159022407,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1423825.6880733941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 780731.142016876,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 780722.2689075639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1391211.2032885123,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1391213.0044843007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2819.7569575521175,
            "unit": "ns/iter",
            "extra": "iterations: 249010\ncpu: 2819.720493152905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19222.730486370372,
            "unit": "ns/iter",
            "extra": "iterations: 36577\ncpu: 19221.811520901065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15298.115882263328,
            "unit": "ns/iter",
            "extra": "iterations: 45831\ncpu: 15297.935894918277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14397.848915389117,
            "unit": "ns/iter",
            "extra": "iterations: 48635\ncpu: 14397.87601521542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11147.892728456809,
            "unit": "ns/iter",
            "extra": "iterations: 62999\ncpu: 11147.726154383394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 74221.13550308286,
            "unit": "ns/iter",
            "extra": "iterations: 9402\ncpu: 74218.30461603985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 126956.01685393963,
            "unit": "ns/iter",
            "extra": "iterations: 5518\ncpu: 126948.9307720184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30997.165746097286,
            "unit": "ns/iter",
            "extra": "iterations: 22631\ncpu: 30997.225045291998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30423.54321041193,
            "unit": "ns/iter",
            "extra": "iterations: 23050\ncpu: 30423.258134490017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30315.708469900113,
            "unit": "ns/iter",
            "extra": "iterations: 23188\ncpu: 30315.753838191995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62825.26246413258,
            "unit": "ns/iter",
            "extra": "iterations: 11152\ncpu: 62823.843256814995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57747.84225724724,
            "unit": "ns/iter",
            "extra": "iterations: 12121\ncpu: 57746.695817176435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20799.025815672096,
            "unit": "ns/iter",
            "extra": "iterations: 32887\ncpu: 20799.042174719583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111227.56933841949,
            "unit": "ns/iter",
            "extra": "iterations: 6288\ncpu: 111225.69974554768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88149.1484227762,
            "unit": "ns/iter",
            "extra": "iterations: 7957\ncpu: 88147.98290813233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87580.10509195892,
            "unit": "ns/iter",
            "extra": "iterations: 7993\ncpu: 87577.9181784064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89414.97813859003,
            "unit": "ns/iter",
            "extra": "iterations: 7822\ncpu: 89411.64663768698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132467.64100113622,
            "unit": "ns/iter",
            "extra": "iterations: 5234\ncpu: 132467.57737867808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 549295.2358490541,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 549269.81132076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 460667.2211286191,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 460649.0813648283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 448348.24568135967,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 448333.52527191833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 443028.91139243945,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 443029.4303797522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 288926.7198186751,
            "unit": "ns/iter",
            "extra": "iterations: 2427\ncpu: 288927.2352698788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 441466.19393553195,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 441446.99936828914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21490.815302459458,
            "unit": "ns/iter",
            "extra": "iterations: 32583\ncpu: 21490.872540895856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111211.44243291616,
            "unit": "ns/iter",
            "extra": "iterations: 6297\ncpu: 111211.73574718265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88296.54473386465,
            "unit": "ns/iter",
            "extra": "iterations: 7947\ncpu: 88292.11023027403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88284.28303798009,
            "unit": "ns/iter",
            "extra": "iterations: 7900\ncpu: 88281.18987341723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88094.76813959912,
            "unit": "ns/iter",
            "extra": "iterations: 7966\ncpu: 88090.42179261852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 133589.3760488039,
            "unit": "ns/iter",
            "extra": "iterations: 5244\ncpu: 133589.6834477506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 539587.6815383907,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 539578.1538461527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 443942.5616613715,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 443930.4153354664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 442013.13954943296,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 441992.05256570835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 438179.86863607215,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 438180.57825267286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 285840.54434001085,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 285830.9767061717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 434398.98816933867,
            "unit": "ns/iter",
            "extra": "iterations: 1606\ncpu: 434382.1295143182 ns\nthreads: 1"
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
        "date": 1705958304411,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7367.054349199776,
            "unit": "ns/iter",
            "extra": "iterations: 94960\ncpu: 7366.925021061499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53835.00619999495,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53833.49000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99285.79679205442,
            "unit": "ns/iter",
            "extra": "iterations: 8666\ncpu: 99284.67574428799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143129.0729842038,
            "unit": "ns/iter",
            "extra": "iterations: 6015\ncpu: 143127.98004987536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188982.68848168512,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 188977.94502617812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 233782.38936860033,
            "unit": "ns/iter",
            "extra": "iterations: 3706\ncpu: 233779.08796546145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 277496.4522741578,
            "unit": "ns/iter",
            "extra": "iterations: 3122\ncpu: 277483.6963484945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 323638.95684525295,
            "unit": "ns/iter",
            "extra": "iterations: 2688\ncpu: 323617.8199404762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 368415.83058726654,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 368395.31051964505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6262.235161270353,
            "unit": "ns/iter",
            "extra": "iterations: 111583\ncpu: 6262.144771156896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5079.2112203537945,
            "unit": "ns/iter",
            "extra": "iterations: 137411\ncpu: 5079.047528946011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5087.9086097538375,
            "unit": "ns/iter",
            "extra": "iterations: 137170\ncpu: 5087.673689582268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5040.080908714148,
            "unit": "ns/iter",
            "extra": "iterations: 137513\ncpu: 5039.710427377773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7947.33658125748,
            "unit": "ns/iter",
            "extra": "iterations: 87851\ncpu: 7947.118416409601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27109.664192023174,
            "unit": "ns/iter",
            "extra": "iterations: 30038\ncpu: 27109.35814634798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 133074.93796525072,
            "unit": "ns/iter",
            "extra": "iterations: 6448\ncpu: 133075.69789081902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103431.86707168659,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 103429.06439854184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104495.35359588322,
            "unit": "ns/iter",
            "extra": "iterations: 8176\ncpu: 104492.22113502913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100969.70189573836,
            "unit": "ns/iter",
            "extra": "iterations: 8440\ncpu: 100968.89810426538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 204152.07946716895,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 204150.20670647614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1798278.4970760075,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1798229.824561405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1410811.8543248295,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1410792.261001517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1410907.760242682,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1410852.2003034893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1421422.9540582274,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1421410.56661562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 795306.548414665,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 795279.777206513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1377386.3115725713,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1377356.9732937685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35151.853529534535,
            "unit": "ns/iter",
            "extra": "iterations: 23445\ncpu: 35151.31584559619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178195.4400983032,
            "unit": "ns/iter",
            "extra": "iterations: 4883\ncpu: 178182.42883473233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 133199.25115990816,
            "unit": "ns/iter",
            "extra": "iterations: 6466\ncpu: 133193.3807609029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 131704.0251881369,
            "unit": "ns/iter",
            "extra": "iterations: 6511\ncpu: 131699.6621102749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127916.8178970924,
            "unit": "ns/iter",
            "extra": "iterations: 6705\ncpu: 127910.42505592841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 224475.0127206522,
            "unit": "ns/iter",
            "extra": "iterations: 3852\ncpu: 224463.99273104875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1833063.4220907944,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1832967.6528599563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1448629.297045209,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1448564.6967340598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1468117.1181102514,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1468046.299212595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1461916.440251548,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1461854.5597484224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 825340.4946808966,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 825279.6985815582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1414554.581183659,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1414461.6084977286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5074009.479999404,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5073494.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3119054.9900001464,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3118941.333333325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26883.995437836802,
            "unit": "ns/iter",
            "extra": "iterations: 30468\ncpu: 26882.109098070083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 130862.47516231639,
            "unit": "ns/iter",
            "extra": "iterations: 6623\ncpu: 130857.11913030292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102944.22033694341,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 102939.93983152763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104743.92947073388,
            "unit": "ns/iter",
            "extra": "iterations: 8181\ncpu: 104738.9683412788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104378.04641556235,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 104371.03280680423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187427.46220489743,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 187418.51851851892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1832885.1299212438,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1832792.9133858315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1407497.599092241,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1407403.0257186135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1412139.9590909402,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1412023.1818181807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1417982.211567836,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1417930.4414003047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 802359.7891097639,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 802330.8556611912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1380670.2284867482,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1380614.0949554902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2834.93748426352,
            "unit": "ns/iter",
            "extra": "iterations: 246242\ncpu: 2834.725189041668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18838.08822342409,
            "unit": "ns/iter",
            "extra": "iterations: 37167\ncpu: 18837.46603169472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13534.135183648517,
            "unit": "ns/iter",
            "extra": "iterations: 51811\ncpu: 13533.517978807658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14894.82172257642,
            "unit": "ns/iter",
            "extra": "iterations: 47011\ncpu: 14894.250281848901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11240.206735386526,
            "unit": "ns/iter",
            "extra": "iterations: 62476\ncpu: 11239.90012164673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 70588.44870759957,
            "unit": "ns/iter",
            "extra": "iterations: 9904\ncpu: 70584.95557350598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 128091.92381125495,
            "unit": "ns/iter",
            "extra": "iterations: 5447\ncpu: 128085.20286396172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31344.495745634948,
            "unit": "ns/iter",
            "extra": "iterations: 22330\ncpu: 31343.39453649819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30934.75814303232,
            "unit": "ns/iter",
            "extra": "iterations: 22596\ncpu: 30932.886351566685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30726.172217814226,
            "unit": "ns/iter",
            "extra": "iterations: 22698\ncpu: 30724.627720503966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62149.606144004276,
            "unit": "ns/iter",
            "extra": "iterations: 11263\ncpu: 62147.110006215284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57996.50869925457,
            "unit": "ns/iter",
            "extra": "iterations: 12070\ncpu: 57993.05716652873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21015.32460324404,
            "unit": "ns/iter",
            "extra": "iterations: 33333\ncpu: 21014.514145141362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110299.55227166411,
            "unit": "ns/iter",
            "extra": "iterations: 6361\ncpu: 110296.52570350532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88240.8616700196,
            "unit": "ns/iter",
            "extra": "iterations: 7952\ncpu: 88239.17253521127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88718.49316455719,
            "unit": "ns/iter",
            "extra": "iterations: 7900\ncpu: 88715.50632911346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87899.95178907547,
            "unit": "ns/iter",
            "extra": "iterations: 7965\ncpu: 87894.51349654708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 133862.1646248058,
            "unit": "ns/iter",
            "extra": "iterations: 5224\ncpu: 133856.27871362926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 546411.589062501,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 546393.9062499979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 449845.77578479185,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 449822.29340166383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 450463.2065636642,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 450452.5740025686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 444050.1230964387,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 444037.62690355285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 283608.6337799452,
            "unit": "ns/iter",
            "extra": "iterations: 2463\ncpu: 283603.81648396276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 439212.6382708392,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 439208.07374444016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21528.074969212117,
            "unit": "ns/iter",
            "extra": "iterations: 32480\ncpu: 21528.226600985046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111144.84235669363,
            "unit": "ns/iter",
            "extra": "iterations: 6280\ncpu: 111142.10191082765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88730.27467647835,
            "unit": "ns/iter",
            "extra": "iterations: 7882\ncpu: 88724.29586399307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89007.95357415258,
            "unit": "ns/iter",
            "extra": "iterations: 7862\ncpu: 89004.57898753662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88063.9872987951,
            "unit": "ns/iter",
            "extra": "iterations: 7952\ncpu: 88062.18561368235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130911.6454019827,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 130912.32978921756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 532807.3884234942,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 532779.9695354097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 441490.27272724675,
            "unit": "ns/iter",
            "extra": "iterations: 1606\ncpu: 441481.32004981185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 443541.6139240491,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 443529.1772151981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 431868.35740740475,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 431853.0246913609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 280823.59373743687,
            "unit": "ns/iter",
            "extra": "iterations: 2491\ncpu: 280807.2661581697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 430740.7068223171,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 430727.9655808276 ns\nthreads: 1"
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
        "date": 1705959844035,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7455.157055764761,
            "unit": "ns/iter",
            "extra": "iterations: 93661\ncpu: 7455.086962556454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53960.41210000249,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53958.46 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99864.68024933388,
            "unit": "ns/iter",
            "extra": "iterations: 8663\ncpu: 99859.71372503751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145459.1775448108,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 145450.642543118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190395.7928182756,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 190384.0914036996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 236949.38963166412,
            "unit": "ns/iter",
            "extra": "iterations: 3665\ncpu: 236938.19918144622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 282008.96102633333,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 281986.19681714836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 324165.29939669475,
            "unit": "ns/iter",
            "extra": "iterations: 2652\ncpu: 324147.0211161388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 367173.2940677746,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 367154.1101694915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6286.155008121575,
            "unit": "ns/iter",
            "extra": "iterations: 110820\ncpu: 6285.720086626955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5119.5998031493655,
            "unit": "ns/iter",
            "extra": "iterations: 137160\ncpu: 5119.248323126275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5140.14629912972,
            "unit": "ns/iter",
            "extra": "iterations: 135968\ncpu: 5139.87776535655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5067.441078999732,
            "unit": "ns/iter",
            "extra": "iterations: 138202\ncpu: 5067.370949769179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7945.713751202165,
            "unit": "ns/iter",
            "extra": "iterations: 88465\ncpu: 7945.127451534508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25901.46601909718,
            "unit": "ns/iter",
            "extra": "iterations: 30473\ncpu: 25899.540576904146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141347.15190711754,
            "unit": "ns/iter",
            "extra": "iterations: 6030\ncpu: 141338.9386401325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109749.39672300337,
            "unit": "ns/iter",
            "extra": "iterations: 7751\ncpu: 109743.0783124759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 111027.96094459208,
            "unit": "ns/iter",
            "extra": "iterations: 7707\ncpu: 111023.05696120394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106537.45565978545,
            "unit": "ns/iter",
            "extra": "iterations: 7995\ncpu: 106531.95747342086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 202758.40633545944,
            "unit": "ns/iter",
            "extra": "iterations: 4388\ncpu: 202745.1686417503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1892415.2602458484,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1892280.7377049166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1464064.5892575698,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1463988.3096366466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1480838.1321656117,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1480710.1910828021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1444994.147974962,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1444864.6417445466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 791997.1101548327,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 791937.0912220309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1424865.371165618,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1424794.1717791415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35592.75953985862,
            "unit": "ns/iter",
            "extra": "iterations: 23297\ncpu: 35592.2307593253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 182846.45096377446,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 182843.50773141326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138076.82426376906,
            "unit": "ns/iter",
            "extra": "iterations: 6248\ncpu: 138076.16837387948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138558.5555555547,
            "unit": "ns/iter",
            "extra": "iterations: 6237\ncpu: 138553.19865319828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 135377.37547228654,
            "unit": "ns/iter",
            "extra": "iterations: 6352\ncpu: 135373.2210327452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 229549.76636034623,
            "unit": "ns/iter",
            "extra": "iterations: 3591\ncpu: 229539.57115009677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1938782.1517671142,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1938765.9043659037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1519519.4127244581,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1519453.9967373586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1516566.5294118219,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1516466.8300653526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1481792.5993639622,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1481747.2178060475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 846849.7721867079,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 846795.1509606614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1460022.842767316,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1459994.6540880506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5169263.750000254,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5169087.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2981730.4760384313,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2981623.003194885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27863.494069546294,
            "unit": "ns/iter",
            "extra": "iterations: 29593\ncpu: 27863.386611698887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138939.50854838427,
            "unit": "ns/iter",
            "extra": "iterations: 6200\ncpu: 138936.46774193604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109770.18118825117,
            "unit": "ns/iter",
            "extra": "iterations: 7793\ncpu: 109768.42037726167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111225.25180318988,
            "unit": "ns/iter",
            "extra": "iterations: 7764\ncpu: 111220.73673364296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110970.91994836582,
            "unit": "ns/iter",
            "extra": "iterations: 7745\ncpu: 110969.7740477721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 190303.8671635312,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 190297.58877685163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1914583.0511246892,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1914541.3087934493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1443723.261609855,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1443705.2631578988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1451714.0931677348,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1451676.863354035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1432164.4701378073,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1432152.5267993875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 792965.4553191405,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 792941.957446809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1414630.2200302612,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1414607.5872534213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2765.92551463474,
            "unit": "ns/iter",
            "extra": "iterations: 252412\ncpu: 2765.8597847962874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19205.254908941086,
            "unit": "ns/iter",
            "extra": "iterations: 36515\ncpu: 19204.83636861549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14439.095130960619,
            "unit": "ns/iter",
            "extra": "iterations: 48449\ncpu: 14438.807818530737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15545.765182187653,
            "unit": "ns/iter",
            "extra": "iterations: 44954\ncpu: 15545.497619789105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11193.702816384088,
            "unit": "ns/iter",
            "extra": "iterations: 62527\ncpu: 11193.647544260935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68953.55950509913,
            "unit": "ns/iter",
            "extra": "iterations: 10184\ncpu: 68950.61861743935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124586.45510891893,
            "unit": "ns/iter",
            "extra": "iterations: 5647\ncpu: 124585.05401097935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30936.25785218503,
            "unit": "ns/iter",
            "extra": "iterations: 22637\ncpu: 30935.00463842377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30976.962688884305,
            "unit": "ns/iter",
            "extra": "iterations: 22567\ncpu: 30976.310541941923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30902.551216501943,
            "unit": "ns/iter",
            "extra": "iterations: 22688\ncpu: 30901.414844851977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62545.290503789874,
            "unit": "ns/iter",
            "extra": "iterations: 11215\ncpu: 62543.50423539948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58845.99227604722,
            "unit": "ns/iter",
            "extra": "iterations: 11911\ncpu: 58844.76534296005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21637.999659908288,
            "unit": "ns/iter",
            "extra": "iterations: 32344\ncpu: 21637.574202325144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112061.43974461261,
            "unit": "ns/iter",
            "extra": "iterations: 6265\ncpu: 112060.47885075888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90520.65034874734,
            "unit": "ns/iter",
            "extra": "iterations: 7742\ncpu: 90517.63110307467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 92613.17968027228,
            "unit": "ns/iter",
            "extra": "iterations: 7569\ncpu: 92610.6883339932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91046.09237575612,
            "unit": "ns/iter",
            "extra": "iterations: 7686\ncpu: 91041.29586260767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130664.72625488382,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 130661.72793431608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 562087.4622793329,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 562080.6581059342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 459418.7529566043,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 459384.3626806866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 460816.9116677337,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 460793.0784443013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 448266.80472244485,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 448233.2482450551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 290916.4004157714,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 290891.01871101826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 459219.9557775216,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 459191.3694721841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21917.680434238515,
            "unit": "ns/iter",
            "extra": "iterations: 32056\ncpu: 21916.764412278295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115866.0011570225,
            "unit": "ns/iter",
            "extra": "iterations: 6050\ncpu: 115864.92561983563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91490.08218998843,
            "unit": "ns/iter",
            "extra": "iterations: 7653\ncpu: 91484.8817457192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91933.80711192565,
            "unit": "ns/iter",
            "extra": "iterations: 7621\ncpu: 91932.18737698483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89661.74178643819,
            "unit": "ns/iter",
            "extra": "iterations: 7792\ncpu: 89660.65195071754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 129707.39559828433,
            "unit": "ns/iter",
            "extra": "iterations: 5407\ncpu: 129704.34621786734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 553094.0727273335,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 553077.7075098855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 446902.43303567835,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 446884.247448982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 457345.93994776113,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 457335.5091383798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 442540.0853349916,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 442535.5246523316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 291678.982902419,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 291677.1893244415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 443883.0457142796,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 443870.73015873134 ns\nthreads: 1"
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
        "date": 1705961426005,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7413.5025658928635,
            "unit": "ns/iter",
            "extra": "iterations: 94509\ncpu: 7412.944798908041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53976.500900000705,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53974.79 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100098.16860870883,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 100091.80843626194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145526.13171226095,
            "unit": "ns/iter",
            "extra": "iterations: 5922\ncpu: 145512.1073961499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 191614.48542401305,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 191592.11572438155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237262.795951839,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 237238.48468271332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 280435.95264350733,
            "unit": "ns/iter",
            "extra": "iterations: 3083\ncpu: 280424.4242620823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 326666.05751881644,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 326663.9473684209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 371494.79426860745,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 371492.72882805776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6282.873128504823,
            "unit": "ns/iter",
            "extra": "iterations: 111475\ncpu: 6282.6248037676605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5072.460237513903,
            "unit": "ns/iter",
            "extra": "iterations: 137592\ncpu: 5072.182975754409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5067.62086916337,
            "unit": "ns/iter",
            "extra": "iterations: 138501\ncpu: 5067.6652154136045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5066.293828410573,
            "unit": "ns/iter",
            "extra": "iterations: 138295\ncpu: 5066.095665063814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7906.949016627774,
            "unit": "ns/iter",
            "extra": "iterations: 88166\ncpu: 7906.714606537664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27914.65573206623,
            "unit": "ns/iter",
            "extra": "iterations: 29082\ncpu: 27911.35066364073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136049.535182256,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 136038.92234548353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104600.82743850753,
            "unit": "ns/iter",
            "extra": "iterations: 8171\ncpu: 104588.45918492232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105155.96968197072,
            "unit": "ns/iter",
            "extra": "iterations: 8081\ncpu: 105146.61551788168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100885.57838091522,
            "unit": "ns/iter",
            "extra": "iterations: 8548\ncpu: 100880.79082826381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 203337.70227954595,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 203317.70665438694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1815966.6094675905,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1815803.7475345181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1422559.0733944508,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1422414.8318042804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1435345.6414220417,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1435222.8748068023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1430325.6394453193,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1430174.422187986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 793135.3421955303,
            "unit": "ns/iter",
            "extra": "iterations: 1166\ncpu: 793071.3550600347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1388631.213855314,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1388479.367469878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36444.69440900693,
            "unit": "ns/iter",
            "extra": "iterations: 22733\ncpu: 36440.43461047814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 185668.5896175928,
            "unit": "ns/iter",
            "extra": "iterations: 4681\ncpu: 185650.05340739136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136070.02341031184,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 136056.94400506213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132648.58488246994,
            "unit": "ns/iter",
            "extra": "iterations: 6509\ncpu: 132646.76601628534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127545.03614810167,
            "unit": "ns/iter",
            "extra": "iterations: 6833\ncpu: 127541.08005268524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 224461.83997929408,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 224460.5385810456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1879833.1754031356,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1879735.0806451633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1505784.224555717,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1505753.4733441067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1505067.1919353928,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1504927.741935481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1474268.7377566965,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1474265.086887836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 833633.9059140073,
            "unit": "ns/iter",
            "extra": "iterations: 1116\ncpu: 833599.1935483867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1442303.0155762292,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1442285.981308412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5125018.17000043,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5124607.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3119188.4781143162,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3119172.053872064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27385.344404834723,
            "unit": "ns/iter",
            "extra": "iterations: 30017\ncpu: 27384.145650797826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134283.47198008047,
            "unit": "ns/iter",
            "extra": "iterations: 6424\ncpu: 134284.60460772098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 101702.20794669805,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 101696.52629074466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107342.48259573377,
            "unit": "ns/iter",
            "extra": "iterations: 8044\ncpu: 107340.19144704127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103244.46118611161,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 103238.44021215028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 188562.45646493358,
            "unit": "ns/iter",
            "extra": "iterations: 4594\ncpu: 188557.1397474978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1844610.582677245,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1844489.1732283393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1420673.320121792,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1420685.9756097558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1434132.0907692534,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1434041.8461538516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1431225.9461539374,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1431237.076923078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 789536.4927781933,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 789491.163976213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1384445.638930164,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1384456.7607726566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2868.4115286378446,
            "unit": "ns/iter",
            "extra": "iterations: 244695\ncpu: 2868.2878685710903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18007.29419623255,
            "unit": "ns/iter",
            "extra": "iterations: 38923\ncpu: 18007.47373018536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15801.14141973659,
            "unit": "ns/iter",
            "extra": "iterations: 45121\ncpu: 15799.900268167765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14316.529838691089,
            "unit": "ns/iter",
            "extra": "iterations: 48913\ncpu: 14316.656103694235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11178.078599766779,
            "unit": "ns/iter",
            "extra": "iterations: 62761\ncpu: 11177.876388202918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 69247.9330171908,
            "unit": "ns/iter",
            "extra": "iterations: 10122\ncpu: 69248.55759731303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 128141.20811254796,
            "unit": "ns/iter",
            "extra": "iterations: 5473\ncpu: 128139.2837566232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31441.046209060365,
            "unit": "ns/iter",
            "extra": "iterations: 22290\ncpu: 31439.75325257968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31255.014781602946,
            "unit": "ns/iter",
            "extra": "iterations: 22528\ncpu: 31254.922762784245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30918.370552526627,
            "unit": "ns/iter",
            "extra": "iterations: 22569\ncpu: 30915.636492534075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63430.93332731351,
            "unit": "ns/iter",
            "extra": "iterations: 11069\ncpu: 63429.74071731893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58361.44847121251,
            "unit": "ns/iter",
            "extra": "iterations: 12003\ncpu: 58352.628509539354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21151.883416720033,
            "unit": "ns/iter",
            "extra": "iterations: 33178\ncpu: 21149.728735909277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106856.60410959325,
            "unit": "ns/iter",
            "extra": "iterations: 6570\ncpu: 106851.75038051758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87225.3774381828,
            "unit": "ns/iter",
            "extra": "iterations: 8049\ncpu: 87224.62417691508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88653.28699949634,
            "unit": "ns/iter",
            "extra": "iterations: 7892\ncpu: 88649.04967055212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87543.6485366127,
            "unit": "ns/iter",
            "extra": "iterations: 7961\ncpu: 87537.14357492802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132420.2603930605,
            "unit": "ns/iter",
            "extra": "iterations: 5292\ncpu: 132409.10808768016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 543103.2934782802,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 543039.5962732873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 447066.43122204207,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 447018.2981445902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 452911.34087970195,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 452889.0685640327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 439274.4494663601,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 439254.30006276927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 284011.4538087794,
            "unit": "ns/iter",
            "extra": "iterations: 2468\ncpu: 283983.711507294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 439269.9179811141,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 439215.39432177076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21743.1050330278,
            "unit": "ns/iter",
            "extra": "iterations: 32247\ncpu: 21741.34648184335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112139.8167706831,
            "unit": "ns/iter",
            "extra": "iterations: 6249\ncpu: 112134.93358937313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88355.17467640963,
            "unit": "ns/iter",
            "extra": "iterations: 7803\ncpu: 88346.07202357915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88605.90485830145,
            "unit": "ns/iter",
            "extra": "iterations: 7904\ncpu: 88596.1791497984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87181.96402787398,
            "unit": "ns/iter",
            "extra": "iterations: 8034\ncpu: 87172.37988548788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 129735.20903008692,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 129721.99925678247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 536442.3445122495,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 536424.6951219533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 439956.0969163332,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 439924.8584015126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 440444.0018879884,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 440403.3354310885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 433518.9684406002,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 433473.2054455434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 284373.7255379638,
            "unit": "ns/iter",
            "extra": "iterations: 2463\ncpu: 284334.2671538773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 433694.1103533523,
            "unit": "ns/iter",
            "extra": "iterations: 1613\ncpu: 433653.3787972675 ns\nthreads: 1"
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
        "date": 1705963327383,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7450.34416997296,
            "unit": "ns/iter",
            "extra": "iterations: 93756\ncpu: 7450.298647553223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53983.91759999868,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53982.72 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100258.49854057156,
            "unit": "ns/iter",
            "extra": "iterations: 8565\ncpu: 100255.29480443666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146211.29928981792,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 146202.40108217794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192556.34922395615,
            "unit": "ns/iter",
            "extra": "iterations: 4510\ncpu: 192549.91130820403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237825.935784873,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 237816.38309549948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 287435.92159426416,
            "unit": "ns/iter",
            "extra": "iterations: 3061\ncpu: 287428.38941522385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 328213.64663641737,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 328200.6424792139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 372032.53019271494,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 372023.72591006453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6324.163169404165,
            "unit": "ns/iter",
            "extra": "iterations: 110658\ncpu: 6324.039834444862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5229.399172324409,
            "unit": "ns/iter",
            "extra": "iterations: 135077\ncpu: 5229.145598436444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5214.603131347415,
            "unit": "ns/iter",
            "extra": "iterations: 136874\ncpu: 5214.422023174603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5177.486793738871,
            "unit": "ns/iter",
            "extra": "iterations: 134936\ncpu: 5177.412254698515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8027.631232306731,
            "unit": "ns/iter",
            "extra": "iterations: 86545\ncpu: 8027.6029811081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26150.437530178344,
            "unit": "ns/iter",
            "extra": "iterations: 31063\ncpu: 26149.911470237927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 132014.15221759788,
            "unit": "ns/iter",
            "extra": "iterations: 6471\ncpu: 132013.7382166589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103491.13697967476,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 103492.06195546954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103248.57305273549,
            "unit": "ns/iter",
            "extra": "iterations: 8268\ncpu: 103250.49588775985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99260.7624547854,
            "unit": "ns/iter",
            "extra": "iterations: 8571\ncpu: 99258.09123789528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 211053.947029345,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 211053.2569792407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1853460.5760000886,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1853460.8000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1476637.407936612,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1476599.3650793666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1446869.6464174623,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1446823.5202492233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1445781.3969229741,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1445729.6923076895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 780100.0252524631,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 780088.3838383842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1404237.0166415204,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1404206.9591527984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35067.02912703372,
            "unit": "ns/iter",
            "extra": "iterations: 23655\ncpu: 35066.38342845056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174170.4752774884,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 174164.11705348105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132638.67639827414,
            "unit": "ns/iter",
            "extra": "iterations: 6508\ncpu: 132637.18500307313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130843.70576691476,
            "unit": "ns/iter",
            "extra": "iterations: 6624\ncpu: 130840.77596618318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128506.77082402527,
            "unit": "ns/iter",
            "extra": "iterations: 6711\ncpu: 128503.03978542707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 232712.65519097613,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 232705.1909628838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1909448.8213552777,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1909420.1232032795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1513816.0016260548,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1513797.3983739794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1473810.4167988114,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1473757.2107765407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1471274.0899053197,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1471232.965299685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 821663.0732568627,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 821651.1032656643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1438028.06046516,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1438004.4961240366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5076069.189999543,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5075921.000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3075677.654605164,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3075595.0657894714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26576.917481247547,
            "unit": "ns/iter",
            "extra": "iterations: 30793\ncpu: 26576.41022310264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 130394.8965201463,
            "unit": "ns/iter",
            "extra": "iterations: 6552\ncpu: 130388.65995115993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102111.31635197805,
            "unit": "ns/iter",
            "extra": "iterations: 8421\ncpu: 102108.8706804415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104122.72689888412,
            "unit": "ns/iter",
            "extra": "iterations: 8268\ncpu: 104118.63812288397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102219.8633309374,
            "unit": "ns/iter",
            "extra": "iterations: 8334\ncpu: 102217.24262059011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 193770.68550756577,
            "unit": "ns/iter",
            "extra": "iterations: 4423\ncpu: 193768.3924937821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1859671.8123752838,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1859632.3353293426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1457559.299373006,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1457508.9341692813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1452623.029503136,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1452612.5776397502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1437190.007716064,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1437159.5679012362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 783475.2993254372,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 783462.225969649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1406319.0165911233,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1406266.9683257828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2812.8780320035453,
            "unit": "ns/iter",
            "extra": "iterations: 248598\ncpu: 2812.83477743183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18718.59143833705,
            "unit": "ns/iter",
            "extra": "iterations: 37446\ncpu: 18718.38647652616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15531.538911732856,
            "unit": "ns/iter",
            "extra": "iterations: 45963\ncpu: 15531.30779104926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15360.573502324292,
            "unit": "ns/iter",
            "extra": "iterations: 45604\ncpu: 15359.84782036667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11174.247564038476,
            "unit": "ns/iter",
            "extra": "iterations: 62501\ncpu: 11174.058015071776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71864.58072140318,
            "unit": "ns/iter",
            "extra": "iterations: 9731\ncpu: 71865.7075326281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 126729.62943519604,
            "unit": "ns/iter",
            "extra": "iterations: 5524\ncpu: 126731.5894279505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31165.289182341072,
            "unit": "ns/iter",
            "extra": "iterations: 22491\ncpu: 31165.426170468192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30954.93545961433,
            "unit": "ns/iter",
            "extra": "iterations: 22606\ncpu: 30954.697867822637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31271.749002217235,
            "unit": "ns/iter",
            "extra": "iterations: 22550\ncpu: 31271.89356984472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62082.45657193261,
            "unit": "ns/iter",
            "extra": "iterations: 11260\ncpu: 62080.879218472604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58414.506988353125,
            "unit": "ns/iter",
            "extra": "iterations: 12020\ncpu: 58413.37770382671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21700.85498900827,
            "unit": "ns/iter",
            "extra": "iterations: 32301\ncpu: 21699.9752329648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113043.80688987636,
            "unit": "ns/iter",
            "extra": "iterations: 6183\ncpu: 113042.0184376517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88991.49282539535,
            "unit": "ns/iter",
            "extra": "iterations: 7875\ncpu: 88992.95238095167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89507.75131192678,
            "unit": "ns/iter",
            "extra": "iterations: 7813\ncpu: 89509.1770126703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88442.55767530581,
            "unit": "ns/iter",
            "extra": "iterations: 7915\ncpu: 88441.30132659384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 137376.0647058865,
            "unit": "ns/iter",
            "extra": "iterations: 5100\ncpu: 137369.82352941364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 548591.2184808558,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 548582.4588880199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 448093.6082138518,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 448082.8552803095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 457378.72121602506,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 457323.9327296276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 453110.85963776836,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 453102.7166882345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 282693.3963414528,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 282697.68292682816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 442552.56309444434,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 442545.27584020095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22101.840113618564,
            "unit": "ns/iter",
            "extra": "iterations: 31685\ncpu: 22101.93466940181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112986.88699016556,
            "unit": "ns/iter",
            "extra": "iterations: 6203\ncpu: 112986.69998387885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89769.54201895624,
            "unit": "ns/iter",
            "extra": "iterations: 7806\ncpu: 89768.78042531422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90104.57311898112,
            "unit": "ns/iter",
            "extra": "iterations: 7775\ncpu: 90100.47588424441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88402.2077905623,
            "unit": "ns/iter",
            "extra": "iterations: 7907\ncpu: 88399.91147084924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130320.84349441442,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 130317.30483271404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 547270.1599063763,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 547267.3946957912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 446398.46424008335,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 446387.8671775274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 441503.50506330613,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 441495.4430379747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 436834.25406755775,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 436812.95369210903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 279764.956834545,
            "unit": "ns/iter",
            "extra": "iterations: 2502\ncpu: 279760.07194244926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 437677.31661441573,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 437673.6677116043 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}