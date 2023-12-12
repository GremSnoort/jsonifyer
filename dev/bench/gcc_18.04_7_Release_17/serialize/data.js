window.BENCHMARK_DATA = {
  "lastUpdate": 1702420953838,
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
        "date": 1702412515139,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 851.3798083379523,
            "unit": "ns/iter",
            "extra": "iterations: 826559\ncpu: 851.3398317603462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12687.250045657229,
            "unit": "ns/iter",
            "extra": "iterations: 65708\ncpu: 12686.441529189751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27434.616699170816,
            "unit": "ns/iter",
            "extra": "iterations: 30253\ncpu: 27433.73219184875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42589.307038640174,
            "unit": "ns/iter",
            "extra": "iterations: 18711\ncpu: 42587.77189888299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54609.95198006423,
            "unit": "ns/iter",
            "extra": "iterations: 14848\ncpu: 54606.17591594826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 56537.65010000028,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56532.889999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 68938.88034455766,
            "unit": "ns/iter",
            "extra": "iterations: 12770\ncpu: 68934.9960845732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 78736.02964787424,
            "unit": "ns/iter",
            "extra": "iterations: 10962\ncpu: 78732.58529465433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 90134.28807225259,
            "unit": "ns/iter",
            "extra": "iterations: 9633\ncpu: 90131.58932835032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 686.3700405475937,
            "unit": "ns/iter",
            "extra": "iterations: 982795\ncpu: 686.3648064957591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 572.0177851106776,
            "unit": "ns/iter",
            "extra": "iterations: 1226138\ncpu: 572.0079632145813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 571.3732059530021,
            "unit": "ns/iter",
            "extra": "iterations: 1222376\ncpu: 571.3652754962471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 572.3026367994463,
            "unit": "ns/iter",
            "extra": "iterations: 1219888\ncpu: 572.2986044620483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1072.8745961654784,
            "unit": "ns/iter",
            "extra": "iterations: 653114\ncpu: 1072.8538968694586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5191.039053972878,
            "unit": "ns/iter",
            "extra": "iterations: 154837\ncpu: 5190.980837913422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22864.146451059052,
            "unit": "ns/iter",
            "extra": "iterations: 36053\ncpu: 22863.86708456993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18463.53524979784,
            "unit": "ns/iter",
            "extra": "iterations: 44596\ncpu: 18463.64247914611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17778.711178914913,
            "unit": "ns/iter",
            "extra": "iterations: 46212\ncpu: 17778.332467757285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18202.93977209899,
            "unit": "ns/iter",
            "extra": "iterations: 45195\ncpu: 18202.754729505486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 51971.4586564931,
            "unit": "ns/iter",
            "extra": "iterations: 15988\ncpu: 51970.20265198912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 492452.10679611505,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 492445.2312964019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 410489.4095819415,
            "unit": "ns/iter",
            "extra": "iterations: 2129\ncpu: 410479.661813057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 408841.56314312696,
            "unit": "ns/iter",
            "extra": "iterations: 2138\ncpu: 408837.83910196467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 406631.786113699,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 406629.7763280522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 248534.6545454488,
            "unit": "ns/iter",
            "extra": "iterations: 3465\ncpu: 248524.04040404028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 405248.30182500277,
            "unit": "ns/iter",
            "extra": "iterations: 2137\ncpu: 405239.8689751989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2007953.7787418503,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2007845.9869848136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 823430.6505706632,
            "unit": "ns/iter",
            "extra": "iterations: 1139\ncpu: 823403.6874451293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2704889.6005747262,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2704707.183908045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5121.6253671307295,
            "unit": "ns/iter",
            "extra": "iterations: 156620\ncpu: 5121.398288851996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 22881.015968950698,
            "unit": "ns/iter",
            "extra": "iterations: 36070\ncpu: 22880.11089548093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18397.656965861886,
            "unit": "ns/iter",
            "extra": "iterations: 44876\ncpu: 18396.833496746625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 17880.2865392964,
            "unit": "ns/iter",
            "extra": "iterations: 46060\ncpu: 17879.81980026062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 17922.208362339265,
            "unit": "ns/iter",
            "extra": "iterations: 45968\ncpu: 17921.895666550678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 51809.03512589588,
            "unit": "ns/iter",
            "extra": "iterations: 16085\ncpu: 51808.803232825405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 520908.8218356338,
            "unit": "ns/iter",
            "extra": "iterations: 1667\ncpu: 520895.020995798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 429983.1543026737,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 429982.6409495541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 429917.7738271507,
            "unit": "ns/iter",
            "extra": "iterations: 2025\ncpu: 429915.4074074089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 425123.1395690366,
            "unit": "ns/iter",
            "extra": "iterations: 2042\ncpu: 425115.719882469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 251053.77688094857,
            "unit": "ns/iter",
            "extra": "iterations: 3469\ncpu: 251047.96771403827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 422476.56301702664,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 422475.3284671516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2042830.4120267571,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2042601.559020043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 814938.7061403482,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 814917.1929824593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5104.01130506563,
            "unit": "ns/iter",
            "extra": "iterations: 157540\ncpu: 5103.939951758291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22912.873516570766,
            "unit": "ns/iter",
            "extra": "iterations: 35728\ncpu: 22912.749104344017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18345.360438034462,
            "unit": "ns/iter",
            "extra": "iterations: 44654\ncpu: 18345.019483137003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 17749.779985251378,
            "unit": "ns/iter",
            "extra": "iterations: 46106\ncpu: 17749.520669761107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 17768.334402797387,
            "unit": "ns/iter",
            "extra": "iterations: 45194\ncpu: 17768.088684338585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 52642.985640507344,
            "unit": "ns/iter",
            "extra": "iterations: 15878\ncpu: 52642.67539992451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 506672.07880796137,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 506663.31125827995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 422202.00679939514,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 422198.44584749953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 422292.44900919404,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 422290.1884968556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 418957.7735849285,
            "unit": "ns/iter",
            "extra": "iterations: 2067\ncpu: 418952.05611998076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 251026.51667148637,
            "unit": "ns/iter",
            "extra": "iterations: 3449\ncpu: 251019.88982313866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 416591.49663461157,
            "unit": "ns/iter",
            "extra": "iterations: 2080\ncpu: 416567.98076923005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 372.3652850723488,
            "unit": "ns/iter",
            "extra": "iterations: 1871823\ncpu: 372.3495757878822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1965.9340214013503,
            "unit": "ns/iter",
            "extra": "iterations: 355585\ncpu: 1965.809300167329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1491.0670451237527,
            "unit": "ns/iter",
            "extra": "iterations: 470683\ncpu: 1491.003711627564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1495.794442725964,
            "unit": "ns/iter",
            "extra": "iterations: 468755\ncpu: 1495.7805250077233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1236.4058810393908,
            "unit": "ns/iter",
            "extra": "iterations: 564254\ncpu: 1236.3692592343095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 9072.217790374194,
            "unit": "ns/iter",
            "extra": "iterations: 76918\ncpu: 9072.096258353185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22176.084323605464,
            "unit": "ns/iter",
            "extra": "iterations: 31557\ncpu: 22175.919764236034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5290.552806244102,
            "unit": "ns/iter",
            "extra": "iterations: 131831\ncpu: 5290.538644173222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5241.946175615948,
            "unit": "ns/iter",
            "extra": "iterations: 132505\ncpu: 5241.884457190324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5209.227204022702,
            "unit": "ns/iter",
            "extra": "iterations: 133642\ncpu: 5209.195462504295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10866.291086416253,
            "unit": "ns/iter",
            "extra": "iterations: 64699\ncpu: 10866.106122196581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9976.158626235305,
            "unit": "ns/iter",
            "extra": "iterations: 69648\ncpu: 9976.000746611438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3456.6106419294297,
            "unit": "ns/iter",
            "extra": "iterations: 202125\ncpu: 3456.6293135435626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17237.6609072327,
            "unit": "ns/iter",
            "extra": "iterations: 40629\ncpu: 17237.59137561851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13627.330537664087,
            "unit": "ns/iter",
            "extra": "iterations: 51389\ncpu: 13627.247076222584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13696.283401835117,
            "unit": "ns/iter",
            "extra": "iterations: 51337\ncpu: 13695.960028829042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14212.224194463142,
            "unit": "ns/iter",
            "extra": "iterations: 49408\ncpu: 14211.836139896252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30245.461869192204,
            "unit": "ns/iter",
            "extra": "iterations: 23026\ncpu: 30245.15764787653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 110823.50428979544,
            "unit": "ns/iter",
            "extra": "iterations: 6294\ncpu: 110822.05274865148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 96422.5742711103,
            "unit": "ns/iter",
            "extra": "iterations: 7237\ncpu: 96421.94279397474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 95465.90921446621,
            "unit": "ns/iter",
            "extra": "iterations: 7358\ncpu: 95464.22941016585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 95248.90547534586,
            "unit": "ns/iter",
            "extra": "iterations: 7342\ncpu: 95248.35194769931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61177.63006741713,
            "unit": "ns/iter",
            "extra": "iterations: 11421\ncpu: 61177.33123194096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 94600.2202429179,
            "unit": "ns/iter",
            "extra": "iterations: 7410\ncpu: 94599.52766531838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3358.045893533672,
            "unit": "ns/iter",
            "extra": "iterations: 207502\ncpu: 3357.991730200157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16579.601541197495,
            "unit": "ns/iter",
            "extra": "iterations: 42175\ncpu: 16579.29342027264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13126.36174342351,
            "unit": "ns/iter",
            "extra": "iterations: 53068\ncpu: 13126.305871711607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13009.149207999886,
            "unit": "ns/iter",
            "extra": "iterations: 53851\ncpu: 13009.232883326182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13515.922486169542,
            "unit": "ns/iter",
            "extra": "iterations: 51694\ncpu: 13515.796804271376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28739.309557014014,
            "unit": "ns/iter",
            "extra": "iterations: 24380\ncpu: 28739.21246923684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 109799.4370881628,
            "unit": "ns/iter",
            "extra": "iterations: 6374\ncpu: 109797.86633197402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 94971.86815581308,
            "unit": "ns/iter",
            "extra": "iterations: 7342\ncpu: 94970.44402070413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 93735.36828028767,
            "unit": "ns/iter",
            "extra": "iterations: 7478\ncpu: 93734.75528216042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 94360.79970485443,
            "unit": "ns/iter",
            "extra": "iterations: 7454\ncpu: 94359.6994902065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61513.292479355965,
            "unit": "ns/iter",
            "extra": "iterations: 11382\ncpu: 61513.2226322272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 94871.09315254417,
            "unit": "ns/iter",
            "extra": "iterations: 7375\ncpu: 94870.40000000033 ns\nthreads: 1"
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
        "date": 1702415980236,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 883.6785182110902,
            "unit": "ns/iter",
            "extra": "iterations: 795255\ncpu: 883.6448686270443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12642.322110995574,
            "unit": "ns/iter",
            "extra": "iterations: 65732\ncpu: 12642.149942189499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27692.131030353965,
            "unit": "ns/iter",
            "extra": "iterations: 30077\ncpu: 27690.673936895306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42770.993063822556,
            "unit": "ns/iter",
            "extra": "iterations: 19319\ncpu: 42769.563642010435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54380.553198745394,
            "unit": "ns/iter",
            "extra": "iterations: 14662\ncpu: 54378.78870549724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 54999.22750000223,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54995.87000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66644.82664122198,
            "unit": "ns/iter",
            "extra": "iterations: 13100\ncpu: 66640.6106870229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 77018.32893916586,
            "unit": "ns/iter",
            "extra": "iterations: 11227\ncpu: 77013.28939164508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88297.66376782279,
            "unit": "ns/iter",
            "extra": "iterations: 9889\ncpu: 88293.08322378396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 706.5019463920896,
            "unit": "ns/iter",
            "extra": "iterations: 992092\ncpu: 706.4875031751094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 649.1196218107948,
            "unit": "ns/iter",
            "extra": "iterations: 1078825\ncpu: 649.090631010591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 603.5849890899932,
            "unit": "ns/iter",
            "extra": "iterations: 1159943\ncpu: 603.541208490418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 614.3284641098167,
            "unit": "ns/iter",
            "extra": "iterations: 1141592\ncpu: 614.2992417606281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1078.8476955918354,
            "unit": "ns/iter",
            "extra": "iterations: 647867\ncpu: 1078.8007415102165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5325.66970185545,
            "unit": "ns/iter",
            "extra": "iterations: 151336\ncpu: 5325.415631442617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23304.942073171267,
            "unit": "ns/iter",
            "extra": "iterations: 35424\ncpu: 23303.3903568202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18588.046702800937,
            "unit": "ns/iter",
            "extra": "iterations: 44280\ncpu: 18587.170280036164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17970.88255775754,
            "unit": "ns/iter",
            "extra": "iterations: 45665\ncpu: 17969.996715208614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17985.357062355204,
            "unit": "ns/iter",
            "extra": "iterations: 43477\ncpu: 17983.232513742867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50906.59031796464,
            "unit": "ns/iter",
            "extra": "iterations: 16071\ncpu: 50903.52809408243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 521496.0245327188,
            "unit": "ns/iter",
            "extra": "iterations: 1712\ncpu: 521460.51401869004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 414635.51869608456,
            "unit": "ns/iter",
            "extra": "iterations: 2086\ncpu: 414614.42953020235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 411511.8901408407,
            "unit": "ns/iter",
            "extra": "iterations: 2130\ncpu: 411479.2957746487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 415490.81375358975,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 415479.89493791666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 251497.6921075456,
            "unit": "ns/iter",
            "extra": "iterations: 3459\ncpu: 251482.68285631682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 413210.07109005755,
            "unit": "ns/iter",
            "extra": "iterations: 2110\ncpu: 413203.5545023693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2028716.1710526608,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2028540.3508771895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 797883.4006791147,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 797872.1561969431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2686655.0578034283,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2686545.375722536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5097.573548042745,
            "unit": "ns/iter",
            "extra": "iterations: 155497\ncpu: 5097.185154697523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23263.135134379034,
            "unit": "ns/iter",
            "extra": "iterations: 35720\ncpu: 23262.57278835392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18657.87012957683,
            "unit": "ns/iter",
            "extra": "iterations: 44375\ncpu: 18656.809014084538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18380.63657868004,
            "unit": "ns/iter",
            "extra": "iterations: 45234\ncpu: 18380.16094088514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18172.872278150226,
            "unit": "ns/iter",
            "extra": "iterations: 45098\ncpu: 18170.26919153837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 51924.5109852495,
            "unit": "ns/iter",
            "extra": "iterations: 16067\ncpu: 51922.21945602779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 510900.8285209216,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 510878.5503830302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 423669.4014670084,
            "unit": "ns/iter",
            "extra": "iterations: 2045\ncpu: 423642.49388753326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 431385.4670542789,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 431373.78875968914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 426185.03957010567,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 426161.9931607249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 252763.92846884596,
            "unit": "ns/iter",
            "extra": "iterations: 3481\ncpu: 252757.71330077565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 422848.9799902402,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 422834.45583211235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2050734.6510067699,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2050557.9418344577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 809902.9579684826,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 809869.7898423814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5196.755507335402,
            "unit": "ns/iter",
            "extra": "iterations: 154385\ncpu: 5196.462739255749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22849.305243962113,
            "unit": "ns/iter",
            "extra": "iterations: 36194\ncpu: 22848.723545339177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18270.882192202866,
            "unit": "ns/iter",
            "extra": "iterations: 45379\ncpu: 18269.845082527125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 17873.747031492265,
            "unit": "ns/iter",
            "extra": "iterations: 46488\ncpu: 17872.98227499566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 17884.661344037042,
            "unit": "ns/iter",
            "extra": "iterations: 45341\ncpu: 17883.63953154984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 52252.59303766051,
            "unit": "ns/iter",
            "extra": "iterations: 16144\ncpu: 52252.521060456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 502770.09976798214,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 502752.72621809907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 418471.64674696745,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 418448.62650602165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 415008.3508103178,
            "unit": "ns/iter",
            "extra": "iterations: 2098\ncpu: 414998.0934223069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 412301.49528302636,
            "unit": "ns/iter",
            "extra": "iterations: 2120\ncpu: 412289.2924528301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 247507.26511495878,
            "unit": "ns/iter",
            "extra": "iterations: 3523\ncpu: 247502.12886744202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 406858.0950354559,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 406847.09219858155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 358.5867151921863,
            "unit": "ns/iter",
            "extra": "iterations: 1951688\ncpu: 358.5662257491974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2048.8325316344126,
            "unit": "ns/iter",
            "extra": "iterations: 342190\ncpu: 2048.753031941306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1491.5483665097568,
            "unit": "ns/iter",
            "extra": "iterations: 468506\ncpu: 1491.4848475793385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1492.523131566512,
            "unit": "ns/iter",
            "extra": "iterations: 469337\ncpu: 1492.5113511186996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1258.8125116696824,
            "unit": "ns/iter",
            "extra": "iterations: 562355\ncpu: 1258.8137386526384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 9084.857718416666,
            "unit": "ns/iter",
            "extra": "iterations: 77192\ncpu: 9084.235412996059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20909.53971669337,
            "unit": "ns/iter",
            "extra": "iterations: 33462\ncpu: 20908.56195086988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5251.168885328199,
            "unit": "ns/iter",
            "extra": "iterations: 133564\ncpu: 5250.845287652403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5231.324218779196,
            "unit": "ns/iter",
            "extra": "iterations: 133925\ncpu: 5231.112936344918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5223.6217193016655,
            "unit": "ns/iter",
            "extra": "iterations: 134194\ncpu: 5223.613574377407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10815.557162661631,
            "unit": "ns/iter",
            "extra": "iterations: 64920\ncpu: 10814.8829328404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9916.907330331413,
            "unit": "ns/iter",
            "extra": "iterations: 70638\ncpu: 9916.50244910671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3424.6929928888785,
            "unit": "ns/iter",
            "extra": "iterations: 204321\ncpu: 3424.6332976051795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17171.720885843264,
            "unit": "ns/iter",
            "extra": "iterations: 40865\ncpu: 17171.241894041174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13588.781077979585,
            "unit": "ns/iter",
            "extra": "iterations: 51411\ncpu: 13588.041469724436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13940.313014434127,
            "unit": "ns/iter",
            "extra": "iterations: 50298\ncpu: 13939.782893951846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14126.154812817987,
            "unit": "ns/iter",
            "extra": "iterations: 49337\ncpu: 14125.91969515766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29698.20898553077,
            "unit": "ns/iter",
            "extra": "iterations: 23638\ncpu: 29697.025975124518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 111037.71970412527,
            "unit": "ns/iter",
            "extra": "iterations: 6354\ncpu: 111037.69279194229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 95246.4907925247,
            "unit": "ns/iter",
            "extra": "iterations: 7331\ncpu: 95236.80261901392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 94224.10903719644,
            "unit": "ns/iter",
            "extra": "iterations: 7447\ncpu: 94221.86115214117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 94396.40444145471,
            "unit": "ns/iter",
            "extra": "iterations: 7430\ncpu: 94391.83041722837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 60605.65446025422,
            "unit": "ns/iter",
            "extra": "iterations: 11524\ncpu: 60603.95695938844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 93981.40574433675,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 93979.92179072424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3292.176982915134,
            "unit": "ns/iter",
            "extra": "iterations: 209540\ncpu: 3292.0716808246566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16458.503948667738,
            "unit": "ns/iter",
            "extra": "iterations: 42546\ncpu: 16458.48728435101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13634.242439734515,
            "unit": "ns/iter",
            "extra": "iterations: 50858\ncpu: 13633.414605371996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13095.369532230527,
            "unit": "ns/iter",
            "extra": "iterations: 53381\ncpu: 13095.011333620645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13532.535165786101,
            "unit": "ns/iter",
            "extra": "iterations: 52025\ncpu: 13531.76934166268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28244.04613833415,
            "unit": "ns/iter",
            "extra": "iterations: 24795\ncpu: 28243.190159306363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 107947.87889540469,
            "unit": "ns/iter",
            "extra": "iterations: 6482\ncpu: 107942.91885220607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 92227.03441810659,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 92225.76670684254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 90931.49889739808,
            "unit": "ns/iter",
            "extra": "iterations: 7709\ncpu: 90930.2892722799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 91082.7372881364,
            "unit": "ns/iter",
            "extra": "iterations: 7670\ncpu: 91075.91916558056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 60333.384648478765,
            "unit": "ns/iter",
            "extra": "iterations: 11621\ncpu: 60330.6514069349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 91184.75084923205,
            "unit": "ns/iter",
            "extra": "iterations: 7654\ncpu: 91181.26469819785 ns\nthreads: 1"
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
        "date": 1702418335855,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 856.713546521054,
            "unit": "ns/iter",
            "extra": "iterations: 811116\ncpu: 856.6653844826141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12537.8279677765,
            "unit": "ns/iter",
            "extra": "iterations: 65790\ncpu: 12537.168262653899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26805.66111683651,
            "unit": "ns/iter",
            "extra": "iterations: 31052\ncpu: 26804.981965734896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43112.985302175875,
            "unit": "ns/iter",
            "extra": "iterations: 20071\ncpu: 43112.06716157639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53377.698336812595,
            "unit": "ns/iter",
            "extra": "iterations: 14851\ncpu: 53331.02821358832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 54518.26639999808,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54515.989999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66288.2598042927,
            "unit": "ns/iter",
            "extra": "iterations: 13183\ncpu: 66284.81377531672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 77184.76753028236,
            "unit": "ns/iter",
            "extra": "iterations: 11309\ncpu: 77179.14935007523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 87940.80932073887,
            "unit": "ns/iter",
            "extra": "iterations: 9849\ncpu: 87936.87684028833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 700.5104559170021,
            "unit": "ns/iter",
            "extra": "iterations: 999195\ncpu: 700.4681768823904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 588.2492022143183,
            "unit": "ns/iter",
            "extra": "iterations: 1190796\ncpu: 588.2465174555506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 587.6460496275787,
            "unit": "ns/iter",
            "extra": "iterations: 1186559\ncpu: 587.6392998578244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 585.5979357168351,
            "unit": "ns/iter",
            "extra": "iterations: 1197607\ncpu: 585.5566976478935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1079.1276145309164,
            "unit": "ns/iter",
            "extra": "iterations: 649017\ncpu: 1079.0765110929292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5272.1032055469395,
            "unit": "ns/iter",
            "extra": "iterations: 151581\ncpu: 5271.858610247987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23401.534327421705,
            "unit": "ns/iter",
            "extra": "iterations: 35074\ncpu: 23400.615840793762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18503.642960224275,
            "unit": "ns/iter",
            "extra": "iterations: 44348\ncpu: 18502.018129340646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17914.304657320437,
            "unit": "ns/iter",
            "extra": "iterations: 46078\ncpu: 17913.568297235117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18247.0996979531,
            "unit": "ns/iter",
            "extra": "iterations: 45026\ncpu: 18246.084484520026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 51667.07396320335,
            "unit": "ns/iter",
            "extra": "iterations: 16035\ncpu: 51666.105394449565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 506203.91632533347,
            "unit": "ns/iter",
            "extra": "iterations: 1709\ncpu: 506181.74370977195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 414086.4406698739,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 414088.1818181818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 415617.67846890265,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 415613.11004784604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 415993.3458213046,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 415986.599423632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 251451.41303084226,
            "unit": "ns/iter",
            "extra": "iterations: 3438\ncpu: 251448.45840604944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 413360.37873753405,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 413343.7588989084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2040459.367841354,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2040286.563876658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 838785.0975828206,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 838742.0769919454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2688127.4505813993,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2687931.9767441894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5076.946793500751,
            "unit": "ns/iter",
            "extra": "iterations: 156635\ncpu: 5076.737638458842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23316.01421950001,
            "unit": "ns/iter",
            "extra": "iterations: 34952\ncpu: 23314.71160448611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18488.19777323414,
            "unit": "ns/iter",
            "extra": "iterations: 44010\ncpu: 18486.991592819926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 17964.8754131374,
            "unit": "ns/iter",
            "extra": "iterations: 45687\ncpu: 17964.81274760863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18223.864276512297,
            "unit": "ns/iter",
            "extra": "iterations: 45018\ncpu: 18223.659425118985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 51925.87070580946,
            "unit": "ns/iter",
            "extra": "iterations: 16010\ncpu: 51924.472204871774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 529760.0363856719,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 529752.2134627046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 429914.8996505052,
            "unit": "ns/iter",
            "extra": "iterations: 2003\ncpu: 429904.89266100933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 422098.2423949922,
            "unit": "ns/iter",
            "extra": "iterations: 2071\ncpu: 422090.8256880741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 421261.8898058285,
            "unit": "ns/iter",
            "extra": "iterations: 2060\ncpu: 421254.90291262086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 247823.63523082063,
            "unit": "ns/iter",
            "extra": "iterations: 3531\ncpu: 247822.65647125588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 417178.16714422737,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 417088.25214899454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2017167.3714285532,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2017103.9560439538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 798305.2119657862,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 798296.0683760694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5197.849372006877,
            "unit": "ns/iter",
            "extra": "iterations: 154938\ncpu: 5197.728768926955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22854.050344008094,
            "unit": "ns/iter",
            "extra": "iterations: 36191\ncpu: 22853.67356525118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18291.787979301578,
            "unit": "ns/iter",
            "extra": "iterations: 45222\ncpu: 18291.490867277014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 17911.45842933699,
            "unit": "ns/iter",
            "extra": "iterations: 46439\ncpu: 17911.21686513485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 17946.97060244193,
            "unit": "ns/iter",
            "extra": "iterations: 45548\ncpu: 17946.6738385878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 52234.37330204758,
            "unit": "ns/iter",
            "extra": "iterations: 16196\ncpu: 52234.131884415554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 507279.085648133,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 507251.7361111111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 422213.8299220508,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 422197.36842105247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 418500.6250000147,
            "unit": "ns/iter",
            "extra": "iterations: 2072\ncpu: 418486.72779922944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 417741.7467501036,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 417714.97351950116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 251452.78807757795,
            "unit": "ns/iter",
            "extra": "iterations: 3506\ncpu: 251443.69652025035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 411129.89712918206,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 411104.5454545426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 360.5785944948787,
            "unit": "ns/iter",
            "extra": "iterations: 1942846\ncpu: 360.5603326254351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2027.2726880137427,
            "unit": "ns/iter",
            "extra": "iterations: 345028\ncpu: 2027.1566365628303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1446.1495799637164,
            "unit": "ns/iter",
            "extra": "iterations: 484363\ncpu: 1446.0827932769425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1594.4089635853536,
            "unit": "ns/iter",
            "extra": "iterations: 483378\ncpu: 1594.3170769046214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1233.4242342351388,
            "unit": "ns/iter",
            "extra": "iterations: 588366\ncpu: 1233.3651162711683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 9163.781814855232,
            "unit": "ns/iter",
            "extra": "iterations: 76513\ncpu: 9163.708128030525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22026.29360510807,
            "unit": "ns/iter",
            "extra": "iterations: 31791\ncpu: 22025.52923783454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5313.417770507225,
            "unit": "ns/iter",
            "extra": "iterations: 132039\ncpu: 5313.117336544401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5312.079465232567,
            "unit": "ns/iter",
            "extra": "iterations: 132020\ncpu: 5311.770943796431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5289.155675258468,
            "unit": "ns/iter",
            "extra": "iterations: 132179\ncpu: 5288.86282995028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10588.815662213625,
            "unit": "ns/iter",
            "extra": "iterations: 66172\ncpu: 10588.72332708697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9980.868478849352,
            "unit": "ns/iter",
            "extra": "iterations: 70118\ncpu: 9980.698251518788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3467.3199571909827,
            "unit": "ns/iter",
            "extra": "iterations: 201827\ncpu: 3467.2967442413114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17254.18360752685,
            "unit": "ns/iter",
            "extra": "iterations: 40543\ncpu: 17253.577682953808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13667.258536778161,
            "unit": "ns/iter",
            "extra": "iterations: 50546\ncpu: 13666.375183001554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13875.240035658013,
            "unit": "ns/iter",
            "extra": "iterations: 50480\ncpu: 13875.055467511791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14219.501626098778,
            "unit": "ns/iter",
            "extra": "iterations: 49505\ncpu: 14219.466720533379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29705.613422591898,
            "unit": "ns/iter",
            "extra": "iterations: 23602\ncpu: 29705.35971527844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 109478.52409168883,
            "unit": "ns/iter",
            "extra": "iterations: 6413\ncpu: 109476.89069078499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 95021.2773416317,
            "unit": "ns/iter",
            "extra": "iterations: 7388\ncpu: 95017.48781808336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 93609.24229842021,
            "unit": "ns/iter",
            "extra": "iterations: 7466\ncpu: 93608.69274042276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 93931.66966563578,
            "unit": "ns/iter",
            "extra": "iterations: 7447\ncpu: 93930.03894185685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59899.45542519182,
            "unit": "ns/iter",
            "extra": "iterations: 11677\ncpu: 59898.98090262912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 92470.03928855402,
            "unit": "ns/iter",
            "extra": "iterations: 7534\ncpu: 92469.37881603518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3282.0796138455717,
            "unit": "ns/iter",
            "extra": "iterations: 213179\ncpu: 3282.0610848160104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16640.85060195325,
            "unit": "ns/iter",
            "extra": "iterations: 42196\ncpu: 16640.776376907805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13909.134824448218,
            "unit": "ns/iter",
            "extra": "iterations: 49672\ncpu: 13908.87421484936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13001.22489795885,
            "unit": "ns/iter",
            "extra": "iterations: 53900\ncpu: 13000.983302411985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13570.800753192872,
            "unit": "ns/iter",
            "extra": "iterations: 51514\ncpu: 13570.602166401466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28220.823057056557,
            "unit": "ns/iter",
            "extra": "iterations: 24782\ncpu: 28220.506819465394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 107485.09634654068,
            "unit": "ns/iter",
            "extra": "iterations: 6487\ncpu: 107483.05842454071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 95664.25162574888,
            "unit": "ns/iter",
            "extra": "iterations: 7535\ncpu: 95662.37558062555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 92463.88673309266,
            "unit": "ns/iter",
            "extra": "iterations: 7628\ncpu: 92458.41636077648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 91433.47218184193,
            "unit": "ns/iter",
            "extra": "iterations: 7567\ncpu: 91431.70344918712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59793.82283159694,
            "unit": "ns/iter",
            "extra": "iterations: 11633\ncpu: 59793.24335940759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 91080.7328472832,
            "unit": "ns/iter",
            "extra": "iterations: 7681\ncpu: 91074.95117823372 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420953009,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 872.0006064378971,
            "unit": "ns/iter",
            "extra": "iterations: 806348\ncpu: 871.9872809258534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12742.537975169631,
            "unit": "ns/iter",
            "extra": "iterations: 65161\ncpu: 12742.12335599515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27682.908933738498,
            "unit": "ns/iter",
            "extra": "iterations: 30077\ncpu: 27682.614622469006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44248.315859321825,
            "unit": "ns/iter",
            "extra": "iterations: 19591\ncpu: 44247.1338880098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54695.42714095632,
            "unit": "ns/iter",
            "extra": "iterations: 14281\ncpu: 54694.069042784125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 56402.0051,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56400.94999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 68324.70045832603,
            "unit": "ns/iter",
            "extra": "iterations: 12873\ncpu: 68322.47339392528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 77715.5890558886,
            "unit": "ns/iter",
            "extra": "iterations: 11111\ncpu: 77711.41211412114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 87910.50076491306,
            "unit": "ns/iter",
            "extra": "iterations: 9805\ncpu: 87905.6705762367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 699.641058707522,
            "unit": "ns/iter",
            "extra": "iterations: 1000314\ncpu: 699.6206191255945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 594.6226701879708,
            "unit": "ns/iter",
            "extra": "iterations: 1185557\ncpu: 594.6032961721785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 587.0883528550099,
            "unit": "ns/iter",
            "extra": "iterations: 1193374\ncpu: 587.0608878691833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 587.5342619065844,
            "unit": "ns/iter",
            "extra": "iterations: 1193731\ncpu: 587.5126808301034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1097.0349055027036,
            "unit": "ns/iter",
            "extra": "iterations: 640071\ncpu: 1097.0273610271356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5281.3558537805075,
            "unit": "ns/iter",
            "extra": "iterations: 151936\ncpu: 5281.155223251889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23396.081372575478,
            "unit": "ns/iter",
            "extra": "iterations: 35233\ncpu: 23395.299860925854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18581.27021718552,
            "unit": "ns/iter",
            "extra": "iterations: 44294\ncpu: 18580.90486296112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17940.366724074844,
            "unit": "ns/iter",
            "extra": "iterations: 45871\ncpu: 17939.635063547834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18404.901247796042,
            "unit": "ns/iter",
            "extra": "iterations: 44799\ncpu: 18404.352775731597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 52138.436016870044,
            "unit": "ns/iter",
            "extra": "iterations: 15887\ncpu: 52135.90356895576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 504912.2603377971,
            "unit": "ns/iter",
            "extra": "iterations: 1717\ncpu: 504904.07687827625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 408591.2097307453,
            "unit": "ns/iter",
            "extra": "iterations: 2117\ncpu: 408576.9485120461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 410588.91242265387,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 410569.585911471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 411136.47832234215,
            "unit": "ns/iter",
            "extra": "iterations: 2122\ncpu: 411121.960414702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 248727.8126249534,
            "unit": "ns/iter",
            "extra": "iterations: 3501\ncpu: 248718.1376749504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 407961.1768548673,
            "unit": "ns/iter",
            "extra": "iterations: 2143\ncpu: 407954.9230051337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2020971.3899781047,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2020780.6100217907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 802723.42783943,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 802677.8821520073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2680011.0521738436,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2679846.956521737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5171.437920335913,
            "unit": "ns/iter",
            "extra": "iterations: 155679\ncpu: 5171.148324436819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24247.883728709705,
            "unit": "ns/iter",
            "extra": "iterations: 35873\ncpu: 24246.948958827066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18630.8190695391,
            "unit": "ns/iter",
            "extra": "iterations: 44752\ncpu: 18630.17965677515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18058.16095755475,
            "unit": "ns/iter",
            "extra": "iterations: 45658\ncpu: 18057.61531385523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18647.093719441727,
            "unit": "ns/iter",
            "extra": "iterations: 44996\ncpu: 18646.31745044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 52054.18844472438,
            "unit": "ns/iter",
            "extra": "iterations: 16010\ncpu: 52053.49156777007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 518971.858156024,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 518955.6737588656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 426575.28876738535,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 426549.7017892648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 426359.656204022,
            "unit": "ns/iter",
            "extra": "iterations: 2039\ncpu: 426337.7145659625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 427777.989710912,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 427775.6001959847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 250306.10949114175,
            "unit": "ns/iter",
            "extra": "iterations: 3498\ncpu: 250301.11492281302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 418473.67341040965,
            "unit": "ns/iter",
            "extra": "iterations: 2076\ncpu: 418458.4296724469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2031189.063736347,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2031045.274725267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 810917.9773716279,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 810910.2697998256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5113.846195399336,
            "unit": "ns/iter",
            "extra": "iterations: 161055\ncpu: 5113.704014156631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23048.85085717558,
            "unit": "ns/iter",
            "extra": "iterations: 35932\ncpu: 23048.430368473822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18358.513197720913,
            "unit": "ns/iter",
            "extra": "iterations: 44932\ncpu: 18357.449034095836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 17855.362115372358,
            "unit": "ns/iter",
            "extra": "iterations: 46441\ncpu: 17854.727503714374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18120.186961028063,
            "unit": "ns/iter",
            "extra": "iterations: 45341\ncpu: 18119.681965549964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 52013.67918787789,
            "unit": "ns/iter",
            "extra": "iterations: 16106\ncpu: 52013.03241028177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 503301.5321637176,
            "unit": "ns/iter",
            "extra": "iterations: 1710\ncpu: 503291.4619883059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 416871.14410059666,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 416858.26885879977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 414279.3102625258,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 414279.9045346055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 411490.18913766847,
            "unit": "ns/iter",
            "extra": "iterations: 2099\ncpu: 411476.3696998569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 251010.32190803127,
            "unit": "ns/iter",
            "extra": "iterations: 3501\ncpu: 251004.34161668128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 408984.9826290844,
            "unit": "ns/iter",
            "extra": "iterations: 2130\ncpu: 408976.5727699525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 377.9229191556749,
            "unit": "ns/iter",
            "extra": "iterations: 1929325\ncpu: 377.91274150285534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2028.7254289449677,
            "unit": "ns/iter",
            "extra": "iterations: 345732\ncpu: 2028.650226186746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1555.639176769735,
            "unit": "ns/iter",
            "extra": "iterations: 450032\ncpu: 1555.5933800262976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1824.3914255640748,
            "unit": "ns/iter",
            "extra": "iterations: 440822\ncpu: 1824.3465616507362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1251.3396648144142,
            "unit": "ns/iter",
            "extra": "iterations: 561480\ncpu: 1251.3165206240749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 9126.304730558119,
            "unit": "ns/iter",
            "extra": "iterations: 77475\ncpu: 9126.16585995481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21921.074262967184,
            "unit": "ns/iter",
            "extra": "iterations: 32156\ncpu: 21921.1002612265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5251.911577260222,
            "unit": "ns/iter",
            "extra": "iterations: 133529\ncpu: 5251.760291771796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5248.401198098818,
            "unit": "ns/iter",
            "extra": "iterations: 133378\ncpu: 5248.228343504897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5224.002913887789,
            "unit": "ns/iter",
            "extra": "iterations: 134185\ncpu: 5223.904311212189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10879.568679228107,
            "unit": "ns/iter",
            "extra": "iterations: 64379\ncpu: 10879.196632442343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9899.587636260929,
            "unit": "ns/iter",
            "extra": "iterations: 71095\ncpu: 9899.45565792241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3461.5520478109815,
            "unit": "ns/iter",
            "extra": "iterations: 202631\ncpu: 3461.4446950368038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17425.53502164689,
            "unit": "ns/iter",
            "extra": "iterations: 39961\ncpu: 17425.549911163536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13747.401606900108,
            "unit": "ns/iter",
            "extra": "iterations: 50781\ncpu: 13747.177093794917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13731.322614675,
            "unit": "ns/iter",
            "extra": "iterations: 51188\ncpu: 13730.81386262398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14180.143992539088,
            "unit": "ns/iter",
            "extra": "iterations: 49322\ncpu: 14179.660192206453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30367.26223564907,
            "unit": "ns/iter",
            "extra": "iterations: 23170\ncpu: 30366.5731549422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 109679.58158471774,
            "unit": "ns/iter",
            "extra": "iterations: 6386\ncpu: 109676.7460068903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 95483.68980595733,
            "unit": "ns/iter",
            "extra": "iterations: 7318\ncpu: 95479.44793659364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 95498.3091495379,
            "unit": "ns/iter",
            "extra": "iterations: 7443\ncpu: 95344.80720139708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 94923.71407020996,
            "unit": "ns/iter",
            "extra": "iterations: 7292\ncpu: 94920.03565551295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 60621.0685274798,
            "unit": "ns/iter",
            "extra": "iterations: 11572\ncpu: 60619.24472865613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 94250.56189056761,
            "unit": "ns/iter",
            "extra": "iterations: 7384\ncpu: 94245.44962080276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3256.790797247451,
            "unit": "ns/iter",
            "extra": "iterations: 215805\ncpu: 3256.6738490767516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16365.110590000806,
            "unit": "ns/iter",
            "extra": "iterations: 42644\ncpu: 16364.684363568073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13616.66120990796,
            "unit": "ns/iter",
            "extra": "iterations: 50946\ncpu: 13616.166136693922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12782.069293402432,
            "unit": "ns/iter",
            "extra": "iterations: 53425\ncpu: 12781.55357978457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13333.373872262082,
            "unit": "ns/iter",
            "extra": "iterations: 53093\ncpu: 13333.401766711142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28468.86215306986,
            "unit": "ns/iter",
            "extra": "iterations: 23780\ncpu: 28468.92767031098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 106387.87631698872,
            "unit": "ns/iter",
            "extra": "iterations: 6549\ncpu: 106383.02030844503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 92252.73755596411,
            "unit": "ns/iter",
            "extra": "iterations: 7594\ncpu: 92251.44851198343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 90934.22999999997,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 90930.9090909079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 90357.66055283125,
            "unit": "ns/iter",
            "extra": "iterations: 7742\ncpu: 90356.84577628638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59991.97571023961,
            "unit": "ns/iter",
            "extra": "iterations: 11651\ncpu: 59992.060767316885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 91812.76652784682,
            "unit": "ns/iter",
            "extra": "iterations: 7684\ncpu: 91807.30088495614 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}