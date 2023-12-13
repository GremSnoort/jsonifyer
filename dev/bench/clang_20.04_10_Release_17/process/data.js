window.BENCHMARK_DATA = {
  "lastUpdate": 1702492948874,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-10 20.04 Release c++-17": [
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
        "date": 1702490326504,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1332.463303768708,
            "unit": "ns/iter",
            "extra": "iterations: 514576\ncpu: 1332.4047371039458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16148.55709849336,
            "unit": "ns/iter",
            "extra": "iterations: 51201\ncpu: 16148.278353938398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34154.80152013172,
            "unit": "ns/iter",
            "extra": "iterations: 24340\ncpu: 34154.08381265407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50532.57627220395,
            "unit": "ns/iter",
            "extra": "iterations: 16664\ncpu: 50531.8050888142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56415.04550000036,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56408.52000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70503.59624488828,
            "unit": "ns/iter",
            "extra": "iterations: 12463\ncpu: 70502.2787450854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83054.45191935846,
            "unit": "ns/iter",
            "extra": "iterations: 10316\ncpu: 83053.34431950361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96576.11463903172,
            "unit": "ns/iter",
            "extra": "iterations: 8976\ncpu: 96574.71033868092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112851.74409550872,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 112849.62366986761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1157.2980720217734,
            "unit": "ns/iter",
            "extra": "iterations: 600318\ncpu: 1157.256320816634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 903.249807816121,
            "unit": "ns/iter",
            "extra": "iterations: 771397\ncpu: 903.2590222673928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 889.8113774516193,
            "unit": "ns/iter",
            "extra": "iterations: 784376\ncpu: 889.779901475823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 881.8181993397542,
            "unit": "ns/iter",
            "extra": "iterations: 788633\ncpu: 881.8157495311516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1792.536505050949,
            "unit": "ns/iter",
            "extra": "iterations: 390535\ncpu: 1792.4690488688625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5067.2174117137865,
            "unit": "ns/iter",
            "extra": "iterations: 157641\ncpu: 5067.26803306246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 23998.974292233164,
            "unit": "ns/iter",
            "extra": "iterations: 34192\ncpu: 23998.98221806271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18750.875791066628,
            "unit": "ns/iter",
            "extra": "iterations: 43612\ncpu: 18751.06851325324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18646.82750102736,
            "unit": "ns/iter",
            "extra": "iterations: 43722\ncpu: 18645.90823841544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18477.875258203716,
            "unit": "ns/iter",
            "extra": "iterations: 43570\ncpu: 18477.86779894426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54452.24190000317,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54452.889999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 562277.1000000739,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562269.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 557706.7746479195,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 557704.2253521113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 553209.8814102373,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 553208.1410256418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 544537.2365250159,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 544523.3354470524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325447.7505527028,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 325447.27339719946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 551283.2855346168,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 551281.3207547185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2359950.210126631,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2359935.18987342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1077447.7628504888,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1077447.6635514025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3305730.053380896,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3305618.505338077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7286.280914274184,
            "unit": "ns/iter",
            "extra": "iterations: 113839\ncpu: 7286.249000781805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41422.75861729824,
            "unit": "ns/iter",
            "extra": "iterations: 20337\ncpu: 41422.29925751091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31973.284095320254,
            "unit": "ns/iter",
            "extra": "iterations: 25766\ncpu: 31973.127377163713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31577.67581104054,
            "unit": "ns/iter",
            "extra": "iterations: 26355\ncpu: 31576.327072661825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31485.523567606666,
            "unit": "ns/iter",
            "extra": "iterations: 26180\ncpu: 31485.85943468291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 65454.758398138234,
            "unit": "ns/iter",
            "extra": "iterations: 12860\ncpu: 65453.8724727838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 588697.8309999903,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588693.2000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 587533.1243206408,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 587510.3260869582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 581540.640374344,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 581542.1122994664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 579204.2124248862,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 579209.8864395438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 344263.3928994403,
            "unit": "ns/iter",
            "extra": "iterations: 2535\ncpu: 344257.3964497039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574825.0661860907,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 574824.3119266079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2517046.455040769,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2517013.6239782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1108480.7928571515,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1108424.5238095205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4909.597770461249,
            "unit": "ns/iter",
            "extra": "iterations: 162186\ncpu: 4909.59268987456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23863.27485936742,
            "unit": "ns/iter",
            "extra": "iterations: 34665\ncpu: 23862.56743112669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19074.695589668576,
            "unit": "ns/iter",
            "extra": "iterations: 43126\ncpu: 19074.89217641319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18407.13228910364,
            "unit": "ns/iter",
            "extra": "iterations: 44690\ncpu: 18406.838218840876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18712.210754046122,
            "unit": "ns/iter",
            "extra": "iterations: 42756\ncpu: 18712.39592104034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52040.19459999927,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52039.710000000385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 566835.8430000353,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566842.6999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569055.4938906977,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 569038.2636655967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 565525.9585459034,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 565524.1709183699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 564874.5648562263,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 564873.1629392954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332865.70954354416,
            "unit": "ns/iter",
            "extra": "iterations: 2651\ncpu: 332865.4470011312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559190.6602809879,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 559196.2962962989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 535.7200436635108,
            "unit": "ns/iter",
            "extra": "iterations: 1311851\ncpu: 535.720596317721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2994.6502298137566,
            "unit": "ns/iter",
            "extra": "iterations: 233885\ncpu: 2994.681574277973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2345.0565003732345,
            "unit": "ns/iter",
            "extra": "iterations: 298529\ncpu: 2344.9849093387925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2433.481211015761,
            "unit": "ns/iter",
            "extra": "iterations: 287296\ncpu: 2433.5076019157955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1927.9770545235622,
            "unit": "ns/iter",
            "extra": "iterations: 361422\ncpu: 1927.9994023606685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16046.287745492922,
            "unit": "ns/iter",
            "extra": "iterations: 43535\ncpu: 16046.21798552888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30252.27985300776,
            "unit": "ns/iter",
            "extra": "iterations: 23130\ncpu: 30252.15304798966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7186.18036590616,
            "unit": "ns/iter",
            "extra": "iterations: 97402\ncpu: 7185.850393215641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7107.404029002189,
            "unit": "ns/iter",
            "extra": "iterations: 98337\ncpu: 7107.4885343258475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7172.819589108535,
            "unit": "ns/iter",
            "extra": "iterations: 97544\ncpu: 7172.781513983446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14600.005319926291,
            "unit": "ns/iter",
            "extra": "iterations: 47933\ncpu: 14600.162727139988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13676.16159428694,
            "unit": "ns/iter",
            "extra": "iterations: 51258\ncpu: 13676.109095165566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5207.165991721733,
            "unit": "ns/iter",
            "extra": "iterations: 134085\ncpu: 5207.0917701457665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26072.9965413354,
            "unit": "ns/iter",
            "extra": "iterations: 26889\ncpu: 26072.840194875353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20779.00255094503,
            "unit": "ns/iter",
            "extra": "iterations: 33713\ncpu: 20778.75893572239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20606.35039938584,
            "unit": "ns/iter",
            "extra": "iterations: 33927\ncpu: 20606.581778524742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21373.789959766124,
            "unit": "ns/iter",
            "extra": "iterations: 32808\ncpu: 21373.11021701998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49480.62663647761,
            "unit": "ns/iter",
            "extra": "iterations: 14131\ncpu: 49481.183214209515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 153995.22517574322,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 153994.88137082744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130291.81992551219,
            "unit": "ns/iter",
            "extra": "iterations: 5370\ncpu: 130293.31471136078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128308.11100951556,
            "unit": "ns/iter",
            "extra": "iterations: 5468\ncpu: 128302.92611557993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129661.22736568292,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 129661.12660345774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82395.29435341654,
            "unit": "ns/iter",
            "extra": "iterations: 8483\ncpu: 82396.20417305321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130027.51898028115,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 130026.34908820197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5195.254408581652,
            "unit": "ns/iter",
            "extra": "iterations: 135361\ncpu: 5195.306624507759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25153.786858049334,
            "unit": "ns/iter",
            "extra": "iterations: 27728\ncpu: 25153.115983842854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21502.52780760142,
            "unit": "ns/iter",
            "extra": "iterations: 32599\ncpu: 21502.736280253765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21978.616560266575,
            "unit": "ns/iter",
            "extra": "iterations: 31799\ncpu: 21978.543350420092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22270.52554186944,
            "unit": "ns/iter",
            "extra": "iterations: 31419\ncpu: 22270.737451860332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49621.702398642214,
            "unit": "ns/iter",
            "extra": "iterations: 14133\ncpu: 49619.98867897799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153119.91464745122,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 153121.58917266843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126214.80183587002,
            "unit": "ns/iter",
            "extra": "iterations: 5556\ncpu: 126212.07703383654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125419.04032258487,
            "unit": "ns/iter",
            "extra": "iterations: 5580\ncpu: 125420.60931899483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 124660.40267379805,
            "unit": "ns/iter",
            "extra": "iterations: 5610\ncpu: 124657.78966132009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81892.0985684009,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 81890.75334428553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127775.36214442863,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 127776.69584245172 ns\nthreads: 1"
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
        "date": 1702490326504,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1332.463303768708,
            "unit": "ns/iter",
            "extra": "iterations: 514576\ncpu: 1332.4047371039458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16148.55709849336,
            "unit": "ns/iter",
            "extra": "iterations: 51201\ncpu: 16148.278353938398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34154.80152013172,
            "unit": "ns/iter",
            "extra": "iterations: 24340\ncpu: 34154.08381265407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50532.57627220395,
            "unit": "ns/iter",
            "extra": "iterations: 16664\ncpu: 50531.8050888142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56415.04550000036,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56408.52000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70503.59624488828,
            "unit": "ns/iter",
            "extra": "iterations: 12463\ncpu: 70502.2787450854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83054.45191935846,
            "unit": "ns/iter",
            "extra": "iterations: 10316\ncpu: 83053.34431950361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96576.11463903172,
            "unit": "ns/iter",
            "extra": "iterations: 8976\ncpu: 96574.71033868092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112851.74409550872,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 112849.62366986761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1157.2980720217734,
            "unit": "ns/iter",
            "extra": "iterations: 600318\ncpu: 1157.256320816634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 903.249807816121,
            "unit": "ns/iter",
            "extra": "iterations: 771397\ncpu: 903.2590222673928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 889.8113774516193,
            "unit": "ns/iter",
            "extra": "iterations: 784376\ncpu: 889.779901475823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 881.8181993397542,
            "unit": "ns/iter",
            "extra": "iterations: 788633\ncpu: 881.8157495311516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1792.536505050949,
            "unit": "ns/iter",
            "extra": "iterations: 390535\ncpu: 1792.4690488688625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5067.2174117137865,
            "unit": "ns/iter",
            "extra": "iterations: 157641\ncpu: 5067.26803306246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 23998.974292233164,
            "unit": "ns/iter",
            "extra": "iterations: 34192\ncpu: 23998.98221806271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18750.875791066628,
            "unit": "ns/iter",
            "extra": "iterations: 43612\ncpu: 18751.06851325324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18646.82750102736,
            "unit": "ns/iter",
            "extra": "iterations: 43722\ncpu: 18645.90823841544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18477.875258203716,
            "unit": "ns/iter",
            "extra": "iterations: 43570\ncpu: 18477.86779894426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54452.24190000317,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54452.889999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 562277.1000000739,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562269.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 557706.7746479195,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 557704.2253521113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 553209.8814102373,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 553208.1410256418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 544537.2365250159,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 544523.3354470524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325447.7505527028,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 325447.27339719946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 551283.2855346168,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 551281.3207547185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2359950.210126631,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2359935.18987342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1077447.7628504888,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1077447.6635514025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3305730.053380896,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3305618.505338077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7286.280914274184,
            "unit": "ns/iter",
            "extra": "iterations: 113839\ncpu: 7286.249000781805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41422.75861729824,
            "unit": "ns/iter",
            "extra": "iterations: 20337\ncpu: 41422.29925751091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31973.284095320254,
            "unit": "ns/iter",
            "extra": "iterations: 25766\ncpu: 31973.127377163713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31577.67581104054,
            "unit": "ns/iter",
            "extra": "iterations: 26355\ncpu: 31576.327072661825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31485.523567606666,
            "unit": "ns/iter",
            "extra": "iterations: 26180\ncpu: 31485.85943468291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 65454.758398138234,
            "unit": "ns/iter",
            "extra": "iterations: 12860\ncpu: 65453.8724727838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 588697.8309999903,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588693.2000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 587533.1243206408,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 587510.3260869582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 581540.640374344,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 581542.1122994664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 579204.2124248862,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 579209.8864395438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 344263.3928994403,
            "unit": "ns/iter",
            "extra": "iterations: 2535\ncpu: 344257.3964497039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574825.0661860907,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 574824.3119266079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2517046.455040769,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2517013.6239782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1108480.7928571515,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1108424.5238095205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4909.597770461249,
            "unit": "ns/iter",
            "extra": "iterations: 162186\ncpu: 4909.59268987456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23863.27485936742,
            "unit": "ns/iter",
            "extra": "iterations: 34665\ncpu: 23862.56743112669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19074.695589668576,
            "unit": "ns/iter",
            "extra": "iterations: 43126\ncpu: 19074.89217641319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18407.13228910364,
            "unit": "ns/iter",
            "extra": "iterations: 44690\ncpu: 18406.838218840876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18712.210754046122,
            "unit": "ns/iter",
            "extra": "iterations: 42756\ncpu: 18712.39592104034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52040.19459999927,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52039.710000000385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 566835.8430000353,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566842.6999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569055.4938906977,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 569038.2636655967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 565525.9585459034,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 565524.1709183699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 564874.5648562263,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 564873.1629392954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332865.70954354416,
            "unit": "ns/iter",
            "extra": "iterations: 2651\ncpu: 332865.4470011312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559190.6602809879,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 559196.2962962989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 535.7200436635108,
            "unit": "ns/iter",
            "extra": "iterations: 1311851\ncpu: 535.720596317721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2994.6502298137566,
            "unit": "ns/iter",
            "extra": "iterations: 233885\ncpu: 2994.681574277973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2345.0565003732345,
            "unit": "ns/iter",
            "extra": "iterations: 298529\ncpu: 2344.9849093387925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2433.481211015761,
            "unit": "ns/iter",
            "extra": "iterations: 287296\ncpu: 2433.5076019157955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1927.9770545235622,
            "unit": "ns/iter",
            "extra": "iterations: 361422\ncpu: 1927.9994023606685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16046.287745492922,
            "unit": "ns/iter",
            "extra": "iterations: 43535\ncpu: 16046.21798552888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30252.27985300776,
            "unit": "ns/iter",
            "extra": "iterations: 23130\ncpu: 30252.15304798966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7186.18036590616,
            "unit": "ns/iter",
            "extra": "iterations: 97402\ncpu: 7185.850393215641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7107.404029002189,
            "unit": "ns/iter",
            "extra": "iterations: 98337\ncpu: 7107.4885343258475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7172.819589108535,
            "unit": "ns/iter",
            "extra": "iterations: 97544\ncpu: 7172.781513983446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14600.005319926291,
            "unit": "ns/iter",
            "extra": "iterations: 47933\ncpu: 14600.162727139988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13676.16159428694,
            "unit": "ns/iter",
            "extra": "iterations: 51258\ncpu: 13676.109095165566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5207.165991721733,
            "unit": "ns/iter",
            "extra": "iterations: 134085\ncpu: 5207.0917701457665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26072.9965413354,
            "unit": "ns/iter",
            "extra": "iterations: 26889\ncpu: 26072.840194875353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20779.00255094503,
            "unit": "ns/iter",
            "extra": "iterations: 33713\ncpu: 20778.75893572239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20606.35039938584,
            "unit": "ns/iter",
            "extra": "iterations: 33927\ncpu: 20606.581778524742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21373.789959766124,
            "unit": "ns/iter",
            "extra": "iterations: 32808\ncpu: 21373.11021701998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49480.62663647761,
            "unit": "ns/iter",
            "extra": "iterations: 14131\ncpu: 49481.183214209515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 153995.22517574322,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 153994.88137082744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130291.81992551219,
            "unit": "ns/iter",
            "extra": "iterations: 5370\ncpu: 130293.31471136078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128308.11100951556,
            "unit": "ns/iter",
            "extra": "iterations: 5468\ncpu: 128302.92611557993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129661.22736568292,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 129661.12660345774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82395.29435341654,
            "unit": "ns/iter",
            "extra": "iterations: 8483\ncpu: 82396.20417305321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130027.51898028115,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 130026.34908820197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5195.254408581652,
            "unit": "ns/iter",
            "extra": "iterations: 135361\ncpu: 5195.306624507759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25153.786858049334,
            "unit": "ns/iter",
            "extra": "iterations: 27728\ncpu: 25153.115983842854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21502.52780760142,
            "unit": "ns/iter",
            "extra": "iterations: 32599\ncpu: 21502.736280253765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21978.616560266575,
            "unit": "ns/iter",
            "extra": "iterations: 31799\ncpu: 21978.543350420092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22270.52554186944,
            "unit": "ns/iter",
            "extra": "iterations: 31419\ncpu: 22270.737451860332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49621.702398642214,
            "unit": "ns/iter",
            "extra": "iterations: 14133\ncpu: 49619.98867897799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153119.91464745122,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 153121.58917266843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126214.80183587002,
            "unit": "ns/iter",
            "extra": "iterations: 5556\ncpu: 126212.07703383654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125419.04032258487,
            "unit": "ns/iter",
            "extra": "iterations: 5580\ncpu: 125420.60931899483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 124660.40267379805,
            "unit": "ns/iter",
            "extra": "iterations: 5610\ncpu: 124657.78966132009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81892.0985684009,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 81890.75334428553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127775.36214442863,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 127776.69584245172 ns\nthreads: 1"
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
        "date": 1702492945913,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1343.7113989329882,
            "unit": "ns/iter",
            "extra": "iterations: 506100\ncpu: 1343.6085753803598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16252.06541963978,
            "unit": "ns/iter",
            "extra": "iterations: 50841\ncpu: 16251.37782498377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34241.68392776073,
            "unit": "ns/iter",
            "extra": "iterations: 24197\ncpu: 34239.23626895898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50923.77368228965,
            "unit": "ns/iter",
            "extra": "iterations: 16468\ncpu: 50920.233179499635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56730.987899993575,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56726.77999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71394.12996682196,
            "unit": "ns/iter",
            "extra": "iterations: 12357\ncpu: 71391.36521809499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84976.90897422747,
            "unit": "ns/iter",
            "extra": "iterations: 10129\ncpu: 84969.31582584657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98043.85818630474,
            "unit": "ns/iter",
            "extra": "iterations: 8899\ncpu: 98036.94797168222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112917.62412748385,
            "unit": "ns/iter",
            "extra": "iterations: 7593\ncpu: 112908.60002634003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1126.3514601556324,
            "unit": "ns/iter",
            "extra": "iterations: 596409\ncpu: 1126.2796168401214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 926.4190413440338,
            "unit": "ns/iter",
            "extra": "iterations: 752804\ncpu: 926.4163049080507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 910.0374250643201,
            "unit": "ns/iter",
            "extra": "iterations: 771328\ncpu: 909.9765599070693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 925.4917201063681,
            "unit": "ns/iter",
            "extra": "iterations: 754901\ncpu: 925.4296921053218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1825.43673713941,
            "unit": "ns/iter",
            "extra": "iterations: 383835\ncpu: 1825.3113968241603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5024.650352165929,
            "unit": "ns/iter",
            "extra": "iterations: 158448\ncpu: 5024.402327577504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24102.888053149512,
            "unit": "ns/iter",
            "extra": "iterations: 34168\ncpu: 24101.52481854369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18464.39308738003,
            "unit": "ns/iter",
            "extra": "iterations: 44209\ncpu: 18463.17265715125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18012.441692605153,
            "unit": "ns/iter",
            "extra": "iterations: 45303\ncpu: 18011.540074608776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18845.877727345753,
            "unit": "ns/iter",
            "extra": "iterations: 43403\ncpu: 18845.135128908132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54414.62649999949,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54410.439999999835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 546205.0090000047,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546179.3000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 554340.1489362338,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 554313.2817537057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 560353.1483622317,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 560325.4977520871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 559004.5569131578,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 558980.4501607714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326160.95303549815,
            "unit": "ns/iter",
            "extra": "iterations: 2619\ncpu: 326127.64413898543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 553505.2075111794,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 553490.1336728203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2365415.753807301,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2365393.1472081235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1066859.3751438207,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1066828.9988492506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3329347.007168648,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3329267.741935482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7372.11509092321,
            "unit": "ns/iter",
            "extra": "iterations: 114327\ncpu: 7371.923517629247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41180.61529312858,
            "unit": "ns/iter",
            "extra": "iterations: 20179\ncpu: 41179.642202289586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32249.17824515262,
            "unit": "ns/iter",
            "extra": "iterations: 25723\ncpu: 32248.205885783096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31887.806960590086,
            "unit": "ns/iter",
            "extra": "iterations: 26492\ncpu: 31887.39242035316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32063.455989697162,
            "unit": "ns/iter",
            "extra": "iterations: 25619\ncpu: 32062.328740388122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 65260.07708617162,
            "unit": "ns/iter",
            "extra": "iterations: 13206\ncpu: 65256.53490837488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 590585.6740000673,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590563.0000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 590734.8453261977,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 590702.0847343651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 585142.5314591773,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 585114.5247657262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 580822.1441018323,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 580800.4021447694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 345218.9992088691,
            "unit": "ns/iter",
            "extra": "iterations: 2528\ncpu: 345214.794303798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 573698.8267026341,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 573691.8408631118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2538573.8206521603,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2538443.4782608645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1075339.257575793,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1075322.1445221428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4909.083629749607,
            "unit": "ns/iter",
            "extra": "iterations: 161091\ncpu: 4909.01602199998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23677.7341108401,
            "unit": "ns/iter",
            "extra": "iterations: 34898\ncpu: 23677.176342483937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18873.056881027067,
            "unit": "ns/iter",
            "extra": "iterations: 43758\ncpu: 18872.016545545946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18009.09142248916,
            "unit": "ns/iter",
            "extra": "iterations: 46039\ncpu: 18008.707834661967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18557.01216201096,
            "unit": "ns/iter",
            "extra": "iterations: 44565\ncpu: 18556.11129810383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 51794.43690000199,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51793.649999999754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 576810.292999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576785.700000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 574861.3469387573,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 574854.1145490463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 568522.5639194972,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 568511.8754055807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 565805.5922078182,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 565777.4025973985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329595.08496981295,
            "unit": "ns/iter",
            "extra": "iterations: 2648\ncpu: 329582.5528700884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 561580.6402555683,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 561557.5079872224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 536.7007862264699,
            "unit": "ns/iter",
            "extra": "iterations: 1306621\ncpu: 536.6727612674267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3039.3784825431235,
            "unit": "ns/iter",
            "extra": "iterations: 238188\ncpu: 3039.147648076284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2493.409815061753,
            "unit": "ns/iter",
            "extra": "iterations: 280202\ncpu: 2493.2777067972406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2448.004577235338,
            "unit": "ns/iter",
            "extra": "iterations: 297778\ncpu: 2447.9064940996122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1916.6583140764988,
            "unit": "ns/iter",
            "extra": "iterations: 365236\ncpu: 1916.5550493379626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16196.85535763533,
            "unit": "ns/iter",
            "extra": "iterations: 43452\ncpu: 16195.206204547527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30189.768662585688,
            "unit": "ns/iter",
            "extra": "iterations: 22880\ncpu: 30187.827797202746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7278.469557252547,
            "unit": "ns/iter",
            "extra": "iterations: 96082\ncpu: 7278.0583251805265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7214.1713860524005,
            "unit": "ns/iter",
            "extra": "iterations: 96764\ncpu: 7214.151957339397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7229.653311614122,
            "unit": "ns/iter",
            "extra": "iterations: 96992\ncpu: 7229.179726163052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14674.016389320319,
            "unit": "ns/iter",
            "extra": "iterations: 47714\ncpu: 14672.986963993679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13813.378013234482,
            "unit": "ns/iter",
            "extra": "iterations: 50776\ncpu: 13812.785567984856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5184.489288597592,
            "unit": "ns/iter",
            "extra": "iterations: 135043\ncpu: 5184.252423302204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26121.68216071049,
            "unit": "ns/iter",
            "extra": "iterations: 26806\ncpu: 26120.465567410014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20886.42384046411,
            "unit": "ns/iter",
            "extra": "iterations: 33246\ncpu: 20885.841905792975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20541.392185705605,
            "unit": "ns/iter",
            "extra": "iterations: 33989\ncpu: 20540.733766807025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21180.43317664715,
            "unit": "ns/iter",
            "extra": "iterations: 32975\ncpu: 21179.878695981937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50426.76899078678,
            "unit": "ns/iter",
            "extra": "iterations: 13783\ncpu: 50425.51694115969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154188.09727711443,
            "unit": "ns/iter",
            "extra": "iterations: 4554\ncpu: 154186.01229688342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130857.36745750828,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 130853.40930319601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129564.77985214074,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 129557.65249537757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134015.40802238596,
            "unit": "ns/iter",
            "extra": "iterations: 5360\ncpu: 134013.67537313272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82097.4543608151,
            "unit": "ns/iter",
            "extra": "iterations: 8370\ncpu: 82095.44802867308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130047.9105917192,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 130044.2404006661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5315.162589566472,
            "unit": "ns/iter",
            "extra": "iterations: 131466\ncpu: 5315.034305447768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26459.105526115214,
            "unit": "ns/iter",
            "extra": "iterations: 26420\ncpu: 26458.440575321285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21568.37663352779,
            "unit": "ns/iter",
            "extra": "iterations: 31986\ncpu: 21568.304883386165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21775.00193158437,
            "unit": "ns/iter",
            "extra": "iterations: 32098\ncpu: 21774.630818119644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22189.509828205955,
            "unit": "ns/iter",
            "extra": "iterations: 31491\ncpu: 22188.3808072147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49377.727266310394,
            "unit": "ns/iter",
            "extra": "iterations: 14175\ncpu: 49377.552028218706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153732.05226174882,
            "unit": "ns/iter",
            "extra": "iterations: 4554\ncpu: 153731.53271848927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128590.14369610518,
            "unit": "ns/iter",
            "extra": "iterations: 5449\ncpu: 128587.13525417438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127646.05323821583,
            "unit": "ns/iter",
            "extra": "iterations: 5466\ncpu: 127642.70032930771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128316.54587240895,
            "unit": "ns/iter",
            "extra": "iterations: 5439\ncpu: 128313.36642765302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82450.92853778467,
            "unit": "ns/iter",
            "extra": "iterations: 8494\ncpu: 82450.6592889097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129464.90920859786,
            "unit": "ns/iter",
            "extra": "iterations: 5408\ncpu: 129464.55251479385 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}