window.BENCHMARK_DATA = {
  "lastUpdate": 1702503254691,
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
      }
    ]
  }
}