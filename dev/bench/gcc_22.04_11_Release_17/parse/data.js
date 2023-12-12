window.BENCHMARK_DATA = {
  "lastUpdate": 1702398793916,
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
      }
    ]
  }
}