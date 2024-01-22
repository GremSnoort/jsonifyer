window.BENCHMARK_DATA = {
  "lastUpdate": 1705963551267,
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
        "date": 1702503958316,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1364.112146374465,
            "unit": "ns/iter",
            "extra": "iterations: 511947\ncpu: 1364.095697406177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16130.647948035814,
            "unit": "ns/iter",
            "extra": "iterations: 50342\ncpu: 16130.501370624925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34334.65792928102,
            "unit": "ns/iter",
            "extra": "iterations: 24378\ncpu: 34334.12092870621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50224.5184672734,
            "unit": "ns/iter",
            "extra": "iterations: 16624\ncpu: 50223.80293551494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55599.30699999995,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55597.60000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70261.70703373903,
            "unit": "ns/iter",
            "extra": "iterations: 12568\ncpu: 70260.7097390197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83320.825158079,
            "unit": "ns/iter",
            "extra": "iterations: 10438\ncpu: 83319.78348342597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97042.89693006492,
            "unit": "ns/iter",
            "extra": "iterations: 9023\ncpu: 97042.26975507033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113602.98360655815,
            "unit": "ns/iter",
            "extra": "iterations: 7686\ncpu: 113602.39396304966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1146.2290954899443,
            "unit": "ns/iter",
            "extra": "iterations: 617594\ncpu: 1146.2025213975523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 929.5712267095033,
            "unit": "ns/iter",
            "extra": "iterations: 752990\ncpu: 929.5646688535033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 915.6743773897906,
            "unit": "ns/iter",
            "extra": "iterations: 762877\ncpu: 915.6584875412432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 902.4793117860111,
            "unit": "ns/iter",
            "extra": "iterations: 760868\ncpu: 902.4405021633182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1835.9572430176147,
            "unit": "ns/iter",
            "extra": "iterations: 381388\ncpu: 1835.9316496586175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5125.67503678713,
            "unit": "ns/iter",
            "extra": "iterations: 157664\ncpu: 5125.593667546173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25283.409144746536,
            "unit": "ns/iter",
            "extra": "iterations: 32084\ncpu: 25283.340605909518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19136.325171378186,
            "unit": "ns/iter",
            "extra": "iterations: 42596\ncpu: 19136.017466428715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18426.244112709173,
            "unit": "ns/iter",
            "extra": "iterations: 44078\ncpu: 18425.951721947415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18913.844444445887,
            "unit": "ns/iter",
            "extra": "iterations: 43245\ncpu: 18913.331020927315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54570.50950000166,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54570.08000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 554378.64299995,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554376.4000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 552891.0642902715,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 552884.6594525764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 548508.1999999863,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 548492.1875000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 551640.9199466509,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 551634.6897931951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326907.54754829995,
            "unit": "ns/iter",
            "extra": "iterations: 2692\ncpu: 326905.7206537891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 556097.0785942676,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 556084.7923322668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2363806.4351144764,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2363787.7862595445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1093848.2715465445,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 1093788.0755608026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3326408.9820790994,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3326284.5878136083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7506.623105959833,
            "unit": "ns/iter",
            "extra": "iterations: 112326\ncpu: 7506.343144062819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41882.184986326356,
            "unit": "ns/iter",
            "extra": "iterations: 20115\ncpu: 41880.42754163559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32799.7435466183,
            "unit": "ns/iter",
            "extra": "iterations: 25568\ncpu: 32798.95963704622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32052.806765324865,
            "unit": "ns/iter",
            "extra": "iterations: 26015\ncpu: 32051.516432827142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32174.23482922099,
            "unit": "ns/iter",
            "extra": "iterations: 25559\ncpu: 32173.72745412584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66369.58421851606,
            "unit": "ns/iter",
            "extra": "iterations: 13180\ncpu: 66366.31259484054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 589363.4300000485,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589337.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 590277.0454854384,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 590255.8723693142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 581181.5672947617,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 581163.9973082085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 577596.4668896678,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 577580.2675585308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 341894.7913416216,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 341879.13416536513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 573725.9487179375,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 573719.5923734386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2507035.7901908164,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2507001.907356946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1093089.199765004,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1093086.3689776736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4872.641491231845,
            "unit": "ns/iter",
            "extra": "iterations: 163784\ncpu: 4872.596224295454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23197.9448572318,
            "unit": "ns/iter",
            "extra": "iterations: 35127\ncpu: 23197.546047200107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18554.101402177264,
            "unit": "ns/iter",
            "extra": "iterations: 44003\ncpu: 18553.95768470319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 17912.99902222995,
            "unit": "ns/iter",
            "extra": "iterations: 46023\ncpu: 17912.33079112608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18131.916108653277,
            "unit": "ns/iter",
            "extra": "iterations: 44951\ncpu: 18131.04046628559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 54349.95310000659,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54349.67999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 570666.0990000501,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570669.2999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 574615.4721854335,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 574614.7019867577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 565632.5188067497,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 565611.3488975357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566884.7117762276,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 566869.5510735215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 331460.9826480881,
            "unit": "ns/iter",
            "extra": "iterations: 2651\ncpu: 331448.01961523906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 561133.0224647425,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 561116.5596919104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 540.05227536349,
            "unit": "ns/iter",
            "extra": "iterations: 1294013\ncpu: 540.0465064879539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3061.112962023407,
            "unit": "ns/iter",
            "extra": "iterations: 234539\ncpu: 3060.9890039609636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2463.6120335392416,
            "unit": "ns/iter",
            "extra": "iterations: 283491\ncpu: 2463.542757971155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2453.144170177239,
            "unit": "ns/iter",
            "extra": "iterations: 287230\ncpu: 2453.1114437906836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1951.084575911847,
            "unit": "ns/iter",
            "extra": "iterations: 359937\ncpu: 1951.0458774729989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16096.745163965084,
            "unit": "ns/iter",
            "extra": "iterations: 43424\ncpu: 16096.552597641923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30354.565600064627,
            "unit": "ns/iter",
            "extra": "iterations: 23064\ncpu: 30354.487513007014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7207.769299792803,
            "unit": "ns/iter",
            "extra": "iterations: 96957\ncpu: 7207.326959373751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7192.936765914271,
            "unit": "ns/iter",
            "extra": "iterations: 97400\ncpu: 7192.69815195071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7249.72955495545,
            "unit": "ns/iter",
            "extra": "iterations: 97114\ncpu: 7249.4686656917975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14409.280848249064,
            "unit": "ns/iter",
            "extra": "iterations: 48382\ncpu: 14408.089785457403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13719.777244069985,
            "unit": "ns/iter",
            "extra": "iterations: 56627\ncpu: 13719.605488547972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5208.412374507622,
            "unit": "ns/iter",
            "extra": "iterations: 134470\ncpu: 5207.993604521448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26074.995075547035,
            "unit": "ns/iter",
            "extra": "iterations: 26805\ncpu: 26073.557172169123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21104.49571776362,
            "unit": "ns/iter",
            "extra": "iterations: 33277\ncpu: 21102.98704811135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20918.834923206527,
            "unit": "ns/iter",
            "extra": "iterations: 33336\ncpu: 20917.743580513485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21462.628843204668,
            "unit": "ns/iter",
            "extra": "iterations: 32590\ncpu: 21462.27370359003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49552.11903075489,
            "unit": "ns/iter",
            "extra": "iterations: 14114\ncpu: 49552.4443814652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154706.87497257438,
            "unit": "ns/iter",
            "extra": "iterations: 4559\ncpu: 154705.7249396778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129611.77458031695,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 129610.60689909474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 127513.23890411788,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 127508.56621004433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 128410.2355637058,
            "unit": "ns/iter",
            "extra": "iterations: 5455\ncpu: 128402.41979834774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81477.49544711935,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 81476.17324305438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129256.36092165703,
            "unit": "ns/iter",
            "extra": "iterations: 5425\ncpu: 129255.53917050638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5012.995241366645,
            "unit": "ns/iter",
            "extra": "iterations: 139746\ncpu: 5012.829705322483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25315.09795204347,
            "unit": "ns/iter",
            "extra": "iterations: 27442\ncpu: 25314.00043728618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22140.809666717338,
            "unit": "ns/iter",
            "extra": "iterations: 31655\ncpu: 22138.692149739294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21360.094805757137,
            "unit": "ns/iter",
            "extra": "iterations: 32382\ncpu: 21358.649867210184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20891.713154197292,
            "unit": "ns/iter",
            "extra": "iterations: 33457\ncpu: 20889.356487431916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49045.80343843481,
            "unit": "ns/iter",
            "extra": "iterations: 14367\ncpu: 49042.45841163797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 150397.13638315268,
            "unit": "ns/iter",
            "extra": "iterations: 4656\ncpu: 150384.12800687502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 125290.06399848519,
            "unit": "ns/iter",
            "extra": "iterations: 5297\ncpu: 125278.2707192733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 124525.59633842939,
            "unit": "ns/iter",
            "extra": "iterations: 5626\ncpu: 124511.07358691862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 125970.19314697012,
            "unit": "ns/iter",
            "extra": "iterations: 5545\ncpu: 125965.98737601546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82320.04713884684,
            "unit": "ns/iter",
            "extra": "iterations: 8528\ncpu: 82316.04127579843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127663.89896042571,
            "unit": "ns/iter",
            "extra": "iterations: 5483\ncpu: 127658.21630494276 ns\nthreads: 1"
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
        "date": 1705575638485,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1333.155578109932,
            "unit": "ns/iter",
            "extra": "iterations: 509384\ncpu: 1333.054434375638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16385.245607115838,
            "unit": "ns/iter",
            "extra": "iterations: 50707\ncpu: 16384.201392312698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34157.71153125173,
            "unit": "ns/iter",
            "extra": "iterations: 24013\ncpu: 34157.15237579646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50087.18256618092,
            "unit": "ns/iter",
            "extra": "iterations: 16772\ncpu: 50086.63248270928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55893.92509999697,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55893.38000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69895.04550927205,
            "unit": "ns/iter",
            "extra": "iterations: 12459\ncpu: 69894.0926238061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83305.84589371929,
            "unit": "ns/iter",
            "extra": "iterations: 10350\ncpu: 83305.15942028977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97050.11086100685,
            "unit": "ns/iter",
            "extra": "iterations: 8885\ncpu: 97049.34158694427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115072.13723936584,
            "unit": "ns/iter",
            "extra": "iterations: 7578\ncpu: 115070.19002375306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1105.239863095069,
            "unit": "ns/iter",
            "extra": "iterations: 618532\ncpu: 1105.1738632762738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 902.6812283347077,
            "unit": "ns/iter",
            "extra": "iterations: 776010\ncpu: 902.6564090668916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 893.5959015117473,
            "unit": "ns/iter",
            "extra": "iterations: 783606\ncpu: 893.550840601015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 890.2615547423478,
            "unit": "ns/iter",
            "extra": "iterations: 784310\ncpu: 890.1801583557522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1795.3645901438208,
            "unit": "ns/iter",
            "extra": "iterations: 390027\ncpu: 1795.2549438884978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5007.091844232098,
            "unit": "ns/iter",
            "extra": "iterations: 161959\ncpu: 5006.84802943955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24192.190326281576,
            "unit": "ns/iter",
            "extra": "iterations: 33989\ncpu: 24191.179499249753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19016.782813515583,
            "unit": "ns/iter",
            "extra": "iterations: 43092\ncpu: 19015.896222036536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18071.383480367804,
            "unit": "ns/iter",
            "extra": "iterations: 45001\ncpu: 18070.63620808424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18290.63325672984,
            "unit": "ns/iter",
            "extra": "iterations: 43949\ncpu: 18289.710801155918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54133.50490000539,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54131.69000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 565731.0330000201,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565712.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 564211.2904884238,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 564201.4781491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 559988.4716129524,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 559971.9354838721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 554341.7011568468,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 554339.1388174813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325586.23891807545,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 325580.9917355362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 558326.8491048305,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 558312.9156010248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2386119.259640123,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2386114.6529562934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1101090.1279621306,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1101063.981042653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3328659.193548153,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3328634.767025089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7363.532180587468,
            "unit": "ns/iter",
            "extra": "iterations: 115955\ncpu: 7349.215643999814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41433.76669665885,
            "unit": "ns/iter",
            "extra": "iterations: 20004\ncpu: 41432.86342731453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32790.651807182105,
            "unit": "ns/iter",
            "extra": "iterations: 25371\ncpu: 32789.20815103856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32351.934923324643,
            "unit": "ns/iter",
            "extra": "iterations: 25954\ncpu: 32350.41226785846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32562.429480383493,
            "unit": "ns/iter",
            "extra": "iterations: 25461\ncpu: 32561.7964730372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 69246.90326070238,
            "unit": "ns/iter",
            "extra": "iterations: 12942\ncpu: 69246.7702055326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 595211.1200000445,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595200.2999999948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593844.4306219651,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 593834.4497607646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 591287.699665579,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 591292.240802677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 583729.5915208766,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 583683.6473755032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 342761.6967792918,
            "unit": "ns/iter",
            "extra": "iterations: 2546\ncpu: 342745.2867242714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576667.0225165585,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 576670.3973509925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2528287.1689374065,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2528243.0517711155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1105072.889151012,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1105065.0943396245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4838.749406349552,
            "unit": "ns/iter",
            "extra": "iterations: 164238\ncpu: 4838.659749875196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23518.353754537104,
            "unit": "ns/iter",
            "extra": "iterations: 34425\ncpu: 23518.472040668104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18783.949170435128,
            "unit": "ns/iter",
            "extra": "iterations: 43577\ncpu: 18783.603735915647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18074.981896362122,
            "unit": "ns/iter",
            "extra": "iterations: 45350\ncpu: 18074.934950385865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18235.533712302393,
            "unit": "ns/iter",
            "extra": "iterations: 44331\ncpu: 18234.858225620846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52991.565100001026,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52992.000000000415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 569784.2370000217,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569781.5999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 576425.9973873636,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 576425.9307642034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 565297.7362924129,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 565281.6579634459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 565794.3667100377,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 565773.7321196349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330970.40450285,
            "unit": "ns/iter",
            "extra": "iterations: 2665\ncpu: 330950.1688555332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559221.5938697358,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 559195.977011493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 531.8573594689817,
            "unit": "ns/iter",
            "extra": "iterations: 1319015\ncpu: 531.829357512995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3060.374562330348,
            "unit": "ns/iter",
            "extra": "iterations: 229054\ncpu: 3060.2010879530585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2316.2203647566184,
            "unit": "ns/iter",
            "extra": "iterations: 301845\ncpu: 2316.1026354586143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2470.530278128833,
            "unit": "ns/iter",
            "extra": "iterations: 284760\ncpu: 2470.399985953064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1949.7028979667118,
            "unit": "ns/iter",
            "extra": "iterations: 359873\ncpu: 1949.5510916351193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16204.184401242903,
            "unit": "ns/iter",
            "extra": "iterations: 43465\ncpu: 16203.451052571121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30428.570331925675,
            "unit": "ns/iter",
            "extra": "iterations: 22927\ncpu: 30426.05661447243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7246.571933352126,
            "unit": "ns/iter",
            "extra": "iterations: 96506\ncpu: 7246.255155120022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7201.024239245193,
            "unit": "ns/iter",
            "extra": "iterations: 97239\ncpu: 7200.7496991947655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7231.807453096885,
            "unit": "ns/iter",
            "extra": "iterations: 97114\ncpu: 7231.618510204576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14631.693702928038,
            "unit": "ns/iter",
            "extra": "iterations: 47800\ncpu: 14630.809623431081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13797.171301313525,
            "unit": "ns/iter",
            "extra": "iterations: 50741\ncpu: 13796.188486628125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5291.97422496798,
            "unit": "ns/iter",
            "extra": "iterations: 126285\ncpu: 5291.7123965633255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26506.113957965255,
            "unit": "ns/iter",
            "extra": "iterations: 26501\ncpu: 26504.165880532557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21067.614836939272,
            "unit": "ns/iter",
            "extra": "iterations: 33147\ncpu: 21066.449452439425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20785.36224262325,
            "unit": "ns/iter",
            "extra": "iterations: 33657\ncpu: 20784.083548741768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21594.088005678208,
            "unit": "ns/iter",
            "extra": "iterations: 32407\ncpu: 21593.063227080176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49802.059791165346,
            "unit": "ns/iter",
            "extra": "iterations: 13982\ncpu: 49799.399227578935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155054.40394854618,
            "unit": "ns/iter",
            "extra": "iterations: 4508\ncpu: 155044.21029281418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131209.39092954822,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 131197.7511244371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129685.0488436691,
            "unit": "ns/iter",
            "extra": "iterations: 5405\ncpu: 129682.96022201465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130056.2964199652,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 130055.62975329215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81974.4497714156,
            "unit": "ns/iter",
            "extra": "iterations: 8531\ncpu: 81974.09447895881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130056.41705542314,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 130056.20451576656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5109.202402494063,
            "unit": "ns/iter",
            "extra": "iterations: 137607\ncpu: 5109.125262523032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25662.41454572055,
            "unit": "ns/iter",
            "extra": "iterations: 27307\ncpu: 25661.30296261039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22220.184466328177,
            "unit": "ns/iter",
            "extra": "iterations: 31377\ncpu: 22218.825891576787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21090.82226438922,
            "unit": "ns/iter",
            "extra": "iterations: 33201\ncpu: 21089.563567362526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22258.59686346591,
            "unit": "ns/iter",
            "extra": "iterations: 31436\ncpu: 22257.335538872798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 54162.782193959174,
            "unit": "ns/iter",
            "extra": "iterations: 13838\ncpu: 54158.115334585396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151868.5294882897,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 151856.85169124138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128096.1576733159,
            "unit": "ns/iter",
            "extra": "iterations: 5467\ncpu: 128088.62264496046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125939.92027292972,
            "unit": "ns/iter",
            "extra": "iterations: 5569\ncpu: 125935.98491650353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127103.81692948141,
            "unit": "ns/iter",
            "extra": "iterations: 5517\ncpu: 127096.64672829588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82372.57863917948,
            "unit": "ns/iter",
            "extra": "iterations: 8539\ncpu: 82368.7668345239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128435.1405186731,
            "unit": "ns/iter",
            "extra": "iterations: 5437\ncpu: 128428.4899760885 ns\nthreads: 1"
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
        "date": 1705773454995,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1329.645351829766,
            "unit": "ns/iter",
            "extra": "iterations: 518731\ncpu: 1329.604746969046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15880.722533740229,
            "unit": "ns/iter",
            "extra": "iterations: 51718\ncpu: 15879.722727096949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33383.5705689934,
            "unit": "ns/iter",
            "extra": "iterations: 24763\ncpu: 33382.001373016195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49947.13171106393,
            "unit": "ns/iter",
            "extra": "iterations: 16931\ncpu: 49945.425550764885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55280.54549999978,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55279.41000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69424.79930494985,
            "unit": "ns/iter",
            "extra": "iterations: 12661\ncpu: 69423.4104731064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82616.69111895896,
            "unit": "ns/iter",
            "extra": "iterations: 10483\ncpu: 82612.99246398929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95454.82497520355,
            "unit": "ns/iter",
            "extra": "iterations: 9073\ncpu: 95451.21789926154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112658.82835820812,
            "unit": "ns/iter",
            "extra": "iterations: 7906\ncpu: 112653.89577536056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1148.270488410204,
            "unit": "ns/iter",
            "extra": "iterations: 611187\ncpu: 1148.2413729349605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 944.0105758785635,
            "unit": "ns/iter",
            "extra": "iterations: 743768\ncpu: 943.9603478504064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 920.5865011075161,
            "unit": "ns/iter",
            "extra": "iterations: 760655\ncpu: 920.5637246846467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 922.0049468720429,
            "unit": "ns/iter",
            "extra": "iterations: 761087\ncpu: 921.9905214515557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1819.749359262849,
            "unit": "ns/iter",
            "extra": "iterations: 384323\ncpu: 1819.6506584305414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4933.986729892882,
            "unit": "ns/iter",
            "extra": "iterations: 161114\ncpu: 4933.843117295825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 23932.500628231144,
            "unit": "ns/iter",
            "extra": "iterations: 34223\ncpu: 23931.750577097308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19026.382361054963,
            "unit": "ns/iter",
            "extra": "iterations: 43506\ncpu: 19025.414885303162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18386.045823377895,
            "unit": "ns/iter",
            "extra": "iterations: 44366\ncpu: 18385.243204255523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19006.853767457273,
            "unit": "ns/iter",
            "extra": "iterations: 43889\ncpu: 19006.13137688263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 53851.30140000455,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53850.359999999855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 576202.8049999799,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576178.5999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 561644.8533762058,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 561610.4823151132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 555704.6538461335,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 555695.5769230754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 555319.7233907067,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 555301.7845761627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325098.94021943334,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 325087.0979947036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 554215.895371016,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 554204.8192771088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2370830.3196932073,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2370711.2531969235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1106903.7599039231,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 1106866.1464585804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3324102.286738238,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3324012.544802867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7429.6192325851525,
            "unit": "ns/iter",
            "extra": "iterations: 112247\ncpu: 7429.383413365183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40742.70194834272,
            "unit": "ns/iter",
            "extra": "iterations: 20171\ncpu: 40741.65385950136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31999.43289499478,
            "unit": "ns/iter",
            "extra": "iterations: 25475\ncpu: 31997.68792934242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31766.51263259644,
            "unit": "ns/iter",
            "extra": "iterations: 25925\ncpu: 31764.790742526522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32104.20284585995,
            "unit": "ns/iter",
            "extra": "iterations: 25581\ncpu: 32102.720769320993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66061.01233345974,
            "unit": "ns/iter",
            "extra": "iterations: 13135\ncpu: 66058.45451084855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 594389.7670000525,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594347.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589355.9830738149,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 589329.3161814504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 584682.3587683823,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 584659.7054886199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 579292.282068486,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 579267.2263263894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 341459.4243845135,
            "unit": "ns/iter",
            "extra": "iterations: 2559\ncpu: 341451.6608050018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 571271.1935270511,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 571246.4993394974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2540763.513661162,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2540657.650273219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1108151.2538922396,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 1108115.8083832308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4826.766578137054,
            "unit": "ns/iter",
            "extra": "iterations: 165293\ncpu: 4826.537118934277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23503.127005345315,
            "unit": "ns/iter",
            "extra": "iterations: 35156\ncpu: 23502.24997155539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18665.95049504878,
            "unit": "ns/iter",
            "extra": "iterations: 43935\ncpu: 18665.237282348942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 17424.810131426977,
            "unit": "ns/iter",
            "extra": "iterations: 47022\ncpu: 17424.4183573646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18177.970866524563,
            "unit": "ns/iter",
            "extra": "iterations: 45446\ncpu: 18177.342340359985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 51864.7860000101,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51863.63000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 569914.7880000055,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569887.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 565507.8889610827,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 565486.168831171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 564805.7789269877,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 564780.6076276646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566060.5243902913,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 566046.4056482657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327153.4073243458,
            "unit": "ns/iter",
            "extra": "iterations: 2676\ncpu: 327135.5754857976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 556162.4914177286,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 556144.7552447547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 528.7799108618893,
            "unit": "ns/iter",
            "extra": "iterations: 1324686\ncpu: 528.7668171929073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3081.819129287698,
            "unit": "ns/iter",
            "extra": "iterations: 227400\ncpu: 3081.7682497801366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2469.3557703544575,
            "unit": "ns/iter",
            "extra": "iterations: 282331\ncpu: 2469.314032111244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2430.318789109896,
            "unit": "ns/iter",
            "extra": "iterations: 287491\ncpu: 2430.2986876110963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1920.311504881513,
            "unit": "ns/iter",
            "extra": "iterations: 364341\ncpu: 1920.22171537104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16224.827670461023,
            "unit": "ns/iter",
            "extra": "iterations: 43382\ncpu: 16224.32575722634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30128.815894669835,
            "unit": "ns/iter",
            "extra": "iterations: 23014\ncpu: 30127.526722864462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7238.13895630425,
            "unit": "ns/iter",
            "extra": "iterations: 96829\ncpu: 7237.753152464674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7112.8052408579315,
            "unit": "ns/iter",
            "extra": "iterations: 98419\ncpu: 7112.417317794289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7158.546135325212,
            "unit": "ns/iter",
            "extra": "iterations: 98016\ncpu: 7158.377203721788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14359.567984514384,
            "unit": "ns/iter",
            "extra": "iterations: 51144\ncpu: 14359.28163616476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13723.444996172286,
            "unit": "ns/iter",
            "extra": "iterations: 50951\ncpu: 13723.33222115344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5184.3076576045,
            "unit": "ns/iter",
            "extra": "iterations: 135212\ncpu: 5184.06428423513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26138.449515288652,
            "unit": "ns/iter",
            "extra": "iterations: 26820\ncpu: 26137.371364653016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20946.785165015535,
            "unit": "ns/iter",
            "extra": "iterations: 33421\ncpu: 20943.885580922135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20713.078015446437,
            "unit": "ns/iter",
            "extra": "iterations: 33801\ncpu: 20712.097275228494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21447.52557740588,
            "unit": "ns/iter",
            "extra": "iterations: 32646\ncpu: 21446.36708938276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50555.32169078857,
            "unit": "ns/iter",
            "extra": "iterations: 14029\ncpu: 50552.65521419847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155520.5069891457,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 155509.27446194683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131657.26761885517,
            "unit": "ns/iter",
            "extra": "iterations: 5321\ncpu: 131649.1448975758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130082.10178306117,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 130071.4153046065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130165.65488371355,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130164.61395348806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82274.08616619521,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 82271.11661945135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130455.49878209071,
            "unit": "ns/iter",
            "extra": "iterations: 5337\ncpu: 130447.0676409969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5239.945842565836,
            "unit": "ns/iter",
            "extra": "iterations: 133592\ncpu: 5239.655069165868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26440.555938232857,
            "unit": "ns/iter",
            "extra": "iterations: 26422\ncpu: 26439.38384679468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22473.65327777118,
            "unit": "ns/iter",
            "extra": "iterations: 31195\ncpu: 22472.47956403242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22143.5916151026,
            "unit": "ns/iter",
            "extra": "iterations: 31676\ncpu: 22142.32857684022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21819.801683816604,
            "unit": "ns/iter",
            "extra": "iterations: 32070\ncpu: 21818.71842843807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48927.735559126006,
            "unit": "ns/iter",
            "extra": "iterations: 14317\ncpu: 48925.57099951163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153174.53123627428,
            "unit": "ns/iter",
            "extra": "iterations: 4546\ncpu: 153166.65200175962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127658.46571845838,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 127651.2946754203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125997.38696834353,
            "unit": "ns/iter",
            "extra": "iterations: 5525\ncpu: 125994.98642533917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126317.92329904347,
            "unit": "ns/iter",
            "extra": "iterations: 5541\ncpu: 126315.1055766103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81916.98597311304,
            "unit": "ns/iter",
            "extra": "iterations: 8555\ncpu: 81914.13208649885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128742.08468335733,
            "unit": "ns/iter",
            "extra": "iterations: 5432\ncpu: 128733.1553755533 ns\nthreads: 1"
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
        "date": 1705775072586,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1388.6559392314261,
            "unit": "ns/iter",
            "extra": "iterations: 512238\ncpu: 1387.7113763523987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16450.273741459296,
            "unit": "ns/iter",
            "extra": "iterations: 50197\ncpu: 16449.660338267226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34502.36999622881,
            "unit": "ns/iter",
            "extra": "iterations: 23857\ncpu: 34500.49461374021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51102.52846910203,
            "unit": "ns/iter",
            "extra": "iterations: 16474\ncpu: 51102.16098093964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57055.164700000205,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57051.78999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71513.1246227819,
            "unit": "ns/iter",
            "extra": "iterations: 12261\ncpu: 71512.88638773345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85051.57450769756,
            "unit": "ns/iter",
            "extra": "iterations: 10207\ncpu: 85050.04408739104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98337.10238096095,
            "unit": "ns/iter",
            "extra": "iterations: 8820\ncpu: 98334.31972789112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115736.90446286376,
            "unit": "ns/iter",
            "extra": "iterations: 7484\ncpu: 115731.02618920353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1133.1903256310254,
            "unit": "ns/iter",
            "extra": "iterations: 618645\ncpu: 1133.1540705897553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 938.7110566821201,
            "unit": "ns/iter",
            "extra": "iterations: 747150\ncpu: 938.7066854045366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 897.2071671858992,
            "unit": "ns/iter",
            "extra": "iterations: 777739\ncpu: 897.1648586479525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 913.6571501107467,
            "unit": "ns/iter",
            "extra": "iterations: 768100\ncpu: 913.6240072907186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1829.5964818652585,
            "unit": "ns/iter",
            "extra": "iterations: 380372\ncpu: 1829.4835056208117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4952.71352794984,
            "unit": "ns/iter",
            "extra": "iterations: 162131\ncpu: 4952.609926540879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 23835.534236618667,
            "unit": "ns/iter",
            "extra": "iterations: 34393\ncpu: 23834.300584421268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19094.65980415049,
            "unit": "ns/iter",
            "extra": "iterations: 42890\ncpu: 19093.947307064616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18358.886096352784,
            "unit": "ns/iter",
            "extra": "iterations: 44046\ncpu: 18358.12786632161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18923.142298745865,
            "unit": "ns/iter",
            "extra": "iterations: 42980\ncpu: 18922.73848301537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54704.66659999146,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54700.1299999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 558062.5690000715,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558034.7000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 558261.1312938364,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 558236.838750798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 569223.0953591738,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 569205.9758423403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 554710.646085318,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 554680.7765754294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 327134.27039108233,
            "unit": "ns/iter",
            "extra": "iterations: 2685\ncpu: 327121.5642458104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 555047.6751918088,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 555023.3375959089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2387363.578005101,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2387236.572890025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1117353.4391728502,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1117315.5717761575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3360542.4460432483,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3360542.805755393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7378.395805618717,
            "unit": "ns/iter",
            "extra": "iterations: 115011\ncpu: 7378.275121510139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41358.50650321263,
            "unit": "ns/iter",
            "extra": "iterations: 20067\ncpu: 41358.045547416245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32705.81515499609,
            "unit": "ns/iter",
            "extra": "iterations: 25259\ncpu: 32705.396096440803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31819.067553027777,
            "unit": "ns/iter",
            "extra": "iterations: 26024\ncpu: 31819.20919151558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32140.187169367582,
            "unit": "ns/iter",
            "extra": "iterations: 25330\ncpu: 32140.05527043031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 67586.0005380891,
            "unit": "ns/iter",
            "extra": "iterations: 13009\ncpu: 67583.99569528786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 606530.4360000709,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606509.1000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 598003.2375346455,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 597999.3767313045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 590956.6424200523,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 590953.0931339187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587619.8171390159,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 587611.740890689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 345430.6510066894,
            "unit": "ns/iter",
            "extra": "iterations: 2533\ncpu: 345428.1879194631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578087.8014608546,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 578074.8339973425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2545022.626373571,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2544967.3076923015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1127813.5939393465,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1127766.3030303088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4884.793699107534,
            "unit": "ns/iter",
            "extra": "iterations: 165913\ncpu: 4884.62085550859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23949.368901813352,
            "unit": "ns/iter",
            "extra": "iterations: 34047\ncpu: 23947.901430375703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18954.327561820803,
            "unit": "ns/iter",
            "extra": "iterations: 43836\ncpu: 18953.31462724704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18198.030661209537,
            "unit": "ns/iter",
            "extra": "iterations: 45432\ncpu: 18197.68665257977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18521.403190044108,
            "unit": "ns/iter",
            "extra": "iterations: 44200\ncpu: 18520.708144796485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 53895.19729999392,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53894.81000000061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 574213.0659999702,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574163.5999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 574683.8036529506,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 574663.4703196383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 568267.1814073705,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 568244.932214332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 569733.6068653028,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 569697.2797927425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 335590.6578947455,
            "unit": "ns/iter",
            "extra": "iterations: 2622\ncpu: 335577.9938977881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 564906.2390464329,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 564888.9175257706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 524.3705115700362,
            "unit": "ns/iter",
            "extra": "iterations: 1332760\ncpu: 524.3622257570776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3092.5740426660154,
            "unit": "ns/iter",
            "extra": "iterations: 226410\ncpu: 3092.5511240669534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2275.7381517430404,
            "unit": "ns/iter",
            "extra": "iterations: 308442\ncpu: 2275.7289863248257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2379.385040773859,
            "unit": "ns/iter",
            "extra": "iterations: 295657\ncpu: 2379.3950422279813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1967.7703651348684,
            "unit": "ns/iter",
            "extra": "iterations: 355129\ncpu: 1967.6624550515453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16071.341087214652,
            "unit": "ns/iter",
            "extra": "iterations: 43892\ncpu: 16070.340836599064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30826.009015745465,
            "unit": "ns/iter",
            "extra": "iterations: 22738\ncpu: 30824.162195443558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7341.127515579497,
            "unit": "ns/iter",
            "extra": "iterations: 95157\ncpu: 7340.95337179603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7271.70083266664,
            "unit": "ns/iter",
            "extra": "iterations: 96197\ncpu: 7271.453371726836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7348.0032267866045,
            "unit": "ns/iter",
            "extra": "iterations: 95451\ncpu: 7347.937685304376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14603.869764121764,
            "unit": "ns/iter",
            "extra": "iterations: 47652\ncpu: 14603.758499118527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13897.198969583915,
            "unit": "ns/iter",
            "extra": "iterations: 50465\ncpu: 13896.417318934058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5189.6764360032,
            "unit": "ns/iter",
            "extra": "iterations: 134366\ncpu: 5189.5472068827285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26199.463171691856,
            "unit": "ns/iter",
            "extra": "iterations: 26705\ncpu: 26198.356113087462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20972.727049231282,
            "unit": "ns/iter",
            "extra": "iterations: 33354\ncpu: 20971.46968879276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20889.40714669326,
            "unit": "ns/iter",
            "extra": "iterations: 33526\ncpu: 20888.30459941558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21554.293935299105,
            "unit": "ns/iter",
            "extra": "iterations: 32582\ncpu: 21553.3515437972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50068.366507111605,
            "unit": "ns/iter",
            "extra": "iterations: 13997\ncpu: 50068.08601843307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156378.63207337452,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 156374.1668530524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131804.7186090257,
            "unit": "ns/iter",
            "extra": "iterations: 5320\ncpu: 131797.7631578947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131743.60663682874,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 131735.77554064227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 139833.24501212436,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 139827.35409285958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82559.65749054647,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 82556.06096408398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130816.68094259038,
            "unit": "ns/iter",
            "extra": "iterations: 5347\ncpu: 130813.68991958055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5005.4429974915665,
            "unit": "ns/iter",
            "extra": "iterations: 139143\ncpu: 5005.367858965257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26040.971105343426,
            "unit": "ns/iter",
            "extra": "iterations: 26960\ncpu: 26040.856824925788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22048.647162620207,
            "unit": "ns/iter",
            "extra": "iterations: 31737\ncpu: 22048.170904622675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21834.955043207752,
            "unit": "ns/iter",
            "extra": "iterations: 32053\ncpu: 21834.7642966335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22028.344369402046,
            "unit": "ns/iter",
            "extra": "iterations: 31835\ncpu: 22027.7116381341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49354.82601339418,
            "unit": "ns/iter",
            "extra": "iterations: 14185\ncpu: 49354.03595347171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153307.0103183235,
            "unit": "ns/iter",
            "extra": "iterations: 4555\ncpu: 153304.9615806809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128475.92135654921,
            "unit": "ns/iter",
            "extra": "iterations: 5455\ncpu: 128473.51054078822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125453.56464899721,
            "unit": "ns/iter",
            "extra": "iterations: 5584\ncpu: 125451.0565902585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126992.3333333246,
            "unit": "ns/iter",
            "extra": "iterations: 5496\ncpu: 126991.41193595377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82867.02709418135,
            "unit": "ns/iter",
            "extra": "iterations: 8452\ncpu: 82865.88973024178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128308.3243786477,
            "unit": "ns/iter",
            "extra": "iterations: 5472\ncpu: 128306.17690058488 ns\nthreads: 1"
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
        "date": 1705778418489,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1352.7700595922631,
            "unit": "ns/iter",
            "extra": "iterations: 511476\ncpu: 1352.7293558251024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15818.21277316279,
            "unit": "ns/iter",
            "extra": "iterations: 50199\ncpu: 15817.64178569294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33520.30603500397,
            "unit": "ns/iter",
            "extra": "iterations: 24739\ncpu: 33518.74368406161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49706.57630522285,
            "unit": "ns/iter",
            "extra": "iterations: 16932\ncpu: 49704.96692652967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55236.87439999776,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55235.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69480.42595249321,
            "unit": "ns/iter",
            "extra": "iterations: 12546\ncpu: 69475.45034273872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82746.44517311559,
            "unit": "ns/iter",
            "extra": "iterations: 10369\ncpu: 82743.38894782524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95488.90426361006,
            "unit": "ns/iter",
            "extra": "iterations: 8983\ncpu: 95484.54859178443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114001.28606803417,
            "unit": "ns/iter",
            "extra": "iterations: 7673\ncpu: 113999.86967287894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1137.1930313884257,
            "unit": "ns/iter",
            "extra": "iterations: 614527\ncpu: 1137.1466184561466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 971.0827319705368,
            "unit": "ns/iter",
            "extra": "iterations: 741926\ncpu: 971.030129689483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 927.1149183338467,
            "unit": "ns/iter",
            "extra": "iterations: 756311\ncpu: 927.0630732595451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 910.002809566034,
            "unit": "ns/iter",
            "extra": "iterations: 768802\ncpu: 909.959001147238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1875.977066854963,
            "unit": "ns/iter",
            "extra": "iterations: 379538\ncpu: 1875.9130838018866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4719.056125823035,
            "unit": "ns/iter",
            "extra": "iterations: 167855\ncpu: 4718.856751362789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24197.028259098875,
            "unit": "ns/iter",
            "extra": "iterations: 34396\ncpu: 24195.970461681565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20431.237665321765,
            "unit": "ns/iter",
            "extra": "iterations: 42644\ncpu: 20430.351280367733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 20100.234554281164,
            "unit": "ns/iter",
            "extra": "iterations: 40788\ncpu: 20099.5219182113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20964.9264918065,
            "unit": "ns/iter",
            "extra": "iterations: 38812\ncpu: 20964.50582294136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 55070.35530000053,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55068.54000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 558777.5480000232,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558754.6000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 563041.7751134222,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 563031.3026571604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 557007.0803858667,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 556990.4823151132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 555187.2030947818,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 555171.7601547367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329419.0711328432,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 329414.2642077524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 560605.7668161558,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 560578.9878283149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2365486.6683674017,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2365367.091836729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1073859.8256350716,
            "unit": "ns/iter",
            "extra": "iterations: 866\ncpu: 1073831.5242494238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3306419.4229390896,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3306239.784946242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7641.53656224534,
            "unit": "ns/iter",
            "extra": "iterations: 112876\ncpu: 7641.3152485913615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41450.470409333306,
            "unit": "ns/iter",
            "extra": "iterations: 20057\ncpu: 41449.26459590154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32697.749833195332,
            "unit": "ns/iter",
            "extra": "iterations: 25479\ncpu: 32697.107421798522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32085.813348766194,
            "unit": "ns/iter",
            "extra": "iterations: 25920\ncpu: 32084.305555555744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31958.664338364048,
            "unit": "ns/iter",
            "extra": "iterations: 25913\ncpu: 31957.519391811027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 67328.06906338608,
            "unit": "ns/iter",
            "extra": "iterations: 12684\ncpu: 67325.10249132726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 594605.0539999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594601.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593015.1547297279,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 592990.2702702667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 582900.6648757509,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 582876.2928139712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 579237.0872483153,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 579233.2214765125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 341696.8904003033,
            "unit": "ns/iter",
            "extra": "iterations: 2573\ncpu: 341678.6241741171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 572560.1992187708,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 572535.7421875003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2527353.243169448,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2527283.8797814287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1099506.401880175,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1099454.9941245564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4832.760770139058,
            "unit": "ns/iter",
            "extra": "iterations: 166827\ncpu: 4832.640399935265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23064.35184659916,
            "unit": "ns/iter",
            "extra": "iterations: 35254\ncpu: 23063.697736426955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18339.37333454699,
            "unit": "ns/iter",
            "extra": "iterations: 43982\ncpu: 18339.26151607462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 17535.53410898151,
            "unit": "ns/iter",
            "extra": "iterations: 45897\ncpu: 17534.832341983103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 17852.837810588742,
            "unit": "ns/iter",
            "extra": "iterations: 44633\ncpu: 17852.588891627216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52961.36230000456,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52959.47000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 574127.262999923,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574099.1999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 571783.8009167959,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 571765.4223968602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 566537.3743523505,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 566512.305699479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 568165.2894056772,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 568129.5865633065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329838.1553724981,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 329831.9356046423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 563044.5220729671,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 563023.9283429297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 529.2707957315579,
            "unit": "ns/iter",
            "extra": "iterations: 1321413\ncpu: 529.2546690550212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3071.52552142767,
            "unit": "ns/iter",
            "extra": "iterations: 228651\ncpu: 3071.3734031340364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2449.8712106759017,
            "unit": "ns/iter",
            "extra": "iterations: 288277\ncpu: 2449.7823274142456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2351.7562529860184,
            "unit": "ns/iter",
            "extra": "iterations: 297218\ncpu: 2351.6698181133193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1956.053228982518,
            "unit": "ns/iter",
            "extra": "iterations: 357512\ncpu: 1955.9964420774747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16335.10974506606,
            "unit": "ns/iter",
            "extra": "iterations: 43109\ncpu: 16334.048574543558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30224.67634102021,
            "unit": "ns/iter",
            "extra": "iterations: 23154\ncpu: 30223.378249978246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7222.013093728468,
            "unit": "ns/iter",
            "extra": "iterations: 96993\ncpu: 7221.77579825339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7124.155961156624,
            "unit": "ns/iter",
            "extra": "iterations: 98345\ncpu: 7124.052061619715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7129.633724835614,
            "unit": "ns/iter",
            "extra": "iterations: 98254\ncpu: 7129.083803203983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14329.271039099116,
            "unit": "ns/iter",
            "extra": "iterations: 49004\ncpu: 14328.777242673932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13642.51575339799,
            "unit": "ns/iter",
            "extra": "iterations: 51354\ncpu: 13641.891576118678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5188.302592828213,
            "unit": "ns/iter",
            "extra": "iterations: 135142\ncpu: 5188.036287756532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26103.072992426416,
            "unit": "ns/iter",
            "extra": "iterations: 26674\ncpu: 26102.55304791169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20680.290520876755,
            "unit": "ns/iter",
            "extra": "iterations: 33674\ncpu: 20679.67571420086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20676.135954162615,
            "unit": "ns/iter",
            "extra": "iterations: 33857\ncpu: 20675.694834155493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21234.1374656426,
            "unit": "ns/iter",
            "extra": "iterations: 32379\ncpu: 21232.928750115738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50486.529217279975,
            "unit": "ns/iter",
            "extra": "iterations: 13913\ncpu: 50484.52526414101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 153295.7090469696,
            "unit": "ns/iter",
            "extra": "iterations: 4554\ncpu: 153289.13043478495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130319.57432936123,
            "unit": "ns/iter",
            "extra": "iterations: 5368\ncpu: 130313.3196721326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128271.90718232786,
            "unit": "ns/iter",
            "extra": "iterations: 5430\ncpu: 128265.98526703398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 128156.13702890345,
            "unit": "ns/iter",
            "extra": "iterations: 5466\ncpu: 128151.2440541531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81316.69228090621,
            "unit": "ns/iter",
            "extra": "iterations: 8615\ncpu: 81314.77655252533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129007.4966728398,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 129000.31423290195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5338.693777054708,
            "unit": "ns/iter",
            "extra": "iterations: 130983\ncpu: 5338.438575998367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25470.087333235497,
            "unit": "ns/iter",
            "extra": "iterations: 27584\ncpu: 25469.127030162548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21948.737516443885,
            "unit": "ns/iter",
            "extra": "iterations: 31922\ncpu: 21947.772695946107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21517.56635376141,
            "unit": "ns/iter",
            "extra": "iterations: 32598\ncpu: 21516.49180931347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22489.722391800176,
            "unit": "ns/iter",
            "extra": "iterations: 31123\ncpu: 22488.593644571425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50324.407481869624,
            "unit": "ns/iter",
            "extra": "iterations: 13927\ncpu: 50323.45803116161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151657.95117187838,
            "unit": "ns/iter",
            "extra": "iterations: 4608\ncpu: 151651.82291666645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128364.60722181495,
            "unit": "ns/iter",
            "extra": "iterations: 5428\ncpu: 128361.12748710348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125918.66068223893,
            "unit": "ns/iter",
            "extra": "iterations: 5570\ncpu: 125913.10592459819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127230.44660369646,
            "unit": "ns/iter",
            "extra": "iterations: 5506\ncpu: 127224.62767889415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81914.25514018464,
            "unit": "ns/iter",
            "extra": "iterations: 8560\ncpu: 81912.54672897111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127947.9049632424,
            "unit": "ns/iter",
            "extra": "iterations: 5440\ncpu: 127942.70220588283 ns\nthreads: 1"
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
        "date": 1705953608577,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1332.594659765117,
            "unit": "ns/iter",
            "extra": "iterations: 526269\ncpu: 1332.5789662701013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15990.707955298212,
            "unit": "ns/iter",
            "extra": "iterations: 51362\ncpu: 15990.228184260735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33753.59457257201,
            "unit": "ns/iter",
            "extra": "iterations: 24542\ncpu: 33753.092657485126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49161.13056145582,
            "unit": "ns/iter",
            "extra": "iterations: 16475\ncpu: 49158.92564491655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 54784.42600000335,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54780.880000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69408.95015674275,
            "unit": "ns/iter",
            "extra": "iterations: 12760\ncpu: 69406.30094043889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82401.58145268171,
            "unit": "ns/iter",
            "extra": "iterations: 10546\ncpu: 82398.10354636831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95615.09737044248,
            "unit": "ns/iter",
            "extra": "iterations: 9089\ncpu: 95610.14413026742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114235.49521841411,
            "unit": "ns/iter",
            "extra": "iterations: 7738\ncpu: 114232.9025588008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1136.249883694755,
            "unit": "ns/iter",
            "extra": "iterations: 616911\ncpu: 1136.2313202390621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 932.439564853678,
            "unit": "ns/iter",
            "extra": "iterations: 751839\ncpu: 932.3972286619879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 920.481156318005,
            "unit": "ns/iter",
            "extra": "iterations: 759618\ncpu: 920.4171043866786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 903.5031748612365,
            "unit": "ns/iter",
            "extra": "iterations: 775152\ncpu: 903.4288758849885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1809.4156154310506,
            "unit": "ns/iter",
            "extra": "iterations: 387322\ncpu: 1809.2997557587764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4984.610916659881,
            "unit": "ns/iter",
            "extra": "iterations: 161423\ncpu: 4984.4340645385155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24495.860216351928,
            "unit": "ns/iter",
            "extra": "iterations: 33187\ncpu: 24494.43758098051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19050.914558426186,
            "unit": "ns/iter",
            "extra": "iterations: 43164\ncpu: 19050.19228987115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18158.497370841367,
            "unit": "ns/iter",
            "extra": "iterations: 45642\ncpu: 18156.689014504213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18478.777331062334,
            "unit": "ns/iter",
            "extra": "iterations: 44025\ncpu: 18477.898921067557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54815.028500001965,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54812.649999999856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 558265.8309999715,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558244.3999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 576388.8006369807,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 576360.8917197459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 553673.1329516819,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 553643.9567430029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 554836.3026820362,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 554802.2988505751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 321813.71900826256,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 321808.37716003053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 551026.220663228,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 550991.1352040821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2371086.1725887097,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2370959.8984771543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1098561.273049568,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1098508.510638298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3328516.8129494935,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3328306.1151079056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7583.811928098093,
            "unit": "ns/iter",
            "extra": "iterations: 113765\ncpu: 7583.537994989691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40983.556451218356,
            "unit": "ns/iter",
            "extra": "iterations: 20345\ncpu: 40981.07151634293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32449.166078849317,
            "unit": "ns/iter",
            "extra": "iterations: 25518\ncpu: 32448.80868406618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31755.808656647725,
            "unit": "ns/iter",
            "extra": "iterations: 26084\ncpu: 31755.386443797004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32149.100665688205,
            "unit": "ns/iter",
            "extra": "iterations: 25838\ncpu: 32147.894573883677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66871.85953431737,
            "unit": "ns/iter",
            "extra": "iterations: 13142\ncpu: 66867.9729112763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 594385.8660000387,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594382.0999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 597506.3655692769,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 597477.091906723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 584589.730923744,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 584561.1111111086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 577313.6467859427,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 577290.1259112015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 339610.44932042464,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 339603.49514563143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 571378.9261920472,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 571349.7713912504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2524282.6010929374,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2524143.715846998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1116200.4922156115,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 1116125.3892215504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4849.858777795192,
            "unit": "ns/iter",
            "extra": "iterations: 165406\ncpu: 4849.669298574388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23647.62336761725,
            "unit": "ns/iter",
            "extra": "iterations: 34612\ncpu: 23645.975384259655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18768.873391104782,
            "unit": "ns/iter",
            "extra": "iterations: 43275\ncpu: 18768.027729636087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18073.117768686952,
            "unit": "ns/iter",
            "extra": "iterations: 44978\ncpu: 18071.939614922805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18594.224716795965,
            "unit": "ns/iter",
            "extra": "iterations: 43873\ncpu: 18593.453832653206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 51785.58569999723,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51781.43999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 568600.1269999678,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568595.0000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 567968.295380614,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 567931.6200390377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 559106.7993568642,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 559087.0739549866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 560977.5924504149,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 560939.5393474121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332276.81151241245,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 332261.32430398546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 554347.1157495208,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 554327.577482607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 538.3227437388462,
            "unit": "ns/iter",
            "extra": "iterations: 1301844\ncpu: 538.2908397626749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3040.1495167781313,
            "unit": "ns/iter",
            "extra": "iterations: 230536\ncpu: 3039.968594926626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2517.741894749277,
            "unit": "ns/iter",
            "extra": "iterations: 277166\ncpu: 2517.5807999538197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2436.9257930477584,
            "unit": "ns/iter",
            "extra": "iterations: 296010\ncpu: 2436.803148542271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1923.3238693758067,
            "unit": "ns/iter",
            "extra": "iterations: 362322\ncpu: 1923.2345813944526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 15850.089494252974,
            "unit": "ns/iter",
            "extra": "iterations: 44271\ncpu: 15849.169885477957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29961.54812811061,
            "unit": "ns/iter",
            "extra": "iterations: 23292\ncpu: 29959.788768675517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7210.322222909147,
            "unit": "ns/iter",
            "extra": "iterations: 97116\ncpu: 7210.170311792083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7123.961896723203,
            "unit": "ns/iter",
            "extra": "iterations: 98338\ncpu: 7123.939880819183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7117.537672139039,
            "unit": "ns/iter",
            "extra": "iterations: 98322\ncpu: 7117.087732145331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14432.52479073986,
            "unit": "ns/iter",
            "extra": "iterations: 48385\ncpu: 14431.797044538695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13035.828426189162,
            "unit": "ns/iter",
            "extra": "iterations: 53901\ncpu: 13035.142205153681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5166.728847474704,
            "unit": "ns/iter",
            "extra": "iterations: 135433\ncpu: 5166.653622086156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26028.38045784473,
            "unit": "ns/iter",
            "extra": "iterations: 26865\ncpu: 26028.28587381397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20823.389835555874,
            "unit": "ns/iter",
            "extra": "iterations: 33568\ncpu: 20822.655505242972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20647.118687018727,
            "unit": "ns/iter",
            "extra": "iterations: 33938\ncpu: 20646.826566090986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21293.275736410626,
            "unit": "ns/iter",
            "extra": "iterations: 32930\ncpu: 21292.796841785956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49587.55828264296,
            "unit": "ns/iter",
            "extra": "iterations: 14138\ncpu: 49587.86249823144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154603.47837599358,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 154598.54368932036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131202.20774845732,
            "unit": "ns/iter",
            "extra": "iterations: 5343\ncpu: 131201.7031630166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128212.69840688219,
            "unit": "ns/iter",
            "extra": "iterations: 5461\ncpu: 128203.16791796459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 128414.8871145546,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 128406.42437591749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81537.7915362436,
            "unit": "ns/iter",
            "extra": "iterations: 8625\ncpu: 81534.80579710174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130194.89295669277,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 130188.99832744847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5227.992098446805,
            "unit": "ns/iter",
            "extra": "iterations: 137821\ncpu: 5227.919547819237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26108.629513107975,
            "unit": "ns/iter",
            "extra": "iterations: 26700\ncpu: 26107.68164793978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21711.09756551416,
            "unit": "ns/iter",
            "extra": "iterations: 32245\ncpu: 21710.9412311985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21947.748358584246,
            "unit": "ns/iter",
            "extra": "iterations: 31680\ncpu: 21946.445707070765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22152.469814856922,
            "unit": "ns/iter",
            "extra": "iterations: 31489\ncpu: 22151.255994156712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48698.31890724182,
            "unit": "ns/iter",
            "extra": "iterations: 14349\ncpu: 48697.003275489085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151471.1751951491,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 151470.70685169238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128273.24504768588,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 128264.52677916383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125197.77839885006,
            "unit": "ns/iter",
            "extra": "iterations: 5546\ncpu: 125190.641904076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 125573.68148952234,
            "unit": "ns/iter",
            "extra": "iterations: 5532\ncpu: 125565.94360086747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81477.47996283362,
            "unit": "ns/iter",
            "extra": "iterations: 8609\ncpu: 81473.87617609568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127578.22977404954,
            "unit": "ns/iter",
            "extra": "iterations: 5488\ncpu: 127577.78790087336 ns\nthreads: 1"
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
        "date": 1705955068065,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1332.485776642167,
            "unit": "ns/iter",
            "extra": "iterations: 509971\ncpu: 1332.4991028901645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16238.997246100029,
            "unit": "ns/iter",
            "extra": "iterations: 50837\ncpu: 16238.04512461396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33986.47178104845,
            "unit": "ns/iter",
            "extra": "iterations: 24115\ncpu: 33986.36533278043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49970.905929985536,
            "unit": "ns/iter",
            "extra": "iterations: 16796\ncpu: 49968.010240533455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55633.36929999992,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55633.79000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70042.13054600944,
            "unit": "ns/iter",
            "extra": "iterations: 12509\ncpu: 70037.37309137423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83383.11313833135,
            "unit": "ns/iter",
            "extra": "iterations: 10359\ncpu: 83380.26836567237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96041.96011080217,
            "unit": "ns/iter",
            "extra": "iterations: 9025\ncpu: 96036.06648199439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111736.55612572625,
            "unit": "ns/iter",
            "extra": "iterations: 7795\ncpu: 111734.06029506086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1129.9646933528252,
            "unit": "ns/iter",
            "extra": "iterations: 620648\ncpu: 1129.874421572293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 931.9219391110648,
            "unit": "ns/iter",
            "extra": "iterations: 746507\ncpu: 931.8986961944087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 920.0016454080009,
            "unit": "ns/iter",
            "extra": "iterations: 762121\ncpu: 919.9780612264976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 924.8271722208551,
            "unit": "ns/iter",
            "extra": "iterations: 757980\ncpu: 924.7985434971894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1882.1571905449168,
            "unit": "ns/iter",
            "extra": "iterations: 369068\ncpu: 1882.1485471512028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5005.544648837926,
            "unit": "ns/iter",
            "extra": "iterations: 161236\ncpu: 5005.055942841545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 23825.110438242362,
            "unit": "ns/iter",
            "extra": "iterations: 34182\ncpu: 23824.509976010777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20233.894615840305,
            "unit": "ns/iter",
            "extra": "iterations: 40452\ncpu: 20232.79442301989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19720.36192965175,
            "unit": "ns/iter",
            "extra": "iterations: 41707\ncpu: 19719.98705253313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20446.118585088716,
            "unit": "ns/iter",
            "extra": "iterations: 39946\ncpu: 20445.233565313232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54107.286900000414,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54107.63999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561075.6930000207,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561040.8000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 557230.9809403027,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 557211.2452350718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 558076.7782076113,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 558041.1347517729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 564116.5478484494,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 562902.3763648049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326387.6121987906,
            "unit": "ns/iter",
            "extra": "iterations: 2656\ncpu: 326380.5722891568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 557366.6677398593,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 557335.4797166783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2363709.352791893,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2363646.1928934017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1073453.006928399,
            "unit": "ns/iter",
            "extra": "iterations: 866\ncpu: 1073392.6096997692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3304353.8028673814,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3304235.125448025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7327.919121945312,
            "unit": "ns/iter",
            "extra": "iterations: 114617\ncpu: 7327.652965964916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40709.416548418456,
            "unit": "ns/iter",
            "extra": "iterations: 20437\ncpu: 40706.98243382107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32495.70728025512,
            "unit": "ns/iter",
            "extra": "iterations: 25837\ncpu: 32494.59689592434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31927.65862173541,
            "unit": "ns/iter",
            "extra": "iterations: 26352\ncpu: 31925.937310261023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32320.264560864653,
            "unit": "ns/iter",
            "extra": "iterations: 25960\ncpu: 32319.76887519279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 68111.62336362031,
            "unit": "ns/iter",
            "extra": "iterations: 12986\ncpu: 68108.4321577084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 590059.6820000601,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590012.300000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 587861.8558863192,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 587830.3112313973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 579045.742171937,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 579035.4430379765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 573925.9688535436,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 573900.3313452599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 341860.84665894683,
            "unit": "ns/iter",
            "extra": "iterations: 2589\ncpu: 341843.5303205894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 567312.7822685916,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 567302.8683181255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2515852.720108569,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2515726.3586956416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1107447.5964286583,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1107436.1904761838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4767.098864933165,
            "unit": "ns/iter",
            "extra": "iterations: 166510\ncpu: 4766.961744039403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23648.816864828834,
            "unit": "ns/iter",
            "extra": "iterations: 34652\ncpu: 23647.249797991568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19080.707762659735,
            "unit": "ns/iter",
            "extra": "iterations: 44611\ncpu: 19079.54316200039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 17749.91671867153,
            "unit": "ns/iter",
            "extra": "iterations: 46469\ncpu: 17748.77445178514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18361.19153216696,
            "unit": "ns/iter",
            "extra": "iterations: 44734\ncpu: 18360.168998971738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52249.25969999958,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52246.63000000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 571160.606000035,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571141.4000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569832.1322475417,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 569815.3094462517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 567355.3538163446,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 567340.8150064704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 567970.3915816813,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 567942.3469387741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 328460.9336068882,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 328456.54606490117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 557840.0930528685,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 557809.6239643102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 535.9615283667157,
            "unit": "ns/iter",
            "extra": "iterations: 1306833\ncpu: 535.9438428628565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3046.2323544272867,
            "unit": "ns/iter",
            "extra": "iterations: 229576\ncpu: 3046.084956615652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2397.1432359738615,
            "unit": "ns/iter",
            "extra": "iterations: 291498\ncpu: 2397.1317127390125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2333.738031568026,
            "unit": "ns/iter",
            "extra": "iterations: 299162\ncpu: 2333.6536725920864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1922.115429580639,
            "unit": "ns/iter",
            "extra": "iterations: 363529\ncpu: 1922.0749926415708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16378.052216955719,
            "unit": "ns/iter",
            "extra": "iterations: 43032\ncpu: 16377.144915411835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30177.824203878743,
            "unit": "ns/iter",
            "extra": "iterations: 23112\ncpu: 30177.34510211175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7203.762092255821,
            "unit": "ns/iter",
            "extra": "iterations: 97273\ncpu: 7203.40793437027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7180.127916356249,
            "unit": "ns/iter",
            "extra": "iterations: 96696\ncpu: 7179.874038222837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7207.570895138851,
            "unit": "ns/iter",
            "extra": "iterations: 97214\ncpu: 7207.333305902334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14545.250915598828,
            "unit": "ns/iter",
            "extra": "iterations: 48056\ncpu: 14544.58964541389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13810.114278371635,
            "unit": "ns/iter",
            "extra": "iterations: 50587\ncpu: 13809.49453416906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5229.1184712507165,
            "unit": "ns/iter",
            "extra": "iterations: 132108\ncpu: 5228.768886062985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26246.59238580643,
            "unit": "ns/iter",
            "extra": "iterations: 26687\ncpu: 26246.11608648426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21030.64404028206,
            "unit": "ns/iter",
            "extra": "iterations: 33265\ncpu: 21029.027506388178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20857.227459627797,
            "unit": "ns/iter",
            "extra": "iterations: 33562\ncpu: 20855.926345271746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21409.64776064384,
            "unit": "ns/iter",
            "extra": "iterations: 32688\ncpu: 21408.516886931007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50574.09054719588,
            "unit": "ns/iter",
            "extra": "iterations: 13816\ncpu: 50572.10480602264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 153544.46988485393,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 153541.78476528192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129016.1680874897,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 129007.69088213374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128231.90762165724,
            "unit": "ns/iter",
            "extra": "iterations: 5445\ncpu: 128232.91092745686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129037.28126727114,
            "unit": "ns/iter",
            "extra": "iterations: 5429\ncpu: 129026.87419414282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82271.29720156082,
            "unit": "ns/iter",
            "extra": "iterations: 8469\ncpu: 82258.57834455097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130025.385015798,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 130017.38241308604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5125.338768803975,
            "unit": "ns/iter",
            "extra": "iterations: 136940\ncpu: 5125.008032715026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25553.3213220846,
            "unit": "ns/iter",
            "extra": "iterations: 27502\ncpu: 25553.08704821502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21560.567728158447,
            "unit": "ns/iter",
            "extra": "iterations: 32313\ncpu: 21559.053631665167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22148.96799036752,
            "unit": "ns/iter",
            "extra": "iterations: 31553\ncpu: 22148.822615916175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21356.678292333345,
            "unit": "ns/iter",
            "extra": "iterations: 32887\ncpu: 21302.313984249216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50377.60060405714,
            "unit": "ns/iter",
            "extra": "iterations: 13906\ncpu: 50374.75909679352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 150689.8733304609,
            "unit": "ns/iter",
            "extra": "iterations: 4642\ncpu: 150686.38517880434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127597.78716031033,
            "unit": "ns/iter",
            "extra": "iterations: 5483\ncpu: 127591.7563377724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126188.7209724194,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 126187.35486211888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 125351.31452625782,
            "unit": "ns/iter",
            "extra": "iterations: 5583\ncpu: 125345.19075765857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81388.2511357047,
            "unit": "ns/iter",
            "extra": "iterations: 8585\ncpu: 81387.09376820186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127217.14813466826,
            "unit": "ns/iter",
            "extra": "iterations: 5495\ncpu: 127213.1756141942 ns\nthreads: 1"
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
        "date": 1705957092546,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1362.1097040755599,
            "unit": "ns/iter",
            "extra": "iterations: 514557\ncpu: 1362.104878565446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16141.535082760605,
            "unit": "ns/iter",
            "extra": "iterations: 51293\ncpu: 16141.426705398395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34606.23795602178,
            "unit": "ns/iter",
            "extra": "iterations: 24286\ncpu: 34605.0440583052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50321.77796417238,
            "unit": "ns/iter",
            "extra": "iterations: 16691\ncpu: 50321.161104787025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55762.893899998286,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55760.89 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70040.90646909009,
            "unit": "ns/iter",
            "extra": "iterations: 12552\ncpu: 70039.27660930532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83266.68155302646,
            "unit": "ns/iter",
            "extra": "iterations: 10457\ncpu: 83265.55417423738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96130.0869950108,
            "unit": "ns/iter",
            "extra": "iterations: 9035\ncpu: 96127.14997232982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112848.80855530842,
            "unit": "ns/iter",
            "extra": "iterations: 7621\ncpu: 112848.0514368194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1138.6026560476382,
            "unit": "ns/iter",
            "extra": "iterations: 609477\ncpu: 1138.5860335992988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 934.4153364645327,
            "unit": "ns/iter",
            "extra": "iterations: 743496\ncpu: 934.4225120242738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 954.6147879290861,
            "unit": "ns/iter",
            "extra": "iterations: 757388\ncpu: 954.5619946447529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 886.0202895686245,
            "unit": "ns/iter",
            "extra": "iterations: 789174\ncpu: 886.0071416443003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1834.0661324640341,
            "unit": "ns/iter",
            "extra": "iterations: 381628\ncpu: 1833.9526973911804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4788.136192297175,
            "unit": "ns/iter",
            "extra": "iterations: 166867\ncpu: 4787.926911851955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24109.99277328777,
            "unit": "ns/iter",
            "extra": "iterations: 33902\ncpu: 24108.875582561497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18884.162226373493,
            "unit": "ns/iter",
            "extra": "iterations: 43353\ncpu: 18883.502871773566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18330.480736529895,
            "unit": "ns/iter",
            "extra": "iterations: 44696\ncpu: 18329.991498120628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19187.052967560798,
            "unit": "ns/iter",
            "extra": "iterations: 42139\ncpu: 19186.309594437455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54396.57800000077,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54395.65000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561313.6729999724,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561287.2000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 562805.338254188,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 562796.9191270849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 551504.4326922582,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 551481.6025641022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561155.4638515387,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 561122.7127319261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326651.20485982747,
            "unit": "ns/iter",
            "extra": "iterations: 2675\ncpu: 326641.6822429901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 557991.0925335065,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 557971.2827058081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2372324.046035819,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2372222.5063938606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1052536.6795455036,
            "unit": "ns/iter",
            "extra": "iterations: 880\ncpu: 1052494.3181818181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3325444.8100358224,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3325309.3189964164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7393.177067606409,
            "unit": "ns/iter",
            "extra": "iterations: 114589\ncpu: 7392.873661520723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41327.57123782228,
            "unit": "ns/iter",
            "extra": "iterations: 20221\ncpu: 41325.97299836795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 33317.58998459701,
            "unit": "ns/iter",
            "extra": "iterations: 25321\ncpu: 33316.35796374552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31796.098728782537,
            "unit": "ns/iter",
            "extra": "iterations: 26274\ncpu: 31795.85521808634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32068.847796490143,
            "unit": "ns/iter",
            "extra": "iterations: 25709\ncpu: 32067.474425298515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 68027.94977276276,
            "unit": "ns/iter",
            "extra": "iterations: 12762\ncpu: 68025.88935903469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 595105.052000008,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595103.0000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593492.6476190573,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 593487.755102042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 585293.2220726771,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 585271.3997308216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 578958.9129568243,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 578942.6578073091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 346097.8763736056,
            "unit": "ns/iter",
            "extra": "iterations: 2548\ncpu: 346090.894819466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 572087.9191853191,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 572076.1498028898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2523145.635869639,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2523070.1086956556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1123331.1809408832,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 1123268.275030158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4881.048255062399,
            "unit": "ns/iter",
            "extra": "iterations: 167112\ncpu: 4880.9032265785845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23663.709502679292,
            "unit": "ns/iter",
            "extra": "iterations: 34706\ncpu: 23662.695211202536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18598.076757581897,
            "unit": "ns/iter",
            "extra": "iterations: 44621\ncpu: 18597.478765603555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18357.836964303428,
            "unit": "ns/iter",
            "extra": "iterations: 44708\ncpu: 18357.21571083475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18839.925702765515,
            "unit": "ns/iter",
            "extra": "iterations: 43649\ncpu: 18839.272377374073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52027.200800000624,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52025.239999999685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 571012.5389999803,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571008.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569333.7049608212,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 569337.9895561374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 558666.623160617,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 558658.9891234817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 563596.6757106575,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 563596.3178294589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 331515.86373871943,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 331518.3933933954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 554959.5420918261,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 554959.2474489808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 526.3987336029784,
            "unit": "ns/iter",
            "extra": "iterations: 1333547\ncpu: 526.3965949456598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3038.4583875442304,
            "unit": "ns/iter",
            "extra": "iterations: 230580\ncpu: 3038.456500997491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2309.617741776575,
            "unit": "ns/iter",
            "extra": "iterations: 304310\ncpu: 2309.639512339386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2354.813913810224,
            "unit": "ns/iter",
            "extra": "iterations: 297158\ncpu: 2354.809562589576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1934.7546178588268,
            "unit": "ns/iter",
            "extra": "iterations: 362235\ncpu: 1934.74346763842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16112.400985288974,
            "unit": "ns/iter",
            "extra": "iterations: 43236\ncpu: 16111.673142751342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30055.25730162989,
            "unit": "ns/iter",
            "extra": "iterations: 23214\ncpu: 30054.268975618295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7163.865414294233,
            "unit": "ns/iter",
            "extra": "iterations: 97841\ncpu: 7163.79840762055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7102.683254958038,
            "unit": "ns/iter",
            "extra": "iterations: 97820\ncpu: 7102.677366591744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7137.416127553629,
            "unit": "ns/iter",
            "extra": "iterations: 98155\ncpu: 7136.641026947161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13785.756559394154,
            "unit": "ns/iter",
            "extra": "iterations: 50805\ncpu: 13785.292786143298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13705.561139815285,
            "unit": "ns/iter",
            "extra": "iterations: 51096\ncpu: 13705.250900266119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5168.2613208662315,
            "unit": "ns/iter",
            "extra": "iterations: 134972\ncpu: 5168.198589337146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25708.923688862724,
            "unit": "ns/iter",
            "extra": "iterations: 27152\ncpu: 25708.864908662217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20694.229964743503,
            "unit": "ns/iter",
            "extra": "iterations: 33753\ncpu: 20693.31614967581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20529.313900021734,
            "unit": "ns/iter",
            "extra": "iterations: 33928\ncpu: 20529.005541146034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21136.69979390227,
            "unit": "ns/iter",
            "extra": "iterations: 32994\ncpu: 21135.991392374573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49902.30140603892,
            "unit": "ns/iter",
            "extra": "iterations: 14011\ncpu: 49901.56305759792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 153476.4717768395,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 153470.70063694424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129772.78119180712,
            "unit": "ns/iter",
            "extra": "iterations: 5370\ncpu: 129771.8063314713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128759.7916974153,
            "unit": "ns/iter",
            "extra": "iterations: 5420\ncpu: 128755.97785977928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129159.26535535828,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 129158.24828353962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81776.36799532118,
            "unit": "ns/iter",
            "extra": "iterations: 8530\ncpu: 81775.73270808911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129597.38242411728,
            "unit": "ns/iter",
            "extra": "iterations: 5371\ncpu: 129596.79761683065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5076.804086765912,
            "unit": "ns/iter",
            "extra": "iterations: 137566\ncpu: 5076.803134495469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27254.214615264667,
            "unit": "ns/iter",
            "extra": "iterations: 25576\ncpu: 27253.95683453238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21130.419191614725,
            "unit": "ns/iter",
            "extra": "iterations: 33202\ncpu: 21128.93500391544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20999.161569028667,
            "unit": "ns/iter",
            "extra": "iterations: 33218\ncpu: 20997.99807333387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20965.122575221358,
            "unit": "ns/iter",
            "extra": "iterations: 33302\ncpu: 20964.08023542148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49502.43616945557,
            "unit": "ns/iter",
            "extra": "iterations: 14139\ncpu: 49502.37640568646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 148531.45570157628,
            "unit": "ns/iter",
            "extra": "iterations: 4718\ncpu: 148531.3480288247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 125467.51145721447,
            "unit": "ns/iter",
            "extra": "iterations: 5586\ncpu: 125464.57214464646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125300.52395587713,
            "unit": "ns/iter",
            "extra": "iterations: 5531\ncpu: 125300.25311878684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 125634.97845601322,
            "unit": "ns/iter",
            "extra": "iterations: 5570\ncpu: 125635.90664272929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81897.19730680001,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 81897.15456674423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127677.81819841768,
            "unit": "ns/iter",
            "extra": "iterations: 5473\ncpu: 127677.72702356795 ns\nthreads: 1"
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
        "date": 1705958565351,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1353.9549738952671,
            "unit": "ns/iter",
            "extra": "iterations: 513702\ncpu: 1353.8761772389441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15963.490242334115,
            "unit": "ns/iter",
            "extra": "iterations: 51293\ncpu: 15963.230850213477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34254.27617008861,
            "unit": "ns/iter",
            "extra": "iterations: 24293\ncpu: 34252.06438068579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50257.25910882848,
            "unit": "ns/iter",
            "extra": "iterations: 16742\ncpu: 50256.88089833953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56027.694299996256,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56024.500000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70444.64210104806,
            "unit": "ns/iter",
            "extra": "iterations: 12470\ncpu: 70444.39454691262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83064.25882124882,
            "unit": "ns/iter",
            "extra": "iterations: 10316\ncpu: 83058.54013183409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96996.89675186887,
            "unit": "ns/iter",
            "extra": "iterations: 8959\ncpu: 96992.75588793386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113489.21297639096,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 113484.06962943413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1183.7440490310653,
            "unit": "ns/iter",
            "extra": "iterations: 594399\ncpu: 1183.7242323758971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 931.119115500976,
            "unit": "ns/iter",
            "extra": "iterations: 753059\ncpu: 931.0963682792449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 946.0193128282804,
            "unit": "ns/iter",
            "extra": "iterations: 756492\ncpu: 945.9583181315846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 929.4297777707835,
            "unit": "ns/iter",
            "extra": "iterations: 753636\ncpu: 929.409953876936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1816.8557179583247,
            "unit": "ns/iter",
            "extra": "iterations: 382383\ncpu: 1816.7677433358692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4762.965114749862,
            "unit": "ns/iter",
            "extra": "iterations: 167320\ncpu: 4762.927324886441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 23739.789914507004,
            "unit": "ns/iter",
            "extra": "iterations: 34505\ncpu: 23737.15693377773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18844.243282026568,
            "unit": "ns/iter",
            "extra": "iterations: 43205\ncpu: 18842.464992477704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18148.091148483472,
            "unit": "ns/iter",
            "extra": "iterations: 45190\ncpu: 18146.897543704345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18737.760332674516,
            "unit": "ns/iter",
            "extra": "iterations: 43406\ncpu: 18736.03879647978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 53873.362299998465,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53872.24999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 554274.0030000459,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554260.5000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 560681.2636010151,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 560670.9196891187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 560904.0930969497,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 560850.8549715005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 550932.3137004048,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 550875.4161331633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325407.1863653484,
            "unit": "ns/iter",
            "extra": "iterations: 2699\ncpu: 325390.7373101152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 558859.6585209103,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 558838.1993569115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2359049.5456852727,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2358914.467005083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1085537.3516354335,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1085452.3364485973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3304475.505338164,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3304221.708185051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7247.899787317325,
            "unit": "ns/iter",
            "extra": "iterations: 115195\ncpu: 7247.545466383114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41147.33670419525,
            "unit": "ns/iter",
            "extra": "iterations: 20074\ncpu: 41144.91381887029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32552.909534104427,
            "unit": "ns/iter",
            "extra": "iterations: 25435\ncpu: 32552.667584037674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32053.82405683667,
            "unit": "ns/iter",
            "extra": "iterations: 26321\ncpu: 32053.584590251354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32463.333988286322,
            "unit": "ns/iter",
            "extra": "iterations: 25447\ncpu: 32462.353126105067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 68294.85067215981,
            "unit": "ns/iter",
            "extra": "iterations: 13092\ncpu: 68293.91995111508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 586757.4320000131,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586742.4000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 590194.2562205748,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 590179.2199058478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 576801.3004005227,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 576770.961281706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 574330.5441860851,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 574282.1926910313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334956.2061008754,
            "unit": "ns/iter",
            "extra": "iterations: 2557\ncpu: 334945.0919045754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 570555.0941175877,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 570520.6535947694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2515585.82972977,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2515528.3783783796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1114126.702002434,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1114074.5583038859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4858.894471697857,
            "unit": "ns/iter",
            "extra": "iterations: 166543\ncpu: 4858.808235710914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23371.93634203009,
            "unit": "ns/iter",
            "extra": "iterations: 34921\ncpu: 23370.40176398158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18122.312108975282,
            "unit": "ns/iter",
            "extra": "iterations: 45074\ncpu: 18121.393708124444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 17537.465910815074,
            "unit": "ns/iter",
            "extra": "iterations: 46129\ncpu: 17536.02506015737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 17920.25404757025,
            "unit": "ns/iter",
            "extra": "iterations: 45027\ncpu: 17919.17294068004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52540.2578000012,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52536.469999999725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 565907.6230000438,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565903.9000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 564311.490991036,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 564288.8674388671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 556647.3177511374,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 556643.0827542642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 556809.9301587016,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 556791.8730158708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329653.99513110815,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 329640.9737827713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 553712.9632911492,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 553698.9240506326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 524.202354833371,
            "unit": "ns/iter",
            "extra": "iterations: 1331814\ncpu: 524.1671134257496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2976.963848182847,
            "unit": "ns/iter",
            "extra": "iterations: 234677\ncpu: 2976.943628902707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2401.729905735933,
            "unit": "ns/iter",
            "extra": "iterations: 290991\ncpu: 2401.6268544387967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2245.0286538135047,
            "unit": "ns/iter",
            "extra": "iterations: 309348\ncpu: 2244.971359116583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1939.1266757813712,
            "unit": "ns/iter",
            "extra": "iterations: 361324\ncpu: 1939.0380932348758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16292.845965544537,
            "unit": "ns/iter",
            "extra": "iterations: 43302\ncpu: 16292.402198512864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30159.083675676517,
            "unit": "ns/iter",
            "extra": "iterations: 23125\ncpu: 30158.49945945959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7197.895193219426,
            "unit": "ns/iter",
            "extra": "iterations: 96988\ncpu: 7197.651255825329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7144.7077166801555,
            "unit": "ns/iter",
            "extra": "iterations: 97840\ncpu: 7144.646361406283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7188.540081137151,
            "unit": "ns/iter",
            "extra": "iterations: 97365\ncpu: 7187.9032506547555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14439.6208560132,
            "unit": "ns/iter",
            "extra": "iterations: 48504\ncpu: 14439.516328550075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 12446.345438568307,
            "unit": "ns/iter",
            "extra": "iterations: 55761\ncpu: 12446.263517512221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5227.170017325144,
            "unit": "ns/iter",
            "extra": "iterations: 133904\ncpu: 5227.053710120706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26156.649811121675,
            "unit": "ns/iter",
            "extra": "iterations: 26737\ncpu: 26156.10203089321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21033.033676193376,
            "unit": "ns/iter",
            "extra": "iterations: 33347\ncpu: 21031.3221579151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21009.494598233992,
            "unit": "ns/iter",
            "extra": "iterations: 33415\ncpu: 21009.36106538968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21425.419541645635,
            "unit": "ns/iter",
            "extra": "iterations: 32464\ncpu: 21424.269960571528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49764.55051546625,
            "unit": "ns/iter",
            "extra": "iterations: 14065\ncpu: 49762.38890863801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 153906.0564091181,
            "unit": "ns/iter",
            "extra": "iterations: 4556\ncpu: 153893.04214223142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129242.59184049921,
            "unit": "ns/iter",
            "extra": "iterations: 5417\ncpu: 129232.23186265498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129330.0692904594,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 129320.38063562606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129342.0917481944,
            "unit": "ns/iter",
            "extra": "iterations: 5417\ncpu: 129325.51227616805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82225.41519980169,
            "unit": "ns/iter",
            "extra": "iterations: 8408\ncpu: 82217.84015223711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130589.95734772443,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 130583.19985099582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5339.232168523598,
            "unit": "ns/iter",
            "extra": "iterations: 131495\ncpu: 5338.896535989992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26694.13744943833,
            "unit": "ns/iter",
            "extra": "iterations: 26206\ncpu: 26692.26513012313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22348.24152352918,
            "unit": "ns/iter",
            "extra": "iterations: 31322\ncpu: 22346.48170614925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21715.147117417535,
            "unit": "ns/iter",
            "extra": "iterations: 32124\ncpu: 21712.812850205602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22770.985931965683,
            "unit": "ns/iter",
            "extra": "iterations: 30779\ncpu: 22770.580590662634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49391.786353069976,
            "unit": "ns/iter",
            "extra": "iterations: 14201\ncpu: 49389.40919653466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152639.74339375892,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 152638.6984057668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126826.41947769152,
            "unit": "ns/iter",
            "extra": "iterations: 5514\ncpu: 126818.44396082459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126269.83357322573,
            "unit": "ns/iter",
            "extra": "iterations: 5558\ncpu: 126268.94566390713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 125789.98976659376,
            "unit": "ns/iter",
            "extra": "iterations: 5570\ncpu: 125786.15798922766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81694.36365759229,
            "unit": "ns/iter",
            "extra": "iterations: 8563\ncpu: 81693.83393670435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128152.72895314469,
            "unit": "ns/iter",
            "extra": "iterations: 5464\ncpu: 128148.31625183181 ns\nthreads: 1"
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
        "date": 1705960265501,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1363.848621079726,
            "unit": "ns/iter",
            "extra": "iterations: 509384\ncpu: 1363.8533994000597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16421.743424207587,
            "unit": "ns/iter",
            "extra": "iterations: 50032\ncpu: 16421.536216821238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34734.85329302916,
            "unit": "ns/iter",
            "extra": "iterations: 23489\ncpu: 34733.032483290044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51302.199914299534,
            "unit": "ns/iter",
            "extra": "iterations: 16337\ncpu: 51300.41011201564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56457.825094492655,
            "unit": "ns/iter",
            "extra": "iterations: 13493\ncpu: 56456.117987104444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71036.16422883117,
            "unit": "ns/iter",
            "extra": "iterations: 12306\ncpu: 71034.64976434258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84283.54284322528,
            "unit": "ns/iter",
            "extra": "iterations: 10270\ncpu: 84281.9474196689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98253.84722221471,
            "unit": "ns/iter",
            "extra": "iterations: 8856\ncpu: 98250.41779584471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112989.9853445976,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 112989.16028518615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1150.238155502826,
            "unit": "ns/iter",
            "extra": "iterations: 608426\ncpu: 1150.1599208449334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 941.784324453918,
            "unit": "ns/iter",
            "extra": "iterations: 742022\ncpu: 941.7669556967309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 933.8624864560971,
            "unit": "ns/iter",
            "extra": "iterations: 742036\ncpu: 933.8271997585015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 931.6591809546978,
            "unit": "ns/iter",
            "extra": "iterations: 751387\ncpu: 931.6372255575351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1835.1835393730764,
            "unit": "ns/iter",
            "extra": "iterations: 381237\ncpu: 1835.1883474059418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5031.142456325396,
            "unit": "ns/iter",
            "extra": "iterations: 158961\ncpu: 5031.023961852274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24211.770584758466,
            "unit": "ns/iter",
            "extra": "iterations: 33860\ncpu: 24210.965741287684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18858.91155349697,
            "unit": "ns/iter",
            "extra": "iterations: 44004\ncpu: 18858.27424779566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18039.086512140548,
            "unit": "ns/iter",
            "extra": "iterations: 45300\ncpu: 18038.33112582787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18757.260061418532,
            "unit": "ns/iter",
            "extra": "iterations: 43309\ncpu: 18757.025098709277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54445.34369999019,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54444.80999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 567711.4540000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567687.2000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 566445.951916769,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 566436.517218973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 559292.7575953264,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 559249.3859082115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 560646.4499030501,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 560047.8991596644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 333930.6371340252,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 333928.50539291254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 562108.5016097617,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 562104.378622021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2411805.3834195877,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2411684.455958548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1084035.355477873,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1083999.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3367648.578181698,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3367503.272727274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7359.47833637082,
            "unit": "ns/iter",
            "extra": "iterations: 116324\ncpu: 7359.342010247255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41234.776310584915,
            "unit": "ns/iter",
            "extra": "iterations: 20220\ncpu: 41232.98714144413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32233.485583920505,
            "unit": "ns/iter",
            "extra": "iterations: 25423\ncpu: 32233.26515360101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31401.58166510662,
            "unit": "ns/iter",
            "extra": "iterations: 26725\ncpu: 31400.28437792321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31757.981713628997,
            "unit": "ns/iter",
            "extra": "iterations: 26085\ncpu: 31757.791834387735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66780.67537826888,
            "unit": "ns/iter",
            "extra": "iterations: 13086\ncpu: 66775.59223597747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 596809.6789999891,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596771.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 598436.2016516794,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 598372.4019270503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 592025.8059905067,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 591982.7773995921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 586171.7293640014,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 586138.2949932329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 350039.9012395161,
            "unit": "ns/iter",
            "extra": "iterations: 2501\ncpu: 350004.63814474415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 581619.0216962063,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 581574.5562130157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2573668.197222408,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2573446.3888888904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1116374.923353379,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 1116296.2874251492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4901.860205141664,
            "unit": "ns/iter",
            "extra": "iterations: 161644\ncpu: 4901.644354259971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23606.75095894925,
            "unit": "ns/iter",
            "extra": "iterations: 34934\ncpu: 23605.018034007113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18711.142249321358,
            "unit": "ns/iter",
            "extra": "iterations: 43951\ncpu: 18710.18861914398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18070.876474958775,
            "unit": "ns/iter",
            "extra": "iterations: 45764\ncpu: 18069.96984529313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19150.33047741312,
            "unit": "ns/iter",
            "extra": "iterations: 42835\ncpu: 19148.81989027669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52212.95970000028,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52208.15000000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 575087.1949999237,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575077.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 578769.1982872111,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 578725.1646903832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 570941.6404715233,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 570907.4001309754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 573030.4651315894,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 573022.894736841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 336620.2755724938,
            "unit": "ns/iter",
            "extra": "iterations: 2620\ncpu: 336621.1068702291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 563102.4219652684,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 563079.9614643565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 566.478585150461,
            "unit": "ns/iter",
            "extra": "iterations: 1235778\ncpu: 566.4727807098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3077.0734943842763,
            "unit": "ns/iter",
            "extra": "iterations: 227133\ncpu: 3077.011706797317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2388.9024964043506,
            "unit": "ns/iter",
            "extra": "iterations: 292020\ncpu: 2388.7196082460196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2452.9763842357065,
            "unit": "ns/iter",
            "extra": "iterations: 284471\ncpu: 2452.8806099743124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1935.2098356583194,
            "unit": "ns/iter",
            "extra": "iterations: 362355\ncpu: 1935.1326737591437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16172.038930732677,
            "unit": "ns/iter",
            "extra": "iterations: 43282\ncpu: 16171.690310059415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30688.219993805233,
            "unit": "ns/iter",
            "extra": "iterations: 22587\ncpu: 30687.723026519638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7393.748737508006,
            "unit": "ns/iter",
            "extra": "iterations: 94654\ncpu: 7393.65689775392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7363.171316882094,
            "unit": "ns/iter",
            "extra": "iterations: 94906\ncpu: 7362.775799211858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7369.136948151391,
            "unit": "ns/iter",
            "extra": "iterations: 94795\ncpu: 7368.712484835737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14744.932087551242,
            "unit": "ns/iter",
            "extra": "iterations: 44042\ncpu: 14743.946687253001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14039.89662898894,
            "unit": "ns/iter",
            "extra": "iterations: 49985\ncpu: 14039.937981394316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5266.434669145573,
            "unit": "ns/iter",
            "extra": "iterations: 133352\ncpu: 5266.3904553363245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26336.160467828446,
            "unit": "ns/iter",
            "extra": "iterations: 26591\ncpu: 26335.474408634436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21012.821695422073,
            "unit": "ns/iter",
            "extra": "iterations: 33325\ncpu: 21011.657914478736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20941.97607326874,
            "unit": "ns/iter",
            "extra": "iterations: 33519\ncpu: 20940.929025329027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21665.957145509157,
            "unit": "ns/iter",
            "extra": "iterations: 32342\ncpu: 21664.887762043232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50241.551526854615,
            "unit": "ns/iter",
            "extra": "iterations: 13983\ncpu: 50238.00328970888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156159.05453321896,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 156149.9326750457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132193.73665347727,
            "unit": "ns/iter",
            "extra": "iterations: 5301\ncpu: 132185.87059045615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130642.87702930263,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 130641.2017167396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131428.62718228123,
            "unit": "ns/iter",
            "extra": "iterations: 5327\ncpu: 131427.595269384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83463.03338898625,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 83457.66754113868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131563.07492469082,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 131555.4216867465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5088.271755971375,
            "unit": "ns/iter",
            "extra": "iterations: 136181\ncpu: 5088.013746411032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27389.359613965757,
            "unit": "ns/iter",
            "extra": "iterations: 25697\ncpu: 27388.01805658263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22365.02175161087,
            "unit": "ns/iter",
            "extra": "iterations: 31354\ncpu: 22364.065191044607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21965.582077840325,
            "unit": "ns/iter",
            "extra": "iterations: 31860\ncpu: 21964.34400502223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22557.562816176352,
            "unit": "ns/iter",
            "extra": "iterations: 31035\ncpu: 22557.16449170285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49196.24043716079,
            "unit": "ns/iter",
            "extra": "iterations: 14274\ncpu: 49193.302508056775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153722.90190913592,
            "unit": "ns/iter",
            "extra": "iterations: 4557\ncpu: 153716.34847487495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129093.2436819657,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 129093.59896698083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127353.05878071667,
            "unit": "ns/iter",
            "extra": "iterations: 5495\ncpu: 127350.62784349515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128255.25064172398,
            "unit": "ns/iter",
            "extra": "iterations: 5454\ncpu: 128248.71653831954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83106.98827986252,
            "unit": "ns/iter",
            "extra": "iterations: 8447\ncpu: 83101.83497099557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128209.7383315013,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 128202.68283719105 ns\nthreads: 1"
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
        "date": 1705962078823,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1350.9532949505297,
            "unit": "ns/iter",
            "extra": "iterations: 510994\ncpu: 1350.7822009651777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16206.392821988125,
            "unit": "ns/iter",
            "extra": "iterations: 50794\ncpu: 16205.565617986374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33752.962962962934,
            "unit": "ns/iter",
            "extra": "iterations: 24273\ncpu: 33750.109174803285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50038.649153051345,
            "unit": "ns/iter",
            "extra": "iterations: 16825\ncpu: 50035.768202080224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55485.53330000914,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55483.83000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69988.78784257166,
            "unit": "ns/iter",
            "extra": "iterations: 12552\ncpu: 69986.00223072022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82796.50280391607,
            "unit": "ns/iter",
            "extra": "iterations: 10521\ncpu: 82789.63976808293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97054.0317951051,
            "unit": "ns/iter",
            "extra": "iterations: 9058\ncpu: 97048.17840582905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112451.64108557194,
            "unit": "ns/iter",
            "extra": "iterations: 7701\ncpu: 112443.68263861835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1165.1456198627736,
            "unit": "ns/iter",
            "extra": "iterations: 603908\ncpu: 1165.1334309199433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 945.0580639170361,
            "unit": "ns/iter",
            "extra": "iterations: 743026\ncpu: 945.0371857781547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 930.3663330033379,
            "unit": "ns/iter",
            "extra": "iterations: 747260\ncpu: 930.2824987286883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 919.9068981258506,
            "unit": "ns/iter",
            "extra": "iterations: 762294\ncpu: 919.845361500944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1809.6156530680657,
            "unit": "ns/iter",
            "extra": "iterations: 387119\ncpu: 1809.3415719714128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5007.603965334788,
            "unit": "ns/iter",
            "extra": "iterations: 160390\ncpu: 5007.44248394538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24659.258611932706,
            "unit": "ns/iter",
            "extra": "iterations: 33471\ncpu: 24658.78820471455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19760.082529783605,
            "unit": "ns/iter",
            "extra": "iterations: 41379\ncpu: 19759.472196041483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18853.646872508092,
            "unit": "ns/iter",
            "extra": "iterations: 42622\ncpu: 18853.00549012252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18463.69990490351,
            "unit": "ns/iter",
            "extra": "iterations: 43113\ncpu: 18463.034351587714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54238.96319999813,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54230.48999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 552009.8740000776,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552008.7000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 558873.0110103863,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 558825.5181347162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 559403.7160025507,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 559376.5338393429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 554821.2595420418,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 554764.7582697216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326458.21763605846,
            "unit": "ns/iter",
            "extra": "iterations: 2665\ncpu: 326427.5422138838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 556872.9132099802,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 556838.098276961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2383360.519181568,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2383181.5856777467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1093608.6666666614,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1092946.6431095398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3324292.0000000084,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3324085.9205776197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7491.146040467637,
            "unit": "ns/iter",
            "extra": "iterations: 111743\ncpu: 7490.837009924553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40817.83643912579,
            "unit": "ns/iter",
            "extra": "iterations: 20231\ncpu: 40817.68572982058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32623.695562356304,
            "unit": "ns/iter",
            "extra": "iterations: 25171\ncpu: 32553.67287751784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32007.55886891229,
            "unit": "ns/iter",
            "extra": "iterations: 25922\ncpu: 32005.454826016663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32392.018605743895,
            "unit": "ns/iter",
            "extra": "iterations: 25476\ncpu: 32389.472444653795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 67246.37522700008,
            "unit": "ns/iter",
            "extra": "iterations: 13216\ncpu: 67244.46125908023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 589584.0639999505,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589543.4000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 599064.5020491667,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 599025.4098360669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 580933.4050972736,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 580889.000670693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 582552.7397992939,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 582502.9431438093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 339183.05139104207,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 339159.96908809966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576156.8550724555,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 576106.1923583648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2512427.403899882,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2512227.298050131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1111031.4246738295,
            "unit": "ns/iter",
            "extra": "iterations: 843\ncpu: 1110941.63701068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4991.061766303695,
            "unit": "ns/iter",
            "extra": "iterations: 163811\ncpu: 4990.962145399266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24180.45041529856,
            "unit": "ns/iter",
            "extra": "iterations: 33831\ncpu: 24179.598593006536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19213.617699984054,
            "unit": "ns/iter",
            "extra": "iterations: 42791\ncpu: 19212.91159355942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18473.914869645454,
            "unit": "ns/iter",
            "extra": "iterations: 44379\ncpu: 18473.03905000109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18393.305114997373,
            "unit": "ns/iter",
            "extra": "iterations: 44262\ncpu: 18392.655099182208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52288.34510000979,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52282.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 571848.4970000191,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571814.3000000069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 578392.0482485056,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 578337.937871776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 569817.1055016178,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 569757.4110032361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 570970.1828870174,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 570927.3024167204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 333064.40898791276,
            "unit": "ns/iter",
            "extra": "iterations: 2648\ncpu: 333032.17522658495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 565748.9942084331,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 565696.846846849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 547.4918371195156,
            "unit": "ns/iter",
            "extra": "iterations: 1283248\ncpu: 547.4673640636881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3118.379450449039,
            "unit": "ns/iter",
            "extra": "iterations: 225202\ncpu: 3118.249393877493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2515.484852304216,
            "unit": "ns/iter",
            "extra": "iterations: 277699\ncpu: 2515.4267750334047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2468.992764281452,
            "unit": "ns/iter",
            "extra": "iterations: 286910\ncpu: 2468.9041859816625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1943.9358233299138,
            "unit": "ns/iter",
            "extra": "iterations: 360536\ncpu: 1943.8314065724367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 15904.390176673916,
            "unit": "ns/iter",
            "extra": "iterations: 44262\ncpu: 15903.46798608293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30441.01439195143,
            "unit": "ns/iter",
            "extra": "iterations: 22860\ncpu: 30438.56517935223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7267.395453033181,
            "unit": "ns/iter",
            "extra": "iterations: 96196\ncpu: 7267.047486381888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7152.234386165609,
            "unit": "ns/iter",
            "extra": "iterations: 97958\ncpu: 7151.801792604999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7217.132720160166,
            "unit": "ns/iter",
            "extra": "iterations: 96873\ncpu: 7217.116224335033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14652.74588511949,
            "unit": "ns/iter",
            "extra": "iterations: 47632\ncpu: 14652.248488411113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13871.850748043833,
            "unit": "ns/iter",
            "extra": "iterations: 50465\ncpu: 13870.51818091767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5234.528544072211,
            "unit": "ns/iter",
            "extra": "iterations: 133688\ncpu: 5234.289539824041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26143.305529590387,
            "unit": "ns/iter",
            "extra": "iterations: 26747\ncpu: 26141.421467827695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20957.40378444831,
            "unit": "ns/iter",
            "extra": "iterations: 33347\ncpu: 20956.841694904964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20880.344925202775,
            "unit": "ns/iter",
            "extra": "iterations: 33558\ncpu: 20878.20489898084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21596.02341229373,
            "unit": "ns/iter",
            "extra": "iterations: 32547\ncpu: 21595.130119519406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50354.492442782255,
            "unit": "ns/iter",
            "extra": "iterations: 13894\ncpu: 50353.58428098481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154950.23928412618,
            "unit": "ns/iter",
            "extra": "iterations: 4526\ncpu: 154947.2823685347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130916.72409277956,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 130911.560044892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129177.70050101531,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 129166.70996474076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130627.84621126293,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 130619.35423665371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83220.54883555055,
            "unit": "ns/iter",
            "extra": "iterations: 8416\ncpu: 83212.38117870649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130181.15383172625,
            "unit": "ns/iter",
            "extra": "iterations: 5337\ncpu: 130180.85066516678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5089.549417424488,
            "unit": "ns/iter",
            "extra": "iterations: 138008\ncpu: 5089.368007651783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26485.07927155843,
            "unit": "ns/iter",
            "extra": "iterations: 26138\ncpu: 26483.889356492462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22391.334044723713,
            "unit": "ns/iter",
            "extra": "iterations: 31394\ncpu: 22390.380327451276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22195.358970279478,
            "unit": "ns/iter",
            "extra": "iterations: 31426\ncpu: 22193.470374848803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22086.379408019846,
            "unit": "ns/iter",
            "extra": "iterations: 31420\ncpu: 22085.45194143854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49426.80919377903,
            "unit": "ns/iter",
            "extra": "iterations: 14140\ncpu: 49425.9830268741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153576.2935759696,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 153568.8445516342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127271.76710836265,
            "unit": "ns/iter",
            "extra": "iterations: 5509\ncpu: 127261.48121256309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126618.57455341215,
            "unit": "ns/iter",
            "extra": "iterations: 5486\ncpu: 126609.25993437796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126710.40147828282,
            "unit": "ns/iter",
            "extra": "iterations: 5547\ncpu: 126700.19830538947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81692.83666509384,
            "unit": "ns/iter",
            "extra": "iterations: 8504\ncpu: 81689.66368767672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128024.77164343151,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 128016.6727806293 ns\nthreads: 1"
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
        "date": 1705963546171,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1372.8405876616096,
            "unit": "ns/iter",
            "extra": "iterations: 532211\ncpu: 1372.839343794097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16186.196789197384,
            "unit": "ns/iter",
            "extra": "iterations: 50953\ncpu: 16186.19512099386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33839.83439308765,
            "unit": "ns/iter",
            "extra": "iterations: 24534\ncpu: 33839.439145675395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49560.92278310271,
            "unit": "ns/iter",
            "extra": "iterations: 17017\ncpu: 49557.94793441854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55137.59829999572,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55136.58000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69116.62843029462,
            "unit": "ns/iter",
            "extra": "iterations: 12754\ncpu: 69098.68276619099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83387.32792270198,
            "unit": "ns/iter",
            "extra": "iterations: 10350\ncpu: 83385.73913043481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96492.74656777088,
            "unit": "ns/iter",
            "extra": "iterations: 9032\ncpu: 96493.11337466791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113710.6765659448,
            "unit": "ns/iter",
            "extra": "iterations: 7711\ncpu: 113710.81571780566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1129.1814748860572,
            "unit": "ns/iter",
            "extra": "iterations: 619397\ncpu: 1129.1775710893012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 937.097868553902,
            "unit": "ns/iter",
            "extra": "iterations: 745081\ncpu: 937.0701977368908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 923.6165950476075,
            "unit": "ns/iter",
            "extra": "iterations: 761203\ncpu: 923.6022453931467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 923.1180930217357,
            "unit": "ns/iter",
            "extra": "iterations: 759757\ncpu: 923.1101523250177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1810.9951990090988,
            "unit": "ns/iter",
            "extra": "iterations: 385962\ncpu: 1810.974137350305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4805.05449457055,
            "unit": "ns/iter",
            "extra": "iterations: 164365\ncpu: 4804.824628114257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24304.516166649286,
            "unit": "ns/iter",
            "extra": "iterations: 34299\ncpu: 24303.376191725685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19565.074736491042,
            "unit": "ns/iter",
            "extra": "iterations: 41934\ncpu: 19564.1961177088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18179.704356820374,
            "unit": "ns/iter",
            "extra": "iterations: 43495\ncpu: 18179.443614208554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19073.38981901596,
            "unit": "ns/iter",
            "extra": "iterations: 42766\ncpu: 19073.5023149231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54100.79509999832,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54101.59000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 563691.1499999543,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563678.699999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 561348.0296966082,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 561339.6384764347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 552320.1384811883,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 552323.4843650272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 551354.3543257356,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 551341.2849872783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 327744.50299399917,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 327728.85479041864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 554840.796178341,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 554817.3248407632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2359132.124999925,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2359086.7346938713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1067441.7963174824,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1067456.962025319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3313375.4519574437,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3313365.124555162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7381.716658270479,
            "unit": "ns/iter",
            "extra": "iterations: 115126\ncpu: 7381.654013863081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41106.03506435687,
            "unit": "ns/iter",
            "extra": "iterations: 20277\ncpu: 41106.258322236914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32395.020911357416,
            "unit": "ns/iter",
            "extra": "iterations: 25632\ncpu: 32394.61220349558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31597.48959957338,
            "unit": "ns/iter",
            "extra": "iterations: 26297\ncpu: 31597.398942845084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32269.23221708142,
            "unit": "ns/iter",
            "extra": "iterations: 25502\ncpu: 32268.629911379387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 67010.94953313818,
            "unit": "ns/iter",
            "extra": "iterations: 12959\ncpu: 67010.30172081177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 590306.2219999811,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590268.5999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 587248.3451087186,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 587245.3124999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 581441.7672240399,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 581419.5986622054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 578449.8876329493,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 578435.3058510632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 341908.91456308117,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 341908.15533980425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 568893.5769230762,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 568882.2685788757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2528438.537837787,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2528421.621621621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1084589.8418604648,
            "unit": "ns/iter",
            "extra": "iterations: 860\ncpu: 1084574.8837209232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4818.081073053559,
            "unit": "ns/iter",
            "extra": "iterations: 168342\ncpu: 4817.838091504208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 22965.197832053804,
            "unit": "ns/iter",
            "extra": "iterations: 35333\ncpu: 22964.551552373247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18294.333130522242,
            "unit": "ns/iter",
            "extra": "iterations: 44376\ncpu: 18293.53930052281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 17411.359568860033,
            "unit": "ns/iter",
            "extra": "iterations: 46667\ncpu: 17410.566353097507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18128.834651068246,
            "unit": "ns/iter",
            "extra": "iterations: 43762\ncpu: 18127.6678396783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52214.23629999436,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52215.029999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 570660.5499999569,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570661.8999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 571515.9082030723,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 571508.4635416664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 562807.6786632575,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 562795.1799485842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 563643.1226597987,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 563642.8018076163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329352.2769516952,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 329341.672862453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559721.7793457736,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 559736.690186018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 525.372138924664,
            "unit": "ns/iter",
            "extra": "iterations: 1337041\ncpu: 525.3713236916462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3052.8512476592946,
            "unit": "ns/iter",
            "extra": "iterations: 229630\ncpu: 3052.8676566650515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2399.4782302723643,
            "unit": "ns/iter",
            "extra": "iterations: 292723\ncpu: 2399.4940609381665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2316.225421852013,
            "unit": "ns/iter",
            "extra": "iterations: 302535\ncpu: 2316.258284165482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1905.9482973262302,
            "unit": "ns/iter",
            "extra": "iterations: 363076\ncpu: 1905.8976632991344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16045.589014324161,
            "unit": "ns/iter",
            "extra": "iterations: 43493\ncpu: 16045.538362495106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30457.04896839913,
            "unit": "ns/iter",
            "extra": "iterations: 22974\ncpu: 30456.529119874842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7249.157198218964,
            "unit": "ns/iter",
            "extra": "iterations: 97024\ncpu: 7249.1373268469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7152.719366984099,
            "unit": "ns/iter",
            "extra": "iterations: 98007\ncpu: 7152.601344801996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7180.700437773531,
            "unit": "ns/iter",
            "extra": "iterations: 97539\ncpu: 7180.743087380387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14387.652501952836,
            "unit": "ns/iter",
            "extra": "iterations: 48642\ncpu: 14387.862341186474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13633.727623517212,
            "unit": "ns/iter",
            "extra": "iterations: 50276\ncpu: 13633.50107407106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5278.924213884126,
            "unit": "ns/iter",
            "extra": "iterations: 131660\ncpu: 5278.894121221253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27231.842870561166,
            "unit": "ns/iter",
            "extra": "iterations: 26615\ncpu: 27231.177907194888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21037.391662410235,
            "unit": "ns/iter",
            "extra": "iterations: 33271\ncpu: 21037.173514471986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20782.25033427114,
            "unit": "ns/iter",
            "extra": "iterations: 33655\ncpu: 20781.741197444706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21419.81241383516,
            "unit": "ns/iter",
            "extra": "iterations: 32641\ncpu: 21419.637878741516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49613.17724211702,
            "unit": "ns/iter",
            "extra": "iterations: 14105\ncpu: 49612.31478199239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154232.83131201603,
            "unit": "ns/iter",
            "extra": "iterations: 4535\ncpu: 154233.3627342889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130486.78051490178,
            "unit": "ns/iter",
            "extra": "iterations: 5399\ncpu: 130484.3304315635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128298.18373713753,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 128295.4662261388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 128998.05553505475,
            "unit": "ns/iter",
            "extra": "iterations: 5420\ncpu: 128998.2287822878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82055.67648785397,
            "unit": "ns/iter",
            "extra": "iterations: 8519\ncpu: 82051.54360840471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129967.09194118014,
            "unit": "ns/iter",
            "extra": "iterations: 5373\ncpu: 129966.38749302055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5170.387736633053,
            "unit": "ns/iter",
            "extra": "iterations: 135917\ncpu: 5170.29731380178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27029.24657217429,
            "unit": "ns/iter",
            "extra": "iterations: 25964\ncpu: 27029.032506547766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21855.105104915066,
            "unit": "ns/iter",
            "extra": "iterations: 31930\ncpu: 21854.713435640166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21523.332152865038,
            "unit": "ns/iter",
            "extra": "iterations: 32473\ncpu: 21523.15462076196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21567.72520425425,
            "unit": "ns/iter",
            "extra": "iterations: 32435\ncpu: 21567.821797441273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49374.2643118979,
            "unit": "ns/iter",
            "extra": "iterations: 14184\ncpu: 49374.02002256038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151043.52039500832,
            "unit": "ns/iter",
            "extra": "iterations: 4658\ncpu: 151037.89179905612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126444.32244677404,
            "unit": "ns/iter",
            "extra": "iterations: 5542\ncpu: 126442.20498015273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126103.7541366899,
            "unit": "ns/iter",
            "extra": "iterations: 5560\ncpu: 126105.6834532372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126578.94812001401,
            "unit": "ns/iter",
            "extra": "iterations: 5532\ncpu: 126575.66883586488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82396.27944818241,
            "unit": "ns/iter",
            "extra": "iterations: 8481\ncpu: 82395.89671029372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127559.23860933889,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 127556.23055809738 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}