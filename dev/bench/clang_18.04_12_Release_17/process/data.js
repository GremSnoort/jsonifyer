window.BENCHMARK_DATA = {
  "lastUpdate": 1702490301934,
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
      }
    ]
  }
}