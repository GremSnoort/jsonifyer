window.BENCHMARK_DATA = {
  "lastUpdate": 1705576264292,
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
      }
    ]
  }
}