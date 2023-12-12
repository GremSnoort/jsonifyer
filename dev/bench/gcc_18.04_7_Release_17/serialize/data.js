window.BENCHMARK_DATA = {
  "lastUpdate": 1702397892380,
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
      }
    ]
  }
}