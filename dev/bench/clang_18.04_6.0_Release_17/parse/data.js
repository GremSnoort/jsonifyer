window.BENCHMARK_DATA = {
  "lastUpdate": 1702492931489,
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
        "date": 1702492926165,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 604.9614480327701,
            "unit": "ns/iter",
            "extra": "iterations: 1161134\ncpu: 604.93577829949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5404.907600000116,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5404.878999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10267.960972361758,
            "unit": "ns/iter",
            "extra": "iterations: 81122\ncpu: 10267.712827593006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15131.4197382999,
            "unit": "ns/iter",
            "extra": "iterations: 55101\ncpu: 15130.70180214515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19917.171121587333,
            "unit": "ns/iter",
            "extra": "iterations: 41789\ncpu: 19916.55698868122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24888.31966432453,
            "unit": "ns/iter",
            "extra": "iterations: 33604\ncpu: 24887.480657064614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29793.347043975733,
            "unit": "ns/iter",
            "extra": "iterations: 28129\ncpu: 29792.2962067617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34757.52989750512,
            "unit": "ns/iter",
            "extra": "iterations: 24099\ncpu: 34755.40063903069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39234.258991478164,
            "unit": "ns/iter",
            "extra": "iterations: 21715\ncpu: 39231.94565968221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 532.5349066178817,
            "unit": "ns/iter",
            "extra": "iterations: 1284828\ncpu: 532.4968011282443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 415.8991600352982,
            "unit": "ns/iter",
            "extra": "iterations: 1674356\ncpu: 415.88455501697445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 384.8577185734129,
            "unit": "ns/iter",
            "extra": "iterations: 1699498\ncpu: 384.83040286013835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 412.1199484558241,
            "unit": "ns/iter",
            "extra": "iterations: 1698738\ncpu: 412.1028080845893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 882.0935833824524,
            "unit": "ns/iter",
            "extra": "iterations: 794297\ncpu: 882.0353092105338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1632.2428547552006,
            "unit": "ns/iter",
            "extra": "iterations: 490606\ncpu: 1632.1702139802608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10011.83026429974,
            "unit": "ns/iter",
            "extra": "iterations: 81839\ncpu: 10011.294126272318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7459.894643471417,
            "unit": "ns/iter",
            "extra": "iterations: 110482\ncpu: 7459.664922792852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7311.86703558857,
            "unit": "ns/iter",
            "extra": "iterations: 111496\ncpu: 7311.560055966138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7191.29159632532,
            "unit": "ns/iter",
            "extra": "iterations: 112546\ncpu: 7191.026780160974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35899.47111686912,
            "unit": "ns/iter",
            "extra": "iterations: 23145\ncpu: 35896.586735796096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244847.46765198302,
            "unit": "ns/iter",
            "extra": "iterations: 3586\ncpu: 244838.0089235919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185269.35938190029,
            "unit": "ns/iter",
            "extra": "iterations: 4530\ncpu: 185254.26048565152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 189629.75492958227,
            "unit": "ns/iter",
            "extra": "iterations: 4615\ncpu: 189620.71505958875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 193373.1597436968,
            "unit": "ns/iter",
            "extra": "iterations: 4526\ncpu: 193359.63323022478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96826.14475873891,
            "unit": "ns/iter",
            "extra": "iterations: 9015\ncpu: 96821.9855795894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186681.37035473422,
            "unit": "ns/iter",
            "extra": "iterations: 4736\ncpu: 186665.8361486491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4982.551972429186,
            "unit": "ns/iter",
            "extra": "iterations: 162490\ncpu: 4982.300449258402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23822.961017332957,
            "unit": "ns/iter",
            "extra": "iterations: 35426\ncpu: 23821.684638401217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18424.88044893279,
            "unit": "ns/iter",
            "extra": "iterations: 44550\ncpu: 18423.952861952872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18463.744967658604,
            "unit": "ns/iter",
            "extra": "iterations: 44214\ncpu: 18462.01203238791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17927.664360608316,
            "unit": "ns/iter",
            "extra": "iterations: 46255\ncpu: 17926.989514647103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49979.51754804917,
            "unit": "ns/iter",
            "extra": "iterations: 16754\ncpu: 49978.769249134624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 267629.58810910635,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 267618.02022678393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202172.20378149857,
            "unit": "ns/iter",
            "extra": "iterations: 4284\ncpu: 202163.18860877733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 203773.19413144916,
            "unit": "ns/iter",
            "extra": "iterations: 4260\ncpu: 203763.26291079828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203121.66635622215,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 203115.71594877806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106452.47914110495,
            "unit": "ns/iter",
            "extra": "iterations: 8150\ncpu: 106444.45398772974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197258.88581156352,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 197251.73666288384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 780367.4172778438,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 780318.3374083141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 424276.96464405954,
            "unit": "ns/iter",
            "extra": "iterations: 2093\ncpu: 424255.6617295769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1584.68645134381,
            "unit": "ns/iter",
            "extra": "iterations: 503740\ncpu: 1584.5974113629975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9022.91226695299,
            "unit": "ns/iter",
            "extra": "iterations: 90593\ncpu: 9022.651860519021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6989.313925217139,
            "unit": "ns/iter",
            "extra": "iterations: 117219\ncpu: 6988.79618491887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6607.467773382108,
            "unit": "ns/iter",
            "extra": "iterations: 122585\ncpu: 6607.372843333164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6562.853798533875,
            "unit": "ns/iter",
            "extra": "iterations: 124219\ncpu: 6562.746439755586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33976.7857345269,
            "unit": "ns/iter",
            "extra": "iterations: 24703\ncpu: 33976.2619924708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 254612.4618276434,
            "unit": "ns/iter",
            "extra": "iterations: 3458\ncpu: 254594.12955465593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 182013.8019260403,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 182008.07616546267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194677.03046242538,
            "unit": "ns/iter",
            "extra": "iterations: 4563\ncpu: 194662.91913214957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 193859.87043116146,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 193845.54607135133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96561.28929083358,
            "unit": "ns/iter",
            "extra": "iterations: 9067\ncpu: 96554.15242086673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 185403.2547488353,
            "unit": "ns/iter",
            "extra": "iterations: 4738\ncpu: 185395.50443225034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 185.19341270302004,
            "unit": "ns/iter",
            "extra": "iterations: 3777513\ncpu: 185.17611984393022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1393.0502335428976,
            "unit": "ns/iter",
            "extra": "iterations: 503548\ncpu: 1393.0264840690538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1018.7404137395155,
            "unit": "ns/iter",
            "extra": "iterations: 683087\ncpu: 1018.7226517266374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1023.2109392534888,
            "unit": "ns/iter",
            "extra": "iterations: 681637\ncpu: 1023.128732741916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 849.7696653424574,
            "unit": "ns/iter",
            "extra": "iterations: 830700\ncpu: 849.7390152883121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9858.624736163669,
            "unit": "ns/iter",
            "extra": "iterations: 70593\ncpu: 9857.653025087422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12189.617523735202,
            "unit": "ns/iter",
            "extra": "iterations: 57716\ncpu: 12189.290664633709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2729.9764617384685,
            "unit": "ns/iter",
            "extra": "iterations: 256561\ncpu: 2729.9078971472773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2677.058952108393,
            "unit": "ns/iter",
            "extra": "iterations: 258481\ncpu: 2676.884567917943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2715.2196468892066,
            "unit": "ns/iter",
            "extra": "iterations: 257313\ncpu: 2715.0217828092623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5067.968634633261,
            "unit": "ns/iter",
            "extra": "iterations: 138146\ncpu: 5067.89700751378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5150.751331445351,
            "unit": "ns/iter",
            "extra": "iterations: 136318\ncpu: 5150.577326545241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1933.434989369656,
            "unit": "ns/iter",
            "extra": "iterations: 363579\ncpu: 1933.3165556866757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10230.489512529555,
            "unit": "ns/iter",
            "extra": "iterations: 68558\ncpu: 10230.113188832995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8123.5223180417215,
            "unit": "ns/iter",
            "extra": "iterations: 85693\ncpu: 8122.844339677629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8308.106266350218,
            "unit": "ns/iter",
            "extra": "iterations: 84100\ncpu: 8307.895362663534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7947.033395497196,
            "unit": "ns/iter",
            "extra": "iterations: 86868\ncpu: 7946.4705069760375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17979.811303320308,
            "unit": "ns/iter",
            "extra": "iterations: 38962\ncpu: 17979.061649812465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54836.098224107925,
            "unit": "ns/iter",
            "extra": "iterations: 12726\ncpu: 54831.8796165328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43618.81354665862,
            "unit": "ns/iter",
            "extra": "iterations: 16063\ncpu: 43616.491315445186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43610.14972731364,
            "unit": "ns/iter",
            "extra": "iterations: 16136\ncpu: 43608.14328210193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43186.926808190976,
            "unit": "ns/iter",
            "extra": "iterations: 16204\ncpu: 43186.626758825005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25340.35012812695,
            "unit": "ns/iter",
            "extra": "iterations: 27707\ncpu: 25339.80221604613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42700.32641854787,
            "unit": "ns/iter",
            "extra": "iterations: 16390\ncpu: 42699.084807809624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1926.9376069482605,
            "unit": "ns/iter",
            "extra": "iterations: 362909\ncpu: 1926.8334486055712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10418.362512843016,
            "unit": "ns/iter",
            "extra": "iterations: 67159\ncpu: 10418.167334236528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8139.306501258206,
            "unit": "ns/iter",
            "extra": "iterations: 85445\ncpu: 8138.944350166833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8059.070884485258,
            "unit": "ns/iter",
            "extra": "iterations: 87565\ncpu: 8058.638725518311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8037.750129077133,
            "unit": "ns/iter",
            "extra": "iterations: 87157\ncpu: 8037.4657227761345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17712.00860003536,
            "unit": "ns/iter",
            "extra": "iterations: 39651\ncpu: 17711.65670474881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53479.398724445535,
            "unit": "ns/iter",
            "extra": "iterations: 13014\ncpu: 53478.61533732931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41950.56862154165,
            "unit": "ns/iter",
            "extra": "iterations: 16591\ncpu: 41948.17069495526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45407.729944890394,
            "unit": "ns/iter",
            "extra": "iterations: 14697\ncpu: 45405.66101925565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42956.70859872986,
            "unit": "ns/iter",
            "extra": "iterations: 16328\ncpu: 42954.55046545866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25092.476678202856,
            "unit": "ns/iter",
            "extra": "iterations: 28021\ncpu: 25092.023839263107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42568.11648324731,
            "unit": "ns/iter",
            "extra": "iterations: 16629\ncpu: 42565.3196223459 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}