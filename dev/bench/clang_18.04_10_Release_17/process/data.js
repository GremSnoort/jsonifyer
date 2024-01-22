window.BENCHMARK_DATA = {
  "lastUpdate": 1705955079048,
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
        "date": 1705773442738,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1386.3170322465774,
            "unit": "ns/iter",
            "extra": "iterations: 507778\ncpu: 1386.263288287401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16239.268756625392,
            "unit": "ns/iter",
            "extra": "iterations: 50942\ncpu: 16238.82650857838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34346.883932277466,
            "unit": "ns/iter",
            "extra": "iterations: 24098\ncpu: 34345.43945555648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51039.891325413606,
            "unit": "ns/iter",
            "extra": "iterations: 16508\ncpu: 51039.514174945485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56962.48530000503,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56959.90999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71920.66694011923,
            "unit": "ns/iter",
            "extra": "iterations: 12190\ncpu: 71919.7292863002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84476.55135134586,
            "unit": "ns/iter",
            "extra": "iterations: 10175\ncpu: 84474.56511056513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97569.06632710819,
            "unit": "ns/iter",
            "extra": "iterations: 8835\ncpu: 97567.1646859083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113685.56042497708,
            "unit": "ns/iter",
            "extra": "iterations: 7530\ncpu: 113682.82868525907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1196.1261263257484,
            "unit": "ns/iter",
            "extra": "iterations: 586531\ncpu: 1196.065851591817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 969.0315523979638,
            "unit": "ns/iter",
            "extra": "iterations: 718424\ncpu: 969.0116143113243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 929.6316414551544,
            "unit": "ns/iter",
            "extra": "iterations: 739277\ncpu: 929.5798462551908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 914.6556521784626,
            "unit": "ns/iter",
            "extra": "iterations: 765749\ncpu: 914.61444938224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1860.0679398788157,
            "unit": "ns/iter",
            "extra": "iterations: 375376\ncpu: 1859.9838561868673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5272.024075926642,
            "unit": "ns/iter",
            "extra": "iterations: 151936\ncpu: 5271.91843934288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24172.962361191534,
            "unit": "ns/iter",
            "extra": "iterations: 34220\ncpu: 24172.399181765042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 18828.915318898828,
            "unit": "ns/iter",
            "extra": "iterations: 42725\ncpu: 18828.390871854906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18635.60762557298,
            "unit": "ns/iter",
            "extra": "iterations: 43800\ncpu: 18635.054794520485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18788.720101606257,
            "unit": "ns/iter",
            "extra": "iterations: 43698\ncpu: 18788.212275161288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64774.598957188784,
            "unit": "ns/iter",
            "extra": "iterations: 13617\ncpu: 64770.37526621154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 543592.9960000295,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543568.8000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 551003.356652042,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 550985.5090568411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 538417.8936169912,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 538395.8698372962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 563548.3082322945,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 563509.7638800252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329723.0014875328,
            "unit": "ns/iter",
            "extra": "iterations: 2689\ncpu: 329710.3756043131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 559957.978859665,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 559947.3414477912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2340331.4242425887,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2340198.9898989894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1082847.5192083959,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1082799.4179278235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3272087.8763249097,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3271907.4204946924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7538.449362584418,
            "unit": "ns/iter",
            "extra": "iterations: 110995\ncpu: 7538.187305734484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 38915.74244787766,
            "unit": "ns/iter",
            "extra": "iterations: 21153\ncpu: 38912.80196662413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30969.956235751317,
            "unit": "ns/iter",
            "extra": "iterations: 26757\ncpu: 30968.879171805413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30471.422437374902,
            "unit": "ns/iter",
            "extra": "iterations: 27784\ncpu: 30470.08350129564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30582.392743380933,
            "unit": "ns/iter",
            "extra": "iterations: 27313\ncpu: 30581.419104455672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76073.46407664153,
            "unit": "ns/iter",
            "extra": "iterations: 11274\ncpu: 76070.29448288087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 606376.603000058,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606341.7000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 584846.8889655187,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 584828.4137931075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 590233.5187919098,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 590200.0000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 583419.3484042711,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 583400.199468085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 335659.66319442715,
            "unit": "ns/iter",
            "extra": "iterations: 2592\ncpu: 335261.1496913577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574004.4047619359,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 573990.806878308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2488996.02412872,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2488922.520107239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1099733.8782506129,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1099689.5981087459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5113.12070958594,
            "unit": "ns/iter",
            "extra": "iterations: 157444\ncpu: 5112.913797921801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23690.015557971576,
            "unit": "ns/iter",
            "extra": "iterations: 34966\ncpu: 23688.40587999759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18883.850681324955,
            "unit": "ns/iter",
            "extra": "iterations: 43665\ncpu: 18883.0367571281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18120.55654690123,
            "unit": "ns/iter",
            "extra": "iterations: 45617\ncpu: 18119.503693798335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18051.918603891798,
            "unit": "ns/iter",
            "extra": "iterations: 45813\ncpu: 18051.173247768136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63023.25307481547,
            "unit": "ns/iter",
            "extra": "iterations: 13822\ncpu: 63019.476197366566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578969.843999971,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578935.7999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 577464.9683167875,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 577427.2607260719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 578974.3957644511,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 578953.9377895438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 595769.7388743665,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 595744.7643979087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327398.5321482585,
            "unit": "ns/iter",
            "extra": "iterations: 2644\ncpu: 327377.7231467479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 566031.5957308703,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 566010.5433376456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 522.1552195242047,
            "unit": "ns/iter",
            "extra": "iterations: 1373152\ncpu: 522.1351314348301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3213.77144310098,
            "unit": "ns/iter",
            "extra": "iterations: 216305\ncpu: 3213.598853470803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2531.3428704180355,
            "unit": "ns/iter",
            "extra": "iterations: 286251\ncpu: 2531.243209630695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2492.0442688075273,
            "unit": "ns/iter",
            "extra": "iterations: 312387\ncpu: 2491.9817405973954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1955.8724578010151,
            "unit": "ns/iter",
            "extra": "iterations: 358007\ncpu: 1955.7737697866162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17704.63038170211,
            "unit": "ns/iter",
            "extra": "iterations: 40136\ncpu: 17703.772174606485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31624.263825351358,
            "unit": "ns/iter",
            "extra": "iterations: 22079\ncpu: 31622.813533221342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7323.312137702506,
            "unit": "ns/iter",
            "extra": "iterations: 95743\ncpu: 7323.029359848829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7251.960400353055,
            "unit": "ns/iter",
            "extra": "iterations: 96415\ncpu: 7251.890266037432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7280.098867885719,
            "unit": "ns/iter",
            "extra": "iterations: 96280\ncpu: 7280.03115911922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13962.970196235077,
            "unit": "ns/iter",
            "extra": "iterations: 50195\ncpu: 13962.466381113629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13959.684199014077,
            "unit": "ns/iter",
            "extra": "iterations: 50288\ncpu: 13958.996181991502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5429.843239930737,
            "unit": "ns/iter",
            "extra": "iterations: 128904\ncpu: 5429.608856203074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26995.886870865706,
            "unit": "ns/iter",
            "extra": "iterations: 25988\ncpu: 26994.61674619049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21753.532625944048,
            "unit": "ns/iter",
            "extra": "iterations: 32137\ncpu: 21751.98369480667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21716.54153453737,
            "unit": "ns/iter",
            "extra": "iterations: 32166\ncpu: 21715.42000870494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22056.655877340916,
            "unit": "ns/iter",
            "extra": "iterations: 31698\ncpu: 22055.971985614204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48515.078713963805,
            "unit": "ns/iter",
            "extra": "iterations: 14432\ncpu: 48512.54157427994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159750.44464690916,
            "unit": "ns/iter",
            "extra": "iterations: 4390\ncpu: 159741.68564920363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133993.3019660164,
            "unit": "ns/iter",
            "extra": "iterations: 5239\ncpu: 133985.97060507815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132442.1346226911,
            "unit": "ns/iter",
            "extra": "iterations: 5274\ncpu: 132440.65225635224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133215.71444845686,
            "unit": "ns/iter",
            "extra": "iterations: 5267\ncpu: 133211.31573950927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83582.12867032626,
            "unit": "ns/iter",
            "extra": "iterations: 8378\ncpu: 83578.95679159756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133245.5374382246,
            "unit": "ns/iter",
            "extra": "iterations: 5262\ncpu: 133239.9277841132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5139.553985086203,
            "unit": "ns/iter",
            "extra": "iterations: 135982\ncpu: 5139.199305790487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26291.710971574135,
            "unit": "ns/iter",
            "extra": "iterations: 26596\ncpu: 26290.66776958952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20882.66785169856,
            "unit": "ns/iter",
            "extra": "iterations: 33473\ncpu: 20881.77336958179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20712.465555029907,
            "unit": "ns/iter",
            "extra": "iterations: 33764\ncpu: 20712.27935078771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21084.339298649145,
            "unit": "ns/iter",
            "extra": "iterations: 33136\ncpu: 21084.026436503922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47438.12585424858,
            "unit": "ns/iter",
            "extra": "iterations: 14779\ncpu: 47436.51803234311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156417.35856662417,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 156409.47368421018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130525.61578750203,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 130524.42947998655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129865.17649239034,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 129862.62513904365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130208.30430727685,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 130203.7292560132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83013.34491757178,
            "unit": "ns/iter",
            "extra": "iterations: 8431\ncpu: 83011.14932985383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127591.58701583234,
            "unit": "ns/iter",
            "extra": "iterations: 5499\ncpu: 127585.19730860295 ns\nthreads: 1"
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
        "date": 1705774866274,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1361.1964157583172,
            "unit": "ns/iter",
            "extra": "iterations: 524016\ncpu: 1361.136492015511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16238.213699004393,
            "unit": "ns/iter",
            "extra": "iterations: 51011\ncpu: 16237.78400737096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34491.480796350406,
            "unit": "ns/iter",
            "extra": "iterations: 24110\ncpu: 34490.356698465366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51238.27442423934,
            "unit": "ns/iter",
            "extra": "iterations: 16500\ncpu: 51237.50303030303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57516.47660000572,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57513.36 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71464.6339307468,
            "unit": "ns/iter",
            "extra": "iterations: 12331\ncpu: 71462.65509691021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84475.63646192152,
            "unit": "ns/iter",
            "extra": "iterations: 10175\ncpu: 84472.96314496313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96646.69826799928,
            "unit": "ns/iter",
            "extra": "iterations: 7679\ncpu: 96645.34444589149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112562.49677249676,
            "unit": "ns/iter",
            "extra": "iterations: 7591\ncpu: 112553.93228823598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1148.1040281348226,
            "unit": "ns/iter",
            "extra": "iterations: 609066\ncpu: 1148.0580101335493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 944.0483113279253,
            "unit": "ns/iter",
            "extra": "iterations: 735045\ncpu: 943.997714425648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 919.0084961677173,
            "unit": "ns/iter",
            "extra": "iterations: 744571\ncpu: 918.9697154468807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 933.81632634077,
            "unit": "ns/iter",
            "extra": "iterations: 752857\ncpu: 933.7528906551971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1848.0896902253658,
            "unit": "ns/iter",
            "extra": "iterations: 378146\ncpu: 1848.0264236564701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5335.260288544721,
            "unit": "ns/iter",
            "extra": "iterations: 150410\ncpu: 5335.030250648227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25023.797050988014,
            "unit": "ns/iter",
            "extra": "iterations: 33028\ncpu: 25022.79883735015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19719.439229640375,
            "unit": "ns/iter",
            "extra": "iterations: 41591\ncpu: 19718.333293260574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18949.67764915597,
            "unit": "ns/iter",
            "extra": "iterations: 42674\ncpu: 18948.950180437736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18902.542025100334,
            "unit": "ns/iter",
            "extra": "iterations: 42546\ncpu: 18901.826258637702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65479.66725676627,
            "unit": "ns/iter",
            "extra": "iterations: 13557\ncpu: 65474.8321900125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 551297.0070000164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551280.2000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 551141.9943074067,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 551112.01771031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 553825.4547787111,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 553787.2995509956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 557529.2949044964,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 557512.80254777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 322197.19598364,
            "unit": "ns/iter",
            "extra": "iterations: 2689\ncpu: 322117.51580513106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 556777.3426930626,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 556746.7772814289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2317233.4862842006,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2317184.2892768034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1091694.1954976276,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1091666.1137440773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3217613.9512194865,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3217524.390243906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7578.618101984012,
            "unit": "ns/iter",
            "extra": "iterations: 110684\ncpu: 7578.404286075688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39695.20311083926,
            "unit": "ns/iter",
            "extra": "iterations: 20959\ncpu: 39694.28884965891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30875.31507683039,
            "unit": "ns/iter",
            "extra": "iterations: 26292\ncpu: 30874.52457021145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30830.803917196354,
            "unit": "ns/iter",
            "extra": "iterations: 26907\ncpu: 30829.683725424566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30044.79326592195,
            "unit": "ns/iter",
            "extra": "iterations: 27591\ncpu: 30044.34054583002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76008.41168647088,
            "unit": "ns/iter",
            "extra": "iterations: 11278\ncpu: 76003.92800141823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 604522.5259999825,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 604520.3999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 585475.9279341121,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 585463.3493479766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 590829.7518745274,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 590799.9999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584581.7214236428,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 584572.4845995904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334089.6136890669,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 334080.54911059624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 573632.0913837868,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 573619.7127937325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2493308.3924730252,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2493162.9032258047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1091599.4729411441,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1091537.1764705926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5143.490464706326,
            "unit": "ns/iter",
            "extra": "iterations: 157153\ncpu: 5143.302386845957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24403.90442165484,
            "unit": "ns/iter",
            "extra": "iterations: 33449\ncpu: 24403.590540823297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19310.567845598383,
            "unit": "ns/iter",
            "extra": "iterations: 42383\ncpu: 19310.117263997294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18754.576808995036,
            "unit": "ns/iter",
            "extra": "iterations: 43491\ncpu: 18754.257202639557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18628.123709434894,
            "unit": "ns/iter",
            "extra": "iterations: 43295\ncpu: 18627.465065249973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63284.95035971356,
            "unit": "ns/iter",
            "extra": "iterations: 13900\ncpu: 63282.04316546765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 571411.9440000332,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571383.8000000067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 570855.1996099055,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 570826.7230169066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 571486.3805773798,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 571448.228346455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575168.5583554754,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 575136.8037135297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 326196.7454136879,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 326186.4470235883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 564732.717335064,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 564700.6468305321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 498.54727297897654,
            "unit": "ns/iter",
            "extra": "iterations: 1401456\ncpu: 498.52082405726776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3072.1898358431176,
            "unit": "ns/iter",
            "extra": "iterations: 228745\ncpu: 3072.0614658244135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2374.4117948111525,
            "unit": "ns/iter",
            "extra": "iterations: 295045\ncpu: 2374.315443406936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2449.9866119440726,
            "unit": "ns/iter",
            "extra": "iterations: 298475\ncpu: 2449.807856604422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1947.1427991027758,
            "unit": "ns/iter",
            "extra": "iterations: 359358\ncpu: 1946.9523427890956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17346.486948114823,
            "unit": "ns/iter",
            "extra": "iterations: 40339\ncpu: 17345.31594734624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31709.059596372175,
            "unit": "ns/iter",
            "extra": "iterations: 22149\ncpu: 31707.66626032739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7405.29303456266,
            "unit": "ns/iter",
            "extra": "iterations: 94610\ncpu: 7404.956135715047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7386.839670329166,
            "unit": "ns/iter",
            "extra": "iterations: 94761\ncpu: 7386.73610451553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7382.170476784493,
            "unit": "ns/iter",
            "extra": "iterations: 94529\ncpu: 7381.843667022692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14724.539281042038,
            "unit": "ns/iter",
            "extra": "iterations: 47402\ncpu: 14723.648791190333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14167.804929920292,
            "unit": "ns/iter",
            "extra": "iterations: 49372\ncpu: 14167.139269221461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5456.787005499721,
            "unit": "ns/iter",
            "extra": "iterations: 128008\ncpu: 5456.562871070535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27165.353676526636,
            "unit": "ns/iter",
            "extra": "iterations: 25758\ncpu: 27164.216942308984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21671.501623728727,
            "unit": "ns/iter",
            "extra": "iterations: 32333\ncpu: 21670.893514365907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21745.191468840603,
            "unit": "ns/iter",
            "extra": "iterations: 32141\ncpu: 21744.4105659436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22054.893574168476,
            "unit": "ns/iter",
            "extra": "iterations: 31778\ncpu: 22054.263956195795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48143.07206155207,
            "unit": "ns/iter",
            "extra": "iterations: 14557\ncpu: 48139.27320189597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159699.9747764361,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 159694.63425819625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133186.8288545899,
            "unit": "ns/iter",
            "extra": "iterations: 5247\ncpu: 133182.99980941383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134225.40522753185,
            "unit": "ns/iter",
            "extra": "iterations: 5318\ncpu: 134034.3926288089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131847.8607284268,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 131840.38497829827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83420.53859120794,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 83412.6309452139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130685.11682763833,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 130676.83878157396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5166.889609862075,
            "unit": "ns/iter",
            "extra": "iterations: 135465\ncpu: 5166.701361975406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26403.04552802693,
            "unit": "ns/iter",
            "extra": "iterations: 26599\ncpu: 26402.718147298492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20795.021422653168,
            "unit": "ns/iter",
            "extra": "iterations: 33796\ncpu: 20793.215173393142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20665.481298161983,
            "unit": "ns/iter",
            "extra": "iterations: 33740\ncpu: 20664.588026081692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21070.290185821643,
            "unit": "ns/iter",
            "extra": "iterations: 33258\ncpu: 21068.681219556474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47046.692773923096,
            "unit": "ns/iter",
            "extra": "iterations: 14849\ncpu: 47045.16129032279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155415.92912343086,
            "unit": "ns/iter",
            "extra": "iterations: 4529\ncpu: 155409.51644954877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129157.52585895445,
            "unit": "ns/iter",
            "extra": "iterations: 5530\ncpu: 129150.14466546143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128171.80809566237,
            "unit": "ns/iter",
            "extra": "iterations: 5435\ncpu: 128163.40386384683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127817.20764424509,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 127804.72252848251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81914.15470589485,
            "unit": "ns/iter",
            "extra": "iterations: 8500\ncpu: 81909.30588235421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128196.88940176912,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 128187.74002954195 ns\nthreads: 1"
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
        "date": 1705778430741,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1364.9684106019033,
            "unit": "ns/iter",
            "extra": "iterations: 513685\ncpu: 1364.9279227542172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16480.070787976878,
            "unit": "ns/iter",
            "extra": "iterations: 50065\ncpu: 16479.6644362329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34493.69316042458,
            "unit": "ns/iter",
            "extra": "iterations: 23905\ncpu: 34490.2196193265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51179.23221795115,
            "unit": "ns/iter",
            "extra": "iterations: 16407\ncpu: 51176.65630523556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57260.35320000164,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57258.94 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71425.61321292052,
            "unit": "ns/iter",
            "extra": "iterations: 12291\ncpu: 71421.67439589943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84638.94920417565,
            "unit": "ns/iter",
            "extra": "iterations: 10178\ncpu: 84632.45234820203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98561.27238466153,
            "unit": "ns/iter",
            "extra": "iterations: 8756\ncpu: 98554.45408862493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114376.03067237392,
            "unit": "ns/iter",
            "extra": "iterations: 7466\ncpu: 114366.75596035374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1217.84830284197,
            "unit": "ns/iter",
            "extra": "iterations: 572074\ncpu: 1217.7587165296782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 949.3224954659846,
            "unit": "ns/iter",
            "extra": "iterations: 738860\ncpu: 949.2909346831615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 918.4616752123007,
            "unit": "ns/iter",
            "extra": "iterations: 762757\ncpu: 918.4423086251577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 931.6025314869996,
            "unit": "ns/iter",
            "extra": "iterations: 750784\ncpu: 931.602032009207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1868.3642511868695,
            "unit": "ns/iter",
            "extra": "iterations: 374239\ncpu: 1868.2742846149135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5312.461533325422,
            "unit": "ns/iter",
            "extra": "iterations: 149766\ncpu: 5312.453427346661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24683.170383179862,
            "unit": "ns/iter",
            "extra": "iterations: 32961\ncpu: 24681.963532659775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19852.081424875363,
            "unit": "ns/iter",
            "extra": "iterations: 40958\ncpu: 19851.503979686542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18958.632816885638,
            "unit": "ns/iter",
            "extra": "iterations: 42728\ncpu: 18957.58519003927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19138.722986109984,
            "unit": "ns/iter",
            "extra": "iterations: 42691\ncpu: 19137.63556721556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66351.38223110093,
            "unit": "ns/iter",
            "extra": "iterations: 13518\ncpu: 66348.72022488539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 551038.3040000306,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551038.0000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 555064.9153405577,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 555049.1406747304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 565804.5306254157,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 565762.3468729847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 557494.0012970179,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 557472.8274967577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 320716.67757353385,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 320704.4117647064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 558161.4571244569,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 558136.1057382321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2332207.3600002113,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2332115.5000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1068489.4780093376,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1068453.5879629622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3331508.075539597,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3331250.3597122263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7482.767025698063,
            "unit": "ns/iter",
            "extra": "iterations: 111875\ncpu: 7482.563575418983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 38474.86616421566,
            "unit": "ns/iter",
            "extra": "iterations: 21362\ncpu: 38473.80863215052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30865.5983209784,
            "unit": "ns/iter",
            "extra": "iterations: 26444\ncpu: 30864.79730751796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30263.57750960202,
            "unit": "ns/iter",
            "extra": "iterations: 27345\ncpu: 30263.225452550705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30154.894013594203,
            "unit": "ns/iter",
            "extra": "iterations: 27362\ncpu: 30153.815510561937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76586.49449969294,
            "unit": "ns/iter",
            "extra": "iterations: 11363\ncpu: 76585.76960309784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 606797.7799999653,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606789.3999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 590185.8975945644,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 590169.8969072177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 584386.9703166287,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 584357.1899736105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 581909.8730586988,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 581902.4307900078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 337218.29139328434,
            "unit": "ns/iter",
            "extra": "iterations: 2591\ncpu: 337213.89424932405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574594.5904325214,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 574569.8558322407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2503744.4691689406,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2503679.6246648785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1106520.1868263385,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 1106468.8622754486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5119.827692249395,
            "unit": "ns/iter",
            "extra": "iterations: 157712\ncpu: 5119.666861113942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24891.512726832112,
            "unit": "ns/iter",
            "extra": "iterations: 32844\ncpu: 24890.96943125089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19616.532105723847,
            "unit": "ns/iter",
            "extra": "iterations: 42033\ncpu: 19616.27768657943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18854.56558568913,
            "unit": "ns/iter",
            "extra": "iterations: 43325\ncpu: 18854.035776110813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19126.696544147264,
            "unit": "ns/iter",
            "extra": "iterations: 41871\ncpu: 19126.21145900497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62440.95605897283,
            "unit": "ns/iter",
            "extra": "iterations: 13905\ncpu: 62438.676734987595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 586220.6009999226,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586210.7000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 583265.0592937965,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 583227.2485010017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 578787.9116677307,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 578763.1509558348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 579523.8684210869,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 579516.6447368443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329010.41894420737,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 328990.3406963681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 571670.378343147,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 571629.6803653002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 499.20993117966634,
            "unit": "ns/iter",
            "extra": "iterations: 1395081\ncpu: 499.1877174156943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3077.616318773856,
            "unit": "ns/iter",
            "extra": "iterations: 227848\ncpu: 3077.526684456294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2373.1986303707836,
            "unit": "ns/iter",
            "extra": "iterations: 293218\ncpu: 2373.092715999697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2399.09586802214,
            "unit": "ns/iter",
            "extra": "iterations: 293080\ncpu: 2398.9954961102753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1942.984634164756,
            "unit": "ns/iter",
            "extra": "iterations: 359629\ncpu: 1942.8652861699122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17383.357265419632,
            "unit": "ns/iter",
            "extra": "iterations: 40796\ncpu: 17382.525247573394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31257.793953466797,
            "unit": "ns/iter",
            "extra": "iterations: 22393\ncpu: 31255.48162372186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7391.83001036035,
            "unit": "ns/iter",
            "extra": "iterations: 94594\ncpu: 7391.532232488302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7335.036004646121,
            "unit": "ns/iter",
            "extra": "iterations: 95571\ncpu: 7334.692532253478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7367.786037668367,
            "unit": "ns/iter",
            "extra": "iterations: 95199\ncpu: 7367.679282345468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14685.707942163022,
            "unit": "ns/iter",
            "extra": "iterations: 47720\ncpu: 14685.243084660357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14085.081362880368,
            "unit": "ns/iter",
            "extra": "iterations: 49777\ncpu: 14084.336139180756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5469.887426820472,
            "unit": "ns/iter",
            "extra": "iterations: 127597\ncpu: 5469.551008252589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27350.270128741897,
            "unit": "ns/iter",
            "extra": "iterations: 25399\ncpu: 27348.297177053955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22004.411454716195,
            "unit": "ns/iter",
            "extra": "iterations: 31690\ncpu: 22003.70148311778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22075.850836710877,
            "unit": "ns/iter",
            "extra": "iterations: 31851\ncpu: 22074.478038365996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22260.083839187057,
            "unit": "ns/iter",
            "extra": "iterations: 31465\ncpu: 22259.103766089036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48693.69023897418,
            "unit": "ns/iter",
            "extra": "iterations: 14353\ncpu: 48689.897582386766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 163784.98431645724,
            "unit": "ns/iter",
            "extra": "iterations: 4272\ncpu: 163776.9428838954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 138583.49044087867,
            "unit": "ns/iter",
            "extra": "iterations: 5126\ncpu: 138574.05384315373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133879.81466166393,
            "unit": "ns/iter",
            "extra": "iterations: 5320\ncpu: 133877.6503759402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 135546.80104812037,
            "unit": "ns/iter",
            "extra": "iterations: 5152\ncpu: 135542.04192546746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 85520.79275309031,
            "unit": "ns/iter",
            "extra": "iterations: 8169\ncpu: 85516.85640837208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134622.2548529603,
            "unit": "ns/iter",
            "extra": "iterations: 5203\ncpu: 134617.62444743246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5200.236298927415,
            "unit": "ns/iter",
            "extra": "iterations: 134588\ncpu: 5199.9249561624365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26359.259528335268,
            "unit": "ns/iter",
            "extra": "iterations: 26290\ncpu: 26358.090528717705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20924.248726861028,
            "unit": "ns/iter",
            "extra": "iterations: 33382\ncpu: 20922.362350967538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21269.68583870161,
            "unit": "ns/iter",
            "extra": "iterations: 33069\ncpu: 21268.641325713033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21283.493321378457,
            "unit": "ns/iter",
            "extra": "iterations: 32342\ncpu: 21282.249087873355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47271.17433676297,
            "unit": "ns/iter",
            "extra": "iterations: 14776\ncpu: 47269.186518678616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154867.5787858768,
            "unit": "ns/iter",
            "extra": "iterations: 4563\ncpu: 154858.05391190114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131029.06335176161,
            "unit": "ns/iter",
            "extra": "iterations: 5430\ncpu: 131026.22467771474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131135.2451237823,
            "unit": "ns/iter",
            "extra": "iterations: 5332\ncpu: 131133.53338334482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131016.82748263403,
            "unit": "ns/iter",
            "extra": "iterations: 5327\ncpu: 131009.38614605005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83947.65440383421,
            "unit": "ns/iter",
            "extra": "iterations: 8345\ncpu: 83942.19292989881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128170.28112300756,
            "unit": "ns/iter",
            "extra": "iterations: 5414\ncpu: 128159.80790543235 ns\nthreads: 1"
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
        "date": 1705953591877,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1430.2630036920802,
            "unit": "ns/iter",
            "extra": "iterations: 503780\ncpu: 1430.1983008456073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16429.04482951635,
            "unit": "ns/iter",
            "extra": "iterations: 50034\ncpu: 16428.358716073068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34913.43227311233,
            "unit": "ns/iter",
            "extra": "iterations: 23580\ncpu: 34912.599660729444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51676.149207909046,
            "unit": "ns/iter",
            "extra": "iterations: 16286\ncpu: 51674.358344590415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57651.553599998806,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57649.82999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72780.60474631845,
            "unit": "ns/iter",
            "extra": "iterations: 12220\ncpu: 72777.32405891982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85670.18507551243,
            "unit": "ns/iter",
            "extra": "iterations: 10131\ncpu: 85666.14351988937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99796.70531013672,
            "unit": "ns/iter",
            "extra": "iterations: 8738\ncpu: 99791.69146257726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115908.04649586833,
            "unit": "ns/iter",
            "extra": "iterations: 7377\ncpu: 115906.69648908764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1188.570818331605,
            "unit": "ns/iter",
            "extra": "iterations: 589932\ncpu: 1188.546307031996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 955.2208640040885,
            "unit": "ns/iter",
            "extra": "iterations: 728978\ncpu: 955.137466425598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 954.3190811760394,
            "unit": "ns/iter",
            "extra": "iterations: 724709\ncpu: 954.2690928358834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 948.0146684490807,
            "unit": "ns/iter",
            "extra": "iterations: 741319\ncpu: 947.9581664573533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1869.9270734172894,
            "unit": "ns/iter",
            "extra": "iterations: 375021\ncpu: 1869.875820287397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5322.371801314592,
            "unit": "ns/iter",
            "extra": "iterations: 151234\ncpu: 5322.127960643765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 26053.076003552385,
            "unit": "ns/iter",
            "extra": "iterations: 31538\ncpu: 26051.845392859406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20289.46331675709,
            "unit": "ns/iter",
            "extra": "iterations: 40618\ncpu: 20288.645428135344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19927.095578469827,
            "unit": "ns/iter",
            "extra": "iterations: 41411\ncpu: 19926.396368114714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20493.092805341963,
            "unit": "ns/iter",
            "extra": "iterations: 40127\ncpu: 20492.015351259746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65178.726410234965,
            "unit": "ns/iter",
            "extra": "iterations: 13597\ncpu: 65175.582849157814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 574907.4370000358,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574864.0999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 546910.463211744,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 546893.0902111329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 556896.1213468828,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 556863.595933926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 552596.1968051313,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 552563.3226837069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329223.805566014,
            "unit": "ns/iter",
            "extra": "iterations: 2659\ncpu: 329214.1030462579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 552475.1219354951,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 552448.1290322569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2341765.630379812,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2341648.101265823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1079288.975294115,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1079242.823529415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3238703.2394365417,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3238602.112676055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7364.001733512088,
            "unit": "ns/iter",
            "extra": "iterations: 114219\ncpu: 7363.785359703736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 38697.35333239197,
            "unit": "ns/iter",
            "extra": "iterations: 21201\ncpu: 38695.46247818487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30509.33386802839,
            "unit": "ns/iter",
            "extra": "iterations: 27430\ncpu: 30508.5745534087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 29532.810037639963,
            "unit": "ns/iter",
            "extra": "iterations: 27895\ncpu: 29531.55762681497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30094.690603349733,
            "unit": "ns/iter",
            "extra": "iterations: 27712\ncpu: 30093.511836027847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76122.79603596996,
            "unit": "ns/iter",
            "extra": "iterations: 11453\ncpu: 76119.68916441112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 601724.995999973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601711.8999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 592437.1780354773,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 592412.4829467906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 581571.8467251786,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 581548.4807562461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584119.5535956919,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 584096.40434193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 329426.33606928115,
            "unit": "ns/iter",
            "extra": "iterations: 2193\ncpu: 329410.3511171909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 573736.4036939122,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 573714.3139841686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2486336.7245989456,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2486231.2834224617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1087550.5628672387,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1087503.2902467675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5119.759363331691,
            "unit": "ns/iter",
            "extra": "iterations: 155874\ncpu: 5119.592106444942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24047.410744824534,
            "unit": "ns/iter",
            "extra": "iterations: 33914\ncpu: 24045.44730789638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18885.19322768877,
            "unit": "ns/iter",
            "extra": "iterations: 43353\ncpu: 18884.575461905733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19034.325849527242,
            "unit": "ns/iter",
            "extra": "iterations: 42759\ncpu: 19033.129867396325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19531.559440391626,
            "unit": "ns/iter",
            "extra": "iterations: 41672\ncpu: 19530.384910731518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62621.28392741244,
            "unit": "ns/iter",
            "extra": "iterations: 13831\ncpu: 62617.91627503406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 572675.0370000672,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572645.6999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 570275.2180156481,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 570246.2140992156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 561630.9616135458,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 561603.7735849019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 573448.9475032651,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 573433.6747759251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 328133.3925898252,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 328121.1077844313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562991.7835916831,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 562971.5116279051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 500.41998095126763,
            "unit": "ns/iter",
            "extra": "iterations: 1377522\ncpu: 500.40616411208015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3063.92669339475,
            "unit": "ns/iter",
            "extra": "iterations: 227974\ncpu: 3063.892373691747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2381.9534623634668,
            "unit": "ns/iter",
            "extra": "iterations: 295073\ncpu: 2381.9058334717133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2323.0596691335772,
            "unit": "ns/iter",
            "extra": "iterations: 302116\ncpu: 2323.002422910416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1895.5715178774626,
            "unit": "ns/iter",
            "extra": "iterations: 369516\ncpu: 1895.5195444852195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17408.576383399337,
            "unit": "ns/iter",
            "extra": "iterations: 40480\ncpu: 17408.10770750967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30188.211871002037,
            "unit": "ns/iter",
            "extra": "iterations: 23132\ncpu: 30187.86961784541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7113.742783836148,
            "unit": "ns/iter",
            "extra": "iterations: 98217\ncpu: 7113.503772259389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7053.659673542354,
            "unit": "ns/iter",
            "extra": "iterations: 99431\ncpu: 7053.422976737709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7120.3900444024885,
            "unit": "ns/iter",
            "extra": "iterations: 98417\ncpu: 7120.01991525859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14412.264514539396,
            "unit": "ns/iter",
            "extra": "iterations: 48727\ncpu: 14412.100067724365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13574.888076775065,
            "unit": "ns/iter",
            "extra": "iterations: 51580\ncpu: 13574.606436603539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5336.490040931989,
            "unit": "ns/iter",
            "extra": "iterations: 131438\ncpu: 5336.297722119896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26732.203123813502,
            "unit": "ns/iter",
            "extra": "iterations: 26314\ncpu: 26731.044311012727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21392.96156213531,
            "unit": "ns/iter",
            "extra": "iterations: 32494\ncpu: 21392.075460084874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21486.189805169808,
            "unit": "ns/iter",
            "extra": "iterations: 32644\ncpu: 21485.660458277085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21836.40055855202,
            "unit": "ns/iter",
            "extra": "iterations: 31868\ncpu: 21835.468181247747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48336.948972557235,
            "unit": "ns/iter",
            "extra": "iterations: 14502\ncpu: 48335.62956833624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155329.5980044395,
            "unit": "ns/iter",
            "extra": "iterations: 4510\ncpu: 155323.52549888933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132645.87704148964,
            "unit": "ns/iter",
            "extra": "iterations: 5327\ncpu: 132640.73587384983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132759.47833365123,
            "unit": "ns/iter",
            "extra": "iterations: 5377\ncpu: 132753.04072903027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133148.22061621113,
            "unit": "ns/iter",
            "extra": "iterations: 5258\ncpu: 133141.86002282225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84011.51914790891,
            "unit": "ns/iter",
            "extra": "iterations: 8356\ncpu: 84009.22690282403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133300.14593666556,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 133296.39450591462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5125.934048356267,
            "unit": "ns/iter",
            "extra": "iterations: 135660\ncpu: 5125.791685094996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26181.95264832555,
            "unit": "ns/iter",
            "extra": "iterations: 26715\ncpu: 26181.00692494845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20824.179208158588,
            "unit": "ns/iter",
            "extra": "iterations: 33542\ncpu: 20823.37368075838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20531.754061627926,
            "unit": "ns/iter",
            "extra": "iterations: 33915\ncpu: 20530.915524104585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21084.476711832096,
            "unit": "ns/iter",
            "extra": "iterations: 33064\ncpu: 21083.925114928825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47115.98660293558,
            "unit": "ns/iter",
            "extra": "iterations: 14854\ncpu: 47114.02315874541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155355.10317106356,
            "unit": "ns/iter",
            "extra": "iterations: 4478\ncpu: 155348.52612773597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129987.17165148938,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 129981.83169236507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127357.74068610037,
            "unit": "ns/iter",
            "extra": "iterations: 5422\ncpu: 127356.21541866443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127437.28272348008,
            "unit": "ns/iter",
            "extra": "iterations: 5493\ncpu: 127434.55306753935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82143.22157092643,
            "unit": "ns/iter",
            "extra": "iterations: 8530\ncpu: 82140.0586166456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126377.58610107403,
            "unit": "ns/iter",
            "extra": "iterations: 5540\ncpu: 126370.68592057805 ns\nthreads: 1"
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
        "date": 1705955073293,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1379.5982239231403,
            "unit": "ns/iter",
            "extra": "iterations: 497501\ncpu: 1379.6050661204702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16352.126903351611,
            "unit": "ns/iter",
            "extra": "iterations: 50109\ncpu: 16352.611307349976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34882.58127724434,
            "unit": "ns/iter",
            "extra": "iterations: 23629\ncpu: 34883.08857759533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51778.411761096504,
            "unit": "ns/iter",
            "extra": "iterations: 16291\ncpu: 51778.14744337364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57482.75709999575,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57482.75999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72740.92793091814,
            "unit": "ns/iter",
            "extra": "iterations: 12044\ncpu: 72742.37794752575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86413.16451774279,
            "unit": "ns/iter",
            "extra": "iterations: 10005\ncpu: 86412.30384807602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98820.58256985509,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 98820.09848831888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 118392.99717666756,
            "unit": "ns/iter",
            "extra": "iterations: 7438\ncpu: 118392.63242807207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1184.3032770806908,
            "unit": "ns/iter",
            "extra": "iterations: 591380\ncpu: 1184.3141465724254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 955.5254887750272,
            "unit": "ns/iter",
            "extra": "iterations: 728556\ncpu: 955.5227051866967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 930.3630910463401,
            "unit": "ns/iter",
            "extra": "iterations: 748355\ncpu: 930.3817038704884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 936.941032593715,
            "unit": "ns/iter",
            "extra": "iterations: 745327\ncpu: 936.9392226499255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1874.3574707919133,
            "unit": "ns/iter",
            "extra": "iterations: 372243\ncpu: 1874.3334327307696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5283.30841381478,
            "unit": "ns/iter",
            "extra": "iterations: 150966\ncpu: 5283.40950942597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24802.49881796817,
            "unit": "ns/iter",
            "extra": "iterations: 32994\ncpu: 24802.39740558888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20006.49354578966,
            "unit": "ns/iter",
            "extra": "iterations: 40981\ncpu: 20005.975940069806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18485.457744710795,
            "unit": "ns/iter",
            "extra": "iterations: 43817\ncpu: 18485.695049866503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18862.007960035866,
            "unit": "ns/iter",
            "extra": "iterations: 42839\ncpu: 18862.38240855295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65537.82346014975,
            "unit": "ns/iter",
            "extra": "iterations: 13589\ncpu: 65537.25807638533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 572103.9719999793,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572087.400000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 553643.4068749684,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 553643.6875000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 555721.054243777,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 555706.445437142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561773.0331815575,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 561761.8737800904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 323017.821362122,
            "unit": "ns/iter",
            "extra": "iterations: 2687\ncpu: 323013.54670636356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 565083.6304627375,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 565034.8971722353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2328126.99999997,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2328110.2756892256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1090825.5389150747,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1090802.4764150935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3243486.6760563413,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3243405.28169014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7583.952842297247,
            "unit": "ns/iter",
            "extra": "iterations: 113746\ncpu: 7583.907126404437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 38880.707768765074,
            "unit": "ns/iter",
            "extra": "iterations: 21329\ncpu: 38879.29110600583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30480.97871243188,
            "unit": "ns/iter",
            "extra": "iterations: 27152\ncpu: 30480.001473187724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30051.019803412182,
            "unit": "ns/iter",
            "extra": "iterations: 27672\ncpu: 30050.560132986404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30358.080189549295,
            "unit": "ns/iter",
            "extra": "iterations: 27223\ncpu: 30356.863681445837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76506.69457951355,
            "unit": "ns/iter",
            "extra": "iterations: 11106\ncpu: 76504.35800468262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 604590.7490000672,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 604578.6000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 581446.8189134662,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 581452.7162977859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 580488.4089371065,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 580494.2450913982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587427.6591836496,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 587410.8843537386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334192.76173977146,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 334193.7644341814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 575627.5528720181,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 575633.2898172333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2490118.5229110816,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2490054.1778975665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1082171.3162193387,
            "unit": "ns/iter",
            "extra": "iterations: 857\ncpu: 1082182.9638273085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5096.047417047855,
            "unit": "ns/iter",
            "extra": "iterations: 156294\ncpu: 5096.015841938907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23886.703350798492,
            "unit": "ns/iter",
            "extra": "iterations: 34738\ncpu: 23886.403938050702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18920.186649503783,
            "unit": "ns/iter",
            "extra": "iterations: 43504\ncpu: 18920.007355645448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 17924.52684541774,
            "unit": "ns/iter",
            "extra": "iterations: 45911\ncpu: 17924.70431922636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18262.013210685112,
            "unit": "ns/iter",
            "extra": "iterations: 45115\ncpu: 18261.28338690012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63771.475348298416,
            "unit": "ns/iter",
            "extra": "iterations: 13853\ncpu: 63769.638345484505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 582270.8670000338,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582274.4000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 576001.1989425173,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 575993.5888962325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 571182.2953064536,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 571161.6036505864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 572823.754914787,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 572793.8401048515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330892.6669170127,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 330894.8929778438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 574841.4313854804,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 574830.006565991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 505.0187539641497,
            "unit": "ns/iter",
            "extra": "iterations: 1384294\ncpu: 505.01280797287023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3126.009033983077,
            "unit": "ns/iter",
            "extra": "iterations: 224375\ncpu: 3125.9913091921867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2512.5032032400145,
            "unit": "ns/iter",
            "extra": "iterations: 300477\ncpu: 2512.545718973503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2375.3084111834664,
            "unit": "ns/iter",
            "extra": "iterations: 298222\ncpu: 2375.2905553580954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1947.3589582777172,
            "unit": "ns/iter",
            "extra": "iterations: 358752\ncpu: 1947.3101195254694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17324.23953591902,
            "unit": "ns/iter",
            "extra": "iterations: 40424\ncpu: 17324.079754601218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31518.45743810648,
            "unit": "ns/iter",
            "extra": "iterations: 23225\ncpu: 31518.648008611344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7395.975027407094,
            "unit": "ns/iter",
            "extra": "iterations: 94864\ncpu: 7395.94682914487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7331.702399160859,
            "unit": "ns/iter",
            "extra": "iterations: 95450\ncpu: 7331.731796752239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7416.768511640529,
            "unit": "ns/iter",
            "extra": "iterations: 94238\ncpu: 7416.713003247007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14735.81736125826,
            "unit": "ns/iter",
            "extra": "iterations: 47750\ncpu: 14735.635602094386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14252.058427970078,
            "unit": "ns/iter",
            "extra": "iterations: 49223\ncpu: 14252.28856428903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5437.829580696409,
            "unit": "ns/iter",
            "extra": "iterations: 126400\ncpu: 5437.781645569598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27221.219762689267,
            "unit": "ns/iter",
            "extra": "iterations: 25705\ncpu: 27221.104843415793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21720.263697145103,
            "unit": "ns/iter",
            "extra": "iterations: 32306\ncpu: 21720.138673930367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21789.440998818154,
            "unit": "ns/iter",
            "extra": "iterations: 32118\ncpu: 21789.70982003847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22094.367436707962,
            "unit": "ns/iter",
            "extra": "iterations: 31600\ncpu: 22094.40506329122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49070.088052078485,
            "unit": "ns/iter",
            "extra": "iterations: 14287\ncpu: 49069.860712536145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157048.40785218787,
            "unit": "ns/iter",
            "extra": "iterations: 4330\ncpu: 157044.9422632803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132817.86716076938,
            "unit": "ns/iter",
            "extra": "iterations: 5262\ncpu: 132819.97339414686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131625.16178390285,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 131627.3558499731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133710.41137188475,
            "unit": "ns/iter",
            "extra": "iterations: 5241\ncpu: 133708.89143293127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83865.0980674512,
            "unit": "ns/iter",
            "extra": "iterations: 8331\ncpu: 83863.86988356724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133606.32839838837,
            "unit": "ns/iter",
            "extra": "iterations: 5201\ncpu: 133604.53758892394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5091.555734998135,
            "unit": "ns/iter",
            "extra": "iterations: 138082\ncpu: 5091.506496140031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26082.71296020559,
            "unit": "ns/iter",
            "extra": "iterations: 26836\ncpu: 26082.795498584033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20726.896981879447,
            "unit": "ns/iter",
            "extra": "iterations: 33829\ncpu: 20726.988678352704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20566.92300695174,
            "unit": "ns/iter",
            "extra": "iterations: 34081\ncpu: 20566.829024969982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20990.343770659165,
            "unit": "ns/iter",
            "extra": "iterations: 33278\ncpu: 20990.519261975176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47514.35023416828,
            "unit": "ns/iter",
            "extra": "iterations: 14733\ncpu: 47514.5998778253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154433.8066518767,
            "unit": "ns/iter",
            "extra": "iterations: 4510\ncpu: 154434.65631928976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129771.1150491744,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 129770.23566524326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128418.12683284626,
            "unit": "ns/iter",
            "extra": "iterations: 5456\ncpu: 128415.94574780152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129005.73270614055,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 129007.34181885443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81857.8803088834,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 81856.59295659301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127727.23964661005,
            "unit": "ns/iter",
            "extra": "iterations: 5433\ncpu: 127725.80526412574 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}