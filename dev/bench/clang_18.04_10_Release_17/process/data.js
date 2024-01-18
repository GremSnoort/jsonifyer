window.BENCHMARK_DATA = {
  "lastUpdate": 1705575622563,
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
        "date": 1702492918944,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1368.9790471611427,
            "unit": "ns/iter",
            "extra": "iterations: 511482\ncpu: 1368.9756433266468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16233.504041743668,
            "unit": "ns/iter",
            "extra": "iterations: 50597\ncpu: 16232.345791252448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34444.85502773437,
            "unit": "ns/iter",
            "extra": "iterations: 23977\ncpu: 34443.60428744213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51136.176727853,
            "unit": "ns/iter",
            "extra": "iterations: 16234\ncpu: 51133.60847603796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56810.17489999931,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56810.09000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70472.3436217388,
            "unit": "ns/iter",
            "extra": "iterations: 12182\ncpu: 70470.47282876373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83214.69077809149,
            "unit": "ns/iter",
            "extra": "iterations: 10410\ncpu: 83212.9586935639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96632.24012017147,
            "unit": "ns/iter",
            "extra": "iterations: 8654\ncpu: 96628.78437716656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111071.83842682022,
            "unit": "ns/iter",
            "extra": "iterations: 7755\ncpu: 111069.18117343649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1169.5776018794597,
            "unit": "ns/iter",
            "extra": "iterations: 598452\ncpu: 1169.5041540507866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 950.2375762645156,
            "unit": "ns/iter",
            "extra": "iterations: 733958\ncpu: 950.1929265707307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 934.3128869562175,
            "unit": "ns/iter",
            "extra": "iterations: 751054\ncpu: 934.3113810724656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 951.9958068699943,
            "unit": "ns/iter",
            "extra": "iterations: 740020\ncpu: 950.3929623523682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1881.5266300170124,
            "unit": "ns/iter",
            "extra": "iterations: 372174\ncpu: 1881.4672706852207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5289.316380624199,
            "unit": "ns/iter",
            "extra": "iterations: 150910\ncpu: 5289.220727585971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25057.16043599355,
            "unit": "ns/iter",
            "extra": "iterations: 32661\ncpu: 25056.2781298797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19874.835023152216,
            "unit": "ns/iter",
            "extra": "iterations: 41030\ncpu: 19874.12624908604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 17746.750876425038,
            "unit": "ns/iter",
            "extra": "iterations: 45640\ncpu: 17746.7090271691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18628.389563693134,
            "unit": "ns/iter",
            "extra": "iterations: 43387\ncpu: 18627.95998801484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64379.22263464495,
            "unit": "ns/iter",
            "extra": "iterations: 13740\ncpu: 64377.35080058227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 548057.3249999451,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548010.6000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 552400.8417402301,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 552394.5145018909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 556013.0735009369,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 555996.8407479032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 557223.1094559997,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 557205.764248705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326822.88431591855,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 326815.1649981451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 550637.5064102579,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 550624.3589743589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2347054.85500001,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2346951.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1074769.305263177,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 1074750.7602339196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3270266.551236531,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3270163.957597179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7436.0551445276615,
            "unit": "ns/iter",
            "extra": "iterations: 113266\ncpu: 7435.8201048858355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39024.313118181984,
            "unit": "ns/iter",
            "extra": "iterations: 21535\ncpu: 39022.57719990716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30574.160388683653,
            "unit": "ns/iter",
            "extra": "iterations: 26654\ncpu: 30573.411120282213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 29830.068142859185,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 29828.721428571673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30217.786652040602,
            "unit": "ns/iter",
            "extra": "iterations: 27345\ncpu: 30217.118303163094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76108.03078840462,
            "unit": "ns/iter",
            "extra": "iterations: 11238\ncpu: 76105.12546716475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 611048.3639999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611026.7000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 582365.5960354761,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 582354.5454545473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 573478.725710486,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 573454.5274289481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587658.4111261817,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 587643.6906377213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 333988.7919694376,
            "unit": "ns/iter",
            "extra": "iterations: 2615\ncpu: 333979.12045889144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580002.3128307009,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 579970.5687830658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2487819.066844892,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2487768.983957218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1091683.6867611452,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1091638.7706855794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5122.727015189823,
            "unit": "ns/iter",
            "extra": "iterations: 157082\ncpu: 5122.60284437428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24077.03997271705,
            "unit": "ns/iter",
            "extra": "iterations: 33723\ncpu: 24076.075675355096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19037.094516543166,
            "unit": "ns/iter",
            "extra": "iterations: 42765\ncpu: 19036.695896176872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18636.839300546053,
            "unit": "ns/iter",
            "extra": "iterations: 44549\ncpu: 18636.086107432257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18664.3513433524,
            "unit": "ns/iter",
            "extra": "iterations: 43920\ncpu: 18663.907103825226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63656.5345783488,
            "unit": "ns/iter",
            "extra": "iterations: 13708\ncpu: 63654.172745841715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 572789.9009999646,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572773.0999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 573308.3743489538,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 573290.039062498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 573828.6486486786,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 573815.5570204356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 573926.7523240221,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 573921.181938914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 331795.57159179077,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 331764.6991622251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 571945.5218525832,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 571914.6771037196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 512.2963137594274,
            "unit": "ns/iter",
            "extra": "iterations: 1363720\ncpu: 512.2753937758494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3137.0850517428107,
            "unit": "ns/iter",
            "extra": "iterations: 223511\ncpu: 3136.913619463938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2401.4347320998245,
            "unit": "ns/iter",
            "extra": "iterations: 289231\ncpu: 2401.308642572887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2377.0750342558986,
            "unit": "ns/iter",
            "extra": "iterations: 292653\ncpu: 2376.9576939242033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1950.0050131462458,
            "unit": "ns/iter",
            "extra": "iterations: 358657\ncpu: 1949.8523659095001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17318.381793476263,
            "unit": "ns/iter",
            "extra": "iterations: 40480\ncpu: 17317.366600790618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31569.74244480265,
            "unit": "ns/iter",
            "extra": "iterations: 22104\ncpu: 31568.06912775975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7420.4127990169645,
            "unit": "ns/iter",
            "extra": "iterations: 94351\ncpu: 7420.000847897772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7357.928499381055,
            "unit": "ns/iter",
            "extra": "iterations: 95174\ncpu: 7357.837224452082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7402.7393944522355,
            "unit": "ns/iter",
            "extra": "iterations: 94526\ncpu: 7402.368660474427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14050.472708652398,
            "unit": "ns/iter",
            "extra": "iterations: 49796\ncpu: 14049.771065948984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14077.802370823529,
            "unit": "ns/iter",
            "extra": "iterations: 49603\ncpu: 14077.019535108853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5394.144803039115,
            "unit": "ns/iter",
            "extra": "iterations: 129797\ncpu: 5393.870428438273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26945.959278808463,
            "unit": "ns/iter",
            "extra": "iterations: 25957\ncpu: 26944.68929383211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21188.87305163341,
            "unit": "ns/iter",
            "extra": "iterations: 32848\ncpu: 21188.215416463947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21200.072717246203,
            "unit": "ns/iter",
            "extra": "iterations: 32647\ncpu: 21198.661439029533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21667.424658381486,
            "unit": "ns/iter",
            "extra": "iterations: 32273\ncpu: 21667.399993802665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48314.21474425583,
            "unit": "ns/iter",
            "extra": "iterations: 14487\ncpu: 48311.527576448345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156418.81336666126,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 156409.34303250554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131306.47752809842,
            "unit": "ns/iter",
            "extra": "iterations: 5340\ncpu: 131304.4943820226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131865.87785824342,
            "unit": "ns/iter",
            "extra": "iterations: 5248\ncpu: 131864.51981707336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133098.20327368996,
            "unit": "ns/iter",
            "extra": "iterations: 5254\ncpu: 133091.91092501007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83508.57345238268,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 83503.34523809537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132572.03323782413,
            "unit": "ns/iter",
            "extra": "iterations: 5235\ncpu: 132564.2406876781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5135.379689139015,
            "unit": "ns/iter",
            "extra": "iterations: 135366\ncpu: 5135.372988786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26231.150485072176,
            "unit": "ns/iter",
            "extra": "iterations: 26800\ncpu: 26231.13805970159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20667.15161623754,
            "unit": "ns/iter",
            "extra": "iterations: 33875\ncpu: 20666.88413284145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20701.175148418257,
            "unit": "ns/iter",
            "extra": "iterations: 33857\ncpu: 20700.3751070681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21034.6760063727,
            "unit": "ns/iter",
            "extra": "iterations: 33263\ncpu: 21034.473739590572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47337.03251098166,
            "unit": "ns/iter",
            "extra": "iterations: 14795\ncpu: 47336.98546806363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156275.02453712875,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 156272.98683916833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130328.45062302014,
            "unit": "ns/iter",
            "extra": "iterations: 5377\ncpu: 130327.15268737257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129593.13921242171,
            "unit": "ns/iter",
            "extra": "iterations: 5409\ncpu: 129586.30061009523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130259.48775930468,
            "unit": "ns/iter",
            "extra": "iterations: 5351\ncpu: 130251.57914408686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82296.27541720675,
            "unit": "ns/iter",
            "extra": "iterations: 8449\ncpu: 82291.51378861336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129502.69020952604,
            "unit": "ns/iter",
            "extra": "iterations: 5536\ncpu: 129496.11632947813 ns\nthreads: 1"
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
        "date": 1702504002004,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1421.1021708697874,
            "unit": "ns/iter",
            "extra": "iterations: 497911\ncpu: 1421.0638045755168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16298.883590348261,
            "unit": "ns/iter",
            "extra": "iterations: 49154\ncpu: 16298.423322618712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34998.83574940111,
            "unit": "ns/iter",
            "extra": "iterations: 23799\ncpu: 34997.155342661456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51193.102829328505,
            "unit": "ns/iter",
            "extra": "iterations: 16435\ncpu: 51192.710678430165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56741.46019999853,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56740.76999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71296.19190931483,
            "unit": "ns/iter",
            "extra": "iterations: 12261\ncpu: 71294.43764782645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85261.97400176126,
            "unit": "ns/iter",
            "extra": "iterations: 10193\ncpu: 85260.54154812121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98135.27825401025,
            "unit": "ns/iter",
            "extra": "iterations: 8866\ncpu: 98127.70133092711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114521.31311433797,
            "unit": "ns/iter",
            "extra": "iterations: 7732\ncpu: 114514.52405587179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1164.305904233675,
            "unit": "ns/iter",
            "extra": "iterations: 600044\ncpu: 1164.2709534634132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 953.085282025692,
            "unit": "ns/iter",
            "extra": "iterations: 734809\ncpu: 953.0679401041627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 928.5888337703934,
            "unit": "ns/iter",
            "extra": "iterations: 751713\ncpu: 928.5326979844681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 934.9641837264027,
            "unit": "ns/iter",
            "extra": "iterations: 746588\ncpu: 934.8868452211923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1872.112802122333,
            "unit": "ns/iter",
            "extra": "iterations: 375055\ncpu: 1871.9742437775828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5382.970771285434,
            "unit": "ns/iter",
            "extra": "iterations: 149750\ncpu: 5382.492821368945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25106.47473363902,
            "unit": "ns/iter",
            "extra": "iterations: 32850\ncpu: 25105.019786910216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19458.71297010434,
            "unit": "ns/iter",
            "extra": "iterations: 41480\ncpu: 19457.094985535176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18351.82272417544,
            "unit": "ns/iter",
            "extra": "iterations: 42589\ncpu: 18350.88168306376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18677.20520131691,
            "unit": "ns/iter",
            "extra": "iterations: 43489\ncpu: 18676.4515164754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65785.60499083073,
            "unit": "ns/iter",
            "extra": "iterations: 13625\ncpu: 65781.71009174296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 574286.509999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574188.399999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 542878.677258564,
            "unit": "ns/iter",
            "extra": "iterations: 1605\ncpu: 542845.54517134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 544477.7083069201,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 544447.9391249192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 554136.8170962271,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 554106.0339409171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 322193.19643520296,
            "unit": "ns/iter",
            "extra": "iterations: 2693\ncpu: 322189.93687337544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 549644.5982143079,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 549635.7780612239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2354192.3838381693,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2354134.090909086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1085107.9334917646,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 1085069.3586698342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3260565.087719426,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3260376.8421052606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7433.556714930669,
            "unit": "ns/iter",
            "extra": "iterations: 113471\ncpu: 7433.492257933744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39612.72861590088,
            "unit": "ns/iter",
            "extra": "iterations: 21523\ncpu: 39611.99646889386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30445.16828323471,
            "unit": "ns/iter",
            "extra": "iterations: 27115\ncpu: 30444.49935460078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 28616.58824971799,
            "unit": "ns/iter",
            "extra": "iterations: 28544\ncpu: 28616.013873318283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 29392.631659381565,
            "unit": "ns/iter",
            "extra": "iterations: 28137\ncpu: 29392.461882930093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77028.47616076423,
            "unit": "ns/iter",
            "extra": "iterations: 11221\ncpu: 77024.79279921584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 597240.3009999426,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597208.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 586671.2612245322,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 586630.2040816325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 585901.1474966471,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 585863.8024357264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 585667.5068492702,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 585637.5342465764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 332549.4155547339,
            "unit": "ns/iter",
            "extra": "iterations: 2623\ncpu: 332545.1772779246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576409.564421234,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 576405.2975801197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2491928.911528115,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2491812.600536193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1093856.0412736177,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1093790.6839622643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5112.220573312005,
            "unit": "ns/iter",
            "extra": "iterations: 154715\ncpu: 5111.980738777718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23983.75488018637,
            "unit": "ns/iter",
            "extra": "iterations: 34220\ncpu: 23982.153711280123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19223.336350345096,
            "unit": "ns/iter",
            "extra": "iterations: 43089\ncpu: 19222.432639420793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19120.042818891223,
            "unit": "ns/iter",
            "extra": "iterations: 44443\ncpu: 19119.694890083927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20938.20561738247,
            "unit": "ns/iter",
            "extra": "iterations: 39627\ncpu: 20938.26683826691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 65119.76500858294,
            "unit": "ns/iter",
            "extra": "iterations: 13409\ncpu: 65114.907897680954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 583707.157000049,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583699.7000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 565951.1182654059,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 565913.731931669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 567263.0167202787,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 567233.9549839227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 564206.7615035122,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 564207.0641607285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 324191.46314224624,
            "unit": "ns/iter",
            "extra": "iterations: 2686\ncpu: 324187.82576321816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 565760.6331626304,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 565755.8898847642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 498.4963462536065,
            "unit": "ns/iter",
            "extra": "iterations: 1406091\ncpu: 498.4974656690049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3002.5883509258715,
            "unit": "ns/iter",
            "extra": "iterations: 228413\ncpu: 3002.549329504015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2424.0077721488224,
            "unit": "ns/iter",
            "extra": "iterations: 302619\ncpu: 2423.917863716416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2470.8590244463912,
            "unit": "ns/iter",
            "extra": "iterations: 312274\ncpu: 2470.8419529003495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1920.72721715047,
            "unit": "ns/iter",
            "extra": "iterations: 363135\ncpu: 1920.6980874881403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17568.79020346758,
            "unit": "ns/iter",
            "extra": "iterations: 39810\ncpu: 17568.311981914012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31039.760067336378,
            "unit": "ns/iter",
            "extra": "iterations: 22573\ncpu: 31039.144110220128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7286.2171484922565,
            "unit": "ns/iter",
            "extra": "iterations: 96335\ncpu: 7286.080863652793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7218.449343592664,
            "unit": "ns/iter",
            "extra": "iterations: 96434\ncpu: 7218.271563971248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7275.492554350396,
            "unit": "ns/iter",
            "extra": "iterations: 96365\ncpu: 7275.314688943156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14576.674234513088,
            "unit": "ns/iter",
            "extra": "iterations: 47878\ncpu: 14576.471448264476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13954.112133824116,
            "unit": "ns/iter",
            "extra": "iterations: 49976\ncpu: 13954.01792860578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5360.806606282201,
            "unit": "ns/iter",
            "extra": "iterations: 129725\ncpu: 5360.487184428552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27380.426266128274,
            "unit": "ns/iter",
            "extra": "iterations: 25965\ncpu: 27378.53264009253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21469.79092020706,
            "unit": "ns/iter",
            "extra": "iterations: 32710\ncpu: 21468.593702232098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21459.200548940218,
            "unit": "ns/iter",
            "extra": "iterations: 32426\ncpu: 21457.85480787029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21718.392760601568,
            "unit": "ns/iter",
            "extra": "iterations: 32185\ncpu: 21716.827714774077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48101.80545817468,
            "unit": "ns/iter",
            "extra": "iterations: 14547\ncpu: 48098.487660685765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157270.78662130513,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 157258.16326530775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132236.81425855684,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 132227.45247148335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130858.95067014208,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 130853.05286671633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130832.73050307273,
            "unit": "ns/iter",
            "extra": "iterations: 5347\ncpu: 130831.13895642421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82311.63784356491,
            "unit": "ns/iter",
            "extra": "iterations: 8477\ncpu: 82306.09885572738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129723.34601111729,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 129715.84415584242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5014.788705488323,
            "unit": "ns/iter",
            "extra": "iterations: 139767\ncpu: 5014.375353266448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25901.034780681435,
            "unit": "ns/iter",
            "extra": "iterations: 27084\ncpu: 25899.715699306285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20542.523305705865,
            "unit": "ns/iter",
            "extra": "iterations: 34026\ncpu: 20540.992182448503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20579.81655362551,
            "unit": "ns/iter",
            "extra": "iterations: 34059\ncpu: 20578.38456795527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20853.471379269227,
            "unit": "ns/iter",
            "extra": "iterations: 33612\ncpu: 20851.023444007988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47053.58218301456,
            "unit": "ns/iter",
            "extra": "iterations: 14851\ncpu: 47051.56555114115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155271.64635210112,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 155263.91437308854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129985.23235896377,
            "unit": "ns/iter",
            "extra": "iterations: 5371\ncpu: 129985.4961832064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128778.5147194988,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 128776.83762266426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129369.49646710223,
            "unit": "ns/iter",
            "extra": "iterations: 5378\ncpu: 129366.21420602602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81411.2568223804,
            "unit": "ns/iter",
            "extra": "iterations: 8648\ncpu: 81410.59204440244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127222.89590075192,
            "unit": "ns/iter",
            "extra": "iterations: 5562\ncpu: 127217.87126932574 ns\nthreads: 1"
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
        "date": 1705575619052,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1429.2797188735997,
            "unit": "ns/iter",
            "extra": "iterations: 497285\ncpu: 1429.2341413877355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16066.599007968036,
            "unit": "ns/iter",
            "extra": "iterations: 51208\ncpu: 16066.561865333542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34440.789637948365,
            "unit": "ns/iter",
            "extra": "iterations: 24030\ncpu: 34439.87931751978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52711.88073727778,
            "unit": "ns/iter",
            "extra": "iterations: 16493\ncpu: 52710.13157096951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57288.85569999421,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57288.56000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72551.29183422831,
            "unit": "ns/iter",
            "extra": "iterations: 12185\ncpu: 72550.76733688959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85515.4249950538,
            "unit": "ns/iter",
            "extra": "iterations: 10106\ncpu: 85513.8828418761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98596.11672752189,
            "unit": "ns/iter",
            "extra": "iterations: 8764\ncpu: 98595.93792788683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113976.31911306764,
            "unit": "ns/iter",
            "extra": "iterations: 7712\ncpu: 113973.75518672197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1159.7967813474254,
            "unit": "ns/iter",
            "extra": "iterations: 600624\ncpu: 1159.80163962812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 954.1145285838635,
            "unit": "ns/iter",
            "extra": "iterations: 626909\ncpu: 954.093496823301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 979.7716247900827,
            "unit": "ns/iter",
            "extra": "iterations: 709267\ncpu: 979.7220228771401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 922.6600439204678,
            "unit": "ns/iter",
            "extra": "iterations: 759101\ncpu: 922.6560102015396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1848.7839931176345,
            "unit": "ns/iter",
            "extra": "iterations: 376613\ncpu: 1848.7699574895153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5282.750471535003,
            "unit": "ns/iter",
            "extra": "iterations: 150572\ncpu: 5282.579762505645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24194.26031286351,
            "unit": "ns/iter",
            "extra": "iterations: 33817\ncpu: 24193.1927728657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18885.948445115453,
            "unit": "ns/iter",
            "extra": "iterations: 42479\ncpu: 18884.37110101464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18791.149495603746,
            "unit": "ns/iter",
            "extra": "iterations: 43319\ncpu: 18790.205221727174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19128.415341785916,
            "unit": "ns/iter",
            "extra": "iterations: 43463\ncpu: 19116.954651082513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64502.560128900855,
            "unit": "ns/iter",
            "extra": "iterations: 13654\ncpu: 64499.24564230275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 551692.3149999684,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551695.5000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 549809.1316793757,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 549787.7862595432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 549319.7587080941,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 549299.3033565535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 555600.4398713529,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 555597.3633440505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 319177.7858203121,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 319162.13808463246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 552783.3022959637,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 552764.6045918349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2342371.5000001667,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2342315.326633166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1070095.368055464,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1070048.6111111108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3268427.321554651,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3268163.9575971696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7458.125793752152,
            "unit": "ns/iter",
            "extra": "iterations: 113543\ncpu: 7457.723505632239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 38918.57082007512,
            "unit": "ns/iter",
            "extra": "iterations: 21364\ncpu: 38917.15034637694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31002.973451656148,
            "unit": "ns/iter",
            "extra": "iterations: 27045\ncpu: 31001.405065631297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 29370.47924194206,
            "unit": "ns/iter",
            "extra": "iterations: 28230\ncpu: 29370.357775416225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30093.229600692954,
            "unit": "ns/iter",
            "extra": "iterations: 27648\ncpu: 30091.98495370357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77122.70204793761,
            "unit": "ns/iter",
            "extra": "iterations: 11475\ncpu: 77122.3006535949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 600754.7980000254,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600728.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589634.3421949776,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 589632.2426721231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 570187.9868160292,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 570167.8971654597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 583454.8456420652,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 583428.8755821707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 337527.9519230809,
            "unit": "ns/iter",
            "extra": "iterations: 2600\ncpu: 337529.1538461548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 572944.1141914385,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 572930.6270627048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2473934.949468029,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2473873.4042553017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1105810.9520383272,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1105787.5299760243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5012.419209480061,
            "unit": "ns/iter",
            "extra": "iterations: 156454\ncpu: 5012.249606913195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24617.67555127911,
            "unit": "ns/iter",
            "extra": "iterations: 33241\ncpu: 24616.98504858456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19658.63791988813,
            "unit": "ns/iter",
            "extra": "iterations: 41767\ncpu: 19658.28764335481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18803.544670305015,
            "unit": "ns/iter",
            "extra": "iterations: 43586\ncpu: 18803.051438535247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19073.00013999214,
            "unit": "ns/iter",
            "extra": "iterations: 42860\ncpu: 19072.60849276722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62708.596279129844,
            "unit": "ns/iter",
            "extra": "iterations: 13814\ncpu: 62707.15216447087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 583143.232999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583121.8000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 565606.1673228164,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 565592.125984254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 564880.3603316318,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 564859.119897957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 572725.9954188752,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 572704.1884816722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 328810.5660519514,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 328802.67218667845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 566302.5667963849,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 566298.4435797645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 500.20968400008314,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 500.18910000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3153.8056318341946,
            "unit": "ns/iter",
            "extra": "iterations: 221775\ncpu: 3153.6354413256513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2458.678230854359,
            "unit": "ns/iter",
            "extra": "iterations: 296663\ncpu: 2458.589375823735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2453.306491412622,
            "unit": "ns/iter",
            "extra": "iterations: 285300\ncpu: 2453.2173151068973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1951.4143705835754,
            "unit": "ns/iter",
            "extra": "iterations: 358872\ncpu: 1951.318854633418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17188.866018650053,
            "unit": "ns/iter",
            "extra": "iterations: 40431\ncpu: 17188.09576809892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31090.81444161143,
            "unit": "ns/iter",
            "extra": "iterations: 22726\ncpu: 31089.584616738754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7341.467399113126,
            "unit": "ns/iter",
            "extra": "iterations: 94660\ncpu: 7341.208535812493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7278.971363198365,
            "unit": "ns/iter",
            "extra": "iterations: 96589\ncpu: 7278.54207000797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7291.347477841192,
            "unit": "ns/iter",
            "extra": "iterations: 96009\ncpu: 7291.316439083912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14510.06151985144,
            "unit": "ns/iter",
            "extra": "iterations: 47952\ncpu: 14509.74516182858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13818.958264234503,
            "unit": "ns/iter",
            "extra": "iterations: 50652\ncpu: 13818.546158098228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5385.131454712921,
            "unit": "ns/iter",
            "extra": "iterations: 129847\ncpu: 5385.045476599453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27187.149799287636,
            "unit": "ns/iter",
            "extra": "iterations: 25908\ncpu: 27186.610313416946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21604.40214369614,
            "unit": "ns/iter",
            "extra": "iterations: 32374\ncpu: 21604.02483474413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21542.93411343578,
            "unit": "ns/iter",
            "extra": "iterations: 32389\ncpu: 21542.431072277584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21881.554262721085,
            "unit": "ns/iter",
            "extra": "iterations: 32057\ncpu: 21881.364444583454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48498.58730378322,
            "unit": "ns/iter",
            "extra": "iterations: 14461\ncpu: 48497.641933476545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160800.59287356437,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 160798.0229885074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134686.92010753555,
            "unit": "ns/iter",
            "extra": "iterations: 5207\ncpu: 134683.31092760005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133968.0420087821,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 133966.96582012495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133489.4872698817,
            "unit": "ns/iter",
            "extra": "iterations: 5106\ncpu: 133487.4461417938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84014.3009580872,
            "unit": "ns/iter",
            "extra": "iterations: 8350\ncpu: 84012.91017964092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134003.71341462998,
            "unit": "ns/iter",
            "extra": "iterations: 5248\ncpu: 133998.05640243797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5117.100050671389,
            "unit": "ns/iter",
            "extra": "iterations: 136171\ncpu: 5116.941198933637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26236.988307599968,
            "unit": "ns/iter",
            "extra": "iterations: 26684\ncpu: 26236.857292759956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20781.616425350756,
            "unit": "ns/iter",
            "extra": "iterations: 33704\ncpu: 20780.925112746212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20639.976847756574,
            "unit": "ns/iter",
            "extra": "iterations: 33906\ncpu: 20639.568218014516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21087.11148322417,
            "unit": "ns/iter",
            "extra": "iterations: 33144\ncpu: 21086.10608254886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47047.814321292615,
            "unit": "ns/iter",
            "extra": "iterations: 14859\ncpu: 47047.49310182389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154000.76548671557,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 153994.44690265332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131100.8560899245,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 131100.18426386506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131105.9728769215,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 131101.77702955538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130770.13504883193,
            "unit": "ns/iter",
            "extra": "iterations: 5324\ncpu: 130768.40721262307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83215.02162492729,
            "unit": "ns/iter",
            "extra": "iterations: 8185\ncpu: 83212.90164935871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129549.75484713426,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 129546.36465324345 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}