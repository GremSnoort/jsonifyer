window.BENCHMARK_DATA = {
  "lastUpdate": 1705960579050,
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
        "date": 1702493607601,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1456.8441840108287,
            "unit": "ns/iter",
            "extra": "iterations: 466146\ncpu: 1456.745311554749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16132.488058354591,
            "unit": "ns/iter",
            "extra": "iterations: 50998\ncpu: 16131.952233420921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33881.91848718697,
            "unit": "ns/iter",
            "extra": "iterations: 24352\ncpu: 33880.55601182654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49970.9582715895,
            "unit": "ns/iter",
            "extra": "iterations: 16871\ncpu: 49969.480173078075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55427.69969999881,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55423.84999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70178.23695323264,
            "unit": "ns/iter",
            "extra": "iterations: 12551\ncpu: 70175.34857780254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83639.86485177783,
            "unit": "ns/iter",
            "extra": "iterations: 10322\ncpu: 83638.50029064136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97157.80837858909,
            "unit": "ns/iter",
            "extra": "iterations: 9023\ncpu: 97153.16413609663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 109945.23487140184,
            "unit": "ns/iter",
            "extra": "iterations: 7932\ncpu: 109941.25063035809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1141.2686415827004,
            "unit": "ns/iter",
            "extra": "iterations: 611469\ncpu: 1141.1821367886191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 934.730641931596,
            "unit": "ns/iter",
            "extra": "iterations: 749597\ncpu: 934.6756990756362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 922.7394281388029,
            "unit": "ns/iter",
            "extra": "iterations: 755638\ncpu: 922.6930090863623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 955.2896251973955,
            "unit": "ns/iter",
            "extra": "iterations: 734173\ncpu: 955.2322136608138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1839.2540321303397,
            "unit": "ns/iter",
            "extra": "iterations: 378708\ncpu: 1839.224151589084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4903.808728529197,
            "unit": "ns/iter",
            "extra": "iterations: 159752\ncpu: 4903.603084781419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 22970.9433664231,
            "unit": "ns/iter",
            "extra": "iterations: 35456\ncpu: 22970.388650722027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19252.32982826687,
            "unit": "ns/iter",
            "extra": "iterations: 43556\ncpu: 19251.701258150475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19271.22664339431,
            "unit": "ns/iter",
            "extra": "iterations: 42397\ncpu: 19270.040333042383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19525.508132023682,
            "unit": "ns/iter",
            "extra": "iterations: 41810\ncpu: 19524.223869887603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54707.27779999151,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54706.02000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 565664.3590000385,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565627.6000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 551963.7123638133,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 551952.8507367062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 556486.7054313442,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 556440.2555910546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 554991.3316195591,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 554947.8149100248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324657.07314369106,
            "unit": "ns/iter",
            "extra": "iterations: 2707\ncpu: 324633.98596232064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 559856.3652733096,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 559811.5112540207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2369537.670050863,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2369382.741116748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1064948.659302445,
            "unit": "ns/iter",
            "extra": "iterations: 860\ncpu: 1064860.3488372099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3363664.2290912275,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3363355.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7431.931198784036,
            "unit": "ns/iter",
            "extra": "iterations: 113123\ncpu: 7431.270387100771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41784.10999143253,
            "unit": "ns/iter",
            "extra": "iterations: 19847\ncpu: 41780.90391494941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32968.93294958038,
            "unit": "ns/iter",
            "extra": "iterations: 25190\ncpu: 32966.526399364884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32361.363950061896,
            "unit": "ns/iter",
            "extra": "iterations: 25792\ncpu: 32360.383064516234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 33076.36910763939,
            "unit": "ns/iter",
            "extra": "iterations: 24990\ncpu: 33075.682272909224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66329.9128185279,
            "unit": "ns/iter",
            "extra": "iterations: 12950\ncpu: 66327.44401544414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603860.8380000596,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603820.2000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 588803.0642325369,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 588756.1866125746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 582158.2470119381,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 582110.358565738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587151.8845374773,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 587090.3443619163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 337659.2899224909,
            "unit": "ns/iter",
            "extra": "iterations: 2580\ncpu: 337631.744186047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580353.6268260792,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 580335.9229747636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2565959.5552483373,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2565795.303867399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1124185.5042117937,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 1124143.8026474174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5252.526824161855,
            "unit": "ns/iter",
            "extra": "iterations: 150946\ncpu: 5252.290885482234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26396.551430116564,
            "unit": "ns/iter",
            "extra": "iterations: 31431\ncpu: 26396.042124017848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20452.78523260534,
            "unit": "ns/iter",
            "extra": "iterations: 40928\ncpu: 20451.67122752152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20082.046712505784,
            "unit": "ns/iter",
            "extra": "iterations: 40867\ncpu: 20081.41532287654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20187.501409484954,
            "unit": "ns/iter",
            "extra": "iterations: 40795\ncpu: 20186.108591739136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 54386.378699996385,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54383.89999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 575284.4610000239,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575255.9000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 567162.2522639062,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 567123.2858990914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 567378.3294797533,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 567346.6281310227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 567464.8699291687,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 567454.9259497725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330198.8034835152,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 330186.3309352527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562199.726045084,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 562171.5755627014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 535.3737066644695,
            "unit": "ns/iter",
            "extra": "iterations: 1305829\ncpu: 535.3666521420479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3040.3219407452175,
            "unit": "ns/iter",
            "extra": "iterations: 230530\ncpu: 3040.1422808311436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2464.882476622377,
            "unit": "ns/iter",
            "extra": "iterations: 294401\ncpu: 2464.8204319958154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2481.85011609242,
            "unit": "ns/iter",
            "extra": "iterations: 296316\ncpu: 2481.695892223148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1936.9780647124749,
            "unit": "ns/iter",
            "extra": "iterations: 361290\ncpu: 1936.8820061446513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 15703.975074931792,
            "unit": "ns/iter",
            "extra": "iterations: 44373\ncpu: 15703.641854280686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30885.588495184475,
            "unit": "ns/iter",
            "extra": "iterations: 22634\ncpu: 30884.02845277035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7274.0631263047235,
            "unit": "ns/iter",
            "extra": "iterations: 96299\ncpu: 7273.973769198013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7267.503496866433,
            "unit": "ns/iter",
            "extra": "iterations: 96372\ncpu: 7267.240484788187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7268.484949173107,
            "unit": "ns/iter",
            "extra": "iterations: 96307\ncpu: 7268.401050806272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14533.84197712234,
            "unit": "ns/iter",
            "extra": "iterations: 47645\ncpu: 14533.15353132553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13907.039373496014,
            "unit": "ns/iter",
            "extra": "iterations: 50694\ncpu: 13906.274904327747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5444.893079032031,
            "unit": "ns/iter",
            "extra": "iterations: 129086\ncpu: 5444.79106951947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27130.11462695721,
            "unit": "ns/iter",
            "extra": "iterations: 25788\ncpu: 27129.839460213916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21555.819568566054,
            "unit": "ns/iter",
            "extra": "iterations: 32450\ncpu: 21555.38674884427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21516.530296013207,
            "unit": "ns/iter",
            "extra": "iterations: 32397\ncpu: 21515.757631879504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22088.43343858437,
            "unit": "ns/iter",
            "extra": "iterations: 31670\ncpu: 22087.75497316064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50711.74162678649,
            "unit": "ns/iter",
            "extra": "iterations: 13794\ncpu: 50710.07684500585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156215.85343855905,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 156203.02142051802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130521.8993288638,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 130509.17225950598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129256.54535273707,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 129246.15528182135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130867.52900577728,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 130852.99384443092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83067.42362187039,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 83066.2459816644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131149.91558807937,
            "unit": "ns/iter",
            "extra": "iterations: 5331\ncpu: 131145.93884824656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5483.68120986013,
            "unit": "ns/iter",
            "extra": "iterations: 128147\ncpu: 5483.106120314965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26004.560453869664,
            "unit": "ns/iter",
            "extra": "iterations: 26880\ncpu: 26001.66666666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22071.932266395797,
            "unit": "ns/iter",
            "extra": "iterations: 31742\ncpu: 22070.105853443125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22306.87122921656,
            "unit": "ns/iter",
            "extra": "iterations: 31459\ncpu: 22304.831685686382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22362.360742873752,
            "unit": "ns/iter",
            "extra": "iterations: 31230\ncpu: 22360.806916426172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49203.078392807474,
            "unit": "ns/iter",
            "extra": "iterations: 14236\ncpu: 49199.31862882819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153667.3240211226,
            "unit": "ns/iter",
            "extra": "iterations: 4546\ncpu: 153657.01715794133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127905.28066642834,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 127897.85792750018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126851.01684171657,
            "unit": "ns/iter",
            "extra": "iterations: 5522\ncpu: 126840.16660630338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126797.69907659499,
            "unit": "ns/iter",
            "extra": "iterations: 5523\ncpu: 126794.18794133748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82707.32683676762,
            "unit": "ns/iter",
            "extra": "iterations: 8466\ncpu: 82704.94920859876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129666.68397624664,
            "unit": "ns/iter",
            "extra": "iterations: 5392\ncpu: 129659.05044510348 ns\nthreads: 1"
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
        "date": 1702504009696,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1461.3635412383198,
            "unit": "ns/iter",
            "extra": "iterations: 450125\ncpu: 1461.3007497917245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16171.423773112383,
            "unit": "ns/iter",
            "extra": "iterations: 51268\ncpu: 16170.092455332759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33969.63577895189,
            "unit": "ns/iter",
            "extra": "iterations: 24411\ncpu: 33969.06722379257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49694.19218009771,
            "unit": "ns/iter",
            "extra": "iterations: 16880\ncpu: 49693.3471563981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55381.16249999802,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55379.88 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69018.25839032087,
            "unit": "ns/iter",
            "extra": "iterations: 12574\ncpu: 69015.54795609986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82353.07342016537,
            "unit": "ns/iter",
            "extra": "iterations: 10365\ncpu: 82351.30728412925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95324.16942239234,
            "unit": "ns/iter",
            "extra": "iterations: 9072\ncpu: 95321.15299823633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 110820.20691441692,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 110817.41551210679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1156.477824007227,
            "unit": "ns/iter",
            "extra": "iterations: 603513\ncpu: 1156.4317587193632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 938.4221678716139,
            "unit": "ns/iter",
            "extra": "iterations: 747821\ncpu: 938.3995635319136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 930.7225087185639,
            "unit": "ns/iter",
            "extra": "iterations: 734351\ncpu: 930.6914540866695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 954.2779495066484,
            "unit": "ns/iter",
            "extra": "iterations: 732097\ncpu: 954.2534664122368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1823.7752312451253,
            "unit": "ns/iter",
            "extra": "iterations: 384008\ncpu: 1823.7419532926372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4778.724649608666,
            "unit": "ns/iter",
            "extra": "iterations: 164031\ncpu: 4778.582706927355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24498.63107108358,
            "unit": "ns/iter",
            "extra": "iterations: 34199\ncpu: 24498.21047399046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19553.633486861625,
            "unit": "ns/iter",
            "extra": "iterations: 41903\ncpu: 19553.244397775758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19044.240185456365,
            "unit": "ns/iter",
            "extra": "iterations: 42921\ncpu: 19043.433284406296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19938.404341959045,
            "unit": "ns/iter",
            "extra": "iterations: 40765\ncpu: 19937.735802771997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54838.701999995006,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54838.17000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 558009.5149999807,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557968.4999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 557041.2365250839,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 557015.5358275187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 559315.6880204998,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 559290.3907751426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 560243.6965783872,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 560224.3382827621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324116.3233444164,
            "unit": "ns/iter",
            "extra": "iterations: 2703\ncpu: 324111.3947465776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 557871.7152061894,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 557847.4226804115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2367102.569974469,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2367019.592875319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1057998.9525424005,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 1057975.3672316375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3345034.9139785534,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3344886.3799283216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7244.764087643334,
            "unit": "ns/iter",
            "extra": "iterations: 117887\ncpu: 7244.4663109587755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41370.29985384834,
            "unit": "ns/iter",
            "extra": "iterations: 19843\ncpu: 41369.27883888535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31898.613960948907,
            "unit": "ns/iter",
            "extra": "iterations: 25557\ncpu: 31898.29792229132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32240.563957373597,
            "unit": "ns/iter",
            "extra": "iterations: 25431\ncpu: 32239.314222798777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32166.384364695386,
            "unit": "ns/iter",
            "extra": "iterations: 25468\ncpu: 32165.62352756417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66085.55237951051,
            "unit": "ns/iter",
            "extra": "iterations: 13154\ncpu: 66083.3282651669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 599080.6360000533,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599075.2000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593634.8344686312,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 593597.8201634869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 583775.850271002,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 583770.1897018974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584683.6129032065,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 584664.9865591408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 347769.3354380035,
            "unit": "ns/iter",
            "extra": "iterations: 2534\ncpu: 347752.0126282582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576422.1523746692,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 576416.4248021117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2513239.52316079,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2513132.970027239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1111571.4364508812,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1111519.7841726644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5284.083466575089,
            "unit": "ns/iter",
            "extra": "iterations: 151354\ncpu: 5283.85308614239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24220.093679708254,
            "unit": "ns/iter",
            "extra": "iterations: 31565\ncpu: 24218.105496594435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18479.994163904357,
            "unit": "ns/iter",
            "extra": "iterations: 44379\ncpu: 18479.145541810394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18540.430056501544,
            "unit": "ns/iter",
            "extra": "iterations: 45308\ncpu: 18539.242517877636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18520.18008474581,
            "unit": "ns/iter",
            "extra": "iterations: 43896\ncpu: 18519.106524512492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 55728.086600004186,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55726.94000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 573324.4849999438,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573305.0999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569775.8740259596,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 569766.0389610413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 564658.6497102643,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 564639.5363812002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 565643.9579015062,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 565623.8341968922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330670.8200679113,
            "unit": "ns/iter",
            "extra": "iterations: 2651\ncpu: 330656.84647302714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559547.2644415403,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 559515.9820282422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 524.3271206410255,
            "unit": "ns/iter",
            "extra": "iterations: 1330824\ncpu: 524.2950232337241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3015.7862125150627,
            "unit": "ns/iter",
            "extra": "iterations: 238129\ncpu: 3015.6742773874676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2274.765000876492,
            "unit": "ns/iter",
            "extra": "iterations: 308082\ncpu: 2274.6940749540586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2407.5492669458754,
            "unit": "ns/iter",
            "extra": "iterations: 291179\ncpu: 2407.4418141417996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1951.459569955434,
            "unit": "ns/iter",
            "extra": "iterations: 358335\ncpu: 1951.440132836584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 15855.877310583457,
            "unit": "ns/iter",
            "extra": "iterations: 44307\ncpu: 15855.440449590453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30834.28667776385,
            "unit": "ns/iter",
            "extra": "iterations: 22834\ncpu: 30833.143557852152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7254.443554224184,
            "unit": "ns/iter",
            "extra": "iterations: 96730\ncpu: 7253.834384368873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7222.385844089211,
            "unit": "ns/iter",
            "extra": "iterations: 96850\ncpu: 7222.153846153808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7256.2632318636815,
            "unit": "ns/iter",
            "extra": "iterations: 96056\ncpu: 7256.0652119596625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14593.76048691795,
            "unit": "ns/iter",
            "extra": "iterations: 47893\ncpu: 14593.264151337393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13930.195665561503,
            "unit": "ns/iter",
            "extra": "iterations: 50341\ncpu: 13929.94378339706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5402.3559546076685,
            "unit": "ns/iter",
            "extra": "iterations: 129362\ncpu: 5402.124271424456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26905.653518203882,
            "unit": "ns/iter",
            "extra": "iterations: 26036\ncpu: 26905.400215086676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21521.34781273004,
            "unit": "ns/iter",
            "extra": "iterations: 32552\ncpu: 21520.668468911685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21490.042330966873,
            "unit": "ns/iter",
            "extra": "iterations: 32553\ncpu: 21489.782815715615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22182.93227697666,
            "unit": "ns/iter",
            "extra": "iterations: 31555\ncpu: 22181.809538900157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50591.87226621628,
            "unit": "ns/iter",
            "extra": "iterations: 13763\ncpu: 50590.510789798536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158143.66342236765,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 158133.99728383732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 128907.91975648912,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 128903.5971223001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129668.0431401702,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 129666.89501944033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131685.34019846536,
            "unit": "ns/iter",
            "extra": "iterations: 5341\ncpu: 131675.64126568096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83807.20155410437,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 83803.15600717199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132115.27040720504,
            "unit": "ns/iter",
            "extra": "iterations: 5329\ncpu: 132108.61324826456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5617.474950785693,
            "unit": "ns/iter",
            "extra": "iterations: 124455\ncpu: 5617.313888554142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26422.280161209765,
            "unit": "ns/iter",
            "extra": "iterations: 26549\ncpu: 26421.439602244965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21970.671749749315,
            "unit": "ns/iter",
            "extra": "iterations: 31936\ncpu: 21969.726953907666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22716.976356277588,
            "unit": "ns/iter",
            "extra": "iterations: 30875\ncpu: 22716.26882591117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22964.076389117945,
            "unit": "ns/iter",
            "extra": "iterations: 30397\ncpu: 22963.77603052915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48698.86293355841,
            "unit": "ns/iter",
            "extra": "iterations: 14358\ncpu: 48695.98829920545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155867.3075211589,
            "unit": "ns/iter",
            "extra": "iterations: 4494\ncpu: 155864.0854472658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130124.63834139609,
            "unit": "ns/iter",
            "extra": "iterations: 5378\ncpu: 130123.05689847583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128908.7353971055,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 128901.01345126142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127597.7320094824,
            "unit": "ns/iter",
            "extra": "iterations: 5489\ncpu: 127591.27345600107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83601.76852743032,
            "unit": "ns/iter",
            "extra": "iterations: 8312\ncpu: 83595.9576515878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129277.71020633736,
            "unit": "ns/iter",
            "extra": "iterations: 5428\ncpu: 129269.9889462053 ns\nthreads: 1"
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
        "date": 1705576261922,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1381.6921160077777,
            "unit": "ns/iter",
            "extra": "iterations: 508448\ncpu: 1381.5764837308832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15837.079959319051,
            "unit": "ns/iter",
            "extra": "iterations: 52114\ncpu: 15836.876846912543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33832.84077827334,
            "unit": "ns/iter",
            "extra": "iterations: 24670\ncpu: 33831.00932306446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49547.63480002399,
            "unit": "ns/iter",
            "extra": "iterations: 16977\ncpu: 49545.26712611179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55259.92679999945,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55256.110000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69071.07036095117,
            "unit": "ns/iter",
            "extra": "iterations: 12578\ncpu: 69067.53060899989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83255.02326685723,
            "unit": "ns/iter",
            "extra": "iterations: 10530\ncpu: 83250.27540360874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95597.84981925847,
            "unit": "ns/iter",
            "extra": "iterations: 9129\ncpu: 95597.60105159384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111642.30356448774,
            "unit": "ns/iter",
            "extra": "iterations: 7715\ncpu: 111639.39079714856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1161.8591278960012,
            "unit": "ns/iter",
            "extra": "iterations: 604882\ncpu: 1161.8583459253232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 949.9616024383795,
            "unit": "ns/iter",
            "extra": "iterations: 738849\ncpu: 949.9395681661623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 926.6327316995279,
            "unit": "ns/iter",
            "extra": "iterations: 755720\ncpu: 926.6207060816156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 948.3424871300276,
            "unit": "ns/iter",
            "extra": "iterations: 739511\ncpu: 948.3236895732457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1829.5210952465195,
            "unit": "ns/iter",
            "extra": "iterations: 382124\ncpu: 1829.4221247553137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4993.42621816291,
            "unit": "ns/iter",
            "extra": "iterations: 160385\ncpu: 4993.241263210401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24094.191371450357,
            "unit": "ns/iter",
            "extra": "iterations: 33563\ncpu: 24093.930816673124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19039.704279608504,
            "unit": "ns/iter",
            "extra": "iterations: 42831\ncpu: 19039.473745651496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18669.082607189084,
            "unit": "ns/iter",
            "extra": "iterations: 43265\ncpu: 18668.799260372172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20126.18526310411,
            "unit": "ns/iter",
            "extra": "iterations: 39927\ncpu: 20125.16091867655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 55649.436500004864,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55645.17000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 559851.1970000572,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559850.7999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 561910.9559105006,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 561877.9552715643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 557586.552783097,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 557559.1170825332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 554494.5209002672,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 554462.508038585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326329.96938774956,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 326318.5941043082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 558581.5765534632,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 558563.4208840478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2381694.122762318,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2381600.2557544834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1072661.8621088571,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 1072649.0150637308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3325469.6942448746,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3325304.316546768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7431.149726718807,
            "unit": "ns/iter",
            "extra": "iterations: 113253\ncpu: 7430.958120314711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41321.072365465705,
            "unit": "ns/iter",
            "extra": "iterations: 20051\ncpu: 41320.617425564866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32827.64405979401,
            "unit": "ns/iter",
            "extra": "iterations: 25420\ncpu: 32827.25413060595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32437.063533640445,
            "unit": "ns/iter",
            "extra": "iterations: 25577\ncpu: 32436.978535402806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32274.91610949442,
            "unit": "ns/iter",
            "extra": "iterations: 25426\ncpu: 32274.12097852586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66073.03412193253,
            "unit": "ns/iter",
            "extra": "iterations: 13188\ncpu: 66072.41431604508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 601884.1929999326,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601873.299999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 586390.2013513749,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 586382.5000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588303.9900066225,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 588296.0026648877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587407.0328418543,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 587399.5308310977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 338520.1406917823,
            "unit": "ns/iter",
            "extra": "iterations: 2573\ncpu: 338519.16051301826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576420.4943968276,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 576414.0408701396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2524664.5122614773,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2524600.5449591344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1125526.0120338039,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 1125506.3778580008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5299.875140983323,
            "unit": "ns/iter",
            "extra": "iterations: 152500\ncpu: 5299.76065573771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25790.619415214405,
            "unit": "ns/iter",
            "extra": "iterations: 31738\ncpu: 25790.333354338713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20162.132040992696,
            "unit": "ns/iter",
            "extra": "iterations: 40495\ncpu: 20161.908877639242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19872.88100720034,
            "unit": "ns/iter",
            "extra": "iterations: 40826\ncpu: 19872.848184980146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19879.33174468519,
            "unit": "ns/iter",
            "extra": "iterations: 40076\ncpu: 19878.895099311176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 51577.78710000684,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51576.96999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 579302.8980000372,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579302.2000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 568963.1913099571,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 568950.9079118002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 567925.1832901118,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 567907.059585493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 568811.9084415528,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 568805.5194805227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330322.147455107,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 330318.7125748519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 555947.5203045532,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 555935.7868020317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 523.151006864105,
            "unit": "ns/iter",
            "extra": "iterations: 1341045\ncpu: 523.1434441051583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3009.8320204220313,
            "unit": "ns/iter",
            "extra": "iterations: 232689\ncpu: 3009.7817258228697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2370.7863176598985,
            "unit": "ns/iter",
            "extra": "iterations: 292640\ncpu: 2370.7586112629747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2376.034707158217,
            "unit": "ns/iter",
            "extra": "iterations: 294579\ncpu: 2375.936166529168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1938.3822922352113,
            "unit": "ns/iter",
            "extra": "iterations: 360949\ncpu: 1938.342258878693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16010.512636358199,
            "unit": "ns/iter",
            "extra": "iterations: 44277\ncpu: 16010.222011427999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30774.957173636583,
            "unit": "ns/iter",
            "extra": "iterations: 22743\ncpu: 30774.51083849997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7238.767151552168,
            "unit": "ns/iter",
            "extra": "iterations: 96930\ncpu: 7238.75477148452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7233.799515738465,
            "unit": "ns/iter",
            "extra": "iterations: 97055\ncpu: 7233.6283550564185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7235.138638431407,
            "unit": "ns/iter",
            "extra": "iterations: 96712\ncpu: 7235.0504590950195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14488.398131883816,
            "unit": "ns/iter",
            "extra": "iterations: 48391\ncpu: 14488.05976317894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13904.012356715319,
            "unit": "ns/iter",
            "extra": "iterations: 50337\ncpu: 13903.341478435177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5346.034910262248,
            "unit": "ns/iter",
            "extra": "iterations: 130993\ncpu: 5345.911613597671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26821.19368211248,
            "unit": "ns/iter",
            "extra": "iterations: 26053\ncpu: 26820.903542778517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21550.96621352243,
            "unit": "ns/iter",
            "extra": "iterations: 32587\ncpu: 21550.919078159983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21415.17047829777,
            "unit": "ns/iter",
            "extra": "iterations: 32532\ncpu: 21415.1389401202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22071.553466065085,
            "unit": "ns/iter",
            "extra": "iterations: 31693\ncpu: 22071.52999084959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50861.82581907978,
            "unit": "ns/iter",
            "extra": "iterations: 13796\ncpu: 50860.734995650775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158151.8026672539,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 158141.56871609663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131466.55084421305,
            "unit": "ns/iter",
            "extra": "iterations: 5212\ncpu: 131459.6891788201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130569.56768801868,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 130559.83286908056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131317.15183933923,
            "unit": "ns/iter",
            "extra": "iterations: 5328\ncpu: 131313.83258258188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83253.72911423391,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 83252.72683687024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131279.66829267927,
            "unit": "ns/iter",
            "extra": "iterations: 5330\ncpu: 131273.0581613495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5215.379672393848,
            "unit": "ns/iter",
            "extra": "iterations: 134674\ncpu: 5215.097940211113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26326.400165357347,
            "unit": "ns/iter",
            "extra": "iterations: 26609\ncpu: 26324.45413206035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21998.751853589776,
            "unit": "ns/iter",
            "extra": "iterations: 31965\ncpu: 21997.462849992247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22463.828689604674,
            "unit": "ns/iter",
            "extra": "iterations: 31189\ncpu: 22461.922472666298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22182.174289244755,
            "unit": "ns/iter",
            "extra": "iterations: 31551\ncpu: 22180.365123133826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49521.19865629131,
            "unit": "ns/iter",
            "extra": "iterations: 14140\ncpu: 49517.22772277224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153740.05328947815,
            "unit": "ns/iter",
            "extra": "iterations: 4560\ncpu: 153727.8508771921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129172.02921058338,
            "unit": "ns/iter",
            "extra": "iterations: 5409\ncpu: 129161.73044924959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126660.70295236724,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 126653.0157580149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127445.05100743784,
            "unit": "ns/iter",
            "extra": "iterations: 5509\ncpu: 127443.43801052825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81564.564760789,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 81559.68494749094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127983.3898646134,
            "unit": "ns/iter",
            "extra": "iterations: 5466\ncpu: 127977.4057811946 ns\nthreads: 1"
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
        "date": 1705774038405,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1368.3496119419506,
            "unit": "ns/iter",
            "extra": "iterations: 514356\ncpu: 1368.300165644029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15929.379987385477,
            "unit": "ns/iter",
            "extra": "iterations: 50728\ncpu: 15929.145639489037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33585.33452463263,
            "unit": "ns/iter",
            "extra": "iterations: 24623\ncpu: 33584.42106973155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49803.36117515172,
            "unit": "ns/iter",
            "extra": "iterations: 16917\ncpu: 49802.08665839095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 54976.66969999955,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54972.42 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69751.0988767571,
            "unit": "ns/iter",
            "extra": "iterations: 12642\ncpu: 69750.54579971518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83062.39337355104,
            "unit": "ns/iter",
            "extra": "iterations: 10443\ncpu: 83060.08809729003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96169.54015242858,
            "unit": "ns/iter",
            "extra": "iterations: 9053\ncpu: 96166.53043190109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112330.12138654862,
            "unit": "ns/iter",
            "extra": "iterations: 7818\ncpu: 112324.00869787681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1138.6905321227093,
            "unit": "ns/iter",
            "extra": "iterations: 613411\ncpu: 1138.6393462132219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 929.2908986219891,
            "unit": "ns/iter",
            "extra": "iterations: 750282\ncpu: 929.2379398679425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 919.8475955059758,
            "unit": "ns/iter",
            "extra": "iterations: 760555\ncpu: 919.806851575495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 957.4312625442944,
            "unit": "ns/iter",
            "extra": "iterations: 729915\ncpu: 957.401204249809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1826.0468786261818,
            "unit": "ns/iter",
            "extra": "iterations: 383501\ncpu: 1826.0054080693403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4916.914895738953,
            "unit": "ns/iter",
            "extra": "iterations: 160462\ncpu: 4916.65814959305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24372.463001670032,
            "unit": "ns/iter",
            "extra": "iterations: 33488\ncpu: 24371.00155279507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18699.331336280327,
            "unit": "ns/iter",
            "extra": "iterations: 43898\ncpu: 18698.473734566516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18650.071017536324,
            "unit": "ns/iter",
            "extra": "iterations: 43792\ncpu: 18649.344629156032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18923.567408209106,
            "unit": "ns/iter",
            "extra": "iterations: 42569\ncpu: 18922.539876435847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54871.893500001075,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54870.190000000104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 567667.8150000499,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567641.2000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 561596.7962724544,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 560382.133676094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 562949.3891050476,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 562927.5616083018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 559634.0314342194,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 559610.6745252137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 327767.8566616775,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 327750.97305389214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 561950.0790155781,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 561930.4404145092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2340408.0101011232,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2340362.626262627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1085135.7628504285,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1085121.3785046767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3319565.6487455103,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3319483.8709677407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7744.541655684288,
            "unit": "ns/iter",
            "extra": "iterations: 110033\ncpu: 7744.272172893583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43102.77497404147,
            "unit": "ns/iter",
            "extra": "iterations: 19260\ncpu: 43102.44029075801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32092.15083776208,
            "unit": "ns/iter",
            "extra": "iterations: 24649\ncpu: 32091.301878372487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32377.198939818285,
            "unit": "ns/iter",
            "extra": "iterations: 25656\ncpu: 32376.99953227324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32266.03109126471,
            "unit": "ns/iter",
            "extra": "iterations: 24412\ncpu: 32264.95985580877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66110.86550596816,
            "unit": "ns/iter",
            "extra": "iterations: 13153\ncpu: 66107.7548848174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 597421.4259999826,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597373.3999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589587.9481481842,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 589569.0909090907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 585644.0948855594,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 585620.794078062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 585678.1112610019,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 585641.0654079568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 339270.6714285696,
            "unit": "ns/iter",
            "extra": "iterations: 2590\ncpu: 339261.11969112174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578301.4179402331,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 578277.076411958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2499418.207650415,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2499274.8633879856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1104577.5910164847,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1104536.4066193826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5277.664029202331,
            "unit": "ns/iter",
            "extra": "iterations: 152040\ncpu: 5277.313207050751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25612.89624312039,
            "unit": "ns/iter",
            "extra": "iterations: 31622\ncpu: 25612.149769148065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20236.14278282879,
            "unit": "ns/iter",
            "extra": "iterations: 40369\ncpu: 20235.01696846607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20539.93854694157,
            "unit": "ns/iter",
            "extra": "iterations: 41072\ncpu: 20538.822068562487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20105.8774712411,
            "unit": "ns/iter",
            "extra": "iterations: 40162\ncpu: 20104.783128330368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 53578.803100003825,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53575.71999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 577964.7360000126,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577960.7999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 570655.2456254269,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 570635.968891771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 572417.8221498732,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 572390.2931596102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 569757.2069858062,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 569738.8745148766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 328271.2498124558,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 328265.0412603158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559890.7673077182,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 559880.8974359015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 535.924608750005,
            "unit": "ns/iter",
            "extra": "iterations: 1313163\ncpu: 535.9135156869354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2923.9286107680114,
            "unit": "ns/iter",
            "extra": "iterations: 239672\ncpu: 2923.8659501318416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2211.8798451812117,
            "unit": "ns/iter",
            "extra": "iterations: 317274\ncpu: 2211.8478034758596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2396.5914859938403,
            "unit": "ns/iter",
            "extra": "iterations: 290580\ncpu: 2396.5365820083944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1952.0803641954767,
            "unit": "ns/iter",
            "extra": "iterations: 358269\ncpu: 1951.9818907022384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16091.450096365888,
            "unit": "ns/iter",
            "extra": "iterations: 43584\ncpu: 16090.790198237904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30627.613503922264,
            "unit": "ns/iter",
            "extra": "iterations: 22823\ncpu: 30626.315558866077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7254.2604055609145,
            "unit": "ns/iter",
            "extra": "iterations: 96607\ncpu: 7254.211392549094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7197.90811733009,
            "unit": "ns/iter",
            "extra": "iterations: 97298\ncpu: 7197.42440749036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7221.172073926714,
            "unit": "ns/iter",
            "extra": "iterations: 96691\ncpu: 7220.802349753334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14385.927426821434,
            "unit": "ns/iter",
            "extra": "iterations: 48613\ncpu: 14385.104807355945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13790.0324475693,
            "unit": "ns/iter",
            "extra": "iterations: 51067\ncpu: 13789.456987878575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5374.6235608175275,
            "unit": "ns/iter",
            "extra": "iterations: 129240\ncpu: 5374.587588981707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26934.447922638672,
            "unit": "ns/iter",
            "extra": "iterations: 26163\ncpu: 26933.53208729936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21312.05037330474,
            "unit": "ns/iter",
            "extra": "iterations: 32815\ncpu: 21311.91223525827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21505.529073167516,
            "unit": "ns/iter",
            "extra": "iterations: 32487\ncpu: 21504.67263828598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22045.851894990923,
            "unit": "ns/iter",
            "extra": "iterations: 31768\ncpu: 22045.744145051787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50372.29533491422,
            "unit": "ns/iter",
            "extra": "iterations: 13869\ncpu: 50369.702213570185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157448.64161979267,
            "unit": "ns/iter",
            "extra": "iterations: 4445\ncpu: 157441.16985376866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131339.79680751596,
            "unit": "ns/iter",
            "extra": "iterations: 5325\ncpu: 131339.09859155043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130860.2980194323,
            "unit": "ns/iter",
            "extra": "iterations: 5352\ncpu: 130855.88565022386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131507.62291704808,
            "unit": "ns/iter",
            "extra": "iterations: 5341\ncpu: 131505.560756413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83829.41433022123,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 83827.60603882097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131843.10007538003,
            "unit": "ns/iter",
            "extra": "iterations: 5306\ncpu: 131839.82284206332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5488.739356610981,
            "unit": "ns/iter",
            "extra": "iterations: 129564\ncpu: 5488.702108610367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26183.348509281648,
            "unit": "ns/iter",
            "extra": "iterations: 26665\ncpu: 26183.172698293303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22174.966619162242,
            "unit": "ns/iter",
            "extra": "iterations: 31575\ncpu: 22174.81868566878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21690.287782890315,
            "unit": "ns/iter",
            "extra": "iterations: 32389\ncpu: 21689.984253913557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22390.109656404813,
            "unit": "ns/iter",
            "extra": "iterations: 31316\ncpu: 22389.950823860305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49690.57140839883,
            "unit": "ns/iter",
            "extra": "iterations: 14165\ncpu: 49689.81997882091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152373.9760609314,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 152372.94885745403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127930.06268221763,
            "unit": "ns/iter",
            "extra": "iterations: 5488\ncpu: 127928.33454810629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128501.76134086454,
            "unit": "ns/iter",
            "extra": "iterations: 5489\ncpu: 128499.72672618057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127611.97693996408,
            "unit": "ns/iter",
            "extra": "iterations: 5464\ncpu: 127608.40043923909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81849.00257401016,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 81847.20954720968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129634.97975484682,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 129631.38930163553 ns\nthreads: 1"
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
        "date": 1705775526866,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1405.3657088869427,
            "unit": "ns/iter",
            "extra": "iterations: 513340\ncpu: 1405.3202555810963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16247.024015732135,
            "unit": "ns/iter",
            "extra": "iterations: 50342\ncpu: 16246.744269198683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33987.86133102201,
            "unit": "ns/iter",
            "extra": "iterations: 24252\ncpu: 33987.320633349824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50479.68130813067,
            "unit": "ns/iter",
            "extra": "iterations: 16665\ncpu: 50479.33993399336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55434.906700003245,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55432.81000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69649.65677120602,
            "unit": "ns/iter",
            "extra": "iterations: 12531\ncpu: 69647.76155135265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83380.66043945214,
            "unit": "ns/iter",
            "extra": "iterations: 10331\ncpu: 83380.2439260478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97976.76712802926,
            "unit": "ns/iter",
            "extra": "iterations: 8670\ncpu: 97975.2133794695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114074.68187134137,
            "unit": "ns/iter",
            "extra": "iterations: 7695\ncpu: 114072.28070175428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1163.4760735768898,
            "unit": "ns/iter",
            "extra": "iterations: 602472\ncpu: 1163.4532393206662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 941.4456910677989,
            "unit": "ns/iter",
            "extra": "iterations: 744500\ncpu: 941.4205507051734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 922.0187319314574,
            "unit": "ns/iter",
            "extra": "iterations: 758224\ncpu: 921.9669912848979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 941.5693320144605,
            "unit": "ns/iter",
            "extra": "iterations: 743055\ncpu: 941.5631413556185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1901.2074445361077,
            "unit": "ns/iter",
            "extra": "iterations: 367491\ncpu: 1901.188600537156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5011.56650172183,
            "unit": "ns/iter",
            "extra": "iterations: 159447\ncpu: 5011.439537902876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24130.13439319547,
            "unit": "ns/iter",
            "extra": "iterations: 33149\ncpu: 24128.91489939363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18536.399187785766,
            "unit": "ns/iter",
            "extra": "iterations: 44077\ncpu: 18535.644440411103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18174.856687249678,
            "unit": "ns/iter",
            "extra": "iterations: 44211\ncpu: 18173.368618669523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18493.046933653437,
            "unit": "ns/iter",
            "extra": "iterations: 43423\ncpu: 18492.257559357946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54686.30000000303,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54685.80999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 585226.0699999761,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585198.9999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 563139.2691807351,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 563105.8517555284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 564044.1664507738,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 564023.2512953356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 559629.9915803117,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 559607.966321242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 330612.2735493646,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 330596.7596081386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 563309.117227968,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 563305.8290155437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2374856.4461537823,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2374715.641025642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1061825.1855669823,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 1061789.5761741127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3346912.3884891514,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3346678.7769784173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7500.2500948161905,
            "unit": "ns/iter",
            "extra": "iterations: 113377\ncpu: 7499.964719475747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41599.26278987745,
            "unit": "ns/iter",
            "extra": "iterations: 19879\ncpu: 41597.79666985259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32567.815201072535,
            "unit": "ns/iter",
            "extra": "iterations: 25314\ncpu: 32566.401990993098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32073.148430876852,
            "unit": "ns/iter",
            "extra": "iterations: 25938\ncpu: 32071.94463721187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31826.28594720568,
            "unit": "ns/iter",
            "extra": "iterations: 25760\ncpu: 31825.50465838488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 67192.48264372892,
            "unit": "ns/iter",
            "extra": "iterations: 12906\ncpu: 67190.60127072674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 604732.4859999889,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 604700.3000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589530.3581173832,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 589516.2346521156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 582544.555856396,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 582538.0501015577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584443.8341200652,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 584440.5259608941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 342223.6414435568,
            "unit": "ns/iter",
            "extra": "iterations: 2577\ncpu: 342210.47729918355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 577355.6857707324,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 577347.4967061912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2532459.0355191873,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2532407.103825143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1121356.961445725,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 1121309.397590366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5309.110461551154,
            "unit": "ns/iter",
            "extra": "iterations: 150016\ncpu: 5309.131692619442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26354.66884988908,
            "unit": "ns/iter",
            "extra": "iterations: 31910\ncpu: 26354.10529614531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20646.137343534647,
            "unit": "ns/iter",
            "extra": "iterations: 40264\ncpu: 20646.02374329423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20195.972257923877,
            "unit": "ns/iter",
            "extra": "iterations: 41237\ncpu: 20195.409462375974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20441.72428489108,
            "unit": "ns/iter",
            "extra": "iterations: 39889\ncpu: 20441.8085186394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 54319.46780000771,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54317.6900000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578198.0530000511,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578180.1000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 576047.3749183354,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 576024.7550620519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 571059.8531694629,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 571056.9857697256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 569681.0589760568,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 569677.9001944268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329448.0679865347,
            "unit": "ns/iter",
            "extra": "iterations: 2677\ncpu: 329431.00485618104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 557352.0863723442,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 557353.9987204124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 530.3185968499296,
            "unit": "ns/iter",
            "extra": "iterations: 1320600\ncpu: 530.314856883237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3038.604658131546,
            "unit": "ns/iter",
            "extra": "iterations: 230264\ncpu: 3038.5748532119624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2470.5667708937513,
            "unit": "ns/iter",
            "extra": "iterations: 294230\ncpu: 2470.497569928288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2463.136552688337,
            "unit": "ns/iter",
            "extra": "iterations: 284674\ncpu: 2463.0805763785916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1952.957225662177,
            "unit": "ns/iter",
            "extra": "iterations: 358673\ncpu: 1952.9317790856926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16668.15316305182,
            "unit": "ns/iter",
            "extra": "iterations: 43692\ncpu: 16668.00558454643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29989.713605357316,
            "unit": "ns/iter",
            "extra": "iterations: 23307\ncpu: 29988.548504740804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7435.047215135132,
            "unit": "ns/iter",
            "extra": "iterations: 94080\ncpu: 7434.98724489789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7395.184748151536,
            "unit": "ns/iter",
            "extra": "iterations: 94323\ncpu: 7395.132682378701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7398.391581766724,
            "unit": "ns/iter",
            "extra": "iterations: 94818\ncpu: 7398.281971777545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14539.051986105138,
            "unit": "ns/iter",
            "extra": "iterations: 47782\ncpu: 14538.930978192673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14339.523993854413,
            "unit": "ns/iter",
            "extra": "iterations: 48825\ncpu: 14338.760880696425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5442.642893383378,
            "unit": "ns/iter",
            "extra": "iterations: 128113\ncpu: 5442.56320591978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26849.21623077011,
            "unit": "ns/iter",
            "extra": "iterations: 26000\ncpu: 26849.042307692187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21509.25187392519,
            "unit": "ns/iter",
            "extra": "iterations: 32552\ncpu: 21509.083927254556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21532.75132389207,
            "unit": "ns/iter",
            "extra": "iterations: 32480\ncpu: 21532.29679802969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22095.477384542915,
            "unit": "ns/iter",
            "extra": "iterations: 31505\ncpu: 22095.254721472844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50889.58604685383,
            "unit": "ns/iter",
            "extra": "iterations: 13789\ncpu: 50889.76720574453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158040.5573620401,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 158039.27181131166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131150.25683776735,
            "unit": "ns/iter",
            "extra": "iterations: 5338\ncpu: 131148.59497939236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131307.62076072887,
            "unit": "ns/iter",
            "extra": "iterations: 5337\ncpu: 131299.13809256165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132109.62436067956,
            "unit": "ns/iter",
            "extra": "iterations: 5279\ncpu: 132108.58117067657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82343.44218491955,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 82343.71009694993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132590.59981185466,
            "unit": "ns/iter",
            "extra": "iterations: 5315\ncpu: 132589.61429915475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5592.898799629,
            "unit": "ns/iter",
            "extra": "iterations: 125128\ncpu: 5592.859312064377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26637.71450905715,
            "unit": "ns/iter",
            "extra": "iterations: 26225\ncpu: 26636.793136320426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22752.531962079753,
            "unit": "ns/iter",
            "extra": "iterations: 31115\ncpu: 22751.926723444918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22555.734135067505,
            "unit": "ns/iter",
            "extra": "iterations: 30933\ncpu: 22555.099731678503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 23011.720745033086,
            "unit": "ns/iter",
            "extra": "iterations: 30388\ncpu: 23011.580229037892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49739.428266594005,
            "unit": "ns/iter",
            "extra": "iterations: 14059\ncpu: 49740.00995803429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153382.29379641224,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 153387.09043250282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128878.72327856124,
            "unit": "ns/iter",
            "extra": "iterations: 5417\ncpu: 128879.91508214934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127431.26582510993,
            "unit": "ns/iter",
            "extra": "iterations: 5466\ncpu: 127435.32747896112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126628.14491683488,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 126632.10720887299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82552.78226191162,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 82554.21428571487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130263.2519992538,
            "unit": "ns/iter",
            "extra": "iterations: 5377\ncpu: 130256.76027524748 ns\nthreads: 1"
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
        "date": 1705779056503,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1414.670462546116,
            "unit": "ns/iter",
            "extra": "iterations: 497118\ncpu: 1414.6432034245393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16342.026036153442,
            "unit": "ns/iter",
            "extra": "iterations: 51006\ncpu: 16341.577461475124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34368.6123702782,
            "unit": "ns/iter",
            "extra": "iterations: 24090\ncpu: 34367.638024076376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50412.25327879172,
            "unit": "ns/iter",
            "extra": "iterations: 16622\ncpu: 50410.47407050897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56174.742099995005,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56173.460000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69630.81610673592,
            "unit": "ns/iter",
            "extra": "iterations: 12442\ncpu: 69629.5290146279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83161.70073062863,
            "unit": "ns/iter",
            "extra": "iterations: 10402\ncpu: 83158.3733897327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97695.71496516149,
            "unit": "ns/iter",
            "extra": "iterations: 9041\ncpu: 97693.34144453048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111994.99855831871,
            "unit": "ns/iter",
            "extra": "iterations: 7630\ncpu: 111990.68152031452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1121.8519214965215,
            "unit": "ns/iter",
            "extra": "iterations: 620610\ncpu: 1121.7816341986127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 925.0535561403698,
            "unit": "ns/iter",
            "extra": "iterations: 756888\ncpu: 925.0281415480239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 906.2515353736557,
            "unit": "ns/iter",
            "extra": "iterations: 770985\ncpu: 906.1970077238867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 929.0698715661192,
            "unit": "ns/iter",
            "extra": "iterations: 754241\ncpu: 929.0187088742192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1841.0926437526844,
            "unit": "ns/iter",
            "extra": "iterations: 384775\ncpu: 1841.0127996881329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4919.9274371043175,
            "unit": "ns/iter",
            "extra": "iterations: 160385\ncpu: 4919.582878698137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 23907.275869103712,
            "unit": "ns/iter",
            "extra": "iterations: 34317\ncpu: 23905.903779467943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18552.214241948564,
            "unit": "ns/iter",
            "extra": "iterations: 44067\ncpu: 18550.91338189572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18450.696859571628,
            "unit": "ns/iter",
            "extra": "iterations: 43752\ncpu: 18449.48573779482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18814.815056619613,
            "unit": "ns/iter",
            "extra": "iterations: 44419\ncpu: 18813.386163578652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54547.748100003446,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54543.25000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 562013.8489999818,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562001.0000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 556234.8683544246,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 556195.5696202539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 553866.2300380563,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 553826.9328263617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 562047.7076922872,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 562030.6410256408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 327499.05444988614,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 327478.63312054024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 553705.0484384925,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 553666.6029318052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2348016.1670885873,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2347877.974683539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1075735.4749125175,
            "unit": "ns/iter",
            "extra": "iterations: 857\ncpu: 1075659.043173863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3293284.4412811897,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3293082.5622775913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7651.419425595217,
            "unit": "ns/iter",
            "extra": "iterations: 112151\ncpu: 7650.944708473402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40771.23983176927,
            "unit": "ns/iter",
            "extra": "iterations: 20210\ncpu: 40770.39584364172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32022.54070933873,
            "unit": "ns/iter",
            "extra": "iterations: 26419\ncpu: 32020.621522389294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31444.479054618514,
            "unit": "ns/iter",
            "extra": "iterations: 26402\ncpu: 31442.477842587705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32088.026981191248,
            "unit": "ns/iter",
            "extra": "iterations: 25944\ncpu: 32085.63444341654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66351.01132562367,
            "unit": "ns/iter",
            "extra": "iterations: 13156\ncpu: 66346.73913043512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 596582.8119999515,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596569.1999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 582032.2746148331,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 582025.6530475516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 582429.5073727197,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 582418.4986595174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 581379.6865771831,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 581353.5570469776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 341794.9200310674,
            "unit": "ns/iter",
            "extra": "iterations: 2576\ncpu: 341788.0434782606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 573676.9043876749,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 573647.2167648972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2515632.461956678,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2515449.4565217556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1114224.9963898577,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 1114168.7123947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5320.217189851197,
            "unit": "ns/iter",
            "extra": "iterations: 151508\ncpu: 5320.114449401977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25986.529962663106,
            "unit": "ns/iter",
            "extra": "iterations: 32140\ncpu: 25985.4293714998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20601.427704979145,
            "unit": "ns/iter",
            "extra": "iterations: 40065\ncpu: 20600.089853987247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20245.567095027713,
            "unit": "ns/iter",
            "extra": "iterations: 41009\ncpu: 20244.514618742174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20328.82302625097,
            "unit": "ns/iter",
            "extra": "iterations: 40684\ncpu: 20327.59561498373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 53786.287500008715,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53784.869999999784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 575849.7859999351,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575794.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 571320.6077922229,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 571290.0649350674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 567136.8818181466,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 567108.6363636357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 568631.6254876428,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 568597.659297789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329092.25708955707,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 329073.20895522356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 558338.3335467713,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 558314.0204865568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 532.6544734877571,
            "unit": "ns/iter",
            "extra": "iterations: 1318032\ncpu: 532.6227284314767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3009.934512533296,
            "unit": "ns/iter",
            "extra": "iterations: 231739\ncpu: 3009.81146893705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2369.3417702090514,
            "unit": "ns/iter",
            "extra": "iterations: 293197\ncpu: 2369.197160953226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2356.0029340876995,
            "unit": "ns/iter",
            "extra": "iterations: 295833\ncpu: 2355.802091044619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1947.347533470711,
            "unit": "ns/iter",
            "extra": "iterations: 360466\ncpu: 1947.2030649215203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 15961.619735395516,
            "unit": "ns/iter",
            "extra": "iterations: 44519\ncpu: 15960.00808643489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30561.457714263124,
            "unit": "ns/iter",
            "extra": "iterations: 22951\ncpu: 30559.400461853398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7255.090116760565,
            "unit": "ns/iter",
            "extra": "iterations: 96608\ncpu: 7254.552418019267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7287.528083477207,
            "unit": "ns/iter",
            "extra": "iterations: 96409\ncpu: 7287.098714850274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7279.927775351906,
            "unit": "ns/iter",
            "extra": "iterations: 96186\ncpu: 7279.766286153941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14518.40379330445,
            "unit": "ns/iter",
            "extra": "iterations: 48032\ncpu: 14517.536225849308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 12543.06372602109,
            "unit": "ns/iter",
            "extra": "iterations: 55362\ncpu: 12541.893356453838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5334.888839024997,
            "unit": "ns/iter",
            "extra": "iterations: 131467\ncpu: 5334.431454281317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26933.270330686977,
            "unit": "ns/iter",
            "extra": "iterations: 25946\ncpu: 26931.519309334653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21645.718818484318,
            "unit": "ns/iter",
            "extra": "iterations: 32399\ncpu: 21644.229760177903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21747.939426869398,
            "unit": "ns/iter",
            "extra": "iterations: 32209\ncpu: 21746.502530348596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22227.220231855033,
            "unit": "ns/iter",
            "extra": "iterations: 31485\ncpu: 22225.907575035733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50907.95681883889,
            "unit": "ns/iter",
            "extra": "iterations: 13756\ncpu: 50905.1250363478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157521.0545989998,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 157515.15632079623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131877.01533800914,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 131865.8019314512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130595.4303393942,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 130587.24920307443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130942.71088435748,
            "unit": "ns/iter",
            "extra": "iterations: 5292\ncpu: 130932.08616780187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82876.46530079798,
            "unit": "ns/iter",
            "extra": "iterations: 8444\ncpu: 82870.77214590325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131518.16444278313,
            "unit": "ns/iter",
            "extra": "iterations: 5321\ncpu: 131516.98928772734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5493.648361424358,
            "unit": "ns/iter",
            "extra": "iterations: 127031\ncpu: 5493.521266462475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27976.07936190358,
            "unit": "ns/iter",
            "extra": "iterations: 25012\ncpu: 27975.77562769856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22449.445146393955,
            "unit": "ns/iter",
            "extra": "iterations: 31183\ncpu: 22448.93692075807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22286.51555046648,
            "unit": "ns/iter",
            "extra": "iterations: 31446\ncpu: 22286.020479552324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21887.759483379417,
            "unit": "ns/iter",
            "extra": "iterations: 31977\ncpu: 21887.525408888006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48558.69887469356,
            "unit": "ns/iter",
            "extra": "iterations: 14396\ncpu: 48557.66185051408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152590.9488240583,
            "unit": "ns/iter",
            "extra": "iterations: 4592\ncpu: 152587.36933798026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129413.71489361548,
            "unit": "ns/iter",
            "extra": "iterations: 5405\ncpu: 129410.78630897317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127593.23245214047,
            "unit": "ns/iter",
            "extra": "iterations: 5485\ncpu: 127591.85050136787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127676.23945975273,
            "unit": "ns/iter",
            "extra": "iterations: 5479\ncpu: 127670.742836283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83454.30630203101,
            "unit": "ns/iter",
            "extra": "iterations: 8410\ncpu: 83452.52080856168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129585.3186055174,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 129580.5182699465 ns\nthreads: 1"
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
        "date": 1705954204561,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1409.7114396923726,
            "unit": "ns/iter",
            "extra": "iterations: 508178\ncpu: 1409.6897150211146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16366.600151547678,
            "unit": "ns/iter",
            "extra": "iterations: 50149\ncpu: 16366.432032543022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33898.158221858,
            "unit": "ns/iter",
            "extra": "iterations: 24295\ncpu: 33897.43568635521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50068.99826076717,
            "unit": "ns/iter",
            "extra": "iterations: 16674\ncpu: 50067.584262924305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55441.25559999885,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55440.87000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70076.06293316637,
            "unit": "ns/iter",
            "extra": "iterations: 12553\ncpu: 70075.31267426112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83489.91907236891,
            "unit": "ns/iter",
            "extra": "iterations: 10392\ncpu: 83486.41262509617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96303.78899489311,
            "unit": "ns/iter",
            "extra": "iterations: 9014\ncpu: 96302.37408475706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112872.85266047184,
            "unit": "ns/iter",
            "extra": "iterations: 7649\ncpu: 112868.64949666607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1152.4305700420334,
            "unit": "ns/iter",
            "extra": "iterations: 607850\ncpu: 1152.414246935922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 937.3662612759551,
            "unit": "ns/iter",
            "extra": "iterations: 746934\ncpu: 937.3283315527203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 901.3703294427658,
            "unit": "ns/iter",
            "extra": "iterations: 777343\ncpu: 901.3306867110127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 912.5797562958888,
            "unit": "ns/iter",
            "extra": "iterations: 760266\ncpu: 912.5774400012633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1821.1577628860193,
            "unit": "ns/iter",
            "extra": "iterations: 384406\ncpu: 1821.12948289049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4971.937532597183,
            "unit": "ns/iter",
            "extra": "iterations: 159139\ncpu: 4971.868618000623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24782.857801759437,
            "unit": "ns/iter",
            "extra": "iterations: 33172\ncpu: 24782.05414204751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18614.709699406867,
            "unit": "ns/iter",
            "extra": "iterations: 44013\ncpu: 18613.945879626473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 17617.85772101162,
            "unit": "ns/iter",
            "extra": "iterations: 45959\ncpu: 17616.858504319058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18367.87834821472,
            "unit": "ns/iter",
            "extra": "iterations: 43904\ncpu: 18367.606596209873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 53961.853199996316,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53962.22000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 560230.9649999597,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560190.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 554704.2327365892,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 554681.7774936068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 556307.6255619479,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 556296.4675658321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 559069.3575525917,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 559051.1790949658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324671.7884047099,
            "unit": "ns/iter",
            "extra": "iterations: 2708\ncpu: 324660.48744460783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 558084.8801784165,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 558076.0356915225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2354932.4999999274,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2354868.9393939367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1070024.0824743032,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 1067886.254295534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3320900.819494619,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3320757.4007220143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7524.851942880285,
            "unit": "ns/iter",
            "extra": "iterations: 113517\ncpu: 7524.68969405465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 41248.820757059715,
            "unit": "ns/iter",
            "extra": "iterations: 20157\ncpu: 41248.20161730419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32349.004330018117,
            "unit": "ns/iter",
            "extra": "iterations: 25635\ncpu: 32347.87985176499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32069.002858243923,
            "unit": "ns/iter",
            "extra": "iterations: 25890\ncpu: 32068.049439938048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32501.256546775163,
            "unit": "ns/iter",
            "extra": "iterations: 25356\ncpu: 32499.968449282373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 68019.07547908196,
            "unit": "ns/iter",
            "extra": "iterations: 12785\ncpu: 68017.9898318343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 604267.5529999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 604245.8000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 586941.8300609248,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 586922.2748815126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588559.5614865076,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 588536.2162162142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 586184.5897780879,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 586167.3167451232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 338852.56322728563,
            "unit": "ns/iter",
            "extra": "iterations: 2578\ncpu: 338843.40574088437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 575203.0638158084,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 575188.9473684242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2511455.869918747,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2511311.1111111003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1101726.5885850799,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 1101679.4292508918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5281.146728625296,
            "unit": "ns/iter",
            "extra": "iterations: 151068\ncpu: 5280.970821087183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26240.32152632297,
            "unit": "ns/iter",
            "extra": "iterations: 31055\ncpu: 26239.030751891823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20705.345399052752,
            "unit": "ns/iter",
            "extra": "iterations: 39644\ncpu: 20704.57067904358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20361.909981599787,
            "unit": "ns/iter",
            "extra": "iterations: 40214\ncpu: 20360.772367832076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20430.207430810642,
            "unit": "ns/iter",
            "extra": "iterations: 39565\ncpu: 20429.45279919104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 53501.51829999277,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53498.37999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 576654.1599999755,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576650.6000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 567131.266321939,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 567119.0045248878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 566784.9916613235,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 566764.9134060295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 568383.6470967113,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 568363.4193548418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329463.7859569675,
            "unit": "ns/iter",
            "extra": "iterations: 2649\ncpu: 329457.1913929786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 558847.7458598384,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 558813.121019108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 527.2784696814653,
            "unit": "ns/iter",
            "extra": "iterations: 1332716\ncpu: 527.2558444559826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3022.5279548861286,
            "unit": "ns/iter",
            "extra": "iterations: 232124\ncpu: 3022.394926849448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2278.5217655974243,
            "unit": "ns/iter",
            "extra": "iterations: 305551\ncpu: 2278.414405451142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2234.287960491596,
            "unit": "ns/iter",
            "extra": "iterations: 312845\ncpu: 2234.2658505010477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1930.143431895043,
            "unit": "ns/iter",
            "extra": "iterations: 361398\ncpu: 1930.1271728122508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 15974.69741903699,
            "unit": "ns/iter",
            "extra": "iterations: 42891\ncpu: 15974.663682357565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30891.788895749723,
            "unit": "ns/iter",
            "extra": "iterations: 22676\ncpu: 30891.621097195304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7262.718067292064,
            "unit": "ns/iter",
            "extra": "iterations: 96445\ncpu: 7262.462543418428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7250.018163930856,
            "unit": "ns/iter",
            "extra": "iterations: 96565\ncpu: 7249.732304665265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7247.152677534503,
            "unit": "ns/iter",
            "extra": "iterations: 96432\ncpu: 7246.8215944914355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14498.915889789278,
            "unit": "ns/iter",
            "extra": "iterations: 48163\ncpu: 14498.822747752667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13945.76652900766,
            "unit": "ns/iter",
            "extra": "iterations: 49882\ncpu: 13945.709875305789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5455.366486461015,
            "unit": "ns/iter",
            "extra": "iterations: 128002\ncpu: 5455.043671192633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27035.804320938485,
            "unit": "ns/iter",
            "extra": "iterations: 25874\ncpu: 27034.354950916397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21673.521938236972,
            "unit": "ns/iter",
            "extra": "iterations: 32318\ncpu: 21672.742743982046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21730.051759834834,
            "unit": "ns/iter",
            "extra": "iterations: 32361\ncpu: 21729.214177559403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22202.650531474206,
            "unit": "ns/iter",
            "extra": "iterations: 31422\ncpu: 22201.467124944313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50556.732364999,
            "unit": "ns/iter",
            "extra": "iterations: 13907\ncpu: 50554.634356798495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157625.5705604304,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 157615.55255457963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130813.2369213395,
            "unit": "ns/iter",
            "extra": "iterations: 5314\ncpu: 130812.62702295755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129677.50806004967,
            "unit": "ns/iter",
            "extra": "iterations: 5397\ncpu: 129676.74634055828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131148.3006731555,
            "unit": "ns/iter",
            "extra": "iterations: 5348\ncpu: 131143.32460732866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82807.1051886794,
            "unit": "ns/iter",
            "extra": "iterations: 8480\ncpu: 82803.32547169892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130596.80312617063,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 130590.10048381139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5249.249481355015,
            "unit": "ns/iter",
            "extra": "iterations: 133521\ncpu: 5249.273148044085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27798.18041855347,
            "unit": "ns/iter",
            "extra": "iterations: 25851\ncpu: 27796.5533248227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22026.742428050795,
            "unit": "ns/iter",
            "extra": "iterations: 31828\ncpu: 22026.834862385178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22276.867924527483,
            "unit": "ns/iter",
            "extra": "iterations: 31376\ncpu: 22276.450152983114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22423.788963840878,
            "unit": "ns/iter",
            "extra": "iterations: 31279\ncpu: 22423.664439400276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49722.50580062284,
            "unit": "ns/iter",
            "extra": "iterations: 14395\ncpu: 49631.23306703722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154616.0279120978,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 154614.83516483463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129381.79517851937,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 129382.29665071599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127023.34003986797,
            "unit": "ns/iter",
            "extra": "iterations: 5517\ncpu: 127015.49755301778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128222.1475169672,
            "unit": "ns/iter",
            "extra": "iterations: 5457\ncpu: 128216.18105186004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82230.21261599142,
            "unit": "ns/iter",
            "extra": "iterations: 8513\ncpu: 82225.39645248392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129511.9283604204,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129506.27769571745 ns\nthreads: 1"
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
        "date": 1705955634090,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1393.2420584250315,
            "unit": "ns/iter",
            "extra": "iterations: 513752\ncpu: 1393.1387128419938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16352.511454853715,
            "unit": "ns/iter",
            "extra": "iterations: 51201\ncpu: 16351.250952129843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34171.426661197715,
            "unit": "ns/iter",
            "extra": "iterations: 24380\ncpu: 34170.57424118129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50240.326098690464,
            "unit": "ns/iter",
            "extra": "iterations: 16679\ncpu: 50239.77456682059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55677.94870000852,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55676.81000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69534.65462265653,
            "unit": "ns/iter",
            "extra": "iterations: 12482\ncpu: 69532.56689633071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83592.0978879329,
            "unit": "ns/iter",
            "extra": "iterations: 10369\ncpu: 83588.61028064427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95965.99790610698,
            "unit": "ns/iter",
            "extra": "iterations: 9074\ncpu: 95961.37315406659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113460.30511989172,
            "unit": "ns/iter",
            "extra": "iterations: 7715\ncpu: 113457.00583279325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1145.9353938109195,
            "unit": "ns/iter",
            "extra": "iterations: 609988\ncpu: 1145.9074604746347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 938.7943952410972,
            "unit": "ns/iter",
            "extra": "iterations: 746223\ncpu: 938.7610674021038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 912.5018117144767,
            "unit": "ns/iter",
            "extra": "iterations: 768057\ncpu: 912.4593617400778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 944.553899407257,
            "unit": "ns/iter",
            "extra": "iterations: 738125\ncpu: 944.494089754446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1818.2250476183474,
            "unit": "ns/iter",
            "extra": "iterations: 385354\ncpu: 1818.1552546489745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4960.894322100065,
            "unit": "ns/iter",
            "extra": "iterations: 160658\ncpu: 4960.732736620647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24767.242570979794,
            "unit": "ns/iter",
            "extra": "iterations: 33248\ncpu: 24766.58445620789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19282.58842135006,
            "unit": "ns/iter",
            "extra": "iterations: 42682\ncpu: 19282.02052387422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19210.6893185433,
            "unit": "ns/iter",
            "extra": "iterations: 42101\ncpu: 19209.769364148087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18598.79423555506,
            "unit": "ns/iter",
            "extra": "iterations: 43404\ncpu: 18598.679845175586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54775.54689999806,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54775.91000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 564673.9119999893,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564640.9000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 557745.6755009795,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 557745.7659987084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 554576.449711704,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 554562.9724535546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 555638.3077414795,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 555633.3973128605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 323284.1066867031,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 323285.0488354613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 566546.5673389564,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 566540.338321406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2376498.9137057434,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2376473.0964466985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1078303.193434964,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1078292.1453692822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3292396.866906362,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3292332.0143884933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7447.903726542542,
            "unit": "ns/iter",
            "extra": "iterations: 112222\ncpu: 7447.873857175956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40776.361792848824,
            "unit": "ns/iter",
            "extra": "iterations: 20169\ncpu: 40776.062273786556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32085.321276266695,
            "unit": "ns/iter",
            "extra": "iterations: 25794\ncpu: 32085.337675428305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31985.863585855295,
            "unit": "ns/iter",
            "extra": "iterations: 26097\ncpu: 31985.645859677377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32070.876931479448,
            "unit": "ns/iter",
            "extra": "iterations: 25628\ncpu: 32069.814265646834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66261.17770301206,
            "unit": "ns/iter",
            "extra": "iterations: 13078\ncpu: 66259.56568282576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 597061.9160000297,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597055.0000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 585044.0882749466,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 584991.576819407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 585957.1151271894,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 585935.8768406983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584943.0978408171,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 584927.7327935229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 341273.8725869021,
            "unit": "ns/iter",
            "extra": "iterations: 2590\ncpu: 341263.4749034727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 577469.446133534,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 577470.9187045611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2520765.3204749264,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2520746.8842730015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1102914.2343195095,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 1102906.3905325425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4776.759222625187,
            "unit": "ns/iter",
            "extra": "iterations: 163782\ncpu: 4776.705620886303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24102.320736905167,
            "unit": "ns/iter",
            "extra": "iterations: 34957\ncpu: 24101.65918127983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18984.926058453744,
            "unit": "ns/iter",
            "extra": "iterations: 43318\ncpu: 18984.851562860687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18763.801253762398,
            "unit": "ns/iter",
            "extra": "iterations: 44187\ncpu: 18763.683888926687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18978.476608383426,
            "unit": "ns/iter",
            "extra": "iterations: 44439\ncpu: 18978.298341546822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 53235.96419999603,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53235.87999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 575526.1889999019,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575515.5999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 568470.7725774868,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 568463.348714566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 564241.8825438251,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 564236.4698247855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 565101.6297488668,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 565101.7385705091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330671.7748691102,
            "unit": "ns/iter",
            "extra": "iterations: 2674\ncpu: 330671.98952879524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 563588.5270873179,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 563589.9298916479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 523.758990493798,
            "unit": "ns/iter",
            "extra": "iterations: 1336495\ncpu: 523.7602086053455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2983.8242241483676,
            "unit": "ns/iter",
            "extra": "iterations: 234452\ncpu: 2983.8308054527192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2416.3308109227687,
            "unit": "ns/iter",
            "extra": "iterations: 289670\ncpu: 2416.333759105207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2414.944314611085,
            "unit": "ns/iter",
            "extra": "iterations: 290543\ncpu: 2414.9303201247435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1914.6286196542856,
            "unit": "ns/iter",
            "extra": "iterations: 364952\ncpu: 1914.4490234332327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16074.510524387413,
            "unit": "ns/iter",
            "extra": "iterations: 43708\ncpu: 16074.535554131997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30983.144376765216,
            "unit": "ns/iter",
            "extra": "iterations: 22656\ncpu: 30983.430437852774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7295.875945662721,
            "unit": "ns/iter",
            "extra": "iterations: 96361\ncpu: 7295.824036695456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7273.438348908824,
            "unit": "ns/iter",
            "extra": "iterations: 96300\ncpu: 7273.312564901288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7283.756308204662,
            "unit": "ns/iter",
            "extra": "iterations: 96105\ncpu: 7283.63664741699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14528.876362427929,
            "unit": "ns/iter",
            "extra": "iterations: 48076\ncpu: 14528.816873283771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13797.786757625789,
            "unit": "ns/iter",
            "extra": "iterations: 49840\ncpu: 13797.90128410918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5381.543084537483,
            "unit": "ns/iter",
            "extra": "iterations: 129919\ncpu: 5381.450750082737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27202.423282468142,
            "unit": "ns/iter",
            "extra": "iterations: 25822\ncpu: 27202.439780032204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21657.777363880195,
            "unit": "ns/iter",
            "extra": "iterations: 32214\ncpu: 21657.782330663467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21675.367682080738,
            "unit": "ns/iter",
            "extra": "iterations: 32335\ncpu: 21675.38889747959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22314.21425613653,
            "unit": "ns/iter",
            "extra": "iterations: 31397\ncpu: 22314.361244704858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51431.6818414678,
            "unit": "ns/iter",
            "extra": "iterations: 13663\ncpu: 51432.467247310706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157306.98004082817,
            "unit": "ns/iter",
            "extra": "iterations: 4409\ncpu: 157304.94443184652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130943.6057494981,
            "unit": "ns/iter",
            "extra": "iterations: 5357\ncpu: 130942.33712899209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130284.20336476355,
            "unit": "ns/iter",
            "extra": "iterations: 5409\ncpu: 130284.45183952476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131942.18125352394,
            "unit": "ns/iter",
            "extra": "iterations: 5313\ncpu: 131940.89968003062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83246.28894173847,
            "unit": "ns/iter",
            "extra": "iterations: 8410\ncpu: 83245.68370986804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132416.0139228514,
            "unit": "ns/iter",
            "extra": "iterations: 5315\ncpu: 132416.27469426263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5211.730389927933,
            "unit": "ns/iter",
            "extra": "iterations: 134153\ncpu: 5211.7373446736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27111.005105445187,
            "unit": "ns/iter",
            "extra": "iterations: 25463\ncpu: 27111.019911243755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22779.63155163318,
            "unit": "ns/iter",
            "extra": "iterations: 30832\ncpu: 22779.135313959385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22684.037621122818,
            "unit": "ns/iter",
            "extra": "iterations: 30754\ncpu: 22683.689926513747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22994.317573798875,
            "unit": "ns/iter",
            "extra": "iterations: 30352\ncpu: 22994.339746968988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48674.496010074305,
            "unit": "ns/iter",
            "extra": "iterations: 14286\ncpu: 48674.597508049264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155154.9639141139,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 155153.5975204774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128209.89140021584,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 128207.75450201936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128322.54624330883,
            "unit": "ns/iter",
            "extra": "iterations: 5417\ncpu: 128322.59553258152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128283.3827183044,
            "unit": "ns/iter",
            "extra": "iterations: 5474\ncpu: 128283.48556814007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82708.83402195615,
            "unit": "ns/iter",
            "extra": "iterations: 8471\ncpu: 82708.06280250274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130346.40309932054,
            "unit": "ns/iter",
            "extra": "iterations: 5356\ncpu: 130346.60194174678 ns\nthreads: 1"
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
        "date": 1705957470115,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1363.9971980941978,
            "unit": "ns/iter",
            "extra": "iterations: 499303\ncpu: 1363.9851953623352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16028.113310473102,
            "unit": "ns/iter",
            "extra": "iterations: 51328\ncpu: 16027.443110972568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34316.6389430371,
            "unit": "ns/iter",
            "extra": "iterations: 23085\ncpu: 34315.6421918995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51223.86934254312,
            "unit": "ns/iter",
            "extra": "iterations: 16792\ncpu: 51222.64173415911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 54849.37579999496,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54848.33 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69487.11923288331,
            "unit": "ns/iter",
            "extra": "iterations: 12723\ncpu: 69484.05250334044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 81767.93457678916,
            "unit": "ns/iter",
            "extra": "iterations: 10562\ncpu: 81763.44442340467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95883.80447353865,
            "unit": "ns/iter",
            "extra": "iterations: 9165\ncpu: 95878.188761593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 110911.01226281666,
            "unit": "ns/iter",
            "extra": "iterations: 7747\ncpu: 110907.64166774237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1133.6921645077784,
            "unit": "ns/iter",
            "extra": "iterations: 618889\ncpu: 1133.6187910917777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 924.451384194837,
            "unit": "ns/iter",
            "extra": "iterations: 755999\ncpu: 924.4172280651164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 924.6150895814327,
            "unit": "ns/iter",
            "extra": "iterations: 758192\ncpu: 924.55657669825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 941.9713031785294,
            "unit": "ns/iter",
            "extra": "iterations: 744403\ncpu: 941.9730979053013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1885.1447244625615,
            "unit": "ns/iter",
            "extra": "iterations: 378388\ncpu: 1885.1239997040063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4958.377761961268,
            "unit": "ns/iter",
            "extra": "iterations: 160167\ncpu: 4958.252948485021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24270.393584691443,
            "unit": "ns/iter",
            "extra": "iterations: 33233\ncpu: 24268.99166491141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18649.404140248593,
            "unit": "ns/iter",
            "extra": "iterations: 44007\ncpu: 18648.771786306712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18738.409166952108,
            "unit": "ns/iter",
            "extra": "iterations: 43635\ncpu: 18737.14220236048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18537.191014845725,
            "unit": "ns/iter",
            "extra": "iterations: 43583\ncpu: 18536.619782942904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 55091.03850000656,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55090.4899999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 582623.4580000574,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582547.0999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 558637.094932666,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 558618.537524053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 560210.8560411307,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 560211.6966580984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 564581.8401315763,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 564537.4999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 328071.48516320984,
            "unit": "ns/iter",
            "extra": "iterations: 2696\ncpu: 328060.79376854544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 566651.6152355875,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 566627.824402842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2359552.519084088,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2359440.9669211204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1122665.5006030188,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 1122630.2774427044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3317564.667856995,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3317332.5000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7853.687129519689,
            "unit": "ns/iter",
            "extra": "iterations: 107968\ncpu: 7853.429719917032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43293.83263510788,
            "unit": "ns/iter",
            "extra": "iterations: 19096\ncpu: 43290.966694595736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32506.956136870216,
            "unit": "ns/iter",
            "extra": "iterations: 25192\ncpu: 32506.10114322008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32038.290703073322,
            "unit": "ns/iter",
            "extra": "iterations: 25858\ncpu: 32036.812591847585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32295.612134513318,
            "unit": "ns/iter",
            "extra": "iterations: 25514\ncpu: 32294.128713647257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 68709.59155706075,
            "unit": "ns/iter",
            "extra": "iterations: 12697\ncpu: 68704.8594156102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 599074.9589999496,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599032.8999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 587285.7259259103,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 587252.5925925939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 583134.1211512928,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 583103.2128514019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 585062.9513009071,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 585049.4996664423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 341606.04012466705,
            "unit": "ns/iter",
            "extra": "iterations: 2567\ncpu: 341588.97545773356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578655.3370712069,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 578625.2638522453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2506741.1054053353,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2506672.162162158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1088092.960280363,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1088018.5747663572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5303.567660896185,
            "unit": "ns/iter",
            "extra": "iterations: 149429\ncpu: 5303.335363282882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26267.491592765087,
            "unit": "ns/iter",
            "extra": "iterations: 31461\ncpu: 26265.56689234288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20659.503108690005,
            "unit": "ns/iter",
            "extra": "iterations: 40049\ncpu: 20658.835426602447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20102.191734777534,
            "unit": "ns/iter",
            "extra": "iterations: 41354\ncpu: 20100.81975141452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20108.224747230888,
            "unit": "ns/iter",
            "extra": "iterations: 41540\ncpu: 20107.573423206526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 53760.22810000905,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53754.98000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 569663.017000039,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569647.6000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 561163.2501603666,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 561129.8909557433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 562798.2509603383,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 562781.9462227925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 565927.9317889736,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 565919.3050193052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 326605.6760459243,
            "unit": "ns/iter",
            "extra": "iterations: 2701\ncpu: 326602.55460940435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 561120.8388535007,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 561106.4331210172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 528.2870750640622,
            "unit": "ns/iter",
            "extra": "iterations: 1325082\ncpu: 528.26496775294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3073.2434541395337,
            "unit": "ns/iter",
            "extra": "iterations: 227472\ncpu: 3073.171643103334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2449.99640393812,
            "unit": "ns/iter",
            "extra": "iterations: 285034\ncpu: 2449.9196587073716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2307.8117752272246,
            "unit": "ns/iter",
            "extra": "iterations: 303026\ncpu: 2307.6957092790635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1951.1607429153867,
            "unit": "ns/iter",
            "extra": "iterations: 358641\ncpu: 1951.141392088458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 15864.684226116353,
            "unit": "ns/iter",
            "extra": "iterations: 43889\ncpu: 15864.152748980268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31044.229519837976,
            "unit": "ns/iter",
            "extra": "iterations: 22534\ncpu: 31043.574154610844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7198.379651768796,
            "unit": "ns/iter",
            "extra": "iterations: 97866\ncpu: 7198.1842519362135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7187.289860132869,
            "unit": "ns/iter",
            "extra": "iterations: 97378\ncpu: 7187.040193883591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7270.84452194141,
            "unit": "ns/iter",
            "extra": "iterations: 96348\ncpu: 7270.193465354689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14469.17909863169,
            "unit": "ns/iter",
            "extra": "iterations: 48504\ncpu: 14468.759277585325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13874.168838604468,
            "unit": "ns/iter",
            "extra": "iterations: 50646\ncpu: 13873.60107412238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5420.014191413482,
            "unit": "ns/iter",
            "extra": "iterations: 129374\ncpu: 5419.8764821370805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27034.837190309307,
            "unit": "ns/iter",
            "extra": "iterations: 25711\ncpu: 27034.261600093392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21699.006513646254,
            "unit": "ns/iter",
            "extra": "iterations: 32240\ncpu: 21698.219602977508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21668.365441381102,
            "unit": "ns/iter",
            "extra": "iterations: 32183\ncpu: 21667.76869775999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22002.410212096696,
            "unit": "ns/iter",
            "extra": "iterations: 31825\ncpu: 22000.88295365286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51482.540425225525,
            "unit": "ns/iter",
            "extra": "iterations: 13593\ncpu: 51480.39432060675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155431.4655789127,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 155416.8305766665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131182.0129020207,
            "unit": "ns/iter",
            "extra": "iterations: 5348\ncpu: 131173.13014210822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130382.9927884608,
            "unit": "ns/iter",
            "extra": "iterations: 5408\ncpu: 130378.40236686372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131217.7409706591,
            "unit": "ns/iter",
            "extra": "iterations: 5316\ncpu: 131213.18660647093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82940.72461193067,
            "unit": "ns/iter",
            "extra": "iterations: 8439\ncpu: 82936.71051072376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131948.12516493798,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 131944.9952874648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5390.1741148079955,
            "unit": "ns/iter",
            "extra": "iterations: 129294\ncpu: 5389.970918990824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27164.310060962693,
            "unit": "ns/iter",
            "extra": "iterations: 25753\ncpu: 27163.720731565492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21436.019496816712,
            "unit": "ns/iter",
            "extra": "iterations: 32672\ncpu: 21434.8035014692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21809.70877170891,
            "unit": "ns/iter",
            "extra": "iterations: 32126\ncpu: 21809.36313266502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22515.366446694694,
            "unit": "ns/iter",
            "extra": "iterations: 31216\ncpu: 22514.58867247584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49686.18441577121,
            "unit": "ns/iter",
            "extra": "iterations: 14104\ncpu: 49684.50794101034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153558.09285872112,
            "unit": "ns/iter",
            "extra": "iterations: 4523\ncpu: 153551.31549856515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127258.56860592694,
            "unit": "ns/iter",
            "extra": "iterations: 5466\ncpu: 127255.74460300009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127010.31380373258,
            "unit": "ns/iter",
            "extra": "iterations: 5513\ncpu: 127009.32341737875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127043.1596806403,
            "unit": "ns/iter",
            "extra": "iterations: 5511\ncpu: 127041.40809290292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83093.12178876481,
            "unit": "ns/iter",
            "extra": "iterations: 8408\ncpu: 83090.10466222593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129908.1376095456,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 129902.20026104692 ns\nthreads: 1"
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
        "date": 1705959081399,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1379.6409414687964,
            "unit": "ns/iter",
            "extra": "iterations: 503851\ncpu: 1379.5173573139678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16447.25741663289,
            "unit": "ns/iter",
            "extra": "iterations: 49989\ncpu: 16445.65804476985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33686.36968449948,
            "unit": "ns/iter",
            "extra": "iterations: 24786\ncpu: 33685.733882030196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49650.902207066254,
            "unit": "ns/iter",
            "extra": "iterations: 16719\ncpu: 49648.85459656676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56148.09080000214,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56146.97999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70791.587642066,
            "unit": "ns/iter",
            "extra": "iterations: 12494\ncpu: 70788.07427565231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84049.23225931851,
            "unit": "ns/iter",
            "extra": "iterations: 10273\ncpu: 84046.79256302926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96759.66048072159,
            "unit": "ns/iter",
            "extra": "iterations: 8945\ncpu: 96754.80156512023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112578.30854138748,
            "unit": "ns/iter",
            "extra": "iterations: 7610\ncpu: 112573.50854139288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1165.7616310271583,
            "unit": "ns/iter",
            "extra": "iterations: 599990\ncpu: 1165.6932615543583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 947.4846440710087,
            "unit": "ns/iter",
            "extra": "iterations: 739291\ncpu: 947.4569553802207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 937.5142821697084,
            "unit": "ns/iter",
            "extra": "iterations: 749641\ncpu: 937.4908789673988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 957.439173185812,
            "unit": "ns/iter",
            "extra": "iterations: 730418\ncpu: 957.3637287142423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1841.1912300595734,
            "unit": "ns/iter",
            "extra": "iterations: 380071\ncpu: 1841.0783774610552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4972.092116725389,
            "unit": "ns/iter",
            "extra": "iterations: 166441\ncpu: 4971.741938584839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24602.002303458405,
            "unit": "ns/iter",
            "extra": "iterations: 33428\ncpu: 24601.394040923788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18869.626229204136,
            "unit": "ns/iter",
            "extra": "iterations: 42914\ncpu: 18868.92622454211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18749.32466695848,
            "unit": "ns/iter",
            "extra": "iterations: 43463\ncpu: 18748.48491820626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18653.128208724047,
            "unit": "ns/iter",
            "extra": "iterations: 42774\ncpu: 18652.478140926716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 55207.57259999982,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55205.03000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 562427.6280000231,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562396.0999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 551201.4536278043,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 551172.8075709784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 562009.6406149489,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 561965.0864830237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 564962.0797428204,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 564931.0610932471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326704.91657397687,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 326696.10678531707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 558198.1078997697,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 558172.4470134875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2357353.109414709,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2357215.776081421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1092963.170414197,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 1092914.2011834332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3349244.2302158386,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3348997.482014393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7919.075306659261,
            "unit": "ns/iter",
            "extra": "iterations: 107122\ncpu: 7918.610556188285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40544.914660151946,
            "unit": "ns/iter",
            "extra": "iterations: 19229\ncpu: 40542.06146965515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34146.68132456,
            "unit": "ns/iter",
            "extra": "iterations: 24310\ncpu: 34145.38872891817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 33344.185576610544,
            "unit": "ns/iter",
            "extra": "iterations: 24696\ncpu: 33341.81243926124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31792.484171176675,
            "unit": "ns/iter",
            "extra": "iterations: 25681\ncpu: 31789.630466103332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 67491.61736942054,
            "unit": "ns/iter",
            "extra": "iterations: 12712\ncpu: 67488.4046570169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 605914.5460000081,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605913.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 591534.1190150469,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 591513.132694941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 586439.8591644245,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 586414.2857142828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587697.770524887,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 587667.9676985209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 344778.6670588304,
            "unit": "ns/iter",
            "extra": "iterations: 2550\ncpu: 344768.50980391976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578661.6083777151,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 578638.4308510653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2529754.8365123617,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2529594.550408713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1097676.5578947358,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 1097644.2105263185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5296.824562097528,
            "unit": "ns/iter",
            "extra": "iterations: 151632\ncpu: 5296.6174686082295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26506.41089491415,
            "unit": "ns/iter",
            "extra": "iterations: 31042\ncpu: 26504.716190967156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20988.394736172195,
            "unit": "ns/iter",
            "extra": "iterations: 39287\ncpu: 20987.05169648978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20548.587352172173,
            "unit": "ns/iter",
            "extra": "iterations: 40165\ncpu: 20547.190339848028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20450.06050420419,
            "unit": "ns/iter",
            "extra": "iterations: 39270\ncpu: 20449.17494270434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 52339.081599996,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52339.02000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 577311.8590000194,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577257.600000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569893.5136896962,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 569863.9504563237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 567777.6765083583,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 567760.0128369735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566207.8219355012,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 566183.1612903257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329763.03412071086,
            "unit": "ns/iter",
            "extra": "iterations: 2667\ncpu: 329738.39520059933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 564353.9073482531,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 564338.5942492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 522.3316169297701,
            "unit": "ns/iter",
            "extra": "iterations: 1340788\ncpu: 522.302780156149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3020.9569862480744,
            "unit": "ns/iter",
            "extra": "iterations: 233065\ncpu: 3020.845686825561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2407.336459155614,
            "unit": "ns/iter",
            "extra": "iterations: 293896\ncpu: 2407.1559327108903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2448.3371880377194,
            "unit": "ns/iter",
            "extra": "iterations: 280523\ncpu: 2448.2880191642175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1884.7291615098159,
            "unit": "ns/iter",
            "extra": "iterations: 371668\ncpu: 1884.6919831677608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 15901.555275927749,
            "unit": "ns/iter",
            "extra": "iterations: 44106\ncpu: 15899.85716229086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30634.840517053733,
            "unit": "ns/iter",
            "extra": "iterations: 22899\ncpu: 30632.04506747019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7202.992205581224,
            "unit": "ns/iter",
            "extra": "iterations: 96351\ncpu: 7201.798632084752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7170.642836773486,
            "unit": "ns/iter",
            "extra": "iterations: 98182\ncpu: 7170.482369477117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7161.9616419310305,
            "unit": "ns/iter",
            "extra": "iterations: 97763\ncpu: 7161.560099424075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14408.694646927906,
            "unit": "ns/iter",
            "extra": "iterations: 48701\ncpu: 14408.024475883452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13760.474505416023,
            "unit": "ns/iter",
            "extra": "iterations: 50952\ncpu: 13758.865206468647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5393.592866336276,
            "unit": "ns/iter",
            "extra": "iterations: 129751\ncpu: 5393.243982705369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27060.14745370495,
            "unit": "ns/iter",
            "extra": "iterations: 25920\ncpu: 27058.24845679023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21704.44097071682,
            "unit": "ns/iter",
            "extra": "iterations: 32306\ncpu: 21702.643471800828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21812.62668693585,
            "unit": "ns/iter",
            "extra": "iterations: 32233\ncpu: 21811.271057612128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22202.32335234298,
            "unit": "ns/iter",
            "extra": "iterations: 31560\ncpu: 22201.47972116595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51411.85114503949,
            "unit": "ns/iter",
            "extra": "iterations: 13624\ncpu: 51411.633881385824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158073.63352080574,
            "unit": "ns/iter",
            "extra": "iterations: 4445\ncpu: 158062.69966254372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130294.86712505617,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 130286.34082884158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130841.4771241745,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 130829.03828197804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132275.3875142662,
            "unit": "ns/iter",
            "extra": "iterations: 5254\ncpu: 132262.9044537507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83530.2857992391,
            "unit": "ns/iter",
            "extra": "iterations: 8408\ncpu: 83530.11417697433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132444.17023291538,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 132440.35220602076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5279.645352194288,
            "unit": "ns/iter",
            "extra": "iterations: 131632\ncpu: 5279.40318463594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26328.62237841455,
            "unit": "ns/iter",
            "extra": "iterations: 26463\ncpu: 26326.414238748537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21915.409921181432,
            "unit": "ns/iter",
            "extra": "iterations: 31972\ncpu: 21913.583760790894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22605.90294476809,
            "unit": "ns/iter",
            "extra": "iterations: 31106\ncpu: 22604.642191216826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21957.93546362075,
            "unit": "ns/iter",
            "extra": "iterations: 31858\ncpu: 21956.227635131036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50307.811227064725,
            "unit": "ns/iter",
            "extra": "iterations: 13895\ncpu: 50303.53364519634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154615.11687169765,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 154603.33919156596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128218.19428676028,
            "unit": "ns/iter",
            "extra": "iterations: 5461\ncpu: 128217.72569126586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127944.51271729036,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 127944.00731930425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128015.54142335762,
            "unit": "ns/iter",
            "extra": "iterations: 5480\ncpu: 128009.89051094872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82196.6136363598,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 82189.37823834234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129250.52827050013,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 129238.43311160484 ns\nthreads: 1"
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
        "date": 1705960573939,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1400.0918438338872,
            "unit": "ns/iter",
            "extra": "iterations: 501645\ncpu: 1400.0903029034478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16527.267442794142,
            "unit": "ns/iter",
            "extra": "iterations: 49820\ncpu: 16527.07948615014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34497.85177453064,
            "unit": "ns/iter",
            "extra": "iterations: 23950\ncpu: 34498.25469728603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49964.84226263054,
            "unit": "ns/iter",
            "extra": "iterations: 16388\ncpu: 49962.448132780046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55922.50390000118,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55922.29 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70465.95061530618,
            "unit": "ns/iter",
            "extra": "iterations: 12514\ncpu: 70462.37813648717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83119.71651419534,
            "unit": "ns/iter",
            "extra": "iterations: 10385\ncpu: 83115.67645642754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96765.97241993327,
            "unit": "ns/iter",
            "extra": "iterations: 8992\ncpu: 96760.73176156584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112129.05902644714,
            "unit": "ns/iter",
            "extra": "iterations: 7827\ncpu: 112124.07052510548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1152.292255369218,
            "unit": "ns/iter",
            "extra": "iterations: 607763\ncpu: 1152.2379611789452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 937.7754742216874,
            "unit": "ns/iter",
            "extra": "iterations: 744694\ncpu: 937.6956172602426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 922.2535317763957,
            "unit": "ns/iter",
            "extra": "iterations: 760453\ncpu: 922.2640978469417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 945.7679999346636,
            "unit": "ns/iter",
            "extra": "iterations: 734961\ncpu: 945.7369846835413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1818.8333017404118,
            "unit": "ns/iter",
            "extra": "iterations: 385109\ncpu: 1818.7411875598834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4994.831802451148,
            "unit": "ns/iter",
            "extra": "iterations: 160365\ncpu: 4994.838025753746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 23934.996777593547,
            "unit": "ns/iter",
            "extra": "iterations: 34136\ncpu: 23935.311694398886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18882.41295379336,
            "unit": "ns/iter",
            "extra": "iterations: 43632\ncpu: 18882.645764576435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 17799.051779025154,
            "unit": "ns/iter",
            "extra": "iterations: 46177\ncpu: 17799.090456287773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18467.175387598647,
            "unit": "ns/iter",
            "extra": "iterations: 44376\ncpu: 18466.44582657291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 54698.194599995986,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54695.36999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 565184.0279999761,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565147.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 569231.5623003432,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 569203.0670926514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 554280.5705958179,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 554254.7279792737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 557080.4771704099,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 557030.7395498374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324871.89773990115,
            "unit": "ns/iter",
            "extra": "iterations: 2699\ncpu: 324851.0929974069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 558953.8073217231,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 558912.8452151573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2354733.5721516474,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2354595.9493670887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1078658.389018641,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1078576.7523364457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3332850.9424461653,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3332705.0359712215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7516.877276382683,
            "unit": "ns/iter",
            "extra": "iterations: 111910\ncpu: 7516.816191582518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40885.2323212524,
            "unit": "ns/iter",
            "extra": "iterations: 20420\ncpu: 40884.00587659148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32248.5790728093,
            "unit": "ns/iter",
            "extra": "iterations: 26014\ncpu: 32246.609517951867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32141.538591568646,
            "unit": "ns/iter",
            "extra": "iterations: 26029\ncpu: 32140.397249222202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32308.56358290802,
            "unit": "ns/iter",
            "extra": "iterations: 25510\ncpu: 32306.50725205811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 66965.07927623812,
            "unit": "ns/iter",
            "extra": "iterations: 13043\ncpu: 66961.61925937246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603138.8509999261,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603112.5000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589246.4683888435,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 589231.4072059819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 589215.9221998954,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 589222.6693494315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 591402.1552542304,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 591383.1864406792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 341957.9617346802,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 341942.60204081575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580816.5003331272,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 580790.4063957351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2550271.06849324,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2550085.7534246566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1132623.4792683986,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 1132609.1463414622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5350.343766753837,
            "unit": "ns/iter",
            "extra": "iterations: 151085\ncpu: 5350.034748651414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26358.050461396277,
            "unit": "ns/iter",
            "extra": "iterations: 30776\ncpu: 26356.755263842126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20483.88939940063,
            "unit": "ns/iter",
            "extra": "iterations: 39394\ncpu: 20482.80448799313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20088.678145236205,
            "unit": "ns/iter",
            "extra": "iterations: 40307\ncpu: 20087.09405314205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20263.826592338977,
            "unit": "ns/iter",
            "extra": "iterations: 40004\ncpu: 20262.66373362659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 54047.23980000199,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54047.010000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 585473.9039999685,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585429.0999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 568422.2078431417,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 568403.8562091503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 567327.9735825193,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 567301.8685567037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 568153.7062981676,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 568123.071979431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 335304.3144916583,
            "unit": "ns/iter",
            "extra": "iterations: 2636\ncpu: 335290.0606980262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 563304.161290313,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 563267.4838709673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 525.7542922677579,
            "unit": "ns/iter",
            "extra": "iterations: 1331464\ncpu: 525.7473728166887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2968.332543296675,
            "unit": "ns/iter",
            "extra": "iterations: 236276\ncpu: 2968.366232710921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2368.341417822173,
            "unit": "ns/iter",
            "extra": "iterations: 295298\ncpu: 2368.286950809014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2368.6626724664916,
            "unit": "ns/iter",
            "extra": "iterations: 294260\ncpu: 2368.658329368578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1962.3633856216638,
            "unit": "ns/iter",
            "extra": "iterations: 357122\ncpu: 1962.3879234547437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16102.35763857101,
            "unit": "ns/iter",
            "extra": "iterations: 43516\ncpu: 16101.52587554018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30795.860106592707,
            "unit": "ns/iter",
            "extra": "iterations: 22703\ncpu: 30795.70541338133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7212.055814336634,
            "unit": "ns/iter",
            "extra": "iterations: 97036\ncpu: 7211.55550517322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7150.970797626459,
            "unit": "ns/iter",
            "extra": "iterations: 97903\ncpu: 7150.519391642722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7192.185356403689,
            "unit": "ns/iter",
            "extra": "iterations: 97558\ncpu: 7191.782324360822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14608.409092803806,
            "unit": "ns/iter",
            "extra": "iterations: 47972\ncpu: 14608.582089552225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13827.550348055514,
            "unit": "ns/iter",
            "extra": "iterations: 49992\ncpu: 13827.226356217234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5393.357019344061,
            "unit": "ns/iter",
            "extra": "iterations: 130119\ncpu: 5392.910335923292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27031.99097570652,
            "unit": "ns/iter",
            "extra": "iterations: 25930\ncpu: 27029.98071731582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21591.714523793755,
            "unit": "ns/iter",
            "extra": "iterations: 32402\ncpu: 21590.219739522272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21480.78136068337,
            "unit": "ns/iter",
            "extra": "iterations: 32469\ncpu: 21479.346453540402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22545.696583375942,
            "unit": "ns/iter",
            "extra": "iterations: 31376\ncpu: 22543.78505864357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51115.030431908825,
            "unit": "ns/iter",
            "extra": "iterations: 13637\ncpu: 51110.706167045515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157983.21585802693,
            "unit": "ns/iter",
            "extra": "iterations: 4452\ncpu: 157970.1033243465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130022.81346474752,
            "unit": "ns/iter",
            "extra": "iterations: 5377\ncpu: 130022.05690905871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129955.29109462893,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 129955.04638218947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131892.27108432926,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 131878.91566265037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82546.36900412322,
            "unit": "ns/iter",
            "extra": "iterations: 8485\ncpu: 82542.23924572727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132385.767131034,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 132373.45632530173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5173.61181951734,
            "unit": "ns/iter",
            "extra": "iterations: 135437\ncpu: 5173.669676676295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26891.177375217434,
            "unit": "ns/iter",
            "extra": "iterations: 25945\ncpu: 26891.065715937577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21523.032681145294,
            "unit": "ns/iter",
            "extra": "iterations: 32557\ncpu: 21522.70786620389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22507.73158846111,
            "unit": "ns/iter",
            "extra": "iterations: 30986\ncpu: 22506.73207254883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21919.272393099647,
            "unit": "ns/iter",
            "extra": "iterations: 31829\ncpu: 21918.963838009076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48830.71710617584,
            "unit": "ns/iter",
            "extra": "iterations: 14334\ncpu: 48827.682433374874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153163.22579234667,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 153163.14754098182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127651.47460723107,
            "unit": "ns/iter",
            "extra": "iterations: 5474\ncpu: 127650.91340884156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127561.1962821127,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 127550.53763440895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128433.3131646472,
            "unit": "ns/iter",
            "extra": "iterations: 5454\ncpu: 128426.25595892765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82690.32796970085,
            "unit": "ns/iter",
            "extra": "iterations: 8452\ncpu: 82684.50070989117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130137.35804299398,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 130128.81764269661 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}