window.BENCHMARK_DATA = {
  "lastUpdate": 1702490998199,
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
      }
    ]
  }
}