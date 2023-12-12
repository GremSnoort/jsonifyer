window.BENCHMARK_DATA = {
  "lastUpdate": 1702377735399,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-12 22.04 Debug c++-17": [
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
        "date": 1702377734690,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15722.522072153197,
            "unit": "ns/iter",
            "extra": "iterations: 44128\ncpu: 15721.843274111676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152419.3385883148,
            "unit": "ns/iter",
            "extra": "iterations: 5582\ncpu: 152414.0809745611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 287592.0680610923,
            "unit": "ns/iter",
            "extra": "iterations: 3012\ncpu: 287579.94687915005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 422905.2383976375,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 422891.5486077186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 562608.5269576967,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 562587.0346598206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564732.4789999857,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564738.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 672180.2490896125,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 672130.7356154411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 778994.3868243231,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 778969.7635135131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 888539.0288184753,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 888486.8395773292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12582.694219910976,
            "unit": "ns/iter",
            "extra": "iterations: 55795\ncpu: 12582.043193834583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10698.302044817186,
            "unit": "ns/iter",
            "extra": "iterations: 67341\ncpu: 10697.698281878807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10398.361651707957,
            "unit": "ns/iter",
            "extra": "iterations: 67518\ncpu: 10398.077549690468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10368.736887982397,
            "unit": "ns/iter",
            "extra": "iterations: 67686\ncpu: 10368.594687232231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16814.457438631798,
            "unit": "ns/iter",
            "extra": "iterations: 41634\ncpu: 16814.21194216265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63423.7136101666,
            "unit": "ns/iter",
            "extra": "iterations: 13534\ncpu: 63421.86345500218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 334627.49863334344,
            "unit": "ns/iter",
            "extra": "iterations: 2561\ncpu: 334624.44357672805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 267266.7057542702,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 267262.11508553626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 265033.30322782934,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 265014.556176289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 263318.3252082694,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 263307.7445232961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 597176.7796721697,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 596153.7049180323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4807892.860824689,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4807522.680412364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3891958.5774060027,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3891727.615062764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3854340.8016526084,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3854091.322314058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3903964.6569035044,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3903754.3933054404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2222667.617224921,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2222550.4784688945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3783288.764227601,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3783076.422764221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8225.53788100782,
            "unit": "ns/iter",
            "extra": "iterations: 85333\ncpu: 8225.372364735817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99553.20733410704,
            "unit": "ns/iter",
            "extra": "iterations: 8590\ncpu: 99545.9254947611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192028.0547493563,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 192018.2058047487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 283448.090731083,
            "unit": "ns/iter",
            "extra": "iterations: 3064\ncpu: 283435.1827676236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373811.98793102143,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 373794.6551724122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 465156.1522436145,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 465128.52564102487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 556901.9993601751,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 556879.9104286671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 519928.0390000922,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519885.1999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 592211.9030000204,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592206.499999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6367.527821274257,
            "unit": "ns/iter",
            "extra": "iterations: 109844\ncpu: 6367.265394559512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5111.879526685665,
            "unit": "ns/iter",
            "extra": "iterations: 137076\ncpu: 5111.5716828620925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5107.729714916303,
            "unit": "ns/iter",
            "extra": "iterations: 136837\ncpu: 5107.4504702675895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5136.271179719034,
            "unit": "ns/iter",
            "extra": "iterations: 136168\ncpu: 5136.132571529266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8988.575202991738,
            "unit": "ns/iter",
            "extra": "iterations: 78082\ncpu: 8988.421146999268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48053.50280752748,
            "unit": "ns/iter",
            "extra": "iterations: 17275\ncpu: 48052.40520984079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 203197.56079639602,
            "unit": "ns/iter",
            "extra": "iterations: 4219\ncpu: 203186.96373548263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 164055.67471725598,
            "unit": "ns/iter",
            "extra": "iterations: 5217\ncpu: 164047.7860839558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 161788.02498106885,
            "unit": "ns/iter",
            "extra": "iterations: 5284\ncpu: 161782.1347464043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 163148.83320610656,
            "unit": "ns/iter",
            "extra": "iterations: 5240\ncpu: 163139.5038167932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 367788.475159276,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 367778.0891719746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3114495.484949529,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3114267.8929766077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2550053.1803277726,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2549954.3715846976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2503066.2768818163,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2502939.51612904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2525890.6711955643,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2525750.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1482763.1727999686,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1482688.8000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2466425.9551450782,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2466281.7941952534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7013.476457376883,
            "unit": "ns/iter",
            "extra": "iterations: 99734\ncpu: 7013.393627047945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52032.33080000018,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52029.6799999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95295.56583788859,
            "unit": "ns/iter",
            "extra": "iterations: 8969\ncpu: 95288.39335488837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138336.81096682223,
            "unit": "ns/iter",
            "extra": "iterations: 6237\ncpu: 138329.95029661767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182765.00504413314,
            "unit": "ns/iter",
            "extra": "iterations: 4758\ncpu: 182752.16477511488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 226415.58557615321,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 226405.5657172735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 269698.987251249,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 269684.04850746144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 312886.47207208857,
            "unit": "ns/iter",
            "extra": "iterations: 2775\ncpu: 312875.09909909894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 356201.6012345473,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 356182.0164609062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5856.86536636236,
            "unit": "ns/iter",
            "extra": "iterations: 119049\ncpu: 5856.685902443528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4902.06556358443,
            "unit": "ns/iter",
            "extra": "iterations: 143235\ncpu: 4902.052570949841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4857.417535076328,
            "unit": "ns/iter",
            "extra": "iterations: 144613\ncpu: 4857.091686086279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4899.435629536128,
            "unit": "ns/iter",
            "extra": "iterations: 143280\ncpu: 4899.300670016719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7477.201770794862,
            "unit": "ns/iter",
            "extra": "iterations: 94082\ncpu: 7476.774515847912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25924.24648226013,
            "unit": "ns/iter",
            "extra": "iterations: 31199\ncpu: 25923.34049168211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130800.64573784705,
            "unit": "ns/iter",
            "extra": "iterations: 6546\ncpu: 130795.35594256013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101731.17953299212,
            "unit": "ns/iter",
            "extra": "iterations: 8394\ncpu: 101727.74600905481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98396.45938763832,
            "unit": "ns/iter",
            "extra": "iterations: 8655\ncpu: 98391.93529751539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97538.35479813413,
            "unit": "ns/iter",
            "extra": "iterations: 8743\ncpu: 97535.8572572343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201788.16681754682,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 201778.08963331836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1699502.4899450843,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1699499.9999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1348221.6395348832,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1348212.6453488362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1349942.0479651326,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1349953.3430232513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1355602.774853853,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1355569.736842093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 737827.9872611506,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 737782.7229299403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1307609.346910023,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1307579.353932593 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}