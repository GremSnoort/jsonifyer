window.BENCHMARK_DATA = {
  "lastUpdate": 1702489558488,
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
      }
    ]
  }
}