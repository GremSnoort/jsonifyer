window.BENCHMARK_DATA = {
  "lastUpdate": 1702493007088,
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
      }
    ]
  }
}