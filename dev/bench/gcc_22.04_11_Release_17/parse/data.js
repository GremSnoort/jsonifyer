window.BENCHMARK_DATA = {
  "lastUpdate": 1702412532904,
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
      }
    ]
  }
}