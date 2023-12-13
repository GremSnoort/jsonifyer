window.BENCHMARK_DATA = {
  "lastUpdate": 1702490936502,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-9 20.04 Release c++-17": [
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
        "date": 1702490930819,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1298.9358217099284,
            "unit": "ns/iter",
            "extra": "iterations: 526019\ncpu: 1298.9055528412473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15615.069204348638,
            "unit": "ns/iter",
            "extra": "iterations: 53277\ncpu: 15614.651725885464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33091.44886117024,
            "unit": "ns/iter",
            "extra": "iterations: 25333\ncpu: 33090.360399478945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 48583.198039106406,
            "unit": "ns/iter",
            "extra": "iterations: 17441\ncpu: 48580.941459778674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 52665.5398999992,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52664.72999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 67293.59161362232,
            "unit": "ns/iter",
            "extra": "iterations: 13355\ncpu: 67292.23511793338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 80071.5650956219,
            "unit": "ns/iter",
            "extra": "iterations: 10354\ncpu: 80070.4655205717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 93826.22009728213,
            "unit": "ns/iter",
            "extra": "iterations: 9046\ncpu: 93825.06080035375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 109846.38050394306,
            "unit": "ns/iter",
            "extra": "iterations: 7858\ncpu: 109844.65512853148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1126.5741945963262,
            "unit": "ns/iter",
            "extra": "iterations: 627977\ncpu: 1126.5753363578604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 898.8842223700515,
            "unit": "ns/iter",
            "extra": "iterations: 772334\ncpu: 898.8564532961144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 881.0203618948252,
            "unit": "ns/iter",
            "extra": "iterations: 776303\ncpu: 881.0088328912803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 899.1129320032692,
            "unit": "ns/iter",
            "extra": "iterations: 766169\ncpu: 899.0772270869743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1786.7617354069926,
            "unit": "ns/iter",
            "extra": "iterations: 395619\ncpu: 1786.6667172203524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4792.735773227047,
            "unit": "ns/iter",
            "extra": "iterations: 163723\ncpu: 4792.474484342452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 23317.283227307908,
            "unit": "ns/iter",
            "extra": "iterations: 35212\ncpu: 23317.11916392143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18197.30165733702,
            "unit": "ns/iter",
            "extra": "iterations: 45555\ncpu: 18196.867522774668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 20737.828253862554,
            "unit": "ns/iter",
            "extra": "iterations: 39407\ncpu: 20737.55170401201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19524.442962162906,
            "unit": "ns/iter",
            "extra": "iterations: 38904\ncpu: 19523.624820069886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 55391.674700001655,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55387.98999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 581577.5779999512,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581575.4999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 544283.9372196917,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 544253.6835361945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 545740.665015503,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 545717.3993808036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561176.3796122158,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 561154.7217010624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 317982.02743790956,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 317978.45754542033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 560282.4634615753,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 560235.8974358961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2342372.66075939,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2342302.025316462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1066638.0585479627,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1066615.222482434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3310262.5500000776,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3310200.7142857127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7804.619864775721,
            "unit": "ns/iter",
            "extra": "iterations: 105010\ncpu: 7804.311017998265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 42178.03191118579,
            "unit": "ns/iter",
            "extra": "iterations: 20087\ncpu: 42176.646587345014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30964.28220035857,
            "unit": "ns/iter",
            "extra": "iterations: 26832\ncpu: 30963.677698270618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31468.715296761384,
            "unit": "ns/iter",
            "extra": "iterations: 26705\ncpu: 31468.972102602416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31478.762372200803,
            "unit": "ns/iter",
            "extra": "iterations: 26996\ncpu: 31477.200325974223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 64636.70659231342,
            "unit": "ns/iter",
            "extra": "iterations: 13091\ncpu: 64634.390038958256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 583927.5980000594,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583932.0999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 575356.214193591,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 575346.5806451633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588488.7283197959,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 588464.769647698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 575702.452332617,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 575672.8870858686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 350021.1087523198,
            "unit": "ns/iter",
            "extra": "iterations: 2685\ncpu: 349415.82867784204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 571410.9928756118,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 571400.3886010365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2488580.761780132,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2488496.3350785417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1070475.863898542,
            "unit": "ns/iter",
            "extra": "iterations: 867\ncpu: 1070460.3229527117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5208.846899078858,
            "unit": "ns/iter",
            "extra": "iterations: 158856\ncpu: 5208.70977489046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25164.768283746183,
            "unit": "ns/iter",
            "extra": "iterations: 34115\ncpu: 25164.344130148165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20469.05163036923,
            "unit": "ns/iter",
            "extra": "iterations: 41003\ncpu: 20468.592542009286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19803.766934219864,
            "unit": "ns/iter",
            "extra": "iterations: 40864\ncpu: 19803.641346906756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19591.26901089074,
            "unit": "ns/iter",
            "extra": "iterations: 40582\ncpu: 19590.988615642316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 50814.900900002154,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50813.87999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 560506.7050000798,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560484.2999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 554276.0316333493,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 554260.0387346637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 568063.1329955785,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 568047.5617479407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 563499.2947232855,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 563459.7168597159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 323609.42358240596,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 323604.35598948796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 564364.4085750662,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 564348.3606557393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 521.8371174810734,
            "unit": "ns/iter",
            "extra": "iterations: 1318791\ncpu: 521.8301459442747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2955.070499818859,
            "unit": "ns/iter",
            "extra": "iterations: 237646\ncpu: 2954.922026880301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2331.681803699321,
            "unit": "ns/iter",
            "extra": "iterations: 304441\ncpu: 2331.5479846669823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2249.076796967298,
            "unit": "ns/iter",
            "extra": "iterations: 320234\ncpu: 2248.9479568066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1915.685286902645,
            "unit": "ns/iter",
            "extra": "iterations: 363207\ncpu: 1915.5864286756546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 15635.151910960518,
            "unit": "ns/iter",
            "extra": "iterations: 45553\ncpu: 15634.142647026536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30948.79753521155,
            "unit": "ns/iter",
            "extra": "iterations: 22720\ncpu: 30946.782570422787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7140.565813405224,
            "unit": "ns/iter",
            "extra": "iterations: 96219\ncpu: 7140.268554027877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7268.579394217607,
            "unit": "ns/iter",
            "extra": "iterations: 95876\ncpu: 7268.510367558018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7340.972548937993,
            "unit": "ns/iter",
            "extra": "iterations: 95479\ncpu: 7340.681196912424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13867.748410104172,
            "unit": "ns/iter",
            "extra": "iterations: 50475\ncpu: 13866.848935116388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13890.96879599067,
            "unit": "ns/iter",
            "extra": "iterations: 50282\ncpu: 13890.2151863488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5447.839023214167,
            "unit": "ns/iter",
            "extra": "iterations: 128503\ncpu: 5447.58877224663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27111.009414955675,
            "unit": "ns/iter",
            "extra": "iterations: 25810\ncpu: 27109.43045331261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21722.41133666589,
            "unit": "ns/iter",
            "extra": "iterations: 32020\ncpu: 21722.336039974634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21644.34944018829,
            "unit": "ns/iter",
            "extra": "iterations: 32243\ncpu: 21644.27627702132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22130.228013436044,
            "unit": "ns/iter",
            "extra": "iterations: 32156\ncpu: 22130.00995148635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51333.62775653977,
            "unit": "ns/iter",
            "extra": "iterations: 13604\ncpu: 51330.96148191655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158798.13303167198,
            "unit": "ns/iter",
            "extra": "iterations: 4420\ncpu: 158795.79185520377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131553.99428789597,
            "unit": "ns/iter",
            "extra": "iterations: 5252\ncpu: 131549.31454683788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130990.40536457248,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 130986.98526634024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132210.39189434247,
            "unit": "ns/iter",
            "extra": "iterations: 5527\ncpu: 132211.50714673434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83576.44066985916,
            "unit": "ns/iter",
            "extra": "iterations: 8360\ncpu: 83573.45693779796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131959.50367023324,
            "unit": "ns/iter",
            "extra": "iterations: 5313\ncpu: 131955.16657255925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5166.111140349926,
            "unit": "ns/iter",
            "extra": "iterations: 133003\ncpu: 5165.939866018021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26990.395227648576,
            "unit": "ns/iter",
            "extra": "iterations: 25522\ncpu: 26990.07131102602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22183.529314771637,
            "unit": "ns/iter",
            "extra": "iterations: 31537\ncpu: 22182.544313029066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22552.43888888745,
            "unit": "ns/iter",
            "extra": "iterations: 30960\ncpu: 22551.78617571069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22369.205927635478,
            "unit": "ns/iter",
            "extra": "iterations: 31176\ncpu: 22368.488580959365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49808.909239634864,
            "unit": "ns/iter",
            "extra": "iterations: 14059\ncpu: 49807.632121773124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155486.98400710695,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 155470.7241226121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130168.18424963264,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 130164.39450222821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127259.75875985184,
            "unit": "ns/iter",
            "extra": "iterations: 5451\ncpu: 127254.83397541764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127392.46139840584,
            "unit": "ns/iter",
            "extra": "iterations: 5492\ncpu: 127391.98834668487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81236.75617677537,
            "unit": "ns/iter",
            "extra": "iterations: 8621\ncpu: 81235.47152302582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129403.3359273752,
            "unit": "ns/iter",
            "extra": "iterations: 5397\ncpu: 129396.70187140907 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}