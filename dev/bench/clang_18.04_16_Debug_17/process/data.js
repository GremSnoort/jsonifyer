window.BENCHMARK_DATA = {
  "lastUpdate": 1702503292024,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-16 18.04 Debug c++-17": [
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
        "date": 1702489607714,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15676.157154025092,
            "unit": "ns/iter",
            "extra": "iterations: 44765\ncpu: 15675.433932759972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124927.26349067554,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 124927.18717835614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235299.50040550038,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 235288.59151121933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342468.26921549137,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 342419.67343687767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451495.44618601404,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 451464.31556948804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559867.7061855599,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 559853.0283505152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 537907.4499999206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537890 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 624202.1649999287,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624153.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 713516.1505376525,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 713490.3993855601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12674.451623371355,
            "unit": "ns/iter",
            "extra": "iterations: 55471\ncpu: 12673.319392114794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10526.604756257875,
            "unit": "ns/iter",
            "extra": "iterations: 66607\ncpu: 10526.255498671335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10532.312226942195,
            "unit": "ns/iter",
            "extra": "iterations: 66378\ncpu: 10532.117569074084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10710.727723075399,
            "unit": "ns/iter",
            "extra": "iterations: 65404\ncpu: 10710.6858907712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18318.06674347335,
            "unit": "ns/iter",
            "extra": "iterations: 38191\ncpu: 18316.77096698174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51409.35680000212,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51406.22999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263890.6880592483,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 263882.1351434744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 210693.68209407417,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 210675.54375316142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 209852.62687298717,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 209846.229427659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 212859.07281795525,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 212843.74064837932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 627038.2799159861,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 626986.2841147651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3911612.651260854,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3911416.3865546305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3128313.7979797707,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3128074.0740740807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3089169.029900129,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3089027.242524915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3125859.3602694143,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3125715.15151514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1812496.0996093175,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1812370.1171874965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3036356.1503266734,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3036215.3594771237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11434127.41935428,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11433504.30107526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5104841.669999587,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5104770.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14837338.271429092,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 14836355.714285737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58073.73620000362,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58069.889999999796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290426.99186440156,
            "unit": "ns/iter",
            "extra": "iterations: 2950\ncpu: 290417.52542372793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237161.51136995447,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 237152.46810870795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231673.50054171763,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 231654.71289274163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 238097.74011141292,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 238087.325905291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 596651.0137551189,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 596611.0729023371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3953861.713674953,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3953730.341880341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3206555.759450182,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3206405.4982817927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3150640.44594589,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150440.878378398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3189459.8976111594,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3189450.8532423195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1867484.5330661777,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1867319.8396793616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3086942.5714287967,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3086821.5946843745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11687912.857142933,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11686978.021978049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5197619.620000751,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5197667.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55190.23894758307,
            "unit": "ns/iter",
            "extra": "iterations: 14861\ncpu: 55185.875782248826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 256102.07957243564,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 256085.86698337292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202619.89426267066,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202603.79326695015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 218231.57982982666,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 218222.04704704732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201810.36202410562,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 201794.98699456186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 555281.1811272717,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 555247.5617479462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3946669.279660925,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3946454.237288135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3142491.14237285,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3142185.4237288134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3092257.01324478,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3092178.1456953613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3164529.7619045894,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3164396.9387754896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1829983.1725489283,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1829844.7058823546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3082932.4323431826,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3082827.3927392666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6312.659925026497,
            "unit": "ns/iter",
            "extra": "iterations: 110705\ncpu: 6312.587507339348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36144.66057791606,
            "unit": "ns/iter",
            "extra": "iterations: 19380\ncpu: 36144.1021671826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27945.904255745605,
            "unit": "ns/iter",
            "extra": "iterations: 25025\ncpu: 27945.626373626306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27812.112553596653,
            "unit": "ns/iter",
            "extra": "iterations: 25188\ncpu: 27811.795299349003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22002.81079469065,
            "unit": "ns/iter",
            "extra": "iterations: 31849\ncpu: 22002.20415083675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 165816.2066017557,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 165815.34077416224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262607.1485371236,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 262594.2985746438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66259.5963918016,
            "unit": "ns/iter",
            "extra": "iterations: 10587\ncpu: 66258.28846698765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65854.45566525312,
            "unit": "ns/iter",
            "extra": "iterations: 10635\ncpu: 65852.38363892857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66105.21665558044,
            "unit": "ns/iter",
            "extra": "iterations: 10519\ncpu: 66105.74199068385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132230.03266617225,
            "unit": "ns/iter",
            "extra": "iterations: 5296\ncpu: 132227.19033232762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122440.38721540749,
            "unit": "ns/iter",
            "extra": "iterations: 5710\ncpu: 122434.16812609421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39820.829004571824,
            "unit": "ns/iter",
            "extra": "iterations: 17480\ncpu: 39821.212814644794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 192832.37218250977,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 192830.26388125645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157460.65849820175,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157456.94694244838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157398.61305516746,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 157387.03454463807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159061.62269729475,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 159058.01682965428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 311248.8631111066,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 311237.2444444418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1120206.9520000804,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1120218.5599999893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 936679.0909090905,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936634.8930481375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 936302.0942126665,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 936257.4697173571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 940462.7302013148,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 940422.2818791871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 607437.513443185,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 607406.5047701654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920572.4894459584,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 920499.6042216388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40729.08486998766,
            "unit": "ns/iter",
            "extra": "iterations: 17191\ncpu: 40727.45041009825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197709.68672315514,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 197687.6553672316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161282.78697546816,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 161277.66567301285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 160166.49006623597,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 160166.45352820406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 160391.42359680665,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160388.01832760515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 309396.26006190514,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 309393.3657673571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1120095.8295820553,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1120106.5916398752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 935633.0080429531,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 935605.2278820255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 927072.957672053,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 927049.9999999816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 936915.514705956,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936878.3422460032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 605905.0663175606,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 605900.3490401483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 919529.5349143979,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 919538.4716732583 ns\nthreads: 1"
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
        "date": 1702489607714,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15676.157154025092,
            "unit": "ns/iter",
            "extra": "iterations: 44765\ncpu: 15675.433932759972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124927.26349067554,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 124927.18717835614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235299.50040550038,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 235288.59151121933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342468.26921549137,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 342419.67343687767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451495.44618601404,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 451464.31556948804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559867.7061855599,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 559853.0283505152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 537907.4499999206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537890 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 624202.1649999287,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624153.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 713516.1505376525,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 713490.3993855601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12674.451623371355,
            "unit": "ns/iter",
            "extra": "iterations: 55471\ncpu: 12673.319392114794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10526.604756257875,
            "unit": "ns/iter",
            "extra": "iterations: 66607\ncpu: 10526.255498671335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10532.312226942195,
            "unit": "ns/iter",
            "extra": "iterations: 66378\ncpu: 10532.117569074084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10710.727723075399,
            "unit": "ns/iter",
            "extra": "iterations: 65404\ncpu: 10710.6858907712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18318.06674347335,
            "unit": "ns/iter",
            "extra": "iterations: 38191\ncpu: 18316.77096698174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51409.35680000212,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51406.22999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263890.6880592483,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 263882.1351434744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 210693.68209407417,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 210675.54375316142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 209852.62687298717,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 209846.229427659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 212859.07281795525,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 212843.74064837932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 627038.2799159861,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 626986.2841147651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3911612.651260854,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3911416.3865546305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3128313.7979797707,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3128074.0740740807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3089169.029900129,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3089027.242524915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3125859.3602694143,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3125715.15151514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1812496.0996093175,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1812370.1171874965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3036356.1503266734,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3036215.3594771237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11434127.41935428,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11433504.30107526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5104841.669999587,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5104770.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14837338.271429092,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 14836355.714285737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58073.73620000362,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58069.889999999796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290426.99186440156,
            "unit": "ns/iter",
            "extra": "iterations: 2950\ncpu: 290417.52542372793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237161.51136995447,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 237152.46810870795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231673.50054171763,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 231654.71289274163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 238097.74011141292,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 238087.325905291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 596651.0137551189,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 596611.0729023371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3953861.713674953,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3953730.341880341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3206555.759450182,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3206405.4982817927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3150640.44594589,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150440.878378398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3189459.8976111594,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3189450.8532423195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1867484.5330661777,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1867319.8396793616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3086942.5714287967,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3086821.5946843745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11687912.857142933,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11686978.021978049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5197619.620000751,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5197667.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55190.23894758307,
            "unit": "ns/iter",
            "extra": "iterations: 14861\ncpu: 55185.875782248826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 256102.07957243564,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 256085.86698337292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202619.89426267066,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202603.79326695015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 218231.57982982666,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 218222.04704704732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201810.36202410562,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 201794.98699456186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 555281.1811272717,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 555247.5617479462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3946669.279660925,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3946454.237288135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3142491.14237285,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3142185.4237288134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3092257.01324478,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3092178.1456953613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3164529.7619045894,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3164396.9387754896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1829983.1725489283,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1829844.7058823546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3082932.4323431826,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3082827.3927392666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6312.659925026497,
            "unit": "ns/iter",
            "extra": "iterations: 110705\ncpu: 6312.587507339348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36144.66057791606,
            "unit": "ns/iter",
            "extra": "iterations: 19380\ncpu: 36144.1021671826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27945.904255745605,
            "unit": "ns/iter",
            "extra": "iterations: 25025\ncpu: 27945.626373626306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27812.112553596653,
            "unit": "ns/iter",
            "extra": "iterations: 25188\ncpu: 27811.795299349003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22002.81079469065,
            "unit": "ns/iter",
            "extra": "iterations: 31849\ncpu: 22002.20415083675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 165816.2066017557,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 165815.34077416224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262607.1485371236,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 262594.2985746438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66259.5963918016,
            "unit": "ns/iter",
            "extra": "iterations: 10587\ncpu: 66258.28846698765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65854.45566525312,
            "unit": "ns/iter",
            "extra": "iterations: 10635\ncpu: 65852.38363892857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66105.21665558044,
            "unit": "ns/iter",
            "extra": "iterations: 10519\ncpu: 66105.74199068385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132230.03266617225,
            "unit": "ns/iter",
            "extra": "iterations: 5296\ncpu: 132227.19033232762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122440.38721540749,
            "unit": "ns/iter",
            "extra": "iterations: 5710\ncpu: 122434.16812609421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39820.829004571824,
            "unit": "ns/iter",
            "extra": "iterations: 17480\ncpu: 39821.212814644794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 192832.37218250977,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 192830.26388125645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157460.65849820175,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157456.94694244838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157398.61305516746,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 157387.03454463807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159061.62269729475,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 159058.01682965428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 311248.8631111066,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 311237.2444444418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1120206.9520000804,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1120218.5599999893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 936679.0909090905,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936634.8930481375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 936302.0942126665,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 936257.4697173571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 940462.7302013148,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 940422.2818791871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 607437.513443185,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 607406.5047701654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920572.4894459584,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 920499.6042216388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40729.08486998766,
            "unit": "ns/iter",
            "extra": "iterations: 17191\ncpu: 40727.45041009825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197709.68672315514,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 197687.6553672316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161282.78697546816,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 161277.66567301285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 160166.49006623597,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 160166.45352820406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 160391.42359680665,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160388.01832760515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 309396.26006190514,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 309393.3657673571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1120095.8295820553,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1120106.5916398752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 935633.0080429531,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 935605.2278820255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 927072.957672053,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 927049.9999999816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 936915.514705956,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936878.3422460032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 605905.0663175606,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 605900.3490401483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 919529.5349143979,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 919538.4716732583 ns\nthreads: 1"
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
        "date": 1702489607714,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15676.157154025092,
            "unit": "ns/iter",
            "extra": "iterations: 44765\ncpu: 15675.433932759972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124927.26349067554,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 124927.18717835614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235299.50040550038,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 235288.59151121933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342468.26921549137,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 342419.67343687767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451495.44618601404,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 451464.31556948804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559867.7061855599,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 559853.0283505152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 537907.4499999206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537890 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 624202.1649999287,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624153.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 713516.1505376525,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 713490.3993855601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12674.451623371355,
            "unit": "ns/iter",
            "extra": "iterations: 55471\ncpu: 12673.319392114794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10526.604756257875,
            "unit": "ns/iter",
            "extra": "iterations: 66607\ncpu: 10526.255498671335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10532.312226942195,
            "unit": "ns/iter",
            "extra": "iterations: 66378\ncpu: 10532.117569074084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10710.727723075399,
            "unit": "ns/iter",
            "extra": "iterations: 65404\ncpu: 10710.6858907712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18318.06674347335,
            "unit": "ns/iter",
            "extra": "iterations: 38191\ncpu: 18316.77096698174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51409.35680000212,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51406.22999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263890.6880592483,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 263882.1351434744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 210693.68209407417,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 210675.54375316142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 209852.62687298717,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 209846.229427659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 212859.07281795525,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 212843.74064837932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 627038.2799159861,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 626986.2841147651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3911612.651260854,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3911416.3865546305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3128313.7979797707,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3128074.0740740807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3089169.029900129,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3089027.242524915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3125859.3602694143,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3125715.15151514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1812496.0996093175,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1812370.1171874965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3036356.1503266734,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3036215.3594771237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11434127.41935428,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11433504.30107526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5104841.669999587,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5104770.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14837338.271429092,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 14836355.714285737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58073.73620000362,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58069.889999999796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290426.99186440156,
            "unit": "ns/iter",
            "extra": "iterations: 2950\ncpu: 290417.52542372793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237161.51136995447,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 237152.46810870795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231673.50054171763,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 231654.71289274163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 238097.74011141292,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 238087.325905291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 596651.0137551189,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 596611.0729023371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3953861.713674953,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3953730.341880341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3206555.759450182,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3206405.4982817927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3150640.44594589,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150440.878378398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3189459.8976111594,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3189450.8532423195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1867484.5330661777,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1867319.8396793616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3086942.5714287967,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3086821.5946843745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11687912.857142933,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11686978.021978049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5197619.620000751,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5197667.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55190.23894758307,
            "unit": "ns/iter",
            "extra": "iterations: 14861\ncpu: 55185.875782248826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 256102.07957243564,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 256085.86698337292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202619.89426267066,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202603.79326695015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 218231.57982982666,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 218222.04704704732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201810.36202410562,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 201794.98699456186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 555281.1811272717,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 555247.5617479462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3946669.279660925,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3946454.237288135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3142491.14237285,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3142185.4237288134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3092257.01324478,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3092178.1456953613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3164529.7619045894,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3164396.9387754896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1829983.1725489283,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1829844.7058823546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3082932.4323431826,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3082827.3927392666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6312.659925026497,
            "unit": "ns/iter",
            "extra": "iterations: 110705\ncpu: 6312.587507339348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36144.66057791606,
            "unit": "ns/iter",
            "extra": "iterations: 19380\ncpu: 36144.1021671826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27945.904255745605,
            "unit": "ns/iter",
            "extra": "iterations: 25025\ncpu: 27945.626373626306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27812.112553596653,
            "unit": "ns/iter",
            "extra": "iterations: 25188\ncpu: 27811.795299349003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22002.81079469065,
            "unit": "ns/iter",
            "extra": "iterations: 31849\ncpu: 22002.20415083675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 165816.2066017557,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 165815.34077416224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262607.1485371236,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 262594.2985746438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66259.5963918016,
            "unit": "ns/iter",
            "extra": "iterations: 10587\ncpu: 66258.28846698765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65854.45566525312,
            "unit": "ns/iter",
            "extra": "iterations: 10635\ncpu: 65852.38363892857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66105.21665558044,
            "unit": "ns/iter",
            "extra": "iterations: 10519\ncpu: 66105.74199068385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132230.03266617225,
            "unit": "ns/iter",
            "extra": "iterations: 5296\ncpu: 132227.19033232762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122440.38721540749,
            "unit": "ns/iter",
            "extra": "iterations: 5710\ncpu: 122434.16812609421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39820.829004571824,
            "unit": "ns/iter",
            "extra": "iterations: 17480\ncpu: 39821.212814644794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 192832.37218250977,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 192830.26388125645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157460.65849820175,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157456.94694244838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157398.61305516746,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 157387.03454463807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159061.62269729475,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 159058.01682965428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 311248.8631111066,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 311237.2444444418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1120206.9520000804,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1120218.5599999893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 936679.0909090905,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936634.8930481375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 936302.0942126665,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 936257.4697173571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 940462.7302013148,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 940422.2818791871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 607437.513443185,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 607406.5047701654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920572.4894459584,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 920499.6042216388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40729.08486998766,
            "unit": "ns/iter",
            "extra": "iterations: 17191\ncpu: 40727.45041009825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197709.68672315514,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 197687.6553672316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161282.78697546816,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 161277.66567301285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 160166.49006623597,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 160166.45352820406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 160391.42359680665,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160388.01832760515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 309396.26006190514,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 309393.3657673571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1120095.8295820553,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1120106.5916398752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 935633.0080429531,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 935605.2278820255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 927072.957672053,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 927049.9999999816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 936915.514705956,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936878.3422460032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 605905.0663175606,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 605900.3490401483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 919529.5349143979,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 919538.4716732583 ns\nthreads: 1"
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
        "date": 1702489607714,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15676.157154025092,
            "unit": "ns/iter",
            "extra": "iterations: 44765\ncpu: 15675.433932759972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124927.26349067554,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 124927.18717835614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235299.50040550038,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 235288.59151121933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342468.26921549137,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 342419.67343687767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451495.44618601404,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 451464.31556948804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559867.7061855599,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 559853.0283505152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 537907.4499999206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537890 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 624202.1649999287,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624153.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 713516.1505376525,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 713490.3993855601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12674.451623371355,
            "unit": "ns/iter",
            "extra": "iterations: 55471\ncpu: 12673.319392114794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10526.604756257875,
            "unit": "ns/iter",
            "extra": "iterations: 66607\ncpu: 10526.255498671335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10532.312226942195,
            "unit": "ns/iter",
            "extra": "iterations: 66378\ncpu: 10532.117569074084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10710.727723075399,
            "unit": "ns/iter",
            "extra": "iterations: 65404\ncpu: 10710.6858907712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18318.06674347335,
            "unit": "ns/iter",
            "extra": "iterations: 38191\ncpu: 18316.77096698174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51409.35680000212,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51406.22999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263890.6880592483,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 263882.1351434744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 210693.68209407417,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 210675.54375316142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 209852.62687298717,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 209846.229427659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 212859.07281795525,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 212843.74064837932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 627038.2799159861,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 626986.2841147651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3911612.651260854,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3911416.3865546305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3128313.7979797707,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3128074.0740740807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3089169.029900129,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3089027.242524915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3125859.3602694143,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3125715.15151514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1812496.0996093175,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1812370.1171874965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3036356.1503266734,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3036215.3594771237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11434127.41935428,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11433504.30107526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5104841.669999587,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5104770.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14837338.271429092,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 14836355.714285737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58073.73620000362,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58069.889999999796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290426.99186440156,
            "unit": "ns/iter",
            "extra": "iterations: 2950\ncpu: 290417.52542372793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237161.51136995447,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 237152.46810870795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231673.50054171763,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 231654.71289274163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 238097.74011141292,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 238087.325905291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 596651.0137551189,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 596611.0729023371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3953861.713674953,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3953730.341880341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3206555.759450182,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3206405.4982817927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3150640.44594589,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150440.878378398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3189459.8976111594,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3189450.8532423195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1867484.5330661777,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1867319.8396793616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3086942.5714287967,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3086821.5946843745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11687912.857142933,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11686978.021978049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5197619.620000751,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5197667.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55190.23894758307,
            "unit": "ns/iter",
            "extra": "iterations: 14861\ncpu: 55185.875782248826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 256102.07957243564,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 256085.86698337292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202619.89426267066,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202603.79326695015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 218231.57982982666,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 218222.04704704732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201810.36202410562,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 201794.98699456186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 555281.1811272717,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 555247.5617479462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3946669.279660925,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3946454.237288135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3142491.14237285,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3142185.4237288134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3092257.01324478,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3092178.1456953613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3164529.7619045894,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3164396.9387754896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1829983.1725489283,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1829844.7058823546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3082932.4323431826,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3082827.3927392666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6312.659925026497,
            "unit": "ns/iter",
            "extra": "iterations: 110705\ncpu: 6312.587507339348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36144.66057791606,
            "unit": "ns/iter",
            "extra": "iterations: 19380\ncpu: 36144.1021671826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27945.904255745605,
            "unit": "ns/iter",
            "extra": "iterations: 25025\ncpu: 27945.626373626306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27812.112553596653,
            "unit": "ns/iter",
            "extra": "iterations: 25188\ncpu: 27811.795299349003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22002.81079469065,
            "unit": "ns/iter",
            "extra": "iterations: 31849\ncpu: 22002.20415083675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 165816.2066017557,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 165815.34077416224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262607.1485371236,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 262594.2985746438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66259.5963918016,
            "unit": "ns/iter",
            "extra": "iterations: 10587\ncpu: 66258.28846698765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65854.45566525312,
            "unit": "ns/iter",
            "extra": "iterations: 10635\ncpu: 65852.38363892857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66105.21665558044,
            "unit": "ns/iter",
            "extra": "iterations: 10519\ncpu: 66105.74199068385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132230.03266617225,
            "unit": "ns/iter",
            "extra": "iterations: 5296\ncpu: 132227.19033232762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122440.38721540749,
            "unit": "ns/iter",
            "extra": "iterations: 5710\ncpu: 122434.16812609421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39820.829004571824,
            "unit": "ns/iter",
            "extra": "iterations: 17480\ncpu: 39821.212814644794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 192832.37218250977,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 192830.26388125645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157460.65849820175,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157456.94694244838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157398.61305516746,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 157387.03454463807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159061.62269729475,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 159058.01682965428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 311248.8631111066,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 311237.2444444418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1120206.9520000804,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1120218.5599999893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 936679.0909090905,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936634.8930481375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 936302.0942126665,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 936257.4697173571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 940462.7302013148,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 940422.2818791871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 607437.513443185,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 607406.5047701654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920572.4894459584,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 920499.6042216388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40729.08486998766,
            "unit": "ns/iter",
            "extra": "iterations: 17191\ncpu: 40727.45041009825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197709.68672315514,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 197687.6553672316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161282.78697546816,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 161277.66567301285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 160166.49006623597,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 160166.45352820406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 160391.42359680665,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160388.01832760515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 309396.26006190514,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 309393.3657673571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1120095.8295820553,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1120106.5916398752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 935633.0080429531,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 935605.2278820255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 927072.957672053,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 927049.9999999816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 936915.514705956,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936878.3422460032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 605905.0663175606,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 605900.3490401483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 919529.5349143979,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 919538.4716732583 ns\nthreads: 1"
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
        "date": 1702489607714,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15676.157154025092,
            "unit": "ns/iter",
            "extra": "iterations: 44765\ncpu: 15675.433932759972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124927.26349067554,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 124927.18717835614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235299.50040550038,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 235288.59151121933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342468.26921549137,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 342419.67343687767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451495.44618601404,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 451464.31556948804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559867.7061855599,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 559853.0283505152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 537907.4499999206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537890 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 624202.1649999287,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624153.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 713516.1505376525,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 713490.3993855601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12674.451623371355,
            "unit": "ns/iter",
            "extra": "iterations: 55471\ncpu: 12673.319392114794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10526.604756257875,
            "unit": "ns/iter",
            "extra": "iterations: 66607\ncpu: 10526.255498671335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10532.312226942195,
            "unit": "ns/iter",
            "extra": "iterations: 66378\ncpu: 10532.117569074084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10710.727723075399,
            "unit": "ns/iter",
            "extra": "iterations: 65404\ncpu: 10710.6858907712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18318.06674347335,
            "unit": "ns/iter",
            "extra": "iterations: 38191\ncpu: 18316.77096698174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51409.35680000212,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51406.22999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263890.6880592483,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 263882.1351434744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 210693.68209407417,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 210675.54375316142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 209852.62687298717,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 209846.229427659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 212859.07281795525,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 212843.74064837932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 627038.2799159861,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 626986.2841147651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3911612.651260854,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3911416.3865546305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3128313.7979797707,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3128074.0740740807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3089169.029900129,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3089027.242524915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3125859.3602694143,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3125715.15151514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1812496.0996093175,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1812370.1171874965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3036356.1503266734,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3036215.3594771237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11434127.41935428,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11433504.30107526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5104841.669999587,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5104770.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14837338.271429092,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 14836355.714285737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58073.73620000362,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58069.889999999796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290426.99186440156,
            "unit": "ns/iter",
            "extra": "iterations: 2950\ncpu: 290417.52542372793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237161.51136995447,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 237152.46810870795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231673.50054171763,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 231654.71289274163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 238097.74011141292,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 238087.325905291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 596651.0137551189,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 596611.0729023371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3953861.713674953,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3953730.341880341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3206555.759450182,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3206405.4982817927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3150640.44594589,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150440.878378398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3189459.8976111594,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3189450.8532423195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1867484.5330661777,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1867319.8396793616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3086942.5714287967,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3086821.5946843745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11687912.857142933,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11686978.021978049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5197619.620000751,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5197667.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55190.23894758307,
            "unit": "ns/iter",
            "extra": "iterations: 14861\ncpu: 55185.875782248826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 256102.07957243564,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 256085.86698337292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202619.89426267066,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202603.79326695015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 218231.57982982666,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 218222.04704704732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201810.36202410562,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 201794.98699456186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 555281.1811272717,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 555247.5617479462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3946669.279660925,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3946454.237288135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3142491.14237285,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3142185.4237288134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3092257.01324478,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3092178.1456953613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3164529.7619045894,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3164396.9387754896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1829983.1725489283,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1829844.7058823546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3082932.4323431826,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3082827.3927392666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6312.659925026497,
            "unit": "ns/iter",
            "extra": "iterations: 110705\ncpu: 6312.587507339348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36144.66057791606,
            "unit": "ns/iter",
            "extra": "iterations: 19380\ncpu: 36144.1021671826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27945.904255745605,
            "unit": "ns/iter",
            "extra": "iterations: 25025\ncpu: 27945.626373626306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27812.112553596653,
            "unit": "ns/iter",
            "extra": "iterations: 25188\ncpu: 27811.795299349003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22002.81079469065,
            "unit": "ns/iter",
            "extra": "iterations: 31849\ncpu: 22002.20415083675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 165816.2066017557,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 165815.34077416224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262607.1485371236,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 262594.2985746438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66259.5963918016,
            "unit": "ns/iter",
            "extra": "iterations: 10587\ncpu: 66258.28846698765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65854.45566525312,
            "unit": "ns/iter",
            "extra": "iterations: 10635\ncpu: 65852.38363892857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66105.21665558044,
            "unit": "ns/iter",
            "extra": "iterations: 10519\ncpu: 66105.74199068385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132230.03266617225,
            "unit": "ns/iter",
            "extra": "iterations: 5296\ncpu: 132227.19033232762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122440.38721540749,
            "unit": "ns/iter",
            "extra": "iterations: 5710\ncpu: 122434.16812609421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39820.829004571824,
            "unit": "ns/iter",
            "extra": "iterations: 17480\ncpu: 39821.212814644794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 192832.37218250977,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 192830.26388125645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157460.65849820175,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157456.94694244838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157398.61305516746,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 157387.03454463807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159061.62269729475,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 159058.01682965428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 311248.8631111066,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 311237.2444444418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1120206.9520000804,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1120218.5599999893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 936679.0909090905,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936634.8930481375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 936302.0942126665,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 936257.4697173571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 940462.7302013148,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 940422.2818791871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 607437.513443185,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 607406.5047701654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920572.4894459584,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 920499.6042216388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40729.08486998766,
            "unit": "ns/iter",
            "extra": "iterations: 17191\ncpu: 40727.45041009825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197709.68672315514,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 197687.6553672316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161282.78697546816,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 161277.66567301285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 160166.49006623597,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 160166.45352820406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 160391.42359680665,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160388.01832760515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 309396.26006190514,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 309393.3657673571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1120095.8295820553,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1120106.5916398752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 935633.0080429531,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 935605.2278820255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 927072.957672053,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 927049.9999999816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 936915.514705956,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936878.3422460032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 605905.0663175606,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 605900.3490401483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 919529.5349143979,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 919538.4716732583 ns\nthreads: 1"
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
        "date": 1702489607714,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15676.157154025092,
            "unit": "ns/iter",
            "extra": "iterations: 44765\ncpu: 15675.433932759972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124927.26349067554,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 124927.18717835614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235299.50040550038,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 235288.59151121933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342468.26921549137,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 342419.67343687767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451495.44618601404,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 451464.31556948804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559867.7061855599,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 559853.0283505152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 537907.4499999206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537890 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 624202.1649999287,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624153.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 713516.1505376525,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 713490.3993855601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12674.451623371355,
            "unit": "ns/iter",
            "extra": "iterations: 55471\ncpu: 12673.319392114794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10526.604756257875,
            "unit": "ns/iter",
            "extra": "iterations: 66607\ncpu: 10526.255498671335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10532.312226942195,
            "unit": "ns/iter",
            "extra": "iterations: 66378\ncpu: 10532.117569074084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10710.727723075399,
            "unit": "ns/iter",
            "extra": "iterations: 65404\ncpu: 10710.6858907712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18318.06674347335,
            "unit": "ns/iter",
            "extra": "iterations: 38191\ncpu: 18316.77096698174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51409.35680000212,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51406.22999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263890.6880592483,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 263882.1351434744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 210693.68209407417,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 210675.54375316142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 209852.62687298717,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 209846.229427659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 212859.07281795525,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 212843.74064837932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 627038.2799159861,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 626986.2841147651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3911612.651260854,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3911416.3865546305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3128313.7979797707,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3128074.0740740807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3089169.029900129,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3089027.242524915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3125859.3602694143,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3125715.15151514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1812496.0996093175,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1812370.1171874965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3036356.1503266734,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3036215.3594771237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11434127.41935428,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11433504.30107526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5104841.669999587,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5104770.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14837338.271429092,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 14836355.714285737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58073.73620000362,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58069.889999999796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290426.99186440156,
            "unit": "ns/iter",
            "extra": "iterations: 2950\ncpu: 290417.52542372793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237161.51136995447,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 237152.46810870795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231673.50054171763,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 231654.71289274163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 238097.74011141292,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 238087.325905291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 596651.0137551189,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 596611.0729023371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3953861.713674953,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3953730.341880341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3206555.759450182,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3206405.4982817927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3150640.44594589,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150440.878378398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3189459.8976111594,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3189450.8532423195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1867484.5330661777,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1867319.8396793616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3086942.5714287967,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3086821.5946843745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11687912.857142933,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11686978.021978049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5197619.620000751,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5197667.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55190.23894758307,
            "unit": "ns/iter",
            "extra": "iterations: 14861\ncpu: 55185.875782248826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 256102.07957243564,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 256085.86698337292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202619.89426267066,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202603.79326695015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 218231.57982982666,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 218222.04704704732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201810.36202410562,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 201794.98699456186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 555281.1811272717,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 555247.5617479462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3946669.279660925,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3946454.237288135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3142491.14237285,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3142185.4237288134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3092257.01324478,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3092178.1456953613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3164529.7619045894,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3164396.9387754896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1829983.1725489283,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1829844.7058823546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3082932.4323431826,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3082827.3927392666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6312.659925026497,
            "unit": "ns/iter",
            "extra": "iterations: 110705\ncpu: 6312.587507339348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36144.66057791606,
            "unit": "ns/iter",
            "extra": "iterations: 19380\ncpu: 36144.1021671826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27945.904255745605,
            "unit": "ns/iter",
            "extra": "iterations: 25025\ncpu: 27945.626373626306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27812.112553596653,
            "unit": "ns/iter",
            "extra": "iterations: 25188\ncpu: 27811.795299349003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22002.81079469065,
            "unit": "ns/iter",
            "extra": "iterations: 31849\ncpu: 22002.20415083675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 165816.2066017557,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 165815.34077416224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262607.1485371236,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 262594.2985746438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66259.5963918016,
            "unit": "ns/iter",
            "extra": "iterations: 10587\ncpu: 66258.28846698765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65854.45566525312,
            "unit": "ns/iter",
            "extra": "iterations: 10635\ncpu: 65852.38363892857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66105.21665558044,
            "unit": "ns/iter",
            "extra": "iterations: 10519\ncpu: 66105.74199068385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132230.03266617225,
            "unit": "ns/iter",
            "extra": "iterations: 5296\ncpu: 132227.19033232762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122440.38721540749,
            "unit": "ns/iter",
            "extra": "iterations: 5710\ncpu: 122434.16812609421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39820.829004571824,
            "unit": "ns/iter",
            "extra": "iterations: 17480\ncpu: 39821.212814644794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 192832.37218250977,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 192830.26388125645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157460.65849820175,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157456.94694244838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157398.61305516746,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 157387.03454463807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159061.62269729475,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 159058.01682965428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 311248.8631111066,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 311237.2444444418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1120206.9520000804,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1120218.5599999893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 936679.0909090905,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936634.8930481375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 936302.0942126665,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 936257.4697173571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 940462.7302013148,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 940422.2818791871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 607437.513443185,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 607406.5047701654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920572.4894459584,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 920499.6042216388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40729.08486998766,
            "unit": "ns/iter",
            "extra": "iterations: 17191\ncpu: 40727.45041009825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197709.68672315514,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 197687.6553672316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161282.78697546816,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 161277.66567301285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 160166.49006623597,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 160166.45352820406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 160391.42359680665,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160388.01832760515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 309396.26006190514,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 309393.3657673571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1120095.8295820553,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1120106.5916398752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 935633.0080429531,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 935605.2278820255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 927072.957672053,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 927049.9999999816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 936915.514705956,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936878.3422460032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 605905.0663175606,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 605900.3490401483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 919529.5349143979,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 919538.4716732583 ns\nthreads: 1"
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
        "date": 1702489607714,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15676.157154025092,
            "unit": "ns/iter",
            "extra": "iterations: 44765\ncpu: 15675.433932759972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124927.26349067554,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 124927.18717835614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235299.50040550038,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 235288.59151121933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342468.26921549137,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 342419.67343687767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451495.44618601404,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 451464.31556948804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559867.7061855599,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 559853.0283505152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 537907.4499999206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537890 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 624202.1649999287,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624153.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 713516.1505376525,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 713490.3993855601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12674.451623371355,
            "unit": "ns/iter",
            "extra": "iterations: 55471\ncpu: 12673.319392114794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10526.604756257875,
            "unit": "ns/iter",
            "extra": "iterations: 66607\ncpu: 10526.255498671335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10532.312226942195,
            "unit": "ns/iter",
            "extra": "iterations: 66378\ncpu: 10532.117569074084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10710.727723075399,
            "unit": "ns/iter",
            "extra": "iterations: 65404\ncpu: 10710.6858907712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18318.06674347335,
            "unit": "ns/iter",
            "extra": "iterations: 38191\ncpu: 18316.77096698174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51409.35680000212,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51406.22999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263890.6880592483,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 263882.1351434744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 210693.68209407417,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 210675.54375316142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 209852.62687298717,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 209846.229427659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 212859.07281795525,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 212843.74064837932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 627038.2799159861,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 626986.2841147651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3911612.651260854,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3911416.3865546305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3128313.7979797707,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3128074.0740740807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3089169.029900129,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3089027.242524915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3125859.3602694143,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3125715.15151514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1812496.0996093175,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1812370.1171874965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3036356.1503266734,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3036215.3594771237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11434127.41935428,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11433504.30107526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5104841.669999587,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5104770.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14837338.271429092,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 14836355.714285737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58073.73620000362,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58069.889999999796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290426.99186440156,
            "unit": "ns/iter",
            "extra": "iterations: 2950\ncpu: 290417.52542372793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237161.51136995447,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 237152.46810870795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231673.50054171763,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 231654.71289274163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 238097.74011141292,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 238087.325905291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 596651.0137551189,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 596611.0729023371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3953861.713674953,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3953730.341880341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3206555.759450182,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3206405.4982817927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3150640.44594589,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150440.878378398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3189459.8976111594,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3189450.8532423195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1867484.5330661777,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1867319.8396793616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3086942.5714287967,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3086821.5946843745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11687912.857142933,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11686978.021978049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5197619.620000751,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5197667.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55190.23894758307,
            "unit": "ns/iter",
            "extra": "iterations: 14861\ncpu: 55185.875782248826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 256102.07957243564,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 256085.86698337292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202619.89426267066,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202603.79326695015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 218231.57982982666,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 218222.04704704732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201810.36202410562,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 201794.98699456186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 555281.1811272717,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 555247.5617479462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3946669.279660925,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3946454.237288135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3142491.14237285,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3142185.4237288134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3092257.01324478,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3092178.1456953613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3164529.7619045894,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3164396.9387754896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1829983.1725489283,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1829844.7058823546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3082932.4323431826,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3082827.3927392666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6312.659925026497,
            "unit": "ns/iter",
            "extra": "iterations: 110705\ncpu: 6312.587507339348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36144.66057791606,
            "unit": "ns/iter",
            "extra": "iterations: 19380\ncpu: 36144.1021671826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27945.904255745605,
            "unit": "ns/iter",
            "extra": "iterations: 25025\ncpu: 27945.626373626306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27812.112553596653,
            "unit": "ns/iter",
            "extra": "iterations: 25188\ncpu: 27811.795299349003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22002.81079469065,
            "unit": "ns/iter",
            "extra": "iterations: 31849\ncpu: 22002.20415083675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 165816.2066017557,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 165815.34077416224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262607.1485371236,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 262594.2985746438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66259.5963918016,
            "unit": "ns/iter",
            "extra": "iterations: 10587\ncpu: 66258.28846698765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65854.45566525312,
            "unit": "ns/iter",
            "extra": "iterations: 10635\ncpu: 65852.38363892857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66105.21665558044,
            "unit": "ns/iter",
            "extra": "iterations: 10519\ncpu: 66105.74199068385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132230.03266617225,
            "unit": "ns/iter",
            "extra": "iterations: 5296\ncpu: 132227.19033232762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122440.38721540749,
            "unit": "ns/iter",
            "extra": "iterations: 5710\ncpu: 122434.16812609421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39820.829004571824,
            "unit": "ns/iter",
            "extra": "iterations: 17480\ncpu: 39821.212814644794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 192832.37218250977,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 192830.26388125645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157460.65849820175,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157456.94694244838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157398.61305516746,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 157387.03454463807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159061.62269729475,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 159058.01682965428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 311248.8631111066,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 311237.2444444418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1120206.9520000804,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1120218.5599999893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 936679.0909090905,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936634.8930481375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 936302.0942126665,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 936257.4697173571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 940462.7302013148,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 940422.2818791871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 607437.513443185,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 607406.5047701654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920572.4894459584,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 920499.6042216388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40729.08486998766,
            "unit": "ns/iter",
            "extra": "iterations: 17191\ncpu: 40727.45041009825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197709.68672315514,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 197687.6553672316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161282.78697546816,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 161277.66567301285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 160166.49006623597,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 160166.45352820406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 160391.42359680665,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160388.01832760515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 309396.26006190514,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 309393.3657673571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1120095.8295820553,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1120106.5916398752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 935633.0080429531,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 935605.2278820255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 927072.957672053,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 927049.9999999816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 936915.514705956,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936878.3422460032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 605905.0663175606,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 605900.3490401483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 919529.5349143979,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 919538.4716732583 ns\nthreads: 1"
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
        "date": 1702492238478,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15539.374161150145,
            "unit": "ns/iter",
            "extra": "iterations: 45002\ncpu: 15539.511577263233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124303.70288248034,
            "unit": "ns/iter",
            "extra": "iterations: 6765\ncpu: 124299.896526238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 234022.5414987968,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 234014.39699167348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 343787.5630185827,
            "unit": "ns/iter",
            "extra": "iterations: 2531\ncpu: 343777.8743579611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 448757.9751809598,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 448743.43329886213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 556887.5125079824,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 556864.5926876203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 535268.3040000557,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535244.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 619398.5459999568,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 619376.8000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 705959.5439266238,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 705939.6485867075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12352.670350429245,
            "unit": "ns/iter",
            "extra": "iterations: 56645\ncpu: 12352.611881013332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10369.867636407927,
            "unit": "ns/iter",
            "extra": "iterations: 66272\ncpu: 10369.486359246735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10247.245342341666,
            "unit": "ns/iter",
            "extra": "iterations: 68382\ncpu: 10247.22587815508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10398.917805159745,
            "unit": "ns/iter",
            "extra": "iterations: 67194\ncpu: 10398.736494329834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17782.964432216348,
            "unit": "ns/iter",
            "extra": "iterations: 39249\ncpu: 17782.86835333383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50151.95429999722,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50151.75000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 259943.81854224714,
            "unit": "ns/iter",
            "extra": "iterations: 3279\ncpu: 259942.05550472744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205173.5828709216,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 205174.69240048263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202761.43392644977,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 202759.05100830377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 201726.25593543437,
            "unit": "ns/iter",
            "extra": "iterations: 4212\ncpu: 201718.3523266854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 581877.8926480529,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 581861.5484710477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3787608.4000001764,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3787500.408163265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3114708.9127517156,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3114588.255033554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3039729.085245929,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3039634.754098353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3063563.7532893755,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3063548.3552631526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1778472.9749034331,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1778429.3436293474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2990111.6601939034,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2990077.3462783224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11378843.936170675,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11378657.446808508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5056254.6900005145,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5055966.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14508588.232877329,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14508256.16438352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60663.330899990346,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60663.07000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 303532.77283952426,
            "unit": "ns/iter",
            "extra": "iterations: 2835\ncpu: 303527.76014109404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 244329.61332572895,
            "unit": "ns/iter",
            "extra": "iterations: 3512\ncpu: 244327.05011389533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 237301.9878318517,
            "unit": "ns/iter",
            "extra": "iterations: 3616\ncpu: 237295.7411504416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 239008.48354714745,
            "unit": "ns/iter",
            "extra": "iterations: 3586\ncpu: 239007.30619074136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 565878.2425227107,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 565868.595578677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3860661.7573220995,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3860551.4644351606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3188265.5821916987,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3188229.4520547893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3114929.0066891094,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3114842.8093645372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3120544.889632197,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3120504.347826078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1838294.574552729,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1838268.5884691917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3040989.088524421,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3040900.327868841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11626310.630434921,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11625989.130434733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5175680.770000782,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5175438.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53427.7820320103,
            "unit": "ns/iter",
            "extra": "iterations: 15305\ncpu: 53427.14799085285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 249716.07296261963,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 249707.23742277018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 198785.45733548357,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 198785.98000465042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 198802.96586950796,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 198789.52867425117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 195420.29581032236,
            "unit": "ns/iter",
            "extra": "iterations: 4344\ncpu: 195417.86372007395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 520780.750743557,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 520764.90184413793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3825168.524589791,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3824965.1639344087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3123649.3079587207,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3123586.8512110654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3053533.036065764,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3053460.655737707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3091796.910298867,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3091800.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1788636.4633204634,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1788556.370656369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3005985.336569393,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3005880.9061488593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6163.258246165205,
            "unit": "ns/iter",
            "extra": "iterations: 113477\ncpu: 6163.065643258105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35818.078360120744,
            "unit": "ns/iter",
            "extra": "iterations: 19538\ncpu: 35817.842153751764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27775.037089982765,
            "unit": "ns/iter",
            "extra": "iterations: 25182\ncpu: 27773.909935668296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28335.235008499207,
            "unit": "ns/iter",
            "extra": "iterations: 24714\ncpu: 28334.405600064812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21809.20867723504,
            "unit": "ns/iter",
            "extra": "iterations: 32107\ncpu: 21808.671006322482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 159067.28580815194,
            "unit": "ns/iter",
            "extra": "iterations: 4566\ncpu: 159068.83486640372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 255426.38970052605,
            "unit": "ns/iter",
            "extra": "iterations: 2738\ncpu: 255429.21840759253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65797.80069438489,
            "unit": "ns/iter",
            "extra": "iterations: 10657\ncpu: 65794.29482968964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65111.129800089875,
            "unit": "ns/iter",
            "extra": "iterations: 10755\ncpu: 65109.725708971884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65016.83946953065,
            "unit": "ns/iter",
            "extra": "iterations: 10783\ncpu: 65013.49346193127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132378.6148176113,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 132374.78737478744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 120953.73906277136,
            "unit": "ns/iter",
            "extra": "iterations: 5783\ncpu: 120952.68891578732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39261.12821951652,
            "unit": "ns/iter",
            "extra": "iterations: 17821\ncpu: 39261.539756467464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 194399.70895521116,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 194399.44720840047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 156448.9843540492,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 156448.72597228558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 156120.62795362662,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 156115.49264378205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 156851.74490481443,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 156847.30123180282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 300228.22460352123,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 300217.9597085336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1098514.1462263344,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1098455.0314465237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 916960.4881889442,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 916934.9081364789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 918712.1679790922,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 918689.8950131232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 918271.1061598574,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 918267.1035386759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 597066.9880749829,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 597027.9386712118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 902693.6829896611,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 902630.7989690679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40041.99714334908,
            "unit": "ns/iter",
            "extra": "iterations: 17503\ncpu: 40039.83888476245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 195753.8437935728,
            "unit": "ns/iter",
            "extra": "iterations: 3585\ncpu: 195745.02092049975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159446.1635535541,
            "unit": "ns/iter",
            "extra": "iterations: 4390\ncpu: 159435.8086560366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 157612.73796669015,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 157609.04183535872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 158995.91984558653,
            "unit": "ns/iter",
            "extra": "iterations: 4404\ncpu: 158989.48683015344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 297326.0480442302,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 297319.0051020431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1097741.465517297,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1097736.3636363812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 931323.3612218047,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 931288.5790172472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 908768.8171205092,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 908767.0557717148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 911049.9309895973,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 911010.2864583284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 594242.8736217555,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 594234.0966921148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 904203.175710692,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 904192.6356589206 ns\nthreads: 1"
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
        "date": 1702503285013,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15880.231114862529,
            "unit": "ns/iter",
            "extra": "iterations: 43844\ncpu: 15879.146519478152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124820.76091443954,
            "unit": "ns/iter",
            "extra": "iterations: 6780\ncpu: 124816.1946902655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 237430.1635819394,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 237424.46924333146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 346630.4528680349,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 346617.40874448454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 452426.0088772271,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 452405.37859007815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 560876.7097607933,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 560857.6599870719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 540739.99000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540712.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 625062.9400000208,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 710843.5354391108,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 710816.4869029267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12471.691465263688,
            "unit": "ns/iter",
            "extra": "iterations: 56065\ncpu: 12471.160260412043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10497.491367284414,
            "unit": "ns/iter",
            "extra": "iterations: 66665\ncpu: 10497.341933548332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10484.867433224395,
            "unit": "ns/iter",
            "extra": "iterations: 67053\ncpu: 10484.342236738077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10537.429587352548,
            "unit": "ns/iter",
            "extra": "iterations: 66231\ncpu: 10537.431112318995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17869.32934023347,
            "unit": "ns/iter",
            "extra": "iterations: 38650\ncpu: 17868.92108667526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50059.72229999998,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50056.67000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 259155.2705343443,
            "unit": "ns/iter",
            "extra": "iterations: 3275\ncpu: 259137.3740458012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 204736.1764989303,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 204727.7871418254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 204485.1972135339,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 204473.28849387457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 206087.16489873052,
            "unit": "ns/iter",
            "extra": "iterations: 4148\ncpu: 206079.41176470544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 583705.5735775186,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 583658.6003924148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3884695.887029133,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3884511.29707113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3153718.7551019206,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3153538.7755102124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3083579.146666959,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3083218.666666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3133192.213559303,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3133019.6610169606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1804416.4628905347,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1804304.1015625012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3046502.5263157636,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3046384.86842105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11457574.913044294,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11456732.608695628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5195645.210000066,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5195517.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14847624.416666526,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14846570.833333306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58701.13480000328,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58698.07000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 292160.64013606065,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 292135.8163265312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232815.2981788657,
            "unit": "ns/iter",
            "extra": "iterations: 3679\ncpu: 232804.9469964657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 230369.35341580716,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 230350.753093062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 235542.01129477142,
            "unit": "ns/iter",
            "extra": "iterations: 3630\ncpu: 235530.7162534453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 568094.539881373,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 568059.6572181907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3927885.364406601,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3927695.762711865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3198182.986206716,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3198017.2413793085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3124426.8922558115,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3124113.468013448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3175931.0375428763,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3175921.501706492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1838372.650793767,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1838264.2857142894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3071229.1523182043,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3071017.218543033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11681841.868132005,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11681072.527472489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5139414.77000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5139223.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53219.30816220141,
            "unit": "ns/iter",
            "extra": "iterations: 15388\ncpu: 53215.33012737193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258105.76227779879,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 258084.48327809598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 200443.99222615059,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 200435.57126030547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 200246.79783731524,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 200235.7310766341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 199365.1295300522,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 199355.0619593169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 527847.6873102629,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 527825.5616272035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3918050.0464135357,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3917918.9873417695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3159636.372881431,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3159465.762711841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3091083.826666742,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3090974.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3157519.969387782,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3157403.061224499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1826004.9803537058,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1825939.6856581473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3055116.5921052285,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3054919.7368421205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6291.852535016999,
            "unit": "ns/iter",
            "extra": "iterations: 111518\ncpu: 6291.483886009459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36057.751584807214,
            "unit": "ns/iter",
            "extra": "iterations: 19403\ncpu: 36056.599494923365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28854.42888525012,
            "unit": "ns/iter",
            "extra": "iterations: 25037\ncpu: 28853.60067100678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28534.949934731223,
            "unit": "ns/iter",
            "extra": "iterations: 26046\ncpu: 28533.198955693846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21903.22761018502,
            "unit": "ns/iter",
            "extra": "iterations: 31923\ncpu: 21902.336873100994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 159380.1154192931,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 159372.45266005406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262412.484281429,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 262392.0658682651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66592.99266227345,
            "unit": "ns/iter",
            "extra": "iterations: 10630\ncpu: 66588.09031044247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65383.305484760574,
            "unit": "ns/iter",
            "extra": "iterations: 10593\ncpu: 65378.608515056316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65774.37505882913,
            "unit": "ns/iter",
            "extra": "iterations: 10625\ncpu: 65772.47058823479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133761.0675986271,
            "unit": "ns/iter",
            "extra": "iterations: 5222\ncpu: 133759.15358100404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122308.65202231317,
            "unit": "ns/iter",
            "extra": "iterations: 5736\ncpu: 122301.65620641448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39724.811799974654,
            "unit": "ns/iter",
            "extra": "iterations: 17678\ncpu: 39723.77531394969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 195680.59115094552,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 195672.02464295714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160118.03357698672,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 160106.09867519542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157929.01217862917,
            "unit": "ns/iter",
            "extra": "iterations: 4434\ncpu: 157926.9733874615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 158492.95728812495,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 158485.87570621225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 300143.75268357643,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 300135.42292829254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1117639.262057855,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1117580.546623797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 931223.6010637414,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 931220.7446808474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 932240.2220744726,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 932215.0265957289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 932122.9054593534,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 932064.7137150512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 609141.6024412222,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 609087.1839581497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 918376.1615893083,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 918299.7350993275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40482.784928807676,
            "unit": "ns/iter",
            "extra": "iterations: 17278\ncpu: 40480.88320407446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 199100.27576360948,
            "unit": "ns/iter",
            "extra": "iterations: 3503\ncpu: 199083.18584070628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 162640.91956167898,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 162626.55630683215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159291.3017064925,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 159284.59613196843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 161529.4464697509,
            "unit": "ns/iter",
            "extra": "iterations: 4334\ncpu: 161529.04937701797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 300644.23754298565,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 300635.996563574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1109907.1984126063,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1109850.952380949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 937188.005376284,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 937141.2634408674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 918797.1952817934,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 918727.9161205732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 928252.4005304647,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 928235.9416445466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 615344.5853018549,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 615322.484689415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 917022.606815079,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 916979.6854521515 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}