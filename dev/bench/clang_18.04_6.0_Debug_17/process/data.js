window.BENCHMARK_DATA = {
  "lastUpdate": 1705959208171,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-6.0 18.04 Debug c++-17": [
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
        "date": 1702489555724,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16153.228187920602,
            "unit": "ns/iter",
            "extra": "iterations: 43359\ncpu: 16152.097603727023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128686.37648673734,
            "unit": "ns/iter",
            "extra": "iterations: 6558\ncpu: 128682.96736810003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 242750.42821298755,
            "unit": "ns/iter",
            "extra": "iterations: 3587\ncpu: 242740.3401170895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 355401.045697818,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 355395.7595718402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 467734.6410531925,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 467696.3997850615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 580563.8853333524,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 580522.7333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 557571.3270000052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557553.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 649741.0209999543,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649742.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 739520.7808000123,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 739473.5999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12930.092125779069,
            "unit": "ns/iter",
            "extra": "iterations: 53872\ncpu: 12929.722304722309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10946.80816313775,
            "unit": "ns/iter",
            "extra": "iterations: 64044\ncpu: 10946.813128474187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10875.989102763308,
            "unit": "ns/iter",
            "extra": "iterations: 64420\ncpu: 10875.721825520022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10883.631515132414,
            "unit": "ns/iter",
            "extra": "iterations: 64331\ncpu: 10883.634639598353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18941.237353043354,
            "unit": "ns/iter",
            "extra": "iterations: 37341\ncpu: 18940.253340831838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54976.97359999734,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54975.81 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 293281.85572649864,
            "unit": "ns/iter",
            "extra": "iterations: 2925\ncpu: 293271.1111111111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 229977.9679504374,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 229978.13089146273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 232795.11059655543,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 232783.9825660582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 228722.84726301735,
            "unit": "ns/iter",
            "extra": "iterations: 3745\ncpu: 228716.87583444608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 621572.6855563163,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 621541.0504492052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4057983.5764191453,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4057786.462882101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3277343.505300404,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3277216.961130742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3314203.0857143416,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3313967.8571428508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3252166.2377621634,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3252109.7902097907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1918846.3945720675,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1918666.5970772442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3193043.4158075233,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3192852.577319583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12376397.270588769,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12375540.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5518986.100000233,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5518472.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16071786.48484881,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16070484.848484864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62882.56739857262,
            "unit": "ns/iter",
            "extra": "iterations: 13754\ncpu: 62877.90460956796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 322837.1202412492,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 322815.30343007995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 257877.78711230244,
            "unit": "ns/iter",
            "extra": "iterations: 3321\ncpu: 257860.82505269477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 259998.02568751143,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 259998.0356603191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 261446.34107578796,
            "unit": "ns/iter",
            "extra": "iterations: 3272\ncpu: 261434.32151589234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 584024.6401617138,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 584025.0673854449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4125714.5955556654,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4125527.5555555373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3330585.931899808,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3330433.691756283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3354211.1805053987,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3354179.783393491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3323718.696428557,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3323615.3571428573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1959686.0972515792,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1959613.5306554043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3235439.26132403,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3235312.1951219477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12622586.797618851,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12622307.142857198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5603814.74000053,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5603517.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52658.54699999864,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52657.71999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282801.913889806,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 282790.4322005928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 224255.44558090586,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 224250.8523472317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 229073.19898639736,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 229061.21632435298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 230382.13097156066,
            "unit": "ns/iter",
            "extra": "iterations: 3726\ncpu: 230376.113794956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 560494.2023195777,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 560475.3865979416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4066442.3537119213,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4066408.733624425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3279466.4028269527,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3279396.4664310813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3326014.2491102433,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3325762.2775800577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3256906.951049035,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3256908.041958042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1925688.8731808343,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1925612.4740124804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3210280.3482757737,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3203691.724137941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6614.54912072837,
            "unit": "ns/iter",
            "extra": "iterations: 105485\ncpu: 6613.930890647968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37222.74343992593,
            "unit": "ns/iter",
            "extra": "iterations: 18826\ncpu: 37220.85944969738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29044.98505909962,
            "unit": "ns/iter",
            "extra": "iterations: 24028\ncpu: 29041.847011819515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27869.833386557533,
            "unit": "ns/iter",
            "extra": "iterations: 25052\ncpu: 27868.349832348642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23094.42808681519,
            "unit": "ns/iter",
            "extra": "iterations: 30363\ncpu: 23091.739946645655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 162470.17121702098,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 162455.4372975466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 272328.8298948984,
            "unit": "ns/iter",
            "extra": "iterations: 2569\ncpu: 272294.7061113228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69426.59301518295,
            "unit": "ns/iter",
            "extra": "iterations: 10079\ncpu: 69424.9032642129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 68987.28403180014,
            "unit": "ns/iter",
            "extra": "iterations: 10189\ncpu: 68982.25537344228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 68916.84309086791,
            "unit": "ns/iter",
            "extra": "iterations: 10146\ncpu: 68911.15710624849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142563.1419236205,
            "unit": "ns/iter",
            "extra": "iterations: 4897\ncpu: 142551.48049826387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 128725.52273145255,
            "unit": "ns/iter",
            "extra": "iterations: 5433\ncpu: 128712.2952328365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43219.10043992716,
            "unit": "ns/iter",
            "extra": "iterations: 16139\ncpu: 43216.12243633398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 211156.7810794423,
            "unit": "ns/iter",
            "extra": "iterations: 3298\ncpu: 211140.90357792674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 170124.50983247795,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 170113.44986647286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 167831.1235764478,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 167814.3687908881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 168797.3192669516,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 168785.84518929213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 324157.86898148985,
            "unit": "ns/iter",
            "extra": "iterations: 2160\ncpu: 324123.70370370604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1169391.8612041194,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1169393.8127090302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 990963.3734087797,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 990892.7864214933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 992705.1491477425,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 992659.5170454435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 985189.639943646,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 985110.5485232131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 657685.9031954719,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 657640.3195488735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 974849.0320781093,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 974849.7907949884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43430.025128744324,
            "unit": "ns/iter",
            "extra": "iterations: 16117\ncpu: 43427.48030030358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 211461.55515260997,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 211450.0453309148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172540.01995566356,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 172533.80142892507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 171181.19785314557,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 171178.1410100046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170472.8541514585,
            "unit": "ns/iter",
            "extra": "iterations: 4107\ncpu: 170450.10956902828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323420.121169935,
            "unit": "ns/iter",
            "extra": "iterations: 2154\ncpu: 323420.61281336873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1166692.0649999685,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1166624.0000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 983924.451339931,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 983853.0324400556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 988439.9957686153,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 988345.9802538789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 987000.9211266746,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 986940.4225352136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 654450.0242763018,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 654440.9897292248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 972304.2893258441,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 972213.0617977406 ns\nthreads: 1"
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
        "date": 1702489555724,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16153.228187920602,
            "unit": "ns/iter",
            "extra": "iterations: 43359\ncpu: 16152.097603727023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128686.37648673734,
            "unit": "ns/iter",
            "extra": "iterations: 6558\ncpu: 128682.96736810003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 242750.42821298755,
            "unit": "ns/iter",
            "extra": "iterations: 3587\ncpu: 242740.3401170895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 355401.045697818,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 355395.7595718402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 467734.6410531925,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 467696.3997850615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 580563.8853333524,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 580522.7333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 557571.3270000052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557553.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 649741.0209999543,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649742.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 739520.7808000123,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 739473.5999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12930.092125779069,
            "unit": "ns/iter",
            "extra": "iterations: 53872\ncpu: 12929.722304722309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10946.80816313775,
            "unit": "ns/iter",
            "extra": "iterations: 64044\ncpu: 10946.813128474187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10875.989102763308,
            "unit": "ns/iter",
            "extra": "iterations: 64420\ncpu: 10875.721825520022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10883.631515132414,
            "unit": "ns/iter",
            "extra": "iterations: 64331\ncpu: 10883.634639598353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18941.237353043354,
            "unit": "ns/iter",
            "extra": "iterations: 37341\ncpu: 18940.253340831838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54976.97359999734,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54975.81 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 293281.85572649864,
            "unit": "ns/iter",
            "extra": "iterations: 2925\ncpu: 293271.1111111111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 229977.9679504374,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 229978.13089146273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 232795.11059655543,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 232783.9825660582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 228722.84726301735,
            "unit": "ns/iter",
            "extra": "iterations: 3745\ncpu: 228716.87583444608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 621572.6855563163,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 621541.0504492052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4057983.5764191453,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4057786.462882101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3277343.505300404,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3277216.961130742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3314203.0857143416,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3313967.8571428508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3252166.2377621634,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3252109.7902097907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1918846.3945720675,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1918666.5970772442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3193043.4158075233,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3192852.577319583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12376397.270588769,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12375540.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5518986.100000233,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5518472.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16071786.48484881,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16070484.848484864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62882.56739857262,
            "unit": "ns/iter",
            "extra": "iterations: 13754\ncpu: 62877.90460956796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 322837.1202412492,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 322815.30343007995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 257877.78711230244,
            "unit": "ns/iter",
            "extra": "iterations: 3321\ncpu: 257860.82505269477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 259998.02568751143,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 259998.0356603191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 261446.34107578796,
            "unit": "ns/iter",
            "extra": "iterations: 3272\ncpu: 261434.32151589234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 584024.6401617138,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 584025.0673854449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4125714.5955556654,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4125527.5555555373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3330585.931899808,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3330433.691756283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3354211.1805053987,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3354179.783393491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3323718.696428557,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3323615.3571428573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1959686.0972515792,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1959613.5306554043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3235439.26132403,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3235312.1951219477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12622586.797618851,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12622307.142857198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5603814.74000053,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5603517.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52658.54699999864,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52657.71999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282801.913889806,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 282790.4322005928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 224255.44558090586,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 224250.8523472317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 229073.19898639736,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 229061.21632435298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 230382.13097156066,
            "unit": "ns/iter",
            "extra": "iterations: 3726\ncpu: 230376.113794956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 560494.2023195777,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 560475.3865979416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4066442.3537119213,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4066408.733624425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3279466.4028269527,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3279396.4664310813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3326014.2491102433,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3325762.2775800577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3256906.951049035,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3256908.041958042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1925688.8731808343,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1925612.4740124804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3210280.3482757737,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3203691.724137941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6614.54912072837,
            "unit": "ns/iter",
            "extra": "iterations: 105485\ncpu: 6613.930890647968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37222.74343992593,
            "unit": "ns/iter",
            "extra": "iterations: 18826\ncpu: 37220.85944969738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29044.98505909962,
            "unit": "ns/iter",
            "extra": "iterations: 24028\ncpu: 29041.847011819515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27869.833386557533,
            "unit": "ns/iter",
            "extra": "iterations: 25052\ncpu: 27868.349832348642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23094.42808681519,
            "unit": "ns/iter",
            "extra": "iterations: 30363\ncpu: 23091.739946645655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 162470.17121702098,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 162455.4372975466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 272328.8298948984,
            "unit": "ns/iter",
            "extra": "iterations: 2569\ncpu: 272294.7061113228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69426.59301518295,
            "unit": "ns/iter",
            "extra": "iterations: 10079\ncpu: 69424.9032642129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 68987.28403180014,
            "unit": "ns/iter",
            "extra": "iterations: 10189\ncpu: 68982.25537344228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 68916.84309086791,
            "unit": "ns/iter",
            "extra": "iterations: 10146\ncpu: 68911.15710624849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142563.1419236205,
            "unit": "ns/iter",
            "extra": "iterations: 4897\ncpu: 142551.48049826387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 128725.52273145255,
            "unit": "ns/iter",
            "extra": "iterations: 5433\ncpu: 128712.2952328365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43219.10043992716,
            "unit": "ns/iter",
            "extra": "iterations: 16139\ncpu: 43216.12243633398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 211156.7810794423,
            "unit": "ns/iter",
            "extra": "iterations: 3298\ncpu: 211140.90357792674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 170124.50983247795,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 170113.44986647286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 167831.1235764478,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 167814.3687908881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 168797.3192669516,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 168785.84518929213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 324157.86898148985,
            "unit": "ns/iter",
            "extra": "iterations: 2160\ncpu: 324123.70370370604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1169391.8612041194,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1169393.8127090302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 990963.3734087797,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 990892.7864214933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 992705.1491477425,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 992659.5170454435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 985189.639943646,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 985110.5485232131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 657685.9031954719,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 657640.3195488735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 974849.0320781093,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 974849.7907949884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43430.025128744324,
            "unit": "ns/iter",
            "extra": "iterations: 16117\ncpu: 43427.48030030358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 211461.55515260997,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 211450.0453309148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172540.01995566356,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 172533.80142892507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 171181.19785314557,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 171178.1410100046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170472.8541514585,
            "unit": "ns/iter",
            "extra": "iterations: 4107\ncpu: 170450.10956902828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323420.121169935,
            "unit": "ns/iter",
            "extra": "iterations: 2154\ncpu: 323420.61281336873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1166692.0649999685,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1166624.0000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 983924.451339931,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 983853.0324400556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 988439.9957686153,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 988345.9802538789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 987000.9211266746,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 986940.4225352136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 654450.0242763018,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 654440.9897292248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 972304.2893258441,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 972213.0617977406 ns\nthreads: 1"
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
        "date": 1702492159194,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16354.74313378669,
            "unit": "ns/iter",
            "extra": "iterations: 42964\ncpu: 16353.698445209944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 132111.3334374019,
            "unit": "ns/iter",
            "extra": "iterations: 6406\ncpu: 132096.64377146427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 250240.02861230102,
            "unit": "ns/iter",
            "extra": "iterations: 3495\ncpu: 250230.9585121602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 366063.63904080633,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 365225.78880942357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 481364.13651499565,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 481319.47835738084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 596654.8237311454,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 596617.9698216738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 574122.5970000414,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574075.2999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 663854.8832853121,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 663818.0115273776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 766337.3687242942,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 766270.6995884771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13219.712994137053,
            "unit": "ns/iter",
            "extra": "iterations: 52870\ncpu: 13219.421221864954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11108.462176461699,
            "unit": "ns/iter",
            "extra": "iterations: 62937\ncpu: 11108.311486089246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11086.240302848038,
            "unit": "ns/iter",
            "extra": "iterations: 63266\ncpu: 11085.881832263765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11096.932324639502,
            "unit": "ns/iter",
            "extra": "iterations: 63184\ncpu: 11096.891618131194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18708.643761543994,
            "unit": "ns/iter",
            "extra": "iterations: 37357\ncpu: 18708.052038439906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54513.0094000001,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54512.04999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 299723.9179104476,
            "unit": "ns/iter",
            "extra": "iterations: 2814\ncpu: 299717.12864250166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 230659.9794539013,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 230659.3673965931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 234634.50205874364,
            "unit": "ns/iter",
            "extra": "iterations: 3643\ncpu: 234623.6892670871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226382.98087142003,
            "unit": "ns/iter",
            "extra": "iterations: 3764\ncpu: 226377.57704569545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 636192.29874654,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 636160.515320334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4145570.8222222007,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4145439.9999999856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3327427.417266229,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3327302.5179856066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3382177.1636363254,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3382023.6363636334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3331331.7419355875,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3331288.530465942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1952176.3029660897,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1952100.2118644062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3264854.26056322,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3264660.563380282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12471247.25882379,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12471082.352941168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5620621.0200002715,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5620367.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16212621.538461637,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16211823.076923082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61480.146674370066,
            "unit": "ns/iter",
            "extra": "iterations: 13847\ncpu: 61479.98844515074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 326750.8789032676,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 326745.88728103484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 255281.12741313808,
            "unit": "ns/iter",
            "extra": "iterations: 3367\ncpu: 255272.85417285346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 262010.7484047352,
            "unit": "ns/iter",
            "extra": "iterations: 3291\ncpu: 262004.86174415197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 255758.17421289644,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 255752.38380809594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 591406.1380013648,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 591404.3507817809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4201564.330316832,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4201460.633484177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3391306.396363647,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3390967.6363636395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3421489.8523987187,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3421326.568265687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3398463.9671535185,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3398206.204379564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1982775.3347546821,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1982636.4605543702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3302062.202847018,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3301789.3238434237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12682913.797618767,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12682295.238095164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5660764.470000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5660368.000000062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52163.64489999705,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52163.57000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 286730.4645958604,
            "unit": "ns/iter",
            "extra": "iterations: 2994\ncpu: 286723.01269204967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 224215.49829797997,
            "unit": "ns/iter",
            "extra": "iterations: 3819\ncpu: 224212.38544121594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 229373.26360954883,
            "unit": "ns/iter",
            "extra": "iterations: 3729\ncpu: 229361.2764816296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 226117.33985720205,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 226108.38402539026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 557001.6344916321,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 556974.5817245814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4169186.513393137,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4169016.5178571716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3376264.314079227,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3376116.967509015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3396009.0109092724,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3395897.4545454495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3370149.7148015797,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3370115.162454882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1940973.8933055075,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1940834.7280334798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3259944.2307691723,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3259767.132867154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6650.0685091815785,
            "unit": "ns/iter",
            "extra": "iterations: 105110\ncpu: 6649.620397678601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37440.518294963986,
            "unit": "ns/iter",
            "extra": "iterations: 18721\ncpu: 37437.94669088182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29516.553963554157,
            "unit": "ns/iter",
            "extra": "iterations: 24637\ncpu: 29514.815115476704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30226.275807882444,
            "unit": "ns/iter",
            "extra": "iterations: 24818\ncpu: 30224.11556128614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23224.566824742742,
            "unit": "ns/iter",
            "extra": "iterations: 29944\ncpu: 23223.10646540206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 163787.43060747892,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 163776.54205607346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 253000.01515697836,
            "unit": "ns/iter",
            "extra": "iterations: 2771\ncpu: 252980.3680981575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70748.76856998533,
            "unit": "ns/iter",
            "extra": "iterations: 9895\ncpu: 70743.39565437169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70443.79423868518,
            "unit": "ns/iter",
            "extra": "iterations: 9963\ncpu: 70439.74706413754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70515.58071680693,
            "unit": "ns/iter",
            "extra": "iterations: 9905\ncpu: 70512.19586067661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 143474.35387468222,
            "unit": "ns/iter",
            "extra": "iterations: 4852\ncpu: 143464.9010717223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131703.7763157955,
            "unit": "ns/iter",
            "extra": "iterations: 5320\ncpu: 131693.8157894716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43551.96601519113,
            "unit": "ns/iter",
            "extra": "iterations: 16066\ncpu: 43549.39624050825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 215002.09660493853,
            "unit": "ns/iter",
            "extra": "iterations: 3240\ncpu: 214984.84567900962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 171954.47897310747,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 171945.134474329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173473.6331931938,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 173457.60573831233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 171645.52048073665,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 171634.85405935903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 320597.66162311623,
            "unit": "ns/iter",
            "extra": "iterations: 2181\ncpu: 320581.3388353958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1209777.5440414005,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1209729.360967185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1005139.3615494843,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1005058.1061693141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1018055.7481804655,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1017992.430858818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1009038.4813217913,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1008957.0402298827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 663680.3948862969,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 663635.6060605982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 997696.3262107525,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 997693.7321937224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43799.282218188535,
            "unit": "ns/iter",
            "extra": "iterations: 15977\ncpu: 43797.13963823047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 212538.9554140092,
            "unit": "ns/iter",
            "extra": "iterations: 3297\ncpu: 212532.05944798648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 173924.7868689374,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 173906.96344193176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176053.23200804953,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 176051.082033214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174021.80720496035,
            "unit": "ns/iter",
            "extra": "iterations: 4025\ncpu: 174011.67701863236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 318870.7487460087,
            "unit": "ns/iter",
            "extra": "iterations: 2193\ncpu: 318861.0123118981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1209228.5197934397,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1209155.0774526738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 998461.9971264129,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 998446.9827586104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1016385.9202898361,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1016348.1159420281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1006472.0430416951,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1006405.4519368844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 658497.0846660928,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 658478.457196606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 994830.6946022969,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 994774.9999999932 ns\nthreads: 1"
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
        "date": 1702503242493,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16266.15571617809,
            "unit": "ns/iter",
            "extra": "iterations: 43027\ncpu: 16265.551862783834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129552.37582451222,
            "unit": "ns/iter",
            "extra": "iterations: 6519\ncpu: 129541.2793373217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 244355.69520067473,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 244338.89980353642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 357787.4722221867,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 357766.45936981775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 473998.7766937293,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 473970.5149051487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 585777.8741450435,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 585759.097127223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 563599.3439999538,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 653314.2160000125,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653297.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 744961.3633440596,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 744920.1768488749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13007.854952612468,
            "unit": "ns/iter",
            "extra": "iterations: 53810\ncpu: 13007.455863222449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10948.866717751333,
            "unit": "ns/iter",
            "extra": "iterations: 63947\ncpu: 10948.369743693991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10944.968706437392,
            "unit": "ns/iter",
            "extra": "iterations: 63847\ncpu: 10944.675552492692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10992.91224560007,
            "unit": "ns/iter",
            "extra": "iterations: 63974\ncpu: 10992.48132053648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18834.01079954527,
            "unit": "ns/iter",
            "extra": "iterations: 36946\ncpu: 18833.527310128284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55200.11700000396,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55198.64000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 283477.8810470686,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 283471.96819085465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 227190.68819778823,
            "unit": "ns/iter",
            "extra": "iterations: 3762\ncpu: 227185.9117490695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 227185.28128342022,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 227177.54010695225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226335.41301461429,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 226329.61487383797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 622802.1619572553,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 622786.4231564433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4078479.6899565286,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4078275.1091702995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3284267.7801418277,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3284169.8581560357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3307103.1957296915,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3306991.4590747324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3300074.8687944296,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3299883.333333337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1931821.5836820593,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1931724.2677824306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3209170.310104917,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3208991.986062722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12336250.058139771,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12335691.860465106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5449239.900000293,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5448806.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16081289.318182454,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16080368.181818178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60847.53202254979,
            "unit": "ns/iter",
            "extra": "iterations: 13834\ncpu: 60844.89663148762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 314636.4101905924,
            "unit": "ns/iter",
            "extra": "iterations: 2728\ncpu: 314625.6964809389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 249345.85668509974,
            "unit": "ns/iter",
            "extra": "iterations: 3433\ncpu: 249334.8674628611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 253999.95738384218,
            "unit": "ns/iter",
            "extra": "iterations: 3379\ncpu: 253991.4175791662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 255238.76221693997,
            "unit": "ns/iter",
            "extra": "iterations: 3356\ncpu: 255209.5351609057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 589177.3464406731,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 589117.6271186454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4152060.0714284633,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4151721.428571437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3347432.489208619,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3347018.345323735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3354724.5323742894,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3354503.5971223065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3355666.694244601,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3355396.4028777075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1967446.770700558,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1967225.690021227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3249848.0034966753,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3249538.46153845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12571728.790122608,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 12553722.222222239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5410903.260000168,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5410739.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53053.83470000606,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53051.549999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 275225.8516853693,
            "unit": "ns/iter",
            "extra": "iterations: 3115\ncpu: 275215.85874799365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 219577.02875480047,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 219557.8947368427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 226986.07615020522,
            "unit": "ns/iter",
            "extra": "iterations: 3782\ncpu: 226967.1602326805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 224112.77555847046,
            "unit": "ns/iter",
            "extra": "iterations: 3805\ncpu: 224097.16162943473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 562343.0797148136,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 562300.7128969529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4070548.837719563,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4070371.9298245395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3290052.419014049,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3289807.7464788714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3299118.510638175,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3298942.1985815642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3318461.4432627363,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3318284.397163121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1928214.7775467949,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1928091.6839916797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3199864.4413792575,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3199726.8965517087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6631.747679484583,
            "unit": "ns/iter",
            "extra": "iterations: 105580\ncpu: 6631.508808486445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36826.362027186,
            "unit": "ns/iter",
            "extra": "iterations: 18982\ncpu: 36825.87187862183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29012.782352208338,
            "unit": "ns/iter",
            "extra": "iterations: 24071\ncpu: 29011.545012670893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28832.614045938233,
            "unit": "ns/iter",
            "extra": "iterations: 24249\ncpu: 28832.273495814166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22955.99117550265,
            "unit": "ns/iter",
            "extra": "iterations: 30370\ncpu: 22955.120184392526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 163041.27713086718,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 163037.89007917975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 272900.7856586065,
            "unit": "ns/iter",
            "extra": "iterations: 2566\ncpu: 272888.347622754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69766.08525437386,
            "unit": "ns/iter",
            "extra": "iterations: 10064\ncpu: 69760.52265500775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69586.19023606532,
            "unit": "ns/iter",
            "extra": "iterations: 8726\ncpu: 69580.93055237248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69252.75810128136,
            "unit": "ns/iter",
            "extra": "iterations: 10091\ncpu: 69248.04281042457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 143366.97278350612,
            "unit": "ns/iter",
            "extra": "iterations: 4850\ncpu: 143363.44329896662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 129111.09399189103,
            "unit": "ns/iter",
            "extra": "iterations: 5426\ncpu: 129103.55694802786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43367.145958681955,
            "unit": "ns/iter",
            "extra": "iterations: 16121\ncpu: 43365.585261460474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 210849.86981358286,
            "unit": "ns/iter",
            "extra": "iterations: 3326\ncpu: 210842.66386049337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 168387.3027764518,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 168381.64193393846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 166576.6590639325,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 166560.7982893808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 169585.4723363345,
            "unit": "ns/iter",
            "extra": "iterations: 4139\ncpu: 169573.76177820563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 323334.9067835452,
            "unit": "ns/iter",
            "extra": "iterations: 2167\ncpu: 323325.5652976488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1173680.073825518,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1173639.261744966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 985277.7651195358,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 985241.6315049218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 991073.4275569281,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 991014.7727272682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 986579.6357242943,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 986532.6300984586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 648741.8367346807,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 648717.6252319115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 970754.5249999801,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 970718.7500000102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43485.89833767307,
            "unit": "ns/iter",
            "extra": "iterations: 16122\ncpu: 43484.40640119115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 209773.94186395511,
            "unit": "ns/iter",
            "extra": "iterations: 3337\ncpu: 209769.31375487117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 170178.5730610213,
            "unit": "ns/iter",
            "extra": "iterations: 4113\ncpu: 170167.44468757734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 171221.2860981917,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 171212.53359394186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 169776.0559864202,
            "unit": "ns/iter",
            "extra": "iterations: 4126\ncpu: 169770.8191953477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 324751.50578437594,
            "unit": "ns/iter",
            "extra": "iterations: 2161\ncpu: 324740.2591392877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1169217.9262981226,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1169177.2194304988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 983758.9422534325,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 983716.9014084615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 987281.9239437287,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 987245.4929577512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1002022.6346967908,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1001981.9464034005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 652197.6518518646,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 652147.0370370331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 972095.4861112179,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 972039.8611111057 ns\nthreads: 1"
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
        "date": 1702506068108,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16438.99292995725,
            "unit": "ns/iter",
            "extra": "iterations: 42574\ncpu: 16438.83121153756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 133019.77629093145,
            "unit": "ns/iter",
            "extra": "iterations: 6352\ncpu: 133019.19080604537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 252878.1888598797,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 252860.25529445903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 369508.0808728989,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 369502.43902439007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 488613.1931498922,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 488502.8074115662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 606418.9246861674,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 606404.2538354258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 583911.229000023,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583880.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 676415.2934702911,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 676408.4372707264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 773093.3691666545,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 773053.6666666677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13295.129015701295,
            "unit": "ns/iter",
            "extra": "iterations: 52606\ncpu: 13294.751549252942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11119.074096443775,
            "unit": "ns/iter",
            "extra": "iterations: 62918\ncpu: 11118.587685558992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11157.745732979321,
            "unit": "ns/iter",
            "extra": "iterations: 63276\ncpu: 11157.309248372218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11174.138100026668,
            "unit": "ns/iter",
            "extra": "iterations: 62643\ncpu: 11173.744871733476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18938.72913219108,
            "unit": "ns/iter",
            "extra": "iterations: 36863\ncpu: 18938.173778585566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56583.33310000217,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56580.860000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 281264.2051871197,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 281259.6520026265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 228791.13746992106,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 228783.25755549624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 228331.75053248112,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 228322.55058572948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 227037.80095796386,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 227029.72325705155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 629054.9257460011,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 629034.4205412891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4302080.138248806,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4301959.4470046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3497080.750943247,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3497016.98113208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3502283.124528319,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3502188.301886793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3456822.736059572,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3456773.9776951745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2061138.2427616876,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2061110.2449888687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3393220.589743625,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3393102.9304029383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13107478.209876942,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13095039.50617285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5772440.990000405,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5771489.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16653013.619047452,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16652679.365079401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62391.658440134204,
            "unit": "ns/iter",
            "extra": "iterations: 13655\ncpu: 62389.77663859385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 312445.6585365772,
            "unit": "ns/iter",
            "extra": "iterations: 2747\ncpu: 312438.36912995914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 253022.69398584787,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 253013.2959905644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 257516.29006267493,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 257511.57863324275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 258252.3316280432,
            "unit": "ns/iter",
            "extra": "iterations: 3323\ncpu: 258237.13511886683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 592645.3297002704,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 592631.8801089902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4356077.799065596,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4356000.934579414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3540626.718631108,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3540485.171102672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3544395.78707232,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3544274.5247148415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3505288.1616541655,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3505230.451127816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2086972.5214446061,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2086893.90519188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3415923.4705883367,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3415784.92647059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13283444.174999915,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13282957.49999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5725901.20999962,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5725819.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53540.84009999838,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53538.249999999716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 272834.03635204566,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 272823.21428571414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 221237.5811369485,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 221232.9198966392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 229594.6654195621,
            "unit": "ns/iter",
            "extra": "iterations: 3742\ncpu: 229590.45964724736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 222955.04812974093,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 222946.87418258013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 576038.3614058516,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 576015.3846153866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4273101.133027563,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4272817.431192678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3483151.4868913675,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3483028.0898876446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3482355.756554288,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3482248.689138574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3568489.597785845,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3568189.2988929832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2060362.8270509338,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2060298.226164067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3369709.8086642427,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3369537.184115524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6579.7186730340945,
            "unit": "ns/iter",
            "extra": "iterations: 106378\ncpu: 6579.418676794062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37502.88851423769,
            "unit": "ns/iter",
            "extra": "iterations: 18684\ncpu: 37500.11239563258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29353.760734664003,
            "unit": "ns/iter",
            "extra": "iterations: 24011\ncpu: 29353.138145016826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28338.785460275285,
            "unit": "ns/iter",
            "extra": "iterations: 24746\ncpu: 28337.420189121523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23169.493299361147,
            "unit": "ns/iter",
            "extra": "iterations: 30221\ncpu: 23168.816385956863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 163318.1437223349,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 163308.61868157476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 280801.0642054747,
            "unit": "ns/iter",
            "extra": "iterations: 2492\ncpu: 280781.8218298545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71369.2196738055,
            "unit": "ns/iter",
            "extra": "iterations: 9810\ncpu: 71367.6350662582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71696.91249742391,
            "unit": "ns/iter",
            "extra": "iterations: 9714\ncpu: 71697.33374511033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 71076.53093934277,
            "unit": "ns/iter",
            "extra": "iterations: 9858\ncpu: 71073.73706634065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 149914.64895432463,
            "unit": "ns/iter",
            "extra": "iterations: 4686\ncpu: 149912.2279129329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 133467.97539106352,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 133463.9450591379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43782.2094116157,
            "unit": "ns/iter",
            "extra": "iterations: 15959\ncpu: 43780.76320571452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 212277.106415336,
            "unit": "ns/iter",
            "extra": "iterations: 3289\ncpu: 212273.57859531997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 169460.63900313413,
            "unit": "ns/iter",
            "extra": "iterations: 4133\ncpu: 169450.32663924617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 170201.98103573843,
            "unit": "ns/iter",
            "extra": "iterations: 4113\ncpu: 170194.2134694885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 171383.52982884724,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 171370.92909535326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 319533.69465997216,
            "unit": "ns/iter",
            "extra": "iterations: 2191\ncpu: 319522.82062984916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1223401.7333334552,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1223305.087719302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1032549.9261447397,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1032541.0635155154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1039687.5393760038,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1039647.8454680433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1025077.5879765776,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1025047.2140762352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 682854.6983511166,
            "unit": "ns/iter",
            "extra": "iterations: 1031\ncpu: 682812.7061105656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1014055.8914616203,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1014050.5065122939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43772.12457028534,
            "unit": "ns/iter",
            "extra": "iterations: 15999\ncpu: 43770.56691043129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 213264.77236761994,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 213255.50821667767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172583.11734188147,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 172579.81719367582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 172834.36891524907,
            "unit": "ns/iter",
            "extra": "iterations: 4047\ncpu: 172832.91326909125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 173214.6894841409,
            "unit": "ns/iter",
            "extra": "iterations: 4032\ncpu: 173210.14384920715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 320644.729866571,
            "unit": "ns/iter",
            "extra": "iterations: 2173\ncpu: 320626.78324896184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1218405.6313042121,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1218382.2608695594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1048168.8988269807,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1045286.6568914937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1029678.5147058994,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1029615.4411764622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1025960.2536656732,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1025945.8944281518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 677165.312621366,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 677128.2524271879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1013320.1391304415,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1013303.0434782741 ns\nthreads: 1"
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
        "date": 1705574878054,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16303.60269917565,
            "unit": "ns/iter",
            "extra": "iterations: 42902\ncpu: 16303.298214535453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129264.08956137711,
            "unit": "ns/iter",
            "extra": "iterations: 6543\ncpu: 129251.99449793674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 244500.88786093492,
            "unit": "ns/iter",
            "extra": "iterations: 3567\ncpu: 244496.13120269135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 356014.4632231167,
            "unit": "ns/iter",
            "extra": "iterations: 2420\ncpu: 355999.6280991735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 471226.2022838612,
            "unit": "ns/iter",
            "extra": "iterations: 1839\ncpu: 471208.0478520931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 582025.2655935234,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 582025.4862508383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 561175.4740000379,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561173.7000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 650385.0180000655,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650348.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 748207.8916532125,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 747391.4927768859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13098.344903355886,
            "unit": "ns/iter",
            "extra": "iterations: 53702\ncpu: 13098.353878812723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11107.659594212793,
            "unit": "ns/iter",
            "extra": "iterations: 63580\ncpu: 11107.642340358594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10910.023631725915,
            "unit": "ns/iter",
            "extra": "iterations: 64278\ncpu: 10910.034537477823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10977.755106840073,
            "unit": "ns/iter",
            "extra": "iterations: 63787\ncpu: 10977.645915311896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18655.247684134825,
            "unit": "ns/iter",
            "extra": "iterations: 37459\ncpu: 18654.932059051225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55853.73430000118,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55853.48000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 287185.6630872266,
            "unit": "ns/iter",
            "extra": "iterations: 2980\ncpu: 287180.8389261751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 228934.2436548425,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 228929.01415976477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 227716.65504392915,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 227713.86744743134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 229154.00269323486,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 229146.94317263595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 620546.0206896188,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 620522.4137931057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4042979.799126692,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4042882.5327510885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3300841.1843971894,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3300799.6453900742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3332329.2500000433,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3332134.2857142864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3303261.8540925807,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3303093.9501779415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1918464.280083093,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1918370.1244813234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3209996.607638901,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3209934.3749999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12240211.19540224,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12240201.149425255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5396513.289999802,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5396322.999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15909662.17910516,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15909479.104477623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62032.211665575705,
            "unit": "ns/iter",
            "extra": "iterations: 13767\ncpu: 62032.4108375101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 323372.7285714165,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 323369.097744361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 255931.5669549612,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 255928.86966895225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 256661.69118088362,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 256658.74439462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 255757.38215989858,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 255755.25059665975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 589702.6303448221,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 589686.1379310364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4122231.053333457,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4122148.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3385450.6836364223,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3385378.1818181844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3414823.4945054785,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3414764.8351648324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3343008.111111175,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3342985.663082439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1944204.9432771592,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1944194.327731085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3267032.1443660357,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3266876.056338024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12389243.7906978,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12388969.767441867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5498418.610000044,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5498204.999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52808.27840000484,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52807.77999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 284578.99538562336,
            "unit": "ns/iter",
            "extra": "iterations: 3034\ncpu: 284575.4449571521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 222030.90152888306,
            "unit": "ns/iter",
            "extra": "iterations: 3859\ncpu: 222018.99455817527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 229255.91931608543,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 229245.28453112597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 225726.41950832348,
            "unit": "ns/iter",
            "extra": "iterations: 3783\ncpu: 225716.4419772653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 559213.3598971822,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 559184.6401028314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4070002.0393013284,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4069982.096069866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3295705.6879435675,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3295637.234042561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3340141.1335740043,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3340093.1407942004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3305259.2021278464,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3305175.886524806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1906644.973305858,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1906589.3223819411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3225080.917241422,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3225116.2068965496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6624.200020795387,
            "unit": "ns/iter",
            "extra": "iterations: 105794\ncpu: 6623.891714085832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36933.91421633125,
            "unit": "ns/iter",
            "extra": "iterations: 18943\ncpu: 36933.458269545365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27961.087720002644,
            "unit": "ns/iter",
            "extra": "iterations: 25057\ncpu: 27961.0128906093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28155.389936347477,
            "unit": "ns/iter",
            "extra": "iterations: 24822\ncpu: 28155.74087503031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23059.229946346786,
            "unit": "ns/iter",
            "extra": "iterations: 30381\ncpu: 23058.990816628935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 164889.2253521174,
            "unit": "ns/iter",
            "extra": "iterations: 4260\ncpu: 164887.11267605805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 260183.8002227926,
            "unit": "ns/iter",
            "extra": "iterations: 2693\ncpu: 260172.66988488467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69836.5076953768,
            "unit": "ns/iter",
            "extra": "iterations: 10006\ncpu: 69833.11013391946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69441.85256665878,
            "unit": "ns/iter",
            "extra": "iterations: 10052\ncpu: 69437.11699164366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69313.98851029402,
            "unit": "ns/iter",
            "extra": "iterations: 10096\ncpu: 69314.82765451704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141588.50705075986,
            "unit": "ns/iter",
            "extra": "iterations: 4964\ncpu: 141583.13859790383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130160.67526723033,
            "unit": "ns/iter",
            "extra": "iterations: 5426\ncpu: 129951.54810173155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43066.73071485788,
            "unit": "ns/iter",
            "extra": "iterations: 16269\ncpu: 43067.29362591468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 209747.35290591852,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 209745.20671060597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 169975.12542454601,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 169962.6394953909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 170211.5758386137,
            "unit": "ns/iter",
            "extra": "iterations: 4114\ncpu: 170197.2775887206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 170579.9152168652,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 170570.69345748684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 319663.6044810301,
            "unit": "ns/iter",
            "extra": "iterations: 2187\ncpu: 319630.5441243724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1191413.9778911925,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1191288.945578224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1000712.2306590314,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1000637.6790830956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1003813.3160919485,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1003792.2413792966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 993533.8821023266,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 993516.1931818164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 652087.431903002,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 652016.1380596954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 984516.100140921,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 984490.550070515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43200.266072649465,
            "unit": "ns/iter",
            "extra": "iterations: 16161\ncpu: 43199.709176412165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 211482.85891613594,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 211481.44111414198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172318.61183723275,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 172313.14426633672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 173562.10585025363,
            "unit": "ns/iter",
            "extra": "iterations: 4034\ncpu: 173550.272682201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 172581.1415210508,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 172579.22717204137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 322515.7125057662,
            "unit": "ns/iter",
            "extra": "iterations: 2167\ncpu: 322506.92201200157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1184183.8358713086,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1184171.0659898315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 996299.91038402,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 996294.8790896315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 999780.6585714184,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 999736.7142857172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 996475.4900568806,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 996362.3579545278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 650675.1841860997,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 650619.0697674424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 985411.1406469146,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 985370.4641350268 ns\nthreads: 1"
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
        "date": 1705772710676,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16507.980396734154,
            "unit": "ns/iter",
            "extra": "iterations: 42850\ncpu: 16507.86464410735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131330.56621432918,
            "unit": "ns/iter",
            "extra": "iterations: 6411\ncpu: 131319.52893464357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 246976.11681315233,
            "unit": "ns/iter",
            "extra": "iterations: 3527\ncpu: 246962.29089878086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 357183.16701201716,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 357182.4699544137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 470694.0487137098,
            "unit": "ns/iter",
            "extra": "iterations: 1827\ncpu: 470664.2036124798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 584180.3990578447,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 584147.0390309553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 562853.816000029,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562812.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 660636.6709999065,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660633.8000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 744726.7961476593,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 744696.1476725521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13190.546485260524,
            "unit": "ns/iter",
            "extra": "iterations: 52920\ncpu: 13190.37414965986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11019.587197857652,
            "unit": "ns/iter",
            "extra": "iterations: 63505\ncpu: 11019.020549563022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10971.095982037978,
            "unit": "ns/iter",
            "extra": "iterations: 63689\ncpu: 10970.516101681615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11142.775582093564,
            "unit": "ns/iter",
            "extra": "iterations: 63306\ncpu: 11141.852273086277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18728.58906450282,
            "unit": "ns/iter",
            "extra": "iterations: 37456\ncpu: 18728.064929517324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54279.825499997976,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54279.73000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 285973.01872911694,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 285967.7591973239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 227430.5182599251,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 227422.61009667037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 228721.46737071234,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 228712.04982399082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 224924.4126097278,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 224915.6956637399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 506890.7660000832,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506862.5000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4130205.4115044884,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4130014.601769908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3316067.888888899,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3315883.1541218692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3319347.5622775555,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3319599.2882562205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3302542.003558913,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3302860.498220649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1940415.2955974445,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1940447.5890985357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3227333.606272043,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3227124.0418118564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12404489.941859486,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12403779.06976742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5393410.910000967,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5393123.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16010561.939393401,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16009219.696969688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60611.99619999797,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60618.45999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 317763.9237601737,
            "unit": "ns/iter",
            "extra": "iterations: 2702\ncpu: 317799.92598075577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 251721.03589592068,
            "unit": "ns/iter",
            "extra": "iterations: 3343\ncpu: 251717.73855818124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 255672.92039357233,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 255668.75372689244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 251678.593335317,
            "unit": "ns/iter",
            "extra": "iterations: 3391\ncpu: 251674.7567089353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 588728.3279022698,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 588735.4378818765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4189190.617117154,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4189127.0270270356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3392556.8654546044,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3392570.9090909157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3376263.7672729897,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3376224.363636363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3362778.122743789,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3362807.2202166067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1974340.0489363575,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1974314.2553191443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3277949.257042238,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3277870.4225352155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12611550.202381393,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12611403.571428593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5581407.010000703,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5581153.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51753.81610000613,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51754.13999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 278130.1898283179,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 278126.85455134325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 220615.19030336084,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 220606.6632097473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 224846.84775724364,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 224839.84168865572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 223252.35082655976,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 223250.24927840452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 554703.7651177503,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 554707.8930617442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4103999.601769591,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4104061.5044248016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3313544.80071163,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3313424.199288266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3326281.4551972696,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3326146.2365591414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3292410.5689045475,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3292296.1130741914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1928376.9006209616,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1928310.973084887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3218739.176470559,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3218621.7993079536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6691.726588644978,
            "unit": "ns/iter",
            "extra": "iterations: 104586\ncpu: 6691.41567705041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37430.728029896265,
            "unit": "ns/iter",
            "extra": "iterations: 18730\ncpu: 37428.92685531237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29267.97249895184,
            "unit": "ns/iter",
            "extra": "iterations: 23890\ncpu: 29266.33737965674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28149.36630360171,
            "unit": "ns/iter",
            "extra": "iterations: 24881\ncpu: 28147.767372693783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22052.920540440005,
            "unit": "ns/iter",
            "extra": "iterations: 31752\ncpu: 22051.543209876636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 160431.874942626,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 160429.9908214775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 277860.1336223932,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 277692.5502562089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70498.02031988632,
            "unit": "ns/iter",
            "extra": "iterations: 9941\ncpu: 70497.22361935444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69477.18179110564,
            "unit": "ns/iter",
            "extra": "iterations: 10072\ncpu: 69477.54169976238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69832.5377556116,
            "unit": "ns/iter",
            "extra": "iterations: 10025\ncpu: 69829.37655860375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 144670.9165116869,
            "unit": "ns/iter",
            "extra": "iterations: 4839\ncpu: 144663.54618722826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130852.13500929462,
            "unit": "ns/iter",
            "extra": "iterations: 5370\ncpu: 130848.36126629576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43041.011081533135,
            "unit": "ns/iter",
            "extra": "iterations: 16153\ncpu: 43040.65498668964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 210785.83398615083,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 210776.3482976817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 168617.3891970046,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 168614.5406317835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 168387.07972061695,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 168382.99614643422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 170876.66203364046,
            "unit": "ns/iter",
            "extra": "iterations: 4101\ncpu: 170876.93245549817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 314707.2411924087,
            "unit": "ns/iter",
            "extra": "iterations: 2214\ncpu: 314698.2384823877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1190154.1101694375,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1190144.406779665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 992774.3651924992,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 992789.5863052688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 987543.3455571368,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 987523.1311706479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 983872.4992966839,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 983861.8846694847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 653386.2851816621,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 653351.1649580642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 975866.1354749546,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 975847.0670391063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43736.29480778743,
            "unit": "ns/iter",
            "extra": "iterations: 16024\ncpu: 43735.24712930626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 213888.2466463118,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 213880.091463411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172698.28804346317,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 172697.55434782576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 172293.8812052436,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 172294.36897999316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171864.1227897927,
            "unit": "ns/iter",
            "extra": "iterations: 4072\ncpu: 171866.1100196486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 316914.07796915964,
            "unit": "ns/iter",
            "extra": "iterations: 2206\ncpu: 316912.4660018127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1190341.2947189054,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1190312.2657580823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1029240.2854890872,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1029204.731861204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 992091.6699576238,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 992073.201692527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 992159.372881399,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 992150.8474576271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 655615.8977486202,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 655616.3227016878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 979164.3300699294,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 979135.94405594 ns\nthreads: 1"
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
        "date": 1705774122903,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16403.511264441415,
            "unit": "ns/iter",
            "extra": "iterations: 43189\ncpu: 16403.185996434277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 130364.08759237775,
            "unit": "ns/iter",
            "extra": "iterations: 6496\ncpu: 130355.6958128079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 245790.76364149214,
            "unit": "ns/iter",
            "extra": "iterations: 3537\ncpu: 245794.11931014984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 358394.38627857034,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 358391.6839916841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 473689.8117519354,
            "unit": "ns/iter",
            "extra": "iterations: 1838\ncpu: 473676.76822633296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 600015.1081081327,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 599986.2162162166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 567501.1429999585,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567486.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 655496.9249999658,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655483.4999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 746148.8383184955,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 746131.6087307995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13038.49897476032,
            "unit": "ns/iter",
            "extra": "iterations: 53646\ncpu: 13038.289900458567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10950.832783502321,
            "unit": "ns/iter",
            "extra": "iterations: 63959\ncpu: 10950.793477071247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10863.321858515574,
            "unit": "ns/iter",
            "extra": "iterations: 64460\ncpu: 10863.228358672039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10961.760867861643,
            "unit": "ns/iter",
            "extra": "iterations: 63789\ncpu: 10960.88980858768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18823.287048719503,
            "unit": "ns/iter",
            "extra": "iterations: 37255\ncpu: 18822.990202657373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55070.41420000859,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55070.45000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 288599.30393809674,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 288603.16391787294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 223440.3815651138,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 223438.73424369775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 226547.71420792886,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 226543.249863909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 223080.19926393573,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 223076.26182965247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 613887.5558601274,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 613862.5771076065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4139397.6622218057,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4139225.7777777766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3346479.339350379,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3346439.350180499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3319516.8285715226,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3319441.428571438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3286413.0638295105,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3286262.765957446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1930698.8643005379,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1930656.57620042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3226959.5853658724,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3226888.153310105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12371471.767441435,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12370993.023255806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5523105.9000004735,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5522728.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15843839.64179032,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15843197.01492535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60434.034499996866,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60431.14000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 316431.2272559912,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 316426.1878453051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 250641.54869843935,
            "unit": "ns/iter",
            "extra": "iterations: 3419\ncpu: 250629.18982158508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 252719.06741243048,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 252710.86252575833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 254019.0184031148,
            "unit": "ns/iter",
            "extra": "iterations: 3369\ncpu: 254010.77471059514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 571976.076668827,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 571970.9847984099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4191631.490990866,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4191585.585585615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3368524.5745457658,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3368366.1818181775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3333982.882142956,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3333839.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3326438.300000031,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3326346.7857142813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1964012.3446089355,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1963931.7124735748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3264045.431578859,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3263971.2280701804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12540089.178571634,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12539419.047619084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5430459.570000039,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5430537.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51487.625999993725,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51485.199999999764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 276229.64784690225,
            "unit": "ns/iter",
            "extra": "iterations: 3135\ncpu: 276215.82137161243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 216057.664060523,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 216049.5838587646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 225050.3335079759,
            "unit": "ns/iter",
            "extra": "iterations: 3817\ncpu: 225046.16190725742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 218381.32695252122,
            "unit": "ns/iter",
            "extra": "iterations: 3918\ncpu: 218375.242470648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 550932.9581483572,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 550934.2422320833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4112720.991150155,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4112546.0176990954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3323036.2740212777,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3322946.6192170614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3316979.3309607357,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3316938.078291823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3283768.7183097177,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3283657.394366202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1925915.5800414938,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1925904.7817047918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3216785.8235293054,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3216679.930795843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6584.855074784434,
            "unit": "ns/iter",
            "extra": "iterations: 106172\ncpu: 6584.948950759171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37477.2046818099,
            "unit": "ns/iter",
            "extra": "iterations: 18668\ncpu: 37476.237411613474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28391.33078386179,
            "unit": "ns/iter",
            "extra": "iterations: 24711\ncpu: 28390.773339808275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30304.376259023178,
            "unit": "ns/iter",
            "extra": "iterations: 23133\ncpu: 30303.579302295413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23106.471021188543,
            "unit": "ns/iter",
            "extra": "iterations: 30298\ncpu: 23106.46247277032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 162688.75254631345,
            "unit": "ns/iter",
            "extra": "iterations: 4320\ncpu: 162685.13888888748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 274024.20580165344,
            "unit": "ns/iter",
            "extra": "iterations: 2551\ncpu: 274028.0282242246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70193.53241770367,
            "unit": "ns/iter",
            "extra": "iterations: 9902\ncpu: 70193.81943041839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69222.3912313656,
            "unit": "ns/iter",
            "extra": "iterations: 10127\ncpu: 69221.94134491848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69461.39386139177,
            "unit": "ns/iter",
            "extra": "iterations: 10100\ncpu: 69460.50495049536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 136817.06578177074,
            "unit": "ns/iter",
            "extra": "iterations: 5123\ncpu: 136810.5406988098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 129890.24671669096,
            "unit": "ns/iter",
            "extra": "iterations: 5330\ncpu: 129889.73733583443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43065.675431035226,
            "unit": "ns/iter",
            "extra": "iterations: 16240\ncpu: 43063.94088669915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 210998.96656626544,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 210994.6385542176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 168468.4004334314,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 168460.39007946206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 168993.14817500653,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 168991.20135363704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 169772.8594318768,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 169772.90604515703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 320267.6283226279,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 320272.1356553633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1189110.918228376,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1189097.9557069952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 998514.7828571631,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 998474.9999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 988236.9336158244,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 988205.0847457572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 988552.9449151927,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 988533.7570621585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 649596.1787037542,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 649596.8518518496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 979336.3314685365,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 979329.2307692198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43563.2313395648,
            "unit": "ns/iter",
            "extra": "iterations: 16050\ncpu: 43562.990654205445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 214162.52173911233,
            "unit": "ns/iter",
            "extra": "iterations: 3266\ncpu: 214162.5229638696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172213.12266471348,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 172215.68338249662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 171605.54815725185,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 171600.1228501237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171129.16581071803,
            "unit": "ns/iter",
            "extra": "iterations: 4089\ncpu: 171121.96135974757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 322974.52782932454,
            "unit": "ns/iter",
            "extra": "iterations: 2156\ncpu: 322971.1966604847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1190198.4125636963,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1190167.0628183468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 987466.452750253,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 987438.2228490784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 986732.5643565027,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 986673.5502121573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 988398.2209631185,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 988385.8356940387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 654521.0475746772,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 654502.4253731319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 979484.390209713,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 979438.8811188794 ns\nthreads: 1"
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
        "date": 1705777679239,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16250.396101764141,
            "unit": "ns/iter",
            "extra": "iterations: 42686\ncpu: 16249.97188773837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128884.91215496171,
            "unit": "ns/iter",
            "extra": "iterations: 6557\ncpu: 128882.52249504348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 243411.06893666094,
            "unit": "ns/iter",
            "extra": "iterations: 3583\ncpu: 243406.16801562932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 355146.18773157196,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 355147.59160148207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 469102.8536717101,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 469081.80345572316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 582308.3241610727,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 582295.0335570466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 561002.626000004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561006.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 648159.2830000409,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648143.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 742105.0231814523,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 742080.9752198255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13168.673544305633,
            "unit": "ns/iter",
            "extra": "iterations: 53119\ncpu: 13168.604454150105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11141.493926549452,
            "unit": "ns/iter",
            "extra": "iterations: 63226\ncpu: 11141.272577737005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10968.208529618405,
            "unit": "ns/iter",
            "extra": "iterations: 63895\ncpu: 10967.790906956727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11147.703157762542,
            "unit": "ns/iter",
            "extra": "iterations: 63431\ncpu: 11147.306522047558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18609.805100522583,
            "unit": "ns/iter",
            "extra": "iterations: 37604\ncpu: 18608.826188703337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55820.148299994806,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55819.61999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 277587.9892717648,
            "unit": "ns/iter",
            "extra": "iterations: 3076\ncpu: 277584.3628088429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 222553.02115989028,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 222551.7502612331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 231146.60010821733,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 231139.285714286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 228349.9270638299,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 228351.00187015845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 620679.651933705,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 620674.3093922632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4113571.287610433,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4113352.2123893816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3319626.3250001073,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3319595.714285725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3293186.5212766756,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3293150.7092198604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3286383.098939828,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3286284.0989399347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1926493.5513626372,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1926422.4318658332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3214595.479166841,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3214504.861111115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12348691.13953442,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12348636.046511646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5472632.849999854,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5472418.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15849249.803030338,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15848737.87878792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61391.64263549363,
            "unit": "ns/iter",
            "extra": "iterations: 13857\ncpu: 61389.73082196722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 322263.4960570869,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 322265.0018775813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 250476.80181498767,
            "unit": "ns/iter",
            "extra": "iterations: 3416\ncpu: 250471.22365339645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 256949.5888324666,
            "unit": "ns/iter",
            "extra": "iterations: 3349\ncpu: 256946.19289340166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 252294.7771546836,
            "unit": "ns/iter",
            "extra": "iterations: 3388\ncpu: 252288.87249114548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 581588.6329538174,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 581547.4212993969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4169044.4663677653,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4168880.717488771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3377377.340579751,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3377210.5072463867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3322069.793594258,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3321898.9323843415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3335582.1500001475,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3335461.0714285723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1967076.9150741477,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1967075.5838641254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3258998.2622380536,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3258998.60139861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12478535.970147738,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 12478067.1641791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5564869.100001033,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5564663.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52502.32390000065,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52501.75999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 271749.3165444627,
            "unit": "ns/iter",
            "extra": "iterations: 3137\ncpu: 271744.53299330425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 218359.5730769365,
            "unit": "ns/iter",
            "extra": "iterations: 3900\ncpu: 218358.53846153824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 229478.71068167957,
            "unit": "ns/iter",
            "extra": "iterations: 3726\ncpu: 229471.30971551294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 225203.10827186864,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 225186.27502634408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 556007.936102207,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 555982.3003194857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4122459.6283185207,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4122238.495575222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3328251.1254480686,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3328063.7992831534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3299215.176678303,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3299084.8056537155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3318148.594306071,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3317939.857651253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1918633.3987602587,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1918519.6280991791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3217094.548275829,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3216922.0689655095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6602.607977406611,
            "unit": "ns/iter",
            "extra": "iterations: 105874\ncpu: 6602.353741239565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37254.83145114428,
            "unit": "ns/iter",
            "extra": "iterations: 18861\ncpu: 37252.05450400283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28407.992462517384,
            "unit": "ns/iter",
            "extra": "iterations: 24544\ncpu: 28406.522979139583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28025.265328163205,
            "unit": "ns/iter",
            "extra": "iterations: 25003\ncpu: 28023.18121825375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22890.923663125996,
            "unit": "ns/iter",
            "extra": "iterations: 30575\ncpu: 22889.99509403102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 164651.23017180656,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 164640.0800188274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 274156.24745496636,
            "unit": "ns/iter",
            "extra": "iterations: 2554\ncpu: 274140.28974157956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69836.94175725928,
            "unit": "ns/iter",
            "extra": "iterations: 10027\ncpu: 69830.20843722076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 68915.62968797087,
            "unit": "ns/iter",
            "extra": "iterations: 10159\ncpu: 68915.99566886491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69028.80376688381,
            "unit": "ns/iter",
            "extra": "iterations: 10141\ncpu: 69026.02307464727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142768.67450900027,
            "unit": "ns/iter",
            "extra": "iterations: 4888\ncpu: 142760.80196399413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 129160.3270683493,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 129141.97530864083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43587.07803054407,
            "unit": "ns/iter",
            "extra": "iterations: 16045\ncpu: 43584.493611716534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 207204.13862881847,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 207193.26487466408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 168132.1542157144,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 168116.93490271425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165196.06610008498,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 165184.56090651368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 167488.8658857232,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 167477.52808988755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 312660.5993747071,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 312655.33720410726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1185424.315789338,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1185430.560271654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 993563.9786628564,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 993544.8079658695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 982884.8047753285,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 982861.2359550648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 983129.0224718011,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 983123.455056189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 654821.3775701451,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 654811.401869162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 976795.553695961,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 976799.7210599658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43661.27037451782,
            "unit": "ns/iter",
            "extra": "iterations: 16074\ncpu: 43659.72377752912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 206141.65451337548,
            "unit": "ns/iter",
            "extra": "iterations: 3401\ncpu: 206132.72566891983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169183.75803722715,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 169178.05172830695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 168200.34822287827,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 168201.08069164207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 168506.29559143222,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 168499.42182606633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 319162.5839415785,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 319160.1733576644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1179086.0135363827,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1179061.4213197979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 992077.2067988875,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 992072.9461756276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 980233.1871508248,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 980228.0726256886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 981818.0070126815,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 981783.8709677317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 650850.3134883477,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 650835.9999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 975570.054317611,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 975535.0974930216 ns\nthreads: 1"
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
        "date": 1705952847409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16250.475589712603,
            "unit": "ns/iter",
            "extra": "iterations: 43199\ncpu: 16249.876154540614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128487.72980798893,
            "unit": "ns/iter",
            "extra": "iterations: 6562\ncpu: 128483.03870771106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 242368.33509456227,
            "unit": "ns/iter",
            "extra": "iterations: 3596\ncpu: 242358.7319243603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 353237.8385245948,
            "unit": "ns/iter",
            "extra": "iterations: 2440\ncpu: 353235.86065573763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 466258.3569131803,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 466243.35476956057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 576485.5063039002,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 576474.2534837426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 554681.1820000244,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554660.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 649527.5990000096,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649521.8000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 733326.2651274131,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 733267.5159235675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13098.224806056644,
            "unit": "ns/iter",
            "extra": "iterations: 53366\ncpu: 13097.627703031907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10942.216346679052,
            "unit": "ns/iter",
            "extra": "iterations: 64013\ncpu: 10941.79463546466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10897.531966767623,
            "unit": "ns/iter",
            "extra": "iterations: 64395\ncpu: 10897.080518673796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10911.533684161172,
            "unit": "ns/iter",
            "extra": "iterations: 64229\ncpu: 10910.993476466989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18805.621063944203,
            "unit": "ns/iter",
            "extra": "iterations: 37220\ncpu: 18804.782375067207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53705.80040000163,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53702.60999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 281839.02209034277,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 281831.2891526541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 223837.2835429729,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 223828.11844863696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 226118.00656339724,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 226106.77343134768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 221352.794758695,
            "unit": "ns/iter",
            "extra": "iterations: 3854\ncpu: 221342.9164504414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 613967.0519480443,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 613933.9029391647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4047460.7217390714,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4047277.39130435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3258079.101398566,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3257920.279720283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3273785.014084591,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3273625.0000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3265502.429577493,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3265294.014084504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1925759.6437499323,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1925621.0416666695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3181259.1580755734,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3181227.4914089357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12352373.348836953,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12352024.418604648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5457860.529999721,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5457712.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15758373.626865638,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15758219.402985059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60653.427199997626,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60650.729999999705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 316067.9238970441,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 316054.11764705897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 251026.10974896981,
            "unit": "ns/iter",
            "extra": "iterations: 3426\ncpu: 251015.4407472265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 247794.45201504524,
            "unit": "ns/iter",
            "extra": "iterations: 3449\ncpu: 247789.18527109438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 245683.7151062601,
            "unit": "ns/iter",
            "extra": "iterations: 3482\ncpu: 245685.00861573828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 581914.2871485887,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 581889.8929049528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4081623.8640353843,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4081443.42105263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3306255.259786389,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3306164.4128113943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3321367.017857061,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3321242.857142868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3310758.4270464294,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3310639.857651235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1963110.7357295256,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1963055.8139534844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3216019.633218207,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3215918.3391003413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12498808.82142899,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12498505.952380884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5595401.000000493,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5595235.000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51310.18719999929,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51309.05000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 274000.4902524537,
            "unit": "ns/iter",
            "extra": "iterations: 3129\ncpu: 273997.79482262617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 218721.32607583576,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 218712.62807377038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 226120.95568452368,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 226099.63070430013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 216777.23631271932,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 216768.80570410137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 570609.9290873006,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 570595.7321076795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4024012.547826378,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4023901.3043478103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3245126.8432055656,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3245003.4843205414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3265675.632867378,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3265612.587412573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3268911.6982454467,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3268817.1929824473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1927358.0062238493,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1927305.1867219962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3173564.1160410326,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3173510.921501699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6687.685674641603,
            "unit": "ns/iter",
            "extra": "iterations: 104500\ncpu: 6687.385645933021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36982.38982051899,
            "unit": "ns/iter",
            "extra": "iterations: 18665\ncpu: 36979.66782748442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30122.21223191561,
            "unit": "ns/iter",
            "extra": "iterations: 23267\ncpu: 30121.45957794312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30202.485444434165,
            "unit": "ns/iter",
            "extra": "iterations: 23187\ncpu: 30199.987061715863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22999.96029450164,
            "unit": "ns/iter",
            "extra": "iterations: 30424\ncpu: 22998.409150670737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 162157.29811936064,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 162145.04295333178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 273096.9245429838,
            "unit": "ns/iter",
            "extra": "iterations: 2571\ncpu: 273084.0140023353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69171.00504899837,
            "unit": "ns/iter",
            "extra": "iterations: 10101\ncpu: 69165.53806553838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69070.56734775125,
            "unit": "ns/iter",
            "extra": "iterations: 10082\ncpu: 69070.928387225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69051.21127315497,
            "unit": "ns/iter",
            "extra": "iterations: 10148\ncpu: 69048.3247930638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 143493.6775576783,
            "unit": "ns/iter",
            "extra": "iterations: 4897\ncpu: 143492.85276700096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 128606.1197648764,
            "unit": "ns/iter",
            "extra": "iterations: 5444\ncpu: 128601.65319618063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43430.09546583625,
            "unit": "ns/iter",
            "extra": "iterations: 16100\ncpu: 43430.32919254667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 212623.5702153482,
            "unit": "ns/iter",
            "extra": "iterations: 3297\ncpu: 212616.0752198951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 170345.28606299215,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170341.6402245522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 168592.78117478674,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 168589.1670678893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 171219.48754273646,
            "unit": "ns/iter",
            "extra": "iterations: 4094\ncpu: 171211.5534929157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 326615.8547485984,
            "unit": "ns/iter",
            "extra": "iterations: 2148\ncpu: 326610.474860335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1174196.1206029179,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1174149.7487437122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 985033.0733428055,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 985011.9887164854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 982330.9355742097,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 982325.0700280033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 980763.7076923052,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 980747.832167833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 648616.3456904682,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 648601.4828544876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 972621.4102921948,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 972580.9457580032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43696.36857874484,
            "unit": "ns/iter",
            "extra": "iterations: 16021\ncpu: 43695.28119343302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 210809.8702865871,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 210803.8009049791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172906.34988880914,
            "unit": "ns/iter",
            "extra": "iterations: 4047\ncpu: 172904.2253521133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 172107.60014798283,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 172099.2353231354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171602.1051986319,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 171597.79303580127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 326869.69270343555,
            "unit": "ns/iter",
            "extra": "iterations: 2138\ncpu: 326855.98690364684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1172532.8561873003,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1172538.1270903188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 976129.7656903841,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 976114.3654114482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 972773.2044506783,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 972742.4200278219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 985530.9143257897,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 985477.808988753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 648121.0194444294,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 648082.2222222307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 968795.19087134,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 968787.2752420556 ns\nthreads: 1"
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
        "date": 1705954271730,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16313.469658279048,
            "unit": "ns/iter",
            "extra": "iterations: 43076\ncpu: 16312.826167703593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129601.49537465753,
            "unit": "ns/iter",
            "extra": "iterations: 6486\ncpu: 129593.1082331175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 243948.62342390613,
            "unit": "ns/iter",
            "extra": "iterations: 3569\ncpu: 243935.64023536004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 355866.45173267246,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 355855.36303630355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 469905.64617043943,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 469873.4627831718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 581545.1273458597,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 581516.2868632707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 560478.0769999707,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560399.3999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 649642.5760000193,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649617.0000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 742216.4395516036,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 742164.5316253012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13086.153460811785,
            "unit": "ns/iter",
            "extra": "iterations: 53499\ncpu: 13085.951139273622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11222.083902714752,
            "unit": "ns/iter",
            "extra": "iterations: 63812\ncpu: 11203.68896132389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10924.689468512148,
            "unit": "ns/iter",
            "extra": "iterations: 64103\ncpu: 10923.499680202169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10972.765116933553,
            "unit": "ns/iter",
            "extra": "iterations: 63968\ncpu: 10971.917208604295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18713.918933406712,
            "unit": "ns/iter",
            "extra": "iterations: 37315\ncpu: 18712.000535977484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53816.18910000725,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53814.38000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 280443.51565075025,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 280423.78912685317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 225799.0142781566,
            "unit": "ns/iter",
            "extra": "iterations: 3782\ncpu: 225789.793759915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 227237.57972178923,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 227224.98662386325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 223104.79795595355,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 223091.82389937114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 614642.6466575688,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 614577.4215552522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4056817.318777333,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4056462.8820960596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3255873.950703898,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3255608.098591543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3343724.007117513,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3343661.2099644127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3274718.901408646,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3274598.9436619617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1885879.1024589213,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1885811.4754098386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3178268.1477665068,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3178129.2096219985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12143027.522726739,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12142169.318181856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5374137.939999172,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5373856.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15653904.720588062,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15652767.64705882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61726.384225757174,
            "unit": "ns/iter",
            "extra": "iterations: 13820\ncpu: 61724.13169319824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 310201.0811203864,
            "unit": "ns/iter",
            "extra": "iterations: 2749\ncpu: 310183.04838122986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 249005.30131005126,
            "unit": "ns/iter",
            "extra": "iterations: 3435\ncpu: 248997.61280931617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 251301.7428152293,
            "unit": "ns/iter",
            "extra": "iterations: 3410\ncpu: 251286.7448680339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 249407.13237872126,
            "unit": "ns/iter",
            "extra": "iterations: 3422\ncpu: 249390.21040327288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 586996.3259259203,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 586940.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4119035.0844443757,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4118660.0000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3309509.6642857213,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3309196.7857142887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3351800.1654672567,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3351506.8345323736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3328268.575539611,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3328048.2014388554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1935408.2108560142,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1935232.9853862133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3232637.097222361,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3232350.3472222215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12307768.1627904,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12306591.860465068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5532301.169999982,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5531644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51432.67930000093,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51429.350000000086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 274542.7502395585,
            "unit": "ns/iter",
            "extra": "iterations: 3131\ncpu: 274519.5145320994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 218536.3089701158,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 218517.7101967816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 223246.49856881486,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 223228.31121519618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 221182.7248581952,
            "unit": "ns/iter",
            "extra": "iterations: 3878\ncpu: 221164.28571428612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553204.8637810422,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 553150.9866327194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4041300.5739127505,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4040996.95652175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3259040.765734248,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3258721.678321681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3309927.202127362,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3309702.8368794303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3279783.5035212366,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3279470.0704225437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1896607.5408162414,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1896421.0204081687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3185720.5102740764,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3185480.479452045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6568.322152791668,
            "unit": "ns/iter",
            "extra": "iterations: 107061\ncpu: 6567.798731564215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37272.18737947712,
            "unit": "ns/iter",
            "extra": "iterations: 18668\ncpu: 37269.150417827266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30185.17323275891,
            "unit": "ns/iter",
            "extra": "iterations: 23200\ncpu: 30181.57327586204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29931.69799632642,
            "unit": "ns/iter",
            "extra": "iterations: 23407\ncpu: 29928.940060665474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23180.800541934714,
            "unit": "ns/iter",
            "extra": "iterations: 30262\ncpu: 23178.249950432924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 162115.33225058703,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 162098.28306264596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 269696.57318953064,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 269670.7627118666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69174.44476284539,
            "unit": "ns/iter",
            "extra": "iterations: 10120\ncpu: 69169.09090909087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69126.28672705931,
            "unit": "ns/iter",
            "extra": "iterations: 10156\ncpu: 69124.23198109423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69141.13356367232,
            "unit": "ns/iter",
            "extra": "iterations: 10130\ncpu: 69133.78084896294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 140984.409548732,
            "unit": "ns/iter",
            "extra": "iterations: 4964\ncpu: 140972.96535052476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 128233.55187557476,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 128217.32845379601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42795.20489315121,
            "unit": "ns/iter",
            "extra": "iterations: 16472\ncpu: 42682.46114618796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 206265.00117718268,
            "unit": "ns/iter",
            "extra": "iterations: 3398\ncpu: 206240.46497939868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 167132.81796464723,
            "unit": "ns/iter",
            "extra": "iterations: 4186\ncpu: 167114.78738652475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165419.01958933074,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 165399.85839037193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 167611.20856254388,
            "unit": "ns/iter",
            "extra": "iterations: 4181\ncpu: 167602.1765127963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 320204.7300641359,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 320173.23556370125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1169238.3489149334,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1169175.7929882961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1005830.2401686243,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1005743.2584269647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 977490.5062936246,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 977385.5944055774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 974782.6471408186,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 974701.5341701646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 640070.1925182616,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 640005.1094890507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 966923.839999975,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 966861.3793103461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43302.093080827915,
            "unit": "ns/iter",
            "extra": "iterations: 16158\ncpu: 43297.41923505342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 206771.39007092305,
            "unit": "ns/iter",
            "extra": "iterations: 3384\ncpu: 206758.39243498465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 170367.77702045522,
            "unit": "ns/iter",
            "extra": "iterations: 4108\ncpu: 170362.7312560837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 170194.55476944067,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 170184.48402049363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 169670.19723770965,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 169657.49939423255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 321749.4007335907,
            "unit": "ns/iter",
            "extra": "iterations: 2181\ncpu: 321730.58230170014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1167712.878130234,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1167597.1619365525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 976507.3054393793,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 976422.8730822969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 977414.570629376,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 977330.2097902015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 980848.9229691835,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 980796.9187675042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 642004.4789762804,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 641973.9488117016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 970177.8019391069,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 970068.0055401598 ns\nthreads: 1"
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
        "date": 1705956300964,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16064.289527437997,
            "unit": "ns/iter",
            "extra": "iterations: 43571\ncpu: 16062.97078331918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128581.01669955181,
            "unit": "ns/iter",
            "extra": "iterations: 6587\ncpu: 128571.42857142857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 243226.18072624996,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 243207.09497206705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 354313.2550308157,
            "unit": "ns/iter",
            "extra": "iterations: 2435\ncpu: 354293.26488706376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 467699.9129500486,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 467665.1262761954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 578070.5189873433,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 578062.5582944705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 558423.7790000088,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558427.8000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 645647.3869999967,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645630.2999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 736136.8346581624,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 736119.8728139909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13124.384097287046,
            "unit": "ns/iter",
            "extra": "iterations: 53450\ncpu: 13123.792329279686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11027.459716981604,
            "unit": "ns/iter",
            "extra": "iterations: 63600\ncpu: 11027.327044025182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10913.056127703585,
            "unit": "ns/iter",
            "extra": "iterations: 64086\ncpu: 10913.129232593701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11071.43327222326,
            "unit": "ns/iter",
            "extra": "iterations: 63819\ncpu: 11071.356492580604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18951.27891395448,
            "unit": "ns/iter",
            "extra": "iterations: 37015\ncpu: 18950.584898014295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56461.95549999789,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56459.74999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 284927.9248997432,
            "unit": "ns/iter",
            "extra": "iterations: 2743\ncpu: 284920.48851622274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 232367.38819369025,
            "unit": "ns/iter",
            "extra": "iterations: 3676\ncpu: 232360.82698585448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 231919.2418655049,
            "unit": "ns/iter",
            "extra": "iterations: 3688\ncpu: 231916.1062906721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 232250.0491580698,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 232244.16078218332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 609131.0608930902,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 609116.8470906635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4072740.532751049,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4072673.3624454155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3272165.109154872,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3272008.4507042156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3263832.355633842,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3263776.408450705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3280847.6749116057,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3280682.6855123695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1905330.556701067,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1905294.2268041277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3194982.65172401,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3194918.965517234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12227061.418604594,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12226727.906976769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5497833.42000012,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5497582.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15731071.970149636,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15730238.805970158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61540.88038863012,
            "unit": "ns/iter",
            "extra": "iterations: 13895\ncpu: 61539.56099316311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 331106.9799305328,
            "unit": "ns/iter",
            "extra": "iterations: 2591\ncpu: 331102.6630644545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 258822.33585017893,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 258820.38659015455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 256632.38668258543,
            "unit": "ns/iter",
            "extra": "iterations: 3349\ncpu: 256620.15527023096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 259185.16012084088,
            "unit": "ns/iter",
            "extra": "iterations: 3310\ncpu: 259180.99697885237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 580534.1008010919,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 580519.8264352448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4126526.635555416,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4126502.666666643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3341094.841726468,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3341016.187050372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3320774.5765124033,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3320632.0284697637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3334022.103571702,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3333964.28571428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1956713.4084211015,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1956644.4210526343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3238050.097560777,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3238071.7770034703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12416860.399999304,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12416356.470588226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5543796.140000268,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5543839.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51507.20199999341,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51505.09999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 280017.96470586635,
            "unit": "ns/iter",
            "extra": "iterations: 3060\ncpu: 280016.63398692734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 224102.34065933604,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 224094.79330193732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 226409.20321983923,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 226403.53655318095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 226385.83808768477,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 226372.87374537837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 563690.346649449,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 563694.2010309274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4053809.213973793,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4053787.336244525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3276675.5457743504,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3276572.183098586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3276219.203508733,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3276194.0350877293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3295899.826855194,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3295840.282685514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1918071.5351240465,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1918057.0247933907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3187342.537671222,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3187234.9315068536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6648.160473694197,
            "unit": "ns/iter",
            "extra": "iterations: 105469\ncpu: 6648.025486161824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37079.44572063932,
            "unit": "ns/iter",
            "extra": "iterations: 18893\ncpu: 37079.07690679061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30106.281293045384,
            "unit": "ns/iter",
            "extra": "iterations: 23232\ncpu: 30105.96590909074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29206.063172828293,
            "unit": "ns/iter",
            "extra": "iterations: 23966\ncpu: 29205.762329967285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23186.935808456084,
            "unit": "ns/iter",
            "extra": "iterations: 30113\ncpu: 23187.115199415595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 161544.19244065916,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 161539.47914265987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 274197.91317948437,
            "unit": "ns/iter",
            "extra": "iterations: 2557\ncpu: 274199.6480250277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70353.30163835341,
            "unit": "ns/iter",
            "extra": "iterations: 9949\ncpu: 70351.80420142616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69648.2885399074,
            "unit": "ns/iter",
            "extra": "iterations: 10061\ncpu: 69645.8403737195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69851.33888500657,
            "unit": "ns/iter",
            "extra": "iterations: 10027\ncpu: 69848.27964495847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142660.72329997987,
            "unit": "ns/iter",
            "extra": "iterations: 4897\ncpu: 142659.50581988943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 129532.89438328707,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 129528.83000559917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43223.60028484571,
            "unit": "ns/iter",
            "extra": "iterations: 16149\ncpu: 43222.73825004628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 208713.56338030426,
            "unit": "ns/iter",
            "extra": "iterations: 3337\ncpu: 208715.1633203482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 169220.96294512754,
            "unit": "ns/iter",
            "extra": "iterations: 4156\ncpu: 169219.70644850674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165659.9789647769,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 165659.01678090123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 168804.36491059774,
            "unit": "ns/iter",
            "extra": "iterations: 4138\ncpu: 168800.45915901454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 320424.02060439734,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 320426.60256410163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1190686.057823182,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1190652.5510204076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 997661.9317213314,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 997652.9160739759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 987507.6295775472,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 987440.8450704183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 989279.0848656559,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 989252.75813295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 644925.3118676026,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 644915.82336707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 975739.705307316,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 975688.547486037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43361.612707828026,
            "unit": "ns/iter",
            "extra": "iterations: 16179\ncpu: 43359.904814883994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 209261.84530220323,
            "unit": "ns/iter",
            "extra": "iterations: 3342\ncpu: 209255.29622980344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 170441.95925834472,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 170443.3276408906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 170710.76618005525,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 170702.068126519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170407.98441305567,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 170403.72625426436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323362.30811808544,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 323346.07933579205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1181873.4754651522,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1181844.8392554936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 994422.6173542856,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 994412.5177809404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 986995.3873239353,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 986983.8028168902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 993204.449787814,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 993165.0636492276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 647934.2689784598,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 647906.0918463096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 980235.8555400202,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 980223.5624123449 ns\nthreads: 1"
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
        "date": 1705957748130,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16262.131543034935,
            "unit": "ns/iter",
            "extra": "iterations: 43233\ncpu: 16261.915666273451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129816.79786890534,
            "unit": "ns/iter",
            "extra": "iterations: 6194\ncpu: 129811.46270584439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 245571.20848552624,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 245559.9325653274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 357539.29216741247,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 357513.6344799007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 471866.3108695432,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 471838.69565217383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 586275.5114709627,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 586264.6423751686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 563483.2150000193,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563439.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 653606.332000038,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653598.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 747432.0968522681,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 747401.6949152544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13181.108013741814,
            "unit": "ns/iter",
            "extra": "iterations: 53558\ncpu: 13180.634078942443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10996.076677164892,
            "unit": "ns/iter",
            "extra": "iterations: 63187\ncpu: 10995.714308322906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10972.108365971533,
            "unit": "ns/iter",
            "extra": "iterations: 63830\ncpu: 10971.427228575905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11106.896300739603,
            "unit": "ns/iter",
            "extra": "iterations: 63337\ncpu: 11106.29331986042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18830.722419258866,
            "unit": "ns/iter",
            "extra": "iterations: 37218\ncpu: 18829.281530442255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53927.55589999752,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53924.529999999926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 280104.99539773446,
            "unit": "ns/iter",
            "extra": "iterations: 3042\ncpu: 280096.87705456937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 223020.67637793504,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 223004.06824147012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 223676.2346456686,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 223667.90026246695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 223633.01791357345,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 223620.02107481542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 617859.9380165202,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 617822.1074380168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4085501.9561402975,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4085187.280701765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3290599.684397076,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3290297.16312057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3339142.205036035,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3339017.98561152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3328766.6379927904,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3328611.111111114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1967868.9661733124,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1967753.9112050743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3227966.7491290863,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3227766.202090592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12494861.23529363,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12494252.941176435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5553540.519999843,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5553193.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16064081.348485036,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16062937.878787871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61614.80432424786,
            "unit": "ns/iter",
            "extra": "iterations: 13829\ncpu: 61611.90975486281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 312346.8943918386,
            "unit": "ns/iter",
            "extra": "iterations: 2746\ncpu: 312331.0633648936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 246294.2147573695,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 246282.85960379065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 250216.93709772243,
            "unit": "ns/iter",
            "extra": "iterations: 3418\ncpu: 250199.15155061387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 246949.827338121,
            "unit": "ns/iter",
            "extra": "iterations: 3475\ncpu: 246942.12949640155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 588360.922558946,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 588348.1481481482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4153810.9062498407,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4153566.96428572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3340492.6451611016,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3340268.1003584247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3386319.7116785743,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3386066.7883211565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3379652.0802921923,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3379478.1021897667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2013880.5292839636,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2013846.4208243082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3276864.580986022,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3276717.6056337953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12704621.216867274,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12704201.2048193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5763781.430000562,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5763670.0000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51739.66969999811,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51738.060000000274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 274812.27515270544,
            "unit": "ns/iter",
            "extra": "iterations: 3111\ncpu: 274805.6573449044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 216874.47935780245,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 216864.14373088614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 221072.88354038773,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 221065.19151138733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 220256.0417314837,
            "unit": "ns/iter",
            "extra": "iterations: 3858\ncpu: 220244.5308449981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 564200.3590408484,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 564175.5670771208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4071236.5807858915,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4071172.9257641733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3285309.2711267,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3285211.9718309934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3364340.1552347112,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3364282.671480124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3355247.7194243595,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3355205.395683454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1978337.0767591225,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1978251.5991471168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3229973.184028031,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3229935.0694444426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6641.653353951239,
            "unit": "ns/iter",
            "extra": "iterations: 105413\ncpu: 6641.2691034312365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36985.762622537055,
            "unit": "ns/iter",
            "extra": "iterations: 18974\ncpu: 36985.17444924656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30008.871688240866,
            "unit": "ns/iter",
            "extra": "iterations: 23326\ncpu: 30007.515219068813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30259.385439621175,
            "unit": "ns/iter",
            "extra": "iterations: 23145\ncpu: 30258.747029595856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22118.5809589991,
            "unit": "ns/iter",
            "extra": "iterations: 31658\ncpu: 22117.303683113325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 159988.25696029895,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 159985.50890004402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 274101.98156140285,
            "unit": "ns/iter",
            "extra": "iterations: 2549\ncpu: 274090.0745390386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70521.64417053419,
            "unit": "ns/iter",
            "extra": "iterations: 9898\ncpu: 70520.76177005448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70541.69705229862,
            "unit": "ns/iter",
            "extra": "iterations: 9906\ncpu: 70540.88431253686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70499.41180024463,
            "unit": "ns/iter",
            "extra": "iterations: 9932\ncpu: 70496.56665324213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 145824.87627154656,
            "unit": "ns/iter",
            "extra": "iterations: 4817\ncpu: 145818.66306830064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124070.31475876975,
            "unit": "ns/iter",
            "extra": "iterations: 5617\ncpu: 124060.70856329006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44263.98121679717,
            "unit": "ns/iter",
            "extra": "iterations: 15812\ncpu: 44262.12370351633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 215099.08466747546,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 215085.09852216733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 169963.2182038889,
            "unit": "ns/iter",
            "extra": "iterations: 4120\ncpu: 169955.2427184483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172654.67283952018,
            "unit": "ns/iter",
            "extra": "iterations: 4050\ncpu: 172650.14814814832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 172892.67459729093,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 172890.334572492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 323446.4272517162,
            "unit": "ns/iter",
            "extra": "iterations: 2165\ncpu: 323445.26558891573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1181456.272419699,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1181438.7478849266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 993188.7698863501,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 993174.0056818244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1017260.8780840627,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1017198.8388969353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1008299.2690647626,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1008240.4316546889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 657762.9953096184,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 657723.9212007503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1030169.6685552454,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1030133.2861189838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44313.41585863816,
            "unit": "ns/iter",
            "extra": "iterations: 15676\ncpu: 44309.664455217884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 210926.43279085748,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 210919.62025316444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172281.29344871224,
            "unit": "ns/iter",
            "extra": "iterations: 4045\ncpu: 172280.69221260722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 174886.93164747357,
            "unit": "ns/iter",
            "extra": "iterations: 3994\ncpu: 174877.26589885054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174128.43622322398,
            "unit": "ns/iter",
            "extra": "iterations: 4014\ncpu: 174113.4778276039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323664.1884259728,
            "unit": "ns/iter",
            "extra": "iterations: 2160\ncpu: 323647.2222222223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1181565.376083141,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1181515.2512998306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 993256.7869317601,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 993186.0795454505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1001393.4011461277,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1001306.1604584681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1005042.0731708545,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1005027.5466284038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 664582.8905803735,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 664550.7136060848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 988043.1271428084,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 988014.1428571473 ns\nthreads: 1"
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
        "date": 1705959204173,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16163.513920899964,
            "unit": "ns/iter",
            "extra": "iterations: 43388\ncpu: 16163.282474416892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131827.12732385952,
            "unit": "ns/iter",
            "extra": "iterations: 6401\ncpu: 131826.5427276988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 256795.48191734817,
            "unit": "ns/iter",
            "extra": "iterations: 3484\ncpu: 256777.3249138921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 366500.2507411971,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 366482.2532825075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 483217.6855555303,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 483180.94444444444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 598267.0814916855,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 598224.1022099449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 573582.1859999533,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573525.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 667345.7377168003,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 667307.4421965323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 758990.6342668989,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 758939.2092256997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12987.343150685212,
            "unit": "ns/iter",
            "extra": "iterations: 54020\ncpu: 12986.319881525355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11005.894043897053,
            "unit": "ns/iter",
            "extra": "iterations: 63649\ncpu: 11005.201967037954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10818.498044368309,
            "unit": "ns/iter",
            "extra": "iterations: 64685\ncpu: 10818.463322254005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10894.378676870916,
            "unit": "ns/iter",
            "extra": "iterations: 64287\ncpu: 10893.563239846331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18667.111442733094,
            "unit": "ns/iter",
            "extra": "iterations: 37526\ncpu: 18665.954271704933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56906.732899994946,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56902.53999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 281556.9724302215,
            "unit": "ns/iter",
            "extra": "iterations: 2938\ncpu: 281544.1116405723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 224819.52375924558,
            "unit": "ns/iter",
            "extra": "iterations: 3788\ncpu: 224807.47096092923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 223677.78535817013,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 223666.22933613273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 223135.8595063026,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 223114.12815126035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 600844.8894842599,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 600794.5746818498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4190902.689189287,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4190744.594594606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3406182.911764604,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3406011.39705882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3358511.756363524,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3358428.727272734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3351067.429090852,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3350858.5454545426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2012963.81818179,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2012768.8311688262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3302812.234042542,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3302616.3120567426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12657109.892857186,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12656252.38095236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5698998.010000195,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5698886.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16292107.799999766,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16290984.615384638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60962.633899998764,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60961.01000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 310773.02733236103,
            "unit": "ns/iter",
            "extra": "iterations: 2744\ncpu: 310771.31924198184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 248800.05137880007,
            "unit": "ns/iter",
            "extra": "iterations: 3445\ncpu: 248791.64005805374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 248232.0342823805,
            "unit": "ns/iter",
            "extra": "iterations: 3442\ncpu: 248217.2283556073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 251341.77167204017,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 251331.4428445501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 572565.1653491568,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 572529.5125164695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4246878.785388056,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4246730.593607302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3455733.3074074164,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3455610.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3417001.3308824273,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3416896.6911764555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3417041.919117527,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3416959.19117648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2014928.0302376654,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2014825.9179265653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3334869.749103804,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3334736.9175627246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12752305.385542667,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12751784.33734946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5736547.6500001475,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5736449.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51953.8678999993,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51951.22999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 274902.98687580955,
            "unit": "ns/iter",
            "extra": "iterations: 3124\ncpu: 274896.5108834827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 218524.86520295788,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 218516.18585652404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 224406.6152031437,
            "unit": "ns/iter",
            "extra": "iterations: 3815\ncpu: 224395.77981651414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 220235.98815654253,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 220222.14212152484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 544841.1079899952,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 544810.4868913874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4179777.95391689,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4179491.7050691172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3393176.5055351164,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3393096.678966788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3367870.463768068,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3367731.52173912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3384586.054347681,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3384413.0434782566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1994470.6271551603,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1994376.9396551647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3280723.4650350846,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3280503.49650349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6628.1186695404085,
            "unit": "ns/iter",
            "extra": "iterations: 105798\ncpu: 6627.96177621507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37178.2610981312,
            "unit": "ns/iter",
            "extra": "iterations: 18832\ncpu: 37176.09388275246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29960.865883462575,
            "unit": "ns/iter",
            "extra": "iterations: 23323\ncpu: 29959.349140333346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29888.828903017944,
            "unit": "ns/iter",
            "extra": "iterations: 23437\ncpu: 29888.432819900412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22993.01145339718,
            "unit": "ns/iter",
            "extra": "iterations: 30384\ncpu: 22992.166929963136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 161039.6959521575,
            "unit": "ns/iter",
            "extra": "iterations: 4348\ncpu: 161029.852805886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 278915.8936678486,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 278897.2122660259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71113.70139100366,
            "unit": "ns/iter",
            "extra": "iterations: 9849\ncpu: 71107.43222662187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69987.306901028,
            "unit": "ns/iter",
            "extra": "iterations: 10013\ncpu: 69982.80235693586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70382.68346551829,
            "unit": "ns/iter",
            "extra": "iterations: 9961\ncpu: 70381.34725429167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 146352.979153634,
            "unit": "ns/iter",
            "extra": "iterations: 4797\ncpu: 146348.44694600767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131365.5484113511,
            "unit": "ns/iter",
            "extra": "iterations: 5319\ncpu: 131355.51795450196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43118.24406674866,
            "unit": "ns/iter",
            "extra": "iterations: 16180\ncpu: 43117.515451173975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 211236.47352494838,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 211235.18910741224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 170035.39620345904,
            "unit": "ns/iter",
            "extra": "iterations: 4109\ncpu: 170023.02263324466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 167055.17116902015,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 167041.31006454682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174607.33349282233,
            "unit": "ns/iter",
            "extra": "iterations: 4180\ncpu: 174594.71291865743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 317810.5556059941,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 317795.5061280061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1188363.2775861928,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1188282.2413792985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1001502.8028571546,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1001425.1428571542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 977147.0680555517,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 977107.9166666555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 987794.8079095739,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 987750.4237288238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 650093.1274418627,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 650062.6976744147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 979194.4769874846,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 979123.012552292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43149.381935880396,
            "unit": "ns/iter",
            "extra": "iterations: 16220\ncpu: 43146.0850801484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 211482.55894799685,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 211464.9637243047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172750.24127765174,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 172738.6240786248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 170090.2990517869,
            "unit": "ns/iter",
            "extra": "iterations: 4113\ncpu: 170076.48918064762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170785.758898095,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 170776.0604583117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323630.7154058939,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 323613.69926199206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1182485.0361446012,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1182464.3717728187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 997231.9014492392,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 997207.8260869674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 973323.2346368254,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 973272.6256983378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 988209.3741209308,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 988205.6258790425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 649172.5987025007,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 649159.2215013814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 975561.4721447827,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 975546.6573816073 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}