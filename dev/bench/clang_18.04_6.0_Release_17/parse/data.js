window.BENCHMARK_DATA = {
  "lastUpdate": 1702490343566,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-6.0 18.04 Release c++-17": [
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
        "date": 1702490342488,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 592.9943019849477,
            "unit": "ns/iter",
            "extra": "iterations: 1222180\ncpu: 592.9732936228708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5311.1949499998445,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5310.9569999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10395.9387790794,
            "unit": "ns/iter",
            "extra": "iterations: 80038\ncpu: 10395.54961393338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15483.715689564695,
            "unit": "ns/iter",
            "extra": "iterations: 53628\ncpu: 15483.05922279406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20501.441358936238,
            "unit": "ns/iter",
            "extra": "iterations: 40620\ncpu: 20500.662235352043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25045.50945904951,
            "unit": "ns/iter",
            "extra": "iterations: 33090\ncpu: 25044.366878210956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29861.375270226992,
            "unit": "ns/iter",
            "extra": "iterations: 28217\ncpu: 29860.33951164191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34531.31095918738,
            "unit": "ns/iter",
            "extra": "iterations: 24135\ncpu: 34529.07810234102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39625.40419438279,
            "unit": "ns/iter",
            "extra": "iterations: 21648\ncpu: 39622.84737620101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 549.5025989663627,
            "unit": "ns/iter",
            "extra": "iterations: 1271467\ncpu: 549.4546063720105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 422.23959321995494,
            "unit": "ns/iter",
            "extra": "iterations: 1651015\ncpu: 422.1967698658093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 418.71387660932595,
            "unit": "ns/iter",
            "extra": "iterations: 1667403\ncpu: 418.6802470668462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 416.37304210002236,
            "unit": "ns/iter",
            "extra": "iterations: 1670093\ncpu: 416.34280246668897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 857.8192618727237,
            "unit": "ns/iter",
            "extra": "iterations: 816878\ncpu: 857.7574619465822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1630.374228903051,
            "unit": "ns/iter",
            "extra": "iterations: 487779\ncpu: 1630.2372590865948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9784.515906919783,
            "unit": "ns/iter",
            "extra": "iterations: 55479\ncpu: 9783.790262982366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7452.964632397837,
            "unit": "ns/iter",
            "extra": "iterations: 108065\ncpu: 7452.708092351831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7341.293592407961,
            "unit": "ns/iter",
            "extra": "iterations: 110650\ncpu: 7341.006778129244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7064.567995550509,
            "unit": "ns/iter",
            "extra": "iterations: 115059\ncpu: 7064.122754412949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35493.29673247654,
            "unit": "ns/iter",
            "extra": "iterations: 23351\ncpu: 35491.06248126415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 241793.24868164898,
            "unit": "ns/iter",
            "extra": "iterations: 3603\ncpu: 241773.4943102971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 171445.1902960106,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 171434.25328288425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183910.22320245384,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 183903.4847816502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 178920.96047690976,
            "unit": "ns/iter",
            "extra": "iterations: 4529\ncpu: 178915.3455508946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96997.42563361916,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 96993.19697643426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185967.15837778698,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 185960.74706510088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4974.6121877387295,
            "unit": "ns/iter",
            "extra": "iterations: 163525\ncpu: 4974.458339703415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23558.660385578496,
            "unit": "ns/iter",
            "extra": "iterations: 34442\ncpu: 23557.67086696474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18381.4686820789,
            "unit": "ns/iter",
            "extra": "iterations: 45549\ncpu: 18380.55720213392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18365.79734408391,
            "unit": "ns/iter",
            "extra": "iterations: 45634\ncpu: 18364.057500986095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18098.144099914243,
            "unit": "ns/iter",
            "extra": "iterations: 46440\ncpu: 18097.006890611538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49269.20387591639,
            "unit": "ns/iter",
            "extra": "iterations: 16667\ncpu: 49265.12869742618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 268081.98988040857,
            "unit": "ns/iter",
            "extra": "iterations: 3261\ncpu: 268059.1229684144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202754.0933489098,
            "unit": "ns/iter",
            "extra": "iterations: 4285\ncpu: 202739.3698949815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 203692.4805711453,
            "unit": "ns/iter",
            "extra": "iterations: 4272\ncpu: 203678.76872659166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203908.10368127044,
            "unit": "ns/iter",
            "extra": "iterations: 4292\ncpu: 203891.7753960861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107017.38706491572,
            "unit": "ns/iter",
            "extra": "iterations: 8102\ncpu: 107009.874105159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193478.9014084453,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 193462.24010731015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 783678.0345394046,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 783627.0559210487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 426289.8332534876,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 426249.6885481567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1626.0533228935603,
            "unit": "ns/iter",
            "extra": "iterations: 495547\ncpu: 1625.9809866672654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9562.88422098129,
            "unit": "ns/iter",
            "extra": "iterations: 86596\ncpu: 9562.189939489152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6703.433533227251,
            "unit": "ns/iter",
            "extra": "iterations: 122565\ncpu: 6703.106106963648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6827.845248316547,
            "unit": "ns/iter",
            "extra": "iterations: 121136\ncpu: 6827.289162594103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6760.737615731904,
            "unit": "ns/iter",
            "extra": "iterations: 122050\ncpu: 6760.135190495695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34394.777996794626,
            "unit": "ns/iter",
            "extra": "iterations: 24351\ncpu: 34391.92640959312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 239353.4713541962,
            "unit": "ns/iter",
            "extra": "iterations: 3456\ncpu: 239338.97569444546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192818.5384280273,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 192800.76202917454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 192083.58476604978,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 192078.01958650711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 189564.57767722526,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 189545.72290454622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95840.75922709517,
            "unit": "ns/iter",
            "extra": "iterations: 9212\ncpu: 95834.99782891886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184655.09655751116,
            "unit": "ns/iter",
            "extra": "iterations: 4764\ncpu: 184636.83879093165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 178.420046761116,
            "unit": "ns/iter",
            "extra": "iterations: 3922918\ncpu: 178.413339254095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1387.0691857211418,
            "unit": "ns/iter",
            "extra": "iterations: 502199\ncpu: 1386.9884249072543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1004.2242707685848,
            "unit": "ns/iter",
            "extra": "iterations: 695561\ncpu: 1004.1508940265504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1015.6086136619281,
            "unit": "ns/iter",
            "extra": "iterations: 686189\ncpu: 1015.5546066754212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 833.4811991590933,
            "unit": "ns/iter",
            "extra": "iterations: 838154\ncpu: 833.453398778752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9490.337415574273,
            "unit": "ns/iter",
            "extra": "iterations: 73734\ncpu: 9490.206688908753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12312.531079224327,
            "unit": "ns/iter",
            "extra": "iterations: 56726\ncpu: 12311.774142368471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2721.3694453049507,
            "unit": "ns/iter",
            "extra": "iterations: 258160\ncpu: 2721.2228850325378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2701.616228739205,
            "unit": "ns/iter",
            "extra": "iterations: 258985\ncpu: 2701.4356043786324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2697.1101309891233,
            "unit": "ns/iter",
            "extra": "iterations: 259945\ncpu: 2696.902806362895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5001.72512113903,
            "unit": "ns/iter",
            "extra": "iterations: 140953\ncpu: 5001.659418387687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5061.827651433193,
            "unit": "ns/iter",
            "extra": "iterations: 138510\ncpu: 5061.535629196429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1918.0386841394743,
            "unit": "ns/iter",
            "extra": "iterations: 366817\ncpu: 1917.913564529434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10207.326396145478,
            "unit": "ns/iter",
            "extra": "iterations: 68904\ncpu: 10206.480030186829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8117.024318331439,
            "unit": "ns/iter",
            "extra": "iterations: 86149\ncpu: 8116.639775273165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8106.117477465641,
            "unit": "ns/iter",
            "extra": "iterations: 84978\ncpu: 8106.010967544516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7955.048292188359,
            "unit": "ns/iter",
            "extra": "iterations: 87861\ncpu: 7954.744425854529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17751.931034482433,
            "unit": "ns/iter",
            "extra": "iterations: 39411\ncpu: 17750.749790667414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54314.704769347074,
            "unit": "ns/iter",
            "extra": "iterations: 12790\ncpu: 54308.381548084486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43548.89653024393,
            "unit": "ns/iter",
            "extra": "iterations: 16053\ncpu: 43545.692393945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43916.39056332066,
            "unit": "ns/iter",
            "extra": "iterations: 15959\ncpu: 43914.69390312634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43999.598550637565,
            "unit": "ns/iter",
            "extra": "iterations: 16007\ncpu: 43998.32573249273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25448.81777359165,
            "unit": "ns/iter",
            "extra": "iterations: 27614\ncpu: 25448.091547765584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43347.91714741469,
            "unit": "ns/iter",
            "extra": "iterations: 16294\ncpu: 43345.54437216122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1928.5626637453436,
            "unit": "ns/iter",
            "extra": "iterations: 366041\ncpu: 1928.4735862922194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10261.371616066108,
            "unit": "ns/iter",
            "extra": "iterations: 68116\ncpu: 10260.680310059455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8089.224803162933,
            "unit": "ns/iter",
            "extra": "iterations: 86747\ncpu: 8088.556376589332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8119.1962093049515,
            "unit": "ns/iter",
            "extra": "iterations: 86897\ncpu: 8118.672681450441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8013.288069609942,
            "unit": "ns/iter",
            "extra": "iterations: 86309\ncpu: 8012.688132176255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17320.855876052232,
            "unit": "ns/iter",
            "extra": "iterations: 40146\ncpu: 17319.845065510966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 50228.213031604704,
            "unit": "ns/iter",
            "extra": "iterations: 12815\ncpu: 50224.68201326575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42841.99981850174,
            "unit": "ns/iter",
            "extra": "iterations: 16529\ncpu: 42840.7465666402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42444.743914372535,
            "unit": "ns/iter",
            "extra": "iterations: 16350\ncpu: 42442.36697247649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42570.44138982141,
            "unit": "ns/iter",
            "extra": "iterations: 16405\ncpu: 42567.72325510519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24836.72496418534,
            "unit": "ns/iter",
            "extra": "iterations: 27920\ncpu: 24834.982091690687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41278.19424037661,
            "unit": "ns/iter",
            "extra": "iterations: 17015\ncpu: 41272.13047311204 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}