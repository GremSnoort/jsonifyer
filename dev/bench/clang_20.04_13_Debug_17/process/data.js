window.BENCHMARK_DATA = {
  "lastUpdate": 1705954314025,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-13 20.04 Debug c++-17": [
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
        "date": 1702489601578,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15283.745865765257,
            "unit": "ns/iter",
            "extra": "iterations: 46381\ncpu: 15282.962851167504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122087.96810966679,
            "unit": "ns/iter",
            "extra": "iterations: 6930\ncpu: 122081.2987012987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 229144.9762533123,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 229133.746701847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 334850.810611953,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 334833.4237025562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 439930.9838056952,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 439906.68016194366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 546497.0752211814,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 546476.1061946903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 526915.7399999358,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526878.0999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 607662.7779999626,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607648.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 692279.0119850017,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 692231.8352059921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12190.948446414064,
            "unit": "ns/iter",
            "extra": "iterations: 57319\ncpu: 12190.128927580712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10236.13853561435,
            "unit": "ns/iter",
            "extra": "iterations: 68329\ncpu: 10235.59250098787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10144.223654546873,
            "unit": "ns/iter",
            "extra": "iterations: 69196\ncpu: 10143.862361986237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10241.495754275016,
            "unit": "ns/iter",
            "extra": "iterations: 68304\ncpu: 10241.416315296314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16674.82255188589,
            "unit": "ns/iter",
            "extra": "iterations: 42063\ncpu: 16674.490644984915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56316.42507393039,
            "unit": "ns/iter",
            "extra": "iterations: 14541\ncpu: 56313.726703803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257908.0429223782,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 257898.69101978696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 207005.96502308836,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 206996.76949234898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203665.08135919133,
            "unit": "ns/iter",
            "extra": "iterations: 4179\ncpu: 203650.5862646569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 203139.25041895756,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 203129.32726837497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 464403.99736981496,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 464373.6454497639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3808767.913934766,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3808561.475409839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3050583.4786884068,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3050407.213114752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3015475.14285713,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3015337.9870129875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3021240.221498392,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3021082.084690544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1762107.805343684,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1761990.64885496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2965859.099041349,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2965656.549520758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11321538.27659585,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11320943.617021274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5083412.050000789,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5082953.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15173924.22857061,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15172897.142857166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54631.27839999515,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54627.93000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 286011.68375500233,
            "unit": "ns/iter",
            "extra": "iterations: 3004\ncpu: 285999.5006657792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237313.2969747445,
            "unit": "ns/iter",
            "extra": "iterations: 3603\ncpu: 237303.27504857094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235824.2821438355,
            "unit": "ns/iter",
            "extra": "iterations: 3601\ncpu: 235806.49819494478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 234748.19617484327,
            "unit": "ns/iter",
            "extra": "iterations: 3660\ncpu: 234740.90163934376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 473367.7371864771,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 473352.5627044703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3890560.100418256,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3890505.0209204876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3107237.6923076296,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3107195.986622077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3077834.9867550004,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3077745.6953642485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3084581.382059859,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3084559.1362126363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1796905.1627906365,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1796824.8062015465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3002668.5533979307,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3002650.4854368917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11527116.499999702,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11526678.260869538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5096587.479999926,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5096144.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56676.40073300835,
            "unit": "ns/iter",
            "extra": "iterations: 14461\ncpu: 56675.54802572469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 261191.29260842619,
            "unit": "ns/iter",
            "extra": "iterations: 3274\ncpu: 261186.13317043486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 208818.7970731746,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 208812.26829268385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 208694.35318524513,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 208687.2101537703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 206141.33333333718,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 206125.40488276514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 458373.3234672772,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 458342.54756871186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3822918.0655736825,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3822727.459016405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3052521.9477126217,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3052363.398692829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3028667.7654725374,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3028528.013029319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3094825.302931486,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3094638.4364820896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1782286.834932881,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1782194.625719762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2970143.5414011166,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2970004.4585987153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6159.603971303285,
            "unit": "ns/iter",
            "extra": "iterations: 113464\ncpu: 6159.366847634492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33950.158593638625,
            "unit": "ns/iter",
            "extra": "iterations: 21161\ncpu: 33948.244411889966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26926.51918335725,
            "unit": "ns/iter",
            "extra": "iterations: 25960\ncpu: 26925.107858243435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28074.410382635007,
            "unit": "ns/iter",
            "extra": "iterations: 26814\ncpu: 28073.15208473175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21360.930122611735,
            "unit": "ns/iter",
            "extra": "iterations: 32786\ncpu: 21360.1994753859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 128271.87978043174,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 128265.98353156404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 258065.48820925964,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 258050.95799557725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65118.80597709686,
            "unit": "ns/iter",
            "extra": "iterations: 10741\ncpu: 65117.0654501446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64709.61571164494,
            "unit": "ns/iter",
            "extra": "iterations: 10820\ncpu: 64704.787430684184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64586.96246895822,
            "unit": "ns/iter",
            "extra": "iterations: 10871\ncpu: 64583.09263177255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 131100.56708575654,
            "unit": "ns/iter",
            "extra": "iterations: 5329\ncpu: 131093.03809345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121682.79073400504,
            "unit": "ns/iter",
            "extra": "iterations: 5763\ncpu: 121675.29064723133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44106.206232430144,
            "unit": "ns/iter",
            "extra": "iterations: 16719\ncpu: 44103.64256235413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201322.39729574835,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 201315.24741081518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164964.0808390113,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 164953.52345038607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165393.4084141073,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 165390.3332545487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 165318.59524369347,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 165314.15116552936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 280466.68509614136,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 280464.3028846193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1108741.8999999326,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1108670.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 934379.9105472888,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 934325.7676902529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 917587.2943495293,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 917528.1208935514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 933415.3070760588,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 933364.8865153656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 620056.6625332179,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 620052.0814880439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 918015.3892530226,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 917947.7064220143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43222.56735926534,
            "unit": "ns/iter",
            "extra": "iterations: 16219\ncpu: 43221.19119551121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 203013.06529307764,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 203009.634358675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169153.96187258948,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 169152.4372586889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164436.5967058815,
            "unit": "ns/iter",
            "extra": "iterations: 4250\ncpu: 164428.75294117533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 166861.84264811774,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 166858.62317102271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 277323.4767765008,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 277316.43509328883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1116394.358851566,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1116394.8963317482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 936476.4283802612,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 936450.8701472692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 922883.3768116056,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 922854.9407114475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 924282.2800527908,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 924272.9194187698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 611367.8052631792,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 611355.6140350914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 919046.8856766818,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 919025.4927726681 ns\nthreads: 1"
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
        "date": 1702489601578,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15283.745865765257,
            "unit": "ns/iter",
            "extra": "iterations: 46381\ncpu: 15282.962851167504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122087.96810966679,
            "unit": "ns/iter",
            "extra": "iterations: 6930\ncpu: 122081.2987012987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 229144.9762533123,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 229133.746701847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 334850.810611953,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 334833.4237025562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 439930.9838056952,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 439906.68016194366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 546497.0752211814,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 546476.1061946903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 526915.7399999358,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526878.0999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 607662.7779999626,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607648.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 692279.0119850017,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 692231.8352059921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12190.948446414064,
            "unit": "ns/iter",
            "extra": "iterations: 57319\ncpu: 12190.128927580712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10236.13853561435,
            "unit": "ns/iter",
            "extra": "iterations: 68329\ncpu: 10235.59250098787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10144.223654546873,
            "unit": "ns/iter",
            "extra": "iterations: 69196\ncpu: 10143.862361986237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10241.495754275016,
            "unit": "ns/iter",
            "extra": "iterations: 68304\ncpu: 10241.416315296314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16674.82255188589,
            "unit": "ns/iter",
            "extra": "iterations: 42063\ncpu: 16674.490644984915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56316.42507393039,
            "unit": "ns/iter",
            "extra": "iterations: 14541\ncpu: 56313.726703803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257908.0429223782,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 257898.69101978696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 207005.96502308836,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 206996.76949234898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203665.08135919133,
            "unit": "ns/iter",
            "extra": "iterations: 4179\ncpu: 203650.5862646569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 203139.25041895756,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 203129.32726837497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 464403.99736981496,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 464373.6454497639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3808767.913934766,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3808561.475409839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3050583.4786884068,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3050407.213114752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3015475.14285713,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3015337.9870129875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3021240.221498392,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3021082.084690544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1762107.805343684,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1761990.64885496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2965859.099041349,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2965656.549520758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11321538.27659585,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11320943.617021274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5083412.050000789,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5082953.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15173924.22857061,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15172897.142857166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54631.27839999515,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54627.93000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 286011.68375500233,
            "unit": "ns/iter",
            "extra": "iterations: 3004\ncpu: 285999.5006657792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237313.2969747445,
            "unit": "ns/iter",
            "extra": "iterations: 3603\ncpu: 237303.27504857094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235824.2821438355,
            "unit": "ns/iter",
            "extra": "iterations: 3601\ncpu: 235806.49819494478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 234748.19617484327,
            "unit": "ns/iter",
            "extra": "iterations: 3660\ncpu: 234740.90163934376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 473367.7371864771,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 473352.5627044703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3890560.100418256,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3890505.0209204876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3107237.6923076296,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3107195.986622077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3077834.9867550004,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3077745.6953642485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3084581.382059859,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3084559.1362126363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1796905.1627906365,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1796824.8062015465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3002668.5533979307,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3002650.4854368917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11527116.499999702,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11526678.260869538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5096587.479999926,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5096144.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56676.40073300835,
            "unit": "ns/iter",
            "extra": "iterations: 14461\ncpu: 56675.54802572469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 261191.29260842619,
            "unit": "ns/iter",
            "extra": "iterations: 3274\ncpu: 261186.13317043486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 208818.7970731746,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 208812.26829268385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 208694.35318524513,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 208687.2101537703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 206141.33333333718,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 206125.40488276514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 458373.3234672772,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 458342.54756871186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3822918.0655736825,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3822727.459016405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3052521.9477126217,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3052363.398692829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3028667.7654725374,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3028528.013029319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3094825.302931486,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3094638.4364820896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1782286.834932881,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1782194.625719762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2970143.5414011166,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2970004.4585987153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6159.603971303285,
            "unit": "ns/iter",
            "extra": "iterations: 113464\ncpu: 6159.366847634492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33950.158593638625,
            "unit": "ns/iter",
            "extra": "iterations: 21161\ncpu: 33948.244411889966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26926.51918335725,
            "unit": "ns/iter",
            "extra": "iterations: 25960\ncpu: 26925.107858243435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28074.410382635007,
            "unit": "ns/iter",
            "extra": "iterations: 26814\ncpu: 28073.15208473175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21360.930122611735,
            "unit": "ns/iter",
            "extra": "iterations: 32786\ncpu: 21360.1994753859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 128271.87978043174,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 128265.98353156404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 258065.48820925964,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 258050.95799557725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65118.80597709686,
            "unit": "ns/iter",
            "extra": "iterations: 10741\ncpu: 65117.0654501446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64709.61571164494,
            "unit": "ns/iter",
            "extra": "iterations: 10820\ncpu: 64704.787430684184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64586.96246895822,
            "unit": "ns/iter",
            "extra": "iterations: 10871\ncpu: 64583.09263177255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 131100.56708575654,
            "unit": "ns/iter",
            "extra": "iterations: 5329\ncpu: 131093.03809345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121682.79073400504,
            "unit": "ns/iter",
            "extra": "iterations: 5763\ncpu: 121675.29064723133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44106.206232430144,
            "unit": "ns/iter",
            "extra": "iterations: 16719\ncpu: 44103.64256235413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201322.39729574835,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 201315.24741081518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164964.0808390113,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 164953.52345038607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165393.4084141073,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 165390.3332545487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 165318.59524369347,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 165314.15116552936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 280466.68509614136,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 280464.3028846193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1108741.8999999326,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1108670.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 934379.9105472888,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 934325.7676902529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 917587.2943495293,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 917528.1208935514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 933415.3070760588,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 933364.8865153656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 620056.6625332179,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 620052.0814880439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 918015.3892530226,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 917947.7064220143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43222.56735926534,
            "unit": "ns/iter",
            "extra": "iterations: 16219\ncpu: 43221.19119551121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 203013.06529307764,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 203009.634358675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169153.96187258948,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 169152.4372586889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164436.5967058815,
            "unit": "ns/iter",
            "extra": "iterations: 4250\ncpu: 164428.75294117533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 166861.84264811774,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 166858.62317102271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 277323.4767765008,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 277316.43509328883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1116394.358851566,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1116394.8963317482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 936476.4283802612,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 936450.8701472692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 922883.3768116056,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 922854.9407114475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 924282.2800527908,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 924272.9194187698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 611367.8052631792,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 611355.6140350914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 919046.8856766818,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 919025.4927726681 ns\nthreads: 1"
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
        "date": 1702489601578,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15283.745865765257,
            "unit": "ns/iter",
            "extra": "iterations: 46381\ncpu: 15282.962851167504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122087.96810966679,
            "unit": "ns/iter",
            "extra": "iterations: 6930\ncpu: 122081.2987012987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 229144.9762533123,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 229133.746701847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 334850.810611953,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 334833.4237025562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 439930.9838056952,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 439906.68016194366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 546497.0752211814,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 546476.1061946903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 526915.7399999358,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526878.0999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 607662.7779999626,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607648.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 692279.0119850017,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 692231.8352059921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12190.948446414064,
            "unit": "ns/iter",
            "extra": "iterations: 57319\ncpu: 12190.128927580712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10236.13853561435,
            "unit": "ns/iter",
            "extra": "iterations: 68329\ncpu: 10235.59250098787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10144.223654546873,
            "unit": "ns/iter",
            "extra": "iterations: 69196\ncpu: 10143.862361986237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10241.495754275016,
            "unit": "ns/iter",
            "extra": "iterations: 68304\ncpu: 10241.416315296314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16674.82255188589,
            "unit": "ns/iter",
            "extra": "iterations: 42063\ncpu: 16674.490644984915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56316.42507393039,
            "unit": "ns/iter",
            "extra": "iterations: 14541\ncpu: 56313.726703803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257908.0429223782,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 257898.69101978696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 207005.96502308836,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 206996.76949234898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203665.08135919133,
            "unit": "ns/iter",
            "extra": "iterations: 4179\ncpu: 203650.5862646569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 203139.25041895756,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 203129.32726837497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 464403.99736981496,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 464373.6454497639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3808767.913934766,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3808561.475409839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3050583.4786884068,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3050407.213114752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3015475.14285713,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3015337.9870129875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3021240.221498392,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3021082.084690544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1762107.805343684,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1761990.64885496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2965859.099041349,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2965656.549520758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11321538.27659585,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11320943.617021274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5083412.050000789,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5082953.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15173924.22857061,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15172897.142857166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54631.27839999515,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54627.93000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 286011.68375500233,
            "unit": "ns/iter",
            "extra": "iterations: 3004\ncpu: 285999.5006657792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237313.2969747445,
            "unit": "ns/iter",
            "extra": "iterations: 3603\ncpu: 237303.27504857094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235824.2821438355,
            "unit": "ns/iter",
            "extra": "iterations: 3601\ncpu: 235806.49819494478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 234748.19617484327,
            "unit": "ns/iter",
            "extra": "iterations: 3660\ncpu: 234740.90163934376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 473367.7371864771,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 473352.5627044703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3890560.100418256,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3890505.0209204876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3107237.6923076296,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3107195.986622077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3077834.9867550004,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3077745.6953642485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3084581.382059859,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3084559.1362126363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1796905.1627906365,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1796824.8062015465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3002668.5533979307,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3002650.4854368917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11527116.499999702,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11526678.260869538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5096587.479999926,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5096144.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56676.40073300835,
            "unit": "ns/iter",
            "extra": "iterations: 14461\ncpu: 56675.54802572469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 261191.29260842619,
            "unit": "ns/iter",
            "extra": "iterations: 3274\ncpu: 261186.13317043486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 208818.7970731746,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 208812.26829268385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 208694.35318524513,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 208687.2101537703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 206141.33333333718,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 206125.40488276514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 458373.3234672772,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 458342.54756871186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3822918.0655736825,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3822727.459016405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3052521.9477126217,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3052363.398692829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3028667.7654725374,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3028528.013029319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3094825.302931486,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3094638.4364820896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1782286.834932881,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1782194.625719762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2970143.5414011166,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2970004.4585987153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6159.603971303285,
            "unit": "ns/iter",
            "extra": "iterations: 113464\ncpu: 6159.366847634492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33950.158593638625,
            "unit": "ns/iter",
            "extra": "iterations: 21161\ncpu: 33948.244411889966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26926.51918335725,
            "unit": "ns/iter",
            "extra": "iterations: 25960\ncpu: 26925.107858243435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28074.410382635007,
            "unit": "ns/iter",
            "extra": "iterations: 26814\ncpu: 28073.15208473175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21360.930122611735,
            "unit": "ns/iter",
            "extra": "iterations: 32786\ncpu: 21360.1994753859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 128271.87978043174,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 128265.98353156404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 258065.48820925964,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 258050.95799557725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65118.80597709686,
            "unit": "ns/iter",
            "extra": "iterations: 10741\ncpu: 65117.0654501446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64709.61571164494,
            "unit": "ns/iter",
            "extra": "iterations: 10820\ncpu: 64704.787430684184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64586.96246895822,
            "unit": "ns/iter",
            "extra": "iterations: 10871\ncpu: 64583.09263177255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 131100.56708575654,
            "unit": "ns/iter",
            "extra": "iterations: 5329\ncpu: 131093.03809345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121682.79073400504,
            "unit": "ns/iter",
            "extra": "iterations: 5763\ncpu: 121675.29064723133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44106.206232430144,
            "unit": "ns/iter",
            "extra": "iterations: 16719\ncpu: 44103.64256235413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201322.39729574835,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 201315.24741081518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164964.0808390113,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 164953.52345038607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165393.4084141073,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 165390.3332545487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 165318.59524369347,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 165314.15116552936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 280466.68509614136,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 280464.3028846193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1108741.8999999326,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1108670.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 934379.9105472888,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 934325.7676902529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 917587.2943495293,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 917528.1208935514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 933415.3070760588,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 933364.8865153656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 620056.6625332179,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 620052.0814880439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 918015.3892530226,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 917947.7064220143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43222.56735926534,
            "unit": "ns/iter",
            "extra": "iterations: 16219\ncpu: 43221.19119551121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 203013.06529307764,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 203009.634358675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169153.96187258948,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 169152.4372586889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164436.5967058815,
            "unit": "ns/iter",
            "extra": "iterations: 4250\ncpu: 164428.75294117533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 166861.84264811774,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 166858.62317102271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 277323.4767765008,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 277316.43509328883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1116394.358851566,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1116394.8963317482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 936476.4283802612,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 936450.8701472692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 922883.3768116056,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 922854.9407114475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 924282.2800527908,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 924272.9194187698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 611367.8052631792,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 611355.6140350914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 919046.8856766818,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 919025.4927726681 ns\nthreads: 1"
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
        "date": 1702489601578,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15283.745865765257,
            "unit": "ns/iter",
            "extra": "iterations: 46381\ncpu: 15282.962851167504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122087.96810966679,
            "unit": "ns/iter",
            "extra": "iterations: 6930\ncpu: 122081.2987012987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 229144.9762533123,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 229133.746701847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 334850.810611953,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 334833.4237025562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 439930.9838056952,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 439906.68016194366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 546497.0752211814,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 546476.1061946903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 526915.7399999358,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526878.0999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 607662.7779999626,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607648.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 692279.0119850017,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 692231.8352059921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12190.948446414064,
            "unit": "ns/iter",
            "extra": "iterations: 57319\ncpu: 12190.128927580712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10236.13853561435,
            "unit": "ns/iter",
            "extra": "iterations: 68329\ncpu: 10235.59250098787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10144.223654546873,
            "unit": "ns/iter",
            "extra": "iterations: 69196\ncpu: 10143.862361986237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10241.495754275016,
            "unit": "ns/iter",
            "extra": "iterations: 68304\ncpu: 10241.416315296314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16674.82255188589,
            "unit": "ns/iter",
            "extra": "iterations: 42063\ncpu: 16674.490644984915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56316.42507393039,
            "unit": "ns/iter",
            "extra": "iterations: 14541\ncpu: 56313.726703803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257908.0429223782,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 257898.69101978696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 207005.96502308836,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 206996.76949234898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203665.08135919133,
            "unit": "ns/iter",
            "extra": "iterations: 4179\ncpu: 203650.5862646569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 203139.25041895756,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 203129.32726837497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 464403.99736981496,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 464373.6454497639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3808767.913934766,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3808561.475409839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3050583.4786884068,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3050407.213114752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3015475.14285713,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3015337.9870129875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3021240.221498392,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3021082.084690544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1762107.805343684,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1761990.64885496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2965859.099041349,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2965656.549520758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11321538.27659585,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11320943.617021274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5083412.050000789,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5082953.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15173924.22857061,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15172897.142857166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54631.27839999515,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54627.93000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 286011.68375500233,
            "unit": "ns/iter",
            "extra": "iterations: 3004\ncpu: 285999.5006657792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237313.2969747445,
            "unit": "ns/iter",
            "extra": "iterations: 3603\ncpu: 237303.27504857094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235824.2821438355,
            "unit": "ns/iter",
            "extra": "iterations: 3601\ncpu: 235806.49819494478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 234748.19617484327,
            "unit": "ns/iter",
            "extra": "iterations: 3660\ncpu: 234740.90163934376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 473367.7371864771,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 473352.5627044703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3890560.100418256,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3890505.0209204876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3107237.6923076296,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3107195.986622077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3077834.9867550004,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3077745.6953642485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3084581.382059859,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3084559.1362126363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1796905.1627906365,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1796824.8062015465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3002668.5533979307,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3002650.4854368917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11527116.499999702,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11526678.260869538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5096587.479999926,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5096144.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56676.40073300835,
            "unit": "ns/iter",
            "extra": "iterations: 14461\ncpu: 56675.54802572469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 261191.29260842619,
            "unit": "ns/iter",
            "extra": "iterations: 3274\ncpu: 261186.13317043486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 208818.7970731746,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 208812.26829268385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 208694.35318524513,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 208687.2101537703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 206141.33333333718,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 206125.40488276514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 458373.3234672772,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 458342.54756871186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3822918.0655736825,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3822727.459016405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3052521.9477126217,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3052363.398692829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3028667.7654725374,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3028528.013029319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3094825.302931486,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3094638.4364820896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1782286.834932881,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1782194.625719762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2970143.5414011166,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2970004.4585987153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6159.603971303285,
            "unit": "ns/iter",
            "extra": "iterations: 113464\ncpu: 6159.366847634492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33950.158593638625,
            "unit": "ns/iter",
            "extra": "iterations: 21161\ncpu: 33948.244411889966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26926.51918335725,
            "unit": "ns/iter",
            "extra": "iterations: 25960\ncpu: 26925.107858243435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28074.410382635007,
            "unit": "ns/iter",
            "extra": "iterations: 26814\ncpu: 28073.15208473175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21360.930122611735,
            "unit": "ns/iter",
            "extra": "iterations: 32786\ncpu: 21360.1994753859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 128271.87978043174,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 128265.98353156404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 258065.48820925964,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 258050.95799557725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65118.80597709686,
            "unit": "ns/iter",
            "extra": "iterations: 10741\ncpu: 65117.0654501446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64709.61571164494,
            "unit": "ns/iter",
            "extra": "iterations: 10820\ncpu: 64704.787430684184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64586.96246895822,
            "unit": "ns/iter",
            "extra": "iterations: 10871\ncpu: 64583.09263177255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 131100.56708575654,
            "unit": "ns/iter",
            "extra": "iterations: 5329\ncpu: 131093.03809345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121682.79073400504,
            "unit": "ns/iter",
            "extra": "iterations: 5763\ncpu: 121675.29064723133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44106.206232430144,
            "unit": "ns/iter",
            "extra": "iterations: 16719\ncpu: 44103.64256235413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201322.39729574835,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 201315.24741081518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164964.0808390113,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 164953.52345038607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165393.4084141073,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 165390.3332545487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 165318.59524369347,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 165314.15116552936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 280466.68509614136,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 280464.3028846193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1108741.8999999326,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1108670.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 934379.9105472888,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 934325.7676902529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 917587.2943495293,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 917528.1208935514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 933415.3070760588,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 933364.8865153656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 620056.6625332179,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 620052.0814880439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 918015.3892530226,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 917947.7064220143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43222.56735926534,
            "unit": "ns/iter",
            "extra": "iterations: 16219\ncpu: 43221.19119551121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 203013.06529307764,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 203009.634358675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169153.96187258948,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 169152.4372586889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164436.5967058815,
            "unit": "ns/iter",
            "extra": "iterations: 4250\ncpu: 164428.75294117533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 166861.84264811774,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 166858.62317102271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 277323.4767765008,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 277316.43509328883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1116394.358851566,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1116394.8963317482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 936476.4283802612,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 936450.8701472692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 922883.3768116056,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 922854.9407114475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 924282.2800527908,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 924272.9194187698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 611367.8052631792,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 611355.6140350914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 919046.8856766818,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 919025.4927726681 ns\nthreads: 1"
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
        "date": 1702492189518,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15733.08809751293,
            "unit": "ns/iter",
            "extra": "iterations: 45041\ncpu: 15732.75904176195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127052.68370414525,
            "unit": "ns/iter",
            "extra": "iterations: 6652\ncpu: 127053.03668069757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 239524.48180816197,
            "unit": "ns/iter",
            "extra": "iterations: 3628\ncpu: 239516.8963616319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 349451.9752836577,
            "unit": "ns/iter",
            "extra": "iterations: 2468\ncpu: 349438.85737439233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 460674.6346255565,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 460666.80828465236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 570546.4207397198,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 570520.2774108319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 550008.3759999371,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549981.8999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 637708.6689999488,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637696.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 724269.7882352956,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 724224.7058823538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12288.125815700412,
            "unit": "ns/iter",
            "extra": "iterations: 56853\ncpu: 12287.657643396125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10291.16282244962,
            "unit": "ns/iter",
            "extra": "iterations: 68848\ncpu: 10290.827620264945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10125.898024505404,
            "unit": "ns/iter",
            "extra": "iterations: 69046\ncpu: 10125.436665411471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10243.402042723294,
            "unit": "ns/iter",
            "extra": "iterations: 68438\ncpu: 10242.678044361319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16988.02670003339,
            "unit": "ns/iter",
            "extra": "iterations: 41161\ncpu: 16987.38611792715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58104.877356474535,
            "unit": "ns/iter",
            "extra": "iterations: 14057\ncpu: 58102.95226577499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257036.36807227405,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 257027.46987951794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205861.4500000107,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 205852.56038647372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202537.34850639576,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202528.97107633925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 202274.1080503372,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 202268.0598432671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 464668.4669156746,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 464655.336179295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3920406.451476862,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3920324.050632908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3176844.4452055763,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3176732.5342465863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3169527.7671234454,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3169452.054794522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3129350.4087837646,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3129176.6891891873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1833097.8531745737,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1833061.5079365093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3073987.159468456,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3073837.209302329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11681519.912087254,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11680954.945054937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5227134.6700001685,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5227143.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15609868.132352576,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15609644.117647072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54549.537200000486,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54548.91999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293572.0725334993,
            "unit": "ns/iter",
            "extra": "iterations: 2909\ncpu: 293570.4709522176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 238316.9423183567,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 238310.843039378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235682.45267488837,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 235682.853223593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 232268.09610179596,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 232265.5657823507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 506030.95590731275,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 506017.35443753307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4013323.675324646,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4013283.5497835684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3220200.570934117,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3220156.401384088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3210621.379310333,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3210595.172413794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3212424.1551726083,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3212329.310344831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1863651.6753507245,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1863632.6653306638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3119393.345637479,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3119379.5302013457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11887842.233333383,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11887358.888888855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5340001.759999495,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5339937.999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57804.884130803846,
            "unit": "ns/iter",
            "extra": "iterations: 14128\ncpu: 57804.38137032809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 255295.88656717582,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 255292.59701492573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 208718.0180380568,
            "unit": "ns/iter",
            "extra": "iterations: 4047\ncpu: 208709.51321966876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 208035.4052874056,
            "unit": "ns/iter",
            "extra": "iterations: 4123\ncpu: 208035.8961920928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 205694.00289574816,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 205686.9932432432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 463779.1272727705,
            "unit": "ns/iter",
            "extra": "iterations: 1870\ncpu: 463768.8235294118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3937542.9704641034,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3937473.4177215183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3196304.599315111,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3196169.1780821863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3189946.955631244,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3189840.6143344655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3143067.033783603,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3142929.7297297344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1843462.2738096903,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1843422.0238095322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3084033.737541539,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3083940.5315614445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6193.7952837666235,
            "unit": "ns/iter",
            "extra": "iterations: 113650\ncpu: 6193.607567091972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34477.179478359576,
            "unit": "ns/iter",
            "extra": "iterations: 20359\ncpu: 34475.543985460936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28080.793425533386,
            "unit": "ns/iter",
            "extra": "iterations: 24945\ncpu: 28080.26057326129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27963.92891373823,
            "unit": "ns/iter",
            "extra": "iterations: 25040\ncpu: 27963.686102236403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21682.15752661525,
            "unit": "ns/iter",
            "extra": "iterations: 32312\ncpu: 21681.121564743764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 133251.47836035118,
            "unit": "ns/iter",
            "extra": "iterations: 5245\ncpu: 133242.82173498592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 266863.204874327,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 266853.73191165243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66814.96284653219,
            "unit": "ns/iter",
            "extra": "iterations: 10497\ncpu: 66811.4032580732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67104.76555758256,
            "unit": "ns/iter",
            "extra": "iterations: 10429\ncpu: 67101.83143158478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66918.07612655955,
            "unit": "ns/iter",
            "extra": "iterations: 10430\ncpu: 66917.44007670184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135754.50842532067,
            "unit": "ns/iter",
            "extra": "iterations: 5163\ncpu: 135747.12376525105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124845.97008013481,
            "unit": "ns/iter",
            "extra": "iterations: 5615\ncpu: 124842.13713268073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42311.074734174326,
            "unit": "ns/iter",
            "extra": "iterations: 16552\ncpu: 42308.92943450922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 208048.35953722868,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 208037.19964402172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 168943.0106177451,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 168939.88899613955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 166474.73924412284,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 166471.9277394814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 167395.60315940657,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 167390.7132599316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 289823.6403654873,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 289817.44186046027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1150973.184210582,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1150931.9078947431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 972749.0597222123,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 972750.5555555559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 953094.1446112407,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 953079.2633015059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 957284.3032786747,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 957275.1366120165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 634501.9909338041,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 634497.098821391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 954789.6803279335,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 954743.8524590265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42427.61121267289,
            "unit": "ns/iter",
            "extra": "iterations: 16410\ncpu: 42427.04448507024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 208389.45120859853,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 208386.21307072532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169927.36012627196,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 169926.25060708838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 167947.86778442512,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 167941.53293412915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 169250.15737389156,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 169248.99831040256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 287378.1943419146,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 287378.67978679755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1154219.021452118,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1154205.4455445588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 968656.0733055407,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 968657.5380359672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 959093.6808218142,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 959061.7808219052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 962100.6176067309,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 962103.1636863842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 635925.091651638,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 635927.0417422759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 957253.0191518324,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 957242.4076607358 ns\nthreads: 1"
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
        "date": 1702503251936,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16130.752973994904,
            "unit": "ns/iter",
            "extra": "iterations: 43376\ncpu: 16130.284028033935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129321.67783899796,
            "unit": "ns/iter",
            "extra": "iterations: 6534\ncpu: 129321.3345576982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 243624.3660112309,
            "unit": "ns/iter",
            "extra": "iterations: 3560\ncpu: 243612.5561797753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 356778.7049112744,
            "unit": "ns/iter",
            "extra": "iterations: 2423\ncpu: 356781.92323565815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 470359.035249482,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 470347.1258134493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 581022.782899118,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 580971.4094856378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 557534.4339999901,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557539.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 647045.7409999426,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647014.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 738513.0892430878,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 738467.1713147413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12397.362399121661,
            "unit": "ns/iter",
            "extra": "iterations: 56504\ncpu: 12396.653334277222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10415.58088530217,
            "unit": "ns/iter",
            "extra": "iterations: 67299\ncpu: 10414.318191949364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10246.00228197009,
            "unit": "ns/iter",
            "extra": "iterations: 68362\ncpu: 10245.76080278518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10377.688160064039,
            "unit": "ns/iter",
            "extra": "iterations: 67323\ncpu: 10377.787680287573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17027.56782249687,
            "unit": "ns/iter",
            "extra": "iterations: 40923\ncpu: 17026.657380934914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57680.359825574225,
            "unit": "ns/iter",
            "extra": "iterations: 14218\ncpu: 57677.79575186383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 262090.53700308365,
            "unit": "ns/iter",
            "extra": "iterations: 3270\ncpu: 262090.21406727823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 208928.73639249074,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 208927.92287039306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202617.9152421872,
            "unit": "ns/iter",
            "extra": "iterations: 4212\ncpu: 202619.3732193733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 205324.84541296016,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 205314.73633517927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 502230.3552255483,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 502223.9862935466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3942640.220338848,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3942440.2542372877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3190344.2422144604,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3190211.4186851224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3178722.4591837353,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3172746.938775514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3143825.418918811,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3143616.8918918855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1846522.8123752056,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1846411.9760479012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3085431.363333555,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3085159.3333333344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11700387.8791218,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11699769.230769211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5341061.630000468,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5340505.000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16207477.029411165,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 16204851.470588263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54866.434799998846,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54860.529999999846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 298092.5143747706,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 298073.3287149284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 238879.91357682267,
            "unit": "ns/iter",
            "extra": "iterations: 3587\ncpu: 238865.3192082525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 237179.32055171396,
            "unit": "ns/iter",
            "extra": "iterations: 3625\ncpu: 237164.49655172523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 237345.9862334788,
            "unit": "ns/iter",
            "extra": "iterations: 3632\ncpu: 237324.80726872358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 511894.1329377242,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 511869.8516320464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4041255.0305678234,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4041168.122270733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3251023.2902100654,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3250930.0699300724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3244945.4529615217,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3244972.125435554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3220657.2664360297,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3220575.432525961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1886407.3549695206,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1886362.0689655216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3145247.5728814285,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3145170.5084745833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11968860.764044764,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11968376.404494444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5474875.830000201,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5474925.000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58589.15644171432,
            "unit": "ns/iter",
            "extra": "iterations: 14018\ncpu: 58586.174917962606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 260040.70753859184,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 260022.04056917768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 212739.0633697647,
            "unit": "ns/iter",
            "extra": "iterations: 4024\ncpu: 212722.7634194819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 207520.67727824868,
            "unit": "ns/iter",
            "extra": "iterations: 4115\ncpu: 207509.06439854208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 208631.72747252003,
            "unit": "ns/iter",
            "extra": "iterations: 4095\ncpu: 208618.9987789983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 495046.14903302334,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 495041.92263936385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3957575.4382977197,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3957491.9148935988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3214614.7317070076,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3214567.944250874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3192030.8041236177,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3192058.0756013887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3158458.989830667,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3158283.050847463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1857404.8446215824,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1857421.3147410376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3113778.6499997824,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3113656.666666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6124.041811603619,
            "unit": "ns/iter",
            "extra": "iterations: 114418\ncpu: 6124.101976961667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33819.65182322725,
            "unit": "ns/iter",
            "extra": "iterations: 20705\ncpu: 33818.93262496977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27891.271988525874,
            "unit": "ns/iter",
            "extra": "iterations: 25104\ncpu: 27891.53919694089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27147.830171844704,
            "unit": "ns/iter",
            "extra": "iterations: 25779\ncpu: 27146.340044221906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21427.63934977075,
            "unit": "ns/iter",
            "extra": "iterations: 32727\ncpu: 21427.860787728674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 135909.6573589107,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 135906.6511537719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 266909.6537142867,
            "unit": "ns/iter",
            "extra": "iterations: 2625\ncpu: 266911.9238095272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67180.8559240784,
            "unit": "ns/iter",
            "extra": "iterations: 10432\ncpu: 67176.59125766833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66990.79689743959,
            "unit": "ns/iter",
            "extra": "iterations: 10443\ncpu: 66987.65680359965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66905.01762958935,
            "unit": "ns/iter",
            "extra": "iterations: 10437\ncpu: 66904.24451470654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 129599.54720472067,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129593.33580155543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 118772.80903838339,
            "unit": "ns/iter",
            "extra": "iterations: 5886\ncpu: 118771.06693849692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42279.663026429276,
            "unit": "ns/iter",
            "extra": "iterations: 16574\ncpu: 42276.945818752065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 209257.23918879803,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 209255.29376677633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 168447.9062274675,
            "unit": "ns/iter",
            "extra": "iterations: 4159\ncpu: 168441.45227218026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 166875.57190556955,
            "unit": "ns/iter",
            "extra": "iterations: 4193\ncpu: 166877.1046983064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 167530.75616176514,
            "unit": "ns/iter",
            "extra": "iterations: 4179\ncpu: 167526.41780330255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 281903.08205951605,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 281885.96138374705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1157097.123762382,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1157052.3102310435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 977573.7726639129,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 977567.5034867479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 959311.4567901647,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 959252.6748971118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 964179.2110344262,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 964095.5862068989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 634197.0905796386,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 634134.6014492853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 955494.6693989256,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 955467.4863387902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43982.61844916051,
            "unit": "ns/iter",
            "extra": "iterations: 15914\ncpu: 43978.8111097152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 209439.52826802374,
            "unit": "ns/iter",
            "extra": "iterations: 3343\ncpu: 209419.20430750775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172422.4280469967,
            "unit": "ns/iter",
            "extra": "iterations: 4086\ncpu: 172196.5247185529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 167672.6784773722,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 167674.07230069512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170474.75036496643,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 170467.54257907666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 283596.53693180997,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 283586.7694805177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1164570.3783331858,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1164491.8333333246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 973865.0998612978,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 973851.8723994435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 960551.6598079783,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 960531.4128943798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 958739.8504800647,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 958747.0507544485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 627802.4370502987,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 627781.0251798446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 957222.4733242134,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 957152.53077976 ns\nthreads: 1"
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
        "date": 1705574914589,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14977.382159987194,
            "unit": "ns/iter",
            "extra": "iterations: 46491\ncpu: 14976.128713084256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122092.3298255743,
            "unit": "ns/iter",
            "extra": "iterations: 6937\ncpu: 122086.29090384893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 230597.97804814234,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 230587.2520497223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 335916.64319065335,
            "unit": "ns/iter",
            "extra": "iterations: 2570\ncpu: 335891.08949416364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 442854.2725880584,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 442832.6186830017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 556915.3544303738,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 556890.7594936711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 528503.7229999716,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528469.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 612637.5290000397,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612610.1000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 699789.861027202,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 699758.5347432022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12040.779090158816,
            "unit": "ns/iter",
            "extra": "iterations: 58164\ncpu: 12040.279210508226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10085.023430191555,
            "unit": "ns/iter",
            "extra": "iterations: 69483\ncpu: 10084.597671372854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10080.743971724967,
            "unit": "ns/iter",
            "extra": "iterations: 60548\ncpu: 10080.286714672637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10139.117543122575,
            "unit": "ns/iter",
            "extra": "iterations: 69047\ncpu: 10138.51724187871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16597.135748324647,
            "unit": "ns/iter",
            "extra": "iterations: 42181\ncpu: 16596.605106564588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57993.352102688536,
            "unit": "ns/iter",
            "extra": "iterations: 14101\ncpu: 57991.27012268631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 252986.99259480054,
            "unit": "ns/iter",
            "extra": "iterations: 3376\ncpu: 252976.7772511853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 201183.84429876256,
            "unit": "ns/iter",
            "extra": "iterations: 4271\ncpu: 201175.43900725836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197639.9652842397,
            "unit": "ns/iter",
            "extra": "iterations: 4292\ncpu: 197633.87698042896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195806.917203326,
            "unit": "ns/iter",
            "extra": "iterations: 4348\ncpu: 195800.5059797609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 460259.36582806736,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 460230.1362683453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3784605.9065041267,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3784393.495934964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3075012.089403942,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3074831.456953641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3040322.8622949207,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3040190.163934421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3055831.7730264966,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3055596.3815789465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1819022.7862744762,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1818964.3137254948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2984664.292604692,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2984498.3922829586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11523357.849462686,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11522362.365591409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5204231.159999608,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5203981.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15321580.799999472,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15320490.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54724.85609999467,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54723.20999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290496.5754303005,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 290483.05771177943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 234523.1906582638,
            "unit": "ns/iter",
            "extra": "iterations: 3661\ncpu: 234507.1018847311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 227977.8579787233,
            "unit": "ns/iter",
            "extra": "iterations: 3760\ncpu: 227968.64361702037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 227386.453725794,
            "unit": "ns/iter",
            "extra": "iterations: 3771\ncpu: 227379.3953858397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 476442.5988950284,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 476406.46408840007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3847503.950207766,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3847283.8174273954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3124587.7449667347,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3124461.744966443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3116153.959731354,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3115980.8724832316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3128777.9295303,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3128639.9328859244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1845847.521912422,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1845764.3426294795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3058265.5211727466,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3058156.351791528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11791264.70000003,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11790338.888888858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5298330.200000691,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5298122.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58454.76265642699,
            "unit": "ns/iter",
            "extra": "iterations: 14064\ncpu: 58452.524175199025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 251460.10749852605,
            "unit": "ns/iter",
            "extra": "iterations: 3414\ncpu: 251450.55653192798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 206929.637375636,
            "unit": "ns/iter",
            "extra": "iterations: 4222\ncpu: 206919.3983893889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202564.9804291432,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 202556.26031596295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 196551.79944546343,
            "unit": "ns/iter",
            "extra": "iterations: 4328\ncpu: 196543.23012939052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 457476.6597992795,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 457457.263602747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3780186.2520325817,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3780010.975609757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3065594.6357614696,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3065500.3311258336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3049056.281967199,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3048919.01639344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3054969.1143792514,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3054814.7058823407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1808718.8407768284,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1808647.5728155407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2982984.2371797008,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2982897.115384612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6135.775397089438,
            "unit": "ns/iter",
            "extra": "iterations: 114206\ncpu: 6135.404444600088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33849.20277992968,
            "unit": "ns/iter",
            "extra": "iterations: 20648\ncpu: 33848.130569546694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26041.717098639114,
            "unit": "ns/iter",
            "extra": "iterations: 26815\ncpu: 26040.510908073702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27289.177863607023,
            "unit": "ns/iter",
            "extra": "iterations: 25632\ncpu: 27288.561173533064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21543.616411802854,
            "unit": "ns/iter",
            "extra": "iterations: 32501\ncpu: 21542.47253930653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 128843.19433718717,
            "unit": "ns/iter",
            "extra": "iterations: 5439\ncpu: 128836.21989336378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 257525.22830883355,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 257514.2279411789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65637.14131960996,
            "unit": "ns/iter",
            "extra": "iterations: 10685\ncpu: 65635.09592887263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65135.165815621396,
            "unit": "ns/iter",
            "extra": "iterations: 10771\ncpu: 65132.71748212767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65238.99181470817,
            "unit": "ns/iter",
            "extra": "iterations: 10751\ncpu: 65236.973304809246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133372.77907420025,
            "unit": "ns/iter",
            "extra": "iterations: 5228\ncpu: 133365.32134659536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121692.2924118621,
            "unit": "ns/iter",
            "extra": "iterations: 5759\ncpu: 121687.93193262651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41424.195573702964,
            "unit": "ns/iter",
            "extra": "iterations: 16899\ncpu: 41422.50429019536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 200359.36293324604,
            "unit": "ns/iter",
            "extra": "iterations: 3491\ncpu: 200348.0951016913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164449.35752877485,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 164440.2161146357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162322.09156235255,
            "unit": "ns/iter",
            "extra": "iterations: 4314\ncpu: 162315.15994436835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 162807.66255239592,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 162802.9343269685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 290010.0875671303,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 289998.3890954162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1112589.2639110163,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1112536.8839427768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 940190.0403768127,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 940159.4885598896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 926633.4539385956,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 926593.7249666232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 931159.329787289,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 931118.4840425357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 623123.9101423625,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 623100.8896797239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920423.3280632418,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 920371.8050065847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42684.18711321038,
            "unit": "ns/iter",
            "extra": "iterations: 16482\ncpu: 42681.962140516756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 203826.66462882227,
            "unit": "ns/iter",
            "extra": "iterations: 3435\ncpu: 203822.15429403147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 167305.5396181477,
            "unit": "ns/iter",
            "extra": "iterations: 4190\ncpu: 167298.7589498792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 163914.00772110856,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 163910.15442208745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 166287.67324611792,
            "unit": "ns/iter",
            "extra": "iterations: 4205\ncpu: 166282.25921522244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 288781.7060280721,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 288775.3509496268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1120205.0288000463,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1120162.4000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 932545.2509960182,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 932505.1792828672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 931076.996005428,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 931044.4740346238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 935487.7192513924,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 935460.4278074784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 623156.0899376537,
            "unit": "ns/iter",
            "extra": "iterations: 1123\ncpu: 623143.0988423835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 925160.9695364711,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 925104.3708609216 ns\nthreads: 1"
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
        "date": 1705772731091,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15243.504595768836,
            "unit": "ns/iter",
            "extra": "iterations: 45803\ncpu: 15243.407637054344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122938.95171407703,
            "unit": "ns/iter",
            "extra": "iterations: 6855\ncpu: 122936.99489423777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 243279.68738279367,
            "unit": "ns/iter",
            "extra": "iterations: 3733\ncpu: 243275.00669702655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 339265.5548564705,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 339251.5139598901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 447912.2319587614,
            "unit": "ns/iter",
            "extra": "iterations: 1940\ncpu: 447900.51546391717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 554591.4766773098,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 554579.5527156546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 543742.366999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543730.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 619286.8760000465,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 619277.4000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 709199.7207001395,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 709180.8980213098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12275.399919318565,
            "unit": "ns/iter",
            "extra": "iterations: 57014\ncpu: 12275.569158452296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10249.139330709446,
            "unit": "ns/iter",
            "extra": "iterations: 68341\ncpu: 10248.749652478029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10126.931483300645,
            "unit": "ns/iter",
            "extra": "iterations: 69224\ncpu: 10126.902519357469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10199.229454652022,
            "unit": "ns/iter",
            "extra": "iterations: 68580\ncpu: 10199.024496937893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16532.14329541658,
            "unit": "ns/iter",
            "extra": "iterations: 42374\ncpu: 16531.79544060034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55557.86943519261,
            "unit": "ns/iter",
            "extra": "iterations: 14713\ncpu: 55558.28858832325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 256201.18369792777,
            "unit": "ns/iter",
            "extra": "iterations: 3337\ncpu: 256202.84686844476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 202415.1594202978,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 202412.28320266094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 200426.27195668223,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 200427.6194961154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198018.7988317778,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 198019.88317756975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 467385.5066880825,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 467388.33600856166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3831796.4959015744,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3831711.8852458973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3106989.4816053426,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3107010.367892985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3062425.8217822276,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3062406.600660061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3061751.782894736,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3061688.1578947306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1831950.465346534,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1831964.3564356456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3002251.8802588806,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3002193.851132683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11667687.99999975,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11667636.956521709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5292104.100000188,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5291950.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15436395.043478286,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15436439.1304348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53826.942599999944,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53826.749999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293310.14591837657,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 293312.2448979596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 233908.82130208611,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 233905.0667393083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 233245.5509484906,
            "unit": "ns/iter",
            "extra": "iterations: 3690\ncpu: 233245.44715447197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229054.18833599947,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 229050.9898341359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 480034.74861266505,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 480034.9056603772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3919203.2658232125,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3919137.1308016796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3152460.2983050128,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3152484.745762712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3146704.260135155,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3146726.0135135213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3131055.5387202417,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3130989.8989899005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1857261.9437750527,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1857265.6626506057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3055158.5690792655,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3055133.881578964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11801636.011111643,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11801418.888888864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5162141.680000331,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5161940.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57030.95443108725,
            "unit": "ns/iter",
            "extra": "iterations: 14308\ncpu: 57031.38104556919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 255145.9581491426,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 255142.82346006462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 204651.00881373705,
            "unit": "ns/iter",
            "extra": "iterations: 4198\ncpu: 204650.83373034868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202797.86047631365,
            "unit": "ns/iter",
            "extra": "iterations: 4157\ncpu: 202795.93456819793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 200050.89349250603,
            "unit": "ns/iter",
            "extra": "iterations: 4272\ncpu: 200050.49157303458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 463401.32584266394,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 463404.17335473653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3856715.309917332,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3856635.1239669644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3099199.596666722,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3099240.666666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3085694.6258276463,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3085676.8211920466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3070315.5874590585,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3070287.4587458884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1833887.7490194528,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1833887.843137261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3014240.1363636134,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3014236.3636363517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6110.399309520671,
            "unit": "ns/iter",
            "extra": "iterations: 114703\ncpu: 6110.4827249504815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33818.40024154692,
            "unit": "ns/iter",
            "extra": "iterations: 20700\ncpu: 33817.60869565207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26932.11082068017,
            "unit": "ns/iter",
            "extra": "iterations: 26015\ncpu: 26932.196809532907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27359.590212799252,
            "unit": "ns/iter",
            "extra": "iterations: 26504\ncpu: 27359.53440990031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21532.328654361223,
            "unit": "ns/iter",
            "extra": "iterations: 32557\ncpu: 21532.622784654588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 129330.82509716725,
            "unit": "ns/iter",
            "extra": "iterations: 5403\ncpu: 129330.2609661296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262240.3298390069,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 262237.28940472036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66527.43917956615,
            "unit": "ns/iter",
            "extra": "iterations: 10531\ncpu: 66527.37631753794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66465.31757782532,
            "unit": "ns/iter",
            "extra": "iterations: 10536\ncpu: 66464.35079726641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66275.0727015515,
            "unit": "ns/iter",
            "extra": "iterations: 10605\ncpu: 66274.86091466312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 134931.43063584348,
            "unit": "ns/iter",
            "extra": "iterations: 5190\ncpu: 134929.40269749358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123857.1028400182,
            "unit": "ns/iter",
            "extra": "iterations: 5669\ncpu: 123853.02522490703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41739.71489183798,
            "unit": "ns/iter",
            "extra": "iterations: 16734\ncpu: 41738.07218835893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 206287.60679466435,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 206288.71491876044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 167472.50071840006,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 167469.87547892766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 166526.5538132449,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 166521.9767165594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 166849.73450905486,
            "unit": "ns/iter",
            "extra": "iterations: 4196\ncpu: 166850.66730219213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 293410.34461660625,
            "unit": "ns/iter",
            "extra": "iterations: 2452\ncpu: 293402.85481239855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1131233.8481422148,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1131221.0016155061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 955770.561042477,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 955734.4307270134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 942829.1361186563,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 942825.067385439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 945518.3738192759,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 945515.7894736836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 631794.8178538819,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 631785.211902622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 940360.0173796611,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 940346.2566844895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43402.701155105555,
            "unit": "ns/iter",
            "extra": "iterations: 16189\ncpu: 43402.20520106269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 208721.43010430844,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 208721.34128167163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 170512.45042630367,
            "unit": "ns/iter",
            "extra": "iterations: 4105\ncpu: 170508.9890377601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 168347.75403906713,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 168348.56522787688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 168469.17870905774,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 168463.51156069382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 282764.83468065487,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 282768.7146321713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1132795.5461912146,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1132791.2479740705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 947871.2493224215,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 947849.4579945827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 936765.4237969285,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936767.513368985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 936379.6885026129,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936373.9304812828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 632204.4187725177,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 632217.9602888064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 937478.7309236792,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 937466.666666661 ns\nthreads: 1"
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
        "date": 1705774383232,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15578.317297159412,
            "unit": "ns/iter",
            "extra": "iterations: 42903\ncpu: 15577.89431974454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126808.2698008687,
            "unit": "ns/iter",
            "extra": "iterations: 6679\ncpu: 126803.23401706845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 240990.86011080604,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 240985.9002770083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 351705.0781122983,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 351700.08136696485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 462693.6906666742,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 462684.05333333317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 574269.2023888284,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 574239.9469144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 549814.2090000329,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549822.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 638224.3150000023,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638197.8000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 728202.8148147904,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 728165.7210401891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12194.990554528857,
            "unit": "ns/iter",
            "extra": "iterations: 57382\ncpu: 12194.843330661162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10260.218797268919,
            "unit": "ns/iter",
            "extra": "iterations: 68095\ncpu: 10260.233497319918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10222.88235723747,
            "unit": "ns/iter",
            "extra": "iterations: 68453\ncpu: 10222.088148072413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10317.734468937577,
            "unit": "ns/iter",
            "extra": "iterations: 67864\ncpu: 10317.47760226334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16686.237268739405,
            "unit": "ns/iter",
            "extra": "iterations: 41944\ncpu: 16685.78580965097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57492.42070081555,
            "unit": "ns/iter",
            "extra": "iterations: 14212\ncpu: 57490.67689276673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 259217.7129071071,
            "unit": "ns/iter",
            "extra": "iterations: 3316\ncpu: 259218.0940892644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 202631.28734810962,
            "unit": "ns/iter",
            "extra": "iterations: 4197\ncpu: 202623.73123659755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202635.07929723986,
            "unit": "ns/iter",
            "extra": "iterations: 4212\ncpu: 202633.90313390258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 204688.00234852202,
            "unit": "ns/iter",
            "extra": "iterations: 4258\ncpu: 204679.96712071402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 455916.77748688514,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 455895.70680628234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3960393.4553192533,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3960192.76595744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3204985.6712803384,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3204836.6782006943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3201497.348276195,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3201410.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3181468.8931035562,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3181413.103448276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1866346.2831325824,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1866133.9357429685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3103240.000000171,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3103149.328859061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11897422.808988778,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11896756.179775264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5291549.459999488,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5291423.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15592727.161764983,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15591469.117647057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54589.034000002815,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54588.82000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 295965.7460426636,
            "unit": "ns/iter",
            "extra": "iterations: 2906\ncpu: 295950.3785271844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 235214.48183818138,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 235210.6769400122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235198.60180623454,
            "unit": "ns/iter",
            "extra": "iterations: 3654\ncpu: 235191.1877394643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 228688.4126135677,
            "unit": "ns/iter",
            "extra": "iterations: 3742\ncpu: 228681.1330839116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 475354.2319079304,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 474782.5657894758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4045746.5000001676,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4045670.8695651977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3259476.1017547,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3259402.1052631703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3250639.608391727,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3250681.118881119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3254834.9020979935,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3254673.0769230705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1904987.5163935,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1904910.6557377074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3157746.905084793,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3157561.6949152597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12154034.597701551,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12153624.137931043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5456009.659999382,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5455737.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57937.74048443233,
            "unit": "ns/iter",
            "extra": "iterations: 14161\ncpu: 57934.30548690043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 257754.48340373032,
            "unit": "ns/iter",
            "extra": "iterations: 3314\ncpu: 257744.0555220284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 206345.8345792108,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 206336.8700265257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 205067.49361906148,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 205060.0288947752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 202212.59013282764,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 202206.30929791412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 457564.6078431057,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 457546.1049284561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3999155.8412020043,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3998924.0343347634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3239714.347222231,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3239596.8750000093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3213379.3931036745,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3213279.6551723992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3200888.2413794617,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3200730.344827585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1864247.0340682939,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1864185.5711422835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3117770.087248494,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3117707.7181208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6163.29758410676,
            "unit": "ns/iter",
            "extra": "iterations: 113457\ncpu: 6163.381721709563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34452.46666339385,
            "unit": "ns/iter",
            "extra": "iterations: 20353\ncpu: 34451.62383923745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28153.98010289992,
            "unit": "ns/iter",
            "extra": "iterations: 24878\ncpu: 28153.714124929542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28104.013101483626,
            "unit": "ns/iter",
            "extra": "iterations: 24959\ncpu: 28101.802956849024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21793.141390009965,
            "unit": "ns/iter",
            "extra": "iterations: 32230\ncpu: 21793.25473161651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127939.3343704168,
            "unit": "ns/iter",
            "extra": "iterations: 5464\ncpu: 127934.90117130234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 269279.82080924476,
            "unit": "ns/iter",
            "extra": "iterations: 2595\ncpu: 269278.6127167647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67850.98690972349,
            "unit": "ns/iter",
            "extra": "iterations: 10313\ncpu: 67849.11277028984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67278.43874999123,
            "unit": "ns/iter",
            "extra": "iterations: 10400\ncpu: 67275.24038461561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67675.71168024531,
            "unit": "ns/iter",
            "extra": "iterations: 10308\ncpu: 67698.9910748932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 138222.18368963443,
            "unit": "ns/iter",
            "extra": "iterations: 5052\ncpu: 138257.48218527206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 126185.3436036036,
            "unit": "ns/iter",
            "extra": "iterations: 5550\ncpu: 126182.91891891739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43678.56535295429,
            "unit": "ns/iter",
            "extra": "iterations: 16036\ncpu: 43677.92466949357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 210951.80175012726,
            "unit": "ns/iter",
            "extra": "iterations: 3314\ncpu: 210955.61255280743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 172307.09894168106,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 172306.64533595883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173731.0166459589,
            "unit": "ns/iter",
            "extra": "iterations: 4025\ncpu: 173732.273291925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174024.2444057833,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 174015.7135753347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 288622.05981846555,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 288627.4752475271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1169934.038655413,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1169897.8151260554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 991805.8595743825,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 991785.9574467946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 981577.6882934612,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 981544.7108603693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 981756.2931277145,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 981747.4053295954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 646994.3222221538,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 646975.2777777785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 966390.0917941345,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 966319.8887343513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44679.00038211861,
            "unit": "ns/iter",
            "extra": "iterations: 15702\ncpu: 44677.58247357046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 212648.01035954338,
            "unit": "ns/iter",
            "extra": "iterations: 3282\ncpu: 212639.0006093881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 175215.0776358533,
            "unit": "ns/iter",
            "extra": "iterations: 3993\ncpu: 175204.4828449779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 175896.02764512252,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 175889.7210354373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 175831.48817312537,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 175826.346250631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 289800.499586104,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 289788.617549669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1179890.671163573,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1179861.0455311884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 985821.0365681491,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 985801.406469746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 987362.943661877,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 987324.788732395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 982065.5690140177,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 982031.6901408472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 646894.4681440898,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 646876.4542936239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 970427.2503478164,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 970404.1724617676 ns\nthreads: 1"
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
        "date": 1705777711171,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15457.08949875494,
            "unit": "ns/iter",
            "extra": "iterations: 45766\ncpu: 15456.161779486956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126140.11134297714,
            "unit": "ns/iter",
            "extra": "iterations: 6709\ncpu: 126134.71456252791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 239294.71644663168,
            "unit": "ns/iter",
            "extra": "iterations: 3636\ncpu: 239290.7315731573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 349219.26140062965,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 349214.04723127047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 460554.10498410015,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 460538.1230116647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 571662.375494076,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 571633.5309617921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 548734.3989999545,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548726.8999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 636883.1560000671,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636818.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 730165.009411697,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 730156.4705882358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12279.75440682739,
            "unit": "ns/iter",
            "extra": "iterations: 57184\ncpu: 12279.380595970904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10346.108493527,
            "unit": "ns/iter",
            "extra": "iterations: 68511\ncpu: 10345.783888718575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10119.801795311703,
            "unit": "ns/iter",
            "extra": "iterations: 69403\ncpu: 10119.540942034204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10227.160094062243,
            "unit": "ns/iter",
            "extra": "iterations: 68466\ncpu: 10227.001723483185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16618.68954062308,
            "unit": "ns/iter",
            "extra": "iterations: 42144\ncpu: 16618.54356492024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57938.99107951609,
            "unit": "ns/iter",
            "extra": "iterations: 14349\ncpu: 57933.57028364342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 270917.2888818455,
            "unit": "ns/iter",
            "extra": "iterations: 3157\ncpu: 270901.61545771273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 212215.96202532874,
            "unit": "ns/iter",
            "extra": "iterations: 4029\ncpu: 212210.20104244258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 210049.33612823507,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 210035.43773119655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 206874.54917635457,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 206871.70542635594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 473417.4001079538,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 473412.9049676036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3928102.2457628953,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3928057.2033898397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3171788.6621160777,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3171743.6860068277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3151315.640677964,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3151260.3389830496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3152094.589830671,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3152051.1864406816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1851019.7589640515,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1850982.4701195224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3077343.269103003,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3077291.362126237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11702245.138888797,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 11702208.333333304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5219636.389999778,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5219537.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15592254.88235223,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15591969.117647048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53849.80640000094,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53848.74999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 304342.6689093569,
            "unit": "ns/iter",
            "extra": "iterations: 2824\ncpu: 304336.96883852663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 245441.7034502466,
            "unit": "ns/iter",
            "extra": "iterations: 3507\ncpu: 245440.09124607872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 242323.57902134475,
            "unit": "ns/iter",
            "extra": "iterations: 3556\ncpu: 242316.67604049464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 237594.4336013096,
            "unit": "ns/iter",
            "extra": "iterations: 3607\ncpu: 237591.10063764756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 488817.0704224918,
            "unit": "ns/iter",
            "extra": "iterations: 1775\ncpu: 488812.9014084506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4012144.66810347,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4012070.258620695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3232716.0278746244,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3232673.1707317117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3227754.2318340763,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3227726.989619367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3238080.0972223114,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3238059.3750000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1886969.5661914325,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1886925.0509164976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3121256.777777943,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3121237.3737373566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12005461.348313944,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12005133.70786518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5344654.900000024,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5344660.999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57214.728838481475,
            "unit": "ns/iter",
            "extra": "iterations: 14283\ncpu: 57214.42974165071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 266325.74260814337,
            "unit": "ns/iter",
            "extra": "iterations: 3213\ncpu: 266326.330532214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 212972.55406413221,
            "unit": "ns/iter",
            "extra": "iterations: 4023\ncpu: 212967.68580661196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 215603.77238429707,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 215600.80482897244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 209265.05479452075,
            "unit": "ns/iter",
            "extra": "iterations: 4088\ncpu: 209262.1086105673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 530023.5108814256,
            "unit": "ns/iter",
            "extra": "iterations: 1838\ncpu: 530008.4330794353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3957071.9661017554,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3956872.881355929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3193672.1027398263,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3193653.7671232824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3150976.3074324527,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150834.459459469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3154645.983050552,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3154554.237288113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1843072.275247629,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1842965.3465346552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3076458.755775636,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3076336.633663369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6153.970079390486,
            "unit": "ns/iter",
            "extra": "iterations: 113868\ncpu: 6153.456633997306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34213.975446317694,
            "unit": "ns/iter",
            "extra": "iterations: 20445\ncpu: 34212.78552213249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27375.833932901958,
            "unit": "ns/iter",
            "extra": "iterations: 25574\ncpu: 27373.699851411548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28171.48638731029,
            "unit": "ns/iter",
            "extra": "iterations: 25344\ncpu: 28170.383522727243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21560.220635850474,
            "unit": "ns/iter",
            "extra": "iterations: 32429\ncpu: 21558.43226741485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 131992.6869941537,
            "unit": "ns/iter",
            "extra": "iterations: 5313\ncpu: 131987.50235272053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 268352.15166603064,
            "unit": "ns/iter",
            "extra": "iterations: 2611\ncpu: 268331.86518575274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66843.84222582012,
            "unit": "ns/iter",
            "extra": "iterations: 10477\ncpu: 66840.13553498183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66405.4879448932,
            "unit": "ns/iter",
            "extra": "iterations: 10452\ncpu: 66405.04209720701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66543.50028495915,
            "unit": "ns/iter",
            "extra": "iterations: 10528\ncpu: 66538.21238601774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 136011.50591658562,
            "unit": "ns/iter",
            "extra": "iterations: 5155\ncpu: 136006.9253152284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124895.88662739814,
            "unit": "ns/iter",
            "extra": "iterations: 5601\ncpu: 124885.18121764135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42281.45172184909,
            "unit": "ns/iter",
            "extra": "iterations: 16581\ncpu: 42279.97708220206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 210947.23290147254,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 210930.97318469163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 170987.97532371865,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 170980.57659418712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 168785.78728016617,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 168771.78993013673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 169281.85182497645,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 169274.01498670495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 284645.3176088267,
            "unit": "ns/iter",
            "extra": "iterations: 2459\ncpu: 284631.59821065445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1148437.2927631552,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1148409.210526315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 966616.1549100968,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 966566.9432918364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 950977.6938775572,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 950887.0748299373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 966972.5911602107,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 966945.8563535868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 639739.517840819,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 639723.2387923176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 950834.6802721196,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 950835.7823129208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43019.34832153,
            "unit": "ns/iter",
            "extra": "iterations: 16235\ncpu: 43019.00215583621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 212086.18035768208,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 212084.48014550126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 173288.40203876267,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 173285.7533565388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 169796.20111596613,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 169794.78408539412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171299.44648093797,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 171296.08993157087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 283617.4365733305,
            "unit": "ns/iter",
            "extra": "iterations: 2428\ncpu: 283615.5683690272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1158615.3619834124,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1158592.066115701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 966445.4281766932,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 966430.8011049847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 958992.641095822,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 958970.2739725915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 963066.8581267748,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 963049.9999999941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 629448.5803249083,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 629444.2238267151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 953315.5449592188,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 953297.2752043618 ns\nthreads: 1"
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
        "date": 1705952902925,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15938.859456381268,
            "unit": "ns/iter",
            "extra": "iterations: 45694\ncpu: 15937.98529347398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124880.54286556132,
            "unit": "ns/iter",
            "extra": "iterations: 6777\ncpu: 124868.99808174708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 234820.9198380119,
            "unit": "ns/iter",
            "extra": "iterations: 3705\ncpu: 234807.85425101218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342563.1271353976,
            "unit": "ns/iter",
            "extra": "iterations: 2517\ncpu: 342544.7755264203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 468695.77933541354,
            "unit": "ns/iter",
            "extra": "iterations: 1926\ncpu: 468675.23364485975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559888.362271452,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 559830.6788511749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 536874.4250001782,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536831.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 623657.3720000251,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623610.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 709246.2302378769,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 709203.914044512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11958.427881898031,
            "unit": "ns/iter",
            "extra": "iterations: 58425\ncpu: 11957.470261018383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10176.103170022474,
            "unit": "ns/iter",
            "extra": "iterations: 69274\ncpu: 10175.41934925079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9970.56370490938,
            "unit": "ns/iter",
            "extra": "iterations: 70026\ncpu: 9970.005426555856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10055.542586112584,
            "unit": "ns/iter",
            "extra": "iterations: 69471\ncpu: 10055.333880324177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16521.22157510016,
            "unit": "ns/iter",
            "extra": "iterations: 42410\ncpu: 16520.87007781181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57682.09876893707,
            "unit": "ns/iter",
            "extra": "iterations: 14134\ncpu: 57677.975095514405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257774.25941543703,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 257759.2648388065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 204170.14025413277,
            "unit": "ns/iter",
            "extra": "iterations: 4171\ncpu: 204157.37233277375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 200430.41420815533,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 200412.72126504616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 200784.95374083085,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 200769.01109275495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 477195.3938897411,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 477153.9552645927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3810807.930327227,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3810478.68852459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3095468.1000002893,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3095301.666666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3079285.745033249,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3078999.668874178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3080936.756666688,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3080762.333333323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1813011.9608610573,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1812841.291585127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3003693.245955072,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3003439.482200645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11747902.549449373,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11746776.923076935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5201202.890000331,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5200819.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15310126.685712282,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15308600.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54869.884400000046,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54863.83000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293447.89911082695,
            "unit": "ns/iter",
            "extra": "iterations: 2924\ncpu: 293417.373461013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 235624.47468352804,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 235614.8046230039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231778.01486083234,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 231760.55120237678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 230167.6798386628,
            "unit": "ns/iter",
            "extra": "iterations: 3720\ncpu: 230154.40860214873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 491355.04945987475,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 491318.5901080155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3881419.987447927,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3881177.4058577423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3133510.6216221065,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3133324.9999999856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3122947.0436241687,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3122712.0805369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3134872.88552231,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3134706.060606068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1852129.1916170842,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1851981.8363273486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3043074.169934496,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3042800.653594752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11960910.191010553,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11960130.33707863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5324023.090001902,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5323630.000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58174.73903167787,
            "unit": "ns/iter",
            "extra": "iterations: 14086\ncpu: 58172.036064177104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 256365.04455739874,
            "unit": "ns/iter",
            "extra": "iterations: 3344\ncpu: 256351.76435406724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 206614.28219377864,
            "unit": "ns/iter",
            "extra": "iterations: 4139\ncpu: 206609.4708866878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 204681.4376797374,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 204657.93384467892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 204557.15616766404,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 204544.67065868285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 475165.0937500697,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 475122.80701754085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3822014.8312753257,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3821793.4156378596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3097479.986710696,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3097285.7142857085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3076388.940593665,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3076238.9438944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3076782.7821783065,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3076638.6138614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1823489.5207100837,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1823299.4082840215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2996699.919093945,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2996622.0064724972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6188.731983017078,
            "unit": "ns/iter",
            "extra": "iterations: 115183\ncpu: 6188.315984129589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33833.34173749577,
            "unit": "ns/iter",
            "extra": "iterations: 21180\ncpu: 33833.17752596792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26923.916224525805,
            "unit": "ns/iter",
            "extra": "iterations: 26010\ncpu: 26921.718569780878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26016.184229098068,
            "unit": "ns/iter",
            "extra": "iterations: 26923\ncpu: 26016.06804590886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21501.056017380582,
            "unit": "ns/iter",
            "extra": "iterations: 31758\ncpu: 21499.3985767365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 128962.43484682718,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 128961.64636397021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 256509.1673083128,
            "unit": "ns/iter",
            "extra": "iterations: 2857\ncpu: 256494.4347217341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65397.61466202387,
            "unit": "ns/iter",
            "extra": "iterations: 10326\ncpu: 65392.998256827865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65152.719661777344,
            "unit": "ns/iter",
            "extra": "iterations: 10762\ncpu: 65148.29957257035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65111.28482426632,
            "unit": "ns/iter",
            "extra": "iterations: 10754\ncpu: 65101.283243444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 134002.69257273237,
            "unit": "ns/iter",
            "extra": "iterations: 5224\ncpu: 133995.31010719674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121842.73798745558,
            "unit": "ns/iter",
            "extra": "iterations: 5744\ncpu: 121827.75069637917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41358.10907153221,
            "unit": "ns/iter",
            "extra": "iterations: 16888\ncpu: 41354.62458550485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 202449.9383818095,
            "unit": "ns/iter",
            "extra": "iterations: 3473\ncpu: 202432.13360207187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164374.66525424286,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 164373.75235405093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 161773.07562439307,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 161761.74838112967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 163791.4047674444,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 163784.64594531414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 282109.3112902784,
            "unit": "ns/iter",
            "extra": "iterations: 2480\ncpu: 282102.62096774013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1117781.8405104827,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1117689.6331738436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 939065.5241935947,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 938976.4784946083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 933249.7114362492,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 933119.2819148815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 939600.560321991,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 939567.9624664757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 618213.4097343805,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 618189.4690265447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 925683.319683038,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 925614.5310435889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42469.09823541385,
            "unit": "ns/iter",
            "extra": "iterations: 16491\ncpu: 42467.43071978646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 201855.8155088409,
            "unit": "ns/iter",
            "extra": "iterations: 3469\ncpu: 201838.51253963847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 166675.58676502472,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 166664.36562723265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164379.23255811623,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 164360.23020907005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 166651.60723636465,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 166637.68150440243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 283530.2414211326,
            "unit": "ns/iter",
            "extra": "iterations: 2477\ncpu: 283495.1150585365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1124474.2882163888,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1124341.08280255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 949027.7154471058,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 948963.4146341402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 929988.3070762929,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 929936.5821094798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 933504.415670746,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 933466.7994687892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 621901.4373333873,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 621842.3999999913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 926676.8516558148,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 926656.9536423775 ns\nthreads: 1"
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
        "date": 1705954310594,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15807.651295790121,
            "unit": "ns/iter",
            "extra": "iterations: 44413\ncpu: 15806.547632449958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123262.1286754068,
            "unit": "ns/iter",
            "extra": "iterations: 6870\ncpu: 123254.10480349345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232767.4399677695,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 232757.88342734348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 340075.3849821411,
            "unit": "ns/iter",
            "extra": "iterations: 2517\ncpu: 340056.773937227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 462910.2915376836,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 462893.13725490175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 556741.7676056797,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 556728.489116517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 534281.4660000385,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534281.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 621257.6799999852,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621209.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 710537.7792207657,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 710512.8342245991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12332.630581652587,
            "unit": "ns/iter",
            "extra": "iterations: 56838\ncpu: 12331.82553925193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10362.936412334882,
            "unit": "ns/iter",
            "extra": "iterations: 67576\ncpu: 10362.590268734459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10252.036884524514,
            "unit": "ns/iter",
            "extra": "iterations: 68240\ncpu: 10251.44050410316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10291.022518212958,
            "unit": "ns/iter",
            "extra": "iterations: 67945\ncpu: 10291.004488924875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17099.834945807328,
            "unit": "ns/iter",
            "extra": "iterations: 41241\ncpu: 17099.52959433573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57790.033401596724,
            "unit": "ns/iter",
            "extra": "iterations: 14161\ncpu: 57786.06736812364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 254449.8056716347,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 254433.07462686568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 201965.2192170978,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 201953.95017793568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 199824.05542509022,
            "unit": "ns/iter",
            "extra": "iterations: 4258\ncpu: 199817.42602160573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 200399.40642588527,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 200393.3395872416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 459054.9589904896,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 459042.0609884345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3862311.9541668417,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3862121.2499999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3117101.92976607,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3116894.648829432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3086489.9269101103,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3086313.6212624596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3065439.74999996,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3065308.5526315756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1812194.4414062342,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1812104.8828124986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3015094.808441509,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3014965.2597402646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11533115.7499999,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11532680.434782596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5149442.099999533,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5149086.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15349715.492752826,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15348708.695652155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54217.45669999609,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54213.859999999775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 291198.36879432626,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 291181.2901046935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 234658.6884394873,
            "unit": "ns/iter",
            "extra": "iterations: 3659\ncpu: 234652.00874555935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235018.60021905298,
            "unit": "ns/iter",
            "extra": "iterations: 3652\ncpu: 235005.0109529035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 231040.148058242,
            "unit": "ns/iter",
            "extra": "iterations: 3708\ncpu: 231031.47249190832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 476084.41379307304,
            "unit": "ns/iter",
            "extra": "iterations: 1827\ncpu: 476076.73782156495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3925738.860759227,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3925619.8312236173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3165740.615646446,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3165626.5306122615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3148356.26779691,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3148209.152542363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3132007.1178448806,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3131915.1515151523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1855049.675350574,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1854986.573146298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3062685.3663367005,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3062568.9768976946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11881767.865168441,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11881197.752808983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5227353.120000089,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5227222.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57882.91270233897,
            "unit": "ns/iter",
            "extra": "iterations: 14147\ncpu: 57881.26104474418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 252291.6225692215,
            "unit": "ns/iter",
            "extra": "iterations: 3394\ncpu: 252281.3789039479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 205392.71414845707,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 205386.42805668912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 204866.99473053025,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 204820.59880239656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 203826.46552948974,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 203819.94787964903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 458079.5769434257,
            "unit": "ns/iter",
            "extra": "iterations: 1891\ncpu: 458038.709677418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3882021.100000088,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3881914.583333342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3131340.5201340998,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3131108.3892617594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3092353.202658045,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3092309.634551503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3076398.7854787214,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3076280.5280528087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1815001.6692607272,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1814929.7665369592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3021857.5681818617,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3021782.792207797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6090.028610211144,
            "unit": "ns/iter",
            "extra": "iterations: 114924\ncpu: 6089.619226619322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34221.58139080183,
            "unit": "ns/iter",
            "extra": "iterations: 20463\ncpu: 34220.37335679032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27895.828202780856,
            "unit": "ns/iter",
            "extra": "iterations: 25111\ncpu: 27893.540679383354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27923.53516168972,
            "unit": "ns/iter",
            "extra": "iterations: 25852\ncpu: 27922.51276496985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21442.41102135905,
            "unit": "ns/iter",
            "extra": "iterations: 32682\ncpu: 21440.31577014872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 126751.86748730896,
            "unit": "ns/iter",
            "extra": "iterations: 5524\ncpu: 126746.25271542234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 260180.457620812,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 260175.35315984706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66283.71534021237,
            "unit": "ns/iter",
            "extra": "iterations: 10567\ncpu: 66280.05110248923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65482.09082405546,
            "unit": "ns/iter",
            "extra": "iterations: 10691\ncpu: 65479.37517538128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65795.91682312632,
            "unit": "ns/iter",
            "extra": "iterations: 10652\ncpu: 65793.12805107079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133381.1235698089,
            "unit": "ns/iter",
            "extra": "iterations: 5244\ncpu: 133375.5720823798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122742.15527516135,
            "unit": "ns/iter",
            "extra": "iterations: 5706\ncpu: 122738.62600771172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42300.49619610765,
            "unit": "ns/iter",
            "extra": "iterations: 16562\ncpu: 42299.124501871454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 206252.09837997396,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 206241.23711340467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 168553.88661530992,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 168548.41116995714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 167114.5158392409,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 166630.56737588588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 167051.9709385611,
            "unit": "ns/iter",
            "extra": "iterations: 4198\ncpu: 167047.68937589478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 281063.9847756245,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 281055.0080128213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1131161.8548123501,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1131129.3637846592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 951804.2421770006,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 951773.1972789186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 943843.3706200072,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 943807.0080862505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 946686.2719891503,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 946660.2165087934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 626291.2537980626,
            "unit": "ns/iter",
            "extra": "iterations: 1119\ncpu: 626274.5308311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 935153.9144386102,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 935141.844919788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44456.4705732932,
            "unit": "ns/iter",
            "extra": "iterations: 15751\ncpu: 44455.41870357473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 205217.09136164447,
            "unit": "ns/iter",
            "extra": "iterations: 3415\ncpu: 205214.34846266397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 170979.67609754228,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 170977.2926829293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 169160.71258790942,
            "unit": "ns/iter",
            "extra": "iterations: 4123\ncpu: 169152.31627455552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170498.4839814217,
            "unit": "ns/iter",
            "extra": "iterations: 4089\ncpu: 170491.68500855687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 284819.3520782221,
            "unit": "ns/iter",
            "extra": "iterations: 2454\ncpu: 284804.7677261619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1134912.4352749963,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1134831.7152103703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 950316.2214672788,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 950273.3695652132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 938498.2298386956,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 938453.4946236507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 936616.3587684159,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 936601.2048192878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 623338.2990238939,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 623304.7027506751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 935476.8210948759,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 935415.7543391247 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}