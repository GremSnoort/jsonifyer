window.BENCHMARK_DATA = {
  "lastUpdate": 1702489618942,
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
      }
    ]
  }
}