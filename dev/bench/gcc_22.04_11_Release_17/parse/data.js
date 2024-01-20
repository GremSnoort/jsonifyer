window.BENCHMARK_DATA = {
  "lastUpdate": 1705771637800,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-11 22.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702398793464,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 571.4571288207184,
            "unit": "ns/iter",
            "extra": "iterations: 1223351\ncpu: 571.3981514708371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5281.190430000038,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5281.161000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10203.601836599542,
            "unit": "ns/iter",
            "extra": "iterations: 81346\ncpu: 10202.863078700857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15800.985760634336,
            "unit": "ns/iter",
            "extra": "iterations: 55480\ncpu: 15798.916726748377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20341.659025719524,
            "unit": "ns/iter",
            "extra": "iterations: 41836\ncpu: 20340.69222679032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25236.680230280443,
            "unit": "ns/iter",
            "extra": "iterations: 33177\ncpu: 25234.517888898932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30291.532805923427,
            "unit": "ns/iter",
            "extra": "iterations: 27556\ncpu: 30290.488459863533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34724.28587627414,
            "unit": "ns/iter",
            "extra": "iterations: 23811\ncpu: 34721.985636890495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39469.578718579505,
            "unit": "ns/iter",
            "extra": "iterations: 21164\ncpu: 39466.81629181623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 543.6861901610667,
            "unit": "ns/iter",
            "extra": "iterations: 1269240\ncpu: 543.6628218461436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 405.5848292418876,
            "unit": "ns/iter",
            "extra": "iterations: 1727824\ncpu: 405.5543851688594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 411.57949801612153,
            "unit": "ns/iter",
            "extra": "iterations: 1702206\ncpu: 411.5657564360605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 403.858753733008,
            "unit": "ns/iter",
            "extra": "iterations: 1746255\ncpu: 403.8403898628774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 896.5403272766665,
            "unit": "ns/iter",
            "extra": "iterations: 776224\ncpu: 896.4624902090108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1514.352413813887,
            "unit": "ns/iter",
            "extra": "iterations: 532394\ncpu: 1514.3418220340561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8534.033990121794,
            "unit": "ns/iter",
            "extra": "iterations: 96175\ncpu: 8533.608526124244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7230.411507968025,
            "unit": "ns/iter",
            "extra": "iterations: 113643\ncpu: 7230.272872064271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8869.634553058735,
            "unit": "ns/iter",
            "extra": "iterations: 91332\ncpu: 8869.441159724978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8039.744693684049,
            "unit": "ns/iter",
            "extra": "iterations: 104451\ncpu: 8034.120305214888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26220.18266713979,
            "unit": "ns/iter",
            "extra": "iterations: 30947\ncpu: 26219.310433967676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 261502.8906906891,
            "unit": "ns/iter",
            "extra": "iterations: 3330\ncpu: 261498.22822822919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 199665.56219709988,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 199658.38910685488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202428.95569473476,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 202416.19113894677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 203468.49814298394,
            "unit": "ns/iter",
            "extra": "iterations: 4308\ncpu: 203460.3528319403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102893.17383638717,
            "unit": "ns/iter",
            "extra": "iterations: 8508\ncpu: 102888.99858956262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193267.9678063992,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 193254.52930728285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5593.9672100004145,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5593.830000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26349.584775412888,
            "unit": "ns/iter",
            "extra": "iterations: 31725\ncpu: 26347.309692671362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21487.837287961247,
            "unit": "ns/iter",
            "extra": "iterations: 39026\ncpu: 21486.6832368165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22999.249494305186,
            "unit": "ns/iter",
            "extra": "iterations: 36089\ncpu: 22998.764166366524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21441.799370312332,
            "unit": "ns/iter",
            "extra": "iterations: 39067\ncpu: 21440.811938464623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43437.95262390715,
            "unit": "ns/iter",
            "extra": "iterations: 19208\ncpu: 43434.79800083303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 283433.9760362733,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 283411.78756476525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 216980.9745445405,
            "unit": "ns/iter",
            "extra": "iterations: 4007\ncpu: 216960.0698777147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 217432.70887337896,
            "unit": "ns/iter",
            "extra": "iterations: 4012\ncpu: 217412.23828514482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214732.95181615735,
            "unit": "ns/iter",
            "extra": "iterations: 4047\ncpu: 214716.481344206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 130249.29966528072,
            "unit": "ns/iter",
            "extra": "iterations: 5079\ncpu: 130241.40578854122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 209213.0839110615,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 209205.78532154008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 842225.6199294201,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 842192.592592593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 460885.865344467,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 460867.79749477975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2290.2210344935756,
            "unit": "ns/iter",
            "extra": "iterations: 350529\ncpu: 2290.2056605872945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 7960.448788731122,
            "unit": "ns/iter",
            "extra": "iterations: 104147\ncpu: 7960.009409776589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8426.956842761787,
            "unit": "ns/iter",
            "extra": "iterations: 97921\ncpu: 8426.649033404432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7865.5160479939805,
            "unit": "ns/iter",
            "extra": "iterations: 106680\ncpu: 7865.254968129008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7089.272404167506,
            "unit": "ns/iter",
            "extra": "iterations: 115358\ncpu: 7089.116489536935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25167.375501529204,
            "unit": "ns/iter",
            "extra": "iterations: 33398\ncpu: 25166.41415653628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 272162.7322421143,
            "unit": "ns/iter",
            "extra": "iterations: 3238\ncpu: 272154.04570722714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 203382.95756456495,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 203374.21586715884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 205244.3374447187,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 205242.82057249235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 202119.99541495548,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 202103.87436955553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100835.06642955537,
            "unit": "ns/iter",
            "extra": "iterations: 8716\ncpu: 100832.0215695274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 195731.2695364352,
            "unit": "ns/iter",
            "extra": "iterations: 4530\ncpu: 195722.36203090486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 177.47596100077322,
            "unit": "ns/iter",
            "extra": "iterations: 3952078\ncpu: 177.4748878944192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1442.9097096579314,
            "unit": "ns/iter",
            "extra": "iterations: 487494\ncpu: 1442.876220015024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1093.690118984351,
            "unit": "ns/iter",
            "extra": "iterations: 640420\ncpu: 1093.6561943724444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1271.2745841918675,
            "unit": "ns/iter",
            "extra": "iterations: 550374\ncpu: 1271.2241130576742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 867.1292946573054,
            "unit": "ns/iter",
            "extra": "iterations: 806700\ncpu: 867.0919796702639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8601.521759795145,
            "unit": "ns/iter",
            "extra": "iterations: 82055\ncpu: 8601.36371945652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12895.02498111523,
            "unit": "ns/iter",
            "extra": "iterations: 54281\ncpu: 12894.559790718617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2862.9172784520333,
            "unit": "ns/iter",
            "extra": "iterations: 245184\ncpu: 2862.8634005481545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2888.189896851338,
            "unit": "ns/iter",
            "extra": "iterations: 240915\ncpu: 2888.0318784633514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2860.4585043414677,
            "unit": "ns/iter",
            "extra": "iterations: 244628\ncpu: 2860.4411596382893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5146.596537705431,
            "unit": "ns/iter",
            "extra": "iterations: 136268\ncpu: 5146.308744532831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5379.9012194282295,
            "unit": "ns/iter",
            "extra": "iterations: 130471\ncpu: 5379.658314874561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1785.0666016103082,
            "unit": "ns/iter",
            "extra": "iterations: 393504\ncpu: 1785.0126047003225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9845.259482783493,
            "unit": "ns/iter",
            "extra": "iterations: 72078\ncpu: 9845.035933294537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7733.012208044428,
            "unit": "ns/iter",
            "extra": "iterations: 90596\ncpu: 7732.955097355273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7942.685371761327,
            "unit": "ns/iter",
            "extra": "iterations: 88336\ncpu: 7942.414191269592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7732.814457272416,
            "unit": "ns/iter",
            "extra": "iterations: 90432\ncpu: 7732.496240268832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17785.201145329753,
            "unit": "ns/iter",
            "extra": "iterations: 39290\ncpu: 17784.43369814188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57145.578730074376,
            "unit": "ns/iter",
            "extra": "iterations: 12111\ncpu: 57143.99306415692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45435.43889721047,
            "unit": "ns/iter",
            "extra": "iterations: 15343\ncpu: 45431.92335266913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45503.55435706141,
            "unit": "ns/iter",
            "extra": "iterations: 15297\ncpu: 45502.45146107061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45124.38036293434,
            "unit": "ns/iter",
            "extra": "iterations: 15430\ncpu: 45122.94880103653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26978.2899819503,
            "unit": "ns/iter",
            "extra": "iterations: 26043\ncpu: 26978.093921591193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45000.92246316474,
            "unit": "ns/iter",
            "extra": "iterations: 15541\ncpu: 44998.487870794066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1836.3246723463872,
            "unit": "ns/iter",
            "extra": "iterations: 379364\ncpu: 1836.2693877120535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9579.771866902758,
            "unit": "ns/iter",
            "extra": "iterations: 73330\ncpu: 9579.443611073355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7816.689778027624,
            "unit": "ns/iter",
            "extra": "iterations: 88975\ncpu: 7816.52936218042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7834.596493785126,
            "unit": "ns/iter",
            "extra": "iterations: 89156\ncpu: 7834.405985015075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7718.078339144457,
            "unit": "ns/iter",
            "extra": "iterations: 91206\ncpu: 7717.576694515713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17782.449441624936,
            "unit": "ns/iter",
            "extra": "iterations: 39400\ncpu: 17782.11675126913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56005.17766212227,
            "unit": "ns/iter",
            "extra": "iterations: 12490\ncpu: 56000.056044835605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45519.37793320396,
            "unit": "ns/iter",
            "extra": "iterations: 15299\ncpu: 45519.053532911115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45406.15474802767,
            "unit": "ns/iter",
            "extra": "iterations: 15438\ncpu: 45403.95128902735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45136.66303155635,
            "unit": "ns/iter",
            "extra": "iterations: 15497\ncpu: 45134.993869781865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25793.67444963342,
            "unit": "ns/iter",
            "extra": "iterations: 26982\ncpu: 25793.162108072123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44378.71616827075,
            "unit": "ns/iter",
            "extra": "iterations: 15784\ncpu: 44376.76761277235 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409122846,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 589.5234228011628,
            "unit": "ns/iter",
            "extra": "iterations: 1185789\ncpu: 589.5246962149253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5386.34951000006,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5386.061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10368.973332507396,
            "unit": "ns/iter",
            "extra": "iterations: 80660\ncpu: 10368.462682866355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15739.546909103636,
            "unit": "ns/iter",
            "extra": "iterations: 54062\ncpu: 15738.774000221963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20738.332855553166,
            "unit": "ns/iter",
            "extra": "iterations: 40465\ncpu: 20737.457061658217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25715.272530262984,
            "unit": "ns/iter",
            "extra": "iterations: 32301\ncpu: 25713.423733011376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30661.334966838447,
            "unit": "ns/iter",
            "extra": "iterations: 27140\ncpu: 30659.87472365512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35853.714652185874,
            "unit": "ns/iter",
            "extra": "iterations: 23389\ncpu: 35850.61781179189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41159.80714842924,
            "unit": "ns/iter",
            "extra": "iterations: 20508\ncpu: 41157.45075092644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 567.6199356029869,
            "unit": "ns/iter",
            "extra": "iterations: 1252543\ncpu: 567.5604749697219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 424.84562099681585,
            "unit": "ns/iter",
            "extra": "iterations: 1678350\ncpu: 424.84660529686926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 428.03097896840427,
            "unit": "ns/iter",
            "extra": "iterations: 1672199\ncpu: 427.99750508163123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 423.78272790400104,
            "unit": "ns/iter",
            "extra": "iterations: 1676276\ncpu: 423.75885594019144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 907.42442000133,
            "unit": "ns/iter",
            "extra": "iterations: 770131\ncpu: 907.3944562678299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1532.2235564191237,
            "unit": "ns/iter",
            "extra": "iterations: 519247\ncpu: 1532.22782221178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8409.983334351682,
            "unit": "ns/iter",
            "extra": "iterations: 98166\ncpu: 8409.474767231019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7904.085236576728,
            "unit": "ns/iter",
            "extra": "iterations: 104427\ncpu: 7903.499095061618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9136.680489243574,
            "unit": "ns/iter",
            "extra": "iterations: 89853\ncpu: 9136.150156366512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8670.715769043012,
            "unit": "ns/iter",
            "extra": "iterations: 94286\ncpu: 8670.190696391792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26186.411971046055,
            "unit": "ns/iter",
            "extra": "iterations: 31359\ncpu: 26184.333046334392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 264197.7142857293,
            "unit": "ns/iter",
            "extra": "iterations: 3290\ncpu: 264174.52887538035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 206683.88601644972,
            "unit": "ns/iter",
            "extra": "iterations: 4255\ncpu: 206670.19976498233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 205362.6666666629,
            "unit": "ns/iter",
            "extra": "iterations: 4242\ncpu: 205355.28052805262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 203593.5065666045,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 203577.46247654717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104304.76483991127,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 104298.54898668925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 198399.78770696092,
            "unit": "ns/iter",
            "extra": "iterations: 4409\ncpu: 198386.21002494832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5743.802009999968,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5743.389000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26835.824346380028,
            "unit": "ns/iter",
            "extra": "iterations: 31249\ncpu: 26833.780280968953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22312.00962487125,
            "unit": "ns/iter",
            "extra": "iterations: 37507\ncpu: 22310.69666995495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22896.106320417057,
            "unit": "ns/iter",
            "extra": "iterations: 36390\ncpu: 22894.809013465234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22817.279957175204,
            "unit": "ns/iter",
            "extra": "iterations: 36427\ncpu: 22815.790485079782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 42775.21489570796,
            "unit": "ns/iter",
            "extra": "iterations: 19321\ncpu: 42774.42161378821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 289367.5887203105,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 289347.0646438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 222388.7105129642,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 222378.97409852713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 219822.3437578802,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 219819.16771752865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 219204.56566674067,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 219194.45424754283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112866.91614986685,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 112860.43927648528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 209975.78593788017,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 209962.2200818698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 850058.0144535097,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 850007.6784101181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 463492.93723847443,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 463457.1652719679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2496.7635446552563,
            "unit": "ns/iter",
            "extra": "iterations: 324150\ncpu: 2496.6043498380554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 7975.298649923048,
            "unit": "ns/iter",
            "extra": "iterations: 102883\ncpu: 7974.863680102643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8599.748633879897,
            "unit": "ns/iter",
            "extra": "iterations: 95160\ncpu: 8599.203446826356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8615.988700799886,
            "unit": "ns/iter",
            "extra": "iterations: 96113\ncpu: 8615.618074558022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7308.291417557719,
            "unit": "ns/iter",
            "extra": "iterations: 112066\ncpu: 7307.829314867978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25322.901256786907,
            "unit": "ns/iter",
            "extra": "iterations: 32782\ncpu: 25321.676529802797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 273548.10733228095,
            "unit": "ns/iter",
            "extra": "iterations: 3205\ncpu: 273528.67394695827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 203858.6093859491,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 203849.6848003731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 204421.9162573097,
            "unit": "ns/iter",
            "extra": "iterations: 4275\ncpu: 203987.27485380115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 201284.11793327006,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 201275.50973123254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101784.53222792965,
            "unit": "ns/iter",
            "extra": "iterations: 8564\ncpu: 101777.20691265765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 196358.53068030317,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 196347.17652289956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 198.48067874223437,
            "unit": "ns/iter",
            "extra": "iterations: 3525521\ncpu: 198.46859513813814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1475.507146109488,
            "unit": "ns/iter",
            "extra": "iterations: 474384\ncpu: 1475.4064218017481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1122.8996208500505,
            "unit": "ns/iter",
            "extra": "iterations: 617170\ncpu: 1122.8452452322622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1219.7485958407535,
            "unit": "ns/iter",
            "extra": "iterations: 574187\ncpu: 1219.7191855614974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 924.498592496116,
            "unit": "ns/iter",
            "extra": "iterations: 761632\ncpu: 924.4782257047988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8826.049957620697,
            "unit": "ns/iter",
            "extra": "iterations: 79047\ncpu: 8825.362126329856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12978.19555514626,
            "unit": "ns/iter",
            "extra": "iterations: 54220\ncpu: 12977.668756916284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2922.422204782254,
            "unit": "ns/iter",
            "extra": "iterations: 239552\ncpu: 2922.2544583221975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2855.062975219675,
            "unit": "ns/iter",
            "extra": "iterations: 242651\ncpu: 2854.915495917988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2874.2839891021977,
            "unit": "ns/iter",
            "extra": "iterations: 244446\ncpu: 2874.1014375363075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5287.709434672993,
            "unit": "ns/iter",
            "extra": "iterations: 132755\ncpu: 5287.457346239321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5466.490348299284,
            "unit": "ns/iter",
            "extra": "iterations: 128941\ncpu: 5466.352828037612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1878.399266719416,
            "unit": "ns/iter",
            "extra": "iterations: 371754\ncpu: 1878.3501993253503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9914.129992820643,
            "unit": "ns/iter",
            "extra": "iterations: 69650\ncpu: 9914.021536252803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7953.651407850502,
            "unit": "ns/iter",
            "extra": "iterations: 87971\ncpu: 7953.062941196491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8080.918336737086,
            "unit": "ns/iter",
            "extra": "iterations: 86673\ncpu: 8080.5071937051935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7814.471081317025,
            "unit": "ns/iter",
            "extra": "iterations: 89354\ncpu: 7814.379882266107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17830.406500127527,
            "unit": "ns/iter",
            "extra": "iterations: 39230\ncpu: 17829.197043079348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57261.78275073275,
            "unit": "ns/iter",
            "extra": "iterations: 12244\ncpu: 57261.05847762214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46358.62392483897,
            "unit": "ns/iter",
            "extra": "iterations: 15114\ncpu: 46357.21185655719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45682.90429751534,
            "unit": "ns/iter",
            "extra": "iterations: 15381\ncpu: 45682.10779533263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45814.799961018995,
            "unit": "ns/iter",
            "extra": "iterations: 15392\ncpu: 45813.27962577945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26511.902819889263,
            "unit": "ns/iter",
            "extra": "iterations: 26384\ncpu: 26511.673741661547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45501.82603351384,
            "unit": "ns/iter",
            "extra": "iterations: 15457\ncpu: 45500.485217053516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1883.3934013688724,
            "unit": "ns/iter",
            "extra": "iterations: 373138\ncpu: 1883.3490558452672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9726.425502088245,
            "unit": "ns/iter",
            "extra": "iterations: 72049\ncpu: 9726.204388680002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7999.6051929918785,
            "unit": "ns/iter",
            "extra": "iterations: 87387\ncpu: 7999.367182761711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7960.863838218226,
            "unit": "ns/iter",
            "extra": "iterations: 87822\ncpu: 7960.61692969868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7891.858176621379,
            "unit": "ns/iter",
            "extra": "iterations: 88857\ncpu: 7891.688893390528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17696.28660152883,
            "unit": "ns/iter",
            "extra": "iterations: 39609\ncpu: 17695.7156201874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56498.530251692864,
            "unit": "ns/iter",
            "extra": "iterations: 12396\ncpu: 56497.289448209245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45815.56110604171,
            "unit": "ns/iter",
            "extra": "iterations: 15334\ncpu: 45814.581974696885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45794.67968085323,
            "unit": "ns/iter",
            "extra": "iterations: 15291\ncpu: 45794.271139885954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45175.64982252289,
            "unit": "ns/iter",
            "extra": "iterations: 15495\ncpu: 45174.23039690212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26158.145915558973,
            "unit": "ns/iter",
            "extra": "iterations: 26858\ncpu: 26157.50986670671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44722.9072224024,
            "unit": "ns/iter",
            "extra": "iterations: 15715\ncpu: 44721.07540566285 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412531372,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 609.6618875452214,
            "unit": "ns/iter",
            "extra": "iterations: 1211171\ncpu: 609.6580086544344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5346.89721999996,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5345.780999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10401.704391386767,
            "unit": "ns/iter",
            "extra": "iterations: 80248\ncpu: 10401.348320207357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15878.689796529481,
            "unit": "ns/iter",
            "extra": "iterations: 53423\ncpu: 15878.361379929991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20550.07153931357,
            "unit": "ns/iter",
            "extra": "iterations: 40635\ncpu: 20548.999630860086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25922.144702201967,
            "unit": "ns/iter",
            "extra": "iterations: 32287\ncpu: 25921.039427633434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30930.058498082162,
            "unit": "ns/iter",
            "extra": "iterations: 27112\ncpu: 30929.699026261438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35893.48169838969,
            "unit": "ns/iter",
            "extra": "iterations: 23222\ncpu: 35891.28843338215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40253.40758477122,
            "unit": "ns/iter",
            "extra": "iterations: 20673\ncpu: 40253.06922072272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 534.6249751885424,
            "unit": "ns/iter",
            "extra": "iterations: 1289728\ncpu: 534.5876805031755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 416.32136719575533,
            "unit": "ns/iter",
            "extra": "iterations: 1700883\ncpu: 416.325637918657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.14216927234946,
            "unit": "ns/iter",
            "extra": "iterations: 1653135\ncpu: 424.1461828586288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 418.27461218659397,
            "unit": "ns/iter",
            "extra": "iterations: 1677482\ncpu: 418.254383653595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 903.006265295902,
            "unit": "ns/iter",
            "extra": "iterations: 779213\ncpu: 903.0044416610108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1425.2846248568624,
            "unit": "ns/iter",
            "extra": "iterations: 555468\ncpu: 1425.298667069929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8550.520828751058,
            "unit": "ns/iter",
            "extra": "iterations: 95469\ncpu: 8550.072798500041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8825.20225390081,
            "unit": "ns/iter",
            "extra": "iterations: 92107\ncpu: 8824.904730367944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9248.076873141827,
            "unit": "ns/iter",
            "extra": "iterations: 87807\ncpu: 9247.562267245194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8807.972450689467,
            "unit": "ns/iter",
            "extra": "iterations: 92525\ncpu: 8807.493109970284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26604.28050468388,
            "unit": "ns/iter",
            "extra": "iterations: 31069\ncpu: 26603.03196111882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 264272.9345794387,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 264259.24027735967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197632.54967351217,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 197619.6361940299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 198004.60362453212,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 197994.7026022302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199768.5281133748,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 199759.1775092936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105093.51081048622,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 105088.8392317911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 196658.03492855642,
            "unit": "ns/iter",
            "extra": "iterations: 4409\ncpu: 196646.40508051738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5533.428020000315,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5533.0429999999715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26484.192206891497,
            "unit": "ns/iter",
            "extra": "iterations: 31669\ncpu: 26483.217026113856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22916.11417961732,
            "unit": "ns/iter",
            "extra": "iterations: 36355\ncpu: 22915.36239856966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22609.847651006174,
            "unit": "ns/iter",
            "extra": "iterations: 37250\ncpu: 22608.934228187914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22317.255603826678,
            "unit": "ns/iter",
            "extra": "iterations: 37519\ncpu: 22316.562275113905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43470.21496063023,
            "unit": "ns/iter",
            "extra": "iterations: 19050\ncpu: 43468.34645669285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 285214.8397519749,
            "unit": "ns/iter",
            "extra": "iterations: 3064\ncpu: 285213.05483028723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 218591.61262841514,
            "unit": "ns/iter",
            "extra": "iterations: 3991\ncpu: 218586.54472563294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216920.67500627518,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 216904.72854641036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214763.64440610213,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 214752.5628388361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 113114.21774506278,
            "unit": "ns/iter",
            "extra": "iterations: 7743\ncpu: 113108.95001937235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 208081.61382598802,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 208070.3218116809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 857529.3721770431,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 857495.2122854517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 472446.06827730336,
            "unit": "ns/iter",
            "extra": "iterations: 1904\ncpu: 472422.6365546198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2351.525355977923,
            "unit": "ns/iter",
            "extra": "iterations: 339979\ncpu: 2351.369349283347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8104.341170462459,
            "unit": "ns/iter",
            "extra": "iterations: 101823\ncpu: 8104.108109169834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8374.595423658371,
            "unit": "ns/iter",
            "extra": "iterations: 98157\ncpu: 8374.337031490371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8107.160160780084,
            "unit": "ns/iter",
            "extra": "iterations: 101754\ncpu: 8106.9471470408635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7861.840975330528,
            "unit": "ns/iter",
            "extra": "iterations: 104990\ncpu: 7861.343937517899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25496.321511271148,
            "unit": "ns/iter",
            "extra": "iterations: 32820\ncpu: 25495.457038391272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 269832.347689411,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 269823.5460546982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 221424.77836230397,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 221417.40622140927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 202070.09501842945,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 202057.9105166054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 200129.27355900308,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 200122.23238792334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102981.81644158026,
            "unit": "ns/iter",
            "extra": "iterations: 8515\ncpu: 102975.24368761065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 192378.55404517648,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 192372.04560403555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 203.86082378178617,
            "unit": "ns/iter",
            "extra": "iterations: 3434696\ncpu: 203.8477641107092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1415.907223554784,
            "unit": "ns/iter",
            "extra": "iterations: 493552\ncpu: 1415.857903523843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1236.2215614829402,
            "unit": "ns/iter",
            "extra": "iterations: 565360\ncpu: 1236.1751804160174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1206.6044501140746,
            "unit": "ns/iter",
            "extra": "iterations: 583221\ncpu: 1206.5962988301164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 913.8145331388521,
            "unit": "ns/iter",
            "extra": "iterations: 764735\ncpu: 913.824527450686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8728.852950617065,
            "unit": "ns/iter",
            "extra": "iterations: 81000\ncpu: 8728.285185185137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12992.481104759,
            "unit": "ns/iter",
            "extra": "iterations: 53876\ncpu: 12991.968594550433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2935.223090815444,
            "unit": "ns/iter",
            "extra": "iterations: 234223\ncpu: 2935.0717051698703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2945.855385443858,
            "unit": "ns/iter",
            "extra": "iterations: 237687\ncpu: 2945.7383028941313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2923.0541744537954,
            "unit": "ns/iter",
            "extra": "iterations: 241313\ncpu: 2922.8657386879313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5228.78555784149,
            "unit": "ns/iter",
            "extra": "iterations: 136060\ncpu: 5228.559459062181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5467.570733005901,
            "unit": "ns/iter",
            "extra": "iterations: 127748\ncpu: 5467.328647023839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1916.3930884939275,
            "unit": "ns/iter",
            "extra": "iterations: 366635\ncpu: 1916.382233011025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9620.6544603895,
            "unit": "ns/iter",
            "extra": "iterations: 72886\ncpu: 9620.754328677574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7798.774836420069,
            "unit": "ns/iter",
            "extra": "iterations: 90170\ncpu: 7798.263280470146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7757.290562200924,
            "unit": "ns/iter",
            "extra": "iterations: 90466\ncpu: 7757.023633188196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7591.246740741102,
            "unit": "ns/iter",
            "extra": "iterations: 92429\ncpu: 7590.948728213086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18196.772309131637,
            "unit": "ns/iter",
            "extra": "iterations: 38482\ncpu: 18196.678966789794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56668.65009373561,
            "unit": "ns/iter",
            "extra": "iterations: 12269\ncpu: 56669.21509495515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45119.71131163998,
            "unit": "ns/iter",
            "extra": "iterations: 15515\ncpu: 45119.27167257463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44758.65786769601,
            "unit": "ns/iter",
            "extra": "iterations: 15570\ncpu: 44755.375722543904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44536.92797660917,
            "unit": "ns/iter",
            "extra": "iterations: 15731\ncpu: 44535.1662322801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26788.35996838523,
            "unit": "ns/iter",
            "extra": "iterations: 25305\ncpu: 26786.884015017054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44372.2610054895,
            "unit": "ns/iter",
            "extra": "iterations: 15674\ncpu: 44370.556335333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1837.8689958396963,
            "unit": "ns/iter",
            "extra": "iterations: 380507\ncpu: 1837.7751263446173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9602.24930394475,
            "unit": "ns/iter",
            "extra": "iterations: 72911\ncpu: 9601.824141761841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7761.80376317269,
            "unit": "ns/iter",
            "extra": "iterations: 90243\ncpu: 7761.497290648619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7766.233628634978,
            "unit": "ns/iter",
            "extra": "iterations: 89852\ncpu: 7766.047500333941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7743.739394878587,
            "unit": "ns/iter",
            "extra": "iterations: 90263\ncpu: 7743.454128491283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17556.80346864289,
            "unit": "ns/iter",
            "extra": "iterations: 39958\ncpu: 17555.8786726062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55190.33000885287,
            "unit": "ns/iter",
            "extra": "iterations: 12433\ncpu: 55187.84685916485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44127.06779553915,
            "unit": "ns/iter",
            "extra": "iterations: 15886\ncpu: 44123.85748457738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44069.46574818371,
            "unit": "ns/iter",
            "extra": "iterations: 15678\ncpu: 44066.83250414533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44376.73699692995,
            "unit": "ns/iter",
            "extra": "iterations: 15977\ncpu: 44375.827752394194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26176.059797057143,
            "unit": "ns/iter",
            "extra": "iterations: 26707\ncpu: 26176.332047777974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43741.47098788007,
            "unit": "ns/iter",
            "extra": "iterations: 16338\ncpu: 43738.45023870672 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418340084,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 582.8621298369263,
            "unit": "ns/iter",
            "extra": "iterations: 1200383\ncpu: 582.8084036511681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5318.5035000001335,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5318.409999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10236.111870269651,
            "unit": "ns/iter",
            "extra": "iterations: 81523\ncpu: 10236.0769353434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15408.674771869599,
            "unit": "ns/iter",
            "extra": "iterations: 54903\ncpu: 15407.8228876382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20483.160085482265,
            "unit": "ns/iter",
            "extra": "iterations: 41178\ncpu: 20482.6849288455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25596.94486825013,
            "unit": "ns/iter",
            "extra": "iterations: 32903\ncpu: 25596.082424095064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30510.426108907493,
            "unit": "ns/iter",
            "extra": "iterations: 27730\ncpu: 30508.301478543093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35305.034070099995,
            "unit": "ns/iter",
            "extra": "iterations: 23481\ncpu: 35302.43175333248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39122.432734902766,
            "unit": "ns/iter",
            "extra": "iterations: 21445\ncpu: 39119.12800186521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 537.0833088693566,
            "unit": "ns/iter",
            "extra": "iterations: 1304639\ncpu: 537.043197390235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 418.33604720660423,
            "unit": "ns/iter",
            "extra": "iterations: 1701627\ncpu: 418.29425602673183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 419.9433714471287,
            "unit": "ns/iter",
            "extra": "iterations: 1667551\ncpu: 419.9120746531895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 417.93207721521924,
            "unit": "ns/iter",
            "extra": "iterations: 1677390\ncpu: 417.9158096805151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 893.2828779441666,
            "unit": "ns/iter",
            "extra": "iterations: 785116\ncpu: 893.2662179856218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1474.5900244033287,
            "unit": "ns/iter",
            "extra": "iterations: 554433\ncpu: 1474.5163076512413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8110.542054225035,
            "unit": "ns/iter",
            "extra": "iterations: 101060\ncpu: 8110.385909360773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8555.184081517758,
            "unit": "ns/iter",
            "extra": "iterations: 96077\ncpu: 8554.736305255155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8804.763209985866,
            "unit": "ns/iter",
            "extra": "iterations: 92449\ncpu: 8804.574414001227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8538.528444225467,
            "unit": "ns/iter",
            "extra": "iterations: 95573\ncpu: 8538.313121906802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26619.104302603442,
            "unit": "ns/iter",
            "extra": "iterations: 30958\ncpu: 26618.2957555398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 263448.05478207365,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 263430.2058111386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 200341.3591933599,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 200336.63107947825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200089.9754369363,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 200082.05007085434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 205525.97251586002,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 205523.49072116468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105347.62528707497,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 105342.23377251305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 196611.60135287998,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 196606.38105975214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5645.283570000289,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5645.272000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25901.456790124463,
            "unit": "ns/iter",
            "extra": "iterations: 32400\ncpu: 25900.700617283903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22775.461026359728,
            "unit": "ns/iter",
            "extra": "iterations: 37102\ncpu: 22774.47576950023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22602.155258084862,
            "unit": "ns/iter",
            "extra": "iterations: 36829\ncpu: 22600.55662657144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22134.80571706768,
            "unit": "ns/iter",
            "extra": "iterations: 36977\ncpu: 22133.41807069262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43446.3454602654,
            "unit": "ns/iter",
            "extra": "iterations: 19076\ncpu: 43444.249318515445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 283658.17309562216,
            "unit": "ns/iter",
            "extra": "iterations: 3085\ncpu: 283631.4100486218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 218556.73237301872,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 218542.8102097538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 217858.79116466283,
            "unit": "ns/iter",
            "extra": "iterations: 3984\ncpu: 217837.02309237033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 219105.29480487565,
            "unit": "ns/iter",
            "extra": "iterations: 4023\ncpu: 219092.19487944304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112779.62200336959,
            "unit": "ns/iter",
            "extra": "iterations: 7717\ncpu: 112768.79616431172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 209143.71725125395,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 209136.0534478649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 852948.3577898483,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 852858.3333333342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 460258.2236024929,
            "unit": "ns/iter",
            "extra": "iterations: 1932\ncpu: 460228.10559006105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2337.9844886143933,
            "unit": "ns/iter",
            "extra": "iterations: 340653\ncpu: 2337.834394530501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 7747.064396145537,
            "unit": "ns/iter",
            "extra": "iterations: 106466\ncpu: 7747.041308962533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8096.959317714039,
            "unit": "ns/iter",
            "extra": "iterations: 102010\ncpu: 8096.491520439215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8108.105621838834,
            "unit": "ns/iter",
            "extra": "iterations: 103009\ncpu: 8107.555650477128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7908.344926840824,
            "unit": "ns/iter",
            "extra": "iterations: 104225\ncpu: 7907.715999040508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25413.01056687962,
            "unit": "ns/iter",
            "extra": "iterations: 33217\ncpu: 25411.65367131306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 267691.5319600099,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 267674.9772796125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 199822.14279207677,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 199821.58961512105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 201466.18315353818,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 201463.0479687861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198724.8550724681,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 198724.02626811608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100777.49574614989,
            "unit": "ns/iter",
            "extra": "iterations: 8698\ncpu: 100772.01655552974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 192455.38523518096,
            "unit": "ns/iter",
            "extra": "iterations: 4592\ncpu: 192450.95818815313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 208.0572659160275,
            "unit": "ns/iter",
            "extra": "iterations: 3360760\ncpu: 208.05362477534794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1423.958997205863,
            "unit": "ns/iter",
            "extra": "iterations: 494259\ncpu: 1423.9552542290523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1273.4181708794524,
            "unit": "ns/iter",
            "extra": "iterations: 621643\ncpu: 1273.3576988721873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1132.012191528881,
            "unit": "ns/iter",
            "extra": "iterations: 617724\ncpu: 1131.9357836185736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 898.4596956628302,
            "unit": "ns/iter",
            "extra": "iterations: 779333\ncpu: 898.4103072755793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8635.901044852462,
            "unit": "ns/iter",
            "extra": "iterations: 80107\ncpu: 8635.341480769472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12695.527314644938,
            "unit": "ns/iter",
            "extra": "iterations: 54220\ncpu: 12695.492438214722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2821.797243746899,
            "unit": "ns/iter",
            "extra": "iterations: 249324\ncpu: 2821.7295567213946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2798.2751638332234,
            "unit": "ns/iter",
            "extra": "iterations: 249644\ncpu: 2798.2703369598257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2814.7018059739403,
            "unit": "ns/iter",
            "extra": "iterations: 249616\ncpu: 2814.692968399463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5201.399385888611,
            "unit": "ns/iter",
            "extra": "iterations: 135806\ncpu: 5201.386536677297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5445.3439529065345,
            "unit": "ns/iter",
            "extra": "iterations: 130294\ncpu: 5445.269928008952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1881.4604970226897,
            "unit": "ns/iter",
            "extra": "iterations: 370124\ncpu: 1881.462158627906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9629.212268743637,
            "unit": "ns/iter",
            "extra": "iterations: 72917\ncpu: 9629.133123962807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7679.909352897934,
            "unit": "ns/iter",
            "extra": "iterations: 90913\ncpu: 7679.914863660842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7720.725193793953,
            "unit": "ns/iter",
            "extra": "iterations: 90431\ncpu: 7720.633411109074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7567.461907059448,
            "unit": "ns/iter",
            "extra": "iterations: 91198\ncpu: 7567.254764358835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18280.253270660938,
            "unit": "ns/iter",
            "extra": "iterations: 38295\ncpu: 18279.955607781365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56334.12446455705,
            "unit": "ns/iter",
            "extra": "iterations: 12373\ncpu: 56333.35488563757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44982.60932404118,
            "unit": "ns/iter",
            "extra": "iterations: 15637\ncpu: 44982.46466713526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44707.2240020333,
            "unit": "ns/iter",
            "extra": "iterations: 15732\ncpu: 44706.59801678181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44303.36265461165,
            "unit": "ns/iter",
            "extra": "iterations: 15927\ncpu: 44302.31682049417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26261.135764678776,
            "unit": "ns/iter",
            "extra": "iterations: 26789\ncpu: 26261.103437978294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44306.44490366967,
            "unit": "ns/iter",
            "extra": "iterations: 15727\ncpu: 44306.41571819117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1856.166696288536,
            "unit": "ns/iter",
            "extra": "iterations: 376973\ncpu: 1856.1424823528223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9629.99362926396,
            "unit": "ns/iter",
            "extra": "iterations: 72990\ncpu: 9629.767091382442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7692.057193706661,
            "unit": "ns/iter",
            "extra": "iterations: 91024\ncpu: 7691.974644050013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7882.87546622899,
            "unit": "ns/iter",
            "extra": "iterations: 89012\ncpu: 7882.856244102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7757.362508599454,
            "unit": "ns/iter",
            "extra": "iterations: 88671\ncpu: 7757.340054809386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17571.107710093125,
            "unit": "ns/iter",
            "extra": "iterations: 39792\ncpu: 17571.06453558515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55672.1780470204,
            "unit": "ns/iter",
            "extra": "iterations: 12463\ncpu: 55670.72935890258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43535.86251645925,
            "unit": "ns/iter",
            "extra": "iterations: 15951\ncpu: 43535.75951351066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43569.017689194414,
            "unit": "ns/iter",
            "extra": "iterations: 16055\ncpu: 43568.913111180875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43458.44524104101,
            "unit": "ns/iter",
            "extra": "iterations: 16180\ncpu: 43458.36217552467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25764.887366763385,
            "unit": "ns/iter",
            "extra": "iterations: 27301\ncpu: 25764.539760448206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43290.44876998705,
            "unit": "ns/iter",
            "extra": "iterations: 16260\ncpu: 43290.332103321 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421910354,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 572.7342134324789,
            "unit": "ns/iter",
            "extra": "iterations: 1226074\ncpu: 572.7288075597396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5253.369950000888,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5253.178999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10836.366903376404,
            "unit": "ns/iter",
            "extra": "iterations: 81253\ncpu: 10836.370349402481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15412.872086213456,
            "unit": "ns/iter",
            "extra": "iterations: 54654\ncpu: 15412.43275880997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20412.21804437932,
            "unit": "ns/iter",
            "extra": "iterations: 40877\ncpu: 20411.351126550388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25679.36509574017,
            "unit": "ns/iter",
            "extra": "iterations: 32953\ncpu: 25676.955057202686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30540.44059981145,
            "unit": "ns/iter",
            "extra": "iterations: 27542\ncpu: 30539.321763125412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35414.33371948345,
            "unit": "ns/iter",
            "extra": "iterations: 23307\ncpu: 35412.68717552666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40261.15312559314,
            "unit": "ns/iter",
            "extra": "iterations: 20924\ncpu: 40258.612120053556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 531.8445301225884,
            "unit": "ns/iter",
            "extra": "iterations: 1310331\ncpu: 531.8175331271257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 411.5222862860085,
            "unit": "ns/iter",
            "extra": "iterations: 1693104\ncpu: 411.49332823028055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 415.7969396378539,
            "unit": "ns/iter",
            "extra": "iterations: 1670848\ncpu: 415.7642107480753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 415.74550602559526,
            "unit": "ns/iter",
            "extra": "iterations: 1680083\ncpu: 415.70672401303995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 890.8114346039143,
            "unit": "ns/iter",
            "extra": "iterations: 786210\ncpu: 890.7309751847488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1426.3543653546274,
            "unit": "ns/iter",
            "extra": "iterations: 557721\ncpu: 1426.2609799523445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8408.57834751915,
            "unit": "ns/iter",
            "extra": "iterations: 96340\ncpu: 8407.845131824786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8723.24754596569,
            "unit": "ns/iter",
            "extra": "iterations: 91482\ncpu: 8723.214402833355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8680.622563681507,
            "unit": "ns/iter",
            "extra": "iterations: 92609\ncpu: 8680.01922059412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8413.154782091618,
            "unit": "ns/iter",
            "extra": "iterations: 94352\ncpu: 8412.663218585723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26741.438910935565,
            "unit": "ns/iter",
            "extra": "iterations: 30742\ncpu: 26740.02016784854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 264084.00896058563,
            "unit": "ns/iter",
            "extra": "iterations: 3348\ncpu: 264070.6989247308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 199157.5278810377,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 199148.83828996294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 196500.54089220226,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 196497.490706319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201793.22812716736,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 201786.12207008566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104850.62664393561,
            "unit": "ns/iter",
            "extra": "iterations: 8212\ncpu: 104850.23136872878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195027.4000000053,
            "unit": "ns/iter",
            "extra": "iterations: 4445\ncpu: 195018.80764904397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5676.74939000085,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5676.51099999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26246.872262429384,
            "unit": "ns/iter",
            "extra": "iterations: 31917\ncpu: 26245.58385813199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22769.136198367996,
            "unit": "ns/iter",
            "extra": "iterations: 36579\ncpu: 22767.84767216155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22497.957351230947,
            "unit": "ns/iter",
            "extra": "iterations: 36953\ncpu: 22496.747219440913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22141.400352786717,
            "unit": "ns/iter",
            "extra": "iterations: 33448\ncpu: 22140.175795264284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43901.62743070102,
            "unit": "ns/iter",
            "extra": "iterations: 19336\ncpu: 43899.86553578806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 284194.0189480528,
            "unit": "ns/iter",
            "extra": "iterations: 3061\ncpu: 284182.71806599083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 218663.4125504013,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 218641.9354838711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 218388.34279256634,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 218376.67001506806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 227635.45086849754,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 227619.28039702235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 115357.63923804913,
            "unit": "ns/iter",
            "extra": "iterations: 7717\ncpu: 115350.11014642993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 205792.98319526005,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 205784.94674556202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 848461.2165775875,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 848429.1443850264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 455882.2097435903,
            "unit": "ns/iter",
            "extra": "iterations: 1950\ncpu: 455865.64102564263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2327.627302272089,
            "unit": "ns/iter",
            "extra": "iterations: 344008\ncpu: 2327.558952117394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 7917.728942507167,
            "unit": "ns/iter",
            "extra": "iterations: 101211\ncpu: 7917.441780043716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8516.561979380518,
            "unit": "ns/iter",
            "extra": "iterations: 97000\ncpu: 8516.632989690763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8426.769427220204,
            "unit": "ns/iter",
            "extra": "iterations: 97891\ncpu: 8426.646984911808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7954.509530544891,
            "unit": "ns/iter",
            "extra": "iterations: 103929\ncpu: 7954.489122381612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25491.765520856963,
            "unit": "ns/iter",
            "extra": "iterations: 32408\ncpu: 25491.335472722934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 268574.0344407072,
            "unit": "ns/iter",
            "extra": "iterations: 3281\ncpu: 268570.8625419095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 199973.85915174178,
            "unit": "ns/iter",
            "extra": "iterations: 4409\ncpu: 199972.32932637646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 201142.1380018367,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 201130.67974452535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198510.92215702796,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 198505.46028880912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101808.67144011601,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 101804.60792239313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191966.6208260241,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 191965.92706502625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 206.21495404843543,
            "unit": "ns/iter",
            "extra": "iterations: 3390092\ncpu: 206.2117193279708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1448.472971847725,
            "unit": "ns/iter",
            "extra": "iterations: 480388\ncpu: 1448.4674887799058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1230.6907386816945,
            "unit": "ns/iter",
            "extra": "iterations: 570178\ncpu: 1230.6749821985488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1242.507043551042,
            "unit": "ns/iter",
            "extra": "iterations: 564488\ncpu: 1242.4754822068755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 906.5139600197354,
            "unit": "ns/iter",
            "extra": "iterations: 768731\ncpu: 906.5213969515937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8760.15033720212,
            "unit": "ns/iter",
            "extra": "iterations: 79774\ncpu: 8759.869130293071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12603.485468341083,
            "unit": "ns/iter",
            "extra": "iterations: 55878\ncpu: 12603.602491141344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2874.3564082979046,
            "unit": "ns/iter",
            "extra": "iterations: 242225\ncpu: 2874.282588502444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2874.0977625056785,
            "unit": "ns/iter",
            "extra": "iterations: 242414\ncpu: 2874.124019239809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2836.1832027147066,
            "unit": "ns/iter",
            "extra": "iterations: 247540\ncpu: 2836.2123293205063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5227.43205742707,
            "unit": "ns/iter",
            "extra": "iterations: 134989\ncpu: 5227.501500122251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5361.279813893916,
            "unit": "ns/iter",
            "extra": "iterations: 129604\ncpu: 5361.20258633992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1904.9708098080735,
            "unit": "ns/iter",
            "extra": "iterations: 367692\ncpu: 1904.8779957138056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9573.004857908965,
            "unit": "ns/iter",
            "extra": "iterations: 72665\ncpu: 9572.710383265621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7758.150037151001,
            "unit": "ns/iter",
            "extra": "iterations: 90171\ncpu: 7757.924388107004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7741.3509729862235,
            "unit": "ns/iter",
            "extra": "iterations: 90289\ncpu: 7741.112427870475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7627.886866730183,
            "unit": "ns/iter",
            "extra": "iterations: 92970\ncpu: 7627.572335161967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18337.45267618772,
            "unit": "ns/iter",
            "extra": "iterations: 38226\ncpu: 18337.03238633375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56226.756214463356,
            "unit": "ns/iter",
            "extra": "iterations: 12310\ncpu: 56225.865150284284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44808.38240746414,
            "unit": "ns/iter",
            "extra": "iterations: 15643\ncpu: 44808.4638496454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44786.030650608314,
            "unit": "ns/iter",
            "extra": "iterations: 15693\ncpu: 44784.177658829394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44661.783182765714,
            "unit": "ns/iter",
            "extra": "iterations: 15829\ncpu: 44660.427064249525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26379.028506788018,
            "unit": "ns/iter",
            "extra": "iterations: 26520\ncpu: 26378.15233785822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43686.79942603943,
            "unit": "ns/iter",
            "extra": "iterations: 16029\ncpu: 43685.201821698094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1846.796142396766,
            "unit": "ns/iter",
            "extra": "iterations: 383969\ncpu: 1846.748305201726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9727.269928212487,
            "unit": "ns/iter",
            "extra": "iterations: 72297\ncpu: 9726.977606263037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7851.449136620623,
            "unit": "ns/iter",
            "extra": "iterations: 89416\ncpu: 7851.289478393094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7933.455376980898,
            "unit": "ns/iter",
            "extra": "iterations: 88665\ncpu: 7933.53183330514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7733.2355741613,
            "unit": "ns/iter",
            "extra": "iterations: 90532\ncpu: 7732.982812707102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17676.986296136525,
            "unit": "ns/iter",
            "extra": "iterations: 39259\ncpu: 17676.451259583475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55473.559056987644,
            "unit": "ns/iter",
            "extra": "iterations: 12598\ncpu: 55470.65407207467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43853.16329105791,
            "unit": "ns/iter",
            "extra": "iterations: 15849\ncpu: 43851.719351378524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43513.73611633607,
            "unit": "ns/iter",
            "extra": "iterations: 15954\ncpu: 43512.241444151456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43638.009787315386,
            "unit": "ns/iter",
            "extra": "iterations: 15939\ncpu: 43638.42775581878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25981.215449406995,
            "unit": "ns/iter",
            "extra": "iterations: 27069\ncpu: 25981.12601130419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43721.68485225382,
            "unit": "ns/iter",
            "extra": "iterations: 16075\ncpu: 43720.63452566124 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422469966,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 578.8654415520433,
            "unit": "ns/iter",
            "extra": "iterations: 1209846\ncpu: 578.8549947679292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5340.676929999972,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5340.619000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10312.950868449747,
            "unit": "ns/iter",
            "extra": "iterations: 80661\ncpu: 10312.683948872442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15707.907697710963,
            "unit": "ns/iter",
            "extra": "iterations: 54094\ncpu: 15707.564609753392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20548.84839536233,
            "unit": "ns/iter",
            "extra": "iterations: 40975\ncpu: 20547.934106162298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25659.04524804214,
            "unit": "ns/iter",
            "extra": "iterations: 32797\ncpu: 25657.968716650907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30519.59964354557,
            "unit": "ns/iter",
            "extra": "iterations: 27493\ncpu: 30519.055759647916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35484.13300909412,
            "unit": "ns/iter",
            "extra": "iterations: 23645\ncpu: 35481.911609219715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39783.41370111,
            "unit": "ns/iter",
            "extra": "iterations: 20991\ncpu: 39781.93035110283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 542.2203560615783,
            "unit": "ns/iter",
            "extra": "iterations: 1277251\ncpu: 542.2052517476991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 420.77898027551674,
            "unit": "ns/iter",
            "extra": "iterations: 1657938\ncpu: 420.7674231485136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 430.0912610219123,
            "unit": "ns/iter",
            "extra": "iterations: 1629710\ncpu: 430.06399911640744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.48404581957516,
            "unit": "ns/iter",
            "extra": "iterations: 1636593\ncpu: 425.470474332959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 899.408137764194,
            "unit": "ns/iter",
            "extra": "iterations: 779477\ncpu: 899.3573896343321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1428.1444823951902,
            "unit": "ns/iter",
            "extra": "iterations: 550420\ncpu: 1428.1010864430773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8479.855751295476,
            "unit": "ns/iter",
            "extra": "iterations: 96500\ncpu: 8479.404145077733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8977.747610949898,
            "unit": "ns/iter",
            "extra": "iterations: 91145\ncpu: 8977.304295353539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8983.293189160995,
            "unit": "ns/iter",
            "extra": "iterations: 91927\ncpu: 8983.183395520387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8706.62158859477,
            "unit": "ns/iter",
            "extra": "iterations: 93290\ncpu: 8706.589130667819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26418.381979940772,
            "unit": "ns/iter",
            "extra": "iterations: 30910\ncpu: 26417.470074409564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 261845.97267267344,
            "unit": "ns/iter",
            "extra": "iterations: 3330\ncpu: 261839.57957958055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198137.98928238274,
            "unit": "ns/iter",
            "extra": "iterations: 4292\ncpu: 198126.9571295438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 201614.95462963436,
            "unit": "ns/iter",
            "extra": "iterations: 4320\ncpu: 201605.94907407466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208414.096229479,
            "unit": "ns/iter",
            "extra": "iterations: 4323\ncpu: 208404.2563034929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103867.02226672822,
            "unit": "ns/iter",
            "extra": "iterations: 8488\ncpu: 103865.6927426952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 194689.91036166178,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 194684.31329043728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5602.895600000011,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5602.765000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26259.506454939634,
            "unit": "ns/iter",
            "extra": "iterations: 31991\ncpu: 26259.466725016413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22657.478866008365,
            "unit": "ns/iter",
            "extra": "iterations: 37002\ncpu: 22657.213123614907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22664.853663774473,
            "unit": "ns/iter",
            "extra": "iterations: 37243\ncpu: 22664.761163171643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22632.95101985721,
            "unit": "ns/iter",
            "extra": "iterations: 37015\ncpu: 22632.94069971626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44661.209871270024,
            "unit": "ns/iter",
            "extra": "iterations: 18721\ncpu: 44659.97008706789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 281791.5664608237,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 281779.7855053635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 216500.08503233021,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 216490.02983590355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215015.05440157812,
            "unit": "ns/iter",
            "extra": "iterations: 4044\ncpu: 215013.20474777507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 213689.51916035922,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 213677.61776909942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111891.40438912058,
            "unit": "ns/iter",
            "extra": "iterations: 7792\ncpu: 111889.39938398308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 207259.80367367587,
            "unit": "ns/iter",
            "extra": "iterations: 4192\ncpu: 207253.41125954266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 853668.7992863454,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 853646.3871543232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 475305.41707183496,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 475298.86547812214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2389.7232882575563,
            "unit": "ns/iter",
            "extra": "iterations: 336397\ncpu: 2389.7475304476607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 7999.712880394445,
            "unit": "ns/iter",
            "extra": "iterations: 103281\ncpu: 7999.3948548135095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8602.247020417071,
            "unit": "ns/iter",
            "extra": "iterations: 96490\ncpu: 8601.963934086472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8521.82415506533,
            "unit": "ns/iter",
            "extra": "iterations: 97404\ncpu: 8521.103856104446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8087.482661640696,
            "unit": "ns/iter",
            "extra": "iterations: 102403\ncpu: 8086.93104694196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25630.98770089609,
            "unit": "ns/iter",
            "extra": "iterations: 32604\ncpu: 25630.11286958669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 270645.09996923845,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 270639.8646570286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 204490.78865150744,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 204475.67195037895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 204814.91468757263,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 204809.01544846655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 202719.1587046438,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 202707.76297657393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102223.54069299514,
            "unit": "ns/iter",
            "extra": "iterations: 8687\ncpu: 102218.40681478115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 194452.31823180083,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 194444.5788431925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 210.39396860809842,
            "unit": "ns/iter",
            "extra": "iterations: 3315122\ncpu: 210.39608798710907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1455.3471710954805,
            "unit": "ns/iter",
            "extra": "iterations: 481918\ncpu: 1455.3417801368785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1240.0814444360938,
            "unit": "ns/iter",
            "extra": "iterations: 587468\ncpu: 1240.0054130607907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1156.7486380859448,
            "unit": "ns/iter",
            "extra": "iterations: 604113\ncpu: 1156.6387414275137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 926.441801002693,
            "unit": "ns/iter",
            "extra": "iterations: 759910\ncpu: 926.3893092603059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8711.70740049747,
            "unit": "ns/iter",
            "extra": "iterations: 80400\ncpu: 8711.123134328358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12742.047062048252,
            "unit": "ns/iter",
            "extra": "iterations: 54715\ncpu: 12741.935483870993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2863.596888248636,
            "unit": "ns/iter",
            "extra": "iterations: 243657\ncpu: 2863.5540944852737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2874.4306193946627,
            "unit": "ns/iter",
            "extra": "iterations: 245191\ncpu: 2874.366514268483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2849.3104387193116,
            "unit": "ns/iter",
            "extra": "iterations: 244963\ncpu: 2849.336430399677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5109.096694626325,
            "unit": "ns/iter",
            "extra": "iterations: 136626\ncpu: 5108.795544039917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5257.403012681077,
            "unit": "ns/iter",
            "extra": "iterations: 131378\ncpu: 5257.091750521362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1903.876777367687,
            "unit": "ns/iter",
            "extra": "iterations: 365850\ncpu: 1903.7231105644464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9595.17943917571,
            "unit": "ns/iter",
            "extra": "iterations: 72643\ncpu: 9594.481230125522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7637.33791016737,
            "unit": "ns/iter",
            "extra": "iterations: 91548\ncpu: 7637.4120679861835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7730.900508039458,
            "unit": "ns/iter",
            "extra": "iterations: 90741\ncpu: 7730.559504523816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7693.882652616488,
            "unit": "ns/iter",
            "extra": "iterations: 91668\ncpu: 7693.543003010921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18298.337344323274,
            "unit": "ns/iter",
            "extra": "iterations: 37979\ncpu: 18297.10102951627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56909.61273792369,
            "unit": "ns/iter",
            "extra": "iterations: 12294\ncpu: 56908.41874084938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44835.17996900114,
            "unit": "ns/iter",
            "extra": "iterations: 15486\ncpu: 44831.35735503005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44603.738532404415,
            "unit": "ns/iter",
            "extra": "iterations: 15631\ncpu: 44601.50342268595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44381.85091598118,
            "unit": "ns/iter",
            "extra": "iterations: 15830\ncpu: 44381.20656980359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26425.952284035196,
            "unit": "ns/iter",
            "extra": "iterations: 26532\ncpu: 26426.172169455756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44042.86425254163,
            "unit": "ns/iter",
            "extra": "iterations: 15934\ncpu: 44041.9229320956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1844.0483187274347,
            "unit": "ns/iter",
            "extra": "iterations: 381467\ncpu: 1844.0195351105058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9639.599442660061,
            "unit": "ns/iter",
            "extra": "iterations: 72846\ncpu: 9638.894379924724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7682.449195926987,
            "unit": "ns/iter",
            "extra": "iterations: 91223\ncpu: 7682.085658222238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7717.466653477659,
            "unit": "ns/iter",
            "extra": "iterations: 90984\ncpu: 7716.967818517548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7586.329815844727,
            "unit": "ns/iter",
            "extra": "iterations: 92585\ncpu: 7586.162985364715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17661.45936573401,
            "unit": "ns/iter",
            "extra": "iterations: 39794\ncpu: 17661.210232698442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55880.65071036422,
            "unit": "ns/iter",
            "extra": "iterations: 12388\ncpu: 55877.897965772914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44256.876842306316,
            "unit": "ns/iter",
            "extra": "iterations: 15809\ncpu: 44257.290151179695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43712.59174254679,
            "unit": "ns/iter",
            "extra": "iterations: 16034\ncpu: 43711.27603841821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43800.48690706849,
            "unit": "ns/iter",
            "extra": "iterations: 16001\ncpu: 43795.85025935922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25668.853181920207,
            "unit": "ns/iter",
            "extra": "iterations: 27122\ncpu: 25667.27379986695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43374.64461351082,
            "unit": "ns/iter",
            "extra": "iterations: 16430\ncpu: 43371.73463177085 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702469388537,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 577.2425094206258,
            "unit": "ns/iter",
            "extra": "iterations: 1208518\ncpu: 577.2077867272147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5334.671649999905,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5334.637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10409.811480241264,
            "unit": "ns/iter",
            "extra": "iterations: 79737\ncpu: 10409.410938460189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15770.455232394519,
            "unit": "ns/iter",
            "extra": "iterations: 53465\ncpu: 15769.969138688859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20377.40675804932,
            "unit": "ns/iter",
            "extra": "iterations: 40781\ncpu: 20376.599396777907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25573.81007383913,
            "unit": "ns/iter",
            "extra": "iterations: 32639\ncpu: 25572.640093140093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31115.826689900077,
            "unit": "ns/iter",
            "extra": "iterations: 27546\ncpu: 31114.666376243353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35352.559473639856,
            "unit": "ns/iter",
            "extra": "iterations: 23254\ncpu: 35349.9827986583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40375.097151497626,
            "unit": "ns/iter",
            "extra": "iterations: 19835\ncpu: 40372.01411646076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 542.7822004343524,
            "unit": "ns/iter",
            "extra": "iterations: 1290627\ncpu: 542.7421710532932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 425.82915599816056,
            "unit": "ns/iter",
            "extra": "iterations: 1652449\ncpu: 425.80291434107767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 430.4743005126785,
            "unit": "ns/iter",
            "extra": "iterations: 1633768\ncpu: 430.45230412151636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 420.79583737787124,
            "unit": "ns/iter",
            "extra": "iterations: 1667891\ncpu: 420.7640667165892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 901.2859043500009,
            "unit": "ns/iter",
            "extra": "iterations: 772671\ncpu: 901.2359723608106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1424.8765390336198,
            "unit": "ns/iter",
            "extra": "iterations: 558711\ncpu: 1424.7927819570386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8559.145619794104,
            "unit": "ns/iter",
            "extra": "iterations: 94733\ncpu: 8558.64587841617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9134.580648754498,
            "unit": "ns/iter",
            "extra": "iterations: 89772\ncpu: 9134.07632669429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9170.222616378629,
            "unit": "ns/iter",
            "extra": "iterations: 89643\ncpu: 9169.73439086153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8614.447727033736,
            "unit": "ns/iter",
            "extra": "iterations: 95250\ncpu: 8614.149081364836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26660.353690628093,
            "unit": "ns/iter",
            "extra": "iterations: 31160\ncpu: 26659.037227214332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 260607.23722737387,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 260592.1720944123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 204274.58838679863,
            "unit": "ns/iter",
            "extra": "iterations: 4271\ncpu: 204262.9829079844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 198006.55278039328,
            "unit": "ns/iter",
            "extra": "iterations: 4244\ncpu: 197994.74552309135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199803.90386870402,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 199791.72332942515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104548.97364586481,
            "unit": "ns/iter",
            "extra": "iterations: 8234\ncpu: 104542.27592907455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195622.54569892655,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 195611.15591397783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5644.621289999918,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5644.4350000000295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26231.561023993116,
            "unit": "ns/iter",
            "extra": "iterations: 31758\ncpu: 26230.874110460296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22788.53440630708,
            "unit": "ns/iter",
            "extra": "iterations: 36534\ncpu: 22787.56227076151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22703.22682973441,
            "unit": "ns/iter",
            "extra": "iterations: 36631\ncpu: 22701.64341677809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22340.448330428568,
            "unit": "ns/iter",
            "extra": "iterations: 37285\ncpu: 22338.916454338207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43924.77359697296,
            "unit": "ns/iter",
            "extra": "iterations: 18763\ncpu: 43922.26722805518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 307867.7792349753,
            "unit": "ns/iter",
            "extra": "iterations: 2745\ncpu: 307847.7231329688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 219882.27079055016,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 219867.71047228036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 219652.37064173823,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 219638.40323395786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 218964.35902586617,
            "unit": "ns/iter",
            "extra": "iterations: 3983\ncpu: 218952.24704996188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 114660.82883831265,
            "unit": "ns/iter",
            "extra": "iterations: 7601\ncpu: 114652.9798710699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 211801.99200968834,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 211789.53995157467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 853945.7710951373,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 853898.8330341127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 478367.88679246773,
            "unit": "ns/iter",
            "extra": "iterations: 1855\ncpu: 478355.4716981159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2424.6744888322796,
            "unit": "ns/iter",
            "extra": "iterations: 289093\ncpu: 2424.5848221852425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8171.989063862664,
            "unit": "ns/iter",
            "extra": "iterations: 99761\ncpu: 8171.650244083385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8447.343473332778,
            "unit": "ns/iter",
            "extra": "iterations: 97929\ncpu: 8446.931960910457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8347.875612889991,
            "unit": "ns/iter",
            "extra": "iterations: 97285\ncpu: 8347.274502749648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7955.473953657454,
            "unit": "ns/iter",
            "extra": "iterations: 104698\ncpu: 7955.093698064936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26108.51642330295,
            "unit": "ns/iter",
            "extra": "iterations: 32667\ncpu: 26108.106039734324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 274076.6916614835,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 274067.61045426206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 204572.47889611073,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 204571.17346938793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 202635.08487940065,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 202623.93320964687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 201522.4582284346,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 201512.61158159823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102769.57297109175,
            "unit": "ns/iter",
            "extra": "iterations: 8613\ncpu: 102763.94984326093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 196213.26263299203,
            "unit": "ns/iter",
            "extra": "iterations: 4512\ncpu: 196211.8351063829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 210.44046492700755,
            "unit": "ns/iter",
            "extra": "iterations: 3327232\ncpu: 210.42923968031084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1445.935920154947,
            "unit": "ns/iter",
            "extra": "iterations: 484739\ncpu: 1445.8475592019724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1185.2205458112824,
            "unit": "ns/iter",
            "extra": "iterations: 589288\ncpu: 1185.1541181900889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1229.7119892446144,
            "unit": "ns/iter",
            "extra": "iterations: 569010\ncpu: 1229.6451731955472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 902.0536680175586,
            "unit": "ns/iter",
            "extra": "iterations: 779999\ncpu: 902.0106436033856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8813.350498422173,
            "unit": "ns/iter",
            "extra": "iterations: 79852\ncpu: 8813.128036868222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12743.68329502687,
            "unit": "ns/iter",
            "extra": "iterations: 54385\ncpu: 12743.431093132218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2896.017039016,
            "unit": "ns/iter",
            "extra": "iterations: 241798\ncpu: 2895.958610079493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2940.317702991036,
            "unit": "ns/iter",
            "extra": "iterations: 237892\ncpu: 2940.260286180269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2915.159657369348,
            "unit": "ns/iter",
            "extra": "iterations: 241893\ncpu: 2915.0744337372485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5171.571029955208,
            "unit": "ns/iter",
            "extra": "iterations: 134035\ncpu: 5171.479837355951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5344.65038656213,
            "unit": "ns/iter",
            "extra": "iterations: 128828\ncpu: 5344.144130158053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1885.915735135418,
            "unit": "ns/iter",
            "extra": "iterations: 371163\ncpu: 1885.8127022359474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9464.027246219623,
            "unit": "ns/iter",
            "extra": "iterations: 73735\ncpu: 9463.340340408145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7672.579809852126,
            "unit": "ns/iter",
            "extra": "iterations: 91718\ncpu: 7672.3423973485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7775.338490954948,
            "unit": "ns/iter",
            "extra": "iterations: 90481\ncpu: 7774.905228722039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7632.2818408692365,
            "unit": "ns/iter",
            "extra": "iterations: 91761\ncpu: 7631.786924728405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18396.427028862916,
            "unit": "ns/iter",
            "extra": "iterations: 38248\ncpu: 18395.393223175037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56291.32538962498,
            "unit": "ns/iter",
            "extra": "iterations: 12127\ncpu: 56288.11742393064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45259.621630312424,
            "unit": "ns/iter",
            "extra": "iterations: 15543\ncpu: 45256.964549958175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45264.100951886,
            "unit": "ns/iter",
            "extra": "iterations: 15443\ncpu: 45260.4999028693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44751.374361262766,
            "unit": "ns/iter",
            "extra": "iterations: 15656\ncpu: 44751.04113438886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26699.39177718856,
            "unit": "ns/iter",
            "extra": "iterations: 26390\ncpu: 26698.64342554008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44536.57286559666,
            "unit": "ns/iter",
            "extra": "iterations: 15707\ncpu: 44534.952568917564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1877.179051474229,
            "unit": "ns/iter",
            "extra": "iterations: 378461\ncpu: 1877.1466544769298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9619.42486890522,
            "unit": "ns/iter",
            "extra": "iterations: 73039\ncpu: 9618.855679842367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7726.591742060024,
            "unit": "ns/iter",
            "extra": "iterations: 90967\ncpu: 7726.05890048043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7786.760115575197,
            "unit": "ns/iter",
            "extra": "iterations: 90331\ncpu: 7786.343558689637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7609.147408237667,
            "unit": "ns/iter",
            "extra": "iterations: 92003\ncpu: 7608.56167733666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17645.674622736147,
            "unit": "ns/iter",
            "extra": "iterations: 39760\ncpu: 17645.176056338056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55360.0101819968,
            "unit": "ns/iter",
            "extra": "iterations: 12473\ncpu: 55356.96304016585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44181.46835362163,
            "unit": "ns/iter",
            "extra": "iterations: 15768\ncpu: 44180.19406392707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44649.95026194703,
            "unit": "ns/iter",
            "extra": "iterations: 15843\ncpu: 44646.30436154775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43777.87114453237,
            "unit": "ns/iter",
            "extra": "iterations: 15692\ncpu: 43775.28677032931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26189.861420559886,
            "unit": "ns/iter",
            "extra": "iterations: 26750\ncpu: 26188.444859813353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43808.20335250313,
            "unit": "ns/iter",
            "extra": "iterations: 16346\ncpu: 43805.62217056115 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479712335,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 572.3300153927388,
            "unit": "ns/iter",
            "extra": "iterations: 1223952\ncpu: 572.2898446997922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5389.64519999979,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5389.529999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10461.13066056776,
            "unit": "ns/iter",
            "extra": "iterations: 79144\ncpu: 10460.695693924994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15682.334431968253,
            "unit": "ns/iter",
            "extra": "iterations: 53703\ncpu: 15682.03824739773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20491.776654503195,
            "unit": "ns/iter",
            "extra": "iterations: 40556\ncpu: 20491.07653614754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25731.958936975996,
            "unit": "ns/iter",
            "extra": "iterations: 32511\ncpu: 25730.912614192093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30993.46385340335,
            "unit": "ns/iter",
            "extra": "iterations: 26849\ncpu: 30991.668218555616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35628.890466012,
            "unit": "ns/iter",
            "extra": "iterations: 23390\ncpu: 35626.318939717836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40850.18253106045,
            "unit": "ns/iter",
            "extra": "iterations: 21169\ncpu: 40847.93802258021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 544.6595760372061,
            "unit": "ns/iter",
            "extra": "iterations: 1301718\ncpu: 544.6340144332336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 410.92093614377944,
            "unit": "ns/iter",
            "extra": "iterations: 1684613\ncpu: 410.9011387185065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 422.8446133136076,
            "unit": "ns/iter",
            "extra": "iterations: 1651377\ncpu: 422.8266470951211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 416.83046987643183,
            "unit": "ns/iter",
            "extra": "iterations: 1672163\ncpu: 416.8067945529233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 891.721955151799,
            "unit": "ns/iter",
            "extra": "iterations: 781525\ncpu: 891.672435302773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1435.7711799058384,
            "unit": "ns/iter",
            "extra": "iterations: 556341\ncpu: 1435.688543537148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8285.741780843344,
            "unit": "ns/iter",
            "extra": "iterations: 96999\ncpu: 8285.308095959748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8909.865532238651,
            "unit": "ns/iter",
            "extra": "iterations: 91970\ncpu: 8909.567250190275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9100.64916963571,
            "unit": "ns/iter",
            "extra": "iterations: 89539\ncpu: 9100.3585029987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8464.687228659634,
            "unit": "ns/iter",
            "extra": "iterations: 96051\ncpu: 8464.532383837746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26766.05015035402,
            "unit": "ns/iter",
            "extra": "iterations: 30927\ncpu: 26765.454133928215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 261801.56832578455,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 261792.73001508278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 204229.98153342388,
            "unit": "ns/iter",
            "extra": "iterations: 4278\ncpu: 204221.8326320707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200616.99626690484,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 200613.78908072793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 202125.47120542105,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 202116.08766612268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104902.44782399756,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 104899.55518153399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195799.16763392545,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 195790.33482142817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5567.099369999937,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5566.808999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25884.19663708533,
            "unit": "ns/iter",
            "extra": "iterations: 32115\ncpu: 25883.73034407608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23111.449254143532,
            "unit": "ns/iter",
            "extra": "iterations: 36200\ncpu: 23110.795580110473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22783.96860042048,
            "unit": "ns/iter",
            "extra": "iterations: 36561\ncpu: 22783.2389704876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22274.770908800034,
            "unit": "ns/iter",
            "extra": "iterations: 37544\ncpu: 22273.697528233464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46615.288096391596,
            "unit": "ns/iter",
            "extra": "iterations: 18591\ncpu: 46613.38281964384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 288668.3326765185,
            "unit": "ns/iter",
            "extra": "iterations: 3045\ncpu: 288650.6075533681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 220285.61511334713,
            "unit": "ns/iter",
            "extra": "iterations: 3970\ncpu: 220277.93450881657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 219103.81749622698,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 219094.21820010067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 218153.23527943325,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 218141.26746507076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 114727.50230718753,
            "unit": "ns/iter",
            "extra": "iterations: 7585\ncpu: 114720.75148319021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 211595.93994141134,
            "unit": "ns/iter",
            "extra": "iterations: 4096\ncpu: 211584.10644531166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 864399.9719710925,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 864366.0940325508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 481126.24034801836,
            "unit": "ns/iter",
            "extra": "iterations: 1839\ncpu: 481117.2376291463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2399.6713781863573,
            "unit": "ns/iter",
            "extra": "iterations: 336551\ncpu: 2399.6348250339533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8446.14656485446,
            "unit": "ns/iter",
            "extra": "iterations: 97827\ncpu: 8445.917793656135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8440.784543683772,
            "unit": "ns/iter",
            "extra": "iterations: 98057\ncpu: 8440.224563264263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8236.738813952039,
            "unit": "ns/iter",
            "extra": "iterations: 100974\ncpu: 8236.305385544787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7922.755741546757,
            "unit": "ns/iter",
            "extra": "iterations: 104545\ncpu: 7922.283227318386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25862.038274850805,
            "unit": "ns/iter",
            "extra": "iterations: 32345\ncpu: 25859.9628999846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 273387.8705080633,
            "unit": "ns/iter",
            "extra": "iterations: 3228\ncpu: 273373.88475836493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 205789.36898394744,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 205781.911183445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 205160.1916376424,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 205154.98257839802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 202369.42317438778,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 202364.43215848907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 103254.37204124666,
            "unit": "ns/iter",
            "extra": "iterations: 8534\ncpu: 103252.1209280522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 197073.44531424504,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 197065.98076493095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 207.38495915356853,
            "unit": "ns/iter",
            "extra": "iterations: 3378387\ncpu: 207.383523557248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1426.9904891474937,
            "unit": "ns/iter",
            "extra": "iterations: 480714\ncpu: 1426.947623743028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1217.9117197724213,
            "unit": "ns/iter",
            "extra": "iterations: 575361\ncpu: 1217.8553986106035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1194.3063743436048,
            "unit": "ns/iter",
            "extra": "iterations: 585927\ncpu: 1194.2549157147562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 905.5852169310551,
            "unit": "ns/iter",
            "extra": "iterations: 774670\ncpu: 905.5381000942357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8722.133484784383,
            "unit": "ns/iter",
            "extra": "iterations: 80114\ncpu: 8721.77272386846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12402.21411083555,
            "unit": "ns/iter",
            "extra": "iterations: 55957\ncpu: 12401.765641474678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2937.5410908750923,
            "unit": "ns/iter",
            "extra": "iterations: 236269\ncpu: 2937.5216384713995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2895.4698714348697,
            "unit": "ns/iter",
            "extra": "iterations: 238478\ncpu: 2895.44695946795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2895.3461606015035,
            "unit": "ns/iter",
            "extra": "iterations: 239126\ncpu: 2895.3062402248233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5277.786041362136,
            "unit": "ns/iter",
            "extra": "iterations: 132778\ncpu: 5277.7116691018055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5451.833681230868,
            "unit": "ns/iter",
            "extra": "iterations: 126474\ncpu: 5451.660420323563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1905.531138264387,
            "unit": "ns/iter",
            "extra": "iterations: 367217\ncpu: 1905.4518173178162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9597.351171680544,
            "unit": "ns/iter",
            "extra": "iterations: 72204\ncpu: 9596.923993130567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7905.557043397087,
            "unit": "ns/iter",
            "extra": "iterations: 88047\ncpu: 7905.5152361807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7882.251985314988,
            "unit": "ns/iter",
            "extra": "iterations: 88525\ncpu: 7882.002824060997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7674.781985783056,
            "unit": "ns/iter",
            "extra": "iterations: 91017\ncpu: 7674.354241515396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18307.794486282037,
            "unit": "ns/iter",
            "extra": "iterations: 38377\ncpu: 18307.126664408643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57741.949772444656,
            "unit": "ns/iter",
            "extra": "iterations: 12085\ncpu: 57739.6524617296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45782.71582311577,
            "unit": "ns/iter",
            "extra": "iterations: 15332\ncpu: 45780.68092877676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45654.88921434643,
            "unit": "ns/iter",
            "extra": "iterations: 15363\ncpu: 45652.489748096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45751.25631042706,
            "unit": "ns/iter",
            "extra": "iterations: 15411\ncpu: 45750.94413081531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27004.394197424735,
            "unit": "ns/iter",
            "extra": "iterations: 25954\ncpu: 27003.664175078567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45309.01003323075,
            "unit": "ns/iter",
            "extra": "iterations: 15648\ncpu: 45305.29780163614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1833.2557702032698,
            "unit": "ns/iter",
            "extra": "iterations: 381659\ncpu: 1833.2398816744562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9406.103980569529,
            "unit": "ns/iter",
            "extra": "iterations: 74110\ncpu: 9405.981648900333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7733.216132208028,
            "unit": "ns/iter",
            "extra": "iterations: 90403\ncpu: 7732.856210524023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7814.520519896566,
            "unit": "ns/iter",
            "extra": "iterations: 89864\ncpu: 7814.21370070335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7763.913584240684,
            "unit": "ns/iter",
            "extra": "iterations: 89648\ncpu: 7763.520658575807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17589.17033670561,
            "unit": "ns/iter",
            "extra": "iterations: 39827\ncpu: 17588.94468576598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56291.937857199686,
            "unit": "ns/iter",
            "extra": "iterations: 12423\ncpu: 56290.94421637347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44144.539123778704,
            "unit": "ns/iter",
            "extra": "iterations: 15681\ncpu: 44143.913015751095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44372.70575936046,
            "unit": "ns/iter",
            "extra": "iterations: 15783\ncpu: 44369.536843439215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44077.46912477628,
            "unit": "ns/iter",
            "extra": "iterations: 15676\ncpu: 44075.11482520971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26182.614433452385,
            "unit": "ns/iter",
            "extra": "iterations: 26688\ncpu: 26181.45233812967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43867.207069459764,
            "unit": "ns/iter",
            "extra": "iterations: 16154\ncpu: 43864.8074780234 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488551709,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 584.3256806845616,
            "unit": "ns/iter",
            "extra": "iterations: 1195708\ncpu: 584.3137287699003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5379.571779999992,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5379.421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10434.796588171721,
            "unit": "ns/iter",
            "extra": "iterations: 80133\ncpu: 10434.389078157561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15577.231282212335,
            "unit": "ns/iter",
            "extra": "iterations: 54133\ncpu: 15576.921655921527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20648.05233158104,
            "unit": "ns/iter",
            "extra": "iterations: 40702\ncpu: 20647.407989779378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25480.243606176417,
            "unit": "ns/iter",
            "extra": "iterations: 32766\ncpu: 25477.29963987058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30757.949226888926,
            "unit": "ns/iter",
            "extra": "iterations: 27357\ncpu: 30757.440508827724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36287.415075763,
            "unit": "ns/iter",
            "extra": "iterations: 23362\ncpu: 36285.621950175475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40708.05851139523,
            "unit": "ns/iter",
            "extra": "iterations: 21107\ncpu: 40706.84133225945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 542.5834263803815,
            "unit": "ns/iter",
            "extra": "iterations: 1295939\ncpu: 542.5496879096931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 415.7054585969299,
            "unit": "ns/iter",
            "extra": "iterations: 1690068\ncpu: 415.70747449215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.61779034679677,
            "unit": "ns/iter",
            "extra": "iterations: 1666533\ncpu: 424.60749352098037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 429.7313999977218,
            "unit": "ns/iter",
            "extra": "iterations: 1645067\ncpu: 429.72918428246453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 897.8537112879999,
            "unit": "ns/iter",
            "extra": "iterations: 782316\ncpu: 897.8080468761995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1630.8814035506539,
            "unit": "ns/iter",
            "extra": "iterations: 486566\ncpu: 1630.808153467362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8407.825638487118,
            "unit": "ns/iter",
            "extra": "iterations: 96948\ncpu: 8407.378182118251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9119.599667828697,
            "unit": "ns/iter",
            "extra": "iterations: 91519\ncpu: 9119.139195139793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9068.814114808574,
            "unit": "ns/iter",
            "extra": "iterations: 89523\ncpu: 9068.342213732798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8644.273110562857,
            "unit": "ns/iter",
            "extra": "iterations: 95584\ncpu: 8643.787663207218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26581.811060355547,
            "unit": "ns/iter",
            "extra": "iterations: 30867\ncpu: 26580.47429293415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 260914.83914612563,
            "unit": "ns/iter",
            "extra": "iterations: 3326\ncpu: 260897.32411304888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 199787.36083686617,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 199777.0098730603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 198325.78722908435,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 198316.98904684227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200424.30592107316,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 200410.12687969938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104168.75754694699,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 104161.64725457573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 194692.69060401394,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 194682.95302013424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5669.017760000088,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5668.515999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26145.756968292233,
            "unit": "ns/iter",
            "extra": "iterations: 32325\ncpu: 26144.60324825981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23108.026085272366,
            "unit": "ns/iter",
            "extra": "iterations: 36189\ncpu: 23106.435657243863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22866.756682176998,
            "unit": "ns/iter",
            "extra": "iterations: 36964\ncpu: 22865.255383616484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22574.66723392646,
            "unit": "ns/iter",
            "extra": "iterations: 37020\ncpu: 22573.595353862765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 42963.917446052415,
            "unit": "ns/iter",
            "extra": "iterations: 19139\ncpu: 42961.04812163631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 284518.614762051,
            "unit": "ns/iter",
            "extra": "iterations: 3089\ncpu: 284506.7011977998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 221350.75627695202,
            "unit": "ns/iter",
            "extra": "iterations: 3943\ncpu: 221335.7595739294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 218584.43593632785,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 218579.93429365684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 217697.76691730603,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 217683.33333333256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 113845.46693465454,
            "unit": "ns/iter",
            "extra": "iterations: 7712\ncpu: 113841.99948132777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 208248.18498790183,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 208238.28087166997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 849784.049460439,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 849759.6223021605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 475232.0755531065,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 475201.78089584125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2345.1168317649153,
            "unit": "ns/iter",
            "extra": "iterations: 338889\ncpu: 2344.9923131172714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 7798.74309145761,
            "unit": "ns/iter",
            "extra": "iterations: 104255\ncpu: 7798.325260179369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8204.027953056739,
            "unit": "ns/iter",
            "extra": "iterations: 99524\ncpu: 8203.799083638147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8272.369259247575,
            "unit": "ns/iter",
            "extra": "iterations: 99399\ncpu: 8272.043984345879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7934.619235230558,
            "unit": "ns/iter",
            "extra": "iterations: 104319\ncpu: 7934.376288116274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25986.751680956524,
            "unit": "ns/iter",
            "extra": "iterations: 32422\ncpu: 25985.303189192473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 269804.28553996934,
            "unit": "ns/iter",
            "extra": "iterations: 3278\ncpu: 269801.0982306286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200856.99588289158,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 200851.50960658735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199339.85437998298,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 199331.604095562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198995.48794774775,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 198993.03897274207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101790.35555044717,
            "unit": "ns/iter",
            "extra": "iterations: 8702\ncpu: 101788.69225465428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 192912.87730464636,
            "unit": "ns/iter",
            "extra": "iterations: 4556\ncpu: 192907.94556628694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 208.7542414339405,
            "unit": "ns/iter",
            "extra": "iterations: 3348278\ncpu: 208.7478100683405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1438.500867631913,
            "unit": "ns/iter",
            "extra": "iterations: 487534\ncpu: 1438.4783420233132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1109.452217651338,
            "unit": "ns/iter",
            "extra": "iterations: 631028\ncpu: 1109.44522271595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1156.9626711283584,
            "unit": "ns/iter",
            "extra": "iterations: 606635\ncpu: 1156.918410576371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 906.0775430701691,
            "unit": "ns/iter",
            "extra": "iterations: 774202\ncpu: 906.0582380308971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8734.32648771578,
            "unit": "ns/iter",
            "extra": "iterations: 80879\ncpu: 8734.178216842478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12812.487099049413,
            "unit": "ns/iter",
            "extra": "iterations: 53872\ncpu: 12812.357068607005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2911.3048217362057,
            "unit": "ns/iter",
            "extra": "iterations: 239084\ncpu: 2911.254203543528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2914.4685098265063,
            "unit": "ns/iter",
            "extra": "iterations: 242663\ncpu: 2914.3882668556917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2855.913023572671,
            "unit": "ns/iter",
            "extra": "iterations: 242445\ncpu: 2855.8728783847855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5133.793937590833,
            "unit": "ns/iter",
            "extra": "iterations: 134435\ncpu: 5133.70178896865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5397.728806064433,
            "unit": "ns/iter",
            "extra": "iterations: 128893\ncpu: 5397.766364348708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1909.0258119981427,
            "unit": "ns/iter",
            "extra": "iterations: 367581\ncpu: 1908.942790840672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9570.363072923343,
            "unit": "ns/iter",
            "extra": "iterations: 73090\ncpu: 9570.135449446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7710.123427929901,
            "unit": "ns/iter",
            "extra": "iterations: 88975\ncpu: 7709.976959820102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7749.012006213657,
            "unit": "ns/iter",
            "extra": "iterations: 90120\ncpu: 7748.79383044833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7550.736207529513,
            "unit": "ns/iter",
            "extra": "iterations: 92478\ncpu: 7550.779644888454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18347.134736403514,
            "unit": "ns/iter",
            "extra": "iterations: 38297\ncpu: 18331.845836488257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55769.706935121925,
            "unit": "ns/iter",
            "extra": "iterations: 12516\ncpu: 55768.056887184146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44776.32926363736,
            "unit": "ns/iter",
            "extra": "iterations: 15726\ncpu: 44775.4991733442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44366.370323479605,
            "unit": "ns/iter",
            "extra": "iterations: 15797\ncpu: 44366.582262454904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44350.08655663199,
            "unit": "ns/iter",
            "extra": "iterations: 15874\ncpu: 44348.406198815246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26572.936475563652,
            "unit": "ns/iter",
            "extra": "iterations: 26478\ncpu: 26572.73207946203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43541.1027473912,
            "unit": "ns/iter",
            "extra": "iterations: 16088\ncpu: 43540.69492789625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1841.554264586028,
            "unit": "ns/iter",
            "extra": "iterations: 379990\ncpu: 1841.5416195163002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9607.627721633195,
            "unit": "ns/iter",
            "extra": "iterations: 73026\ncpu: 9607.353545312611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7839.173153126304,
            "unit": "ns/iter",
            "extra": "iterations: 89083\ncpu: 7839.1522512713145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7735.722358038847,
            "unit": "ns/iter",
            "extra": "iterations: 89990\ncpu: 7735.242804756094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7556.978098459096,
            "unit": "ns/iter",
            "extra": "iterations: 91957\ncpu: 7556.455734745555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17453.95317476195,
            "unit": "ns/iter",
            "extra": "iterations: 40192\ncpu: 17453.0478702229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55110.38962166846,
            "unit": "ns/iter",
            "extra": "iterations: 12661\ncpu: 55109.3594502797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46103.80513508665,
            "unit": "ns/iter",
            "extra": "iterations: 15657\ncpu: 46101.756402886545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45788.294590831196,
            "unit": "ns/iter",
            "extra": "iterations: 15788\ncpu: 45784.741575880114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44023.83772345722,
            "unit": "ns/iter",
            "extra": "iterations: 15831\ncpu: 44019.392331501585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26418.43300407296,
            "unit": "ns/iter",
            "extra": "iterations: 26524\ncpu: 26416.686774242335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43416.99576972863,
            "unit": "ns/iter",
            "extra": "iterations: 16311\ncpu: 43414.74465084981 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702491194625,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 577.8509768388413,
            "unit": "ns/iter",
            "extra": "iterations: 1210691\ncpu: 577.8353849165477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5345.79430000008,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5345.816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10339.696939746058,
            "unit": "ns/iter",
            "extra": "iterations: 80941\ncpu: 10339.653574826105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15718.890452261612,
            "unit": "ns/iter",
            "extra": "iterations: 53730\ncpu: 15718.390098641356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20505.6671690835,
            "unit": "ns/iter",
            "extra": "iterations: 40471\ncpu: 20504.50940179388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25731.372058642097,
            "unit": "ns/iter",
            "extra": "iterations: 32468\ncpu: 25730.251324380926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31130.046133974945,
            "unit": "ns/iter",
            "extra": "iterations: 27095\ncpu: 31128.263517254105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35867.19752454295,
            "unit": "ns/iter",
            "extra": "iterations: 23430\ncpu: 35865.689287238565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40630.185242664105,
            "unit": "ns/iter",
            "extra": "iterations: 21264\ncpu: 40626.923438675665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 540.7114886249675,
            "unit": "ns/iter",
            "extra": "iterations: 1293845\ncpu: 540.7132229903893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 411.767742826631,
            "unit": "ns/iter",
            "extra": "iterations: 1708606\ncpu: 411.7458910948454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 420.34332040677367,
            "unit": "ns/iter",
            "extra": "iterations: 1680005\ncpu: 420.33785613733306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 413.3928821228874,
            "unit": "ns/iter",
            "extra": "iterations: 1692780\ncpu: 413.37834804286496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 886.4381874882542,
            "unit": "ns/iter",
            "extra": "iterations: 789468\ncpu: 886.42959562642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1428.949568456091,
            "unit": "ns/iter",
            "extra": "iterations: 558460\ncpu: 1428.9018013823732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8587.315941703398,
            "unit": "ns/iter",
            "extra": "iterations: 97844\ncpu: 8587.230693757407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8781.344110754675,
            "unit": "ns/iter",
            "extra": "iterations: 92168\ncpu: 8781.203888551356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8922.403028684084,
            "unit": "ns/iter",
            "extra": "iterations: 91723\ncpu: 8922.147116862714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8331.549518048601,
            "unit": "ns/iter",
            "extra": "iterations: 96379\ncpu: 8331.153052013398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26563.783949635006,
            "unit": "ns/iter",
            "extra": "iterations: 31451\ncpu: 26562.33188133924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 268329.57151496236,
            "unit": "ns/iter",
            "extra": "iterations: 3307\ncpu: 267793.07529482886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 201564.72584541526,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 201563.9613526567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202235.3730347875,
            "unit": "ns/iter",
            "extra": "iterations: 4198\ncpu: 202233.61124344877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200824.46183115107,
            "unit": "ns/iter",
            "extra": "iterations: 4205\ncpu: 200822.7110582638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106461.52896283646,
            "unit": "ns/iter",
            "extra": "iterations: 7993\ncpu: 106457.36269235575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 201539.5531034379,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 201537.14942528718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5638.069910000354,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5637.901999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25836.167101665473,
            "unit": "ns/iter",
            "extra": "iterations: 32184\ncpu: 25835.119935371673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22975.880110345377,
            "unit": "ns/iter",
            "extra": "iterations: 36250\ncpu: 22974.971034482773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22557.594347284685,
            "unit": "ns/iter",
            "extra": "iterations: 36938\ncpu: 22556.651686610046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22364.18859870118,
            "unit": "ns/iter",
            "extra": "iterations: 37715\ncpu: 22363.568871801657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43767.906982805376,
            "unit": "ns/iter",
            "extra": "iterations: 19190\ncpu: 43767.404898384484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 283887.19472483423,
            "unit": "ns/iter",
            "extra": "iterations: 3071\ncpu: 283874.4382937166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 220304.91679274745,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 220301.4876449819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 219210.43298969392,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 219202.1875785767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 218111.3917268838,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 218107.00224271155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112942.2587566252,
            "unit": "ns/iter",
            "extra": "iterations: 7737\ncpu: 112937.68902675417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 206815.6318537846,
            "unit": "ns/iter",
            "extra": "iterations: 4213\ncpu: 206811.7968193696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 865682.3514986043,
            "unit": "ns/iter",
            "extra": "iterations: 1101\ncpu: 865636.9663941837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 480948.9690889239,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 480923.6984815636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2404.834091202888,
            "unit": "ns/iter",
            "extra": "iterations: 332731\ncpu: 2404.7780339072865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8669.789779359908,
            "unit": "ns/iter",
            "extra": "iterations: 102792\ncpu: 8669.63966067396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8344.890037205298,
            "unit": "ns/iter",
            "extra": "iterations: 99179\ncpu: 8344.529587916797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8227.583670647486,
            "unit": "ns/iter",
            "extra": "iterations: 99808\ncpu: 8227.282382173782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8090.348066568515,
            "unit": "ns/iter",
            "extra": "iterations: 102331\ncpu: 8090.094888157094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25717.166226751022,
            "unit": "ns/iter",
            "extra": "iterations: 32582\ncpu: 25716.98176907501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 272777.2094386246,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 272767.4275138807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 206196.40502793048,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 206181.93668528984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 205889.65087108695,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 205884.45993031262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 203831.6031379838,
            "unit": "ns/iter",
            "extra": "iterations: 4334\ncpu: 203823.44254729914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102204.19154373213,
            "unit": "ns/iter",
            "extra": "iterations: 8609\ncpu: 102200.91764432561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 196395.02022471972,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 196388.9887640447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 207.84996671103474,
            "unit": "ns/iter",
            "extra": "iterations: 3361474\ncpu: 207.84480260742671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1429.8631907163403,
            "unit": "ns/iter",
            "extra": "iterations: 491012\ncpu: 1429.8288025547313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1098.9658889544924,
            "unit": "ns/iter",
            "extra": "iterations: 636568\ncpu: 1098.9320858101578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1256.2614076485795,
            "unit": "ns/iter",
            "extra": "iterations: 557696\ncpu: 1256.2110899127806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 894.2145341457714,
            "unit": "ns/iter",
            "extra": "iterations: 782337\ncpu: 894.194445616148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8559.046486037005,
            "unit": "ns/iter",
            "extra": "iterations: 81788\ncpu: 8559.095466327568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12441.008203662988,
            "unit": "ns/iter",
            "extra": "iterations: 56682\ncpu: 12440.524328711019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2828.426637228472,
            "unit": "ns/iter",
            "extra": "iterations: 246392\ncpu: 2828.3864735868174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2808.8146589225553,
            "unit": "ns/iter",
            "extra": "iterations: 248272\ncpu: 2808.693690790765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2797.403855535419,
            "unit": "ns/iter",
            "extra": "iterations: 250082\ncpu: 2797.2992858342523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5145.1945041325735,
            "unit": "ns/iter",
            "extra": "iterations: 136357\ncpu: 5145.155730912274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5372.9195191834815,
            "unit": "ns/iter",
            "extra": "iterations: 130528\ncpu: 5372.690916891419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1872.3878828766212,
            "unit": "ns/iter",
            "extra": "iterations: 375023\ncpu: 1872.3499625356387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9585.673914232202,
            "unit": "ns/iter",
            "extra": "iterations: 73174\ncpu: 9585.630141853666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7733.9342590153765,
            "unit": "ns/iter",
            "extra": "iterations: 91176\ncpu: 7733.647012371681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7719.100656599636,
            "unit": "ns/iter",
            "extra": "iterations: 90923\ncpu: 7719.0457859946355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7616.380873308067,
            "unit": "ns/iter",
            "extra": "iterations: 91537\ncpu: 7616.077651660051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18330.374829966648,
            "unit": "ns/iter",
            "extra": "iterations: 38228\ncpu: 18329.721669980085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57707.46018065877,
            "unit": "ns/iter",
            "extra": "iterations: 12067\ncpu: 57706.679373498315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45309.018978761094,
            "unit": "ns/iter",
            "extra": "iterations: 15491\ncpu: 45308.372603446805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45372.56423611265,
            "unit": "ns/iter",
            "extra": "iterations: 15552\ncpu: 45371.01337448606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44442.04788714536,
            "unit": "ns/iter",
            "extra": "iterations: 15808\ncpu: 44441.42206477706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26617.77773554697,
            "unit": "ns/iter",
            "extra": "iterations: 26311\ncpu: 26616.848466420608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44465.25457991143,
            "unit": "ns/iter",
            "extra": "iterations: 15830\ncpu: 44465.38218572297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1827.7689880795042,
            "unit": "ns/iter",
            "extra": "iterations: 377500\ncpu: 1827.7184105960073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9428.02606523055,
            "unit": "ns/iter",
            "extra": "iterations: 74045\ncpu: 9427.71287730438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7777.560928647376,
            "unit": "ns/iter",
            "extra": "iterations: 90368\ncpu: 7777.132391997237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7808.055437337898,
            "unit": "ns/iter",
            "extra": "iterations: 89759\ncpu: 7808.082754932519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7834.132203124448,
            "unit": "ns/iter",
            "extra": "iterations: 89423\ncpu: 7834.006910973781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17590.188565950364,
            "unit": "ns/iter",
            "extra": "iterations: 39636\ncpu: 17589.587748511258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56954.732186532405,
            "unit": "ns/iter",
            "extra": "iterations: 12266\ncpu: 56951.90771237623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44336.69303939625,
            "unit": "ns/iter",
            "extra": "iterations: 15559\ncpu: 44335.59997429127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43922.617074700924,
            "unit": "ns/iter",
            "extra": "iterations: 15930\ncpu: 43921.90207156325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43966.932541417074,
            "unit": "ns/iter",
            "extra": "iterations: 15995\ncpu: 43966.283213503906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26210.597110453156,
            "unit": "ns/iter",
            "extra": "iterations: 26717\ncpu: 26209.847662536988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43864.94360809389,
            "unit": "ns/iter",
            "extra": "iterations: 16208\ncpu: 43863.83884501503 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705573914709,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 582.4341212273073,
            "unit": "ns/iter",
            "extra": "iterations: 1165216\ncpu: 582.4238596105787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5305.445540000164,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5305.293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10280.343048308809,
            "unit": "ns/iter",
            "extra": "iterations: 81455\ncpu: 10279.966852863547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15300.719120879032,
            "unit": "ns/iter",
            "extra": "iterations: 54600\ncpu: 15300.036630036631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20294.323742572305,
            "unit": "ns/iter",
            "extra": "iterations: 41394\ncpu: 20293.803449775318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25033.689100458632,
            "unit": "ns/iter",
            "extra": "iterations: 33506\ncpu: 25032.788157344945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30382.220621520133,
            "unit": "ns/iter",
            "extra": "iterations: 27835\ncpu: 30381.167594754806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34722.09423093057,
            "unit": "ns/iter",
            "extra": "iterations: 23782\ncpu: 34720.64166176101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39937.869789488745,
            "unit": "ns/iter",
            "extra": "iterations: 21519\ncpu: 39936.734978391214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 546.7173697150289,
            "unit": "ns/iter",
            "extra": "iterations: 1278812\ncpu: 546.7022517774312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 416.68824004715685,
            "unit": "ns/iter",
            "extra": "iterations: 1681903\ncpu: 416.6865746716668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 430.097986497991,
            "unit": "ns/iter",
            "extra": "iterations: 1626867\ncpu: 430.09459285854354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 406.09842340577023,
            "unit": "ns/iter",
            "extra": "iterations: 1725555\ncpu: 406.09328592829604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 894.7959114400123,
            "unit": "ns/iter",
            "extra": "iterations: 786585\ncpu: 894.7772967956412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1424.3136248949797,
            "unit": "ns/iter",
            "extra": "iterations: 558830\ncpu: 1424.3145500420512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8214.32569017841,
            "unit": "ns/iter",
            "extra": "iterations: 100264\ncpu: 8214.38203143701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8411.994760838557,
            "unit": "ns/iter",
            "extra": "iterations: 95626\ncpu: 8411.703929893567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8771.0638708526,
            "unit": "ns/iter",
            "extra": "iterations: 95333\ncpu: 8770.817030828757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8411.674204494491,
            "unit": "ns/iter",
            "extra": "iterations: 96668\ncpu: 8411.388463607376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26552.28693810705,
            "unit": "ns/iter",
            "extra": "iterations: 31167\ncpu: 26551.34918343112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 267198.5170760949,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 267182.98382264806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 196876.93906138412,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 196868.17651179092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 198343.16423104884,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 198332.7302250057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200795.4917537695,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 200785.7375145178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104347.72691482784,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 104342.03054163663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193899.07155634576,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 193890.72003577824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5550.930449999214,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5550.61300000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26965.071560944773,
            "unit": "ns/iter",
            "extra": "iterations: 30757\ncpu: 26963.754592450452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22510.48344208259,
            "unit": "ns/iter",
            "extra": "iterations: 36629\ncpu: 22509.38873570125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22854.816804708855,
            "unit": "ns/iter",
            "extra": "iterations: 36704\ncpu: 22853.811573670373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22289.269629709943,
            "unit": "ns/iter",
            "extra": "iterations: 37214\ncpu: 22288.2114258075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43532.354290741765,
            "unit": "ns/iter",
            "extra": "iterations: 19309\ncpu: 43532.6479879849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 283810.21141377167,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 283803.0155642028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 219829.52823086642,
            "unit": "ns/iter",
            "extra": "iterations: 3985\ncpu: 219823.11166875716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 219090.64566532293,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 219076.9909274198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 218645.83283433403,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 218638.42315369382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 113194.09806216999,
            "unit": "ns/iter",
            "extra": "iterations: 7689\ncpu: 113186.14904408877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 207184.94670174128,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 207172.13193116663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 846036.5443150965,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 845981.64726947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 469511.49840595305,
            "unit": "ns/iter",
            "extra": "iterations: 1882\ncpu: 469481.3496280583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2316.1462313563925,
            "unit": "ns/iter",
            "extra": "iterations: 345562\ncpu: 2316.114619084267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8429.647495494875,
            "unit": "ns/iter",
            "extra": "iterations: 97664\ncpu: 8429.629136631735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8105.30641582157,
            "unit": "ns/iter",
            "extra": "iterations: 101842\ncpu: 8105.106930343049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8096.6449327827595,
            "unit": "ns/iter",
            "extra": "iterations: 102206\ncpu: 8096.635226894752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7769.7596543140835,
            "unit": "ns/iter",
            "extra": "iterations: 106455\ncpu: 7769.595603776273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26100.781291581403,
            "unit": "ns/iter",
            "extra": "iterations: 32317\ncpu: 26099.70603707026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 273955.83840245503,
            "unit": "ns/iter",
            "extra": "iterations: 3255\ncpu: 273950.9984639002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 203670.03655716605,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 203666.84405367952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 203715.27786790367,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 203712.67670915398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 201805.0195402302,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 201787.1034482745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102119.39872166527,
            "unit": "ns/iter",
            "extra": "iterations: 8605\ncpu: 102115.56072051094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 192021.9934181877,
            "unit": "ns/iter",
            "extra": "iterations: 4558\ncpu: 192013.60245721752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 213.46183782402372,
            "unit": "ns/iter",
            "extra": "iterations: 3299576\ncpu: 213.45230417483933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1428.889460977542,
            "unit": "ns/iter",
            "extra": "iterations: 487104\ncpu: 1428.8184864012626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1164.6577967642575,
            "unit": "ns/iter",
            "extra": "iterations: 599255\ncpu: 1164.5808545610703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1227.5245385993376,
            "unit": "ns/iter",
            "extra": "iterations: 571304\ncpu: 1227.533502303501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 916.2093483089434,
            "unit": "ns/iter",
            "extra": "iterations: 762662\ncpu: 916.1969522540808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8864.633896942476,
            "unit": "ns/iter",
            "extra": "iterations: 79606\ncpu: 8864.261487827565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12812.775555756914,
            "unit": "ns/iter",
            "extra": "iterations: 55555\ncpu: 12812.25092250925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2917.47781832925,
            "unit": "ns/iter",
            "extra": "iterations: 241393\ncpu: 2917.3613153654105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2919.8933478662593,
            "unit": "ns/iter",
            "extra": "iterations: 242208\ncpu: 2919.7710232527625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2901.5828173442574,
            "unit": "ns/iter",
            "extra": "iterations: 241930\ncpu: 2901.435539205559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5137.583243596777,
            "unit": "ns/iter",
            "extra": "iterations: 142083\ncpu: 5137.555513326749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5358.9161478579945,
            "unit": "ns/iter",
            "extra": "iterations: 130909\ncpu: 5358.691915758278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1845.621004048935,
            "unit": "ns/iter",
            "extra": "iterations: 379603\ncpu: 1845.5483755396945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9637.419348230369,
            "unit": "ns/iter",
            "extra": "iterations: 73216\ncpu: 9637.021962412642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7798.911461533609,
            "unit": "ns/iter",
            "extra": "iterations: 89543\ncpu: 7798.4420892754415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7792.646898234642,
            "unit": "ns/iter",
            "extra": "iterations: 90110\ncpu: 7792.54133836426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7585.538889189296,
            "unit": "ns/iter",
            "extra": "iterations: 92275\ncpu: 7585.241939853568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18362.92043489813,
            "unit": "ns/iter",
            "extra": "iterations: 38170\ncpu: 18361.899397432604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56269.18703060631,
            "unit": "ns/iter",
            "extra": "iterations: 12383\ncpu: 56266.825486555106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44798.884657236864,
            "unit": "ns/iter",
            "extra": "iterations: 15623\ncpu: 44797.420469820034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44922.29241114687,
            "unit": "ns/iter",
            "extra": "iterations: 15615\ncpu: 44920.21133525538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44180.50741538829,
            "unit": "ns/iter",
            "extra": "iterations: 15778\ncpu: 44179.82000253526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26628.11356203101,
            "unit": "ns/iter",
            "extra": "iterations: 26294\ncpu: 26627.941735756798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44134.22202030291,
            "unit": "ns/iter",
            "extra": "iterations: 15958\ncpu: 44132.115553327574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1861.4084106112405,
            "unit": "ns/iter",
            "extra": "iterations: 377642\ncpu: 1861.402598227951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9496.986846382746,
            "unit": "ns/iter",
            "extra": "iterations: 73820\ncpu: 9496.641831481917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7816.665951104833,
            "unit": "ns/iter",
            "extra": "iterations: 89906\ncpu: 7816.215825417708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7896.517316260851,
            "unit": "ns/iter",
            "extra": "iterations: 88876\ncpu: 7896.207075025905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7771.6384059909615,
            "unit": "ns/iter",
            "extra": "iterations: 89736\ncpu: 7771.16096104126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17535.842795963345,
            "unit": "ns/iter",
            "extra": "iterations: 39929\ncpu: 17535.250068872207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55482.944728028066,
            "unit": "ns/iter",
            "extra": "iterations: 12538\ncpu: 55482.19014196817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43909.80345762917,
            "unit": "ns/iter",
            "extra": "iterations: 15849\ncpu: 43909.28765221796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43847.00062830258,
            "unit": "ns/iter",
            "extra": "iterations: 15916\ncpu: 43844.672028147965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43668.79105511872,
            "unit": "ns/iter",
            "extra": "iterations: 15875\ncpu: 43667.04881889778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25923.97977444827,
            "unit": "ns/iter",
            "extra": "iterations: 27045\ncpu: 25922.88777962682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43139.98304358675,
            "unit": "ns/iter",
            "extra": "iterations: 16336\ncpu: 43138.16723800185 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771628123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 574.3291698100688,
            "unit": "ns/iter",
            "extra": "iterations: 1219480\ncpu: 574.3064256896383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5507.289040000387,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5507.136999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10228.998344268877,
            "unit": "ns/iter",
            "extra": "iterations: 80931\ncpu: 10228.624383734292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15457.897544609605,
            "unit": "ns/iter",
            "extra": "iterations: 54248\ncpu: 15457.642678071074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20230.076336611768,
            "unit": "ns/iter",
            "extra": "iterations: 41579\ncpu: 20229.377810914153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25137.250764063505,
            "unit": "ns/iter",
            "extra": "iterations: 33047\ncpu: 25136.826338245526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30154.439005776614,
            "unit": "ns/iter",
            "extra": "iterations: 27519\ncpu: 30153.366764780683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35405.58239057613,
            "unit": "ns/iter",
            "extra": "iterations: 23601\ncpu: 35404.31337655186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40042.106974992545,
            "unit": "ns/iter",
            "extra": "iterations: 21276\ncpu: 40041.351757849225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 541.8294402993337,
            "unit": "ns/iter",
            "extra": "iterations: 1298730\ncpu: 541.8257836501808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 410.0506292228837,
            "unit": "ns/iter",
            "extra": "iterations: 1667851\ncpu: 410.04628111264145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 422.879405913732,
            "unit": "ns/iter",
            "extra": "iterations: 1651814\ncpu: 422.87067430110164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 415.88147293344997,
            "unit": "ns/iter",
            "extra": "iterations: 1679397\ncpu: 415.8744477928686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 894.7992038474993,
            "unit": "ns/iter",
            "extra": "iterations: 783267\ncpu: 894.776110828109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1418.7580890662703,
            "unit": "ns/iter",
            "extra": "iterations: 555812\ncpu: 1418.722877519736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8312.468323270523,
            "unit": "ns/iter",
            "extra": "iterations: 98716\ncpu: 8312.257384821101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8785.844045256878,
            "unit": "ns/iter",
            "extra": "iterations: 93245\ncpu: 8785.527374121937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8889.147391029517,
            "unit": "ns/iter",
            "extra": "iterations: 91722\ncpu: 8888.959028368341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8588.864215481344,
            "unit": "ns/iter",
            "extra": "iterations: 95600\ncpu: 8588.5878661088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26351.89588840387,
            "unit": "ns/iter",
            "extra": "iterations: 31399\ncpu: 26351.399726105952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 269745.2054589005,
            "unit": "ns/iter",
            "extra": "iterations: 3334\ncpu: 269736.50269946014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198423.10690788124,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 198418.82048872177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 203097.32717492155,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 203090.45837231056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 203620.45448162072,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 203614.25228176927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104101.61392784055,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 104098.98118182909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195385.55147058834,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 195380.39215686262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5656.737440000369,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5656.504000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25665.94841084245,
            "unit": "ns/iter",
            "extra": "iterations: 32061\ncpu: 25665.23813979604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22896.273701878377,
            "unit": "ns/iter",
            "extra": "iterations: 36938\ncpu: 22895.652173913015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22451.15290382164,
            "unit": "ns/iter",
            "extra": "iterations: 37795\ncpu: 22450.750099219495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22867.123361685193,
            "unit": "ns/iter",
            "extra": "iterations: 37386\ncpu: 22866.377788477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 42973.94362957762,
            "unit": "ns/iter",
            "extra": "iterations: 19567\ncpu: 42972.84202994831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 284732.2411764856,
            "unit": "ns/iter",
            "extra": "iterations: 3060\ncpu: 284730.58823529317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 220190.44200706153,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 220182.19868885644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 220257.23653750212,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 220248.5405133372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 218861.1549899137,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 218853.7298387101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 113659.05380817085,
            "unit": "ns/iter",
            "extra": "iterations: 7694\ncpu: 113656.29061606519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 208989.58727492497,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 208982.8091236504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 847006.0373002157,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 846980.7282415642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 467585.7477333314,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 467572.9066666653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2393.8550466703477,
            "unit": "ns/iter",
            "extra": "iterations: 337688\ncpu: 2389.7325341735564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 7734.22604720204,
            "unit": "ns/iter",
            "extra": "iterations: 106522\ncpu: 7734.037100317303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8217.46631090118,
            "unit": "ns/iter",
            "extra": "iterations: 101190\ncpu: 8217.264551833185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8238.130160037737,
            "unit": "ns/iter",
            "extra": "iterations: 99539\ncpu: 8238.010227147182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7830.845101925792,
            "unit": "ns/iter",
            "extra": "iterations: 105960\ncpu: 7830.368063420152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25507.44485137321,
            "unit": "ns/iter",
            "extra": "iterations: 32766\ncpu: 25506.71122505044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 273096.74509199464,
            "unit": "ns/iter",
            "extra": "iterations: 3260\ncpu: 273094.53987730073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 203455.6742512115,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 203451.3350359885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 204257.66990515462,
            "unit": "ns/iter",
            "extra": "iterations: 4323\ncpu: 204251.70020818984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 201233.94086637962,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 201230.75865230404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102118.27827103202,
            "unit": "ns/iter",
            "extra": "iterations: 8560\ncpu: 102117.48831775706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191841.18698121762,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 191836.4569681081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 214.55588789574682,
            "unit": "ns/iter",
            "extra": "iterations: 3269742\ncpu: 214.5504446528194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1437.1993755195294,
            "unit": "ns/iter",
            "extra": "iterations: 490968\ncpu: 1437.166373368529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1164.6399667581597,
            "unit": "ns/iter",
            "extra": "iterations: 598042\ncpu: 1164.6059975720718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1260.333513935379,
            "unit": "ns/iter",
            "extra": "iterations: 557395\ncpu: 1260.2881260147701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 899.7666244316446,
            "unit": "ns/iter",
            "extra": "iterations: 780553\ncpu: 899.7535080897852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8801.231273159949,
            "unit": "ns/iter",
            "extra": "iterations: 79071\ncpu: 8801.033248599355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12911.051754068389,
            "unit": "ns/iter",
            "extra": "iterations: 55300\ncpu: 12910.728752260457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2876.6366709000713,
            "unit": "ns/iter",
            "extra": "iterations: 241723\ncpu: 2876.5868369993646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2923.1933896265614,
            "unit": "ns/iter",
            "extra": "iterations: 243012\ncpu: 2923.138775039933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2893.11005044841,
            "unit": "ns/iter",
            "extra": "iterations: 244606\ncpu: 2893.041871417709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4919.162663563004,
            "unit": "ns/iter",
            "extra": "iterations: 141765\ncpu: 4919.126723803501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5412.697932183637,
            "unit": "ns/iter",
            "extra": "iterations: 130911\ncpu: 5412.59710795883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1870.9624381848616,
            "unit": "ns/iter",
            "extra": "iterations: 376526\ncpu: 1870.8880661627513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9507.729965963186,
            "unit": "ns/iter",
            "extra": "iterations: 73450\ncpu: 9507.436351259295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7660.026312002823,
            "unit": "ns/iter",
            "extra": "iterations: 90339\ncpu: 7659.715073224136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7765.162589705231,
            "unit": "ns/iter",
            "extra": "iterations: 90018\ncpu: 7765.118087493643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7578.892054396251,
            "unit": "ns/iter",
            "extra": "iterations: 92139\ncpu: 7578.787484127288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18321.780584449418,
            "unit": "ns/iter",
            "extra": "iterations: 38361\ncpu: 18321.261176716027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56436.85415483937,
            "unit": "ns/iter",
            "extra": "iterations: 12335\ncpu: 56435.18443453601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44990.64488983018,
            "unit": "ns/iter",
            "extra": "iterations: 15567\ncpu: 44989.45846984028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44947.286748686805,
            "unit": "ns/iter",
            "extra": "iterations: 15606\ncpu: 44946.61027809792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44746.477876107514,
            "unit": "ns/iter",
            "extra": "iterations: 15707\ncpu: 44746.22142993571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26703.061393198157,
            "unit": "ns/iter",
            "extra": "iterations: 26371\ncpu: 26702.874369572255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44422.641001323645,
            "unit": "ns/iter",
            "extra": "iterations: 15819\ncpu: 44421.97989759177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1869.220357206479,
            "unit": "ns/iter",
            "extra": "iterations: 375749\ncpu: 1869.2055068676132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9557.310608130816,
            "unit": "ns/iter",
            "extra": "iterations: 73208\ncpu: 9557.247841765804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7671.379084967419,
            "unit": "ns/iter",
            "extra": "iterations: 91188\ncpu: 7671.2056410930545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7793.675050043972,
            "unit": "ns/iter",
            "extra": "iterations: 89423\ncpu: 7793.409972825746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7671.900311252259,
            "unit": "ns/iter",
            "extra": "iterations: 90923\ncpu: 7671.743123302139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17481.79172001795,
            "unit": "ns/iter",
            "extra": "iterations: 39831\ncpu: 17481.547036228145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56218.49319430616,
            "unit": "ns/iter",
            "extra": "iterations: 12563\ncpu: 56217.89381517093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44813.95581709938,
            "unit": "ns/iter",
            "extra": "iterations: 15549\ncpu: 44813.63431731912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44385.53530752267,
            "unit": "ns/iter",
            "extra": "iterations: 15804\ncpu: 44384.70007592956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43711.30538846335,
            "unit": "ns/iter",
            "extra": "iterations: 15793\ncpu: 43709.52320648365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25920.49114548656,
            "unit": "ns/iter",
            "extra": "iterations: 26766\ncpu: 25919.72278263486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43999.45702761501,
            "unit": "ns/iter",
            "extra": "iterations: 16115\ncpu: 43996.99038163218 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}