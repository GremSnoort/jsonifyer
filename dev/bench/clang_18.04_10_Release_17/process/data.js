window.BENCHMARK_DATA = {
  "lastUpdate": 1702490334488,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-10 18.04 Release c++-17": [
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
        "date": 1702490325409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1448.4768745037193,
            "unit": "ns/iter",
            "extra": "iterations: 487449\ncpu: 1448.4947143188315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16278.009111434418,
            "unit": "ns/iter",
            "extra": "iterations: 49608\ncpu: 16277.554023544591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34385.287286163606,
            "unit": "ns/iter",
            "extra": "iterations: 24084\ncpu: 34381.834412888216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51246.108199290255,
            "unit": "ns/iter",
            "extra": "iterations: 16599\ncpu: 51243.82794144225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56490.3299999969,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56489.19000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71240.6259864905,
            "unit": "ns/iter",
            "extra": "iterations: 12291\ncpu: 71237.0026848914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83971.67282219653,
            "unit": "ns/iter",
            "extra": "iterations: 10343\ncpu: 83968.6261239486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96575.11596639374,
            "unit": "ns/iter",
            "extra": "iterations: 8925\ncpu: 96572.45938375354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113648.20463169855,
            "unit": "ns/iter",
            "extra": "iterations: 7643\ncpu: 113645.45335601195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1147.8305260318377,
            "unit": "ns/iter",
            "extra": "iterations: 604317\ncpu: 1147.793293916934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 953.3547369872682,
            "unit": "ns/iter",
            "extra": "iterations: 739204\ncpu: 953.3157288109918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 921.2078777515167,
            "unit": "ns/iter",
            "extra": "iterations: 762578\ncpu: 921.1717358748878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 923.929301514049,
            "unit": "ns/iter",
            "extra": "iterations: 757739\ncpu: 923.9285558747795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1844.3393404807928,
            "unit": "ns/iter",
            "extra": "iterations: 378882\ncpu: 1844.314060842164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5316.487546095075,
            "unit": "ns/iter",
            "extra": "iterations: 150234\ncpu: 5316.356483885135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24827.714992504585,
            "unit": "ns/iter",
            "extra": "iterations: 33350\ncpu: 24826.497751124432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19836.83625773456,
            "unit": "ns/iter",
            "extra": "iterations: 41376\ncpu: 19836.359242072653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18801.52774606083,
            "unit": "ns/iter",
            "extra": "iterations: 43790\ncpu: 18800.826672756346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19191.239936000384,
            "unit": "ns/iter",
            "extra": "iterations: 43124\ncpu: 19190.80094610896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65756.18287852533,
            "unit": "ns/iter",
            "extra": "iterations: 13632\ncpu: 65753.24237089191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561177.4799999694,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561167.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 541747.3143749874,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 541737.4999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 545961.5836454222,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 545934.7690386998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 574017.8466413127,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 573986.5652724968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329607.2197967787,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 329595.22017312766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 560151.5790488358,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 560122.3650385606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2408227.280701758,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2408154.3859649124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1067857.1420256554,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1067831.31548312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3222253.34965047,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3222075.524475515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7828.598928903927,
            "unit": "ns/iter",
            "extra": "iterations: 108487\ncpu: 7828.305695613306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39355.313078511055,
            "unit": "ns/iter",
            "extra": "iterations: 20851\ncpu: 39354.38588077316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30827.15490327884,
            "unit": "ns/iter",
            "extra": "iterations: 26778\ncpu: 30826.167002763475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30380.799800505927,
            "unit": "ns/iter",
            "extra": "iterations: 27068\ncpu: 30380.013299837414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30812.62506482615,
            "unit": "ns/iter",
            "extra": "iterations: 26994\ncpu: 30811.950803882308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76439.86110867243,
            "unit": "ns/iter",
            "extra": "iterations: 11383\ncpu: 76438.80347887192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603248.7499999206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603232.400000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 594996.9370294296,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 594997.0568104042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 592522.3331072342,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 592507.7340569869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596248.9856459292,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 596231.7840054691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336162.29631065525,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 336147.96116504807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574750.2702170298,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 574735.7001972427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2481982.7238607667,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2481945.576407505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1101239.4132230966,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 1101198.9374262022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5073.557474886168,
            "unit": "ns/iter",
            "extra": "iterations: 155494\ncpu: 5073.3481677749605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25160.607782883508,
            "unit": "ns/iter",
            "extra": "iterations: 32867\ncpu: 25160.17281771992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19467.68100771365,
            "unit": "ns/iter",
            "extra": "iterations: 42512\ncpu: 19467.22572450136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18751.795862757932,
            "unit": "ns/iter",
            "extra": "iterations: 44039\ncpu: 18751.324961965536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19260.922125283363,
            "unit": "ns/iter",
            "extra": "iterations: 43326\ncpu: 19259.938604994622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64006.19173230886,
            "unit": "ns/iter",
            "extra": "iterations: 13837\ncpu: 64005.30461805285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 580438.2210000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580395.6999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 566490.4246031414,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 566476.0582010581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575445.7557152597,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 575417.37426519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575468.9627411461,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 575460.3459747154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327854.65570670634,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 327849.6976568405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 565113.084745715,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 565100.8474576275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 498.08810945884534,
            "unit": "ns/iter",
            "extra": "iterations: 1408237\ncpu: 498.0775963136913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3124.6978000890954,
            "unit": "ns/iter",
            "extra": "iterations: 224100\ncpu: 3124.558679161079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2308.776792969874,
            "unit": "ns/iter",
            "extra": "iterations: 305192\ncpu: 2308.6778159322757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2395.851332657689,
            "unit": "ns/iter",
            "extra": "iterations: 292048\ncpu: 2395.7828850052056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1921.3363454447044,
            "unit": "ns/iter",
            "extra": "iterations: 364307\ncpu: 1921.248836832692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17301.387085611175,
            "unit": "ns/iter",
            "extra": "iterations: 40451\ncpu: 17300.934463919384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31324.155720053575,
            "unit": "ns/iter",
            "extra": "iterations: 22290\ncpu: 31324.145356662495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7367.4007689876635,
            "unit": "ns/iter",
            "extra": "iterations: 94930\ncpu: 7367.249552301636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7299.577460532208,
            "unit": "ns/iter",
            "extra": "iterations: 95965\ncpu: 7299.425832334802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7332.852967931439,
            "unit": "ns/iter",
            "extra": "iterations: 95639\ncpu: 7332.688547559175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13874.042542659385,
            "unit": "ns/iter",
            "extra": "iterations: 50514\ncpu: 13873.60533713422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14048.397896581017,
            "unit": "ns/iter",
            "extra": "iterations: 50204\ncpu: 14047.926460043001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5398.406331329658,
            "unit": "ns/iter",
            "extra": "iterations: 129104\ncpu: 5398.296722022527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27121.555668213492,
            "unit": "ns/iter",
            "extra": "iterations: 25643\ncpu: 27121.834418750044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21858.078474148202,
            "unit": "ns/iter",
            "extra": "iterations: 32087\ncpu: 21858.095178732667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21541.248411608492,
            "unit": "ns/iter",
            "extra": "iterations: 32108\ncpu: 21540.76865578675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21696.013175390428,
            "unit": "ns/iter",
            "extra": "iterations: 32333\ncpu: 21695.988618439693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48213.6649178554,
            "unit": "ns/iter",
            "extra": "iterations: 14486\ncpu: 48212.701919094325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159686.73059358826,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 159685.1369862997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133920.29552410165,
            "unit": "ns/iter",
            "extra": "iterations: 5228\ncpu: 133910.53940321354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133204.74301462786,
            "unit": "ns/iter",
            "extra": "iterations: 5261\ncpu: 133199.22068048056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133142.41783681465,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 133134.68690702147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83841.43911792713,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 83839.35762224482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133004.76820940585,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 133000.36039453538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5072.73427836751,
            "unit": "ns/iter",
            "extra": "iterations: 137279\ncpu: 5072.594497337536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25979.13066417351,
            "unit": "ns/iter",
            "extra": "iterations: 26725\ncpu: 25978.323666978642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20637.817305705146,
            "unit": "ns/iter",
            "extra": "iterations: 33827\ncpu: 20637.224702160984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20309.896905414826,
            "unit": "ns/iter",
            "extra": "iterations: 34318\ncpu: 20308.82044408192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20819.416339754556,
            "unit": "ns/iter",
            "extra": "iterations: 33648\ncpu: 20818.764859724382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46737.358466583755,
            "unit": "ns/iter",
            "extra": "iterations: 14947\ncpu: 46735.86672910939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154238.84394975138,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 154233.61251928465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128772.86405443751,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 128769.99632082289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128326.13710416119,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 128322.4235767904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128431.96629419463,
            "unit": "ns/iter",
            "extra": "iterations: 5459\ncpu: 128427.78897233879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81985.19529328772,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 81983.58506029838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127914.03509094959,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 127914.03637699931 ns\nthreads: 1"
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
        "date": 1702490325409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1448.4768745037193,
            "unit": "ns/iter",
            "extra": "iterations: 487449\ncpu: 1448.4947143188315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16278.009111434418,
            "unit": "ns/iter",
            "extra": "iterations: 49608\ncpu: 16277.554023544591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34385.287286163606,
            "unit": "ns/iter",
            "extra": "iterations: 24084\ncpu: 34381.834412888216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51246.108199290255,
            "unit": "ns/iter",
            "extra": "iterations: 16599\ncpu: 51243.82794144225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56490.3299999969,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56489.19000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71240.6259864905,
            "unit": "ns/iter",
            "extra": "iterations: 12291\ncpu: 71237.0026848914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83971.67282219653,
            "unit": "ns/iter",
            "extra": "iterations: 10343\ncpu: 83968.6261239486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96575.11596639374,
            "unit": "ns/iter",
            "extra": "iterations: 8925\ncpu: 96572.45938375354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113648.20463169855,
            "unit": "ns/iter",
            "extra": "iterations: 7643\ncpu: 113645.45335601195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1147.8305260318377,
            "unit": "ns/iter",
            "extra": "iterations: 604317\ncpu: 1147.793293916934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 953.3547369872682,
            "unit": "ns/iter",
            "extra": "iterations: 739204\ncpu: 953.3157288109918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 921.2078777515167,
            "unit": "ns/iter",
            "extra": "iterations: 762578\ncpu: 921.1717358748878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 923.929301514049,
            "unit": "ns/iter",
            "extra": "iterations: 757739\ncpu: 923.9285558747795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1844.3393404807928,
            "unit": "ns/iter",
            "extra": "iterations: 378882\ncpu: 1844.314060842164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5316.487546095075,
            "unit": "ns/iter",
            "extra": "iterations: 150234\ncpu: 5316.356483885135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24827.714992504585,
            "unit": "ns/iter",
            "extra": "iterations: 33350\ncpu: 24826.497751124432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19836.83625773456,
            "unit": "ns/iter",
            "extra": "iterations: 41376\ncpu: 19836.359242072653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18801.52774606083,
            "unit": "ns/iter",
            "extra": "iterations: 43790\ncpu: 18800.826672756346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19191.239936000384,
            "unit": "ns/iter",
            "extra": "iterations: 43124\ncpu: 19190.80094610896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65756.18287852533,
            "unit": "ns/iter",
            "extra": "iterations: 13632\ncpu: 65753.24237089191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561177.4799999694,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561167.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 541747.3143749874,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 541737.4999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 545961.5836454222,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 545934.7690386998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 574017.8466413127,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 573986.5652724968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329607.2197967787,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 329595.22017312766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 560151.5790488358,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 560122.3650385606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2408227.280701758,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2408154.3859649124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1067857.1420256554,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1067831.31548312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3222253.34965047,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3222075.524475515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7828.598928903927,
            "unit": "ns/iter",
            "extra": "iterations: 108487\ncpu: 7828.305695613306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39355.313078511055,
            "unit": "ns/iter",
            "extra": "iterations: 20851\ncpu: 39354.38588077316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30827.15490327884,
            "unit": "ns/iter",
            "extra": "iterations: 26778\ncpu: 30826.167002763475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30380.799800505927,
            "unit": "ns/iter",
            "extra": "iterations: 27068\ncpu: 30380.013299837414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30812.62506482615,
            "unit": "ns/iter",
            "extra": "iterations: 26994\ncpu: 30811.950803882308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76439.86110867243,
            "unit": "ns/iter",
            "extra": "iterations: 11383\ncpu: 76438.80347887192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603248.7499999206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603232.400000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 594996.9370294296,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 594997.0568104042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 592522.3331072342,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 592507.7340569869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596248.9856459292,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 596231.7840054691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336162.29631065525,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 336147.96116504807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574750.2702170298,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 574735.7001972427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2481982.7238607667,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2481945.576407505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1101239.4132230966,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 1101198.9374262022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5073.557474886168,
            "unit": "ns/iter",
            "extra": "iterations: 155494\ncpu: 5073.3481677749605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25160.607782883508,
            "unit": "ns/iter",
            "extra": "iterations: 32867\ncpu: 25160.17281771992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19467.68100771365,
            "unit": "ns/iter",
            "extra": "iterations: 42512\ncpu: 19467.22572450136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18751.795862757932,
            "unit": "ns/iter",
            "extra": "iterations: 44039\ncpu: 18751.324961965536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19260.922125283363,
            "unit": "ns/iter",
            "extra": "iterations: 43326\ncpu: 19259.938604994622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64006.19173230886,
            "unit": "ns/iter",
            "extra": "iterations: 13837\ncpu: 64005.30461805285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 580438.2210000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580395.6999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 566490.4246031414,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 566476.0582010581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575445.7557152597,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 575417.37426519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575468.9627411461,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 575460.3459747154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327854.65570670634,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 327849.6976568405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 565113.084745715,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 565100.8474576275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 498.08810945884534,
            "unit": "ns/iter",
            "extra": "iterations: 1408237\ncpu: 498.0775963136913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3124.6978000890954,
            "unit": "ns/iter",
            "extra": "iterations: 224100\ncpu: 3124.558679161079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2308.776792969874,
            "unit": "ns/iter",
            "extra": "iterations: 305192\ncpu: 2308.6778159322757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2395.851332657689,
            "unit": "ns/iter",
            "extra": "iterations: 292048\ncpu: 2395.7828850052056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1921.3363454447044,
            "unit": "ns/iter",
            "extra": "iterations: 364307\ncpu: 1921.248836832692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17301.387085611175,
            "unit": "ns/iter",
            "extra": "iterations: 40451\ncpu: 17300.934463919384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31324.155720053575,
            "unit": "ns/iter",
            "extra": "iterations: 22290\ncpu: 31324.145356662495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7367.4007689876635,
            "unit": "ns/iter",
            "extra": "iterations: 94930\ncpu: 7367.249552301636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7299.577460532208,
            "unit": "ns/iter",
            "extra": "iterations: 95965\ncpu: 7299.425832334802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7332.852967931439,
            "unit": "ns/iter",
            "extra": "iterations: 95639\ncpu: 7332.688547559175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13874.042542659385,
            "unit": "ns/iter",
            "extra": "iterations: 50514\ncpu: 13873.60533713422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14048.397896581017,
            "unit": "ns/iter",
            "extra": "iterations: 50204\ncpu: 14047.926460043001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5398.406331329658,
            "unit": "ns/iter",
            "extra": "iterations: 129104\ncpu: 5398.296722022527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27121.555668213492,
            "unit": "ns/iter",
            "extra": "iterations: 25643\ncpu: 27121.834418750044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21858.078474148202,
            "unit": "ns/iter",
            "extra": "iterations: 32087\ncpu: 21858.095178732667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21541.248411608492,
            "unit": "ns/iter",
            "extra": "iterations: 32108\ncpu: 21540.76865578675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21696.013175390428,
            "unit": "ns/iter",
            "extra": "iterations: 32333\ncpu: 21695.988618439693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48213.6649178554,
            "unit": "ns/iter",
            "extra": "iterations: 14486\ncpu: 48212.701919094325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159686.73059358826,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 159685.1369862997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133920.29552410165,
            "unit": "ns/iter",
            "extra": "iterations: 5228\ncpu: 133910.53940321354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133204.74301462786,
            "unit": "ns/iter",
            "extra": "iterations: 5261\ncpu: 133199.22068048056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133142.41783681465,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 133134.68690702147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83841.43911792713,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 83839.35762224482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133004.76820940585,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 133000.36039453538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5072.73427836751,
            "unit": "ns/iter",
            "extra": "iterations: 137279\ncpu: 5072.594497337536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25979.13066417351,
            "unit": "ns/iter",
            "extra": "iterations: 26725\ncpu: 25978.323666978642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20637.817305705146,
            "unit": "ns/iter",
            "extra": "iterations: 33827\ncpu: 20637.224702160984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20309.896905414826,
            "unit": "ns/iter",
            "extra": "iterations: 34318\ncpu: 20308.82044408192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20819.416339754556,
            "unit": "ns/iter",
            "extra": "iterations: 33648\ncpu: 20818.764859724382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46737.358466583755,
            "unit": "ns/iter",
            "extra": "iterations: 14947\ncpu: 46735.86672910939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154238.84394975138,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 154233.61251928465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128772.86405443751,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 128769.99632082289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128326.13710416119,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 128322.4235767904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128431.96629419463,
            "unit": "ns/iter",
            "extra": "iterations: 5459\ncpu: 128427.78897233879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81985.19529328772,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 81983.58506029838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127914.03509094959,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 127914.03637699931 ns\nthreads: 1"
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
        "date": 1702490325409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1448.4768745037193,
            "unit": "ns/iter",
            "extra": "iterations: 487449\ncpu: 1448.4947143188315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16278.009111434418,
            "unit": "ns/iter",
            "extra": "iterations: 49608\ncpu: 16277.554023544591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34385.287286163606,
            "unit": "ns/iter",
            "extra": "iterations: 24084\ncpu: 34381.834412888216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51246.108199290255,
            "unit": "ns/iter",
            "extra": "iterations: 16599\ncpu: 51243.82794144225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56490.3299999969,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56489.19000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71240.6259864905,
            "unit": "ns/iter",
            "extra": "iterations: 12291\ncpu: 71237.0026848914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83971.67282219653,
            "unit": "ns/iter",
            "extra": "iterations: 10343\ncpu: 83968.6261239486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96575.11596639374,
            "unit": "ns/iter",
            "extra": "iterations: 8925\ncpu: 96572.45938375354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113648.20463169855,
            "unit": "ns/iter",
            "extra": "iterations: 7643\ncpu: 113645.45335601195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1147.8305260318377,
            "unit": "ns/iter",
            "extra": "iterations: 604317\ncpu: 1147.793293916934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 953.3547369872682,
            "unit": "ns/iter",
            "extra": "iterations: 739204\ncpu: 953.3157288109918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 921.2078777515167,
            "unit": "ns/iter",
            "extra": "iterations: 762578\ncpu: 921.1717358748878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 923.929301514049,
            "unit": "ns/iter",
            "extra": "iterations: 757739\ncpu: 923.9285558747795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1844.3393404807928,
            "unit": "ns/iter",
            "extra": "iterations: 378882\ncpu: 1844.314060842164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5316.487546095075,
            "unit": "ns/iter",
            "extra": "iterations: 150234\ncpu: 5316.356483885135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24827.714992504585,
            "unit": "ns/iter",
            "extra": "iterations: 33350\ncpu: 24826.497751124432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19836.83625773456,
            "unit": "ns/iter",
            "extra": "iterations: 41376\ncpu: 19836.359242072653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18801.52774606083,
            "unit": "ns/iter",
            "extra": "iterations: 43790\ncpu: 18800.826672756346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19191.239936000384,
            "unit": "ns/iter",
            "extra": "iterations: 43124\ncpu: 19190.80094610896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65756.18287852533,
            "unit": "ns/iter",
            "extra": "iterations: 13632\ncpu: 65753.24237089191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561177.4799999694,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561167.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 541747.3143749874,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 541737.4999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 545961.5836454222,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 545934.7690386998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 574017.8466413127,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 573986.5652724968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329607.2197967787,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 329595.22017312766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 560151.5790488358,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 560122.3650385606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2408227.280701758,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2408154.3859649124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1067857.1420256554,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1067831.31548312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3222253.34965047,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3222075.524475515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7828.598928903927,
            "unit": "ns/iter",
            "extra": "iterations: 108487\ncpu: 7828.305695613306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39355.313078511055,
            "unit": "ns/iter",
            "extra": "iterations: 20851\ncpu: 39354.38588077316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30827.15490327884,
            "unit": "ns/iter",
            "extra": "iterations: 26778\ncpu: 30826.167002763475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30380.799800505927,
            "unit": "ns/iter",
            "extra": "iterations: 27068\ncpu: 30380.013299837414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30812.62506482615,
            "unit": "ns/iter",
            "extra": "iterations: 26994\ncpu: 30811.950803882308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76439.86110867243,
            "unit": "ns/iter",
            "extra": "iterations: 11383\ncpu: 76438.80347887192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603248.7499999206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603232.400000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 594996.9370294296,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 594997.0568104042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 592522.3331072342,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 592507.7340569869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596248.9856459292,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 596231.7840054691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336162.29631065525,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 336147.96116504807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574750.2702170298,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 574735.7001972427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2481982.7238607667,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2481945.576407505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1101239.4132230966,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 1101198.9374262022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5073.557474886168,
            "unit": "ns/iter",
            "extra": "iterations: 155494\ncpu: 5073.3481677749605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25160.607782883508,
            "unit": "ns/iter",
            "extra": "iterations: 32867\ncpu: 25160.17281771992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19467.68100771365,
            "unit": "ns/iter",
            "extra": "iterations: 42512\ncpu: 19467.22572450136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18751.795862757932,
            "unit": "ns/iter",
            "extra": "iterations: 44039\ncpu: 18751.324961965536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19260.922125283363,
            "unit": "ns/iter",
            "extra": "iterations: 43326\ncpu: 19259.938604994622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64006.19173230886,
            "unit": "ns/iter",
            "extra": "iterations: 13837\ncpu: 64005.30461805285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 580438.2210000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580395.6999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 566490.4246031414,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 566476.0582010581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575445.7557152597,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 575417.37426519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575468.9627411461,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 575460.3459747154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327854.65570670634,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 327849.6976568405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 565113.084745715,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 565100.8474576275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 498.08810945884534,
            "unit": "ns/iter",
            "extra": "iterations: 1408237\ncpu: 498.0775963136913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3124.6978000890954,
            "unit": "ns/iter",
            "extra": "iterations: 224100\ncpu: 3124.558679161079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2308.776792969874,
            "unit": "ns/iter",
            "extra": "iterations: 305192\ncpu: 2308.6778159322757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2395.851332657689,
            "unit": "ns/iter",
            "extra": "iterations: 292048\ncpu: 2395.7828850052056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1921.3363454447044,
            "unit": "ns/iter",
            "extra": "iterations: 364307\ncpu: 1921.248836832692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17301.387085611175,
            "unit": "ns/iter",
            "extra": "iterations: 40451\ncpu: 17300.934463919384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31324.155720053575,
            "unit": "ns/iter",
            "extra": "iterations: 22290\ncpu: 31324.145356662495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7367.4007689876635,
            "unit": "ns/iter",
            "extra": "iterations: 94930\ncpu: 7367.249552301636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7299.577460532208,
            "unit": "ns/iter",
            "extra": "iterations: 95965\ncpu: 7299.425832334802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7332.852967931439,
            "unit": "ns/iter",
            "extra": "iterations: 95639\ncpu: 7332.688547559175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13874.042542659385,
            "unit": "ns/iter",
            "extra": "iterations: 50514\ncpu: 13873.60533713422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14048.397896581017,
            "unit": "ns/iter",
            "extra": "iterations: 50204\ncpu: 14047.926460043001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5398.406331329658,
            "unit": "ns/iter",
            "extra": "iterations: 129104\ncpu: 5398.296722022527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27121.555668213492,
            "unit": "ns/iter",
            "extra": "iterations: 25643\ncpu: 27121.834418750044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21858.078474148202,
            "unit": "ns/iter",
            "extra": "iterations: 32087\ncpu: 21858.095178732667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21541.248411608492,
            "unit": "ns/iter",
            "extra": "iterations: 32108\ncpu: 21540.76865578675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21696.013175390428,
            "unit": "ns/iter",
            "extra": "iterations: 32333\ncpu: 21695.988618439693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48213.6649178554,
            "unit": "ns/iter",
            "extra": "iterations: 14486\ncpu: 48212.701919094325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159686.73059358826,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 159685.1369862997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133920.29552410165,
            "unit": "ns/iter",
            "extra": "iterations: 5228\ncpu: 133910.53940321354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133204.74301462786,
            "unit": "ns/iter",
            "extra": "iterations: 5261\ncpu: 133199.22068048056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133142.41783681465,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 133134.68690702147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83841.43911792713,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 83839.35762224482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133004.76820940585,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 133000.36039453538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5072.73427836751,
            "unit": "ns/iter",
            "extra": "iterations: 137279\ncpu: 5072.594497337536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25979.13066417351,
            "unit": "ns/iter",
            "extra": "iterations: 26725\ncpu: 25978.323666978642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20637.817305705146,
            "unit": "ns/iter",
            "extra": "iterations: 33827\ncpu: 20637.224702160984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20309.896905414826,
            "unit": "ns/iter",
            "extra": "iterations: 34318\ncpu: 20308.82044408192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20819.416339754556,
            "unit": "ns/iter",
            "extra": "iterations: 33648\ncpu: 20818.764859724382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46737.358466583755,
            "unit": "ns/iter",
            "extra": "iterations: 14947\ncpu: 46735.86672910939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154238.84394975138,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 154233.61251928465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128772.86405443751,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 128769.99632082289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128326.13710416119,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 128322.4235767904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128431.96629419463,
            "unit": "ns/iter",
            "extra": "iterations: 5459\ncpu: 128427.78897233879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81985.19529328772,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 81983.58506029838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127914.03509094959,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 127914.03637699931 ns\nthreads: 1"
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
        "date": 1702490325409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1448.4768745037193,
            "unit": "ns/iter",
            "extra": "iterations: 487449\ncpu: 1448.4947143188315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16278.009111434418,
            "unit": "ns/iter",
            "extra": "iterations: 49608\ncpu: 16277.554023544591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34385.287286163606,
            "unit": "ns/iter",
            "extra": "iterations: 24084\ncpu: 34381.834412888216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51246.108199290255,
            "unit": "ns/iter",
            "extra": "iterations: 16599\ncpu: 51243.82794144225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56490.3299999969,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56489.19000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71240.6259864905,
            "unit": "ns/iter",
            "extra": "iterations: 12291\ncpu: 71237.0026848914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83971.67282219653,
            "unit": "ns/iter",
            "extra": "iterations: 10343\ncpu: 83968.6261239486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96575.11596639374,
            "unit": "ns/iter",
            "extra": "iterations: 8925\ncpu: 96572.45938375354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113648.20463169855,
            "unit": "ns/iter",
            "extra": "iterations: 7643\ncpu: 113645.45335601195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1147.8305260318377,
            "unit": "ns/iter",
            "extra": "iterations: 604317\ncpu: 1147.793293916934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 953.3547369872682,
            "unit": "ns/iter",
            "extra": "iterations: 739204\ncpu: 953.3157288109918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 921.2078777515167,
            "unit": "ns/iter",
            "extra": "iterations: 762578\ncpu: 921.1717358748878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 923.929301514049,
            "unit": "ns/iter",
            "extra": "iterations: 757739\ncpu: 923.9285558747795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1844.3393404807928,
            "unit": "ns/iter",
            "extra": "iterations: 378882\ncpu: 1844.314060842164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5316.487546095075,
            "unit": "ns/iter",
            "extra": "iterations: 150234\ncpu: 5316.356483885135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24827.714992504585,
            "unit": "ns/iter",
            "extra": "iterations: 33350\ncpu: 24826.497751124432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19836.83625773456,
            "unit": "ns/iter",
            "extra": "iterations: 41376\ncpu: 19836.359242072653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18801.52774606083,
            "unit": "ns/iter",
            "extra": "iterations: 43790\ncpu: 18800.826672756346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19191.239936000384,
            "unit": "ns/iter",
            "extra": "iterations: 43124\ncpu: 19190.80094610896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65756.18287852533,
            "unit": "ns/iter",
            "extra": "iterations: 13632\ncpu: 65753.24237089191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561177.4799999694,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561167.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 541747.3143749874,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 541737.4999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 545961.5836454222,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 545934.7690386998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 574017.8466413127,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 573986.5652724968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329607.2197967787,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 329595.22017312766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 560151.5790488358,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 560122.3650385606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2408227.280701758,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2408154.3859649124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1067857.1420256554,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1067831.31548312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3222253.34965047,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3222075.524475515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7828.598928903927,
            "unit": "ns/iter",
            "extra": "iterations: 108487\ncpu: 7828.305695613306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39355.313078511055,
            "unit": "ns/iter",
            "extra": "iterations: 20851\ncpu: 39354.38588077316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30827.15490327884,
            "unit": "ns/iter",
            "extra": "iterations: 26778\ncpu: 30826.167002763475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30380.799800505927,
            "unit": "ns/iter",
            "extra": "iterations: 27068\ncpu: 30380.013299837414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30812.62506482615,
            "unit": "ns/iter",
            "extra": "iterations: 26994\ncpu: 30811.950803882308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76439.86110867243,
            "unit": "ns/iter",
            "extra": "iterations: 11383\ncpu: 76438.80347887192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603248.7499999206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603232.400000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 594996.9370294296,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 594997.0568104042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 592522.3331072342,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 592507.7340569869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596248.9856459292,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 596231.7840054691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336162.29631065525,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 336147.96116504807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574750.2702170298,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 574735.7001972427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2481982.7238607667,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2481945.576407505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1101239.4132230966,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 1101198.9374262022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5073.557474886168,
            "unit": "ns/iter",
            "extra": "iterations: 155494\ncpu: 5073.3481677749605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25160.607782883508,
            "unit": "ns/iter",
            "extra": "iterations: 32867\ncpu: 25160.17281771992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19467.68100771365,
            "unit": "ns/iter",
            "extra": "iterations: 42512\ncpu: 19467.22572450136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18751.795862757932,
            "unit": "ns/iter",
            "extra": "iterations: 44039\ncpu: 18751.324961965536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19260.922125283363,
            "unit": "ns/iter",
            "extra": "iterations: 43326\ncpu: 19259.938604994622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64006.19173230886,
            "unit": "ns/iter",
            "extra": "iterations: 13837\ncpu: 64005.30461805285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 580438.2210000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580395.6999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 566490.4246031414,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 566476.0582010581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575445.7557152597,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 575417.37426519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575468.9627411461,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 575460.3459747154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327854.65570670634,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 327849.6976568405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 565113.084745715,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 565100.8474576275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 498.08810945884534,
            "unit": "ns/iter",
            "extra": "iterations: 1408237\ncpu: 498.0775963136913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3124.6978000890954,
            "unit": "ns/iter",
            "extra": "iterations: 224100\ncpu: 3124.558679161079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2308.776792969874,
            "unit": "ns/iter",
            "extra": "iterations: 305192\ncpu: 2308.6778159322757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2395.851332657689,
            "unit": "ns/iter",
            "extra": "iterations: 292048\ncpu: 2395.7828850052056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1921.3363454447044,
            "unit": "ns/iter",
            "extra": "iterations: 364307\ncpu: 1921.248836832692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17301.387085611175,
            "unit": "ns/iter",
            "extra": "iterations: 40451\ncpu: 17300.934463919384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31324.155720053575,
            "unit": "ns/iter",
            "extra": "iterations: 22290\ncpu: 31324.145356662495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7367.4007689876635,
            "unit": "ns/iter",
            "extra": "iterations: 94930\ncpu: 7367.249552301636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7299.577460532208,
            "unit": "ns/iter",
            "extra": "iterations: 95965\ncpu: 7299.425832334802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7332.852967931439,
            "unit": "ns/iter",
            "extra": "iterations: 95639\ncpu: 7332.688547559175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13874.042542659385,
            "unit": "ns/iter",
            "extra": "iterations: 50514\ncpu: 13873.60533713422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14048.397896581017,
            "unit": "ns/iter",
            "extra": "iterations: 50204\ncpu: 14047.926460043001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5398.406331329658,
            "unit": "ns/iter",
            "extra": "iterations: 129104\ncpu: 5398.296722022527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27121.555668213492,
            "unit": "ns/iter",
            "extra": "iterations: 25643\ncpu: 27121.834418750044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21858.078474148202,
            "unit": "ns/iter",
            "extra": "iterations: 32087\ncpu: 21858.095178732667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21541.248411608492,
            "unit": "ns/iter",
            "extra": "iterations: 32108\ncpu: 21540.76865578675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21696.013175390428,
            "unit": "ns/iter",
            "extra": "iterations: 32333\ncpu: 21695.988618439693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48213.6649178554,
            "unit": "ns/iter",
            "extra": "iterations: 14486\ncpu: 48212.701919094325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159686.73059358826,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 159685.1369862997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133920.29552410165,
            "unit": "ns/iter",
            "extra": "iterations: 5228\ncpu: 133910.53940321354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133204.74301462786,
            "unit": "ns/iter",
            "extra": "iterations: 5261\ncpu: 133199.22068048056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133142.41783681465,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 133134.68690702147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83841.43911792713,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 83839.35762224482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133004.76820940585,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 133000.36039453538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5072.73427836751,
            "unit": "ns/iter",
            "extra": "iterations: 137279\ncpu: 5072.594497337536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25979.13066417351,
            "unit": "ns/iter",
            "extra": "iterations: 26725\ncpu: 25978.323666978642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20637.817305705146,
            "unit": "ns/iter",
            "extra": "iterations: 33827\ncpu: 20637.224702160984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20309.896905414826,
            "unit": "ns/iter",
            "extra": "iterations: 34318\ncpu: 20308.82044408192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20819.416339754556,
            "unit": "ns/iter",
            "extra": "iterations: 33648\ncpu: 20818.764859724382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46737.358466583755,
            "unit": "ns/iter",
            "extra": "iterations: 14947\ncpu: 46735.86672910939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154238.84394975138,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 154233.61251928465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128772.86405443751,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 128769.99632082289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128326.13710416119,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 128322.4235767904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128431.96629419463,
            "unit": "ns/iter",
            "extra": "iterations: 5459\ncpu: 128427.78897233879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81985.19529328772,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 81983.58506029838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127914.03509094959,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 127914.03637699931 ns\nthreads: 1"
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
        "date": 1702490325409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1448.4768745037193,
            "unit": "ns/iter",
            "extra": "iterations: 487449\ncpu: 1448.4947143188315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16278.009111434418,
            "unit": "ns/iter",
            "extra": "iterations: 49608\ncpu: 16277.554023544591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34385.287286163606,
            "unit": "ns/iter",
            "extra": "iterations: 24084\ncpu: 34381.834412888216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51246.108199290255,
            "unit": "ns/iter",
            "extra": "iterations: 16599\ncpu: 51243.82794144225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56490.3299999969,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56489.19000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71240.6259864905,
            "unit": "ns/iter",
            "extra": "iterations: 12291\ncpu: 71237.0026848914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83971.67282219653,
            "unit": "ns/iter",
            "extra": "iterations: 10343\ncpu: 83968.6261239486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96575.11596639374,
            "unit": "ns/iter",
            "extra": "iterations: 8925\ncpu: 96572.45938375354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113648.20463169855,
            "unit": "ns/iter",
            "extra": "iterations: 7643\ncpu: 113645.45335601195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1147.8305260318377,
            "unit": "ns/iter",
            "extra": "iterations: 604317\ncpu: 1147.793293916934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 953.3547369872682,
            "unit": "ns/iter",
            "extra": "iterations: 739204\ncpu: 953.3157288109918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 921.2078777515167,
            "unit": "ns/iter",
            "extra": "iterations: 762578\ncpu: 921.1717358748878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 923.929301514049,
            "unit": "ns/iter",
            "extra": "iterations: 757739\ncpu: 923.9285558747795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1844.3393404807928,
            "unit": "ns/iter",
            "extra": "iterations: 378882\ncpu: 1844.314060842164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5316.487546095075,
            "unit": "ns/iter",
            "extra": "iterations: 150234\ncpu: 5316.356483885135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24827.714992504585,
            "unit": "ns/iter",
            "extra": "iterations: 33350\ncpu: 24826.497751124432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19836.83625773456,
            "unit": "ns/iter",
            "extra": "iterations: 41376\ncpu: 19836.359242072653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18801.52774606083,
            "unit": "ns/iter",
            "extra": "iterations: 43790\ncpu: 18800.826672756346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19191.239936000384,
            "unit": "ns/iter",
            "extra": "iterations: 43124\ncpu: 19190.80094610896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65756.18287852533,
            "unit": "ns/iter",
            "extra": "iterations: 13632\ncpu: 65753.24237089191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561177.4799999694,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561167.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 541747.3143749874,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 541737.4999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 545961.5836454222,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 545934.7690386998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 574017.8466413127,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 573986.5652724968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329607.2197967787,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 329595.22017312766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 560151.5790488358,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 560122.3650385606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2408227.280701758,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2408154.3859649124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1067857.1420256554,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1067831.31548312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3222253.34965047,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3222075.524475515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7828.598928903927,
            "unit": "ns/iter",
            "extra": "iterations: 108487\ncpu: 7828.305695613306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39355.313078511055,
            "unit": "ns/iter",
            "extra": "iterations: 20851\ncpu: 39354.38588077316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30827.15490327884,
            "unit": "ns/iter",
            "extra": "iterations: 26778\ncpu: 30826.167002763475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30380.799800505927,
            "unit": "ns/iter",
            "extra": "iterations: 27068\ncpu: 30380.013299837414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30812.62506482615,
            "unit": "ns/iter",
            "extra": "iterations: 26994\ncpu: 30811.950803882308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76439.86110867243,
            "unit": "ns/iter",
            "extra": "iterations: 11383\ncpu: 76438.80347887192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603248.7499999206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603232.400000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 594996.9370294296,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 594997.0568104042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 592522.3331072342,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 592507.7340569869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596248.9856459292,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 596231.7840054691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336162.29631065525,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 336147.96116504807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574750.2702170298,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 574735.7001972427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2481982.7238607667,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2481945.576407505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1101239.4132230966,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 1101198.9374262022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5073.557474886168,
            "unit": "ns/iter",
            "extra": "iterations: 155494\ncpu: 5073.3481677749605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25160.607782883508,
            "unit": "ns/iter",
            "extra": "iterations: 32867\ncpu: 25160.17281771992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19467.68100771365,
            "unit": "ns/iter",
            "extra": "iterations: 42512\ncpu: 19467.22572450136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18751.795862757932,
            "unit": "ns/iter",
            "extra": "iterations: 44039\ncpu: 18751.324961965536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19260.922125283363,
            "unit": "ns/iter",
            "extra": "iterations: 43326\ncpu: 19259.938604994622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64006.19173230886,
            "unit": "ns/iter",
            "extra": "iterations: 13837\ncpu: 64005.30461805285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 580438.2210000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580395.6999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 566490.4246031414,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 566476.0582010581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575445.7557152597,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 575417.37426519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575468.9627411461,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 575460.3459747154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327854.65570670634,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 327849.6976568405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 565113.084745715,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 565100.8474576275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 498.08810945884534,
            "unit": "ns/iter",
            "extra": "iterations: 1408237\ncpu: 498.0775963136913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3124.6978000890954,
            "unit": "ns/iter",
            "extra": "iterations: 224100\ncpu: 3124.558679161079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2308.776792969874,
            "unit": "ns/iter",
            "extra": "iterations: 305192\ncpu: 2308.6778159322757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2395.851332657689,
            "unit": "ns/iter",
            "extra": "iterations: 292048\ncpu: 2395.7828850052056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1921.3363454447044,
            "unit": "ns/iter",
            "extra": "iterations: 364307\ncpu: 1921.248836832692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17301.387085611175,
            "unit": "ns/iter",
            "extra": "iterations: 40451\ncpu: 17300.934463919384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31324.155720053575,
            "unit": "ns/iter",
            "extra": "iterations: 22290\ncpu: 31324.145356662495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7367.4007689876635,
            "unit": "ns/iter",
            "extra": "iterations: 94930\ncpu: 7367.249552301636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7299.577460532208,
            "unit": "ns/iter",
            "extra": "iterations: 95965\ncpu: 7299.425832334802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7332.852967931439,
            "unit": "ns/iter",
            "extra": "iterations: 95639\ncpu: 7332.688547559175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13874.042542659385,
            "unit": "ns/iter",
            "extra": "iterations: 50514\ncpu: 13873.60533713422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14048.397896581017,
            "unit": "ns/iter",
            "extra": "iterations: 50204\ncpu: 14047.926460043001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5398.406331329658,
            "unit": "ns/iter",
            "extra": "iterations: 129104\ncpu: 5398.296722022527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27121.555668213492,
            "unit": "ns/iter",
            "extra": "iterations: 25643\ncpu: 27121.834418750044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21858.078474148202,
            "unit": "ns/iter",
            "extra": "iterations: 32087\ncpu: 21858.095178732667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21541.248411608492,
            "unit": "ns/iter",
            "extra": "iterations: 32108\ncpu: 21540.76865578675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21696.013175390428,
            "unit": "ns/iter",
            "extra": "iterations: 32333\ncpu: 21695.988618439693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48213.6649178554,
            "unit": "ns/iter",
            "extra": "iterations: 14486\ncpu: 48212.701919094325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159686.73059358826,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 159685.1369862997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133920.29552410165,
            "unit": "ns/iter",
            "extra": "iterations: 5228\ncpu: 133910.53940321354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133204.74301462786,
            "unit": "ns/iter",
            "extra": "iterations: 5261\ncpu: 133199.22068048056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133142.41783681465,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 133134.68690702147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83841.43911792713,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 83839.35762224482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133004.76820940585,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 133000.36039453538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5072.73427836751,
            "unit": "ns/iter",
            "extra": "iterations: 137279\ncpu: 5072.594497337536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25979.13066417351,
            "unit": "ns/iter",
            "extra": "iterations: 26725\ncpu: 25978.323666978642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20637.817305705146,
            "unit": "ns/iter",
            "extra": "iterations: 33827\ncpu: 20637.224702160984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20309.896905414826,
            "unit": "ns/iter",
            "extra": "iterations: 34318\ncpu: 20308.82044408192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20819.416339754556,
            "unit": "ns/iter",
            "extra": "iterations: 33648\ncpu: 20818.764859724382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46737.358466583755,
            "unit": "ns/iter",
            "extra": "iterations: 14947\ncpu: 46735.86672910939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154238.84394975138,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 154233.61251928465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128772.86405443751,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 128769.99632082289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128326.13710416119,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 128322.4235767904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128431.96629419463,
            "unit": "ns/iter",
            "extra": "iterations: 5459\ncpu: 128427.78897233879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81985.19529328772,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 81983.58506029838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127914.03509094959,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 127914.03637699931 ns\nthreads: 1"
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
        "date": 1702490325409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1448.4768745037193,
            "unit": "ns/iter",
            "extra": "iterations: 487449\ncpu: 1448.4947143188315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16278.009111434418,
            "unit": "ns/iter",
            "extra": "iterations: 49608\ncpu: 16277.554023544591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34385.287286163606,
            "unit": "ns/iter",
            "extra": "iterations: 24084\ncpu: 34381.834412888216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51246.108199290255,
            "unit": "ns/iter",
            "extra": "iterations: 16599\ncpu: 51243.82794144225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56490.3299999969,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56489.19000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71240.6259864905,
            "unit": "ns/iter",
            "extra": "iterations: 12291\ncpu: 71237.0026848914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83971.67282219653,
            "unit": "ns/iter",
            "extra": "iterations: 10343\ncpu: 83968.6261239486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96575.11596639374,
            "unit": "ns/iter",
            "extra": "iterations: 8925\ncpu: 96572.45938375354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113648.20463169855,
            "unit": "ns/iter",
            "extra": "iterations: 7643\ncpu: 113645.45335601195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1147.8305260318377,
            "unit": "ns/iter",
            "extra": "iterations: 604317\ncpu: 1147.793293916934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 953.3547369872682,
            "unit": "ns/iter",
            "extra": "iterations: 739204\ncpu: 953.3157288109918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 921.2078777515167,
            "unit": "ns/iter",
            "extra": "iterations: 762578\ncpu: 921.1717358748878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 923.929301514049,
            "unit": "ns/iter",
            "extra": "iterations: 757739\ncpu: 923.9285558747795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1844.3393404807928,
            "unit": "ns/iter",
            "extra": "iterations: 378882\ncpu: 1844.314060842164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5316.487546095075,
            "unit": "ns/iter",
            "extra": "iterations: 150234\ncpu: 5316.356483885135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24827.714992504585,
            "unit": "ns/iter",
            "extra": "iterations: 33350\ncpu: 24826.497751124432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19836.83625773456,
            "unit": "ns/iter",
            "extra": "iterations: 41376\ncpu: 19836.359242072653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18801.52774606083,
            "unit": "ns/iter",
            "extra": "iterations: 43790\ncpu: 18800.826672756346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19191.239936000384,
            "unit": "ns/iter",
            "extra": "iterations: 43124\ncpu: 19190.80094610896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65756.18287852533,
            "unit": "ns/iter",
            "extra": "iterations: 13632\ncpu: 65753.24237089191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561177.4799999694,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561167.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 541747.3143749874,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 541737.4999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 545961.5836454222,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 545934.7690386998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 574017.8466413127,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 573986.5652724968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329607.2197967787,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 329595.22017312766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 560151.5790488358,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 560122.3650385606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2408227.280701758,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2408154.3859649124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1067857.1420256554,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1067831.31548312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3222253.34965047,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3222075.524475515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7828.598928903927,
            "unit": "ns/iter",
            "extra": "iterations: 108487\ncpu: 7828.305695613306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39355.313078511055,
            "unit": "ns/iter",
            "extra": "iterations: 20851\ncpu: 39354.38588077316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30827.15490327884,
            "unit": "ns/iter",
            "extra": "iterations: 26778\ncpu: 30826.167002763475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30380.799800505927,
            "unit": "ns/iter",
            "extra": "iterations: 27068\ncpu: 30380.013299837414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30812.62506482615,
            "unit": "ns/iter",
            "extra": "iterations: 26994\ncpu: 30811.950803882308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76439.86110867243,
            "unit": "ns/iter",
            "extra": "iterations: 11383\ncpu: 76438.80347887192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603248.7499999206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603232.400000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 594996.9370294296,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 594997.0568104042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 592522.3331072342,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 592507.7340569869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596248.9856459292,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 596231.7840054691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336162.29631065525,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 336147.96116504807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574750.2702170298,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 574735.7001972427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2481982.7238607667,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2481945.576407505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1101239.4132230966,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 1101198.9374262022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5073.557474886168,
            "unit": "ns/iter",
            "extra": "iterations: 155494\ncpu: 5073.3481677749605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25160.607782883508,
            "unit": "ns/iter",
            "extra": "iterations: 32867\ncpu: 25160.17281771992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19467.68100771365,
            "unit": "ns/iter",
            "extra": "iterations: 42512\ncpu: 19467.22572450136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18751.795862757932,
            "unit": "ns/iter",
            "extra": "iterations: 44039\ncpu: 18751.324961965536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19260.922125283363,
            "unit": "ns/iter",
            "extra": "iterations: 43326\ncpu: 19259.938604994622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64006.19173230886,
            "unit": "ns/iter",
            "extra": "iterations: 13837\ncpu: 64005.30461805285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 580438.2210000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580395.6999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 566490.4246031414,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 566476.0582010581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575445.7557152597,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 575417.37426519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575468.9627411461,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 575460.3459747154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327854.65570670634,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 327849.6976568405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 565113.084745715,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 565100.8474576275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 498.08810945884534,
            "unit": "ns/iter",
            "extra": "iterations: 1408237\ncpu: 498.0775963136913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3124.6978000890954,
            "unit": "ns/iter",
            "extra": "iterations: 224100\ncpu: 3124.558679161079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2308.776792969874,
            "unit": "ns/iter",
            "extra": "iterations: 305192\ncpu: 2308.6778159322757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2395.851332657689,
            "unit": "ns/iter",
            "extra": "iterations: 292048\ncpu: 2395.7828850052056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1921.3363454447044,
            "unit": "ns/iter",
            "extra": "iterations: 364307\ncpu: 1921.248836832692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17301.387085611175,
            "unit": "ns/iter",
            "extra": "iterations: 40451\ncpu: 17300.934463919384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31324.155720053575,
            "unit": "ns/iter",
            "extra": "iterations: 22290\ncpu: 31324.145356662495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7367.4007689876635,
            "unit": "ns/iter",
            "extra": "iterations: 94930\ncpu: 7367.249552301636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7299.577460532208,
            "unit": "ns/iter",
            "extra": "iterations: 95965\ncpu: 7299.425832334802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7332.852967931439,
            "unit": "ns/iter",
            "extra": "iterations: 95639\ncpu: 7332.688547559175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13874.042542659385,
            "unit": "ns/iter",
            "extra": "iterations: 50514\ncpu: 13873.60533713422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14048.397896581017,
            "unit": "ns/iter",
            "extra": "iterations: 50204\ncpu: 14047.926460043001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5398.406331329658,
            "unit": "ns/iter",
            "extra": "iterations: 129104\ncpu: 5398.296722022527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27121.555668213492,
            "unit": "ns/iter",
            "extra": "iterations: 25643\ncpu: 27121.834418750044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21858.078474148202,
            "unit": "ns/iter",
            "extra": "iterations: 32087\ncpu: 21858.095178732667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21541.248411608492,
            "unit": "ns/iter",
            "extra": "iterations: 32108\ncpu: 21540.76865578675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21696.013175390428,
            "unit": "ns/iter",
            "extra": "iterations: 32333\ncpu: 21695.988618439693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48213.6649178554,
            "unit": "ns/iter",
            "extra": "iterations: 14486\ncpu: 48212.701919094325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159686.73059358826,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 159685.1369862997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133920.29552410165,
            "unit": "ns/iter",
            "extra": "iterations: 5228\ncpu: 133910.53940321354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133204.74301462786,
            "unit": "ns/iter",
            "extra": "iterations: 5261\ncpu: 133199.22068048056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133142.41783681465,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 133134.68690702147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83841.43911792713,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 83839.35762224482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133004.76820940585,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 133000.36039453538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5072.73427836751,
            "unit": "ns/iter",
            "extra": "iterations: 137279\ncpu: 5072.594497337536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25979.13066417351,
            "unit": "ns/iter",
            "extra": "iterations: 26725\ncpu: 25978.323666978642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20637.817305705146,
            "unit": "ns/iter",
            "extra": "iterations: 33827\ncpu: 20637.224702160984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20309.896905414826,
            "unit": "ns/iter",
            "extra": "iterations: 34318\ncpu: 20308.82044408192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20819.416339754556,
            "unit": "ns/iter",
            "extra": "iterations: 33648\ncpu: 20818.764859724382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46737.358466583755,
            "unit": "ns/iter",
            "extra": "iterations: 14947\ncpu: 46735.86672910939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154238.84394975138,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 154233.61251928465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128772.86405443751,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 128769.99632082289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128326.13710416119,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 128322.4235767904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128431.96629419463,
            "unit": "ns/iter",
            "extra": "iterations: 5459\ncpu: 128427.78897233879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81985.19529328772,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 81983.58506029838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127914.03509094959,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 127914.03637699931 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}