window.BENCHMARK_DATA = {
  "lastUpdate": 1705953645235,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-12 18.04 Release c++-17": [
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
        "date": 1702490300162,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1315.194226170102,
            "unit": "ns/iter",
            "extra": "iterations: 521006\ncpu: 1315.1393649977163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15923.815449239097,
            "unit": "ns/iter",
            "extra": "iterations: 51899\ncpu: 15922.825102603132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33796.527096801256,
            "unit": "ns/iter",
            "extra": "iterations: 24597\ncpu: 33790.09228767738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50320.85483967654,
            "unit": "ns/iter",
            "extra": "iterations: 16685\ncpu: 50319.958046149244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55837.1577999992,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55834.350000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70222.21450296421,
            "unit": "ns/iter",
            "extra": "iterations: 12494\ncpu: 70221.52233071871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84946.4604567709,
            "unit": "ns/iter",
            "extra": "iterations: 10027\ncpu: 84940.84970579436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97787.46426052097,
            "unit": "ns/iter",
            "extra": "iterations: 8506\ncpu: 97785.32800376209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112246.3293546658,
            "unit": "ns/iter",
            "extra": "iterations: 7624\ncpu: 112242.15634837351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1131.0979713684185,
            "unit": "ns/iter",
            "extra": "iterations: 612679\ncpu: 1131.0660231540521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 909.5919673488921,
            "unit": "ns/iter",
            "extra": "iterations: 760770\ncpu: 909.5898891912135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 900.287046640134,
            "unit": "ns/iter",
            "extra": "iterations: 778107\ncpu: 900.254463717716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 886.4960499317785,
            "unit": "ns/iter",
            "extra": "iterations: 790999\ncpu: 886.4272900471435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1897.7515443772113,
            "unit": "ns/iter",
            "extra": "iterations: 367462\ncpu: 1897.6609826322203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5133.732423490676,
            "unit": "ns/iter",
            "extra": "iterations: 154752\ncpu: 5133.436078370557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25112.344424487437,
            "unit": "ns/iter",
            "extra": "iterations: 32849\ncpu: 25111.26974945964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19756.81734486589,
            "unit": "ns/iter",
            "extra": "iterations: 41384\ncpu: 19756.072395128536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19831.788594200134,
            "unit": "ns/iter",
            "extra": "iterations: 42908\ncpu: 19830.85438612841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20222.922346744912,
            "unit": "ns/iter",
            "extra": "iterations: 40243\ncpu: 20222.38401709615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64853.14674855965,
            "unit": "ns/iter",
            "extra": "iterations: 13840\ncpu: 64852.18208092499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 551312.2040000553,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551293.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 554597.281249985,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 554583.7372448974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 539576.1359285201,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 539562.7951499671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 543070.2287500111,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 543049.6250000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 322596.9623274593,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 322589.3323386791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 545565.6027312196,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 545542.9546865296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2326143.8643218144,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2325968.5929648196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1072726.5586528047,
            "unit": "ns/iter",
            "extra": "iterations: 861\ncpu: 1072686.4111498266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3227332.71428551,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3227205.923344949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7481.35005673388,
            "unit": "ns/iter",
            "extra": "iterations: 114570\ncpu: 7481.213232085191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39968.936342591216,
            "unit": "ns/iter",
            "extra": "iterations: 20736\ncpu: 39966.30015432097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31671.683333973735,
            "unit": "ns/iter",
            "extra": "iterations: 26059\ncpu: 31670.26746997196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30878.973764515074,
            "unit": "ns/iter",
            "extra": "iterations: 26872\ncpu: 30876.890443584267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31303.723924959606,
            "unit": "ns/iter",
            "extra": "iterations: 25906\ncpu: 31302.528371805718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75835.96186919442,
            "unit": "ns/iter",
            "extra": "iterations: 11513\ncpu: 75831.81620776556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 579800.1399999749,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579766.9000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 573917.6827814573,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 573855.827814574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 579532.959156782,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 579492.3583662697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 581469.9865771937,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 581446.9798657693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 335479.0667178267,
            "unit": "ns/iter",
            "extra": "iterations: 2608\ncpu: 335455.90490797424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574489.7434210752,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 574465.6578947393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2469798.9946950395,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2469693.8992042313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1090894.561547486,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1090823.5638921459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5059.261298180068,
            "unit": "ns/iter",
            "extra": "iterations: 157636\ncpu: 5058.995407140487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24361.751770735267,
            "unit": "ns/iter",
            "extra": "iterations: 33743\ncpu: 24359.671635598585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18967.896021974786,
            "unit": "ns/iter",
            "extra": "iterations: 42961\ncpu: 18967.03521798843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18895.672716371508,
            "unit": "ns/iter",
            "extra": "iterations: 43363\ncpu: 18894.382307497322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18920.515560192332,
            "unit": "ns/iter",
            "extra": "iterations: 43155\ncpu: 18919.46472019457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62103.80269999405,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62102.110000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 562134.7400000332,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562103.999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 559764.0663232416,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 559727.2376046391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 558317.0128123215,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 558284.6252402285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 557026.1415759637,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 556984.4971172311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 323652.38901260216,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 323636.9339272462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 554396.2583280946,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 554364.2991829047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 507.89518829145976,
            "unit": "ns/iter",
            "extra": "iterations: 1380466\ncpu: 507.8876987915687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2983.200180855851,
            "unit": "ns/iter",
            "extra": "iterations: 235547\ncpu: 2983.1935876916255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2366.8960882504834,
            "unit": "ns/iter",
            "extra": "iterations: 296338\ncpu: 2366.8351679500947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2193.498632079751,
            "unit": "ns/iter",
            "extra": "iterations: 318732\ncpu: 2193.464728988601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1913.7079166482754,
            "unit": "ns/iter",
            "extra": "iterations: 363184\ncpu: 1913.6143112031236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16672.070362979135,
            "unit": "ns/iter",
            "extra": "iterations: 42096\ncpu: 16671.018624097163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 28614.897748169664,
            "unit": "ns/iter",
            "extra": "iterations: 24469\ncpu: 28612.94290735198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7125.137856829538,
            "unit": "ns/iter",
            "extra": "iterations: 98051\ncpu: 7124.577005843799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7110.459240260202,
            "unit": "ns/iter",
            "extra": "iterations: 98639\ncpu: 7110.0436946846485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7115.303260891855,
            "unit": "ns/iter",
            "extra": "iterations: 98562\ncpu: 7115.105212962394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14298.21155369566,
            "unit": "ns/iter",
            "extra": "iterations: 49231\ncpu: 14298.200320935966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13452.965651277429,
            "unit": "ns/iter",
            "extra": "iterations: 51967\ncpu: 13452.273558219766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5107.5853692717355,
            "unit": "ns/iter",
            "extra": "iterations: 135605\ncpu: 5107.3175767855855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25689.935664129192,
            "unit": "ns/iter",
            "extra": "iterations: 27201\ncpu: 25689.496709679766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20710.72668048691,
            "unit": "ns/iter",
            "extra": "iterations: 33770\ncpu: 20710.050340538954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20732.077512298965,
            "unit": "ns/iter",
            "extra": "iterations: 33943\ncpu: 20731.370238340714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21163.451410375892,
            "unit": "ns/iter",
            "extra": "iterations: 32970\ncpu: 21162.808613891375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48479.90775362922,
            "unit": "ns/iter",
            "extra": "iterations: 13800\ncpu: 48478.891304348275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154382.30696131618,
            "unit": "ns/iter",
            "extra": "iterations: 4525\ncpu: 154381.9226519337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129814.82475558652,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 129809.94281497905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129914.6208294935,
            "unit": "ns/iter",
            "extra": "iterations: 5425\ncpu: 129910.28571428501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130423.12116707944,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 130420.46088087911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81536.44574095888,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 81530.70011668536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130296.84368071977,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 130295.41759053813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4879.572252706541,
            "unit": "ns/iter",
            "extra": "iterations: 141967\ncpu: 4879.423387125147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24764.617287870104,
            "unit": "ns/iter",
            "extra": "iterations: 28332\ncpu: 24762.713539460772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20006.658656722215,
            "unit": "ns/iter",
            "extra": "iterations: 35123\ncpu: 20005.84517267866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19716.10527498435,
            "unit": "ns/iter",
            "extra": "iterations: 35602\ncpu: 19715.288466940132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20011.421506795305,
            "unit": "ns/iter",
            "extra": "iterations: 34882\ncpu: 20011.180551573958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46174.91069191259,
            "unit": "ns/iter",
            "extra": "iterations: 15161\ncpu: 46171.604775410626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151584.5020638826,
            "unit": "ns/iter",
            "extra": "iterations: 4603\ncpu: 151582.90245492075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 125792.8316455689,
            "unit": "ns/iter",
            "extra": "iterations: 5530\ncpu: 125791.04882459203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126771.60426068913,
            "unit": "ns/iter",
            "extra": "iterations: 5539\ncpu: 126765.5714027788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 125886.10859404293,
            "unit": "ns/iter",
            "extra": "iterations: 5562\ncpu: 125872.50988853013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81776.04526462233,
            "unit": "ns/iter",
            "extra": "iterations: 8616\ncpu: 81767.66480965662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126197.19619457592,
            "unit": "ns/iter",
            "extra": "iterations: 5571\ncpu: 126188.04523424864 ns\nthreads: 1"
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
        "date": 1702493004260,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1367.6665160742987,
            "unit": "ns/iter",
            "extra": "iterations: 469258\ncpu: 1367.5856351942857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15880.505391412542,
            "unit": "ns/iter",
            "extra": "iterations: 51378\ncpu: 15879.444509323057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33880.84596156276,
            "unit": "ns/iter",
            "extra": "iterations: 24403\ncpu: 33879.35909519323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50290.700137229105,
            "unit": "ns/iter",
            "extra": "iterations: 16761\ncpu: 50290.96712606647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55871.37159999429,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55869.10000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70501.39945543812,
            "unit": "ns/iter",
            "extra": "iterations: 12487\ncpu: 70499.76775846879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83339.70317581516,
            "unit": "ns/iter",
            "extra": "iterations: 10454\ncpu: 83336.51233977421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95603.9112050804,
            "unit": "ns/iter",
            "extra": "iterations: 8987\ncpu: 95601.54667853568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112027.17558352803,
            "unit": "ns/iter",
            "extra": "iterations: 7626\ncpu: 112019.48596905322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1170.292108791487,
            "unit": "ns/iter",
            "extra": "iterations: 598907\ncpu: 1170.2399537824754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 941.5221142764232,
            "unit": "ns/iter",
            "extra": "iterations: 745333\ncpu: 941.5160740232895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 963.9464132484621,
            "unit": "ns/iter",
            "extra": "iterations: 747013\ncpu: 963.8948719767922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 923.7133464687506,
            "unit": "ns/iter",
            "extra": "iterations: 759272\ncpu: 923.7053387982166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1886.1606319005612,
            "unit": "ns/iter",
            "extra": "iterations: 369995\ncpu: 1886.0295409397422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4977.432618993236,
            "unit": "ns/iter",
            "extra": "iterations: 160661\ncpu: 4977.472441974091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25463.707139975533,
            "unit": "ns/iter",
            "extra": "iterations: 32227\ncpu: 25461.588109349326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19637.222461574896,
            "unit": "ns/iter",
            "extra": "iterations: 41315\ncpu: 19636.451651942352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19484.22868973353,
            "unit": "ns/iter",
            "extra": "iterations: 42022\ncpu: 19482.15696539912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20173.85846521264,
            "unit": "ns/iter",
            "extra": "iterations: 40188\ncpu: 20172.59629740221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64073.97924569491,
            "unit": "ns/iter",
            "extra": "iterations: 13973\ncpu: 64070.00644099331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 549040.2950000544,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549029.3000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 549439.3314213033,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 549382.4729126841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 540998.7890478923,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 540946.6085874315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 532818.3817171351,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 532795.3675108091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 316315.19007662154,
            "unit": "ns/iter",
            "extra": "iterations: 2741\ncpu: 316298.39474644343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 551302.0836431176,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 551288.1040892198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2340974.7632240052,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2340846.09571789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1045378.4374295294,
            "unit": "ns/iter",
            "extra": "iterations: 887\ncpu: 1045365.1634723776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3238720.322807048,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3238564.9122807006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7306.341341525646,
            "unit": "ns/iter",
            "extra": "iterations: 114258\ncpu: 7306.050342207959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39676.10220584907,
            "unit": "ns/iter",
            "extra": "iterations: 20899\ncpu: 39674.472462797254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30664.59195103922,
            "unit": "ns/iter",
            "extra": "iterations: 26960\ncpu: 30662.959940652847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30393.659447023394,
            "unit": "ns/iter",
            "extra": "iterations: 27379\ncpu: 30392.52346689078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30646.077585251394,
            "unit": "ns/iter",
            "extra": "iterations: 27067\ncpu: 30645.010529426876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75648.89071226568,
            "unit": "ns/iter",
            "extra": "iterations: 11639\ncpu: 75647.08308273906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 580212.9630000081,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580182.6999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 572384.1942590517,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 572366.6221628854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 570693.9664914611,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 570677.660972405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 568749.3700787374,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 568726.7060367463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 332323.2234446183,
            "unit": "ns/iter",
            "extra": "iterations: 2636\ncpu: 332313.35356600775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 570198.8318002706,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 570162.2864651773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2483558.111702044,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2483569.4148936183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1113209.5367026667,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 1113138.6281588408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4999.817785908073,
            "unit": "ns/iter",
            "extra": "iterations: 157979\ncpu: 4999.637926559864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23923.808503161003,
            "unit": "ns/iter",
            "extra": "iterations: 34152\ncpu: 23923.108456312995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20875.05253532616,
            "unit": "ns/iter",
            "extra": "iterations: 39916\ncpu: 20873.79747469691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19944.38505508442,
            "unit": "ns/iter",
            "extra": "iterations: 40937\ncpu: 19943.57671544078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20704.940226049937,
            "unit": "ns/iter",
            "extra": "iterations: 39549\ncpu: 20703.863561657614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62454.61424990782,
            "unit": "ns/iter",
            "extra": "iterations: 13965\ncpu: 62452.8750447547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 569954.9820000129,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569958.7000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 574501.8684554558,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 574463.5471204174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 574772.813315953,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 574747.4543080905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 572434.6502947471,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 572429.2730844793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330148.435598976,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 330135.63650018873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 564730.9003236174,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 564711.0032362458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 499.74373032297893,
            "unit": "ns/iter",
            "extra": "iterations: 1399155\ncpu: 499.7341252398755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3037.1687257446215,
            "unit": "ns/iter",
            "extra": "iterations: 230362\ncpu: 3037.084241324521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2433.1957387545503,
            "unit": "ns/iter",
            "extra": "iterations: 286489\ncpu: 2433.1286716069535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2419.330672933341,
            "unit": "ns/iter",
            "extra": "iterations: 288929\ncpu: 2419.234483212147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1922.77592619964,
            "unit": "ns/iter",
            "extra": "iterations: 365094\ncpu: 1922.7286671377672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16820.82971409442,
            "unit": "ns/iter",
            "extra": "iterations: 42182\ncpu: 16820.928358067627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30736.14224081106,
            "unit": "ns/iter",
            "extra": "iterations: 22715\ncpu: 30734.61589258201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7258.804951571696,
            "unit": "ns/iter",
            "extra": "iterations: 96535\ncpu: 7258.593256331924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7270.334295834463,
            "unit": "ns/iter",
            "extra": "iterations: 96277\ncpu: 7270.0728107440755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7260.0748039274085,
            "unit": "ns/iter",
            "extra": "iterations: 96265\ncpu: 7259.81093855502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14331.558699950956,
            "unit": "ns/iter",
            "extra": "iterations: 48552\ncpu: 14330.99151425261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13822.2911459875,
            "unit": "ns/iter",
            "extra": "iterations: 50655\ncpu: 13821.638535188968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5228.696628625926,
            "unit": "ns/iter",
            "extra": "iterations: 133714\ncpu: 5228.661920217763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26313.224424310632,
            "unit": "ns/iter",
            "extra": "iterations: 26490\ncpu: 26312.12910532304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20796.599863344258,
            "unit": "ns/iter",
            "extra": "iterations: 33661\ncpu: 20796.746977213992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20662.789936104266,
            "unit": "ns/iter",
            "extra": "iterations: 33804\ncpu: 20661.217607384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21157.009616834002,
            "unit": "ns/iter",
            "extra": "iterations: 33171\ncpu: 21156.793584757695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48548.265580585794,
            "unit": "ns/iter",
            "extra": "iterations: 14425\ncpu: 48547.050259965006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155084.9532606252,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 155085.93367460533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130475.37383001483,
            "unit": "ns/iter",
            "extra": "iterations: 5342\ncpu: 130464.50767502809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130350.31927598617,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 130345.58686322019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130676.71109021311,
            "unit": "ns/iter",
            "extra": "iterations: 5320\ncpu: 130668.59022556402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82187.74976426174,
            "unit": "ns/iter",
            "extra": "iterations: 8484\ncpu: 82184.6181046673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 128390.35504047431,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 128383.81162619492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4916.4441181842185,
            "unit": "ns/iter",
            "extra": "iterations: 142354\ncpu: 4916.255250993971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24628.813730669917,
            "unit": "ns/iter",
            "extra": "iterations: 28389\ncpu: 24627.16192891608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19777.382855364536,
            "unit": "ns/iter",
            "extra": "iterations: 35358\ncpu: 19776.033712314063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19698.972419802834,
            "unit": "ns/iter",
            "extra": "iterations: 35569\ncpu: 19697.627147235184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20099.09348621282,
            "unit": "ns/iter",
            "extra": "iterations: 34711\ncpu: 20097.571375068088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46102.34060702719,
            "unit": "ns/iter",
            "extra": "iterations: 15123\ncpu: 46101.54069959607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 146230.14467908556,
            "unit": "ns/iter",
            "extra": "iterations: 4783\ncpu: 146224.94250470502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 123317.07593600436,
            "unit": "ns/iter",
            "extra": "iterations: 5689\ncpu: 123317.75355950125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 122843.56760563748,
            "unit": "ns/iter",
            "extra": "iterations: 5680\ncpu: 122833.41549295708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 124930.2338965112,
            "unit": "ns/iter",
            "extra": "iterations: 5682\ncpu: 124928.33509327524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80915.74979849746,
            "unit": "ns/iter",
            "extra": "iterations: 8685\ncpu: 80913.10305123765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126820.61803427478,
            "unit": "ns/iter",
            "extra": "iterations: 5545\ncpu: 126810.3336339044 ns\nthreads: 1"
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
        "date": 1702503989583,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1327.2696242449374,
            "unit": "ns/iter",
            "extra": "iterations: 509268\ncpu: 1327.2536267741152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15885.26354906891,
            "unit": "ns/iter",
            "extra": "iterations: 52070\ncpu: 15884.8031496063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33689.46909550723,
            "unit": "ns/iter",
            "extra": "iterations: 24511\ncpu: 33688.20529558158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50158.9009025041,
            "unit": "ns/iter",
            "extra": "iterations: 16842\ncpu: 50158.13442584015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55167.777499991644,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55167.46999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69437.56176821653,
            "unit": "ns/iter",
            "extra": "iterations: 12555\ncpu: 69435.32457188376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82360.27253668521,
            "unit": "ns/iter",
            "extra": "iterations: 10494\ncpu: 82353.12559557839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95588.62963779333,
            "unit": "ns/iter",
            "extra": "iterations: 9083\ncpu: 95586.72244853029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115442.7189752973,
            "unit": "ns/iter",
            "extra": "iterations: 7768\ncpu: 115442.5077239959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1143.8850517223923,
            "unit": "ns/iter",
            "extra": "iterations: 605829\ncpu: 1143.7980024066183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 920.3605838839444,
            "unit": "ns/iter",
            "extra": "iterations: 683081\ncpu: 920.3500024155273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 903.0567692586961,
            "unit": "ns/iter",
            "extra": "iterations: 773711\ncpu: 903.0526902163708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 890.2872852110869,
            "unit": "ns/iter",
            "extra": "iterations: 782978\ncpu: 890.2329311934675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1868.1448466036059,
            "unit": "ns/iter",
            "extra": "iterations: 374617\ncpu: 1868.1028890840503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5181.534036563446,
            "unit": "ns/iter",
            "extra": "iterations: 154525\ncpu: 5181.345413363539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27570.675672267884,
            "unit": "ns/iter",
            "extra": "iterations: 31721\ncpu: 27570.55893572081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20054.26536709567,
            "unit": "ns/iter",
            "extra": "iterations: 40834\ncpu: 20054.035852475827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19460.425347999444,
            "unit": "ns/iter",
            "extra": "iterations: 42457\ncpu: 19460.326919000414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19174.247876156518,
            "unit": "ns/iter",
            "extra": "iterations: 42376\ncpu: 19174.10798565229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65481.43839376285,
            "unit": "ns/iter",
            "extra": "iterations: 13846\ncpu: 65478.881987577646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 564298.8959999684,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564236.7000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 555313.8869009663,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 555298.9776357828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 563187.7671583884,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 562456.8313021162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 556210.8860135721,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 556181.9470117065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 323465.11164509266,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 323455.82255083177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 555184.4575411993,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 555168.7579214184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2324643.0249375924,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2324547.630922693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1070784.9663963248,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 1070746.929316336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3215079.8368056775,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3214898.611111115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7282.356648777829,
            "unit": "ns/iter",
            "extra": "iterations: 116089\ncpu: 7282.0990791547865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39999.737352403405,
            "unit": "ns/iter",
            "extra": "iterations: 20834\ncpu: 39997.73927234325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31364.32129867259,
            "unit": "ns/iter",
            "extra": "iterations: 26119\ncpu: 31363.046058424974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30467.56307997943,
            "unit": "ns/iter",
            "extra": "iterations: 27156\ncpu: 30466.210045662254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30792.242279302944,
            "unit": "ns/iter",
            "extra": "iterations: 26552\ncpu: 30792.04203073211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76143.20855002748,
            "unit": "ns/iter",
            "extra": "iterations: 11345\ncpu: 76138.99515204971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 598423.4190000279,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598410.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 587215.3499663249,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 587184.0188806442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 592394.4819112957,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 592362.7986348136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 590169.2960704532,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 590142.2764227621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 340498.2564897341,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 340480.47268500587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580439.5136212189,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 580406.1794019961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2484826.9108108957,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2484718.918918931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1102374.6713948292,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1102316.666666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5163.575293887119,
            "unit": "ns/iter",
            "extra": "iterations: 153120\ncpu: 5163.420846394962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25121.08627572277,
            "unit": "ns/iter",
            "extra": "iterations: 32315\ncpu: 25119.02522048591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19343.92439035869,
            "unit": "ns/iter",
            "extra": "iterations: 42402\ncpu: 19343.12532427714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19132.343785727946,
            "unit": "ns/iter",
            "extra": "iterations: 42861\ncpu: 19131.277851659936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19369.785778055866,
            "unit": "ns/iter",
            "extra": "iterations: 41443\ncpu: 19368.757088048686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62551.45039117019,
            "unit": "ns/iter",
            "extra": "iterations: 13677\ncpu: 62547.32031878316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 584718.1400000637,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584692.4999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 557812.924101217,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 557786.5512649782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 564170.1294042204,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 564152.6585522089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 568268.428478949,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 568245.7605177987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 324994.6592095386,
            "unit": "ns/iter",
            "extra": "iterations: 2682\ncpu: 324979.45563012606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 555727.7416718809,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 555699.6857322459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 540.9820894136735,
            "unit": "ns/iter",
            "extra": "iterations: 1293090\ncpu: 540.9491992050022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3061.1292440234365,
            "unit": "ns/iter",
            "extra": "iterations: 227732\ncpu: 3060.9927458591624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2466.7033036892167,
            "unit": "ns/iter",
            "extra": "iterations: 283138\ncpu: 2466.566479949704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2452.4261556005463,
            "unit": "ns/iter",
            "extra": "iterations: 285025\ncpu: 2452.334005788968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1943.5027166809932,
            "unit": "ns/iter",
            "extra": "iterations: 359630\ncpu: 1943.3462169451855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17249.67755151401,
            "unit": "ns/iter",
            "extra": "iterations: 41495\ncpu: 17249.03964333055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31728.830246774207,
            "unit": "ns/iter",
            "extra": "iterations: 22085\ncpu: 31726.66062938685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7511.024550391931,
            "unit": "ns/iter",
            "extra": "iterations: 93359\ncpu: 7510.7006287557415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7514.837659278431,
            "unit": "ns/iter",
            "extra": "iterations: 93390\ncpu: 7514.786379698004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7569.6735049590225,
            "unit": "ns/iter",
            "extra": "iterations: 92372\ncpu: 7569.437708396515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14692.264423683768,
            "unit": "ns/iter",
            "extra": "iterations: 47526\ncpu: 14691.899170980336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14056.951919192124,
            "unit": "ns/iter",
            "extra": "iterations: 49500\ncpu: 14056.210101010363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5325.509550370087,
            "unit": "ns/iter",
            "extra": "iterations: 131775\ncpu: 5325.283247960582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26778.655161834104,
            "unit": "ns/iter",
            "extra": "iterations: 26076\ncpu: 26776.760239300136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21350.06244846589,
            "unit": "ns/iter",
            "extra": "iterations: 32747\ncpu: 21349.189238708717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21390.14606364258,
            "unit": "ns/iter",
            "extra": "iterations: 32746\ncpu: 21389.37580162428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21729.934777900995,
            "unit": "ns/iter",
            "extra": "iterations: 32305\ncpu: 21729.540318836316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49009.01929260188,
            "unit": "ns/iter",
            "extra": "iterations: 14306\ncpu: 49005.71089053572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158618.46284166633,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 158613.71131691817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133519.15356940756,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 133517.97008142405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132451.20169811018,
            "unit": "ns/iter",
            "extra": "iterations: 5300\ncpu: 132449.92452830245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131852.79134523196,
            "unit": "ns/iter",
            "extra": "iterations: 5315\ncpu: 131848.05268109223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83771.37084491325,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 83764.47479753377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132729.05550295254,
            "unit": "ns/iter",
            "extra": "iterations: 5279\ncpu: 132722.31483235434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5117.927717625927,
            "unit": "ns/iter",
            "extra": "iterations: 136783\ncpu: 5117.745626283983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25975.23122096353,
            "unit": "ns/iter",
            "extra": "iterations: 26905\ncpu: 25974.67756922502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20139.588552324898,
            "unit": "ns/iter",
            "extra": "iterations: 34697\ncpu: 20139.366515837242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20181.8345282319,
            "unit": "ns/iter",
            "extra": "iterations: 34731\ncpu: 20181.710863493627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20594.70604492472,
            "unit": "ns/iter",
            "extra": "iterations: 34012\ncpu: 20594.51076090766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46359.01292160775,
            "unit": "ns/iter",
            "extra": "iterations: 15091\ncpu: 46357.431581737284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151320.52146708788,
            "unit": "ns/iter",
            "extra": "iterations: 4635\ncpu: 151318.29557713153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127153.79952742832,
            "unit": "ns/iter",
            "extra": "iterations: 5502\ncpu: 127150.45438022615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126773.81217641004,
            "unit": "ns/iter",
            "extra": "iterations: 5601\ncpu: 126766.20246384689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126496.56664251232,
            "unit": "ns/iter",
            "extra": "iterations: 5522\ncpu: 126494.5490764205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80835.75928898429,
            "unit": "ns/iter",
            "extra": "iterations: 8720\ncpu: 80831.4334862387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126192.96026608617,
            "unit": "ns/iter",
            "extra": "iterations: 5562\ncpu: 126188.51132685997 ns\nthreads: 1"
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
        "date": 1705575663573,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1351.7523502525355,
            "unit": "ns/iter",
            "extra": "iterations: 515902\ncpu: 1351.6952832127033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16139.005695642129,
            "unit": "ns/iter",
            "extra": "iterations: 51794\ncpu: 16137.69162451249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33446.87232843598,
            "unit": "ns/iter",
            "extra": "iterations: 24845\ncpu: 33446.049506943054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49486.84194743468,
            "unit": "ns/iter",
            "extra": "iterations: 17007\ncpu: 49484.97089433762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55337.36719999069,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55332.93000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69217.70398029813,
            "unit": "ns/iter",
            "extra": "iterations: 12587\ncpu: 69212.04417255902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83178.30165724434,
            "unit": "ns/iter",
            "extra": "iterations: 10439\ncpu: 83174.0205000479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95986.46129927217,
            "unit": "ns/iter",
            "extra": "iterations: 9005\ncpu: 95980.53303720155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111662.28627145012,
            "unit": "ns/iter",
            "extra": "iterations: 7692\ncpu: 111655.05720228792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1127.9144280958803,
            "unit": "ns/iter",
            "extra": "iterations: 617656\ncpu: 1127.8606538267277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 903.4235352897823,
            "unit": "ns/iter",
            "extra": "iterations: 774573\ncpu: 903.387802053518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 901.3193691283103,
            "unit": "ns/iter",
            "extra": "iterations: 775435\ncpu: 901.3201622315219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 903.2433354249297,
            "unit": "ns/iter",
            "extra": "iterations: 776081\ncpu: 903.2223440594457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1885.1588804390133,
            "unit": "ns/iter",
            "extra": "iterations: 376862\ncpu: 1885.1393878926503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5166.355465927098,
            "unit": "ns/iter",
            "extra": "iterations: 154960\ncpu: 5166.242901393909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25030.380023136142,
            "unit": "ns/iter",
            "extra": "iterations: 32848\ncpu: 25029.98356064296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19994.902725345786,
            "unit": "ns/iter",
            "extra": "iterations: 41059\ncpu: 19994.300884093605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18762.734841546386,
            "unit": "ns/iter",
            "extra": "iterations: 43672\ncpu: 18762.254991756716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19510.784751665025,
            "unit": "ns/iter",
            "extra": "iterations: 42221\ncpu: 19510.272139456647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 63724.06775956622,
            "unit": "ns/iter",
            "extra": "iterations: 13725\ncpu: 63722.63023679406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 542540.6719999728,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542517.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 545183.8803526587,
            "unit": "ns/iter",
            "extra": "iterations: 1588\ncpu: 545164.5465994966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 548025.2051767557,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 548003.0303030318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 546431.9512039945,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 546417.6172370089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 319912.3391813239,
            "unit": "ns/iter",
            "extra": "iterations: 2736\ncpu: 319905.22660818655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 544693.0960698102,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 544668.558951966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2320466.415422987,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2320322.6368159237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1059038.3180252542,
            "unit": "ns/iter",
            "extra": "iterations: 871\ncpu: 1058969.230769233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3207032.2986111282,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3206806.5972222164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7180.9352389229025,
            "unit": "ns/iter",
            "extra": "iterations: 117339\ncpu: 7180.578494788602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39702.09023163101,
            "unit": "ns/iter",
            "extra": "iterations: 21068\ncpu: 39699.83861780897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30658.14203911806,
            "unit": "ns/iter",
            "extra": "iterations: 26894\ncpu: 30656.54049230318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30639.478960669123,
            "unit": "ns/iter",
            "extra": "iterations: 26902\ncpu: 30637.246301390212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30765.68700196557,
            "unit": "ns/iter",
            "extra": "iterations: 26981\ncpu: 30765.690671213157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 74549.61864479336,
            "unit": "ns/iter",
            "extra": "iterations: 11703\ncpu: 74544.19379646218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 580458.7549999951,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580404.8999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 585377.0175438675,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 585349.0553306346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 568611.2588157316,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 568593.4131736525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 581627.6279382037,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 581603.1564808579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 332902.4415634542,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 332891.3699690418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 568171.3428005296,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 568171.1360634087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2452874.185185166,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2452753.703703698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1111504.4589595227,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1111458.612716762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5260.967192024984,
            "unit": "ns/iter",
            "extra": "iterations: 151579\ncpu: 5260.702340033872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24953.366966520716,
            "unit": "ns/iter",
            "extra": "iterations: 32349\ncpu: 24952.851711026597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19515.066978194485,
            "unit": "ns/iter",
            "extra": "iterations: 42372\ncpu: 19513.952610214317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19169.22189604159,
            "unit": "ns/iter",
            "extra": "iterations: 42921\ncpu: 19168.099531697884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19157.46374909101,
            "unit": "ns/iter",
            "extra": "iterations: 42661\ncpu: 19157.103677832314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63899.72771663443,
            "unit": "ns/iter",
            "extra": "iterations: 13721\ncpu: 63898.62254937693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 557551.1339999366,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557521.2999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 557127.013496162,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 557104.4987146506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 564175.1480026171,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 564159.9869024201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566959.0930232721,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 566933.8501291968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 322092.6606512385,
            "unit": "ns/iter",
            "extra": "iterations: 2549\ncpu: 322079.4036877192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 549679.2418341128,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 549656.4698492432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 499.80909873207895,
            "unit": "ns/iter",
            "extra": "iterations: 1400305\ncpu: 499.798686714683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3008.479650893763,
            "unit": "ns/iter",
            "extra": "iterations: 237750\ncpu: 3008.4033648790805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2445.4118047984207,
            "unit": "ns/iter",
            "extra": "iterations: 293440\ncpu: 2445.361913849518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2419.445435739913,
            "unit": "ns/iter",
            "extra": "iterations: 290529\ncpu: 2419.4469398924034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1911.053028848173,
            "unit": "ns/iter",
            "extra": "iterations: 364462\ncpu: 1910.9926412081381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17155.67078080177,
            "unit": "ns/iter",
            "extra": "iterations: 41483\ncpu: 17155.143070655715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29239.627367184326,
            "unit": "ns/iter",
            "extra": "iterations: 23868\ncpu: 29238.9601139605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7259.563057417035,
            "unit": "ns/iter",
            "extra": "iterations: 96539\ncpu: 7259.370824226518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7191.174413097074,
            "unit": "ns/iter",
            "extra": "iterations: 97120\ncpu: 7191.024505766155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7281.244220060034,
            "unit": "ns/iter",
            "extra": "iterations: 96065\ncpu: 7281.045125696125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14364.368502793932,
            "unit": "ns/iter",
            "extra": "iterations: 48290\ncpu: 14364.069165458504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13681.151286523775,
            "unit": "ns/iter",
            "extra": "iterations: 51029\ncpu: 13680.799153422746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5148.161514820638,
            "unit": "ns/iter",
            "extra": "iterations: 135356\ncpu: 5148.051065338794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26308.96557698382,
            "unit": "ns/iter",
            "extra": "iterations: 26552\ncpu: 26308.285628201058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20996.233327340316,
            "unit": "ns/iter",
            "extra": "iterations: 33378\ncpu: 20995.56294565251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20779.826884818885,
            "unit": "ns/iter",
            "extra": "iterations: 33677\ncpu: 20779.077708821966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21105.567854985205,
            "unit": "ns/iter",
            "extra": "iterations: 33100\ncpu: 21104.800604229546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48470.29263566269,
            "unit": "ns/iter",
            "extra": "iterations: 14448\ncpu: 48468.53543743081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155663.14187082576,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 155657.68374164842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130997.17142856284,
            "unit": "ns/iter",
            "extra": "iterations: 5320\ncpu: 130991.89849623917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130020.87207342348,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 130018.33676718421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 126901.36809705143,
            "unit": "ns/iter",
            "extra": "iterations: 5523\ncpu: 126899.87325728769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81672.93379102119,
            "unit": "ns/iter",
            "extra": "iterations: 8594\ncpu: 81670.33977193473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129002.14906146882,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 128998.6934118531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4884.544908319041,
            "unit": "ns/iter",
            "extra": "iterations: 141633\ncpu: 4884.374404270258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24774.457540034455,
            "unit": "ns/iter",
            "extra": "iterations: 28415\ncpu: 24774.253035368634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19852.706760041718,
            "unit": "ns/iter",
            "extra": "iterations: 34985\ncpu: 19852.516792911243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19577.027252042328,
            "unit": "ns/iter",
            "extra": "iterations: 36034\ncpu: 19576.655381028846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20072.717120081925,
            "unit": "ns/iter",
            "extra": "iterations: 34626\ncpu: 20072.197192860604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46386.31633666484,
            "unit": "ns/iter",
            "extra": "iterations: 15101\ncpu: 46385.848619296194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 150906.17894507575,
            "unit": "ns/iter",
            "extra": "iterations: 4588\ncpu: 150903.00784655492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 125552.51855170458,
            "unit": "ns/iter",
            "extra": "iterations: 5579\ncpu: 125548.03728266552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125829.68160631137,
            "unit": "ns/iter",
            "extra": "iterations: 5578\ncpu: 125824.86554320526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126024.92730210401,
            "unit": "ns/iter",
            "extra": "iterations: 5571\ncpu: 126020.67851373235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80988.83633425768,
            "unit": "ns/iter",
            "extra": "iterations: 8664\ncpu: 80988.7580794093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 124977.30471499106,
            "unit": "ns/iter",
            "extra": "iterations: 5684\ncpu: 124973.52216748634 ns\nthreads: 1"
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
        "date": 1705773449780,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1332.0893747922753,
            "unit": "ns/iter",
            "extra": "iterations: 529232\ncpu: 1332.0137482238413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15969.8912564018,
            "unit": "ns/iter",
            "extra": "iterations: 52141\ncpu: 15969.066569494264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33766.84662027755,
            "unit": "ns/iter",
            "extra": "iterations: 24573\ncpu: 33764.03776502667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50268.563340703164,
            "unit": "ns/iter",
            "extra": "iterations: 16727\ncpu: 50264.01626113472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55507.09630000483,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55500.82999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70433.94414658817,
            "unit": "ns/iter",
            "extra": "iterations: 12497\ncpu: 70432.54381051453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82502.23629872107,
            "unit": "ns/iter",
            "extra": "iterations: 10364\ncpu: 82496.87379390196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96435.51730336738,
            "unit": "ns/iter",
            "extra": "iterations: 8900\ncpu: 96429.59550561798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112107.62103353793,
            "unit": "ns/iter",
            "extra": "iterations: 7721\ncpu: 112094.70275871012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1133.518784616952,
            "unit": "ns/iter",
            "extra": "iterations: 619097\ncpu: 1133.4259413306809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 925.2443159800638,
            "unit": "ns/iter",
            "extra": "iterations: 758706\ncpu: 925.1416227102466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 913.0896907323516,
            "unit": "ns/iter",
            "extra": "iterations: 767426\ncpu: 913.0191054251499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 909.4485645048692,
            "unit": "ns/iter",
            "extra": "iterations: 770431\ncpu: 909.3528167999488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1871.1949400119918,
            "unit": "ns/iter",
            "extra": "iterations: 371740\ncpu: 1871.140851132512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5014.205333517653,
            "unit": "ns/iter",
            "extra": "iterations: 159107\ncpu: 5013.99247047584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25494.416251508886,
            "unit": "ns/iter",
            "extra": "iterations: 32317\ncpu: 25493.712287650487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19974.855779788137,
            "unit": "ns/iter",
            "extra": "iterations: 40979\ncpu: 19974.03792186238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19639.62049728272,
            "unit": "ns/iter",
            "extra": "iterations: 41586\ncpu: 19637.654499110253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19771.90584991146,
            "unit": "ns/iter",
            "extra": "iterations: 40616\ncpu: 19770.169391372903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64677.00830264677,
            "unit": "ns/iter",
            "extra": "iterations: 13851\ncpu: 64671.47498375566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 547633.3120000163,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547622.7999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 550593.6194357699,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 550558.1191222575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 547281.7212196606,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 547252.2713130062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 547388.2198142234,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 547351.2693498451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325263.1997052086,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 325226.1238025049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 538538.2837499719,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 538479.3749999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2315025.064676695,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2314765.1741293506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1055661.1588570897,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 1055563.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3232234.9268293814,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3231980.8362369435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7290.807978194627,
            "unit": "ns/iter",
            "extra": "iterations: 115565\ncpu: 7290.160515727076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39925.26581793951,
            "unit": "ns/iter",
            "extra": "iterations: 20894\ncpu: 39922.64765004306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31779.29732324335,
            "unit": "ns/iter",
            "extra": "iterations: 26039\ncpu: 31777.161181305088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30658.258302442875,
            "unit": "ns/iter",
            "extra": "iterations: 26980\ncpu: 30655.726464047504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30435.087241246743,
            "unit": "ns/iter",
            "extra": "iterations: 26570\ncpu: 30432.578095596335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76101.16419473043,
            "unit": "ns/iter",
            "extra": "iterations: 11462\ncpu: 76094.913627639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 584930.3180000334,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584900.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 580450.8001341947,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 580402.4144869227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 575463.8644517865,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 575435.0166112947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 577701.6345381583,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 577685.8099062913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 333970.27512421727,
            "unit": "ns/iter",
            "extra": "iterations: 2617\ncpu: 333960.6801681325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574192.7340354937,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 574176.6951942059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2476257.420212544,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2476131.382978712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1103426.5744680625,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1103385.6973995238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5089.821476118586,
            "unit": "ns/iter",
            "extra": "iterations: 157738\ncpu: 5089.686061697262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24215.523493417768,
            "unit": "ns/iter",
            "extra": "iterations: 34648\ncpu: 24214.37312398989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19523.877042291766,
            "unit": "ns/iter",
            "extra": "iterations: 42844\ncpu: 19523.00205396325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18865.146869327684,
            "unit": "ns/iter",
            "extra": "iterations: 44080\ncpu: 18864.79809437386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19306.606123398087,
            "unit": "ns/iter",
            "extra": "iterations: 42950\ncpu: 19305.778812572822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 61966.949500003924,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61961.48000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 572017.5200000312,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571948.2000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 566595.8320413594,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 566544.444444445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 570308.7780661673,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 570105.7105775445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566235.5106382597,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 566207.0921985811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 325855.0465896326,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 325836.7126351099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 557293.4738877916,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 557238.4268214048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 496.820945502368,
            "unit": "ns/iter",
            "extra": "iterations: 1408923\ncpu: 496.8015995196316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2993.8279834758687,
            "unit": "ns/iter",
            "extra": "iterations: 233838\ncpu: 2993.8110999923106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2420.4741718881514,
            "unit": "ns/iter",
            "extra": "iterations: 289665\ncpu: 2420.409783715664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2335.5762868014135,
            "unit": "ns/iter",
            "extra": "iterations: 300668\ncpu: 2335.5322149347276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1909.0246618214344,
            "unit": "ns/iter",
            "extra": "iterations: 364896\ncpu: 1908.9707752345819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17075.122816999497,
            "unit": "ns/iter",
            "extra": "iterations: 40426\ncpu: 17074.422401424974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30804.032813598686,
            "unit": "ns/iter",
            "extra": "iterations: 22704\ncpu: 30802.902572234245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7240.429273379131,
            "unit": "ns/iter",
            "extra": "iterations: 96873\ncpu: 7239.712819877517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7208.337162359064,
            "unit": "ns/iter",
            "extra": "iterations: 96108\ncpu: 7207.572730678074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7219.056477651142,
            "unit": "ns/iter",
            "extra": "iterations: 96941\ncpu: 7218.649487832855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14339.351471974553,
            "unit": "ns/iter",
            "extra": "iterations: 48846\ncpu: 14339.202800638765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13546.1799594158,
            "unit": "ns/iter",
            "extra": "iterations: 51745\ncpu: 13546.041163397598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5142.196688328168,
            "unit": "ns/iter",
            "extra": "iterations: 136185\ncpu: 5142.07511840507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26252.955825548626,
            "unit": "ns/iter",
            "extra": "iterations: 26667\ncpu: 26252.236847039116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21058.19330316747,
            "unit": "ns/iter",
            "extra": "iterations: 33150\ncpu: 21057.321266968243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21041.889002898668,
            "unit": "ns/iter",
            "extra": "iterations: 33136\ncpu: 21040.940366972485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21333.347297296365,
            "unit": "ns/iter",
            "extra": "iterations: 32560\ncpu: 21332.297297297213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48679.82770129058,
            "unit": "ns/iter",
            "extra": "iterations: 14382\ncpu: 48677.42316784911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155086.4763919764,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 155072.09354120085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129158.17852497603,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 129146.9069292221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129396.93787090758,
            "unit": "ns/iter",
            "extra": "iterations: 5392\ncpu: 129383.1973293761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129586.91880421022,
            "unit": "ns/iter",
            "extra": "iterations: 5419\ncpu: 129574.62631481816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81655.21551322968,
            "unit": "ns/iter",
            "extra": "iterations: 8612\ncpu: 81652.77519739897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 128850.81752899224,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 128844.13551832119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4915.561653102164,
            "unit": "ns/iter",
            "extra": "iterations: 143391\ncpu: 4915.3398748875115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24789.17129908367,
            "unit": "ns/iter",
            "extra": "iterations: 28243\ncpu: 24787.041036716993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19900.09697418022,
            "unit": "ns/iter",
            "extra": "iterations: 35164\ncpu: 19899.570583551715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19634.513337434273,
            "unit": "ns/iter",
            "extra": "iterations: 35764\ncpu: 19633.385527346076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20157.327712247083,
            "unit": "ns/iter",
            "extra": "iterations: 34335\ncpu: 20156.81083442558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 45999.29365340436,
            "unit": "ns/iter",
            "extra": "iterations: 15205\ncpu: 45996.757645511745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152236.89699198754,
            "unit": "ns/iter",
            "extra": "iterations: 4621\ncpu: 152232.61198874598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 123823.03077754148,
            "unit": "ns/iter",
            "extra": "iterations: 5556\ncpu: 123812.5089992809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 124293.73917692808,
            "unit": "ns/iter",
            "extra": "iterations: 5613\ncpu: 124290.13005522994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 124233.20014207644,
            "unit": "ns/iter",
            "extra": "iterations: 5631\ncpu: 124228.12999467374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80994.20281495091,
            "unit": "ns/iter",
            "extra": "iterations: 8668\ncpu: 80992.77803414894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130600.58266165678,
            "unit": "ns/iter",
            "extra": "iterations: 5583\ncpu: 130595.86243954967 ns\nthreads: 1"
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
        "date": 1705774899721,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1324.5867526888685,
            "unit": "ns/iter",
            "extra": "iterations: 527926\ncpu: 1324.536961619621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15926.372840884695,
            "unit": "ns/iter",
            "extra": "iterations: 51931\ncpu: 15925.789990564403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33843.06937614333,
            "unit": "ns/iter",
            "extra": "iterations: 24605\ncpu: 33840.76407234304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50427.29188224902,
            "unit": "ns/iter",
            "extra": "iterations: 16815\ncpu: 50425.94112399641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56412.2510000061,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56410.24999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70497.00478197874,
            "unit": "ns/iter",
            "extra": "iterations: 12338\ncpu: 70493.78343329551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83767.65717082097,
            "unit": "ns/iter",
            "extra": "iterations: 10215\ncpu: 83763.21096426823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96657.59044553165,
            "unit": "ns/iter",
            "extra": "iterations: 7452\ncpu: 96647.87976382184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111303.60252078956,
            "unit": "ns/iter",
            "extra": "iterations: 7696\ncpu: 111289.68295218276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1145.946091798347,
            "unit": "ns/iter",
            "extra": "iterations: 612059\ncpu: 1145.8828315570884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 936.2631866223433,
            "unit": "ns/iter",
            "extra": "iterations: 745661\ncpu: 936.1610705132763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 920.1214743105702,
            "unit": "ns/iter",
            "extra": "iterations: 755526\ncpu: 920.0362396529049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 912.0184618785139,
            "unit": "ns/iter",
            "extra": "iterations: 768990\ncpu: 911.9442385466651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1900.038863637975,
            "unit": "ns/iter",
            "extra": "iterations: 367207\ncpu: 1899.8739130789986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5115.141529283429,
            "unit": "ns/iter",
            "extra": "iterations: 155890\ncpu: 5114.4454422990575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25042.299598494497,
            "unit": "ns/iter",
            "extra": "iterations: 32627\ncpu: 25040.536978576045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19821.880903390174,
            "unit": "ns/iter",
            "extra": "iterations: 41311\ncpu: 19819.849434775228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19827.70830822771,
            "unit": "ns/iter",
            "extra": "iterations: 41489\ncpu: 19826.279254742214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19852.953490687287,
            "unit": "ns/iter",
            "extra": "iterations: 40164\ncpu: 19850.28383627127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64629.36260001016,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 64625.48999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 549156.7459999941,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549120.8999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 551146.3420382182,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 551106.1783439494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 537784.791959129,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 537711.6145500954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 551282.7132867202,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 551220.4068658625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 318718.27166359563,
            "unit": "ns/iter",
            "extra": "iterations: 2735\ncpu: 318702.0109689223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 552212.9525016139,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 552145.85180494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2317763.4748745235,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2317581.9095477387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1075786.2195121741,
            "unit": "ns/iter",
            "extra": "iterations: 861\ncpu: 1075653.6585365846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3218753.652777906,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3218555.902777778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7104.7273947062085,
            "unit": "ns/iter",
            "extra": "iterations: 118501\ncpu: 7103.746803824452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 38825.45734484718,
            "unit": "ns/iter",
            "extra": "iterations: 21076\ncpu: 38822.42835452647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31088.930124749404,
            "unit": "ns/iter",
            "extra": "iterations: 26533\ncpu: 31087.004861870195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30995.92972606195,
            "unit": "ns/iter",
            "extra": "iterations: 26539\ncpu: 30994.37808508235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30972.100562008272,
            "unit": "ns/iter",
            "extra": "iterations: 26690\ncpu: 30968.812289246944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75618.77217603027,
            "unit": "ns/iter",
            "extra": "iterations: 11544\ncpu: 75615.47990298025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 595953.9240000141,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595914.6000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 576224.382949933,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 576165.8322056854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 578417.317513338,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 578372.3262032096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 570985.1537441787,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 570924.6520874777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334108.91771908983,
            "unit": "ns/iter",
            "extra": "iterations: 2613\ncpu: 334090.9682357451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 573957.1778783872,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 573913.7128072451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2473317.5608465294,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2472972.7513227435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1101549.1230768904,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 1101468.9940828416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5251.229184731358,
            "unit": "ns/iter",
            "extra": "iterations: 160303\ncpu: 5250.752013374672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24844.256991843267,
            "unit": "ns/iter",
            "extra": "iterations: 33110\ncpu: 24842.325581395362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19561.305098898247,
            "unit": "ns/iter",
            "extra": "iterations: 41911\ncpu: 19559.39252224952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19187.103946167455,
            "unit": "ns/iter",
            "extra": "iterations: 42801\ncpu: 19185.35080956053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18749.035970217144,
            "unit": "ns/iter",
            "extra": "iterations: 42980\ncpu: 18747.059097254565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62123.84169999723,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62117.86000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 575929.2960000266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574028.5999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 571543.5957854268,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 571495.5938697322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 559719.4622336971,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 559651.7107811491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 554454.7725836897,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 554415.0979153527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 322414.59213939606,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 322395.8101594358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 557710.8356599321,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 557633.1218274101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 499.6616833660496,
            "unit": "ns/iter",
            "extra": "iterations: 1401347\ncpu: 499.62878573258706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2976.8714186184334,
            "unit": "ns/iter",
            "extra": "iterations: 232522\ncpu: 2976.6770456128897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2354.8481326743668,
            "unit": "ns/iter",
            "extra": "iterations: 298234\ncpu: 2354.674182018144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2322.648864815704,
            "unit": "ns/iter",
            "extra": "iterations: 300568\ncpu: 2322.5240211865466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1898.9342182468256,
            "unit": "ns/iter",
            "extra": "iterations: 369829\ncpu: 1898.859472891513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16959.957471266003,
            "unit": "ns/iter",
            "extra": "iterations: 41760\ncpu: 16958.606321839005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30694.06595819562,
            "unit": "ns/iter",
            "extra": "iterations: 22772\ncpu: 30693.096785526184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7250.106381656773,
            "unit": "ns/iter",
            "extra": "iterations: 96605\ncpu: 7249.603022617993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7251.115416860537,
            "unit": "ns/iter",
            "extra": "iterations: 96615\ncpu: 7251.032448377578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7177.081868006994,
            "unit": "ns/iter",
            "extra": "iterations: 96338\ncpu: 7177.016338308732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14213.077647677557,
            "unit": "ns/iter",
            "extra": "iterations: 49364\ncpu: 14212.130297382506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13357.47418843924,
            "unit": "ns/iter",
            "extra": "iterations: 52399\ncpu: 13357.05834080792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5131.781399190946,
            "unit": "ns/iter",
            "extra": "iterations: 136779\ncpu: 5131.536273843254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26161.827787331178,
            "unit": "ns/iter",
            "extra": "iterations: 26746\ncpu: 26161.123158603124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20938.742949523505,
            "unit": "ns/iter",
            "extra": "iterations: 33402\ncpu: 20937.970780192678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20770.235580348744,
            "unit": "ns/iter",
            "extra": "iterations: 33704\ncpu: 20769.19653453567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21241.17800983887,
            "unit": "ns/iter",
            "extra": "iterations: 33133\ncpu: 21240.15935774007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48461.03102063161,
            "unit": "ns/iter",
            "extra": "iterations: 14442\ncpu: 48459.700872455294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155141.36239427235,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 155136.58642376788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 127798.89537443242,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 127795.37444934009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 127457.48780038886,
            "unit": "ns/iter",
            "extra": "iterations: 5451\ncpu: 127452.06384149619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 128171.85123817077,
            "unit": "ns/iter",
            "extra": "iterations: 5492\ncpu: 128163.61981063215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81301.01637250245,
            "unit": "ns/iter",
            "extra": "iterations: 8612\ncpu: 81297.18996748765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 128499.15012769589,
            "unit": "ns/iter",
            "extra": "iterations: 5482\ncpu: 128493.94381612448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4986.846347714907,
            "unit": "ns/iter",
            "extra": "iterations: 140063\ncpu: 4986.683849410622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25096.10015108906,
            "unit": "ns/iter",
            "extra": "iterations: 27798\ncpu: 25094.679473343513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20156.6417669754,
            "unit": "ns/iter",
            "extra": "iterations: 34726\ncpu: 20156.21724356382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20027.88464303048,
            "unit": "ns/iter",
            "extra": "iterations: 34779\ncpu: 20026.843785042784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20518.240413022948,
            "unit": "ns/iter",
            "extra": "iterations: 34187\ncpu: 20517.655834088764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46270.70504836859,
            "unit": "ns/iter",
            "extra": "iterations: 15094\ncpu: 46267.649397110756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 147268.0980886467,
            "unit": "ns/iter",
            "extra": "iterations: 4761\ncpu: 147263.91514387613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 123623.44252975022,
            "unit": "ns/iter",
            "extra": "iterations: 5629\ncpu: 123617.99609166934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126266.67578539038,
            "unit": "ns/iter",
            "extra": "iterations: 5666\ncpu: 126260.81891987311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126349.89530491589,
            "unit": "ns/iter",
            "extra": "iterations: 5559\ncpu: 126345.8535707864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80861.3805024295,
            "unit": "ns/iter",
            "extra": "iterations: 8678\ncpu: 80855.35837750729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 125646.88165891386,
            "unit": "ns/iter",
            "extra": "iterations: 5594\ncpu: 125642.7958526978 ns\nthreads: 1"
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
        "date": 1705778441024,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1420.9490799474618,
            "unit": "ns/iter",
            "extra": "iterations: 509210\ncpu: 1420.8287347067026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15782.735329477773,
            "unit": "ns/iter",
            "extra": "iterations: 52401\ncpu: 15782.454533310432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33918.29952007643,
            "unit": "ns/iter",
            "extra": "iterations: 24379\ncpu: 33917.91705976455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50229.832965192814,
            "unit": "ns/iter",
            "extra": "iterations: 16751\ncpu: 50229.425108948686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56061.70659999634,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56062.09 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70447.47690087205,
            "unit": "ns/iter",
            "extra": "iterations: 12468\ncpu: 70447.32916265642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83617.53403698496,
            "unit": "ns/iter",
            "extra": "iterations: 10327\ncpu: 83615.3190665247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96989.20349493608,
            "unit": "ns/iter",
            "extra": "iterations: 8870\ncpu: 96986.48252536642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111131.04939220249,
            "unit": "ns/iter",
            "extra": "iterations: 7815\ncpu: 111130.24952015367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1097.172019251173,
            "unit": "ns/iter",
            "extra": "iterations: 615030\ncpu: 1097.1342861323856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 897.232833360946,
            "unit": "ns/iter",
            "extra": "iterations: 781443\ncpu: 897.2119527591898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 883.4311541791444,
            "unit": "ns/iter",
            "extra": "iterations: 792234\ncpu: 883.4285072339738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 879.1028930759004,
            "unit": "ns/iter",
            "extra": "iterations: 801016\ncpu: 879.0986696894932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1818.3163529214469,
            "unit": "ns/iter",
            "extra": "iterations: 385876\ncpu: 1818.279706434192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5162.466381753387,
            "unit": "ns/iter",
            "extra": "iterations: 154901\ncpu: 5162.499919303292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24670.460764828727,
            "unit": "ns/iter",
            "extra": "iterations: 33210\ncpu: 24669.95784402292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19666.95909644405,
            "unit": "ns/iter",
            "extra": "iterations: 41879\ncpu: 19666.434251056624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18893.9953355368,
            "unit": "ns/iter",
            "extra": "iterations: 42663\ncpu: 18893.56585331553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19053.525284790896,
            "unit": "ns/iter",
            "extra": "iterations: 42575\ncpu: 19053.359953024104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64405.50500000199,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 64405.1900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 530989.788999932,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530949.8000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 550276.0244200153,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 550257.0818070822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 544325.0108073375,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 544316.2110616663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 541572.8599003755,
            "unit": "ns/iter",
            "extra": "iterations: 1606\ncpu: 541536.7995018683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 322983.3752751523,
            "unit": "ns/iter",
            "extra": "iterations: 2726\ncpu: 322973.40425531956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 544121.1174642949,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 544097.1410814165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2326771.2247474324,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2326687.8787878756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1051721.2247445704,
            "unit": "ns/iter",
            "extra": "iterations: 881\ncpu: 1051649.6027241773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3232490.266666725,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3232384.2105263122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7254.372519332961,
            "unit": "ns/iter",
            "extra": "iterations: 116249\ncpu: 7254.164767008747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39514.2882364233,
            "unit": "ns/iter",
            "extra": "iterations: 20844\ncpu: 39512.3296872002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31326.235985946314,
            "unit": "ns/iter",
            "extra": "iterations: 26188\ncpu: 31325.790438368665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31056.34549960434,
            "unit": "ns/iter",
            "extra": "iterations: 26631\ncpu: 31055.96860801334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30192.654238775613,
            "unit": "ns/iter",
            "extra": "iterations: 27331\ncpu: 30192.08225092389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75678.44426158779,
            "unit": "ns/iter",
            "extra": "iterations: 11545\ncpu: 75675.5911650067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 596035.727999947,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596028.1999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 587662.7323369407,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 587648.6413043488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 579946.521183583,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 579944.1829186296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 579400.637384361,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 579393.3289299856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 330360.5413964397,
            "unit": "ns/iter",
            "extra": "iterations: 2621\ncpu: 330357.03929797583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 567125.3551769556,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 567123.2634338123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2467632.252659619,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2467580.319148926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1124104.206310685,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 1124100.7281553333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5208.37654695907,
            "unit": "ns/iter",
            "extra": "iterations: 153123\ncpu: 5208.305741136195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25040.92154450617,
            "unit": "ns/iter",
            "extra": "iterations: 33331\ncpu: 25040.27781944737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19855.145878537143,
            "unit": "ns/iter",
            "extra": "iterations: 41939\ncpu: 19854.541119244586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19238.921150426264,
            "unit": "ns/iter",
            "extra": "iterations: 43323\ncpu: 19238.674607021585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19711.592045802267,
            "unit": "ns/iter",
            "extra": "iterations: 42267\ncpu: 19711.566943478447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63810.75918012467,
            "unit": "ns/iter",
            "extra": "iterations: 13807\ncpu: 63808.886796552644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 571738.3680000694,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571722.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569372.9134677629,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 569365.0618087213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 563176.9457013769,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 563170.3296703276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 555399.7365079398,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 555386.2222222193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 324990.2841287365,
            "unit": "ns/iter",
            "extra": "iterations: 2703\ncpu: 324983.9437661853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559906.0444300837,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 559899.806825501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 495.9404292380358,
            "unit": "ns/iter",
            "extra": "iterations: 1412270\ncpu: 495.9325058239612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2994.291619592518,
            "unit": "ns/iter",
            "extra": "iterations: 234559\ncpu: 2994.3050575761595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2263.9856037124537,
            "unit": "ns/iter",
            "extra": "iterations: 309038\ncpu: 2263.948446469374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2229.6544679608487,
            "unit": "ns/iter",
            "extra": "iterations: 315334\ncpu: 2229.5975061363524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1915.1606818740004,
            "unit": "ns/iter",
            "extra": "iterations: 366930\ncpu: 1915.0922519281592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17165.391724037527,
            "unit": "ns/iter",
            "extra": "iterations: 40817\ncpu: 17165.342871842855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30359.062778924064,
            "unit": "ns/iter",
            "extra": "iterations: 23304\ncpu: 30357.34637830393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7210.750487030643,
            "unit": "ns/iter",
            "extra": "iterations: 97530\ncpu: 7210.302471034522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7230.1504637977205,
            "unit": "ns/iter",
            "extra": "iterations: 97133\ncpu: 7229.697425179914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7304.54750258981,
            "unit": "ns/iter",
            "extra": "iterations: 96500\ncpu: 7304.434196891188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14296.397604644551,
            "unit": "ns/iter",
            "extra": "iterations: 48928\ncpu: 14296.470323741192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13499.871364203074,
            "unit": "ns/iter",
            "extra": "iterations: 52155\ncpu: 13474.876809510142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5158.878894309879,
            "unit": "ns/iter",
            "extra": "iterations: 136096\ncpu: 5158.854044204051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25771.866288974463,
            "unit": "ns/iter",
            "extra": "iterations: 27006\ncpu: 25771.284159075938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20727.944326507146,
            "unit": "ns/iter",
            "extra": "iterations: 33445\ncpu: 20727.483928838417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20776.76505091403,
            "unit": "ns/iter",
            "extra": "iterations: 33586\ncpu: 20776.207348299926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21136.805179462557,
            "unit": "ns/iter",
            "extra": "iterations: 33015\ncpu: 21136.256247160665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48640.888255726466,
            "unit": "ns/iter",
            "extra": "iterations: 14390\ncpu: 48639.013203613256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155620.84397322856,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 155617.90178571272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131117.77001127964,
            "unit": "ns/iter",
            "extra": "iterations: 5322\ncpu: 131114.44945509272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130668.01543324918,
            "unit": "ns/iter",
            "extra": "iterations: 5378\ncpu: 130667.19970249083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130450.33495328536,
            "unit": "ns/iter",
            "extra": "iterations: 5350\ncpu: 130446.07476635432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82396.4401598878,
            "unit": "ns/iter",
            "extra": "iterations: 8506\ncpu: 82392.26428403411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129905.40570581186,
            "unit": "ns/iter",
            "extra": "iterations: 5398\ncpu: 129903.66802519572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4967.776847918595,
            "unit": "ns/iter",
            "extra": "iterations: 141240\ncpu: 4967.635938827548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25199.749461049978,
            "unit": "ns/iter",
            "extra": "iterations: 27832\ncpu: 25199.335297498837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20114.178321276584,
            "unit": "ns/iter",
            "extra": "iterations: 34836\ncpu: 20113.563554943034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19843.890017591024,
            "unit": "ns/iter",
            "extra": "iterations: 35242\ncpu: 19843.785823733288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20397.756636650985,
            "unit": "ns/iter",
            "extra": "iterations: 34204\ncpu: 20397.205005262487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46202.743059232314,
            "unit": "ns/iter",
            "extra": "iterations: 15128\ncpu: 46202.49206768935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151413.2131041895,
            "unit": "ns/iter",
            "extra": "iterations: 4655\ncpu: 151406.76691729532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126448.93865031503,
            "unit": "ns/iter",
            "extra": "iterations: 5542\ncpu: 126445.39877300743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126669.95627514379,
            "unit": "ns/iter",
            "extra": "iterations: 5466\ncpu: 126666.64837175258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127661.73361177734,
            "unit": "ns/iter",
            "extra": "iterations: 5507\ncpu: 127661.0495732688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81718.96544125417,
            "unit": "ns/iter",
            "extra": "iterations: 8623\ncpu: 81717.52290386213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126425.70710166956,
            "unit": "ns/iter",
            "extra": "iterations: 5548\ncpu: 126419.10598413697 ns\nthreads: 1"
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
        "date": 1705953638905,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1339.5612297342093,
            "unit": "ns/iter",
            "extra": "iterations: 486414\ncpu: 1339.5058530387696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15590.503338992674,
            "unit": "ns/iter",
            "extra": "iterations: 53010\ncpu: 15590.222599509529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33628.90686849727,
            "unit": "ns/iter",
            "extra": "iterations: 24707\ncpu: 33625.91977981949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50024.0866599482,
            "unit": "ns/iter",
            "extra": "iterations: 16859\ncpu: 50020.61213595114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55667.96169999862,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55664.629999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70529.49194260033,
            "unit": "ns/iter",
            "extra": "iterations: 12473\ncpu: 70524.9739437185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82287.3191183454,
            "unit": "ns/iter",
            "extra": "iterations: 10435\ncpu: 82281.67704839486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96186.05631929266,
            "unit": "ns/iter",
            "extra": "iterations: 9020\ncpu: 96180.60975609753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113127.41505968742,
            "unit": "ns/iter",
            "extra": "iterations: 7623\ncpu: 113121.52695789066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1155.9710728140697,
            "unit": "ns/iter",
            "extra": "iterations: 620005\ncpu: 1155.9390650075395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 918.7642642662314,
            "unit": "ns/iter",
            "extra": "iterations: 761641\ncpu: 918.7503036207346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 918.2628465044152,
            "unit": "ns/iter",
            "extra": "iterations: 763807\ncpu: 918.2212260427046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 913.9105698261917,
            "unit": "ns/iter",
            "extra": "iterations: 767392\ncpu: 913.860712647513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1895.0693447862666,
            "unit": "ns/iter",
            "extra": "iterations: 369040\ncpu: 1894.9477021461098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5067.68915658023,
            "unit": "ns/iter",
            "extra": "iterations: 155403\ncpu: 5067.532158323837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25670.09285357971,
            "unit": "ns/iter",
            "extra": "iterations: 32072\ncpu: 25669.5934148167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19887.45429528734,
            "unit": "ns/iter",
            "extra": "iterations: 41790\ncpu: 19886.209619526195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19495.88355102387,
            "unit": "ns/iter",
            "extra": "iterations: 42568\ncpu: 19495.099605337375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20510.88057575413,
            "unit": "ns/iter",
            "extra": "iterations: 40017\ncpu: 20510.428068071076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64484.54240574391,
            "unit": "ns/iter",
            "extra": "iterations: 13925\ncpu: 64482.17594254937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 529607.186000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529581.0999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 532934.1936488204,
            "unit": "ns/iter",
            "extra": "iterations: 1606\ncpu: 532912.2042341201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 537574.5033971159,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 537572.6374305129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 543977.2449999936,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 543925.8125000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 320605.6244525527,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 320597.8832116794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 551951.4420199557,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 551905.9850374075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2327303.7825001096,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2327149.500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1074285.2695450117,
            "unit": "ns/iter",
            "extra": "iterations: 857\ncpu: 1074263.9439906671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3228124.1979169473,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3227994.4444444375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7357.998400402495,
            "unit": "ns/iter",
            "extra": "iterations: 115029\ncpu: 7357.902789731264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39603.657026771456,
            "unit": "ns/iter",
            "extra": "iterations: 20920\ncpu: 39601.95028680689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30628.261061455818,
            "unit": "ns/iter",
            "extra": "iterations: 26963\ncpu: 30627.519192968077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31021.6157916485,
            "unit": "ns/iter",
            "extra": "iterations: 26647\ncpu: 31020.82035501163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30922.516659856672,
            "unit": "ns/iter",
            "extra": "iterations: 26921\ncpu: 30921.544519148607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75751.43167459399,
            "unit": "ns/iter",
            "extra": "iterations: 11555\ncpu: 75746.611856339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 580670.0939999701,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580646.2000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 588678.6556603379,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 588665.768194068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 584623.3071764096,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 584602.7498323289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 598466.0094276117,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 598448.0808080782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 331688.31331291224,
            "unit": "ns/iter",
            "extra": "iterations: 2614\ncpu: 331675.4016832435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 568324.8672798671,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 568296.5834428372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2470015.8133333996,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2469913.333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1100154.378537811,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1100115.094339619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5037.661896153132,
            "unit": "ns/iter",
            "extra": "iterations: 158194\ncpu: 5037.536821876911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24080.65870525188,
            "unit": "ns/iter",
            "extra": "iterations: 34416\ncpu: 24079.28870292902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19294.33842922138,
            "unit": "ns/iter",
            "extra": "iterations: 42845\ncpu: 19293.824250204238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18989.796404616918,
            "unit": "ns/iter",
            "extra": "iterations: 44279\ncpu: 18989.229657399646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19348.879734095484,
            "unit": "ns/iter",
            "extra": "iterations: 42722\ncpu: 19348.321707785257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 61763.690099996886,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61760.07000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 559672.6079999144,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559651.500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 560520.2390744847,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 560499.6786632397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 555861.5368826289,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 555826.4913406047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 556269.5762820661,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 556240.3205128218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 322287.03393584077,
            "unit": "ns/iter",
            "extra": "iterations: 2711\ncpu: 322267.35521947703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 551971.6113924403,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 551958.1012658195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 507.6815839453624,
            "unit": "ns/iter",
            "extra": "iterations: 1384770\ncpu: 507.6645941203247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2988.3203055073022,
            "unit": "ns/iter",
            "extra": "iterations: 234626\ncpu: 2988.287743046377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2341.3448003002495,
            "unit": "ns/iter",
            "extra": "iterations: 298248\ncpu: 2341.2944931734446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2359.7384037650463,
            "unit": "ns/iter",
            "extra": "iterations: 299580\ncpu: 2359.7349622805255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1958.3397141931182,
            "unit": "ns/iter",
            "extra": "iterations: 364162\ncpu: 1958.246879136209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16611.579450706846,
            "unit": "ns/iter",
            "extra": "iterations: 41617\ncpu: 16609.585025350025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30842.81755981485,
            "unit": "ns/iter",
            "extra": "iterations: 22654\ncpu: 30840.44318884068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7214.675034004418,
            "unit": "ns/iter",
            "extra": "iterations: 97044\ncpu: 7214.415110671424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7189.602145799453,
            "unit": "ns/iter",
            "extra": "iterations: 97586\ncpu: 7189.206443547288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7253.494091281226,
            "unit": "ns/iter",
            "extra": "iterations: 96383\ncpu: 7253.129701295921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14422.06479601281,
            "unit": "ns/iter",
            "extra": "iterations: 48753\ncpu: 14421.38535064531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13702.959205960935,
            "unit": "ns/iter",
            "extra": "iterations: 51282\ncpu: 13700.571350571288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5180.080683977042,
            "unit": "ns/iter",
            "extra": "iterations: 134215\ncpu: 5179.815966918791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26075.673289841146,
            "unit": "ns/iter",
            "extra": "iterations: 26825\ncpu: 26074.326188257124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20990.342243250034,
            "unit": "ns/iter",
            "extra": "iterations: 33184\ncpu: 20989.217695274885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20784.30531289012,
            "unit": "ns/iter",
            "extra": "iterations: 33654\ncpu: 20782.74796458047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21208.656707351773,
            "unit": "ns/iter",
            "extra": "iterations: 32934\ncpu: 21207.48770267784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49588.27433314734,
            "unit": "ns/iter",
            "extra": "iterations: 14096\ncpu: 49585.15181611718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 149889.2153977432,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 149875.11196416983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 126092.15687679504,
            "unit": "ns/iter",
            "extra": "iterations: 5584\ncpu: 126081.82306590177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 125635.23424069332,
            "unit": "ns/iter",
            "extra": "iterations: 5584\ncpu: 125627.77578796491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 126354.18034266809,
            "unit": "ns/iter",
            "extra": "iterations: 5545\ncpu: 126352.0829576206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81379.64725363285,
            "unit": "ns/iter",
            "extra": "iterations: 8757\ncpu: 81376.54447870352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129671.83788270889,
            "unit": "ns/iter",
            "extra": "iterations: 5422\ncpu: 129667.29988933931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4996.308316056395,
            "unit": "ns/iter",
            "extra": "iterations: 141329\ncpu: 4996.156485929986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25194.186597531723,
            "unit": "ns/iter",
            "extra": "iterations: 27771\ncpu: 25194.13056785892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20063.503629945644,
            "unit": "ns/iter",
            "extra": "iterations: 34849\ncpu: 20062.68185600737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19896.79827203755,
            "unit": "ns/iter",
            "extra": "iterations: 35186\ncpu: 19896.293980560284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20207.98891679031,
            "unit": "ns/iter",
            "extra": "iterations: 34647\ncpu: 20206.71631021431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46691.194010933854,
            "unit": "ns/iter",
            "extra": "iterations: 14994\ncpu: 46691.149793250945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151273.47099268745,
            "unit": "ns/iter",
            "extra": "iterations: 4654\ncpu: 151267.6622260415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128108.59945701483,
            "unit": "ns/iter",
            "extra": "iterations: 5525\ncpu: 128101.99095022601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 123236.77775824055,
            "unit": "ns/iter",
            "extra": "iterations: 5692\ncpu: 123231.95713281755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 123912.05557523147,
            "unit": "ns/iter",
            "extra": "iterations: 5650\ncpu: 123907.27433628388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80668.43638044798,
            "unit": "ns/iter",
            "extra": "iterations: 8653\ncpu: 80665.28371663058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 124854.5697239508,
            "unit": "ns/iter",
            "extra": "iterations: 5615\ncpu: 124852.69813000999 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}