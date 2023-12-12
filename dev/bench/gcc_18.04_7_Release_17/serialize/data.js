window.BENCHMARK_DATA = {
  "lastUpdate": 1702409077846,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-7 18.04 Release c++-17": [
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
        "date": 1702397892057,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1003.0198094726962,
            "unit": "ns/iter",
            "extra": "iterations: 700372\ncpu: 1002.9213046780853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20379.754994124225,
            "unit": "ns/iter",
            "extra": "iterations: 40848\ncpu: 20377.9964747356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45909.50791749052,
            "unit": "ns/iter",
            "extra": "iterations: 19198\ncpu: 45901.51578289404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 57558.25420000064,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57557.89999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69967.46056614009,
            "unit": "ns/iter",
            "extra": "iterations: 11234\ncpu: 69965.65782446139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87938.4966442976,
            "unit": "ns/iter",
            "extra": "iterations: 9983\ncpu: 87936.29169588303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 104546.88988522596,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 104544.51219512196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 133354.50139392228,
            "unit": "ns/iter",
            "extra": "iterations: 7174\ncpu: 133347.40730415378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 147400.95995103504,
            "unit": "ns/iter",
            "extra": "iterations: 5718\ncpu: 147398.75830710036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 816.8860953429083,
            "unit": "ns/iter",
            "extra": "iterations: 854390\ncpu: 816.8733248282405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 661.6320646113272,
            "unit": "ns/iter",
            "extra": "iterations: 1052818\ncpu: 661.6094139727861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 661.4041977299571,
            "unit": "ns/iter",
            "extra": "iterations: 1060335\ncpu: 661.3927673801205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 662.2391671751523,
            "unit": "ns/iter",
            "extra": "iterations: 1053811\ncpu: 662.2220682835913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1280.856479626342,
            "unit": "ns/iter",
            "extra": "iterations: 536551\ncpu: 1280.6961500397922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6428.273563378335,
            "unit": "ns/iter",
            "extra": "iterations: 129279\ncpu: 6427.73149544783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 36873.149620956305,
            "unit": "ns/iter",
            "extra": "iterations: 22029\ncpu: 36870.9292296518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28094.63023931845,
            "unit": "ns/iter",
            "extra": "iterations: 29584\ncpu: 28093.80070308276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 27553.367722233044,
            "unit": "ns/iter",
            "extra": "iterations: 30126\ncpu: 27553.15010290106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28545.04310554348,
            "unit": "ns/iter",
            "extra": "iterations: 28813\ncpu: 28544.504216846464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 69144.58482671613,
            "unit": "ns/iter",
            "extra": "iterations: 12667\ncpu: 69142.05415646962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 626150.0449999743,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 626094.5999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 505229.5309999977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505210.5999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 511601.2180000098,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511558.100000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 518267.4769999949,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518239.49999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 378356.0077720177,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 378321.9775474949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 507402.7699999988,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507383.3999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2925862.6335404795,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2925595.652173919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1257741.5205298064,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1257685.1655629147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3719985.358267741,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3719827.16535433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6396.672299722254,
            "unit": "ns/iter",
            "extra": "iterations: 128172\ncpu: 6396.4961145959915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 34922.53336998778,
            "unit": "ns/iter",
            "extra": "iterations: 23644\ncpu: 34921.3500253764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 26085.188154636653,
            "unit": "ns/iter",
            "extra": "iterations: 31506\ncpu: 26084.812416682573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 25396.709804041355,
            "unit": "ns/iter",
            "extra": "iterations: 32609\ncpu: 25395.77110613632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27237.441851330692,
            "unit": "ns/iter",
            "extra": "iterations: 30551\ncpu: 27237.02333802498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 69140.65037210917,
            "unit": "ns/iter",
            "extra": "iterations: 12765\ncpu: 69137.61065413264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 625543.768,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625532.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 523374.2149999898,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523372.099999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 522211.647000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522193.1000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 522973.24299996713,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522963.4000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 374553.75224647264,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 374545.0577663666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 508003.34600000957,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507984.79999999556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3038100.2402597102,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3037956.168831168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1228071.9275549296,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 1228006.85640362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6276.315555688774,
            "unit": "ns/iter",
            "extra": "iterations: 133501\ncpu: 6276.21815566925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 34346.8211044966,
            "unit": "ns/iter",
            "extra": "iterations: 24355\ncpu: 34345.90843769254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 25790.41387729818,
            "unit": "ns/iter",
            "extra": "iterations: 32355\ncpu: 25790.326070159164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 25357.73983250015,
            "unit": "ns/iter",
            "extra": "iterations: 33194\ncpu: 25356.501174911045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 26937.681070621482,
            "unit": "ns/iter",
            "extra": "iterations: 31010\ncpu: 26937.026765559454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 67942.06706699081,
            "unit": "ns/iter",
            "extra": "iterations: 12823\ncpu: 67939.46034469314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 629045.9429999941,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629007.4000000061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 521137.0810000062,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521090.00000000093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 520751.6369999894,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520725.80000000104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 523929.4300000097,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523907.20000000356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 385047.8592722646,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 385012.4506795265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 516824.0220000371,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516807.4999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 345.4302323860922,
            "unit": "ns/iter",
            "extra": "iterations: 2027746\ncpu: 345.41441580947566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3030.1056865140768,
            "unit": "ns/iter",
            "extra": "iterations: 230862\ncpu: 3030.030061248711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2267.531763713776,
            "unit": "ns/iter",
            "extra": "iterations: 308355\ncpu: 2267.3710496019194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2293.930189713584,
            "unit": "ns/iter",
            "extra": "iterations: 313736\ncpu: 2293.7794833873004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1684.3101059621706,
            "unit": "ns/iter",
            "extra": "iterations: 415903\ncpu: 1684.2785457185928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 13901.505741199462,
            "unit": "ns/iter",
            "extra": "iterations: 50425\ncpu: 13900.767476450257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 32380.722122080828,
            "unit": "ns/iter",
            "extra": "iterations: 20527\ncpu: 32379.885029473313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7902.445077895721,
            "unit": "ns/iter",
            "extra": "iterations: 88580\ncpu: 7901.937231880793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7880.00372135916,
            "unit": "ns/iter",
            "extra": "iterations: 88946\ncpu: 7879.75625660512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7875.626909082881,
            "unit": "ns/iter",
            "extra": "iterations: 89048\ncpu: 7875.253795705714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 17159.757655934805,
            "unit": "ns/iter",
            "extra": "iterations: 40818\ncpu: 17159.451712479808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 13991.49793086913,
            "unit": "ns/iter",
            "extra": "iterations: 50021\ncpu: 13991.423602087032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4461.266537138364,
            "unit": "ns/iter",
            "extra": "iterations: 156980\ncpu: 4461.200152885735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22812.332161343576,
            "unit": "ns/iter",
            "extra": "iterations: 30717\ncpu: 22811.638506364565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 18219.43647172274,
            "unit": "ns/iter",
            "extra": "iterations: 38353\ncpu: 18218.475738534133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17886.375130910434,
            "unit": "ns/iter",
            "extra": "iterations: 39149\ncpu: 17885.58583871855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18731.830342489528,
            "unit": "ns/iter",
            "extra": "iterations: 37169\ncpu: 18730.724528504827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38064.6338356445,
            "unit": "ns/iter",
            "extra": "iterations: 18448\ncpu: 38063.30225498668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 156050.26755555527,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 156041.28888888782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 135051.4930609087,
            "unit": "ns/iter",
            "extra": "iterations: 5188\ncpu: 135046.83885890382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 132617.28454354362,
            "unit": "ns/iter",
            "extra": "iterations: 5247\ncpu: 132611.7209834195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 134352.4327900368,
            "unit": "ns/iter",
            "extra": "iterations: 5215\ncpu: 134349.97123681678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 82771.3240118004,
            "unit": "ns/iter",
            "extra": "iterations: 8475\ncpu: 82769.82890855469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 133243.1499904631,
            "unit": "ns/iter",
            "extra": "iterations: 5247\ncpu: 133240.1181627585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4226.3806079019205,
            "unit": "ns/iter",
            "extra": "iterations: 165882\ncpu: 4226.328353890164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21709.776052321842,
            "unit": "ns/iter",
            "extra": "iterations: 32262\ncpu: 21709.422850412433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17136.898138623084,
            "unit": "ns/iter",
            "extra": "iterations: 40830\ncpu: 17136.541758510957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17303.38576183599,
            "unit": "ns/iter",
            "extra": "iterations: 40258\ncpu: 17301.164985841322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17824.141915877473,
            "unit": "ns/iter",
            "extra": "iterations: 39157\ncpu: 17823.88078759836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 36821.34880042147,
            "unit": "ns/iter",
            "extra": "iterations: 18965\ncpu: 36819.709992091106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 148672.3841424672,
            "unit": "ns/iter",
            "extra": "iterations: 4717\ncpu: 148671.7193131227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 132300.46756705048,
            "unit": "ns/iter",
            "extra": "iterations: 5257\ncpu: 132291.80140764735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 131558.2166729264,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 131553.96169733378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 132438.739845078,
            "unit": "ns/iter",
            "extra": "iterations: 5293\ncpu: 132433.25146419855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79234.57829281934,
            "unit": "ns/iter",
            "extra": "iterations: 8845\ncpu: 79233.20520067855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 129788.29940674981,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 129784.48275862065 ns\nthreads: 1"
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
        "date": 1702409076614,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 907.8419525357285,
            "unit": "ns/iter",
            "extra": "iterations: 770895\ncpu: 907.834400275005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18958.729434272227,
            "unit": "ns/iter",
            "extra": "iterations: 43908\ncpu: 18958.60435455953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43752.54046411941,
            "unit": "ns/iter",
            "extra": "iterations: 20512\ncpu: 43752.720358814346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 53767.30539999811,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53766.629999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66418.38948497771,
            "unit": "ns/iter",
            "extra": "iterations: 12116\ncpu: 66417.70386266096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84021.32197437063,
            "unit": "ns/iter",
            "extra": "iterations: 10535\ncpu: 84018.63312766969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 101530.93512278561,
            "unit": "ns/iter",
            "extra": "iterations: 8755\ncpu: 101526.70474014839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 133300.73715810396,
            "unit": "ns/iter",
            "extra": "iterations: 7495\ncpu: 133295.95730486987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 143856.93400238763,
            "unit": "ns/iter",
            "extra": "iterations: 5879\ncpu: 143853.32539547543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 709.0484441363358,
            "unit": "ns/iter",
            "extra": "iterations: 970747\ncpu: 709.0366490960043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 566.3629543050582,
            "unit": "ns/iter",
            "extra": "iterations: 1225168\ncpu: 566.3087837749594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 562.8491494991657,
            "unit": "ns/iter",
            "extra": "iterations: 1222515\ncpu: 562.8083908990886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 576.2525161508507,
            "unit": "ns/iter",
            "extra": "iterations: 1216342\ncpu: 576.2079250737047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1207.0553049312994,
            "unit": "ns/iter",
            "extra": "iterations: 585427\ncpu: 1206.9631226438116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5563.114679999899,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5563.143000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 30731.164393235387,
            "unit": "ns/iter",
            "extra": "iterations: 26905\ncpu: 30728.723285634624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 22769.993569132326,
            "unit": "ns/iter",
            "extra": "iterations: 36387\ncpu: 22769.00541402151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 23819.34548000928,
            "unit": "ns/iter",
            "extra": "iterations: 36416\ncpu: 23816.838752196796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 24916.02581169806,
            "unit": "ns/iter",
            "extra": "iterations: 33202\ncpu: 24915.21896271307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 67332.32200224219,
            "unit": "ns/iter",
            "extra": "iterations: 13385\ncpu: 67324.86365334311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 581030.3340000473,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580997.4000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 585476.2211668793,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 585399.3894165556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 587424.8133061535,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 587374.9490835037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 593992.0883561514,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 593955.6164383551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 361680.69953838765,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 361609.3159882502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 586257.9300271381,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 586226.154891304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2804454.1547619216,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2804232.440476197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1218188.476882433,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 1218075.5614266836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3577052.460075991,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3576698.8593155914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5492.135669999811,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5491.731000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 30735.34294289999,
            "unit": "ns/iter",
            "extra": "iterations: 26987\ncpu: 30733.138177641104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 22823.92789363392,
            "unit": "ns/iter",
            "extra": "iterations: 36252\ncpu: 22821.95189230934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 25221.371998119845,
            "unit": "ns/iter",
            "extra": "iterations: 34062\ncpu: 25220.79736950261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 23189.074905734844,
            "unit": "ns/iter",
            "extra": "iterations: 35538\ncpu: 23187.005458945412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 67782.68990784058,
            "unit": "ns/iter",
            "extra": "iterations: 13238\ncpu: 67780.46532708904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 610860.8529999627,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610863.6000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 504460.6510000449,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504447.80000000127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 500295.8460000286,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500288.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 501358.4870000045,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501328.79999999603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 366170.58601925784,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 366167.51778987213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 616701.9725545476,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 616690.0774102714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2955682.455974697,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2955239.9371069255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1243230.552042129,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 1243206.455862979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6035.678365280503,
            "unit": "ns/iter",
            "extra": "iterations: 138250\ncpu: 6035.582640144669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 33476.865206773546,
            "unit": "ns/iter",
            "extra": "iterations: 24979\ncpu: 33476.23203490913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 25004.16285799513,
            "unit": "ns/iter",
            "extra": "iterations: 33520\ncpu: 25003.606801909304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 24975.004275293122,
            "unit": "ns/iter",
            "extra": "iterations: 33448\ncpu: 24974.49174838566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 24808.748991695942,
            "unit": "ns/iter",
            "extra": "iterations: 33720\ncpu: 24808.282918149293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 66762.60127205428,
            "unit": "ns/iter",
            "extra": "iterations: 13207\ncpu: 66760.64965548535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 618925.2519999968,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 618918.899999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 503900.2379999715,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503890.3000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 504114.34700004064,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504117.0000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 501323.81500003475,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501304.0999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 371641.0647208165,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 371635.6598984776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 620286.9774647714,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 620272.8873239415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 353.6035844985525,
            "unit": "ns/iter",
            "extra": "iterations: 1968253\ncpu: 353.6001723355684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2511.4783283630436,
            "unit": "ns/iter",
            "extra": "iterations: 277644\ncpu: 2511.4549567071504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1718.6907584348419,
            "unit": "ns/iter",
            "extra": "iterations: 403568\ncpu: 1718.662778020062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1905.5043077870641,
            "unit": "ns/iter",
            "extra": "iterations: 406125\ncpu: 1905.4411819021234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1455.1981646989439,
            "unit": "ns/iter",
            "extra": "iterations: 481120\ncpu: 1455.2045227801784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 13677.246063683897,
            "unit": "ns/iter",
            "extra": "iterations: 51190\ncpu: 13677.04434459852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 32150.059926472353,
            "unit": "ns/iter",
            "extra": "iterations: 21760\ncpu: 32149.88511029415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7360.567220313562,
            "unit": "ns/iter",
            "extra": "iterations: 95187\ncpu: 7360.379043356731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7300.358139874487,
            "unit": "ns/iter",
            "extra": "iterations: 95929\ncpu: 7300.262694284325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7336.552416224119,
            "unit": "ns/iter",
            "extra": "iterations: 95314\ncpu: 7336.503556665357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15531.37449118076,
            "unit": "ns/iter",
            "extra": "iterations: 44957\ncpu: 15531.154214026747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14393.088148974855,
            "unit": "ns/iter",
            "extra": "iterations: 48384\ncpu: 14393.008019179788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4141.753015929203,
            "unit": "ns/iter",
            "extra": "iterations: 169185\ncpu: 4141.631350297003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 20566.568309529284,
            "unit": "ns/iter",
            "extra": "iterations: 34168\ncpu: 20566.620814797345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 16534.54170295945,
            "unit": "ns/iter",
            "extra": "iterations: 42479\ncpu: 16534.2969467267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 16676.698924731143,
            "unit": "ns/iter",
            "extra": "iterations: 42315\ncpu: 16676.400803497472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 17066.30179509067,
            "unit": "ns/iter",
            "extra": "iterations: 40945\ncpu: 17065.529368665357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 36063.18289146766,
            "unit": "ns/iter",
            "extra": "iterations: 19312\ncpu: 36062.69676884837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 143885.67578045203,
            "unit": "ns/iter",
            "extra": "iterations: 4901\ncpu: 143882.24852071187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 125172.16410714126,
            "unit": "ns/iter",
            "extra": "iterations: 5600\ncpu: 125170.64285714293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 123605.90086587878,
            "unit": "ns/iter",
            "extra": "iterations: 5659\ncpu: 123603.55186428677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 124965.47756925417,
            "unit": "ns/iter",
            "extra": "iterations: 5595\ncpu: 124962.14477211813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 75602.13337649424,
            "unit": "ns/iter",
            "extra": "iterations: 9267\ncpu: 75602.50350706733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 125050.18876444692,
            "unit": "ns/iter",
            "extra": "iterations: 5536\ncpu: 125048.89812138888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3947.8924612592646,
            "unit": "ns/iter",
            "extra": "iterations: 178624\ncpu: 3947.868707452508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 19401.734585192975,
            "unit": "ns/iter",
            "extra": "iterations: 36053\ncpu: 19401.531079244596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 15561.47689297391,
            "unit": "ns/iter",
            "extra": "iterations: 45484\ncpu: 15561.003869492493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 15794.752350248376,
            "unit": "ns/iter",
            "extra": "iterations: 44357\ncpu: 15794.13170412784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 16437.341638602622,
            "unit": "ns/iter",
            "extra": "iterations: 42463\ncpu: 16437.182959282225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 34992.58575210903,
            "unit": "ns/iter",
            "extra": "iterations: 20017\ncpu: 34991.412299545125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 143106.86514778424,
            "unit": "ns/iter",
            "extra": "iterations: 4872\ncpu: 143105.74712643638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 125017.3200988177,
            "unit": "ns/iter",
            "extra": "iterations: 5667\ncpu: 125015.70495853298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 122915.09766379333,
            "unit": "ns/iter",
            "extra": "iterations: 5693\ncpu: 122913.78886351694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 127248.43978300165,
            "unit": "ns/iter",
            "extra": "iterations: 5530\ncpu: 127237.26943942207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 78174.87026419364,
            "unit": "ns/iter",
            "extra": "iterations: 8895\ncpu: 78166.40809443373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 124136.0977683332,
            "unit": "ns/iter",
            "extra": "iterations: 5646\ncpu: 124134.09493446641 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}