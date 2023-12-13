window.BENCHMARK_DATA = {
  "lastUpdate": 1702504658748,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-14 22.04 Release c++-17": [
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
        "date": 1702490997779,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 579.8405191311373,
            "unit": "ns/iter",
            "extra": "iterations: 1208866\ncpu: 579.7977608767225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5361.490699999649,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5361.081999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10328.07180322172,
            "unit": "ns/iter",
            "extra": "iterations: 80456\ncpu: 10327.948195286865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15584.319231559453,
            "unit": "ns/iter",
            "extra": "iterations: 53563\ncpu: 15584.183111476199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20222.81627233024,
            "unit": "ns/iter",
            "extra": "iterations: 41420\ncpu: 20222.211492032828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25252.90495767582,
            "unit": "ns/iter",
            "extra": "iterations: 33080\ncpu: 25252.312575574364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30177.06824089826,
            "unit": "ns/iter",
            "extra": "iterations: 27696\ncpu: 30174.985557481243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35129.594032897454,
            "unit": "ns/iter",
            "extra": "iterations: 23529\ncpu: 35126.401462025584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40246.619823196066,
            "unit": "ns/iter",
            "extra": "iterations: 20814\ncpu: 40244.79677140384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 570.6452009394975,
            "unit": "ns/iter",
            "extra": "iterations: 1232585\ncpu: 570.5979709310113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 418.87389615400934,
            "unit": "ns/iter",
            "extra": "iterations: 1660671\ncpu: 418.8283531175049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.90105381750453,
            "unit": "ns/iter",
            "extra": "iterations: 1631402\ncpu: 424.8650547198062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 418.8253642239055,
            "unit": "ns/iter",
            "extra": "iterations: 1674382\ncpu: 418.8265879590201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 865.9496134712707,
            "unit": "ns/iter",
            "extra": "iterations: 801881\ncpu: 865.8711205278577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2040.9510161171484,
            "unit": "ns/iter",
            "extra": "iterations: 393803\ncpu: 2040.8066977651276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10418.852061895066,
            "unit": "ns/iter",
            "extra": "iterations: 77938\ncpu: 10417.888578100537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8373.988206368273,
            "unit": "ns/iter",
            "extra": "iterations: 98019\ncpu: 8373.609198216676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8107.008206689681,
            "unit": "ns/iter",
            "extra": "iterations: 101137\ncpu: 8106.396274360535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7664.073239070787,
            "unit": "ns/iter",
            "extra": "iterations: 107784\ncpu: 7663.6383878868855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30179.265386013227,
            "unit": "ns/iter",
            "extra": "iterations: 27590\ncpu: 30176.51322943097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 257786.04346549924,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 257769.72099853118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198140.8708410186,
            "unit": "ns/iter",
            "extra": "iterations: 4328\ncpu: 198138.37800369653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 203786.45669842008,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 203775.7603900626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199886.10002331302,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 199881.34763348044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103496.79018332316,
            "unit": "ns/iter",
            "extra": "iterations: 8455\ncpu: 103492.08752217631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 196147.2485406535,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 196141.69286034993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5156.0046699989925,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5155.865999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28510.92890225344,
            "unit": "ns/iter",
            "extra": "iterations: 28932\ncpu: 28510.42098714224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22383.34005501816,
            "unit": "ns/iter",
            "extra": "iterations: 37441\ncpu: 22382.978552923312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22159.856147074388,
            "unit": "ns/iter",
            "extra": "iterations: 37587\ncpu: 22159.148109718797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21390.782120288695,
            "unit": "ns/iter",
            "extra": "iterations: 38457\ncpu: 21389.73398861066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48747.942845421654,
            "unit": "ns/iter",
            "extra": "iterations: 17059\ncpu: 48745.64745881951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 280634.7726106486,
            "unit": "ns/iter",
            "extra": "iterations: 3118\ncpu: 280629.12123156013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 219162.6249370165,
            "unit": "ns/iter",
            "extra": "iterations: 3970\ncpu: 219149.79848866546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 219461.52504404614,
            "unit": "ns/iter",
            "extra": "iterations: 3973\ncpu: 219457.36219481545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 216917.94480358547,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 216905.59423172637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116499.27102549923,
            "unit": "ns/iter",
            "extra": "iterations: 7372\ncpu: 116498.27726532819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 207805.91039084448,
            "unit": "ns/iter",
            "extra": "iterations: 4196\ncpu: 207796.61582459405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 848247.5278275687,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 848217.7737881546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 479992.7311015267,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 479978.401727865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1903.5161923919843,
            "unit": "ns/iter",
            "extra": "iterations: 420537\ncpu: 1903.4032677267428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10437.291991989181,
            "unit": "ns/iter",
            "extra": "iterations: 78896\ncpu: 10437.04116812006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7719.29318141735,
            "unit": "ns/iter",
            "extra": "iterations: 107691\ncpu: 7719.1380895339935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7969.4856205514625,
            "unit": "ns/iter",
            "extra": "iterations: 104246\ncpu: 7969.120158087564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7542.280935464052,
            "unit": "ns/iter",
            "extra": "iterations: 111474\ncpu: 7542.223298706386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29709.174004344357,
            "unit": "ns/iter",
            "extra": "iterations: 28097\ncpu: 29707.762394561712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 269524.2683293199,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 269518.9302884623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 203616.8610598919,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 203612.811059908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 205486.80515222135,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 205482.62295081964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 201520.43825889617,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 201511.4776632295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101686.38854901011,
            "unit": "ns/iter",
            "extra": "iterations: 8663\ncpu: 101682.89276232242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 192856.1812404041,
            "unit": "ns/iter",
            "extra": "iterations: 4563\ncpu: 192850.3835196149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 192.28625171213682,
            "unit": "ns/iter",
            "extra": "iterations: 3649669\ncpu: 192.28083423455723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1516.813203430703,
            "unit": "ns/iter",
            "extra": "iterations: 461577\ncpu: 1516.776182522103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1103.0122650789942,
            "unit": "ns/iter",
            "extra": "iterations: 631223\ncpu: 1102.9826226230746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1212.585733574047,
            "unit": "ns/iter",
            "extra": "iterations: 641394\ncpu: 1212.5333258496391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 892.1034470623052,
            "unit": "ns/iter",
            "extra": "iterations: 795605\ncpu: 892.0934383268127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9548.269736132102,
            "unit": "ns/iter",
            "extra": "iterations: 73976\ncpu: 9548.095328214558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12606.914012172125,
            "unit": "ns/iter",
            "extra": "iterations: 56194\ncpu: 12606.475780332457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2799.906357165651,
            "unit": "ns/iter",
            "extra": "iterations: 251071\ncpu: 2799.8048360822195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2807.172045777329,
            "unit": "ns/iter",
            "extra": "iterations: 252613\ncpu: 2807.126711610232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2838.082646879032,
            "unit": "ns/iter",
            "extra": "iterations: 242308\ncpu: 2838.0061739604203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5336.033925028725,
            "unit": "ns/iter",
            "extra": "iterations: 132557\ncpu: 5335.846466048554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5363.223883093101,
            "unit": "ns/iter",
            "extra": "iterations: 131524\ncpu: 5363.084304005372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1946.7679001728206,
            "unit": "ns/iter",
            "extra": "iterations: 358139\ncpu: 1946.709517812919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10118.8557805187,
            "unit": "ns/iter",
            "extra": "iterations: 68999\ncpu: 10118.733604834668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8178.98045420169,
            "unit": "ns/iter",
            "extra": "iterations: 85645\ncpu: 8178.699281919525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8106.283862171834,
            "unit": "ns/iter",
            "extra": "iterations: 86542\ncpu: 8106.095306325213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8051.057646448888,
            "unit": "ns/iter",
            "extra": "iterations: 86805\ncpu: 8050.8807096364635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18668.389517808402,
            "unit": "ns/iter",
            "extra": "iterations: 37454\ncpu: 18667.522828002522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55867.030044981286,
            "unit": "ns/iter",
            "extra": "iterations: 12448\ncpu: 55866.12307197901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45004.7672485434,
            "unit": "ns/iter",
            "extra": "iterations: 15639\ncpu: 45002.26996611015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44593.50095651341,
            "unit": "ns/iter",
            "extra": "iterations: 15682\ncpu: 44592.87718403318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44357.13717719496,
            "unit": "ns/iter",
            "extra": "iterations: 15644\ncpu: 44353.64356941955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26129.154105227604,
            "unit": "ns/iter",
            "extra": "iterations: 26722\ncpu: 26127.078811465948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44138.12619181081,
            "unit": "ns/iter",
            "extra": "iterations: 16047\ncpu: 44135.07820776525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1948.700744016624,
            "unit": "ns/iter",
            "extra": "iterations: 359535\ncpu: 1948.5888717370854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10385.955018798379,
            "unit": "ns/iter",
            "extra": "iterations: 67028\ncpu: 10385.364325356457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8318.157058151235,
            "unit": "ns/iter",
            "extra": "iterations: 83988\ncpu: 8318.187121969868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8406.687814606057,
            "unit": "ns/iter",
            "extra": "iterations: 83239\ncpu: 8405.804971227419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8318.99459235067,
            "unit": "ns/iter",
            "extra": "iterations: 84325\ncpu: 8318.474948117408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18535.33786149976,
            "unit": "ns/iter",
            "extra": "iterations: 37690\ncpu: 18533.502255240106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56322.63375181096,
            "unit": "ns/iter",
            "extra": "iterations: 12426\ncpu: 56317.857717688625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44011.75708450607,
            "unit": "ns/iter",
            "extra": "iterations: 15668\ncpu: 44008.98646923634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44455.98928298207,
            "unit": "ns/iter",
            "extra": "iterations: 15676\ncpu: 44454.30594539446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43972.198074364875,
            "unit": "ns/iter",
            "extra": "iterations: 15787\ncpu: 43969.25951732441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26051.744954060327,
            "unit": "ns/iter",
            "extra": "iterations: 27101\ncpu: 26051.581122467476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44276.14564853491,
            "unit": "ns/iter",
            "extra": "iterations: 16121\ncpu: 44274.53631908705 ns\nthreads: 1"
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
        "date": 1702493614533,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 578.3932106664874,
            "unit": "ns/iter",
            "extra": "iterations: 1208042\ncpu: 578.4019926459512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5406.4487200002995,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5406.374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10300.740566270872,
            "unit": "ns/iter",
            "extra": "iterations: 80668\ncpu: 10300.497099221502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15613.056008241514,
            "unit": "ns/iter",
            "extra": "iterations: 54367\ncpu: 15613.01340886935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20442.056577984335,
            "unit": "ns/iter",
            "extra": "iterations: 40970\ncpu: 20442.08689284842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25696.548815889222,
            "unit": "ns/iter",
            "extra": "iterations: 32725\ncpu: 25695.83193277311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30222.512444046046,
            "unit": "ns/iter",
            "extra": "iterations: 27925\ncpu: 30222.345568487013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35284.30025381865,
            "unit": "ns/iter",
            "extra": "iterations: 24033\ncpu: 35284.375650147726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40017.67637199464,
            "unit": "ns/iter",
            "extra": "iterations: 20882\ncpu: 40017.709031701976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 595.9148322441861,
            "unit": "ns/iter",
            "extra": "iterations: 1184251\ncpu: 595.9186861569042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 453.36814133119157,
            "unit": "ns/iter",
            "extra": "iterations: 1542136\ncpu: 453.36688852345065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 461.6948518108855,
            "unit": "ns/iter",
            "extra": "iterations: 1519039\ncpu: 461.68650047826304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 451.0247577930208,
            "unit": "ns/iter",
            "extra": "iterations: 1550017\ncpu: 451.0176340001433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 913.6982419185462,
            "unit": "ns/iter",
            "extra": "iterations: 766233\ncpu: 913.6873509754852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2083.416200345106,
            "unit": "ns/iter",
            "extra": "iterations: 379745\ncpu: 2083.409656480005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10354.323048426448,
            "unit": "ns/iter",
            "extra": "iterations: 78821\ncpu: 10354.108676621729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8302.372552808092,
            "unit": "ns/iter",
            "extra": "iterations: 98327\ncpu: 8302.326929531042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8139.192305756683,
            "unit": "ns/iter",
            "extra": "iterations: 99347\ncpu: 8139.237219040316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7923.189868628319,
            "unit": "ns/iter",
            "extra": "iterations: 105731\ncpu: 7923.306315082617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30722.12244139863,
            "unit": "ns/iter",
            "extra": "iterations: 26919\ncpu: 30722.27794494598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 263128.02938586264,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 263122.71525124926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198358.76569037416,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 198355.2533705255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200594.13389120868,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 200587.21524872162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 202788.2043357911,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 202783.02583025856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103594.21143396726,
            "unit": "ns/iter",
            "extra": "iterations: 8466\ncpu: 103593.82234821636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 194473.37974968014,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 194470.96557890018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5182.322110000541,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5182.40200000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28958.892229369383,
            "unit": "ns/iter",
            "extra": "iterations: 29071\ncpu: 28959.072615321158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22771.238211580465,
            "unit": "ns/iter",
            "extra": "iterations: 36837\ncpu: 22771.607351304374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22718.494745894975,
            "unit": "ns/iter",
            "extra": "iterations: 37209\ncpu: 22718.396086968227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22257.563522745404,
            "unit": "ns/iter",
            "extra": "iterations: 37766\ncpu: 22257.390245194038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47979.66002787686,
            "unit": "ns/iter",
            "extra": "iterations: 17222\ncpu: 47978.062942747696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 276970.84868630633,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 276965.14719847974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 217271.9987552815,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 217269.8033358227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216774.202981356,
            "unit": "ns/iter",
            "extra": "iterations: 4025\ncpu: 216766.78260869527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 218913.85324317522,
            "unit": "ns/iter",
            "extra": "iterations: 3993\ncpu: 218907.21262208873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117822.34729164588,
            "unit": "ns/iter",
            "extra": "iterations: 7403\ncpu: 117820.5052005947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 210473.0269156077,
            "unit": "ns/iter",
            "extra": "iterations: 4124\ncpu: 210468.74393792445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 845189.4481842556,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 845176.0850310025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 457636.9146090343,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 457626.6975308659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1918.0274461216113,
            "unit": "ns/iter",
            "extra": "iterations: 413246\ncpu: 1918.04034400817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9944.801781430084,
            "unit": "ns/iter",
            "extra": "iterations: 79599\ncpu: 9944.683978441924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7796.185432283642,
            "unit": "ns/iter",
            "extra": "iterations: 105521\ncpu: 7796.00458676476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7812.695741380971,
            "unit": "ns/iter",
            "extra": "iterations: 105762\ncpu: 7812.4761256405745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7420.872393541196,
            "unit": "ns/iter",
            "extra": "iterations: 111358\ncpu: 7420.811257386035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29768.769219890142,
            "unit": "ns/iter",
            "extra": "iterations: 28278\ncpu: 29768.045830681174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 263372.2119857039,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 263362.40310077637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 199794.3110656582,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 199790.25221540575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199923.3093394168,
            "unit": "ns/iter",
            "extra": "iterations: 4390\ncpu: 199920.29612756192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198252.49582864746,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 198249.19954904093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100588.8109069961,
            "unit": "ns/iter",
            "extra": "iterations: 8710\ncpu: 100588.1515499423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 190475.22008733673,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 190473.66812227154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 212.95678834815914,
            "unit": "ns/iter",
            "extra": "iterations: 3278861\ncpu: 212.95782285372704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1535.487120314748,
            "unit": "ns/iter",
            "extra": "iterations: 456727\ncpu: 1535.4745832849894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1182.0917450248733,
            "unit": "ns/iter",
            "extra": "iterations: 592152\ncpu: 1182.08095218796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1233.2625384801547,
            "unit": "ns/iter",
            "extra": "iterations: 567174\ncpu: 1233.2301903824912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 918.7567981329692,
            "unit": "ns/iter",
            "extra": "iterations: 772087\ncpu: 918.049649845168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9517.634828796101,
            "unit": "ns/iter",
            "extra": "iterations: 73801\ncpu: 9517.556672673829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12472.044638405794,
            "unit": "ns/iter",
            "extra": "iterations: 56140\ncpu: 12471.845386533665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2872.653194519472,
            "unit": "ns/iter",
            "extra": "iterations: 244356\ncpu: 2872.6976215030363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2835.9786056282082,
            "unit": "ns/iter",
            "extra": "iterations: 247495\ncpu: 2835.9086042142035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2844.193800038321,
            "unit": "ns/iter",
            "extra": "iterations: 248808\ncpu: 2844.1412655541644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5265.354548756009,
            "unit": "ns/iter",
            "extra": "iterations: 132168\ncpu: 5264.984716421501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5333.146235320951,
            "unit": "ns/iter",
            "extra": "iterations: 130290\ncpu: 5332.865914498455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2041.2798720719582,
            "unit": "ns/iter",
            "extra": "iterations: 342067\ncpu: 2041.2369506558541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10008.54063139243,
            "unit": "ns/iter",
            "extra": "iterations: 69909\ncpu: 10008.276473701664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8091.883263010153,
            "unit": "ns/iter",
            "extra": "iterations: 86742\ncpu: 8091.923174471509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8129.258790435523,
            "unit": "ns/iter",
            "extra": "iterations: 86742\ncpu: 8128.825713034027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8213.886967175547,
            "unit": "ns/iter",
            "extra": "iterations: 84878\ncpu: 8213.611300926048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18815.613093474003,
            "unit": "ns/iter",
            "extra": "iterations: 37133\ncpu: 18814.833167263634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55925.02385023187,
            "unit": "ns/iter",
            "extra": "iterations: 12285\ncpu: 55922.72690272706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44694.14701952478,
            "unit": "ns/iter",
            "extra": "iterations: 15719\ncpu: 44691.73611552877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44525.81272174005,
            "unit": "ns/iter",
            "extra": "iterations: 15784\ncpu: 44524.26507856047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44195.20305691123,
            "unit": "ns/iter",
            "extra": "iterations: 15833\ncpu: 44192.76826880599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25996.54622190822,
            "unit": "ns/iter",
            "extra": "iterations: 27011\ncpu: 25995.67213357491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43471.03109585251,
            "unit": "ns/iter",
            "extra": "iterations: 16015\ncpu: 43470.377770839674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1963.6609238438775,
            "unit": "ns/iter",
            "extra": "iterations: 357896\ncpu: 1963.6707311621226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10277.655812120807,
            "unit": "ns/iter",
            "extra": "iterations: 68512\ncpu: 10277.036139654268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8190.538692773673,
            "unit": "ns/iter",
            "extra": "iterations: 85494\ncpu: 8190.110417105382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8268.488914639162,
            "unit": "ns/iter",
            "extra": "iterations: 84571\ncpu: 8268.239703917363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8090.429418578018,
            "unit": "ns/iter",
            "extra": "iterations: 86340\ncpu: 8090.209636321578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18635.49601110208,
            "unit": "ns/iter",
            "extra": "iterations: 37479\ncpu: 18635.545238666862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55943.13170070428,
            "unit": "ns/iter",
            "extra": "iterations: 12536\ncpu: 55939.510210593435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44730.69866056946,
            "unit": "ns/iter",
            "extra": "iterations: 15753\ncpu: 44730.93379038832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44296.69205658001,
            "unit": "ns/iter",
            "extra": "iterations: 15623\ncpu: 44296.41554118954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44215.841130352885,
            "unit": "ns/iter",
            "extra": "iterations: 15818\ncpu: 44214.55304083966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26325.845172907815,
            "unit": "ns/iter",
            "extra": "iterations: 26662\ncpu: 26325.20066011592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44123.78727147053,
            "unit": "ns/iter",
            "extra": "iterations: 15917\ncpu: 44121.14091851479 ns\nthreads: 1"
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
        "date": 1702504658336,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 585.8604894726286,
            "unit": "ns/iter",
            "extra": "iterations: 1181108\ncpu: 585.8263596555099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5339.9041000000125,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5339.867999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10264.89842422989,
            "unit": "ns/iter",
            "extra": "iterations: 80659\ncpu: 10264.595395430142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15410.611669873559,
            "unit": "ns/iter",
            "extra": "iterations: 55082\ncpu: 15410.043208307618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20218.88149884153,
            "unit": "ns/iter",
            "extra": "iterations: 41392\ncpu: 20218.165345960555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25343.85830628599,
            "unit": "ns/iter",
            "extra": "iterations: 33276\ncpu: 25342.273710782545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29984.710414202225,
            "unit": "ns/iter",
            "extra": "iterations: 27933\ncpu: 29984.677621451334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34961.28244941958,
            "unit": "ns/iter",
            "extra": "iterations: 24022\ncpu: 34960.95246024476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39013.97438664254,
            "unit": "ns/iter",
            "extra": "iterations: 21317\ncpu: 39012.04203218085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 568.4465942212671,
            "unit": "ns/iter",
            "extra": "iterations: 1228603\ncpu: 568.4368343557686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 438.3865875413334,
            "unit": "ns/iter",
            "extra": "iterations: 1570167\ncpu: 438.36700172656884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 451.0393502466053,
            "unit": "ns/iter",
            "extra": "iterations: 1551604\ncpu: 451.0168187243659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 440.807270444994,
            "unit": "ns/iter",
            "extra": "iterations: 1590109\ncpu: 440.78242434952625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 910.9253773767401,
            "unit": "ns/iter",
            "extra": "iterations: 784561\ncpu: 910.8879997858674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2054.226813682167,
            "unit": "ns/iter",
            "extra": "iterations: 390435\ncpu: 2054.075582363261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10328.235357443424,
            "unit": "ns/iter",
            "extra": "iterations: 79887\ncpu: 10327.711642695303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8297.34852773809,
            "unit": "ns/iter",
            "extra": "iterations: 99269\ncpu: 8297.022232519728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8485.17000707862,
            "unit": "ns/iter",
            "extra": "iterations: 94649\ncpu: 8484.744688269291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7916.707321796891,
            "unit": "ns/iter",
            "extra": "iterations: 103267\ncpu: 7916.7546263569075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30395.027189561963,
            "unit": "ns/iter",
            "extra": "iterations: 27437\ncpu: 30393.98986769696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 254497.72891743068,
            "unit": "ns/iter",
            "extra": "iterations: 3427\ncpu: 254483.33819667375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 196054.29885056464,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 196043.9770114942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200367.97465437945,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 200358.80184331778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 194728.8071759372,
            "unit": "ns/iter",
            "extra": "iterations: 4320\ncpu: 194720.2777777774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102556.50909090303,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 102549.5571095572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192507.11538460763,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 192493.68608270376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5111.64534000045,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5111.625999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28857.208935204595,
            "unit": "ns/iter",
            "extra": "iterations: 29076\ncpu: 28856.806300729102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22411.27581394361,
            "unit": "ns/iter",
            "extra": "iterations: 37257\ncpu: 22411.192527578718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22373.742747581902,
            "unit": "ns/iter",
            "extra": "iterations: 35988\ncpu: 22373.496721129308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21988.796754552543,
            "unit": "ns/iter",
            "extra": "iterations: 38269\ncpu: 21988.606966474148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47919.88735406485,
            "unit": "ns/iter",
            "extra": "iterations: 17302\ncpu: 47917.45462952264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 276631.67469877773,
            "unit": "ns/iter",
            "extra": "iterations: 3154\ncpu: 276625.9670259979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 216893.4294585088,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 216887.72975658247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216716.13391520412,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 216707.7556109723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214196.6684531303,
            "unit": "ns/iter",
            "extra": "iterations: 4105\ncpu: 214185.09135201084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116470.92715232952,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 116464.9536423843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 206582.92540848293,
            "unit": "ns/iter",
            "extra": "iterations: 4223\ncpu: 206575.58607624975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 843419.0053428299,
            "unit": "ns/iter",
            "extra": "iterations: 1123\ncpu: 843376.6696349102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 467832.80274266505,
            "unit": "ns/iter",
            "extra": "iterations: 1896\ncpu: 467831.2763713095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1960.3021338159185,
            "unit": "ns/iter",
            "extra": "iterations: 407111\ncpu: 1960.28282212959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10441.677517956803,
            "unit": "ns/iter",
            "extra": "iterations: 79499\ncpu: 10441.330079623696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8007.268192088113,
            "unit": "ns/iter",
            "extra": "iterations: 104015\ncpu: 8006.876892755846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8082.736795443505,
            "unit": "ns/iter",
            "extra": "iterations: 103771\ncpu: 8082.403561688775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7507.70588767111,
            "unit": "ns/iter",
            "extra": "iterations: 110604\ncpu: 7507.497920509249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29895.08753306387,
            "unit": "ns/iter",
            "extra": "iterations: 27978\ncpu: 29893.459146472116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 261211.5660211487,
            "unit": "ns/iter",
            "extra": "iterations: 3408\ncpu: 261201.96596244138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 197275.87828429637,
            "unit": "ns/iter",
            "extra": "iterations: 4453\ncpu: 197270.940938693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 197341.72067037638,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 197334.88268156492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 196191.74838419948,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 196190.6173389789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100135.22824006226,
            "unit": "ns/iter",
            "extra": "iterations: 8881\ncpu: 100134.17407949555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189952.22430106954,
            "unit": "ns/iter",
            "extra": "iterations: 4650\ncpu: 189951.52688172043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 209.91519876598412,
            "unit": "ns/iter",
            "extra": "iterations: 3280365\ncpu: 209.91453694939446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1474.8444016756182,
            "unit": "ns/iter",
            "extra": "iterations: 476464\ncpu: 1474.8398619832817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1243.6536556416202,
            "unit": "ns/iter",
            "extra": "iterations: 564470\ncpu: 1243.5968253405913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1165.953909080979,
            "unit": "ns/iter",
            "extra": "iterations: 600205\ncpu: 1165.8868220024935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 913.8722248274905,
            "unit": "ns/iter",
            "extra": "iterations: 767700\ncpu: 913.8289696496016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9474.156904338204,
            "unit": "ns/iter",
            "extra": "iterations: 73070\ncpu: 9473.433693718362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12402.8257275535,
            "unit": "ns/iter",
            "extra": "iterations: 55769\ncpu: 12402.919184493176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2844.396814345817,
            "unit": "ns/iter",
            "extra": "iterations: 247045\ncpu: 2844.37410188427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2833.1210578594455,
            "unit": "ns/iter",
            "extra": "iterations: 249674\ncpu: 2833.142017190397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2780.14465057036,
            "unit": "ns/iter",
            "extra": "iterations: 250279\ncpu: 2780.0650474070785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5304.553580358745,
            "unit": "ns/iter",
            "extra": "iterations: 127976\ncpu: 5304.371913483749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5301.411883035498,
            "unit": "ns/iter",
            "extra": "iterations: 130741\ncpu: 5301.050932760196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1982.325482731369,
            "unit": "ns/iter",
            "extra": "iterations: 353561\ncpu: 1982.2421024943299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10200.359871359884,
            "unit": "ns/iter",
            "extra": "iterations: 68719\ncpu: 10199.80209257991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8150.5906507368545,
            "unit": "ns/iter",
            "extra": "iterations: 86210\ncpu: 8150.287669643995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8098.440581088953,
            "unit": "ns/iter",
            "extra": "iterations: 86252\ncpu: 8098.172795993171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8130.735710137809,
            "unit": "ns/iter",
            "extra": "iterations: 86110\ncpu: 8130.261293694079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18707.183467365925,
            "unit": "ns/iter",
            "extra": "iterations: 37429\ncpu: 18706.09954847847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54992.514930691505,
            "unit": "ns/iter",
            "extra": "iterations: 12625\ncpu: 54988.7920792087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44608.67123722445,
            "unit": "ns/iter",
            "extra": "iterations: 15753\ncpu: 44606.6463530761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43886.45558431589,
            "unit": "ns/iter",
            "extra": "iterations: 15839\ncpu: 43883.856304059016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44390.4452236576,
            "unit": "ns/iter",
            "extra": "iterations: 15828\ncpu: 44390.73793277729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26029.110424191782,
            "unit": "ns/iter",
            "extra": "iterations: 26851\ncpu: 26028.717738631574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43919.784723958575,
            "unit": "ns/iter",
            "extra": "iterations: 16012\ncpu: 43919.597801648815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1977.8231549394143,
            "unit": "ns/iter",
            "extra": "iterations: 354067\ncpu: 1977.7912090084533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10216.042553810554,
            "unit": "ns/iter",
            "extra": "iterations: 68713\ncpu: 10215.704451850586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8243.427329339316,
            "unit": "ns/iter",
            "extra": "iterations: 85110\ncpu: 8242.776407002755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8334.014038632191,
            "unit": "ns/iter",
            "extra": "iterations: 84125\ncpu: 8333.485884101015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8235.95350176272,
            "unit": "ns/iter",
            "extra": "iterations: 85100\ncpu: 8235.666274970534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18584.05763604642,
            "unit": "ns/iter",
            "extra": "iterations: 37598\ncpu: 18583.815628491036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55275.65609015263,
            "unit": "ns/iter",
            "extra": "iterations: 12512\ncpu: 55273.777173913215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43513.24413443106,
            "unit": "ns/iter",
            "extra": "iterations: 15770\ncpu: 43512.663284717906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44089.09439768238,
            "unit": "ns/iter",
            "extra": "iterations: 15922\ncpu: 44087.5580957159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43621.95160075069,
            "unit": "ns/iter",
            "extra": "iterations: 15930\ncpu: 43620.000000000735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26051.556207114878,
            "unit": "ns/iter",
            "extra": "iterations: 25068\ncpu: 26049.944151906733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44190.77224595895,
            "unit": "ns/iter",
            "extra": "iterations: 16149\ncpu: 44188.43272029152 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}