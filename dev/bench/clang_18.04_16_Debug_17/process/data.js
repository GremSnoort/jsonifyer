window.BENCHMARK_DATA = {
  "lastUpdate": 1705952938115,
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
        "date": 1705574964654,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15636.23093817375,
            "unit": "ns/iter",
            "extra": "iterations: 45077\ncpu: 15635.304035317346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124980.42772335828,
            "unit": "ns/iter",
            "extra": "iterations: 6738\ncpu: 124975.76432175717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 236179.6908893725,
            "unit": "ns/iter",
            "extra": "iterations: 3688\ncpu: 236175.4880694143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342762.66057231906,
            "unit": "ns/iter",
            "extra": "iterations: 2516\ncpu: 342751.31160572334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451729.85959438805,
            "unit": "ns/iter",
            "extra": "iterations: 1923\ncpu: 451708.9963598543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 560609.448387133,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 560596.3870967742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 539220.296999929,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539188.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 624400.3650000422,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624364.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 712145.7787266986,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 712105.9006211188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12420.594836762506,
            "unit": "ns/iter",
            "extra": "iterations: 56360\ncpu: 12420.260823278933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10443.805752068176,
            "unit": "ns/iter",
            "extra": "iterations: 67002\ncpu: 10443.685263126486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10348.186803317443,
            "unit": "ns/iter",
            "extra": "iterations: 67911\ncpu: 10347.43561425984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10533.032413450723,
            "unit": "ns/iter",
            "extra": "iterations: 66639\ncpu: 10532.64604810995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18002.246673810267,
            "unit": "ns/iter",
            "extra": "iterations: 38257\ncpu: 18001.10045220485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50088.594500005,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50087.39999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 252086.31444672414,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 252086.68051023444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 201375.5829787025,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 201368.53427895997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 198732.28203928823,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 198730.61272217048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195873.7541322253,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 195865.42699724578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 584400.6142297076,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 584354.1122715407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3837204.5371902045,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3837076.859504128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3098936.930000112,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3098740.666666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3035968.9511399455,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3035881.7589576575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3077142.0232557594,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3077016.943521589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1797855.0719845446,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1797763.035019455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2990498.5475408854,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 2990319.0163934347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11348306.946809104,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11347605.319148961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5097835.9199996255,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5097406.0000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14707058.41666605,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14705948.611111136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58507.68310000376,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58505.13 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 283206.70658289094,
            "unit": "ns/iter",
            "extra": "iterations: 3023\ncpu: 283194.2110486267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 225489.95219227936,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 225476.0697305858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 223313.8829204682,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 223308.7353324642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 224956.11897868852,
            "unit": "ns/iter",
            "extra": "iterations: 3799\ncpu: 224946.61753092913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 563755.653021409,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 563744.9642625044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3916046.4745760937,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3915912.711864422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3161387.0850336826,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3161157.142857157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3104082.0903008566,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3103893.6454849313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3107803.2842808086,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3107605.6856187438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1824487.5669291634,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1824378.3464566933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3043940.5048861774,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3043827.3615635172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11660960.472528173,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11660116.483516492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5102647.0099998275,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5102298.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54005.172459185924,
            "unit": "ns/iter",
            "extra": "iterations: 15192\ncpu: 54001.836492891074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 244213.05939740263,
            "unit": "ns/iter",
            "extra": "iterations: 3485\ncpu: 244210.8177905323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 192308.5472547384,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 192301.9801980202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 194780.735442471,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 194777.3956900514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 189912.36939550628,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 189904.5728306932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 525144.983030328,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 525137.3939393938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3903776.712499981,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3902232.4999999767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3126741.3445947557,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3126649.9999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3018616.203883342,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3018561.165048539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3090973.7218544763,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3090872.1854304685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1795893.9574468108,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1795838.8781431278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3002457.8834951897,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3002326.860841435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6254.8148293763425,
            "unit": "ns/iter",
            "extra": "iterations: 111913\ncpu: 6254.636190612379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35373.684446913816,
            "unit": "ns/iter",
            "extra": "iterations: 19816\ncpu: 35372.14876867155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27690.993126737263,
            "unit": "ns/iter",
            "extra": "iterations: 25170\ncpu: 27689.71394517263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27199.212802430993,
            "unit": "ns/iter",
            "extra": "iterations: 25667\ncpu: 27197.919507538707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21985.98248801812,
            "unit": "ns/iter",
            "extra": "iterations: 31921\ncpu: 21985.42965445938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 154124.8620386842,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 154114.78471001846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 261119.93682647005,
            "unit": "ns/iter",
            "extra": "iterations: 2691\ncpu: 261109.40170939962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65854.61018543746,
            "unit": "ns/iter",
            "extra": "iterations: 10623\ncpu: 65853.13000094211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64938.99619982567,
            "unit": "ns/iter",
            "extra": "iterations: 10789\ncpu: 64936.0367040503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65060.63978444631,
            "unit": "ns/iter",
            "extra": "iterations: 10763\ncpu: 65058.728978908504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133377.0312083662,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 133371.72216936338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 120924.95503286179,
            "unit": "ns/iter",
            "extra": "iterations: 5782\ncpu: 120919.14562435244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39582.05557756299,
            "unit": "ns/iter",
            "extra": "iterations: 17669\ncpu: 39580.14035882069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 194723.8021181645,
            "unit": "ns/iter",
            "extra": "iterations: 3588\ncpu: 194718.5897435929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157874.1531876682,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 157867.2448749722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 154174.42126158404,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 154170.04852227494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 155119.63932610743,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 155113.14564398187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 304635.8247288649,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 304632.8850325374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1119900.68269235,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1119874.0384615283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 931478.102666612,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 931433.7333333356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 917022.0196335716,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 916987.1727748631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 933463.2466666334,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 933420.6666666584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 604334.9291882102,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 604305.0086355854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 915289.5190038887,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 915247.313237211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40411.08254554016,
            "unit": "ns/iter",
            "extra": "iterations: 17348\ncpu: 40408.646529859434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 195180.0926080838,
            "unit": "ns/iter",
            "extra": "iterations: 3585\ncpu: 195173.44490934396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160554.9147961542,
            "unit": "ns/iter",
            "extra": "iterations: 4366\ncpu: 160549.61062757773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 156027.63893844513,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 156024.10793934212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 158021.84183212704,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 158014.35018050228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 297935.24158499495,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 297930.4218150827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1119991.753205122,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1119926.7628204923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 938642.4846050047,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 938624.0963855364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 909018.6062175296,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 908973.1865284996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 925503.3968254976,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 925444.04761905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 599768.4777397759,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 599743.4931506934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 915448.5084967614,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 915396.601307192 ns\nthreads: 1"
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
        "date": 1705772740857,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15788.98043154359,
            "unit": "ns/iter",
            "extra": "iterations: 44306\ncpu: 15788.647135828105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123842.31728086308,
            "unit": "ns/iter",
            "extra": "iterations: 6811\ncpu: 123840.99251211275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233872.5296803508,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 233863.41659951644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 340023.0864587569,
            "unit": "ns/iter",
            "extra": "iterations: 2533\ncpu: 340009.6723253059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 447074.1031991401,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 447059.391124871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559413.8661971731,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 559376.7605633804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 535735.9670000506,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535722.9999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 621860.3710000253,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621816.3999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 708896.5610129837,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 708856.0245587113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12446.49587336709,
            "unit": "ns/iter",
            "extra": "iterations: 56099\ncpu: 12445.564092051574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10342.837116450146,
            "unit": "ns/iter",
            "extra": "iterations: 67625\ncpu: 10342.244731977815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10349.441438382539,
            "unit": "ns/iter",
            "extra": "iterations: 67715\ncpu: 10349.442516429173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10449.55177345184,
            "unit": "ns/iter",
            "extra": "iterations: 67129\ncpu: 10448.880513637905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17836.266948069635,
            "unit": "ns/iter",
            "extra": "iterations: 39090\ncpu: 17835.91455615247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58071.787958488785,
            "unit": "ns/iter",
            "extra": "iterations: 14068\ncpu: 58069.27068524309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 258420.2687878725,
            "unit": "ns/iter",
            "extra": "iterations: 3300\ncpu: 258419.72727272735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205338.9180408512,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 205331.33152842734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203530.56992337358,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 203522.46168582435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 204440.17978874213,
            "unit": "ns/iter",
            "extra": "iterations: 4166\ncpu: 204427.6524243882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 599356.630872483,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 599327.3825503355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3798477.2489793687,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3798398.3673469466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3066081.042904125,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3065928.0528052724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3032556.1601305744,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3032500.9803921604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3026457.630718956,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3026343.1372548924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1764370.6851144615,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1764292.1755725236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2977754.0128205186,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2977680.7692307727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11246410.663157372,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11245847.368421044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5190818.070000205,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5190637.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14634543.861111145,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14633772.222222261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57202.866099999024,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57201.23000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293588.1005471625,
            "unit": "ns/iter",
            "extra": "iterations: 2924\ncpu: 293585.0547195614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 229365.40016083265,
            "unit": "ns/iter",
            "extra": "iterations: 3731\ncpu: 229357.7861163238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 227020.68723516763,
            "unit": "ns/iter",
            "extra": "iterations: 3776\ncpu: 227013.08262711889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 231200.43957829112,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 231191.21384157788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 581091.2907991913,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 581077.4345198128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3870563.820833202,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3870415.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3126090.043624206,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3125871.140939592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3078145.0331126004,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3078032.450331122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3079018.490065953,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3078872.5165562937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1792487.9325628022,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1792401.3487475847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3011743.389610327,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3011604.2207792243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11434495.182795696,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11434081.720430123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5105816.299999333,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5105373.000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55340.36003241782,
            "unit": "ns/iter",
            "extra": "iterations: 14807\ncpu: 55337.110825961056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 263497.41881128884,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 263486.2132352945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 199923.14746653184,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 199914.38814531616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 205205.79952039244,
            "unit": "ns/iter",
            "extra": "iterations: 4170\ncpu: 205197.86570743384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198839.203090497,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 198831.91071866418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 538857.6129032526,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 538841.8114143898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3829943.3333329367,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3829716.872427973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3095957.3899997394,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3095749.3333333493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3029843.4052286185,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3029706.2091503297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3068106.5855263583,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3067952.3026315714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1790125.6698657533,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1790032.629558536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2985741.604501603,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2985519.292604506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6243.926993335632,
            "unit": "ns/iter",
            "extra": "iterations: 112387\ncpu: 6243.724808029369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35630.81082321754,
            "unit": "ns/iter",
            "extra": "iterations: 19606\ncpu: 35628.64939304311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28467.50296507017,
            "unit": "ns/iter",
            "extra": "iterations: 24620\ncpu: 28466.125101543563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28426.54161081963,
            "unit": "ns/iter",
            "extra": "iterations: 24621\ncpu: 28425.14113967739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21716.498526902855,
            "unit": "ns/iter",
            "extra": "iterations: 32245\ncpu: 21715.648937819824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 158428.95993662975,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 158420.71072883558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 253977.63026123907,
            "unit": "ns/iter",
            "extra": "iterations: 2756\ncpu: 253972.42380261474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65438.77715930456,
            "unit": "ns/iter",
            "extra": "iterations: 10420\ncpu: 65437.16890594963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64690.1705648453,
            "unit": "ns/iter",
            "extra": "iterations: 10817\ncpu: 64686.73384487379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64687.7304075263,
            "unit": "ns/iter",
            "extra": "iterations: 10846\ncpu: 64685.921076894534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 130870.88041852483,
            "unit": "ns/iter",
            "extra": "iterations: 5352\ncpu: 130863.63976083838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 119244.77471029309,
            "unit": "ns/iter",
            "extra": "iterations: 5868\ncpu: 119242.19495569033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39997.096092322834,
            "unit": "ns/iter",
            "extra": "iterations: 17504\ncpu: 39995.395338208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 196546.3233314698,
            "unit": "ns/iter",
            "extra": "iterations: 3566\ncpu: 196541.5311273125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157988.88733664659,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 157982.26678684115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157886.1760468312,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 157883.70103556695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 156352.6353231757,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 156340.57450628473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 304623.8136699993,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 304617.89290378755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1096964.5391850362,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1096927.899686512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 917719.4555112236,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 917706.7729083756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 919542.4036697552,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 919521.1009174219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 910056.8396349541,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 910008.9960886578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 600826.2975063906,
            "unit": "ns/iter",
            "extra": "iterations: 1163\ncpu: 600797.4204643128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 902171.4677002574,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 902128.4237726093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40684.394688003675,
            "unit": "ns/iter",
            "extra": "iterations: 17244\ncpu: 40683.35652980724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197062.00253233363,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 197046.5391108598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159419.965171856,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 159416.29865695714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 158480.27670674067,
            "unit": "ns/iter",
            "extra": "iterations: 4409\ncpu: 158476.23043774263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 158984.06758902094,
            "unit": "ns/iter",
            "extra": "iterations: 4409\ncpu: 158971.92107053826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 300197.22512862895,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 300188.1217838797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1090213.84496126,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1090155.5038759536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 922110.7997364951,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 922108.0368906553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 902890.4579558894,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 902851.617076332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 910221.6158855351,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 910200.390624986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 597177.5759385402,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 597163.8225256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 902806.71557278,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 902751.3513513432 ns\nthreads: 1"
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
        "date": 1705774169656,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15671.78265796262,
            "unit": "ns/iter",
            "extra": "iterations: 44124\ncpu: 15671.75006799021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124211.25220588934,
            "unit": "ns/iter",
            "extra": "iterations: 6800\ncpu: 124202.14705882352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233837.10653751777,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 233827.60290556902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 341106.52768985415,
            "unit": "ns/iter",
            "extra": "iterations: 2528\ncpu: 341106.8829113925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 452695.851063818,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 452427.65957446815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559836.3017408113,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 559841.1347517727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 537752.6830000079,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537744.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 625442.3050000924,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625447.9000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 709250.5628833821,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 709239.1104294481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12544.666990239248,
            "unit": "ns/iter",
            "extra": "iterations: 55629\ncpu: 12544.555897104025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10526.214173560036,
            "unit": "ns/iter",
            "extra": "iterations: 66236\ncpu: 10526.198743885496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10577.84765038179,
            "unit": "ns/iter",
            "extra": "iterations: 66564\ncpu: 10577.666606574105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10586.636074086304,
            "unit": "ns/iter",
            "extra": "iterations: 66247\ncpu: 10586.631847479868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18099.544969178638,
            "unit": "ns/iter",
            "extra": "iterations: 38771\ncpu: 18099.512522245986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50818.9449999918,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50818.02999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 270918.40400505357,
            "unit": "ns/iter",
            "extra": "iterations: 3146\ncpu: 270917.2600127147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 208243.14550328435,
            "unit": "ns/iter",
            "extra": "iterations: 4103\ncpu: 208244.9914696564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203910.66903914273,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 203908.77817319104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 202172.19505231132,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 202167.41198858252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 601527.7958639719,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 601517.6117411606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3837225.0950410753,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3837192.561983468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3138140.907849711,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3138066.8941979543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3088179.2466664137,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3088059.333333331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3111297.653198691,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3111292.255892254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1799601.575581476,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1799478.8759689936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3089877.072368396,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3089741.1184210563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11346434.44680947,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11345734.042553196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5147338.470000023,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5147390.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14557447.97260338,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14556319.178082196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57973.62210000756,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57972.45999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 291271.909552839,
            "unit": "ns/iter",
            "extra": "iterations: 2952\ncpu: 291260.77235772344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 233191.08565192114,
            "unit": "ns/iter",
            "extra": "iterations: 3666\ncpu: 233190.7255864695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 227373.18662067348,
            "unit": "ns/iter",
            "extra": "iterations: 3767\ncpu: 227365.11813113868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 231902.44594962918,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 231888.2416689243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 607690.4781098168,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 607646.0041695645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3915533.7932489687,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3915306.3291139104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3200373.8517244468,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3200190.344827596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3143693.8271184065,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3143461.01694915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3171132.554794281,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3170902.3972602873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1817436.8031495975,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1817213.7795275603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3072085.7755774795,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3071913.861386141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11540231.500000028,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11539627.17391304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5064252.720000013,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5063644.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53320.36794112108,
            "unit": "ns/iter",
            "extra": "iterations: 15353\ncpu: 53317.11717579618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 242841.45777651042,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 242826.21552459372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 199170.26259075286,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 199150.66760365374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 199120.8889671405,
            "unit": "ns/iter",
            "extra": "iterations: 4260\ncpu: 199109.43661971827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 196331.54397245456,
            "unit": "ns/iter",
            "extra": "iterations: 4355\ncpu: 196311.3203214695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 546547.0346129666,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 546518.5022026413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3883917.812499741,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3883736.25000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3168621.2627987005,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3168322.8668942126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3094780.729999987,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3094559.9999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3151134.091525418,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3151159.3220338966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1801257.0291829458,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1801249.6108949403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3052547.6065573366,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3052509.180327887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6297.872374536248,
            "unit": "ns/iter",
            "extra": "iterations: 111028\ncpu: 6297.861800626856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36074.3886253436,
            "unit": "ns/iter",
            "extra": "iterations: 19394\ncpu: 36073.57945756406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27824.99805269741,
            "unit": "ns/iter",
            "extra": "iterations: 25163\ncpu: 27824.341294758196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28617.253848981527,
            "unit": "ns/iter",
            "extra": "iterations: 24487\ncpu: 28616.22085188043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22034.324433122652,
            "unit": "ns/iter",
            "extra": "iterations: 31797\ncpu: 22034.053527062264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 162060.54101019743,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 162060.31047265924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 260375.4259672778,
            "unit": "ns/iter",
            "extra": "iterations: 2688\ncpu: 260375.03720237926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66337.29874155161,
            "unit": "ns/iter",
            "extra": "iterations: 10648\ncpu: 66195.06949661908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65644.23688647484,
            "unit": "ns/iter",
            "extra": "iterations: 10676\ncpu: 65644.99812663846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65706.34959655032,
            "unit": "ns/iter",
            "extra": "iterations: 10658\ncpu: 65696.70669919238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 126696.23689915799,
            "unit": "ns/iter",
            "extra": "iterations: 5534\ncpu: 126691.94073003155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121521.28128248571,
            "unit": "ns/iter",
            "extra": "iterations: 5770\ncpu: 121522.68630849198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39592.20750127425,
            "unit": "ns/iter",
            "extra": "iterations: 17677\ncpu: 39590.50178197674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 195778.32467169696,
            "unit": "ns/iter",
            "extra": "iterations: 3579\ncpu: 195780.27381950212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157993.0894272068,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 157992.80054335724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158970.17751077455,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 158960.2357741986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159042.01249716556,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 159029.17518745613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 299622.25731499185,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 299597.80550774845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1116746.354632676,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1116665.3354632608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 930692.6181575964,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 930634.1789052106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 943657.3167785287,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 943647.7852349123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 937664.0107238343,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 937647.3190348548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 599420.8311910628,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 599412.4250214138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920772.2219287081,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 920781.3738441328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41068.51020528092,
            "unit": "ns/iter",
            "extra": "iterations: 17050\ncpu: 41067.65982404661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200122.19612313397,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 200122.2348916784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160131.15995422614,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 160129.6796338668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159844.22818638652,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 159835.15303791667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 161504.28426160975,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 161491.47215160518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 298727.2643040295,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 298708.7959009426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1116123.651933582,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1116102.0257826967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 944449.531713814,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 944414.7098515428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 927782.645888555,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 927711.8037135311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 935339.7526737923,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 935281.0160427848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 596302.1870748312,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 596260.2040816405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 924935.5625823226,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 924886.8247694412 ns\nthreads: 1"
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
        "date": 1705777733248,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15450.668449673225,
            "unit": "ns/iter",
            "extra": "iterations: 44868\ncpu: 15450.401176785239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117731.24118207251,
            "unit": "ns/iter",
            "extra": "iterations: 6294\ncpu: 117729.90149348586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 226095.48240392085,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 226093.23226854356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 331921.17229470034,
            "unit": "ns/iter",
            "extra": "iterations: 2606\ncpu: 331920.7214121259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 439806.4664031822,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 439799.505928854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 535848.7560826679,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 535851.5206812649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 525619.2300000748,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525606.4999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 598250.1660000707,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598228.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 687643.0096726592,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 687631.8452380951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12461.92028589919,
            "unit": "ns/iter",
            "extra": "iterations: 58622\ncpu: 12461.852205656585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9945.513096464007,
            "unit": "ns/iter",
            "extra": "iterations: 70897\ncpu: 9945.57597641648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10045.80914314575,
            "unit": "ns/iter",
            "extra": "iterations: 67176\ncpu: 10045.590687150181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9910.69049470608,
            "unit": "ns/iter",
            "extra": "iterations: 70729\ncpu: 9910.545886411512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17165.96756862843,
            "unit": "ns/iter",
            "extra": "iterations: 40763\ncpu: 17165.691926501982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55438.817283116296,
            "unit": "ns/iter",
            "extra": "iterations: 14870\ncpu: 55438.54068594477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 254032.9287591245,
            "unit": "ns/iter",
            "extra": "iterations: 3425\ncpu: 254030.21897810194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 195469.63945741847,
            "unit": "ns/iter",
            "extra": "iterations: 4202\ncpu: 195467.49167063273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 194444.32606146878,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 194441.9892094766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 194823.25223571705,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 194822.35725750928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 599427.6928236467,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 599397.58551308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3756652.709163549,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3749768.9243027926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3005104.88704317,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3005086.0465116315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2959841.6547228093,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 2959768.7296416955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2908432.48757785,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2908401.552795032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1735879.1188680355,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1735877.9245283005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2954067.466049537,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2953963.8888888946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11318409.968085457,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11317625.531914892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6614800.290779882,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6614248.936170216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14606304.000001036,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 14605627.631578945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58358.26429999997,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58351.41999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290630.23244146624,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 290610.96989966574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 233227.1824638177,
            "unit": "ns/iter",
            "extra": "iterations: 3661\ncpu: 233205.38104343117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 228747.15621651764,
            "unit": "ns/iter",
            "extra": "iterations: 3732\ncpu: 228736.60235798504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 232491.94250681906,
            "unit": "ns/iter",
            "extra": "iterations: 3670\ncpu: 232470.24523160743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 602011.2591822505,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 601977.4774774779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3893762.932772988,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3893621.4285714515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3113105.8367347983,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3112813.605442174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3063631.478114446,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3063423.232323231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3082896.730896956,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3082795.348837194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1820701.1380669568,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1820674.5562130052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3044085.865131613,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3044071.0526315677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11449858.445652818,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11449585.869565204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6612162.730496667,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6612031.205673748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54116.850830167474,
            "unit": "ns/iter",
            "extra": "iterations: 15298\ncpu: 54116.55771996339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 247772.06303136065,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 247764.11609498638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 193188.06816633395,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 193184.73074301294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 197493.66833826294,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 197491.08730339634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 193554.71110129805,
            "unit": "ns/iter",
            "extra": "iterations: 4531\ncpu: 193551.24696535076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 540920.0775046974,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 540912.539382482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3742049.1224487037,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3741986.9387755273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2983595.938311672,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 2983589.935064918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2985632.2065571756,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 2985589.18032787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3060103.9714286216,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 3060096.1904761945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1797344.796511527,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1797299.4186046442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2967710.2319750087,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2967655.7993730344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6087.441998193316,
            "unit": "ns/iter",
            "extra": "iterations: 111781\ncpu: 6087.329689303218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34318.052541709934,
            "unit": "ns/iter",
            "extra": "iterations: 20498\ncpu: 34317.93345692293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26499.354584253317,
            "unit": "ns/iter",
            "extra": "iterations: 26242\ncpu: 26498.830119655733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26439.975375024474,
            "unit": "ns/iter",
            "extra": "iterations: 25665\ncpu: 26439.076563412884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21278.770419830482,
            "unit": "ns/iter",
            "extra": "iterations: 32799\ncpu: 21278.30421659181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 154845.10217057937,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 154844.4639333454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 257245.4620275433,
            "unit": "ns/iter",
            "extra": "iterations: 2831\ncpu: 257238.43164959183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66093.9600681294,
            "unit": "ns/iter",
            "extra": "iterations: 10568\ncpu: 66093.03557910676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65913.19658594909,
            "unit": "ns/iter",
            "extra": "iterations: 10779\ncpu: 65912.1068744785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65455.85448772124,
            "unit": "ns/iter",
            "extra": "iterations: 10707\ncpu: 65456.27159802093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132609.28241205914,
            "unit": "ns/iter",
            "extra": "iterations: 4975\ncpu: 132606.15075376854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121304.99176683121,
            "unit": "ns/iter",
            "extra": "iterations: 6073\ncpu: 121301.71249794148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39343.01865543894,
            "unit": "ns/iter",
            "extra": "iterations: 17582\ncpu: 39342.54351040817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 195651.4280936427,
            "unit": "ns/iter",
            "extra": "iterations: 3588\ncpu: 195648.38350055617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160746.54140832805,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 160746.01417183207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 161183.09374278205,
            "unit": "ns/iter",
            "extra": "iterations: 4331\ncpu: 161179.9122604488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 156779.74926520133,
            "unit": "ns/iter",
            "extra": "iterations: 4423\ncpu: 156776.644811215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 304801.00348736724,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 304790.80209241307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1125155.6929261526,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1125163.3440514507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 933812.2053333487,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 933819.4666666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 942619.398384843,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 942564.4683714821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 924925.4350736529,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 924885.2744310508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 589616.2368200794,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 589594.9790794977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 922754.4643835408,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 922750.4109589029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40754.41242675764,
            "unit": "ns/iter",
            "extra": "iterations: 17237\ncpu: 40753.35035098929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 199853.72688353987,
            "unit": "ns/iter",
            "extra": "iterations: 3504\ncpu: 199855.30821917867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160463.60222274208,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 160459.73605001124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 160878.45350662546,
            "unit": "ns/iter",
            "extra": "iterations: 4463\ncpu: 160871.14048845862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 158433.0101289159,
            "unit": "ns/iter",
            "extra": "iterations: 4344\ncpu: 158422.88213627858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 293854.7761514933,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 293832.80241068103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1089172.0686427015,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1089104.2121684814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 908447.1804511938,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 908389.8496240751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 904278.1186667525,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 904198.2666666589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 919529.3617835164,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 919535.4140127507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 580902.636980555,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 580840.7972858293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 893421.338364733,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 893373.7106918226 ns\nthreads: 1"
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
        "date": 1705952934305,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15850.054977176032,
            "unit": "ns/iter",
            "extra": "iterations: 44473\ncpu: 15849.391765790482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123936.04069340567,
            "unit": "ns/iter",
            "extra": "iterations: 6807\ncpu: 123924.97429117086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233867.3754376254,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 233853.62240775663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 339151.27358494134,
            "unit": "ns/iter",
            "extra": "iterations: 2544\ncpu: 339143.1996855345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 447534.7584964046,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 447507.77548918664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 554887.2610083342,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 554857.3707721761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 533152.4020000416,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533117.4999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 619668.1140000919,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 619654.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 706037.5491990696,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 706007.017543859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12509.261907324746,
            "unit": "ns/iter",
            "extra": "iterations: 55722\ncpu: 12508.226553246484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10457.776778387986,
            "unit": "ns/iter",
            "extra": "iterations: 65818\ncpu: 10457.137865021721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11165.48865213274,
            "unit": "ns/iter",
            "extra": "iterations: 67017\ncpu: 11164.79549964934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10421.717725622368,
            "unit": "ns/iter",
            "extra": "iterations: 67236\ncpu: 10421.022963888381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18113.356209741378,
            "unit": "ns/iter",
            "extra": "iterations: 38657\ncpu: 18113.229169361293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56952.04489023417,
            "unit": "ns/iter",
            "extra": "iterations: 14257\ncpu: 56947.87122115451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257424.8973519815,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 257409.66974114825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203221.99426247718,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 203215.65861821698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 199725.3229901176,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 199714.40996709032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 199664.6220601935,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 199654.77422389438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 595923.3129520273,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 595886.0618014463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3800155.4672131324,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3799976.6393442624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3055500.7960526687,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3055246.052631574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3045277.3967215493,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3045042.622950817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3056892.003289659,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3056748.355263156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1780329.2658960267,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1780172.2543352589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2985009.922580532,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2984822.903225805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11292479.723403795,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11291786.170212785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5124113.350000244,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5124155.999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14653536.125000717,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14652376.388888882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58680.032000006584,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58674.35999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 304828.44472006074,
            "unit": "ns/iter",
            "extra": "iterations: 2822\ncpu: 304806.1304039684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 240519.41060903782,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 240512.1526803268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 226466.61158115882,
            "unit": "ns/iter",
            "extra": "iterations: 3782\ncpu: 226446.48334214883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 235130.83644858954,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 235114.65090709264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 587708.0175675498,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 587678.0405405437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3857966.80912843,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3857802.9045643364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3077898.574750699,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3077762.458471757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3092312.15333322,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3092103.3333333507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3073570.374172035,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3073559.27152318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1805270.1269533066,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1805190.429687492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3003577.9674265212,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3003448.2084690547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11526870.543479083,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11526173.913043505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5122379.70000001,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5122265.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53646.117917099305,
            "unit": "ns/iter",
            "extra": "iterations: 15248\ncpu: 53644.2484260232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 250935.95991807725,
            "unit": "ns/iter",
            "extra": "iterations: 3418\ncpu: 250926.79929783545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 198368.09137408793,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 198361.03231806596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 197024.1158620808,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 197017.54022988369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192402.2795941271,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 192391.70236753134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 531591.6749999698,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 531571.7682926846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3834183.219007928,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3834059.0909090983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3084753.7986796144,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3084767.3267326597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3044907.2418299145,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3044826.143790839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3061581.6381576993,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3061594.7368421056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1768828.2633588284,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1768766.2213740472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2976356.3054661695,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2976304.5016077147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6239.056341814949,
            "unit": "ns/iter",
            "extra": "iterations: 111569\ncpu: 6238.886249764768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35534.42525524252,
            "unit": "ns/iter",
            "extra": "iterations: 19687\ncpu: 35534.5913547012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28039.020513639447,
            "unit": "ns/iter",
            "extra": "iterations: 24959\ncpu: 28038.374934893392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26533.4363116813,
            "unit": "ns/iter",
            "extra": "iterations: 26245\ncpu: 26532.535721089844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22029.23338990533,
            "unit": "ns/iter",
            "extra": "iterations: 31818\ncpu: 22028.512162926614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 157875.174825176,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 157875.8177306579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 256556.05582076183,
            "unit": "ns/iter",
            "extra": "iterations: 2723\ncpu: 256544.5831803132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66071.45788580795,
            "unit": "ns/iter",
            "extra": "iterations: 10614\ncpu: 66070.67081213417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65766.91804356608,
            "unit": "ns/iter",
            "extra": "iterations: 10652\ncpu: 65765.996995869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65314.62308267681,
            "unit": "ns/iter",
            "extra": "iterations: 10692\ncpu: 65314.375233819264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133227.2023627918,
            "unit": "ns/iter",
            "extra": "iterations: 5248\ncpu: 133225.91463414725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 120672.62325582257,
            "unit": "ns/iter",
            "extra": "iterations: 5805\ncpu: 120668.25150732191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40197.460000002175,
            "unit": "ns/iter",
            "extra": "iterations: 17450\ncpu: 40196.88825214926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 194957.1095966881,
            "unit": "ns/iter",
            "extra": "iterations: 3595\ncpu: 194951.8219749639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157291.39649752446,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 157292.16434665493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157394.7374213805,
            "unit": "ns/iter",
            "extra": "iterations: 4452\ncpu: 157387.8256963166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 157422.50728862672,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 157420.5651491354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 303375.45309123053,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 303364.1591007368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1105351.3911672046,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1105346.2145110618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 915722.480996042,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 915726.8676278006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 928959.7658730528,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 928917.5925925847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 914815.0746072901,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 914784.6858638823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 601640.6678141954,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 601618.5025817523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 909388.1517508957,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 909394.4228275099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41325.274684444856,
            "unit": "ns/iter",
            "extra": "iterations: 16954\ncpu: 41324.082812315755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 203071.65195246306,
            "unit": "ns/iter",
            "extra": "iterations: 3534\ncpu: 203070.34521788312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159821.402790467,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 159817.40622141064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 158748.06749157314,
            "unit": "ns/iter",
            "extra": "iterations: 4445\ncpu: 158745.46681664692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157978.17318561184,
            "unit": "ns/iter",
            "extra": "iterations: 4423\ncpu: 157978.90572009992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 300890.98538263387,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 300887.23129836394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1102398.6724137238,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1102381.9749216214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 925924.4716732623,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 925898.023715416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 919960.1137565962,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 919964.4179894276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 909981.7100129183,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 909978.4135240546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 597753.8068375705,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 597745.2991453059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 907709.5538263066,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 907691.9584954662 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}