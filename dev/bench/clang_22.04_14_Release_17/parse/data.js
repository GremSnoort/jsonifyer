window.BENCHMARK_DATA = {
  "lastUpdate": 1705960645804,
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
        "date": 1705576311356,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 578.5119886576329,
            "unit": "ns/iter",
            "extra": "iterations: 1220195\ncpu: 578.505730641414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5336.818609999909,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5336.415999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10317.596087357564,
            "unit": "ns/iter",
            "extra": "iterations: 80406\ncpu: 10316.906698505087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16062.342504076263,
            "unit": "ns/iter",
            "extra": "iterations: 53976\ncpu: 16061.677412183195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20448.674901892693,
            "unit": "ns/iter",
            "extra": "iterations: 40517\ncpu: 20447.99960510403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25340.9853626092,
            "unit": "ns/iter",
            "extra": "iterations: 33066\ncpu: 25339.838504808555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30332.991222123226,
            "unit": "ns/iter",
            "extra": "iterations: 28025\ncpu: 30330.879571810878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35428.0402983158,
            "unit": "ns/iter",
            "extra": "iterations: 23599\ncpu: 35426.157888046124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39325.1896983744,
            "unit": "ns/iter",
            "extra": "iterations: 21550\ncpu: 39323.61948955917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 574.0894217748012,
            "unit": "ns/iter",
            "extra": "iterations: 1234744\ncpu: 574.0840206552937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 442.393528513673,
            "unit": "ns/iter",
            "extra": "iterations: 1572529\ncpu: 442.3879623205678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 447.5897464854939,
            "unit": "ns/iter",
            "extra": "iterations: 1567287\ncpu: 447.57175935230714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 440.03917659247253,
            "unit": "ns/iter",
            "extra": "iterations: 1584926\ncpu: 440.0204173570245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 940.8936357902328,
            "unit": "ns/iter",
            "extra": "iterations: 759513\ncpu: 940.8293208937831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2045.2880159373303,
            "unit": "ns/iter",
            "extra": "iterations: 390527\ncpu: 2045.2201768379618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10604.12742547242,
            "unit": "ns/iter",
            "extra": "iterations: 77253\ncpu: 10603.630926954298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8284.217067576154,
            "unit": "ns/iter",
            "extra": "iterations: 97237\ncpu: 8284.017400783665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8466.98766208963,
            "unit": "ns/iter",
            "extra": "iterations: 96937\ncpu: 8466.915625612528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7869.915203671772,
            "unit": "ns/iter",
            "extra": "iterations: 104580\ncpu: 7869.339261809126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30520.089728892774,
            "unit": "ns/iter",
            "extra": "iterations: 27037\ncpu: 30519.80989015061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262517.7373243705,
            "unit": "ns/iter",
            "extra": "iterations: 3274\ncpu: 262518.0207697002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 200335.86239176628,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 200323.8708167568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 205209.22858483292,
            "unit": "ns/iter",
            "extra": "iterations: 4261\ncpu: 205199.3194085896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 198918.89234999238,
            "unit": "ns/iter",
            "extra": "iterations: 4366\ncpu: 198909.87173614337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103137.67454161363,
            "unit": "ns/iter",
            "extra": "iterations: 8508\ncpu: 103133.14527503538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 194680.69187738516,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 194666.59207876495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5107.704050000166,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5107.552999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28246.94719426743,
            "unit": "ns/iter",
            "extra": "iterations: 29315\ncpu: 28245.955995224307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21799.118066622566,
            "unit": "ns/iter",
            "extra": "iterations: 38275\ncpu: 21798.471587197888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22121.77419611819,
            "unit": "ns/iter",
            "extra": "iterations: 37630\ncpu: 22121.21179909653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21567.83096823605,
            "unit": "ns/iter",
            "extra": "iterations: 39040\ncpu: 21566.62909836066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48912.316794794904,
            "unit": "ns/iter",
            "extra": "iterations: 16910\ncpu: 48911.567120047235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 284117.38685208093,
            "unit": "ns/iter",
            "extra": "iterations: 3164\ncpu: 284110.8723135266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 217237.5413618265,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 217232.35790658375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215430.7441227548,
            "unit": "ns/iter",
            "extra": "iterations: 4041\ncpu: 215426.25587725925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214064.817067169,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 214053.6047081896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116969.21600108092,
            "unit": "ns/iter",
            "extra": "iterations: 7412\ncpu: 116963.28926065899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 205627.50918634134,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 205617.13194941534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 838236.8747795076,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 838219.5767195778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 459450.1799792908,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 459442.6348547694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1908.8065352910003,
            "unit": "ns/iter",
            "extra": "iterations: 415957\ncpu: 1908.7763879439533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10367.720373672217,
            "unit": "ns/iter",
            "extra": "iterations: 79642\ncpu: 10367.281082845733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8203.708362285943,
            "unit": "ns/iter",
            "extra": "iterations: 100738\ncpu: 8203.496198058343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7887.797514165395,
            "unit": "ns/iter",
            "extra": "iterations: 103064\ncpu: 7887.605759528077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7664.918023330676,
            "unit": "ns/iter",
            "extra": "iterations: 107494\ncpu: 7664.750590730608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29959.796862243882,
            "unit": "ns/iter",
            "extra": "iterations: 28173\ncpu: 29958.112377098754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 266803.5464009494,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 266783.75966686435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 202987.76903669044,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 202978.5091743106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 201697.76508081536,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 201691.6913271119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 199434.6245764601,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 199423.6955048558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100802.59590210357,
            "unit": "ns/iter",
            "extra": "iterations: 8785\ncpu: 100799.3397837219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191666.54662591242,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 191660.0349421267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 209.42005445252494,
            "unit": "ns/iter",
            "extra": "iterations: 3290940\ncpu: 209.41104973047177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1527.2848967316197,
            "unit": "ns/iter",
            "extra": "iterations: 456239\ncpu: 1527.1465175050798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1129.8186289287112,
            "unit": "ns/iter",
            "extra": "iterations: 620347\ncpu: 1129.7249765050908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1168.4059383825913,
            "unit": "ns/iter",
            "extra": "iterations: 599894\ncpu: 1168.3587433780021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 964.4866403064628,
            "unit": "ns/iter",
            "extra": "iterations: 748857\ncpu: 964.4151019487024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9510.095599248421,
            "unit": "ns/iter",
            "extra": "iterations: 73442\ncpu: 9509.848588001474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12523.914465046826,
            "unit": "ns/iter",
            "extra": "iterations: 55603\ncpu: 12523.522112116225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2834.3722046953753,
            "unit": "ns/iter",
            "extra": "iterations: 244070\ncpu: 2834.3290859179883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2834.893171358418,
            "unit": "ns/iter",
            "extra": "iterations: 245964\ncpu: 2834.847376038773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2824.5124445402107,
            "unit": "ns/iter",
            "extra": "iterations: 245449\ncpu: 2824.4144404743774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5323.9783816661875,
            "unit": "ns/iter",
            "extra": "iterations: 131555\ncpu: 5323.762684808634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5359.560769497908,
            "unit": "ns/iter",
            "extra": "iterations: 129695\ncpu: 5359.485716488687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1992.591745515114,
            "unit": "ns/iter",
            "extra": "iterations: 350355\ncpu: 1992.5552653736784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10274.058410357266,
            "unit": "ns/iter",
            "extra": "iterations: 68053\ncpu: 10273.688154820524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8212.19844083102,
            "unit": "ns/iter",
            "extra": "iterations: 84917\ncpu: 8212.07178774568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8197.296561704803,
            "unit": "ns/iter",
            "extra": "iterations: 85682\ncpu: 8196.903667047814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8211.426130676367,
            "unit": "ns/iter",
            "extra": "iterations: 84927\ncpu: 8211.183722491081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18784.62151586737,
            "unit": "ns/iter",
            "extra": "iterations: 37312\ncpu: 18784.096269296526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56518.05788406968,
            "unit": "ns/iter",
            "extra": "iterations: 12335\ncpu: 56516.04377786821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45518.676551765144,
            "unit": "ns/iter",
            "extra": "iterations: 15579\ncpu: 45516.46447140406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44821.43672093047,
            "unit": "ns/iter",
            "extra": "iterations: 15724\ncpu: 44820.82167387402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44570.61008158663,
            "unit": "ns/iter",
            "extra": "iterations: 15811\ncpu: 44569.90702675343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26154.679119737866,
            "unit": "ns/iter",
            "extra": "iterations: 26901\ncpu: 26154.265640682657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43711.38557759033,
            "unit": "ns/iter",
            "extra": "iterations: 15989\ncpu: 43710.65107261249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1970.4202068016273,
            "unit": "ns/iter",
            "extra": "iterations: 354930\ncpu: 1970.3333051587463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10109.787416627449,
            "unit": "ns/iter",
            "extra": "iterations: 69568\ncpu: 10109.179507819827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8207.789577233994,
            "unit": "ns/iter",
            "extra": "iterations: 85390\ncpu: 8207.350977866212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8321.152840241655,
            "unit": "ns/iter",
            "extra": "iterations: 84271\ncpu: 8320.690391712395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8286.6368467768,
            "unit": "ns/iter",
            "extra": "iterations: 84485\ncpu: 8286.541989702395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18500.054647692272,
            "unit": "ns/iter",
            "extra": "iterations: 37879\ncpu: 18500.036959793048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55366.42074145332,
            "unit": "ns/iter",
            "extra": "iterations: 12516\ncpu: 55364.09395973159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43956.33850015626,
            "unit": "ns/iter",
            "extra": "iterations: 15935\ncpu: 43956.266080953945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44083.07934009143,
            "unit": "ns/iter",
            "extra": "iterations: 15881\ncpu: 44082.49480511271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43912.494758648296,
            "unit": "ns/iter",
            "extra": "iterations: 15931\ncpu: 43910.501537881624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25816.2885435583,
            "unit": "ns/iter",
            "extra": "iterations: 26963\ncpu: 25815.18747913834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43587.96953338301,
            "unit": "ns/iter",
            "extra": "iterations: 16116\ncpu: 43584.38198063962 ns\nthreads: 1"
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
        "date": 1705774125971,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 554.3047327549187,
            "unit": "ns/iter",
            "extra": "iterations: 1265056\ncpu: 554.2945924923482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5323.806689999628,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5323.665999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10270.346112045381,
            "unit": "ns/iter",
            "extra": "iterations: 80968\ncpu: 10270.332724039126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15526.991516884977,
            "unit": "ns/iter",
            "extra": "iterations: 54579\ncpu: 15526.488209750998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20729.611324617734,
            "unit": "ns/iter",
            "extra": "iterations: 40072\ncpu: 20728.42134158516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25469.69197576039,
            "unit": "ns/iter",
            "extra": "iterations: 32676\ncpu: 25468.202962418905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30625.41914000268,
            "unit": "ns/iter",
            "extra": "iterations: 27628\ncpu: 30625.249746633857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35774.11858632956,
            "unit": "ns/iter",
            "extra": "iterations: 23485\ncpu: 35773.43836491379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40021.874453318334,
            "unit": "ns/iter",
            "extra": "iterations: 21036\ncpu: 40021.05913671797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 567.9486965087095,
            "unit": "ns/iter",
            "extra": "iterations: 1249759\ncpu: 567.937098272548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 422.968596554648,
            "unit": "ns/iter",
            "extra": "iterations: 1642686\ncpu: 422.9630617172117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 416.07049277595047,
            "unit": "ns/iter",
            "extra": "iterations: 1685350\ncpu: 416.0662176995878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 420.2309053407865,
            "unit": "ns/iter",
            "extra": "iterations: 1668333\ncpu: 420.2230609836285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 871.5693979839606,
            "unit": "ns/iter",
            "extra": "iterations: 795477\ncpu: 871.5521630417962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2030.4292519113117,
            "unit": "ns/iter",
            "extra": "iterations: 394258\ncpu: 2030.4001440680956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12304.530530949707,
            "unit": "ns/iter",
            "extra": "iterations: 76316\ncpu: 12304.36081555637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8527.824852426771,
            "unit": "ns/iter",
            "extra": "iterations: 96393\ncpu: 8527.699106781623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8447.872184830569,
            "unit": "ns/iter",
            "extra": "iterations: 96131\ncpu: 8447.714056859915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7970.412596513283,
            "unit": "ns/iter",
            "extra": "iterations: 102965\ncpu: 7970.358859806744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30750.25389944469,
            "unit": "ns/iter",
            "extra": "iterations: 26991\ncpu: 30749.016338779486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 265189.3407967536,
            "unit": "ns/iter",
            "extra": "iterations: 3439\ncpu: 265180.89560918836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 202583.82684186444,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 202580.6428906611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200368.13663735232,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 200362.5521074571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 196585.46734599723,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 196578.16118573394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104286.84914554594,
            "unit": "ns/iter",
            "extra": "iterations: 8485\ncpu: 104284.2427813789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 196439.88223551444,
            "unit": "ns/iter",
            "extra": "iterations: 4509\ncpu: 196434.930139721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5375.467549999939,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5375.419999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28845.073582544293,
            "unit": "ns/iter",
            "extra": "iterations: 28784\ncpu: 28844.243329627538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22393.817696559687,
            "unit": "ns/iter",
            "extra": "iterations: 36719\ncpu: 22392.930090688737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22465.046350502154,
            "unit": "ns/iter",
            "extra": "iterations: 37238\ncpu: 22464.791342177316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22034.57344180375,
            "unit": "ns/iter",
            "extra": "iterations: 38105\ncpu: 22034.27634168746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49441.512272185166,
            "unit": "ns/iter",
            "extra": "iterations: 17723\ncpu: 49440.15121593383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 276718.9996827081,
            "unit": "ns/iter",
            "extra": "iterations: 3152\ncpu: 276709.8984771592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 216588.36395318923,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 216583.04705003704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 217257.52994012658,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 217245.65868263438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214039.4355923379,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 214035.3595447499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117296.47253774482,
            "unit": "ns/iter",
            "extra": "iterations: 7483\ncpu: 117292.14218896245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 207634.22005701007,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 207632.17680608292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 864761.2351884658,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 864731.2387791739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 471695.9801288732,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 471679.1084855007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1903.1333535308604,
            "unit": "ns/iter",
            "extra": "iterations: 419194\ncpu: 1903.0887846677217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10130.797211895315,
            "unit": "ns/iter",
            "extra": "iterations: 80700\ncpu: 10130.773234200671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7864.7596198938245,
            "unit": "ns/iter",
            "extra": "iterations: 104497\ncpu: 7864.583672258548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7971.527863926482,
            "unit": "ns/iter",
            "extra": "iterations: 103826\ncpu: 7971.409858802205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7544.223868305968,
            "unit": "ns/iter",
            "extra": "iterations: 109283\ncpu: 7543.84579486293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 30021.126455609352,
            "unit": "ns/iter",
            "extra": "iterations: 28081\ncpu: 30020.330472561513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 269539.59231463127,
            "unit": "ns/iter",
            "extra": "iterations: 3331\ncpu: 269525.5779045344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 203156.81809832473,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 203154.1111621492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 203773.78039760387,
            "unit": "ns/iter",
            "extra": "iterations: 4326\ncpu: 203767.5681923253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 201085.13675800728,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 201080.0228310499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101898.58349818626,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 101893.96020016322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 193187.82770791123,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 193178.57930730187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 188.56386428518434,
            "unit": "ns/iter",
            "extra": "iterations: 3721775\ncpu: 188.5572341154432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1502.6679388328537,
            "unit": "ns/iter",
            "extra": "iterations: 465086\ncpu: 1502.6752041557934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1224.6035490063794,
            "unit": "ns/iter",
            "extra": "iterations: 573569\ncpu: 1224.5618225531766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1218.5484190290176,
            "unit": "ns/iter",
            "extra": "iterations: 575817\ncpu: 1218.5074424686916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 892.8851757800686,
            "unit": "ns/iter",
            "extra": "iterations: 776169\ncpu: 892.8684345806162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9498.961764705551,
            "unit": "ns/iter",
            "extra": "iterations: 73780\ncpu: 9498.778801843306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12642.462383740007,
            "unit": "ns/iter",
            "extra": "iterations: 54511\ncpu: 12642.193318779691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2853.3456508807662,
            "unit": "ns/iter",
            "extra": "iterations: 248832\ncpu: 2853.2624421296346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2839.521191322231,
            "unit": "ns/iter",
            "extra": "iterations: 246516\ncpu: 2839.440847652865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2818.8797756025906,
            "unit": "ns/iter",
            "extra": "iterations: 247953\ncpu: 2818.8317947353053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5349.8069303512,
            "unit": "ns/iter",
            "extra": "iterations: 130383\ncpu: 5349.833950745101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5427.88795972383,
            "unit": "ns/iter",
            "extra": "iterations: 128909\ncpu: 5427.734293183583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1998.0090021966344,
            "unit": "ns/iter",
            "extra": "iterations: 349137\ncpu: 1997.9492290991607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10265.37280484681,
            "unit": "ns/iter",
            "extra": "iterations: 68674\ncpu: 10265.095960625526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8226.869247943254,
            "unit": "ns/iter",
            "extra": "iterations: 85100\ncpu: 8226.706227967086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8243.615409037287,
            "unit": "ns/iter",
            "extra": "iterations: 85041\ncpu: 8243.661292788183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8163.733244927649,
            "unit": "ns/iter",
            "extra": "iterations: 85213\ncpu: 8163.408165420746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18706.627551155947,
            "unit": "ns/iter",
            "extra": "iterations: 37385\ncpu: 18706.26989434263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55881.71169501758,
            "unit": "ns/iter",
            "extra": "iterations: 12407\ncpu: 55880.28532280114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45315.411334199,
            "unit": "ns/iter",
            "extra": "iterations: 15440\ncpu: 45315.65414507714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45271.273692239454,
            "unit": "ns/iter",
            "extra": "iterations: 15733\ncpu: 45269.363757706764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45133.693082086174,
            "unit": "ns/iter",
            "extra": "iterations: 15496\ncpu: 45132.71166752708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26354.342152940942,
            "unit": "ns/iter",
            "extra": "iterations: 26494\ncpu: 26353.99335698657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44670.94392759359,
            "unit": "ns/iter",
            "extra": "iterations: 15801\ncpu: 44668.88171634746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1944.5313983154028,
            "unit": "ns/iter",
            "extra": "iterations: 359032\ncpu: 1944.4241738897886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10225.325459584996,
            "unit": "ns/iter",
            "extra": "iterations: 68540\ncpu: 10225.026262036712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8236.31567958972,
            "unit": "ns/iter",
            "extra": "iterations: 84779\ncpu: 8235.781266587246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8245.070252598247,
            "unit": "ns/iter",
            "extra": "iterations: 85036\ncpu: 8244.712827508287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8118.8207260150175,
            "unit": "ns/iter",
            "extra": "iterations: 86114\ncpu: 8118.427897902791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18453.05892118346,
            "unit": "ns/iter",
            "extra": "iterations: 37949\ncpu: 18451.671980816238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55828.31587364591,
            "unit": "ns/iter",
            "extra": "iterations: 12505\ncpu: 55827.381047580246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44096.35000630569,
            "unit": "ns/iter",
            "extra": "iterations: 15854\ncpu: 44094.260123627886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44251.96134742335,
            "unit": "ns/iter",
            "extra": "iterations: 15704\ncpu: 44250.394803871655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43896.42837387738,
            "unit": "ns/iter",
            "extra": "iterations: 15909\ncpu: 43894.022251556125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25880.11771246171,
            "unit": "ns/iter",
            "extra": "iterations: 26981\ncpu: 25879.25947889267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43918.31487587469,
            "unit": "ns/iter",
            "extra": "iterations: 16073\ncpu: 43916.910346544035 ns\nthreads: 1"
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
        "date": 1705775567823,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 580.9359852039462,
            "unit": "ns/iter",
            "extra": "iterations: 1206268\ncpu: 580.8924716563815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5339.275229999885,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5339.05 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10369.165893503729,
            "unit": "ns/iter",
            "extra": "iterations: 80190\ncpu: 10368.552188552185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15474.196947488343,
            "unit": "ns/iter",
            "extra": "iterations: 54578\ncpu: 15473.555278683722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19711.225265370704,
            "unit": "ns/iter",
            "extra": "iterations: 39944\ncpu: 19710.820148207484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25081.237264584837,
            "unit": "ns/iter",
            "extra": "iterations: 33823\ncpu: 25080.353605534703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29767.655541474218,
            "unit": "ns/iter",
            "extra": "iterations: 28404\ncpu: 29767.180678777655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34369.18637150788,
            "unit": "ns/iter",
            "extra": "iterations: 24258\ncpu: 34366.5718525847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38430.06160278914,
            "unit": "ns/iter",
            "extra": "iterations: 21525\ncpu: 38426.51335656212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 564.9960198606661,
            "unit": "ns/iter",
            "extra": "iterations: 1249705\ncpu: 564.9786149531291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 439.23596112312197,
            "unit": "ns/iter",
            "extra": "iterations: 1603832\ncpu: 439.2282982257485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 443.2764289789067,
            "unit": "ns/iter",
            "extra": "iterations: 1582931\ncpu: 443.2658782979165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 438.3115516359692,
            "unit": "ns/iter",
            "extra": "iterations: 1600717\ncpu: 438.297025645382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 920.3887231216196,
            "unit": "ns/iter",
            "extra": "iterations: 769486\ncpu: 920.3699612468594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2051.6967493265415,
            "unit": "ns/iter",
            "extra": "iterations: 389427\ncpu: 2051.6314996135357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 11083.282491786991,
            "unit": "ns/iter",
            "extra": "iterations: 75496\ncpu: 11083.10109144856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8565.818475121208,
            "unit": "ns/iter",
            "extra": "iterations: 97634\ncpu: 8565.645164594318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8075.346528115334,
            "unit": "ns/iter",
            "extra": "iterations: 98448\ncpu: 8075.056882821364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7637.080089511339,
            "unit": "ns/iter",
            "extra": "iterations: 106356\ncpu: 7636.948550152329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30312.96733457426,
            "unit": "ns/iter",
            "extra": "iterations: 27399\ncpu: 30310.493083689213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 257316.51775147425,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 257304.97041420036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198144.90456236887,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 198133.682495344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 198444.63341818572,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 198435.1307567686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 202604.77544911348,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 202593.98894518698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103816.06702191797,
            "unit": "ns/iter",
            "extra": "iterations: 8445\ncpu: 103810.6927175841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 196772.8312245677,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 196768.16538635353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5127.260399999614,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5127.144999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28562.747959706383,
            "unit": "ns/iter",
            "extra": "iterations: 29285\ncpu: 28561.673211541794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22109.95714856564,
            "unit": "ns/iter",
            "extra": "iterations: 37525\ncpu: 22108.98600932715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22193.494373011923,
            "unit": "ns/iter",
            "extra": "iterations: 37409\ncpu: 22192.688925124978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21714.490786962975,
            "unit": "ns/iter",
            "extra": "iterations: 38261\ncpu: 21713.84177099396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48771.56161640086,
            "unit": "ns/iter",
            "extra": "iterations: 16976\ncpu: 48770.517200754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 281727.52131782187,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 281719.50904392725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 217994.38712102192,
            "unit": "ns/iter",
            "extra": "iterations: 3991\ncpu: 217990.70408418964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 218313.31561712793,
            "unit": "ns/iter",
            "extra": "iterations: 3970\ncpu: 218304.6599496223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 217580.67023661357,
            "unit": "ns/iter",
            "extra": "iterations: 4015\ncpu: 217574.69489414626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117227.84372043028,
            "unit": "ns/iter",
            "extra": "iterations: 7397\ncpu: 117223.8610247399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 209694.08896882876,
            "unit": "ns/iter",
            "extra": "iterations: 4170\ncpu: 209686.37889688142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 848812.4382826237,
            "unit": "ns/iter",
            "extra": "iterations: 1118\ncpu: 848766.3685152023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 470893.9840170676,
            "unit": "ns/iter",
            "extra": "iterations: 1877\ncpu: 470887.16036227986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1948.2787578737973,
            "unit": "ns/iter",
            "extra": "iterations: 409427\ncpu: 1948.2352165343314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10134.205547282643,
            "unit": "ns/iter",
            "extra": "iterations: 80580\ncpu: 10134.029535865007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7825.902466771566,
            "unit": "ns/iter",
            "extra": "iterations: 105482\ncpu: 7825.575927646401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7766.791168899385,
            "unit": "ns/iter",
            "extra": "iterations: 106057\ncpu: 7766.669809630689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7443.961945413157,
            "unit": "ns/iter",
            "extra": "iterations: 111051\ncpu: 7443.728557149416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29890.170872335137,
            "unit": "ns/iter",
            "extra": "iterations: 28097\ncpu: 29889.301348898472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 273022.3593750076,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 273012.62254901946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 203648.65148012768,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 203644.47271045204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 203317.01750746445,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 203309.16839437935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 203629.30665447912,
            "unit": "ns/iter",
            "extra": "iterations: 4373\ncpu: 203615.5957008919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 103294.80258259109,
            "unit": "ns/iter",
            "extra": "iterations: 8596\ncpu: 103288.4364820844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 196092.22936596212,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 196081.6462736366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 215.25897421168906,
            "unit": "ns/iter",
            "extra": "iterations: 3255467\ncpu: 215.24417234147984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1521.0235156432686,
            "unit": "ns/iter",
            "extra": "iterations: 457993\ncpu: 1520.9800149784035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1217.2035115083072,
            "unit": "ns/iter",
            "extra": "iterations: 574454\ncpu: 1217.148805648495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1189.0588742903528,
            "unit": "ns/iter",
            "extra": "iterations: 591005\ncpu: 1189.0373177891947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 914.6448093596204,
            "unit": "ns/iter",
            "extra": "iterations: 762430\ncpu: 914.6266542502225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9444.333960577205,
            "unit": "ns/iter",
            "extra": "iterations: 73868\ncpu: 9444.016353495485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12421.871385381693,
            "unit": "ns/iter",
            "extra": "iterations: 56230\ncpu: 12421.65747821444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2855.0645604227516,
            "unit": "ns/iter",
            "extra": "iterations: 247613\ncpu: 2854.9672270842016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2865.6684994784073,
            "unit": "ns/iter",
            "extra": "iterations: 243342\ncpu: 2865.601910068951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2856.6806222484083,
            "unit": "ns/iter",
            "extra": "iterations: 245111\ncpu: 2856.5678406925895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5057.689985826922,
            "unit": "ns/iter",
            "extra": "iterations: 138284\ncpu: 5057.603193428014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5379.977636377768,
            "unit": "ns/iter",
            "extra": "iterations: 128870\ncpu: 5379.8075580042005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1992.1776408173998,
            "unit": "ns/iter",
            "extra": "iterations: 353224\ncpu: 1992.1395488415246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10162.704305265712,
            "unit": "ns/iter",
            "extra": "iterations: 69264\ncpu: 10162.4783437283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8155.28009953143,
            "unit": "ns/iter",
            "extra": "iterations: 86405\ncpu: 8154.974827845629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8191.588219469975,
            "unit": "ns/iter",
            "extra": "iterations: 85497\ncpu: 8191.437126448883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8180.660968994773,
            "unit": "ns/iter",
            "extra": "iterations: 85532\ncpu: 8180.4213627648915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18713.87031270779,
            "unit": "ns/iter",
            "extra": "iterations: 37575\ncpu: 18712.69461077852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55588.52274747312,
            "unit": "ns/iter",
            "extra": "iterations: 12375\ncpu: 55583.27272727279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44940.326078659375,
            "unit": "ns/iter",
            "extra": "iterations: 15714\ncpu: 44937.37431589638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44306.01885834121,
            "unit": "ns/iter",
            "extra": "iterations: 15749\ncpu: 44304.83205282924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44447.14914763551,
            "unit": "ns/iter",
            "extra": "iterations: 15897\ncpu: 44444.93929672289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26050.134878040368,
            "unit": "ns/iter",
            "extra": "iterations: 27017\ncpu: 26049.035792278817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44821.372261355806,
            "unit": "ns/iter",
            "extra": "iterations: 15473\ncpu: 44818.41271892993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1975.4764849668463,
            "unit": "ns/iter",
            "extra": "iterations: 354284\ncpu: 1975.3748405234287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10259.999077789056,
            "unit": "ns/iter",
            "extra": "iterations: 68314\ncpu: 10259.807652896989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8277.992848473434,
            "unit": "ns/iter",
            "extra": "iterations: 84038\ncpu: 8277.819557819115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8364.017824333794,
            "unit": "ns/iter",
            "extra": "iterations: 83818\ncpu: 8363.486363311125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8302.40210279245,
            "unit": "ns/iter",
            "extra": "iterations: 84364\ncpu: 8301.851500640007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18822.106906463985,
            "unit": "ns/iter",
            "extra": "iterations: 37921\ncpu: 18820.87761398699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56269.202348175895,
            "unit": "ns/iter",
            "extra": "iterations: 12350\ncpu: 56266.11336032468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44665.52184808721,
            "unit": "ns/iter",
            "extra": "iterations: 15562\ncpu: 44662.96105899033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44572.04532940119,
            "unit": "ns/iter",
            "extra": "iterations: 15619\ncpu: 44569.81881042292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44369.50140790772,
            "unit": "ns/iter",
            "extra": "iterations: 15626\ncpu: 44366.920517086495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26175.092065508405,
            "unit": "ns/iter",
            "extra": "iterations: 26807\ncpu: 26173.704629387365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44344.572152534405,
            "unit": "ns/iter",
            "extra": "iterations: 15786\ncpu: 44343.2028379574 ns\nthreads: 1"
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
        "date": 1705779132126,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 556.1325038227556,
            "unit": "ns/iter",
            "extra": "iterations: 1257609\ncpu: 556.1175214235905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5274.905210000043,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5274.521999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10150.733620206991,
            "unit": "ns/iter",
            "extra": "iterations: 82266\ncpu: 10150.116694624754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15115.660048959075,
            "unit": "ns/iter",
            "extra": "iterations: 55558\ncpu: 15114.867345836785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19901.78716078946,
            "unit": "ns/iter",
            "extra": "iterations: 41825\ncpu: 19900.449491930667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24923.205594362913,
            "unit": "ns/iter",
            "extra": "iterations: 33498\ncpu: 24921.85503612157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29900.038134685143,
            "unit": "ns/iter",
            "extra": "iterations: 28006\ncpu: 29898.332500178538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34656.85790466448,
            "unit": "ns/iter",
            "extra": "iterations: 24378\ncpu: 34655.55829026172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40540.663514542466,
            "unit": "ns/iter",
            "extra": "iterations: 21044\ncpu: 40537.450104542906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 551.2883739805833,
            "unit": "ns/iter",
            "extra": "iterations: 1271467\ncpu: 551.2367996967281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 421.0448904479717,
            "unit": "ns/iter",
            "extra": "iterations: 1668796\ncpu: 421.03726279305624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 420.6075659554636,
            "unit": "ns/iter",
            "extra": "iterations: 1661046\ncpu: 420.5899776405945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 415.8583881945401,
            "unit": "ns/iter",
            "extra": "iterations: 1682275\ncpu: 415.84384241577663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 864.4873596888792,
            "unit": "ns/iter",
            "extra": "iterations: 791990\ncpu: 864.4688695564323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2025.040235622015,
            "unit": "ns/iter",
            "extra": "iterations: 394700\ncpu: 2025.0380035469987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 11248.527636823645,
            "unit": "ns/iter",
            "extra": "iterations: 73507\ncpu: 11248.101541349795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8113.351999759643,
            "unit": "ns/iter",
            "extra": "iterations: 100287\ncpu: 8113.060516318159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8009.061619389746,
            "unit": "ns/iter",
            "extra": "iterations: 101705\ncpu: 8008.687871786058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7630.159126379236,
            "unit": "ns/iter",
            "extra": "iterations: 107644\ncpu: 7629.949648842462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30279.87102117165,
            "unit": "ns/iter",
            "extra": "iterations: 27772\ncpu: 30277.329684574437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 266592.61020531115,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 266579.3478260873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 204347.96995108383,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 204336.78080596327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 203475.51421912768,
            "unit": "ns/iter",
            "extra": "iterations: 4290\ncpu: 203475.38461538486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199941.90430731617,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 199925.26193248012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104649.04152124346,
            "unit": "ns/iter",
            "extra": "iterations: 8309\ncpu: 104642.03875315933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193641.53185781746,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 193630.80706461045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5128.363270000591,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5128.146999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28610.0751007039,
            "unit": "ns/iter",
            "extra": "iterations: 29294\ncpu: 28608.97453403425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22280.809826992314,
            "unit": "ns/iter",
            "extra": "iterations: 37224\ncpu: 22280.157962604786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22163.355426153557,
            "unit": "ns/iter",
            "extra": "iterations: 37780\ncpu: 22162.093700370544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21909.89847848203,
            "unit": "ns/iter",
            "extra": "iterations: 38317\ncpu: 21909.12649737714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47499.59332295321,
            "unit": "ns/iter",
            "extra": "iterations: 17343\ncpu: 47497.39952718667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 279311.80228498916,
            "unit": "ns/iter",
            "extra": "iterations: 3151\ncpu: 279295.7156458275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 217257.05798551269,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 217251.11222194554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 217405.15506564284,
            "unit": "ns/iter",
            "extra": "iterations: 4037\ncpu: 217397.1265791431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 215190.89498275903,
            "unit": "ns/iter",
            "extra": "iterations: 4066\ncpu: 215178.9473684219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117634.58257934064,
            "unit": "ns/iter",
            "extra": "iterations: 7405\ncpu: 117628.5887913568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 207761.729525606,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 207753.386830305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 857255.6992818451,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 857219.210053858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 472983.36276597594,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 472942.92553191737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1908.7394515795563,
            "unit": "ns/iter",
            "extra": "iterations: 420371\ncpu: 1908.609775650559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9854.554420165894,
            "unit": "ns/iter",
            "extra": "iterations: 82791\ncpu: 9854.404464253406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7862.184644379659,
            "unit": "ns/iter",
            "extra": "iterations: 105056\ncpu: 7861.903175449254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7686.255290535535,
            "unit": "ns/iter",
            "extra": "iterations: 107078\ncpu: 7685.857972692772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7395.695201760172,
            "unit": "ns/iter",
            "extra": "iterations: 111395\ncpu: 7395.50877507968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 30169.29073240942,
            "unit": "ns/iter",
            "extra": "iterations: 27785\ncpu: 30168.263451502484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 269239.89726443094,
            "unit": "ns/iter",
            "extra": "iterations: 3290\ncpu: 269229.39209726313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 202454.2983741922,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 202442.0654911841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 200688.3434782539,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 200679.33638443914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197944.04648043722,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 197937.85474860214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101436.6010595432,
            "unit": "ns/iter",
            "extra": "iterations: 8683\ncpu: 101430.00115167577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 190699.29973821147,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 190688.4162303659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 190.50623669536913,
            "unit": "ns/iter",
            "extra": "iterations: 3678230\ncpu: 190.49744034494816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1504.0999346972476,
            "unit": "ns/iter",
            "extra": "iterations: 467055\ncpu: 1504.0646176574442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1177.9825516452283,
            "unit": "ns/iter",
            "extra": "iterations: 594440\ncpu: 1177.9390687033117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1154.8414240935497,
            "unit": "ns/iter",
            "extra": "iterations: 601674\ncpu: 1154.7421028663293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 874.2199391323652,
            "unit": "ns/iter",
            "extra": "iterations: 800426\ncpu: 874.2039863772591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9418.136827508515,
            "unit": "ns/iter",
            "extra": "iterations: 74276\ncpu: 9417.689428617561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12276.330378427958,
            "unit": "ns/iter",
            "extra": "iterations: 56629\ncpu: 12275.49135601897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2759.72916427131,
            "unit": "ns/iter",
            "extra": "iterations: 252223\ncpu: 2759.5667326136227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2731.804767070483,
            "unit": "ns/iter",
            "extra": "iterations: 256258\ncpu: 2731.554917309902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2765.440793922922,
            "unit": "ns/iter",
            "extra": "iterations: 254332\ncpu: 2765.2080744853015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5185.793908349106,
            "unit": "ns/iter",
            "extra": "iterations: 133921\ncpu: 5185.416775561753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5334.735155542302,
            "unit": "ns/iter",
            "extra": "iterations: 132440\ncpu: 5334.729688915721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1984.9835399208462,
            "unit": "ns/iter",
            "extra": "iterations: 353765\ncpu: 1984.9312396647365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10190.28351007041,
            "unit": "ns/iter",
            "extra": "iterations: 69218\ncpu: 10189.489728105484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8159.178477963477,
            "unit": "ns/iter",
            "extra": "iterations: 86739\ncpu: 8158.794775129975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8125.811058844484,
            "unit": "ns/iter",
            "extra": "iterations: 86736\ncpu: 8125.409287954177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8087.404134515587,
            "unit": "ns/iter",
            "extra": "iterations: 86830\ncpu: 8086.843256938909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18547.87123222243,
            "unit": "ns/iter",
            "extra": "iterations: 37688\ncpu: 18547.635852260864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55174.89706934379,
            "unit": "ns/iter",
            "extra": "iterations: 12591\ncpu: 55174.068779287474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44677.61183242778,
            "unit": "ns/iter",
            "extra": "iterations: 15635\ncpu: 44675.83626479027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44469.63669132579,
            "unit": "ns/iter",
            "extra": "iterations: 15813\ncpu: 44468.81679630654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44195.41057395817,
            "unit": "ns/iter",
            "extra": "iterations: 15907\ncpu: 44193.3614132142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25784.459641089277,
            "unit": "ns/iter",
            "extra": "iterations: 27082\ncpu: 25783.19917288227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43625.94272416885,
            "unit": "ns/iter",
            "extra": "iterations: 16115\ncpu: 43625.212534905724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1930.7796013613888,
            "unit": "ns/iter",
            "extra": "iterations: 362534\ncpu: 1930.698086248478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10184.22904263462,
            "unit": "ns/iter",
            "extra": "iterations: 68699\ncpu: 10183.855660198795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8256.207447689407,
            "unit": "ns/iter",
            "extra": "iterations: 84590\ncpu: 8256.085825747794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8317.3684697833,
            "unit": "ns/iter",
            "extra": "iterations: 84243\ncpu: 8317.362866944444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8246.46855171279,
            "unit": "ns/iter",
            "extra": "iterations: 84631\ncpu: 8246.039867188167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18434.70651773739,
            "unit": "ns/iter",
            "extra": "iterations: 38050\ncpu: 18433.700394218085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54890.97003506352,
            "unit": "ns/iter",
            "extra": "iterations: 12548\ncpu: 54885.81447242557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44134.72487540223,
            "unit": "ns/iter",
            "extra": "iterations: 15851\ncpu: 44130.81824490524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43784.45440417296,
            "unit": "ns/iter",
            "extra": "iterations: 16087\ncpu: 43782.215453471654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43464.32097993267,
            "unit": "ns/iter",
            "extra": "iterations: 16001\ncpu: 43462.827323292295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25962.024173312875,
            "unit": "ns/iter",
            "extra": "iterations: 27096\ncpu: 25961.211987008704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43061.34008072693,
            "unit": "ns/iter",
            "extra": "iterations: 16352\ncpu: 43060.622553816684 ns\nthreads: 1"
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
        "date": 1705954292804,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 591.77022334473,
            "unit": "ns/iter",
            "extra": "iterations: 1185029\ncpu: 591.7694841223296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5353.134510000928,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5352.815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10392.646077787753,
            "unit": "ns/iter",
            "extra": "iterations: 80707\ncpu: 10392.177878003144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15615.421554796145,
            "unit": "ns/iter",
            "extra": "iterations: 53872\ncpu: 15614.868577368577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20750.00481056577,
            "unit": "ns/iter",
            "extra": "iterations: 40120\ncpu: 20749.202392821546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25895.062938801526,
            "unit": "ns/iter",
            "extra": "iterations: 32190\ncpu: 25893.62534948741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30764.489337660427,
            "unit": "ns/iter",
            "extra": "iterations: 27433\ncpu: 30762.65811249227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35195.16915612008,
            "unit": "ns/iter",
            "extra": "iterations: 23700\ncpu: 35193.35864978904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40276.35634469688,
            "unit": "ns/iter",
            "extra": "iterations: 21120\ncpu: 40275.74810606066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 577.0232635677139,
            "unit": "ns/iter",
            "extra": "iterations: 1208714\ncpu: 577.0227696543586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 440.71969582087104,
            "unit": "ns/iter",
            "extra": "iterations: 1582620\ncpu: 440.71179436630473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 439.40616196476066,
            "unit": "ns/iter",
            "extra": "iterations: 1590272\ncpu: 439.38810467643367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 437.005901700637,
            "unit": "ns/iter",
            "extra": "iterations: 1593439\ncpu: 436.9897435672153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 904.8255531884168,
            "unit": "ns/iter",
            "extra": "iterations: 778713\ncpu: 904.7974028942639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2090.1713184966684,
            "unit": "ns/iter",
            "extra": "iterations: 390384\ncpu: 2090.1030779950006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10853.213763429534,
            "unit": "ns/iter",
            "extra": "iterations: 75766\ncpu: 10852.803368265444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8674.272023601708,
            "unit": "ns/iter",
            "extra": "iterations: 94569\ncpu: 8674.212479776672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8502.88343815074,
            "unit": "ns/iter",
            "extra": "iterations: 95563\ncpu: 8502.689325366542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7825.050674576712,
            "unit": "ns/iter",
            "extra": "iterations: 104510\ncpu: 7824.801454406272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30565.737716419884,
            "unit": "ns/iter",
            "extra": "iterations: 27089\ncpu: 30565.49521946173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262784.3603443284,
            "unit": "ns/iter",
            "extra": "iterations: 3369\ncpu: 262777.916295637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 201458.20242050814,
            "unit": "ns/iter",
            "extra": "iterations: 4214\ncpu: 201458.37683910783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 201368.93589743148,
            "unit": "ns/iter",
            "extra": "iterations: 4212\ncpu: 201360.0902184236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 203888.71095027615,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 203882.6289983661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105357.3623240246,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 105352.50536864734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195353.76608186902,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 195348.29059829068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5133.71174000099,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5133.517000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29449.52204240223,
            "unit": "ns/iter",
            "extra": "iterations: 29103\ncpu: 29448.51733498265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22436.525910780314,
            "unit": "ns/iter",
            "extra": "iterations: 37166\ncpu: 22435.734273260503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22444.737591318986,
            "unit": "ns/iter",
            "extra": "iterations: 37232\ncpu: 22444.706166738335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21927.64843483049,
            "unit": "ns/iter",
            "extra": "iterations: 38047\ncpu: 21927.008699766073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48863.654336957574,
            "unit": "ns/iter",
            "extra": "iterations: 17005\ncpu: 48861.1878859161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 283524.69430053834,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 283516.1917098447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 220675.30882726162,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 220668.7356906635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 219381.04793303873,
            "unit": "ns/iter",
            "extra": "iterations: 3943\ncpu: 219373.5480598523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 215915.6433583946,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 215907.7944862156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118206.4557474411,
            "unit": "ns/iter",
            "extra": "iterations: 7412\ncpu: 118203.26497571534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 208295.8991133531,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 208290.15097052368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 854328.1653116562,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 854293.8572719108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 475551.870588236,
            "unit": "ns/iter",
            "extra": "iterations: 1870\ncpu: 475534.4919786125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1936.3360433604666,
            "unit": "ns/iter",
            "extra": "iterations: 415494\ncpu: 1936.3338580099721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10495.040611752962,
            "unit": "ns/iter",
            "extra": "iterations: 77613\ncpu: 10494.714802932462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7779.166381562868,
            "unit": "ns/iter",
            "extra": "iterations: 106394\ncpu: 7778.854070718276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7951.346262795704,
            "unit": "ns/iter",
            "extra": "iterations: 102376\ncpu: 7951.0764241619145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7535.0696804491,
            "unit": "ns/iter",
            "extra": "iterations: 109873\ncpu: 7534.840224623016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 30124.26482639459,
            "unit": "ns/iter",
            "extra": "iterations: 27822\ncpu: 30122.812881892183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 267669.97575023165,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 267661.04880266765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200401.27437485152,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 200395.0906171132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 201483.7358620784,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 201481.2873563206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 201696.10689655546,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 201691.0574712644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101787.09390598054,
            "unit": "ns/iter",
            "extra": "iterations: 8615\ncpu: 101784.28322692991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191922.72197802435,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 191914.15384615393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.66767861460806,
            "unit": "ns/iter",
            "extra": "iterations: 3622716\ncpu: 193.66287614044305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1511.8154778605788,
            "unit": "ns/iter",
            "extra": "iterations: 463294\ncpu: 1511.7413564604692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1178.329289331674,
            "unit": "ns/iter",
            "extra": "iterations: 592977\ncpu: 1178.2537939920117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1165.3778232786756,
            "unit": "ns/iter",
            "extra": "iterations: 600720\ncpu: 1165.3257757357853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 891.9043032175324,
            "unit": "ns/iter",
            "extra": "iterations: 784018\ncpu: 891.8698295192178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9514.310503342704,
            "unit": "ns/iter",
            "extra": "iterations: 73310\ncpu: 9514.306370208753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12721.698649440415,
            "unit": "ns/iter",
            "extra": "iterations: 54644\ncpu: 12721.12949271642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2879.8703106692155,
            "unit": "ns/iter",
            "extra": "iterations: 240706\ncpu: 2879.703455667909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2836.9136167374463,
            "unit": "ns/iter",
            "extra": "iterations: 245962\ncpu: 2836.7865767882913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2892.9581018444237,
            "unit": "ns/iter",
            "extra": "iterations: 243352\ncpu: 2892.87410828759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5477.653931626732,
            "unit": "ns/iter",
            "extra": "iterations: 129145\ncpu: 5477.373494908852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5533.588977279748,
            "unit": "ns/iter",
            "extra": "iterations: 129224\ncpu: 5533.300315730844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1989.9818231921336,
            "unit": "ns/iter",
            "extra": "iterations: 351987\ncpu: 1989.889967527222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10239.53120214649,
            "unit": "ns/iter",
            "extra": "iterations: 68569\ncpu: 10239.253890242013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8355.197138657437,
            "unit": "ns/iter",
            "extra": "iterations: 83667\ncpu: 8355.108943789057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8277.700484471776,
            "unit": "ns/iter",
            "extra": "iterations: 84009\ncpu: 8277.11316644645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8283.34660237953,
            "unit": "ns/iter",
            "extra": "iterations: 84206\ncpu: 8282.98221029385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19163.55556465092,
            "unit": "ns/iter",
            "extra": "iterations: 36642\ncpu: 19162.774957698977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56650.17232418635,
            "unit": "ns/iter",
            "extra": "iterations: 12314\ncpu: 56646.4917979533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45348.816327853725,
            "unit": "ns/iter",
            "extra": "iterations: 15446\ncpu: 45347.26142690658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45704.53702372494,
            "unit": "ns/iter",
            "extra": "iterations: 15301\ncpu: 45702.24821907058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45093.88088036372,
            "unit": "ns/iter",
            "extra": "iterations: 15539\ncpu: 45091.904240942546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26314.904035470623,
            "unit": "ns/iter",
            "extra": "iterations: 26614\ncpu: 26313.906214774423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44640.820548907395,
            "unit": "ns/iter",
            "extra": "iterations: 15631\ncpu: 44637.809481158736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1939.8438875880058,
            "unit": "ns/iter",
            "extra": "iterations: 359997\ncpu: 1939.803387250468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9977.523175683107,
            "unit": "ns/iter",
            "extra": "iterations: 69944\ncpu: 9977.254660871542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8113.851944515976,
            "unit": "ns/iter",
            "extra": "iterations: 85934\ncpu: 8113.300905346057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8160.228336156567,
            "unit": "ns/iter",
            "extra": "iterations: 85615\ncpu: 8160.08292939328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8102.859843380573,
            "unit": "ns/iter",
            "extra": "iterations: 86068\ncpu: 8102.703676163043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18822.494465341144,
            "unit": "ns/iter",
            "extra": "iterations: 37220\ncpu: 18822.270284793212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55634.824841531314,
            "unit": "ns/iter",
            "extra": "iterations: 12463\ncpu: 55632.576426221254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44359.28188767146,
            "unit": "ns/iter",
            "extra": "iterations: 15829\ncpu: 44359.23937077464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44221.96668152893,
            "unit": "ns/iter",
            "extra": "iterations: 15697\ncpu: 44219.984710453566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44211.715767234564,
            "unit": "ns/iter",
            "extra": "iterations: 15621\ncpu: 44210.05697458558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26045.173957988336,
            "unit": "ns/iter",
            "extra": "iterations: 27087\ncpu: 26043.640860929376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44171.98931174969,
            "unit": "ns/iter",
            "extra": "iterations: 16186\ncpu: 44170.81428394921 ns\nthreads: 1"
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
        "date": 1705955734998,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 555.8304039614729,
            "unit": "ns/iter",
            "extra": "iterations: 1254080\ncpu: 555.8075242408778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5418.751230000681,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5418.37 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10433.280516168426,
            "unit": "ns/iter",
            "extra": "iterations: 79974\ncpu: 10432.998224422936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15783.888088580501,
            "unit": "ns/iter",
            "extra": "iterations: 54007\ncpu: 15783.485474105206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20763.300027158744,
            "unit": "ns/iter",
            "extra": "iterations: 40503\ncpu: 20762.83978964522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25622.63704768464,
            "unit": "ns/iter",
            "extra": "iterations: 32693\ncpu: 25621.322607285958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30627.673417257192,
            "unit": "ns/iter",
            "extra": "iterations: 27405\ncpu: 30625.92227695677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35244.37168104017,
            "unit": "ns/iter",
            "extra": "iterations: 23652\ncpu: 35242.93505834602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40237.97360099695,
            "unit": "ns/iter",
            "extra": "iterations: 20872\ncpu: 40236.172863165964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 562.8921051808748,
            "unit": "ns/iter",
            "extra": "iterations: 1246881\ncpu: 562.8698328068193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 426.5216408399313,
            "unit": "ns/iter",
            "extra": "iterations: 1633578\ncpu: 426.5024994215153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 418.82516766773097,
            "unit": "ns/iter",
            "extra": "iterations: 1681451\ncpu: 418.813810215106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 432.01261875457055,
            "unit": "ns/iter",
            "extra": "iterations: 1652778\ncpu: 432.0016965375874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 878.9771861710341,
            "unit": "ns/iter",
            "extra": "iterations: 782990\ncpu: 878.9715066603649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2031.9479823430365,
            "unit": "ns/iter",
            "extra": "iterations: 393501\ncpu: 2031.8964881918967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10808.92162083435,
            "unit": "ns/iter",
            "extra": "iterations: 75492\ncpu: 10808.57044455042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8163.695178041348,
            "unit": "ns/iter",
            "extra": "iterations: 100229\ncpu: 8163.281086312364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8032.10843919647,
            "unit": "ns/iter",
            "extra": "iterations: 101467\ncpu: 8031.638857953808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7932.05579696046,
            "unit": "ns/iter",
            "extra": "iterations: 102640\ncpu: 7931.856001558829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30159.773221362288,
            "unit": "ns/iter",
            "extra": "iterations: 27507\ncpu: 30158.35605482236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 254176.51653869424,
            "unit": "ns/iter",
            "extra": "iterations: 3386\ncpu: 254166.27288836328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198488.867828102,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 198480.99883855996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 197924.05889226994,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 197916.12526291175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 198039.0504299332,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 198031.67557517986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103857.62111727434,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 103854.11597968587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195510.18963195366,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 195502.28904847396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5121.392739999919,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5120.995000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28808.159156480444,
            "unit": "ns/iter",
            "extra": "iterations: 29116\ncpu: 28806.70421761234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22302.76883151529,
            "unit": "ns/iter",
            "extra": "iterations: 37570\ncpu: 22302.19323928663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22507.8256028703,
            "unit": "ns/iter",
            "extra": "iterations: 37363\ncpu: 22506.854374648716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21769.988899071825,
            "unit": "ns/iter",
            "extra": "iterations: 38195\ncpu: 21769.166121220027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48803.18159962358,
            "unit": "ns/iter",
            "extra": "iterations: 17054\ncpu: 48800.88542277462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 280767.46567355975,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 280749.25518134824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 217396.22541907663,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 217393.3700275216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 219415.43853486844,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 219407.50125439136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 217247.383863698,
            "unit": "ns/iter",
            "extra": "iterations: 3991\ncpu: 217238.6369330988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118081.72088624368,
            "unit": "ns/iter",
            "extra": "iterations: 7402\ncpu: 118074.97973520625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 210350.6569149027,
            "unit": "ns/iter",
            "extra": "iterations: 4136\ncpu: 210342.40812379197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 850675.3926654427,
            "unit": "ns/iter",
            "extra": "iterations: 1118\ncpu: 850636.672629699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 474566.0715823136,
            "unit": "ns/iter",
            "extra": "iterations: 1858\ncpu: 474551.3993541459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1938.7655420170931,
            "unit": "ns/iter",
            "extra": "iterations: 411417\ncpu: 1938.6478925275396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10377.305319175586,
            "unit": "ns/iter",
            "extra": "iterations: 79674\ncpu: 10376.907146622485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8025.87364502272,
            "unit": "ns/iter",
            "extra": "iterations: 103415\ncpu: 8025.592999081371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7946.711962184017,
            "unit": "ns/iter",
            "extra": "iterations: 103660\ncpu: 7946.421956395927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7534.582058649074,
            "unit": "ns/iter",
            "extra": "iterations: 109635\ncpu: 7534.408719843081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 30606.242773134585,
            "unit": "ns/iter",
            "extra": "iterations: 28228\ncpu: 30605.28198951389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 274981.98449611943,
            "unit": "ns/iter",
            "extra": "iterations: 3225\ncpu: 274963.9689922489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 205742.57126194562,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 205738.51177979997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 206011.13378158407,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 206003.38511476913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 202755.18513420806,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 202750.67676072495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102158.23481172975,
            "unit": "ns/iter",
            "extra": "iterations: 8658\ncpu: 102154.77015477017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191533.67175572598,
            "unit": "ns/iter",
            "extra": "iterations: 4585\ncpu: 191527.895310797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 187.79467741120072,
            "unit": "ns/iter",
            "extra": "iterations: 3738707\ncpu: 187.78703439451024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1496.9896809704717,
            "unit": "ns/iter",
            "extra": "iterations: 468358\ncpu: 1496.9286315169177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1229.736765865028,
            "unit": "ns/iter",
            "extra": "iterations: 601286\ncpu: 1229.689698413075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1104.9644771602407,
            "unit": "ns/iter",
            "extra": "iterations: 636323\ncpu: 1104.9429299270953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 896.1995778650435,
            "unit": "ns/iter",
            "extra": "iterations: 780793\ncpu: 896.1662053835047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9549.592429038952,
            "unit": "ns/iter",
            "extra": "iterations: 73597\ncpu: 9549.242496297331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12539.522495369674,
            "unit": "ns/iter",
            "extra": "iterations: 55078\ncpu: 12539.195322996486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2805.660650036928,
            "unit": "ns/iter",
            "extra": "iterations: 249032\ncpu: 2805.558723376927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2820.815382071869,
            "unit": "ns/iter",
            "extra": "iterations: 247977\ncpu: 2820.7378103614465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2822.9028476788967,
            "unit": "ns/iter",
            "extra": "iterations: 248167\ncpu: 2822.7765980166764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5082.831549147575,
            "unit": "ns/iter",
            "extra": "iterations: 137411\ncpu: 5082.701530445178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5543.678925517373,
            "unit": "ns/iter",
            "extra": "iterations: 129104\ncpu: 5543.541640847738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1981.8485610047169,
            "unit": "ns/iter",
            "extra": "iterations: 354136\ncpu: 1981.8261910678386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10375.618438752135,
            "unit": "ns/iter",
            "extra": "iterations: 69137\ncpu: 10375.077020987215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8182.3393828549615,
            "unit": "ns/iter",
            "extra": "iterations: 84194\ncpu: 8181.913200465584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8110.588000092528,
            "unit": "ns/iter",
            "extra": "iterations: 86284\ncpu: 8110.363450929537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8158.9274800773555,
            "unit": "ns/iter",
            "extra": "iterations: 86459\ncpu: 8158.412658022823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18627.347507684255,
            "unit": "ns/iter",
            "extra": "iterations: 37415\ncpu: 18627.35533876803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55676.31317494651,
            "unit": "ns/iter",
            "extra": "iterations: 12501\ncpu: 55671.36229101711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45424.37218866365,
            "unit": "ns/iter",
            "extra": "iterations: 15562\ncpu: 45424.02647474666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45005.57556908979,
            "unit": "ns/iter",
            "extra": "iterations: 15595\ncpu: 45004.822058351754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44299.07336543635,
            "unit": "ns/iter",
            "extra": "iterations: 15784\ncpu: 44298.3464267613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26228.294318226148,
            "unit": "ns/iter",
            "extra": "iterations: 26981\ncpu: 26228.097550127888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44252.88116108249,
            "unit": "ns/iter",
            "extra": "iterations: 15744\ncpu: 44252.426321138104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1951.9689540254813,
            "unit": "ns/iter",
            "extra": "iterations: 359177\ncpu: 1951.9476469818464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10029.109927548694,
            "unit": "ns/iter",
            "extra": "iterations: 69564\ncpu: 10029.134322350628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8222.01124871461,
            "unit": "ns/iter",
            "extra": "iterations: 84543\ncpu: 8221.832676862736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8192.572970876752,
            "unit": "ns/iter",
            "extra": "iterations: 85123\ncpu: 8192.4614968928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8137.28507459122,
            "unit": "ns/iter",
            "extra": "iterations: 85532\ncpu: 8136.955759247961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18496.902898435557,
            "unit": "ns/iter",
            "extra": "iterations: 37641\ncpu: 18496.687123083917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56051.85994889981,
            "unit": "ns/iter",
            "extra": "iterations: 12524\ncpu: 56051.07793037364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44132.18061645404,
            "unit": "ns/iter",
            "extra": "iterations: 15735\ncpu: 44131.10263743247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44099.0596581954,
            "unit": "ns/iter",
            "extra": "iterations: 15857\ncpu: 44096.37384120587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44146.15783117478,
            "unit": "ns/iter",
            "extra": "iterations: 15732\ncpu: 44145.741164505474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26040.068075114712,
            "unit": "ns/iter",
            "extra": "iterations: 26838\ncpu: 26038.877710708282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44417.70299318589,
            "unit": "ns/iter",
            "extra": "iterations: 16003\ncpu: 44417.32800099943 ns\nthreads: 1"
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
        "date": 1705957656279,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 555.1671408715904,
            "unit": "ns/iter",
            "extra": "iterations: 1253326\ncpu: 555.1405619926501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5301.638629999843,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5301.434999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10302.206552953045,
            "unit": "ns/iter",
            "extra": "iterations: 80788\ncpu: 10301.573253453485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15504.734032218992,
            "unit": "ns/iter",
            "extra": "iterations: 54563\ncpu: 15503.84509649396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20288.267043238513,
            "unit": "ns/iter",
            "extra": "iterations: 41072\ncpu: 20286.976529022206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25174.930268936634,
            "unit": "ns/iter",
            "extra": "iterations: 33242\ncpu: 25173.07322062453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30388.265273139044,
            "unit": "ns/iter",
            "extra": "iterations: 27843\ncpu: 30386.621412922483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35038.8524203076,
            "unit": "ns/iter",
            "extra": "iterations: 23716\ncpu: 35037.86473266996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39760.331003208965,
            "unit": "ns/iter",
            "extra": "iterations: 21172\ncpu: 39757.991687133945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 546.4744495572791,
            "unit": "ns/iter",
            "extra": "iterations: 1256534\ncpu: 546.4451419539784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 420.5615065137069,
            "unit": "ns/iter",
            "extra": "iterations: 1666417\ncpu: 420.540656990417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 418.3069944411109,
            "unit": "ns/iter",
            "extra": "iterations: 1674444\ncpu: 418.2869059819259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 422.98592848438983,
            "unit": "ns/iter",
            "extra": "iterations: 1676081\ncpu: 422.959093265779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 880.060706903724,
            "unit": "ns/iter",
            "extra": "iterations: 811341\ncpu: 880.0143219681975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2041.8700937631002,
            "unit": "ns/iter",
            "extra": "iterations: 389173\ncpu: 2039.9503562682933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10501.13863566961,
            "unit": "ns/iter",
            "extra": "iterations: 75363\ncpu: 10500.934145402907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8404.533226721147,
            "unit": "ns/iter",
            "extra": "iterations: 96925\ncpu: 8404.304359040496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8093.599549717481,
            "unit": "ns/iter",
            "extra": "iterations: 99493\ncpu: 8093.367372578963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8009.189636216911,
            "unit": "ns/iter",
            "extra": "iterations: 101874\ncpu: 8008.798123171737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30469.813662306697,
            "unit": "ns/iter",
            "extra": "iterations: 27155\ncpu: 30467.61185785296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 255742.7106420475,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 255737.8481383753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 196837.0150428237,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 196830.43277019224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 197522.67502297743,
            "unit": "ns/iter",
            "extra": "iterations: 4348\ncpu: 197518.79024838936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 198187.56401383504,
            "unit": "ns/iter",
            "extra": "iterations: 4335\ncpu: 198174.67128027708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104155.23649289612,
            "unit": "ns/iter",
            "extra": "iterations: 8440\ncpu: 104153.18720379162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195399.93288289805,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 195384.50450450418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5088.059500000099,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5087.9289999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28443.438820741118,
            "unit": "ns/iter",
            "extra": "iterations: 29103\ncpu: 28442.490464900562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23063.39845962211,
            "unit": "ns/iter",
            "extra": "iterations: 37783\ncpu: 23062.943651906968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22045.002122412378,
            "unit": "ns/iter",
            "extra": "iterations: 37693\ncpu: 22044.652853314907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22391.939773203605,
            "unit": "ns/iter",
            "extra": "iterations: 38272\ncpu: 22391.591764214085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48574.501224917556,
            "unit": "ns/iter",
            "extra": "iterations: 17144\ncpu: 48574.20671955215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 281070.8476736694,
            "unit": "ns/iter",
            "extra": "iterations: 3138\ncpu: 281060.67558954685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 218595.41286929007,
            "unit": "ns/iter",
            "extra": "iterations: 3994\ncpu: 218583.75062593768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216810.97172619714,
            "unit": "ns/iter",
            "extra": "iterations: 4032\ncpu: 216792.55952381005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214309.04970326312,
            "unit": "ns/iter",
            "extra": "iterations: 4044\ncpu: 214296.26607319477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116398.99826225589,
            "unit": "ns/iter",
            "extra": "iterations: 7481\ncpu: 116391.63213474072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 206441.9181688873,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 206424.6916508536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 842879.352941247,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 842821.2121212153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 469721.06782336533,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 469665.82544690074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1899.9903164435202,
            "unit": "ns/iter",
            "extra": "iterations: 421023\ncpu: 1899.8679407063366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10090.341507102768,
            "unit": "ns/iter",
            "extra": "iterations: 80950\ncpu: 10090.294008647259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7571.955189965139,
            "unit": "ns/iter",
            "extra": "iterations: 108257\ncpu: 7571.692361694859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7485.057096143717,
            "unit": "ns/iter",
            "extra": "iterations: 109482\ncpu: 7484.574633273071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7067.343987916374,
            "unit": "ns/iter",
            "extra": "iterations: 113879\ncpu: 7067.1089489721735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 30331.880632638084,
            "unit": "ns/iter",
            "extra": "iterations: 28073\ncpu: 30331.799237701645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 265203.12537049025,
            "unit": "ns/iter",
            "extra": "iterations: 3374\ncpu: 265198.42916419636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200496.73461973402,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 200493.825198639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 198965.1870487299,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 198959.6119133569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197082.5150359079,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 197078.38868940788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100401.78890672217,
            "unit": "ns/iter",
            "extra": "iterations: 8726\ncpu: 100399.54159981645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 190895.07809773288,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 190892.73560209427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.42012324959336,
            "unit": "ns/iter",
            "extra": "iterations: 3564961\ncpu: 196.4160617745888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1514.8764152779563,
            "unit": "ns/iter",
            "extra": "iterations: 462630\ncpu: 1514.8531223656096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1169.470463619313,
            "unit": "ns/iter",
            "extra": "iterations: 597128\ncpu: 1169.4001956029551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1211.969661322302,
            "unit": "ns/iter",
            "extra": "iterations: 575503\ncpu: 1211.9107980323317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 839.5482722900974,
            "unit": "ns/iter",
            "extra": "iterations: 826354\ncpu: 839.5366876665414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9670.086769299605,
            "unit": "ns/iter",
            "extra": "iterations: 72687\ncpu: 9669.785518730981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12495.345379824594,
            "unit": "ns/iter",
            "extra": "iterations: 56697\ncpu: 12494.47589819561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2836.931943588198,
            "unit": "ns/iter",
            "extra": "iterations: 248103\ncpu: 2836.708141376774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2794.308980526679,
            "unit": "ns/iter",
            "extra": "iterations: 252346\ncpu: 2794.064498743775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2784.3244225963376,
            "unit": "ns/iter",
            "extra": "iterations: 250821\ncpu: 2784.1057965640703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5296.900145739476,
            "unit": "ns/iter",
            "extra": "iterations: 133114\ncpu: 5296.562345057641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5466.36626348902,
            "unit": "ns/iter",
            "extra": "iterations: 127239\ncpu: 5466.000990262446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1974.3383456329232,
            "unit": "ns/iter",
            "extra": "iterations: 356789\ncpu: 1974.2155727895085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10170.100482071643,
            "unit": "ns/iter",
            "extra": "iterations: 69077\ncpu: 10169.83655920195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8194.157192831668,
            "unit": "ns/iter",
            "extra": "iterations: 83757\ncpu: 8193.642322432763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8205.44124361608,
            "unit": "ns/iter",
            "extra": "iterations: 84978\ncpu: 8204.828308503334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8234.60570118799,
            "unit": "ns/iter",
            "extra": "iterations: 85070\ncpu: 8234.215352063055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18627.92814499649,
            "unit": "ns/iter",
            "extra": "iterations: 37353\ncpu: 18627.036650335947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55158.42356510621,
            "unit": "ns/iter",
            "extra": "iterations: 12527\ncpu: 55156.58178334761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45209.981190414685,
            "unit": "ns/iter",
            "extra": "iterations: 15524\ncpu: 45206.77016232984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45013.66193490616,
            "unit": "ns/iter",
            "extra": "iterations: 15639\ncpu: 45009.975062343554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44616.866286441524,
            "unit": "ns/iter",
            "extra": "iterations: 15780\ncpu: 44613.70088719899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26147.068609479367,
            "unit": "ns/iter",
            "extra": "iterations: 26731\ncpu: 26144.498896412304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44865.58683199984,
            "unit": "ns/iter",
            "extra": "iterations: 15887\ncpu: 44863.67470258731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1968.2663260166262,
            "unit": "ns/iter",
            "extra": "iterations: 355399\ncpu: 1965.5649002951561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10268.524596897705,
            "unit": "ns/iter",
            "extra": "iterations: 68159\ncpu: 10268.199357384827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8273.885340833192,
            "unit": "ns/iter",
            "extra": "iterations: 84616\ncpu: 8273.720100217448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8362.51539380981,
            "unit": "ns/iter",
            "extra": "iterations: 83670\ncpu: 8362.37480578454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8206.999847345769,
            "unit": "ns/iter",
            "extra": "iterations: 85160\ncpu: 8206.862376702622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18527.768787039906,
            "unit": "ns/iter",
            "extra": "iterations: 37965\ncpu: 18527.219807717654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55251.55305233324,
            "unit": "ns/iter",
            "extra": "iterations: 12384\ncpu: 55250.750968991786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44159.89690917495,
            "unit": "ns/iter",
            "extra": "iterations: 15821\ncpu: 44158.04310726249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43958.74535809234,
            "unit": "ns/iter",
            "extra": "iterations: 15834\ncpu: 43958.10913224728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44177.099084984126,
            "unit": "ns/iter",
            "extra": "iterations: 15956\ncpu: 44176.867635998744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25926.740245383644,
            "unit": "ns/iter",
            "extra": "iterations: 27141\ncpu: 25926.583397811413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43373.60669327891,
            "unit": "ns/iter",
            "extra": "iterations: 16285\ncpu: 43372.96898986762 ns\nthreads: 1"
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
        "date": 1705959204686,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 547.6220029861706,
            "unit": "ns/iter",
            "extra": "iterations: 1279899\ncpu: 547.6031311845701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5394.917669999586,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5394.576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10421.072518652803,
            "unit": "ns/iter",
            "extra": "iterations: 79745\ncpu: 10420.594394632893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15732.59819541529,
            "unit": "ns/iter",
            "extra": "iterations: 54417\ncpu: 15732.013892717347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20679.634289391615,
            "unit": "ns/iter",
            "extra": "iterations: 40409\ncpu: 20678.806701477395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25667.936343019086,
            "unit": "ns/iter",
            "extra": "iterations: 32628\ncpu: 25666.994605860014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30725.366476736424,
            "unit": "ns/iter",
            "extra": "iterations: 26501\ncpu: 30724.01418814386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35522.437047758576,
            "unit": "ns/iter",
            "extra": "iterations: 23494\ncpu: 35521.70341363754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40355.26394932612,
            "unit": "ns/iter",
            "extra": "iterations: 20682\ncpu: 40354.78677110535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 543.2470194287781,
            "unit": "ns/iter",
            "extra": "iterations: 1279956\ncpu: 543.2395332339551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 413.54308640481355,
            "unit": "ns/iter",
            "extra": "iterations: 1680797\ncpu: 413.52780853368915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 411.5384027345574,
            "unit": "ns/iter",
            "extra": "iterations: 1720190\ncpu: 411.53535365279436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 407.60554464318307,
            "unit": "ns/iter",
            "extra": "iterations: 1713654\ncpu: 407.59955043433536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 863.502940700174,
            "unit": "ns/iter",
            "extra": "iterations: 808821\ncpu: 863.4696675778689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1929.1546802495957,
            "unit": "ns/iter",
            "extra": "iterations: 414636\ncpu: 1929.102634599985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10097.75201602843,
            "unit": "ns/iter",
            "extra": "iterations: 80852\ncpu: 10097.376688269936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7836.9969262490295,
            "unit": "ns/iter",
            "extra": "iterations: 104758\ncpu: 7836.827736306537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7744.413314103002,
            "unit": "ns/iter",
            "extra": "iterations: 105392\ncpu: 7743.9653863670765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7662.615798188404,
            "unit": "ns/iter",
            "extra": "iterations: 107506\ncpu: 7662.40023812622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30697.065666043556,
            "unit": "ns/iter",
            "extra": "iterations: 27183\ncpu: 30695.53029466952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 266103.2589037027,
            "unit": "ns/iter",
            "extra": "iterations: 3229\ncpu: 266092.7841436979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 204986.82223830262,
            "unit": "ns/iter",
            "extra": "iterations: 4146\ncpu: 204976.845151954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213361.34092010424,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 213356.295399516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210078.26644018345,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 210070.56539674813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107179.51738542329,
            "unit": "ns/iter",
            "extra": "iterations: 8139\ncpu: 107176.43445140653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 204547.1386654235,
            "unit": "ns/iter",
            "extra": "iterations: 4226\ncpu: 204545.45669663977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5124.946040000395,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5124.746000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28135.333288350317,
            "unit": "ns/iter",
            "extra": "iterations: 29641\ncpu: 28134.880739516244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22290.039198516188,
            "unit": "ns/iter",
            "extra": "iterations: 37680\ncpu: 22288.988853503146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22108.04474206837,
            "unit": "ns/iter",
            "extra": "iterations: 37258\ncpu: 22107.410489022488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22138.15588381078,
            "unit": "ns/iter",
            "extra": "iterations: 38317\ncpu: 22129.14633191541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48734.11339534181,
            "unit": "ns/iter",
            "extra": "iterations: 16879\ncpu: 48730.80158777177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 290665.7948633549,
            "unit": "ns/iter",
            "extra": "iterations: 3037\ncpu: 290647.9420480723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 226826.88023165343,
            "unit": "ns/iter",
            "extra": "iterations: 3799\ncpu: 226823.87470386995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 230168.79085655487,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 230167.8928008406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 224888.27329356136,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 224875.31793407764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121572.0986385024,
            "unit": "ns/iter",
            "extra": "iterations: 7198\ncpu: 121570.2139483196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 215970.60515232588,
            "unit": "ns/iter",
            "extra": "iterations: 4037\ncpu: 215955.73445627926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 939108.0719843488,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 939032.0038910494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 527925.4080904123,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 527882.8673408702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1889.3716354911178,
            "unit": "ns/iter",
            "extra": "iterations: 424319\ncpu: 1889.2705723759702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9686.86780045912,
            "unit": "ns/iter",
            "extra": "iterations: 84554\ncpu: 9686.408685573702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7722.3279646132,
            "unit": "ns/iter",
            "extra": "iterations: 106481\ncpu: 7722.0283430847085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7789.575030399184,
            "unit": "ns/iter",
            "extra": "iterations: 105264\ncpu: 7789.252735978076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7701.718087086252,
            "unit": "ns/iter",
            "extra": "iterations: 107480\ncpu: 7701.357461853364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29929.325386091674,
            "unit": "ns/iter",
            "extra": "iterations: 28102\ncpu: 29927.4820297489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 269948.9282497997,
            "unit": "ns/iter",
            "extra": "iterations: 3331\ncpu: 269945.6319423592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200367.23731926904,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 200358.11338076717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 197402.07476009565,
            "unit": "ns/iter",
            "extra": "iterations: 4481\ncpu: 197400.13389868432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 195926.11257833894,
            "unit": "ns/iter",
            "extra": "iterations: 4468\ncpu: 195914.54789615102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100286.37246178422,
            "unit": "ns/iter",
            "extra": "iterations: 8766\ncpu: 100285.75176819548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189736.80034796204,
            "unit": "ns/iter",
            "extra": "iterations: 4598\ncpu: 189725.85906916088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 191.52841808445532,
            "unit": "ns/iter",
            "extra": "iterations: 3659184\ncpu: 191.5235199979006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1582.8310988273017,
            "unit": "ns/iter",
            "extra": "iterations: 443946\ncpu: 1582.7679492550892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1159.6276699737866,
            "unit": "ns/iter",
            "extra": "iterations: 603564\ncpu: 1159.5988163641296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1145.787906427838,
            "unit": "ns/iter",
            "extra": "iterations: 611763\ncpu: 1145.7956757764002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 893.9553561303957,
            "unit": "ns/iter",
            "extra": "iterations: 784811\ncpu: 893.9087245209324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9540.368718261487,
            "unit": "ns/iter",
            "extra": "iterations: 73845\ncpu: 9540.02437538083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12326.492040265292,
            "unit": "ns/iter",
            "extra": "iterations: 56723\ncpu: 12325.913650547458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3009.0129795394805,
            "unit": "ns/iter",
            "extra": "iterations: 234600\ncpu: 3008.99403239558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2944.273783460237,
            "unit": "ns/iter",
            "extra": "iterations: 233860\ncpu: 2944.1563328486895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3043.01363902876,
            "unit": "ns/iter",
            "extra": "iterations: 235354\ncpu: 3042.904730746024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5585.045525053073,
            "unit": "ns/iter",
            "extra": "iterations: 125711\ncpu: 5584.745964951357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5725.289549306939,
            "unit": "ns/iter",
            "extra": "iterations: 122145\ncpu: 5725.331368455525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1989.0589237680783,
            "unit": "ns/iter",
            "extra": "iterations: 350928\ncpu: 1989.0715474399192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 11186.873605890152,
            "unit": "ns/iter",
            "extra": "iterations: 62495\ncpu: 11186.28210256813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8602.458059332354,
            "unit": "ns/iter",
            "extra": "iterations: 80900\ncpu: 8601.928306551357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8617.877583583768,
            "unit": "ns/iter",
            "extra": "iterations: 80847\ncpu: 8617.451482429768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8522.855439642697,
            "unit": "ns/iter",
            "extra": "iterations: 81862\ncpu: 8522.325376853816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 20040.53739604121,
            "unit": "ns/iter",
            "extra": "iterations: 34870\ncpu: 20040.67679954096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58697.51655910835,
            "unit": "ns/iter",
            "extra": "iterations: 11776\ncpu: 58695.48233695652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48320.923098062805,
            "unit": "ns/iter",
            "extra": "iterations: 14551\ncpu: 48319.42134561254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48526.990627354804,
            "unit": "ns/iter",
            "extra": "iterations: 14617\ncpu: 48526.708626941894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47779.19720241117,
            "unit": "ns/iter",
            "extra": "iterations: 14584\ncpu: 47776.851343938855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28019.37865316325,
            "unit": "ns/iter",
            "extra": "iterations: 25081\ncpu: 28018.66751724372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47844.48941817192,
            "unit": "ns/iter",
            "extra": "iterations: 14695\ncpu: 47842.021095610144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1935.2256528860833,
            "unit": "ns/iter",
            "extra": "iterations: 363195\ncpu: 1935.2171698398959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11059.941353073202,
            "unit": "ns/iter",
            "extra": "iterations: 62953\ncpu: 11059.493590456394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8735.997732923264,
            "unit": "ns/iter",
            "extra": "iterations: 77633\ncpu: 8735.952494428879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8830.759622421809,
            "unit": "ns/iter",
            "extra": "iterations: 79242\ncpu: 8830.559551752787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8590.14712849669,
            "unit": "ns/iter",
            "extra": "iterations: 81473\ncpu: 8589.962318804977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19134.38957449677,
            "unit": "ns/iter",
            "extra": "iterations: 36545\ncpu: 19134.182514707933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56483.53395995142,
            "unit": "ns/iter",
            "extra": "iterations: 12235\ncpu: 56479.460563955545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45207.99707450687,
            "unit": "ns/iter",
            "extra": "iterations: 15382\ncpu: 45208.184891432116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45244.78951456372,
            "unit": "ns/iter",
            "extra": "iterations: 15450\ncpu: 45244.453074433564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45123.555979316494,
            "unit": "ns/iter",
            "extra": "iterations: 15470\ncpu: 45121.56431803554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26694.42071986621,
            "unit": "ns/iter",
            "extra": "iterations: 26255\ncpu: 26693.559322034154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44786.11148818793,
            "unit": "ns/iter",
            "extra": "iterations: 15912\ncpu: 44784.62795374589 ns\nthreads: 1"
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
        "date": 1705960645311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 563.2465766868728,
            "unit": "ns/iter",
            "extra": "iterations: 1212568\ncpu: 563.249896088302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5368.032730000323,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5367.895999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10432.951712752789,
            "unit": "ns/iter",
            "extra": "iterations: 79959\ncpu: 10432.80556285096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15265.875288597763,
            "unit": "ns/iter",
            "extra": "iterations: 54141\ncpu: 15264.856578193972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20226.08383161304,
            "unit": "ns/iter",
            "extra": "iterations: 41476\ncpu: 20225.3905873276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25364.51910561914,
            "unit": "ns/iter",
            "extra": "iterations: 33498\ncpu: 25363.08734849844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30241.78306763909,
            "unit": "ns/iter",
            "extra": "iterations: 27663\ncpu: 30240.581281856623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35196.751270729415,
            "unit": "ns/iter",
            "extra": "iterations: 24002\ncpu: 35136.04282976417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39998.25586931048,
            "unit": "ns/iter",
            "extra": "iterations: 21425\ncpu: 39998.54375729291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 561.413093681596,
            "unit": "ns/iter",
            "extra": "iterations: 1253597\ncpu: 561.3869529043217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 431.24092426985976,
            "unit": "ns/iter",
            "extra": "iterations: 1618272\ncpu: 431.2396185560894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.7650413230387,
            "unit": "ns/iter",
            "extra": "iterations: 1649805\ncpu: 424.7388630777582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 421.5018828278858,
            "unit": "ns/iter",
            "extra": "iterations: 1643804\ncpu: 421.48492155999134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 882.1438777717302,
            "unit": "ns/iter",
            "extra": "iterations: 795168\ncpu: 882.0938468348827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2029.4442286389572,
            "unit": "ns/iter",
            "extra": "iterations: 391814\ncpu: 2029.4096178288678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10782.855739222974,
            "unit": "ns/iter",
            "extra": "iterations: 75620\ncpu: 10782.516530018502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8387.804681003414,
            "unit": "ns/iter",
            "extra": "iterations: 97415\ncpu: 8387.605604886296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8413.681133354732,
            "unit": "ns/iter",
            "extra": "iterations: 97304\ncpu: 8413.254336923472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8902.965012389117,
            "unit": "ns/iter",
            "extra": "iterations: 101293\ncpu: 8902.673432517537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30443.08974924442,
            "unit": "ns/iter",
            "extra": "iterations: 27198\ncpu: 30441.668505037214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259023.95918966687,
            "unit": "ns/iter",
            "extra": "iterations: 3406\ncpu: 259023.60540223075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 202794.97411602325,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 202790.15484169216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 197829.56339327816,
            "unit": "ns/iter",
            "extra": "iterations: 4338\ncpu: 197826.11802674073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201131.6948682306,
            "unit": "ns/iter",
            "extra": "iterations: 4326\ncpu: 201119.71798428165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103485.95684135325,
            "unit": "ns/iter",
            "extra": "iterations: 8434\ncpu: 103484.05264405995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 194171.58650633952,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 194163.10398574892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5075.221330000659,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5075.1959999999835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28490.696857857944,
            "unit": "ns/iter",
            "extra": "iterations: 29534\ncpu: 28489.060066364258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22407.66924232695,
            "unit": "ns/iter",
            "extra": "iterations: 37272\ncpu: 22406.965013951543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22350.9468784094,
            "unit": "ns/iter",
            "extra": "iterations: 37593\ncpu: 22350.16625435587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22134.52228489815,
            "unit": "ns/iter",
            "extra": "iterations: 37761\ncpu: 22134.005985010986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49272.85845920831,
            "unit": "ns/iter",
            "extra": "iterations: 17147\ncpu: 49270.20470053068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 279306.65574293165,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 279294.9093223044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214966.26362038293,
            "unit": "ns/iter",
            "extra": "iterations: 3983\ncpu: 214952.8496108457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216022.183312584,
            "unit": "ns/iter",
            "extra": "iterations: 4015\ncpu: 216015.34246575282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 217127.13686039217,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 217116.7411823159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118446.65405842489,
            "unit": "ns/iter",
            "extra": "iterations: 7429\ncpu: 118441.40530354006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 208136.8171837709,
            "unit": "ns/iter",
            "extra": "iterations: 4190\ncpu: 208129.0930787592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 850594.0681003205,
            "unit": "ns/iter",
            "extra": "iterations: 1116\ncpu: 850563.3512544794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 478083.070964251,
            "unit": "ns/iter",
            "extra": "iterations: 1846\ncpu: 478066.7388949097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1927.5100108626848,
            "unit": "ns/iter",
            "extra": "iterations: 417946\ncpu: 1927.4279452369326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10923.269803973004,
            "unit": "ns/iter",
            "extra": "iterations: 75755\ncpu: 10922.89881855985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8067.244865563903,
            "unit": "ns/iter",
            "extra": "iterations: 102056\ncpu: 8066.773144156146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8106.841833402826,
            "unit": "ns/iter",
            "extra": "iterations: 101058\ncpu: 8106.438876684677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7510.804485189571,
            "unit": "ns/iter",
            "extra": "iterations: 109516\ncpu: 7510.550969721297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29957.486579463028,
            "unit": "ns/iter",
            "extra": "iterations: 27905\ncpu: 29956.26948575503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 267820.11171173217,
            "unit": "ns/iter",
            "extra": "iterations: 3330\ncpu: 267805.10510510654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 202498.9554692877,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 202491.8931262852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 205131.4484273858,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 205120.76780758557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 202245.92570510934,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 202238.72964916306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102095.9310743514,
            "unit": "ns/iter",
            "extra": "iterations: 8647\ncpu: 102090.97953047274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 192934.5919806194,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 192926.8561357128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 192.32064769765825,
            "unit": "ns/iter",
            "extra": "iterations: 3639970\ncpu: 192.31163993109746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1490.919574861867,
            "unit": "ns/iter",
            "extra": "iterations: 469965\ncpu: 1490.8529358569301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1226.015283218562,
            "unit": "ns/iter",
            "extra": "iterations: 570037\ncpu: 1225.953578451922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1147.843867102415,
            "unit": "ns/iter",
            "extra": "iterations: 610576\ncpu: 1147.7793100285612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 887.1006522712382,
            "unit": "ns/iter",
            "extra": "iterations: 788169\ncpu: 887.0631806122872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9431.64163173984,
            "unit": "ns/iter",
            "extra": "iterations: 74203\ncpu: 9431.440777327083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12371.972358592415,
            "unit": "ns/iter",
            "extra": "iterations: 56220\ncpu: 12371.575951618732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2794.55093348046,
            "unit": "ns/iter",
            "extra": "iterations: 250032\ncpu: 2794.4167146605178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2776.226234814054,
            "unit": "ns/iter",
            "extra": "iterations: 252123\ncpu: 2776.140613906689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2746.346350299701,
            "unit": "ns/iter",
            "extra": "iterations: 251185\ncpu: 2746.2444015367178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5229.24684494862,
            "unit": "ns/iter",
            "extra": "iterations: 133833\ncpu: 5229.193846061889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5262.329401834514,
            "unit": "ns/iter",
            "extra": "iterations: 132689\ncpu: 5262.290016504756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1951.551266522086,
            "unit": "ns/iter",
            "extra": "iterations: 356646\ncpu: 1951.4541029480217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10052.596374346627,
            "unit": "ns/iter",
            "extra": "iterations: 69946\ncpu: 10052.579132473611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7981.343858285102,
            "unit": "ns/iter",
            "extra": "iterations: 87443\ncpu: 7981.298674565137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8013.0854972949555,
            "unit": "ns/iter",
            "extra": "iterations: 87956\ncpu: 8012.9996816590665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7971.40946069484,
            "unit": "ns/iter",
            "extra": "iterations: 87520\ncpu: 7971.459095063849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19078.6614456535,
            "unit": "ns/iter",
            "extra": "iterations: 36966\ncpu: 19078.43423686641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55332.578363392284,
            "unit": "ns/iter",
            "extra": "iterations: 12257\ncpu: 55332.39781349414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44974.842956709545,
            "unit": "ns/iter",
            "extra": "iterations: 15639\ncpu: 44974.295031651185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44680.49341310033,
            "unit": "ns/iter",
            "extra": "iterations: 15713\ncpu: 44680.767517342356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44387.26208378215,
            "unit": "ns/iter",
            "extra": "iterations: 15827\ncpu: 44386.58621343264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25979.61850509964,
            "unit": "ns/iter",
            "extra": "iterations: 26771\ncpu: 25979.77662395901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44677.90011473621,
            "unit": "ns/iter",
            "extra": "iterations: 15688\ncpu: 44677.47322794535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1939.1260873538886,
            "unit": "ns/iter",
            "extra": "iterations: 361083\ncpu: 1939.11815289007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10135.153831770289,
            "unit": "ns/iter",
            "extra": "iterations: 69524\ncpu: 10134.93613716126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8222.058142671298,
            "unit": "ns/iter",
            "extra": "iterations: 85273\ncpu: 8222.10781841838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8120.5493969777135,
            "unit": "ns/iter",
            "extra": "iterations: 86564\ncpu: 8120.476179474164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8029.488792421828,
            "unit": "ns/iter",
            "extra": "iterations: 87307\ncpu: 8029.40314064165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18620.740311521186,
            "unit": "ns/iter",
            "extra": "iterations: 37622\ncpu: 18620.88405720058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55504.53835147856,
            "unit": "ns/iter",
            "extra": "iterations: 12581\ncpu: 55503.44964629157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43931.30144142814,
            "unit": "ns/iter",
            "extra": "iterations: 15887\ncpu: 43931.5729842013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44011.34348838732,
            "unit": "ns/iter",
            "extra": "iterations: 15887\ncpu: 44011.33001825384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44016.56759481203,
            "unit": "ns/iter",
            "extra": "iterations: 15874\ncpu: 44016.448280207274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25737.196690774475,
            "unit": "ns/iter",
            "extra": "iterations: 27378\ncpu: 25737.15757177331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43725.60897316653,
            "unit": "ns/iter",
            "extra": "iterations: 16137\ncpu: 43725.109995661514 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}