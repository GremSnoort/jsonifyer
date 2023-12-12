window.BENCHMARK_DATA = {
  "lastUpdate": 1702377769118,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-12 22.04 Release c++-17": [
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
          "id": "d824467ac31a85d06f63e9a517ac86072b088bd6",
          "message": "try build gcc 12 2",
          "timestamp": "2023-12-12T13:34:04+03:00",
          "tree_id": "0a304358dc9ec1fc676e609a6fe50a05eed68bd2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d824467ac31a85d06f63e9a517ac86072b088bd6"
        },
        "date": 1702377768563,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1684.6640308191943,
            "unit": "ns/iter",
            "extra": "iterations: 419220\ncpu: 1684.6660464672486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25094.900258554568,
            "unit": "ns/iter",
            "extra": "iterations: 32875\ncpu: 25094.807604562746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 51165.008584739415,
            "unit": "ns/iter",
            "extra": "iterations: 16308\ncpu: 51163.87049300954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 64380.47602416404,
            "unit": "ns/iter",
            "extra": "iterations: 13743\ncpu: 64378.46176235174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 91172.91813094681,
            "unit": "ns/iter",
            "extra": "iterations: 10187\ncpu: 91171.04152351042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 116932.93634636355,
            "unit": "ns/iter",
            "extra": "iterations: 7368\ncpu: 116929.56026058635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 139231.76899596688,
            "unit": "ns/iter",
            "extra": "iterations: 6225\ncpu: 139228.53012048197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 161683.99850801905,
            "unit": "ns/iter",
            "extra": "iterations: 5362\ncpu: 161679.4852666916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 181094.33411116403,
            "unit": "ns/iter",
            "extra": "iterations: 4714\ncpu: 181090.17819261807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1462.0334976400918,
            "unit": "ns/iter",
            "extra": "iterations: 477765\ncpu: 1462.0106119117106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1175.2956320704104,
            "unit": "ns/iter",
            "extra": "iterations: 595179\ncpu: 1175.2539992170407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1158.4222285076244,
            "unit": "ns/iter",
            "extra": "iterations: 586886\ncpu: 1158.3958383740614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1170.4716312531673,
            "unit": "ns/iter",
            "extra": "iterations: 599110\ncpu: 1170.4732019161777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2323.3710693907137,
            "unit": "ns/iter",
            "extra": "iterations: 301957\ncpu: 2323.386111267499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7425.787118950448,
            "unit": "ns/iter",
            "extra": "iterations: 110550\ncpu: 7425.618272274985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33122.19921143576,
            "unit": "ns/iter",
            "extra": "iterations: 25109\ncpu: 33122.45808275919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29211.387130952015,
            "unit": "ns/iter",
            "extra": "iterations: 28316\ncpu: 29211.83783020203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29660.335579368137,
            "unit": "ns/iter",
            "extra": "iterations: 27901\ncpu: 29660.44944625641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29827.984552343343,
            "unit": "ns/iter",
            "extra": "iterations: 27577\ncpu: 29828.09225078875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73115.88892598503,
            "unit": "ns/iter",
            "extra": "iterations: 11983\ncpu: 73114.68747392132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 819136.2082240175,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 819148.6439195123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 672274.0109998995,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 672267.5999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 667611.0249999283,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 667621.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 662668.5007184027,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 662670.2586206913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 470366.5329405478,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 470365.50615961454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 669083.1935483529,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 669071.1111111112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 987.3599863639696,
            "unit": "ns/iter",
            "extra": "iterations: 709888\ncpu: 987.3753324468055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18981.657674503556,
            "unit": "ns/iter",
            "extra": "iterations: 43853\ncpu: 18981.428864615842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41075.72132428362,
            "unit": "ns/iter",
            "extra": "iterations: 20479\ncpu: 41075.560330094144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 51712.77339999278,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51711.78999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 68628.47183043626,
            "unit": "ns/iter",
            "extra": "iterations: 12691\ncpu: 68625.81356867072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 85841.63200315119,
            "unit": "ns/iter",
            "extra": "iterations: 10174\ncpu: 85839.43385099276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 102544.81142382178,
            "unit": "ns/iter",
            "extra": "iterations: 8421\ncpu: 102540.43462771623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 119193.64507311312,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 119190.65190651911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 137222.59579805302,
            "unit": "ns/iter",
            "extra": "iterations: 6378\ncpu: 137184.1172781433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 816.5694758695618,
            "unit": "ns/iter",
            "extra": "iterations: 868467\ncpu: 816.5356887481072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 661.6595553226238,
            "unit": "ns/iter",
            "extra": "iterations: 1056856\ncpu: 661.6636514340614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 662.4257924874124,
            "unit": "ns/iter",
            "extra": "iterations: 1055695\ncpu: 662.4149967556959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 663.7227727775531,
            "unit": "ns/iter",
            "extra": "iterations: 1048739\ncpu: 663.7065084830449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1295.388159368164,
            "unit": "ns/iter",
            "extra": "iterations: 540309\ncpu: 1295.372647873722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5014.287469999772,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5014.31199999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24010.354976967046,
            "unit": "ns/iter",
            "extra": "iterations: 34298\ncpu: 24010.292145314517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19939.703959316375,
            "unit": "ns/iter",
            "extra": "iterations: 41295\ncpu: 19939.726359123382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20273.1979972482,
            "unit": "ns/iter",
            "extra": "iterations: 42142\ncpu: 20273.347254520428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19845.85728022256,
            "unit": "ns/iter",
            "extra": "iterations: 41599\ncpu: 19845.760715401757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 57975.139569052495,
            "unit": "ns/iter",
            "extra": "iterations: 14294\ncpu: 57972.73681264851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 600058.9699999637,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600050.8999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 506732.0120000432,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506727.20000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 631246.8200568965,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 631240.753911805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 504524.2449999705,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504518.80000000674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 360298.3019559549,
            "unit": "ns/iter",
            "extra": "iterations: 2454\ncpu: 360283.7408312965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 501897.4150000304,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501889.0999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 615.8489873034836,
            "unit": "ns/iter",
            "extra": "iterations: 1134792\ncpu: 615.8419340284395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5593.096659999901,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5592.99799999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10671.016947828717,
            "unit": "ns/iter",
            "extra": "iterations: 76824\ncpu: 10670.748724356981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16475.441601336348,
            "unit": "ns/iter",
            "extra": "iterations: 52681\ncpu: 16475.353543023168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21451.319810614536,
            "unit": "ns/iter",
            "extra": "iterations: 38651\ncpu: 21451.302682983634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26749.74789218186,
            "unit": "ns/iter",
            "extra": "iterations: 31312\ncpu: 26749.73811957082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31878.759480582095,
            "unit": "ns/iter",
            "extra": "iterations: 26106\ncpu: 31878.26936336481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37147.73834173939,
            "unit": "ns/iter",
            "extra": "iterations: 22602\ncpu: 37147.76126006553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42541.808293055605,
            "unit": "ns/iter",
            "extra": "iterations: 19655\ncpu: 42541.82650725017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 568.107888489184,
            "unit": "ns/iter",
            "extra": "iterations: 1226572\ncpu: 568.11626223328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 443.79760640974695,
            "unit": "ns/iter",
            "extra": "iterations: 1579719\ncpu: 443.7867114341219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 430.93707517258474,
            "unit": "ns/iter",
            "extra": "iterations: 1623159\ncpu: 430.93597115254545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 445.7017649945392,
            "unit": "ns/iter",
            "extra": "iterations: 1569410\ncpu: 445.7015056613631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 937.3627645671016,
            "unit": "ns/iter",
            "extra": "iterations: 748298\ncpu: 937.3595813432703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2716.425698172457,
            "unit": "ns/iter",
            "extra": "iterations: 294340\ncpu: 2716.379017462784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8584.733076059021,
            "unit": "ns/iter",
            "extra": "iterations: 96136\ncpu: 8584.65091120919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9363.829655289064,
            "unit": "ns/iter",
            "extra": "iterations: 88045\ncpu: 9363.83099551365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9721.977870214683,
            "unit": "ns/iter",
            "extra": "iterations: 84863\ncpu: 9722.13096402448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9507.44437150901,
            "unit": "ns/iter",
            "extra": "iterations: 86835\ncpu: 9507.31617435368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27811.91653990443,
            "unit": "ns/iter",
            "extra": "iterations: 29583\ncpu: 27812.341547510372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 272764.3712480251,
            "unit": "ns/iter",
            "extra": "iterations: 3165\ncpu: 272761.80094786664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211498.30220712954,
            "unit": "ns/iter",
            "extra": "iterations: 4123\ncpu: 211496.84695609898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210646.41405118315,
            "unit": "ns/iter",
            "extra": "iterations: 4142\ncpu: 210641.40511830206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210140.0702936905,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 210138.46894559666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110750.54243914028,
            "unit": "ns/iter",
            "extra": "iterations: 7929\ncpu: 110749.99369403442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 202377.38470449494,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 202376.08342989642 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}