window.BENCHMARK_DATA = {
  "lastUpdate": 1705774880799,
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
        "date": 1702503957022,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 573.1335976402604,
            "unit": "ns/iter",
            "extra": "iterations: 1206930\ncpu: 573.1213077808986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5206.488229999877,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5206.521999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10197.272863366718,
            "unit": "ns/iter",
            "extra": "iterations: 81495\ncpu: 10197.151972513653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15161.109425212042,
            "unit": "ns/iter",
            "extra": "iterations: 54768\ncpu: 15160.946172947704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19854.81688793212,
            "unit": "ns/iter",
            "extra": "iterations: 41805\ncpu: 19854.65135749313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24736.435130681268,
            "unit": "ns/iter",
            "extra": "iterations: 33976\ncpu: 24736.422769013418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29568.557240601007,
            "unit": "ns/iter",
            "extra": "iterations: 28354\ncpu: 29512.022994991872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33892.933083532655,
            "unit": "ns/iter",
            "extra": "iterations: 24553\ncpu: 33892.896998330136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37960.71273158111,
            "unit": "ns/iter",
            "extra": "iterations: 21969\ncpu: 37958.56889253035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 539.3528416027284,
            "unit": "ns/iter",
            "extra": "iterations: 1286070\ncpu: 539.3256976680906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 420.7809424909146,
            "unit": "ns/iter",
            "extra": "iterations: 1681353\ncpu: 420.7564384159669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 409.34340202342264,
            "unit": "ns/iter",
            "extra": "iterations: 1713298\ncpu: 409.31221538809893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 415.50556587928236,
            "unit": "ns/iter",
            "extra": "iterations: 1681136\ncpu: 415.47388194649307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 857.455303803842,
            "unit": "ns/iter",
            "extra": "iterations: 819723\ncpu: 857.4048794531808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1623.8974897484118,
            "unit": "ns/iter",
            "extra": "iterations: 491385\ncpu: 1623.8175768491071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9663.208847268723,
            "unit": "ns/iter",
            "extra": "iterations: 83506\ncpu: 9662.772734893302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7809.8644119409555,
            "unit": "ns/iter",
            "extra": "iterations: 105083\ncpu: 7809.562916932337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7350.590702649366,
            "unit": "ns/iter",
            "extra": "iterations: 110311\ncpu: 7350.3821015130015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7491.267650449838,
            "unit": "ns/iter",
            "extra": "iterations: 111881\ncpu: 7491.133436419027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35279.07036830898,
            "unit": "ns/iter",
            "extra": "iterations: 23377\ncpu: 35277.57197245151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 223000.53884575723,
            "unit": "ns/iter",
            "extra": "iterations: 3604\ncpu: 222997.55826859095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 193254.69183223016,
            "unit": "ns/iter",
            "extra": "iterations: 4530\ncpu: 193252.62693156724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184259.85809757284,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 184257.87480507983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 183749.04748296627,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 183745.72433501852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96579.16871704158,
            "unit": "ns/iter",
            "extra": "iterations: 9104\ncpu: 96577.02108963077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184736.5458031549,
            "unit": "ns/iter",
            "extra": "iterations: 4694\ncpu: 184731.7639539837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5025.748854919235,
            "unit": "ns/iter",
            "extra": "iterations: 163089\ncpu: 5025.611169361522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23295.348046874813,
            "unit": "ns/iter",
            "extra": "iterations: 35840\ncpu: 23294.960937500004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18063.85544493702,
            "unit": "ns/iter",
            "extra": "iterations: 45602\ncpu: 18063.51475812466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18157.365890141366,
            "unit": "ns/iter",
            "extra": "iterations: 45459\ncpu: 18156.578455311334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17958.848166178443,
            "unit": "ns/iter",
            "extra": "iterations: 46215\ncpu: 17957.866493562666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50769.400466521765,
            "unit": "ns/iter",
            "extra": "iterations: 16291\ncpu: 50767.12908968143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 268014.8097277547,
            "unit": "ns/iter",
            "extra": "iterations: 3269\ncpu: 268003.273172223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204397.95243672584,
            "unit": "ns/iter",
            "extra": "iterations: 4268\ncpu: 204394.11902530352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204831.98630137873,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 204822.5555030709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201507.94684538664,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 201500.90131730877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107895.1328454504,
            "unit": "ns/iter",
            "extra": "iterations: 8062\ncpu: 107887.3976680727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192983.95754610913,
            "unit": "ns/iter",
            "extra": "iterations: 4499\ncpu: 192980.75127806145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 777958.6644897902,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 777912.8979591846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 430942.10053681815,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 430917.1791117618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1615.1168832961926,
            "unit": "ns/iter",
            "extra": "iterations: 506702\ncpu: 1615.0530291966527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9261.319324709373,
            "unit": "ns/iter",
            "extra": "iterations: 88969\ncpu: 9260.994278906084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6882.360519866127,
            "unit": "ns/iter",
            "extra": "iterations: 118723\ncpu: 6882.127304734543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6869.670829601327,
            "unit": "ns/iter",
            "extra": "iterations: 118346\ncpu: 6869.4210197218645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6751.674089469322,
            "unit": "ns/iter",
            "extra": "iterations: 121248\ncpu: 6751.482086302489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33812.601997088546,
            "unit": "ns/iter",
            "extra": "iterations: 24736\ncpu: 33812.782988357096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 255575.63332381265,
            "unit": "ns/iter",
            "extra": "iterations: 3499\ncpu: 255570.9059731347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192262.80501514624,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 192257.67401642882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191699.61866436317,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 191699.08636066984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 188743.3283710765,
            "unit": "ns/iter",
            "extra": "iterations: 4635\ncpu: 188740.06472491886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94486.22298177976,
            "unit": "ns/iter",
            "extra": "iterations: 9216\ncpu: 94483.7890624999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181691.819481874,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 181688.14507772017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 177.8335131852201,
            "unit": "ns/iter",
            "extra": "iterations: 3925452\ncpu: 177.8346544550792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1394.306356124504,
            "unit": "ns/iter",
            "extra": "iterations: 502004\ncpu: 1394.3151847395657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1071.2621918022776,
            "unit": "ns/iter",
            "extra": "iterations: 652057\ncpu: 1071.2446917984178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1079.1182484718918,
            "unit": "ns/iter",
            "extra": "iterations: 649353\ncpu: 1079.0933436820985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 829.4437308821567,
            "unit": "ns/iter",
            "extra": "iterations: 844433\ncpu: 829.4325304671859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9595.377104330235,
            "unit": "ns/iter",
            "extra": "iterations: 72232\ncpu: 9595.43415660648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12434.295096512098,
            "unit": "ns/iter",
            "extra": "iterations: 59733\ncpu: 12434.146953945105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2801.089553195675,
            "unit": "ns/iter",
            "extra": "iterations: 249550\ncpu: 2801.0490883590373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2790.390732205732,
            "unit": "ns/iter",
            "extra": "iterations: 250394\ncpu: 2790.374369992886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2794.2105677102636,
            "unit": "ns/iter",
            "extra": "iterations: 251748\ncpu: 2794.199755310853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5102.499692356993,
            "unit": "ns/iter",
            "extra": "iterations: 138147\ncpu: 5102.422781529853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5219.489159871549,
            "unit": "ns/iter",
            "extra": "iterations: 135146\ncpu: 5219.362023293327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1921.264611613104,
            "unit": "ns/iter",
            "extra": "iterations: 362229\ncpu: 1921.205370083567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10164.397677498719,
            "unit": "ns/iter",
            "extra": "iterations: 68719\ncpu: 10163.807680554217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8086.073463336885,
            "unit": "ns/iter",
            "extra": "iterations: 86356\ncpu: 8085.872435036409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8280.069914654721,
            "unit": "ns/iter",
            "extra": "iterations: 84832\ncpu: 8261.552244436103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8055.631207552149,
            "unit": "ns/iter",
            "extra": "iterations: 86870\ncpu: 8055.205479452024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17535.131428715238,
            "unit": "ns/iter",
            "extra": "iterations: 39588\ncpu: 17533.833484894625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54282.724535062116,
            "unit": "ns/iter",
            "extra": "iterations: 12851\ncpu: 54279.62026301382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43523.60880362638,
            "unit": "ns/iter",
            "extra": "iterations: 16107\ncpu: 43521.599304650605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41786.599415934485,
            "unit": "ns/iter",
            "extra": "iterations: 16094\ncpu: 41784.11209146236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43381.96602512821,
            "unit": "ns/iter",
            "extra": "iterations: 16159\ncpu: 43381.45306021481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25354.207703435062,
            "unit": "ns/iter",
            "extra": "iterations: 27650\ncpu: 25353.873417721516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43769.37680365366,
            "unit": "ns/iter",
            "extra": "iterations: 16425\ncpu: 43769.6316590569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1941.688235751461,
            "unit": "ns/iter",
            "extra": "iterations: 360176\ncpu: 1941.6327017902488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10102.751266195646,
            "unit": "ns/iter",
            "extra": "iterations: 69697\ncpu: 10102.622781468312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8103.203772316894,
            "unit": "ns/iter",
            "extra": "iterations: 86366\ncpu: 8103.012759650809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7978.227184709985,
            "unit": "ns/iter",
            "extra": "iterations: 87792\ncpu: 7978.223528339718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7978.580674951402,
            "unit": "ns/iter",
            "extra": "iterations: 87710\ncpu: 7978.537224945872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17402.670053156813,
            "unit": "ns/iter",
            "extra": "iterations: 40258\ncpu: 17402.39703909794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53264.41670497972,
            "unit": "ns/iter",
            "extra": "iterations: 13050\ncpu: 53263.78544061249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42068.4327934239,
            "unit": "ns/iter",
            "extra": "iterations: 16546\ncpu: 42067.19448809369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42158.92324285156,
            "unit": "ns/iter",
            "extra": "iterations: 16689\ncpu: 42159.23063095437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42235.670094984125,
            "unit": "ns/iter",
            "extra": "iterations: 16529\ncpu: 42234.58769435586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24598.230042383315,
            "unit": "ns/iter",
            "extra": "iterations: 28786\ncpu: 24597.366775515908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41719.269203624615,
            "unit": "ns/iter",
            "extra": "iterations: 17002\ncpu: 41717.22150335284 ns\nthreads: 1"
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
        "date": 1705575619935,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 585.1310657475867,
            "unit": "ns/iter",
            "extra": "iterations: 1203953\ncpu: 585.1029068410479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5232.063069998958,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5232.018000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10209.827840943994,
            "unit": "ns/iter",
            "extra": "iterations: 81355\ncpu: 10209.37127404585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15321.433584376147,
            "unit": "ns/iter",
            "extra": "iterations: 54174\ncpu: 15320.783032450983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20287.103672859204,
            "unit": "ns/iter",
            "extra": "iterations: 41303\ncpu: 20286.139021378596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25066.67755984775,
            "unit": "ns/iter",
            "extra": "iterations: 33293\ncpu: 25065.66845883519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29727.607846612013,
            "unit": "ns/iter",
            "extra": "iterations: 28216\ncpu: 29705.691806067454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34413.22067224048,
            "unit": "ns/iter",
            "extra": "iterations: 24158\ncpu: 34411.47032039074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39090.277754584466,
            "unit": "ns/iter",
            "extra": "iterations: 21555\ncpu: 39088.93064254232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 549.3383216540765,
            "unit": "ns/iter",
            "extra": "iterations: 1279188\ncpu: 549.3131580346286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 420.9023886001282,
            "unit": "ns/iter",
            "extra": "iterations: 1658126\ncpu: 420.88327425056997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 411.7481567833039,
            "unit": "ns/iter",
            "extra": "iterations: 1667601\ncpu: 411.7275655267661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 414.37412668511337,
            "unit": "ns/iter",
            "extra": "iterations: 1690112\ncpu: 414.36336763480773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 853.6303187434306,
            "unit": "ns/iter",
            "extra": "iterations: 820001\ncpu: 853.5976175638823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1619.3441407530972,
            "unit": "ns/iter",
            "extra": "iterations: 490959\ncpu: 1619.2924460087288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9942.333366061972,
            "unit": "ns/iter",
            "extra": "iterations: 81478\ncpu: 9942.032205012409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7484.777051981081,
            "unit": "ns/iter",
            "extra": "iterations: 108846\ncpu: 7484.360472594293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7408.699423386672,
            "unit": "ns/iter",
            "extra": "iterations: 109779\ncpu: 7408.4068902067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7344.325584591842,
            "unit": "ns/iter",
            "extra": "iterations: 109136\ncpu: 7343.83979621758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35562.45681257608,
            "unit": "ns/iter",
            "extra": "iterations: 23097\ncpu: 35561.813222496494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 240323.99195113525,
            "unit": "ns/iter",
            "extra": "iterations: 3603\ncpu: 240311.3238967529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184772.45086704634,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 184764.56202756733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 193741.30839253313,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 193730.17317939634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 192553.1395759714,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 192538.11837455793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97976.47025939108,
            "unit": "ns/iter",
            "extra": "iterations: 8944\ncpu: 97972.93157423977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186329.1090097843,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 186315.5546111348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4903.540072126048,
            "unit": "ns/iter",
            "extra": "iterations: 161384\ncpu: 4903.060402518224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23451.419405895635,
            "unit": "ns/iter",
            "extra": "iterations: 35381\ncpu: 23449.40222153133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18542.685903478614,
            "unit": "ns/iter",
            "extra": "iterations: 45607\ncpu: 18542.34437695967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18267.95188344239,
            "unit": "ns/iter",
            "extra": "iterations: 45369\ncpu: 18267.795190548586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17587.07909713166,
            "unit": "ns/iter",
            "extra": "iterations: 46740\ncpu: 17586.405648267028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49633.159252928046,
            "unit": "ns/iter",
            "extra": "iterations: 16973\ncpu: 49632.12749661216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 268524.49799441575,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 268515.8901573594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204254.61079813718,
            "unit": "ns/iter",
            "extra": "iterations: 4260\ncpu: 204245.91549295894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204743.13863477527,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 204736.26554069974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204109.24077533293,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 204100.6772536199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107370.54720924115,
            "unit": "ns/iter",
            "extra": "iterations: 8134\ncpu: 107367.64199655746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 188896.51010216062,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 188885.85698070296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 779713.9400164451,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 779668.2004930169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 435090.1886792588,
            "unit": "ns/iter",
            "extra": "iterations: 2014\ncpu: 435058.14299900795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1609.8446211439707,
            "unit": "ns/iter",
            "extra": "iterations: 495505\ncpu: 1609.7500529762688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9422.9177226693,
            "unit": "ns/iter",
            "extra": "iterations: 88068\ncpu: 9422.400872053378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7077.743074226803,
            "unit": "ns/iter",
            "extra": "iterations: 117532\ncpu: 7077.549943845059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7166.306756978924,
            "unit": "ns/iter",
            "extra": "iterations: 115303\ncpu: 7165.9098202128125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6673.2928984439495,
            "unit": "ns/iter",
            "extra": "iterations: 122790\ncpu: 6672.952194804187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34094.658644660485,
            "unit": "ns/iter",
            "extra": "iterations: 24599\ncpu: 34092.906215699964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 257676.0380952298,
            "unit": "ns/iter",
            "extra": "iterations: 3465\ncpu: 257660.08658008726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192925.46033811345,
            "unit": "ns/iter",
            "extra": "iterations: 4614\ncpu: 192913.35067186848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 186456.96440200467,
            "unit": "ns/iter",
            "extra": "iterations: 4607\ncpu: 186448.01389190258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190999.4104269453,
            "unit": "ns/iter",
            "extra": "iterations: 4661\ncpu: 190993.67088607652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95645.3843485768,
            "unit": "ns/iter",
            "extra": "iterations: 9226\ncpu: 95642.08757858268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182756.24589142218,
            "unit": "ns/iter",
            "extra": "iterations: 4807\ncpu: 182748.22134387377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 184.8054402435823,
            "unit": "ns/iter",
            "extra": "iterations: 3789720\ncpu: 184.80394329924033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1441.289494461975,
            "unit": "ns/iter",
            "extra": "iterations: 505343\ncpu: 1441.238920891362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1089.1896895538123,
            "unit": "ns/iter",
            "extra": "iterations: 640884\ncpu: 1089.1671503735472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1132.6576533004582,
            "unit": "ns/iter",
            "extra": "iterations: 618230\ncpu: 1132.6494993772505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 839.9966625013619,
            "unit": "ns/iter",
            "extra": "iterations: 833858\ncpu: 839.9529656128478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9768.281149804705,
            "unit": "ns/iter",
            "extra": "iterations: 72047\ncpu: 9768.030591141887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11912.201322063223,
            "unit": "ns/iter",
            "extra": "iterations: 56427\ncpu: 11911.288921969997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2675.9440658283606,
            "unit": "ns/iter",
            "extra": "iterations: 261772\ncpu: 2675.8518863744034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2711.098842260139,
            "unit": "ns/iter",
            "extra": "iterations: 260162\ncpu: 2710.9647066059038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2701.7469311545906,
            "unit": "ns/iter",
            "extra": "iterations: 259218\ncpu: 2701.692397904458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4970.694602661296,
            "unit": "ns/iter",
            "extra": "iterations: 157133\ncpu: 4970.211858743867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5102.811076057265,
            "unit": "ns/iter",
            "extra": "iterations: 137251\ncpu: 5102.71254854245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1883.0748602120887,
            "unit": "ns/iter",
            "extra": "iterations: 363050\ncpu: 1882.9725933067166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10116.050598508022,
            "unit": "ns/iter",
            "extra": "iterations: 69172\ncpu: 10115.971780489223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8038.009510790615,
            "unit": "ns/iter",
            "extra": "iterations: 86323\ncpu: 8037.943537643594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8241.028333998533,
            "unit": "ns/iter",
            "extra": "iterations: 85198\ncpu: 8240.402356862834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8121.347448310674,
            "unit": "ns/iter",
            "extra": "iterations: 85512\ncpu: 8121.198194405442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17683.573959704434,
            "unit": "ns/iter",
            "extra": "iterations: 39508\ncpu: 17681.64422395475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54642.5105518161,
            "unit": "ns/iter",
            "extra": "iterations: 12794\ncpu: 54637.462873221186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43452.57653410015,
            "unit": "ns/iter",
            "extra": "iterations: 16117\ncpu: 43448.86145064206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43397.36173123601,
            "unit": "ns/iter",
            "extra": "iterations: 16081\ncpu: 43394.20434052549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43524.329455674146,
            "unit": "ns/iter",
            "extra": "iterations: 16075\ncpu: 43518.569206843094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25138.216134708266,
            "unit": "ns/iter",
            "extra": "iterations: 27853\ncpu: 25136.355150252995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42792.42551369953,
            "unit": "ns/iter",
            "extra": "iterations: 16352\ncpu: 42788.350048924134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1929.2542705387002,
            "unit": "ns/iter",
            "extra": "iterations: 362425\ncpu: 1929.1607918879447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10174.590769098024,
            "unit": "ns/iter",
            "extra": "iterations: 68834\ncpu: 10173.40703721996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7965.6798578009375,
            "unit": "ns/iter",
            "extra": "iterations: 87483\ncpu: 7965.325834733588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7882.122344627648,
            "unit": "ns/iter",
            "extra": "iterations: 88594\ncpu: 7881.546154367104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7916.891676091224,
            "unit": "ns/iter",
            "extra": "iterations: 88420\ncpu: 7916.265550780235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17309.422145935914,
            "unit": "ns/iter",
            "extra": "iterations: 39908\ncpu: 17308.431893355035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53150.58872635273,
            "unit": "ns/iter",
            "extra": "iterations: 13057\ncpu: 53144.4512522022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42094.4364088295,
            "unit": "ns/iter",
            "extra": "iterations: 16496\ncpu: 42091.99199806021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42095.294054119455,
            "unit": "ns/iter",
            "extra": "iterations: 16667\ncpu: 42091.27017459621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42221.88795231503,
            "unit": "ns/iter",
            "extra": "iterations: 16609\ncpu: 42218.77295442277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24813.965493935568,
            "unit": "ns/iter",
            "extra": "iterations: 28111\ncpu: 24811.8209953397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41684.03017623051,
            "unit": "ns/iter",
            "extra": "iterations: 16967\ncpu: 41682.48364472251 ns\nthreads: 1"
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
        "date": 1705773453331,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 579.5385022261335,
            "unit": "ns/iter",
            "extra": "iterations: 1200515\ncpu: 579.5011307647135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5259.829459999992,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5259.785000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10127.20633137607,
            "unit": "ns/iter",
            "extra": "iterations: 82794\ncpu: 10126.985047225642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15317.900978572228,
            "unit": "ns/iter",
            "extra": "iterations: 54978\ncpu: 15317.690712648697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19959.51634360882,
            "unit": "ns/iter",
            "extra": "iterations: 41943\ncpu: 19959.0873328088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24679.421329449913,
            "unit": "ns/iter",
            "extra": "iterations: 33653\ncpu: 24678.91124119692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29371.38787857778,
            "unit": "ns/iter",
            "extra": "iterations: 28594\ncpu: 29371.22473246136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34502.416228686474,
            "unit": "ns/iter",
            "extra": "iterations: 23403\ncpu: 34502.640687091385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39077.7473660109,
            "unit": "ns/iter",
            "extra": "iterations: 21830\ncpu: 39077.52633989921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 545.209807324881,
            "unit": "ns/iter",
            "extra": "iterations: 1278473\ncpu: 545.2076031327997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 428.5370548710516,
            "unit": "ns/iter",
            "extra": "iterations: 1633375\ncpu: 428.5341088237546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 419.95376472402546,
            "unit": "ns/iter",
            "extra": "iterations: 1665049\ncpu: 419.9513047363777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 421.7453073296119,
            "unit": "ns/iter",
            "extra": "iterations: 1658171\ncpu: 421.73828875308993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 864.2180902374288,
            "unit": "ns/iter",
            "extra": "iterations: 809619\ncpu: 864.2239127293208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1639.6875627004854,
            "unit": "ns/iter",
            "extra": "iterations: 486440\ncpu: 1639.6766302113308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9391.203704540909,
            "unit": "ns/iter",
            "extra": "iterations: 88594\ncpu: 9391.212723209246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7398.957583930656,
            "unit": "ns/iter",
            "extra": "iterations: 107530\ncpu: 7398.9612201246155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7335.651336324143,
            "unit": "ns/iter",
            "extra": "iterations: 109891\ncpu: 7335.575251840436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7292.2181234964955,
            "unit": "ns/iter",
            "extra": "iterations: 110983\ncpu: 7292.180784444456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35545.88325507212,
            "unit": "ns/iter",
            "extra": "iterations: 23213\ncpu: 35545.39697583252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 243375.40490113304,
            "unit": "ns/iter",
            "extra": "iterations: 3591\ncpu: 243375.63352826543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 173177.47278381637,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 173176.8940235506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183543.68733392394,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 183542.6926483618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 183681.17573221817,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 183681.43580709115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96427.81139725591,
            "unit": "ns/iter",
            "extra": "iterations: 9125\ncpu: 96426.10410958942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185698.48539757027,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 185697.03687912977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5040.576207996244,
            "unit": "ns/iter",
            "extra": "iterations: 163349\ncpu: 5040.551212434722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23927.482674418286,
            "unit": "ns/iter",
            "extra": "iterations: 34400\ncpu: 23927.642441860455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18550.729219031033,
            "unit": "ns/iter",
            "extra": "iterations: 45354\ncpu: 18550.729814349335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18735.850710102102,
            "unit": "ns/iter",
            "extra": "iterations: 44571\ncpu: 18735.974063853177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18364.977728884172,
            "unit": "ns/iter",
            "extra": "iterations: 44542\ncpu: 18364.85564186608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50356.41716578851,
            "unit": "ns/iter",
            "extra": "iterations: 16195\ncpu: 50354.64032108683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 265047.35866261966,
            "unit": "ns/iter",
            "extra": "iterations: 3290\ncpu: 265038.6930091178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203095.73277466386,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 203088.54748603245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202207.9399532622,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 202202.68691588845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203487.234087209,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 203481.95383539342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106262.67705139949,
            "unit": "ns/iter",
            "extra": "iterations: 8153\ncpu: 106258.82497240257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194891.2112455206,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 194883.80376344244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 770434.7495973707,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 770417.0692431594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 428189.51579970535,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 428184.2002916863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1608.966347895108,
            "unit": "ns/iter",
            "extra": "iterations: 507992\ncpu: 1608.961558449733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9016.89592398198,
            "unit": "ns/iter",
            "extra": "iterations: 91241\ncpu: 9016.533137514984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7068.558155705225,
            "unit": "ns/iter",
            "extra": "iterations: 116489\ncpu: 7068.436504734405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6904.36701966978,
            "unit": "ns/iter",
            "extra": "iterations: 119168\ncpu: 6904.121072771237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6726.806669912329,
            "unit": "ns/iter",
            "extra": "iterations: 121171\ncpu: 6726.659019072202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34035.95427249775,
            "unit": "ns/iter",
            "extra": "iterations: 24646\ncpu: 34035.27144364215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 261940.24719764222,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 261932.18289085687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 193025.03022282114,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 193019.83234061234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194164.03312721555,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 194160.93197879856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 192855.79527382719,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 192850.92756183792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96550.72628218244,
            "unit": "ns/iter",
            "extra": "iterations: 9086\ncpu: 96549.53775038524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 175052.18123666066,
            "unit": "ns/iter",
            "extra": "iterations: 4690\ncpu: 175045.6716417908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 191.7560145994086,
            "unit": "ns/iter",
            "extra": "iterations: 3654940\ncpu: 191.7552408521066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1425.6105170377825,
            "unit": "ns/iter",
            "extra": "iterations: 490119\ncpu: 1425.565015843085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1042.6146019411365,
            "unit": "ns/iter",
            "extra": "iterations: 671760\ncpu: 1042.590508514945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1046.525199502905,
            "unit": "ns/iter",
            "extra": "iterations: 667910\ncpu: 1046.5080624635125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 841.4751702830364,
            "unit": "ns/iter",
            "extra": "iterations: 829208\ncpu: 841.4669178300231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9701.002557864369,
            "unit": "ns/iter",
            "extra": "iterations: 71935\ncpu: 9700.960589420967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12467.891493410485,
            "unit": "ns/iter",
            "extra": "iterations: 56227\ncpu: 12467.3484269123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2786.585713948003,
            "unit": "ns/iter",
            "extra": "iterations: 253646\ncpu: 2786.5391135677037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2751.642535341904,
            "unit": "ns/iter",
            "extra": "iterations: 254372\ncpu: 2751.5673894925435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2757.292744983123,
            "unit": "ns/iter",
            "extra": "iterations: 254293\ncpu: 2757.2414498236335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5168.5824095262205,
            "unit": "ns/iter",
            "extra": "iterations: 135039\ncpu: 5168.493546308837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5222.070181590279,
            "unit": "ns/iter",
            "extra": "iterations: 134038\ncpu: 5221.797549948506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1959.5020420657256,
            "unit": "ns/iter",
            "extra": "iterations: 356012\ncpu: 1959.4847926474458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10306.653560340468,
            "unit": "ns/iter",
            "extra": "iterations: 67957\ncpu: 10306.533543270018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8225.973744413783,
            "unit": "ns/iter",
            "extra": "iterations: 84363\ncpu: 8225.93672581593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8378.648534611566,
            "unit": "ns/iter",
            "extra": "iterations: 83425\ncpu: 8378.394965537775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8182.434582917174,
            "unit": "ns/iter",
            "extra": "iterations: 86002\ncpu: 8182.075998232551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18178.20627883954,
            "unit": "ns/iter",
            "extra": "iterations: 38574\ncpu: 18177.902213926624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54951.769996047595,
            "unit": "ns/iter",
            "extra": "iterations: 12665\ncpu: 54951.133043821836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43393.122043114025,
            "unit": "ns/iter",
            "extra": "iterations: 16191\ncpu: 43392.699647952206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43681.367775284016,
            "unit": "ns/iter",
            "extra": "iterations: 16056\ncpu: 43679.83308420482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42681.46367017994,
            "unit": "ns/iter",
            "extra": "iterations: 16130\ncpu: 42680.681959082016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25800.78430795314,
            "unit": "ns/iter",
            "extra": "iterations: 27173\ncpu: 25799.830714311945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43922.46520650234,
            "unit": "ns/iter",
            "extra": "iterations: 15980\ncpu: 43920.89486858562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1976.5509918530768,
            "unit": "ns/iter",
            "extra": "iterations: 354488\ncpu: 1976.4666222833985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10063.934237457795,
            "unit": "ns/iter",
            "extra": "iterations: 67911\ncpu: 10063.59499933718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7969.950909401505,
            "unit": "ns/iter",
            "extra": "iterations: 87695\ncpu: 7969.8306630936595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7939.509046277136,
            "unit": "ns/iter",
            "extra": "iterations: 87992\ncpu: 7939.479725429621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7904.1809033919635,
            "unit": "ns/iter",
            "extra": "iterations: 88843\ncpu: 7904.05321747362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17390.865961726096,
            "unit": "ns/iter",
            "extra": "iterations: 40287\ncpu: 17390.858093181447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51485.43073066399,
            "unit": "ns/iter",
            "extra": "iterations: 13166\ncpu: 51485.73598663187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42640.2843874153,
            "unit": "ns/iter",
            "extra": "iterations: 16365\ncpu: 42640.05499541641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41833.596326032064,
            "unit": "ns/iter",
            "extra": "iterations: 17311\ncpu: 41832.92704060993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41527.007367145205,
            "unit": "ns/iter",
            "extra": "iterations: 16560\ncpu: 41526.95048309239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24877.34451957291,
            "unit": "ns/iter",
            "extra": "iterations: 28100\ncpu: 24876.911032028343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41575.10264394472,
            "unit": "ns/iter",
            "extra": "iterations: 17020\ncpu: 41575.29964747314 ns\nthreads: 1"
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
        "date": 1705774879338,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 574.9681202651007,
            "unit": "ns/iter",
            "extra": "iterations: 1214251\ncpu: 574.9534486691796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5308.79116000051,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5308.682999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10459.058294273053,
            "unit": "ns/iter",
            "extra": "iterations: 79579\ncpu: 10458.741627816384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15521.541329189839,
            "unit": "ns/iter",
            "extra": "iterations: 54078\ncpu: 15521.171271126897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20201.199308176056,
            "unit": "ns/iter",
            "extra": "iterations: 41629\ncpu: 20200.542890773275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25116.13151268236,
            "unit": "ns/iter",
            "extra": "iterations: 33358\ncpu: 25115.651417950732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29966.956842293515,
            "unit": "ns/iter",
            "extra": "iterations: 27805\ncpu: 29965.876640891907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34844.205595799824,
            "unit": "ns/iter",
            "extra": "iterations: 24018\ncpu: 34843.26754933801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42144.56245374015,
            "unit": "ns/iter",
            "extra": "iterations: 21616\ncpu: 42143.89341228723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 554.8150079569916,
            "unit": "ns/iter",
            "extra": "iterations: 1261784\ncpu: 554.8105697964149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 429.8172397721599,
            "unit": "ns/iter",
            "extra": "iterations: 1624221\ncpu: 429.81330742552865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 427.60218360597804,
            "unit": "ns/iter",
            "extra": "iterations: 1636559\ncpu: 427.5941166801808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 428.9043827911991,
            "unit": "ns/iter",
            "extra": "iterations: 1637655\ncpu: 428.90040942689353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 884.7839690764274,
            "unit": "ns/iter",
            "extra": "iterations: 774815\ncpu: 884.7672024935005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1645.5092712413386,
            "unit": "ns/iter",
            "extra": "iterations: 486073\ncpu: 1645.4958411596622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9499.597492419216,
            "unit": "ns/iter",
            "extra": "iterations: 85740\ncpu: 9499.346862607892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7141.711423901708,
            "unit": "ns/iter",
            "extra": "iterations: 113814\ncpu: 7141.600330363566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7132.075379313269,
            "unit": "ns/iter",
            "extra": "iterations: 113758\ncpu: 7131.918634293848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7499.304426277015,
            "unit": "ns/iter",
            "extra": "iterations: 107517\ncpu: 7499.088516234629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36044.438693053125,
            "unit": "ns/iter",
            "extra": "iterations: 22893\ncpu: 36043.41938583845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 234149.93656318847,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 234145.15524625202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 183603.8864619439,
            "unit": "ns/iter",
            "extra": "iterations: 4624\ncpu: 183600.75692041524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185887.75885146786,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 185883.5276338517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188583.01491570772,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 188577.1725032422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95306.42181024479,
            "unit": "ns/iter",
            "extra": "iterations: 9170\ncpu: 95304.4383860414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 191208.4864296237,
            "unit": "ns/iter",
            "extra": "iterations: 4753\ncpu: 191204.22890805814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5070.6217097960325,
            "unit": "ns/iter",
            "extra": "iterations: 162148\ncpu: 5070.575646939834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23510.48254353281,
            "unit": "ns/iter",
            "extra": "iterations: 34629\ncpu: 23509.9425337146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17923.42293245464,
            "unit": "ns/iter",
            "extra": "iterations: 45525\ncpu: 17923.259747391567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18156.86415512949,
            "unit": "ns/iter",
            "extra": "iterations: 46877\ncpu: 18156.445591654716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17414.65886760103,
            "unit": "ns/iter",
            "extra": "iterations: 46715\ncpu: 17414.50711762816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48795.66355993962,
            "unit": "ns/iter",
            "extra": "iterations: 16416\ncpu: 48794.450536062264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 267893.5806550306,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 267884.69543924066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202099.05325859977,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 202091.0301331461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204085.48973879075,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 204080.36380596994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201588.88945776722,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 201582.73213870064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106209.12617793966,
            "unit": "ns/iter",
            "extra": "iterations: 8171\ncpu: 106207.5510953375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194037.61128457362,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 194030.9099018742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 775407.3699187039,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 775388.1300812993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 440406.1961270901,
            "unit": "ns/iter",
            "extra": "iterations: 2014\ncpu: 440399.4041708062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1609.2481085567024,
            "unit": "ns/iter",
            "extra": "iterations: 508342\ncpu: 1609.1963677996316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8980.060596159698,
            "unit": "ns/iter",
            "extra": "iterations: 91821\ncpu: 8979.475283431919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6833.059779197066,
            "unit": "ns/iter",
            "extra": "iterations: 119473\ncpu: 6832.676002109271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7014.151199138402,
            "unit": "ns/iter",
            "extra": "iterations: 116125\ncpu: 7013.770505920329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6583.940514081673,
            "unit": "ns/iter",
            "extra": "iterations: 124416\ncpu: 6583.719135802454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33873.54149879092,
            "unit": "ns/iter",
            "extra": "iterations: 24820\ncpu: 33871.498791297425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 254533.18296528966,
            "unit": "ns/iter",
            "extra": "iterations: 3487\ncpu: 254518.55463148755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191607.29883067147,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 191597.14161974966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191392.79372971156,
            "unit": "ns/iter",
            "extra": "iterations: 4625\ncpu: 191384.2162162173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191194.89641777732,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 191184.91583944854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95044.87983529682,
            "unit": "ns/iter",
            "extra": "iterations: 9229\ncpu: 95039.3650449669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 185310.976015152,
            "unit": "ns/iter",
            "extra": "iterations: 4753\ncpu: 185301.85146223425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 188.932366546924,
            "unit": "ns/iter",
            "extra": "iterations: 3718367\ncpu: 188.9309742690815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1382.3401808942651,
            "unit": "ns/iter",
            "extra": "iterations: 505046\ncpu: 1382.2889400173533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1076.0883255427934,
            "unit": "ns/iter",
            "extra": "iterations: 648861\ncpu: 1076.057892214211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1118.2870582243606,
            "unit": "ns/iter",
            "extra": "iterations: 648095\ncpu: 1118.243467392896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 823.9335628919398,
            "unit": "ns/iter",
            "extra": "iterations: 845100\ncpu: 823.9260442551173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9565.942483856274,
            "unit": "ns/iter",
            "extra": "iterations: 73249\ncpu: 9565.857554369382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12780.906878817786,
            "unit": "ns/iter",
            "extra": "iterations: 55809\ncpu: 12780.596319590028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2835.407457204155,
            "unit": "ns/iter",
            "extra": "iterations: 246929\ncpu: 2835.3437627820113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2726.409951655786,
            "unit": "ns/iter",
            "extra": "iterations: 261665\ncpu: 2726.36118701393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2720.6550218681505,
            "unit": "ns/iter",
            "extra": "iterations: 257454\ncpu: 2720.6347541696837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5037.040826176524,
            "unit": "ns/iter",
            "extra": "iterations: 138808\ncpu: 5036.812719727984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5164.793630082621,
            "unit": "ns/iter",
            "extra": "iterations: 132592\ncpu: 5164.590623868715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1941.9744493175476,
            "unit": "ns/iter",
            "extra": "iterations: 361869\ncpu: 1941.8897446313438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10251.771617912045,
            "unit": "ns/iter",
            "extra": "iterations: 68508\ncpu: 10251.687394172975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8131.4353590650835,
            "unit": "ns/iter",
            "extra": "iterations: 86586\ncpu: 8131.290277874023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8181.157032376344,
            "unit": "ns/iter",
            "extra": "iterations: 83919\ncpu: 8180.7242698317295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8061.133523929455,
            "unit": "ns/iter",
            "extra": "iterations: 87445\ncpu: 8060.704442792625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17626.037743454388,
            "unit": "ns/iter",
            "extra": "iterations: 39689\ncpu: 17625.122830003223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52269.98483545286,
            "unit": "ns/iter",
            "extra": "iterations: 12793\ncpu: 52188.36082232537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43129.32455170908,
            "unit": "ns/iter",
            "extra": "iterations: 16284\ncpu: 43125.147383935044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43175.395553098315,
            "unit": "ns/iter",
            "extra": "iterations: 16281\ncpu: 43173.37387138396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43045.23187063991,
            "unit": "ns/iter",
            "extra": "iterations: 16203\ncpu: 43041.61575016914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25138.25306005278,
            "unit": "ns/iter",
            "extra": "iterations: 27859\ncpu: 25137.000610216026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42917.92542105914,
            "unit": "ns/iter",
            "extra": "iterations: 16506\ncpu: 42916.23046165032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1940.783412169531,
            "unit": "ns/iter",
            "extra": "iterations: 362989\ncpu: 1940.676439230934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10123.061099796167,
            "unit": "ns/iter",
            "extra": "iterations: 68740\ncpu: 10122.60837940064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8131.963107939867,
            "unit": "ns/iter",
            "extra": "iterations: 86604\ncpu: 8131.819546441284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8046.886040833269,
            "unit": "ns/iter",
            "extra": "iterations: 87233\ncpu: 8046.73116825062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7907.945230713894,
            "unit": "ns/iter",
            "extra": "iterations: 89028\ncpu: 7907.803163049845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17266.095238094505,
            "unit": "ns/iter",
            "extra": "iterations: 40761\ncpu: 17265.66080321869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53534.7282683572,
            "unit": "ns/iter",
            "extra": "iterations: 13057\ncpu: 53533.675423144654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42105.86122325934,
            "unit": "ns/iter",
            "extra": "iterations: 16595\ncpu: 42105.00753238925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42193.82615504643,
            "unit": "ns/iter",
            "extra": "iterations: 16601\ncpu: 42192.52454671403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41786.80482416768,
            "unit": "ns/iter",
            "extra": "iterations: 16749\ncpu: 41785.01403068905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24979.78400768137,
            "unit": "ns/iter",
            "extra": "iterations: 28126\ncpu: 24979.328734978037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41904.206046051004,
            "unit": "ns/iter",
            "extra": "iterations: 17069\ncpu: 41903.05231706538 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}