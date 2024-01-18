window.BENCHMARK_DATA = {
  "lastUpdate": 1705575667433,
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
      }
    ]
  }
}