window.BENCHMARK_DATA = {
  "lastUpdate": 1705962748636,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-7 18.04 Debug c++-17": [
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
        "date": 1702489557852,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8248.37628835411,
            "unit": "ns/iter",
            "extra": "iterations: 84313\ncpu: 8248.002087459823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59401.96739999237,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59402.179999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109483.30382652042,
            "unit": "ns/iter",
            "extra": "iterations: 7840\ncpu: 109476.39030612248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159011.50296078328,
            "unit": "ns/iter",
            "extra": "iterations: 5404\ncpu: 159004.052553664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 207908.06194477834,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 207897.88715486196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 258976.3767552853,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 258973.438900508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308130.31225577166,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 308123.55239786836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 362810.7155774663,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 362790.1356350185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 404992.86595049856,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 404976.13264829526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6765.132957948914,
            "unit": "ns/iter",
            "extra": "iterations: 103183\ncpu: 6764.819786205091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5676.158100649196,
            "unit": "ns/iter",
            "extra": "iterations: 123200\ncpu: 5675.707792207794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5654.1346817356025,
            "unit": "ns/iter",
            "extra": "iterations: 124048\ncpu: 5654.000870630723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5578.189335171495,
            "unit": "ns/iter",
            "extra": "iterations: 124784\ncpu: 5577.909828183098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9718.49388515185,
            "unit": "ns/iter",
            "extra": "iterations: 71956\ncpu: 9717.71082328089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29202.20430954445,
            "unit": "ns/iter",
            "extra": "iterations: 27938\ncpu: 29201.38878946235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 155865.52151714047,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 155859.60977388767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 120670.18875106562,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 120664.39244431944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 123626.08390088593,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 123620.12751775136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 116320.6435602911,
            "unit": "ns/iter",
            "extra": "iterations: 7314\ncpu: 116318.43040743792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 370660.2236220318,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 370645.9842519694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1935283.9189188383,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1935163.2016632003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1523593.7368421939,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1523541.2828947394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1526644.0164474205,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1526577.796052627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1497645.5815832065,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1497572.859450727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 846202.7348623826,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 846154.2201834851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1473729.0907644466,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1473657.0063694273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38224.04062598319,
            "unit": "ns/iter",
            "extra": "iterations: 22301\ncpu: 38222.519169543986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 210975.7476908244,
            "unit": "ns/iter",
            "extra": "iterations: 4114\ncpu: 210963.73359261098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 151163.37046768767,
            "unit": "ns/iter",
            "extra": "iterations: 5709\ncpu: 151150.63934139043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 148294.78050042395,
            "unit": "ns/iter",
            "extra": "iterations: 5795\ncpu: 148288.88697152684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 146951.25720659178,
            "unit": "ns/iter",
            "extra": "iterations: 5828\ncpu: 146940.63143445406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 318889.8785872052,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 318872.84768212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2003625.0472101378,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 2001397.854077263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1572568.6159053058,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1572513.536379018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1593932.9468268529,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1593899.3138936465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1537871.271959584,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1537769.425675685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 870101.2389877194,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 870087.0665417082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1511830.8485342013,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1511771.9869706794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5347380.9899992375,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5347170.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3182439.593856869,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3182287.372013651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30254.44386854884,
            "unit": "ns/iter",
            "extra": "iterations: 27204\ncpu: 30253.539920599786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 147606.91715468408,
            "unit": "ns/iter",
            "extra": "iterations: 5806\ncpu: 147600.37891836025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 119868.19034290215,
            "unit": "ns/iter",
            "extra": "iterations: 7145\ncpu: 119865.93421973343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 119505.25813660983,
            "unit": "ns/iter",
            "extra": "iterations: 7159\ncpu: 119499.59491549095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 114682.43855648322,
            "unit": "ns/iter",
            "extra": "iterations: 7454\ncpu: 114679.13871746686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 285212.71381579613,
            "unit": "ns/iter",
            "extra": "iterations: 3040\ncpu: 285205.7236842115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1923767.8556701492,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1923737.7319587634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1519068.6229508903,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1519002.1311475383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1518742.5293159527,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1518699.674267094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1493355.540930955,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1493333.2263242377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 827789.573843331,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 827771.7081850544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1456926.0392464874,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1456873.783359505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3127.4017888226153,
            "unit": "ns/iter",
            "extra": "iterations: 224058\ncpu: 3127.407189209954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20732.939636816292,
            "unit": "ns/iter",
            "extra": "iterations: 33812\ncpu: 20732.387909617853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16262.106678756127,
            "unit": "ns/iter",
            "extra": "iterations: 43017\ncpu: 16261.87088825344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16552.58544580047,
            "unit": "ns/iter",
            "extra": "iterations: 42407\ncpu: 16551.710802461872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12095.070635825634,
            "unit": "ns/iter",
            "extra": "iterations: 57846\ncpu: 12094.727379594033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103511.66903703618,
            "unit": "ns/iter",
            "extra": "iterations: 6750\ncpu: 103508.84444444462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135586.53298408116,
            "unit": "ns/iter",
            "extra": "iterations: 5154\ncpu: 135584.2258440041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33383.69925565488,
            "unit": "ns/iter",
            "extra": "iterations: 20958\ncpu: 33382.32655787753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32438.154739776488,
            "unit": "ns/iter",
            "extra": "iterations: 21520\ncpu: 32437.174721189593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32940.99458900026,
            "unit": "ns/iter",
            "extra": "iterations: 21253\ncpu: 32940.5025172918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65234.452807312846,
            "unit": "ns/iter",
            "extra": "iterations: 10722\ncpu: 65233.56649878755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61198.61911429763,
            "unit": "ns/iter",
            "extra": "iterations: 11426\ncpu: 61198.71346052836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23876.88122774273,
            "unit": "ns/iter",
            "extra": "iterations: 29485\ncpu: 23875.696116669686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 118412.26377154785,
            "unit": "ns/iter",
            "extra": "iterations: 5918\ncpu: 118410.47651233424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94846.56039248692,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 94843.96075179699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95632.06080065586,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 95628.0776062304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94182.23187433343,
            "unit": "ns/iter",
            "extra": "iterations: 7448\ncpu: 94181.52524167582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169802.56069783136,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 169797.57693239895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 576749.6515651091,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 576741.0214168008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 470671.53234506794,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 470656.8059299186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 475120.20680278825,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 475110.0000000057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 467302.1374249148,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 467284.0560373534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 307475.1742756462,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 307473.0904302027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 463992.153540683,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 463958.3719391116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23777.538440642682,
            "unit": "ns/iter",
            "extra": "iterations: 29448\ncpu: 23777.01711491434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120130.64965634984,
            "unit": "ns/iter",
            "extra": "iterations: 5820\ncpu: 120128.3676975953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96945.02933444001,
            "unit": "ns/iter",
            "extra": "iterations: 7227\ncpu: 96942.7978414264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96935.39004149019,
            "unit": "ns/iter",
            "extra": "iterations: 7230\ncpu: 96933.73443983398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92990.95037253808,
            "unit": "ns/iter",
            "extra": "iterations: 7516\ncpu: 92988.10537520048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 171334.9963271226,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 171330.7051909875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 574613.785714296,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 574598.5221674865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 473849.63090420736,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 473846.6261808301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 471004.8387097391,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 470997.58064515726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 468645.99464880186,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 468633.1103678877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 299543.7430406578,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 299533.74732334405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 463074.75132628693,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 463065.7824933674 ns\nthreads: 1"
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
        "date": 1702489557852,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8248.37628835411,
            "unit": "ns/iter",
            "extra": "iterations: 84313\ncpu: 8248.002087459823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59401.96739999237,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59402.179999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109483.30382652042,
            "unit": "ns/iter",
            "extra": "iterations: 7840\ncpu: 109476.39030612248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159011.50296078328,
            "unit": "ns/iter",
            "extra": "iterations: 5404\ncpu: 159004.052553664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 207908.06194477834,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 207897.88715486196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 258976.3767552853,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 258973.438900508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308130.31225577166,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 308123.55239786836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 362810.7155774663,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 362790.1356350185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 404992.86595049856,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 404976.13264829526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6765.132957948914,
            "unit": "ns/iter",
            "extra": "iterations: 103183\ncpu: 6764.819786205091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5676.158100649196,
            "unit": "ns/iter",
            "extra": "iterations: 123200\ncpu: 5675.707792207794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5654.1346817356025,
            "unit": "ns/iter",
            "extra": "iterations: 124048\ncpu: 5654.000870630723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5578.189335171495,
            "unit": "ns/iter",
            "extra": "iterations: 124784\ncpu: 5577.909828183098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9718.49388515185,
            "unit": "ns/iter",
            "extra": "iterations: 71956\ncpu: 9717.71082328089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29202.20430954445,
            "unit": "ns/iter",
            "extra": "iterations: 27938\ncpu: 29201.38878946235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 155865.52151714047,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 155859.60977388767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 120670.18875106562,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 120664.39244431944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 123626.08390088593,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 123620.12751775136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 116320.6435602911,
            "unit": "ns/iter",
            "extra": "iterations: 7314\ncpu: 116318.43040743792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 370660.2236220318,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 370645.9842519694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1935283.9189188383,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1935163.2016632003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1523593.7368421939,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1523541.2828947394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1526644.0164474205,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1526577.796052627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1497645.5815832065,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1497572.859450727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 846202.7348623826,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 846154.2201834851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1473729.0907644466,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1473657.0063694273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38224.04062598319,
            "unit": "ns/iter",
            "extra": "iterations: 22301\ncpu: 38222.519169543986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 210975.7476908244,
            "unit": "ns/iter",
            "extra": "iterations: 4114\ncpu: 210963.73359261098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 151163.37046768767,
            "unit": "ns/iter",
            "extra": "iterations: 5709\ncpu: 151150.63934139043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 148294.78050042395,
            "unit": "ns/iter",
            "extra": "iterations: 5795\ncpu: 148288.88697152684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 146951.25720659178,
            "unit": "ns/iter",
            "extra": "iterations: 5828\ncpu: 146940.63143445406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 318889.8785872052,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 318872.84768212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2003625.0472101378,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 2001397.854077263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1572568.6159053058,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1572513.536379018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1593932.9468268529,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1593899.3138936465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1537871.271959584,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1537769.425675685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 870101.2389877194,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 870087.0665417082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1511830.8485342013,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1511771.9869706794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5347380.9899992375,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5347170.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3182439.593856869,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3182287.372013651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30254.44386854884,
            "unit": "ns/iter",
            "extra": "iterations: 27204\ncpu: 30253.539920599786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 147606.91715468408,
            "unit": "ns/iter",
            "extra": "iterations: 5806\ncpu: 147600.37891836025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 119868.19034290215,
            "unit": "ns/iter",
            "extra": "iterations: 7145\ncpu: 119865.93421973343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 119505.25813660983,
            "unit": "ns/iter",
            "extra": "iterations: 7159\ncpu: 119499.59491549095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 114682.43855648322,
            "unit": "ns/iter",
            "extra": "iterations: 7454\ncpu: 114679.13871746686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 285212.71381579613,
            "unit": "ns/iter",
            "extra": "iterations: 3040\ncpu: 285205.7236842115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1923767.8556701492,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1923737.7319587634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1519068.6229508903,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1519002.1311475383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1518742.5293159527,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1518699.674267094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1493355.540930955,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1493333.2263242377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 827789.573843331,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 827771.7081850544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1456926.0392464874,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1456873.783359505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3127.4017888226153,
            "unit": "ns/iter",
            "extra": "iterations: 224058\ncpu: 3127.407189209954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20732.939636816292,
            "unit": "ns/iter",
            "extra": "iterations: 33812\ncpu: 20732.387909617853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16262.106678756127,
            "unit": "ns/iter",
            "extra": "iterations: 43017\ncpu: 16261.87088825344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16552.58544580047,
            "unit": "ns/iter",
            "extra": "iterations: 42407\ncpu: 16551.710802461872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12095.070635825634,
            "unit": "ns/iter",
            "extra": "iterations: 57846\ncpu: 12094.727379594033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103511.66903703618,
            "unit": "ns/iter",
            "extra": "iterations: 6750\ncpu: 103508.84444444462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135586.53298408116,
            "unit": "ns/iter",
            "extra": "iterations: 5154\ncpu: 135584.2258440041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33383.69925565488,
            "unit": "ns/iter",
            "extra": "iterations: 20958\ncpu: 33382.32655787753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32438.154739776488,
            "unit": "ns/iter",
            "extra": "iterations: 21520\ncpu: 32437.174721189593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32940.99458900026,
            "unit": "ns/iter",
            "extra": "iterations: 21253\ncpu: 32940.5025172918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65234.452807312846,
            "unit": "ns/iter",
            "extra": "iterations: 10722\ncpu: 65233.56649878755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61198.61911429763,
            "unit": "ns/iter",
            "extra": "iterations: 11426\ncpu: 61198.71346052836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23876.88122774273,
            "unit": "ns/iter",
            "extra": "iterations: 29485\ncpu: 23875.696116669686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 118412.26377154785,
            "unit": "ns/iter",
            "extra": "iterations: 5918\ncpu: 118410.47651233424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94846.56039248692,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 94843.96075179699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95632.06080065586,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 95628.0776062304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94182.23187433343,
            "unit": "ns/iter",
            "extra": "iterations: 7448\ncpu: 94181.52524167582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169802.56069783136,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 169797.57693239895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 576749.6515651091,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 576741.0214168008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 470671.53234506794,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 470656.8059299186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 475120.20680278825,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 475110.0000000057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 467302.1374249148,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 467284.0560373534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 307475.1742756462,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 307473.0904302027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 463992.153540683,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 463958.3719391116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23777.538440642682,
            "unit": "ns/iter",
            "extra": "iterations: 29448\ncpu: 23777.01711491434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120130.64965634984,
            "unit": "ns/iter",
            "extra": "iterations: 5820\ncpu: 120128.3676975953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96945.02933444001,
            "unit": "ns/iter",
            "extra": "iterations: 7227\ncpu: 96942.7978414264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96935.39004149019,
            "unit": "ns/iter",
            "extra": "iterations: 7230\ncpu: 96933.73443983398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92990.95037253808,
            "unit": "ns/iter",
            "extra": "iterations: 7516\ncpu: 92988.10537520048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 171334.9963271226,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 171330.7051909875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 574613.785714296,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 574598.5221674865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 473849.63090420736,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 473846.6261808301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 471004.8387097391,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 470997.58064515726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 468645.99464880186,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 468633.1103678877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 299543.7430406578,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 299533.74732334405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 463074.75132628693,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 463065.7824933674 ns\nthreads: 1"
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
        "date": 1702492183629,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8184.179859566175,
            "unit": "ns/iter",
            "extra": "iterations: 85450\ncpu: 8184.194265652428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60146.40560000543,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60139.23999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 108810.98871846391,
            "unit": "ns/iter",
            "extra": "iterations: 7889\ncpu: 108808.03650652811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 156647.34406842795,
            "unit": "ns/iter",
            "extra": "iterations: 5496\ncpu: 156641.1026200873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 206640.91008823508,
            "unit": "ns/iter",
            "extra": "iterations: 4193\ncpu: 206640.9730503219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 255063.59958751232,
            "unit": "ns/iter",
            "extra": "iterations: 3394\ncpu: 255055.92221567457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 304102.53576436854,
            "unit": "ns/iter",
            "extra": "iterations: 2852\ncpu: 304098.3520336606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 354843.53553922457,
            "unit": "ns/iter",
            "extra": "iterations: 2448\ncpu: 354835.3349673204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 403520.98889406875,
            "unit": "ns/iter",
            "extra": "iterations: 2161\ncpu: 403511.8463674219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6717.208589892379,
            "unit": "ns/iter",
            "extra": "iterations: 104914\ncpu: 6717.114017195026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5528.840582798636,
            "unit": "ns/iter",
            "extra": "iterations: 126699\ncpu: 5528.7255621591285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5505.083047589365,
            "unit": "ns/iter",
            "extra": "iterations: 127445\ncpu: 5504.919769312249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5488.080926039541,
            "unit": "ns/iter",
            "extra": "iterations: 126906\ncpu: 5487.950136321376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9581.086045175522,
            "unit": "ns/iter",
            "extra": "iterations: 73136\ncpu: 9580.980638809882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28938.948665008993,
            "unit": "ns/iter",
            "extra": "iterations: 28090\ncpu: 28937.33713065149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148925.17943374676,
            "unit": "ns/iter",
            "extra": "iterations: 5757\ncpu: 148920.54889699476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115163.66829201936,
            "unit": "ns/iter",
            "extra": "iterations: 7383\ncpu: 115161.27590410411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116441.17415040269,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 116438.91087757605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 112326.50639686895,
            "unit": "ns/iter",
            "extra": "iterations: 7660\ncpu: 112263.57702349879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 361436.713958802,
            "unit": "ns/iter",
            "extra": "iterations: 2622\ncpu: 361421.70099160844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1891292.627049302,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1891201.2295081965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1498740.0466990022,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1498679.8711755252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1495830.7702266693,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1495731.7152103574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1486226.6948882597,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1486156.5495207643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 845813.067641721,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 845770.0182815363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1448488.9999999162,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1448456.6302652087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36832.06413694334,
            "unit": "ns/iter",
            "extra": "iterations: 22374\ncpu: 36829.999106105235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 185265.72633833546,
            "unit": "ns/iter",
            "extra": "iterations: 4670\ncpu: 185255.84582441102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 143619.6733500327,
            "unit": "ns/iter",
            "extra": "iterations: 5985\ncpu: 143615.45530492946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 143158.44340880125,
            "unit": "ns/iter",
            "extra": "iterations: 6008\ncpu: 143150.28295605865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 138594.46775496274,
            "unit": "ns/iter",
            "extra": "iterations: 6187\ncpu: 138584.03103281095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 321878.1879419568,
            "unit": "ns/iter",
            "extra": "iterations: 2687\ncpu: 321866.8403423887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1942331.9331942874,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1942245.7202505232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1543415.9949832202,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1543317.892976595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1568630.6172007236,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1568552.2765598667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1509740.4918566863,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1509704.7231270361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 869721.6891385517,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 869718.1647940101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1486070.3852327992,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1485974.6388443038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5336256.030000186,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5336128.999999943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3285712.2394366628,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3285525.7042253483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30000.32120658192,
            "unit": "ns/iter",
            "extra": "iterations: 27350\ncpu: 29999.524680073126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140461.3298901543,
            "unit": "ns/iter",
            "extra": "iterations: 6099\ncpu: 140456.56665027098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 113903.53216998426,
            "unit": "ns/iter",
            "extra": "iterations: 7507\ncpu: 113900.63940322389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112288.57908565673,
            "unit": "ns/iter",
            "extra": "iterations: 7612\ncpu: 112280.67524960596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108404.0532063487,
            "unit": "ns/iter",
            "extra": "iterations: 7875\ncpu: 108400.87619047583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 274386.62899651116,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 274375.9100981328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1897269.7759672161,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1897230.1425661878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1477772.243286081,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1477684.5181674557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1484663.929712321,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1484609.2651757216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1475340.3138210773,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1475261.6260162685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 824961.2562056319,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 824932.0921985802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1439834.5302326083,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1439769.7674418618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3141.9925901472307,
            "unit": "ns/iter",
            "extra": "iterations: 224161\ncpu: 3141.8226185643634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20449.740389112605,
            "unit": "ns/iter",
            "extra": "iterations: 34232\ncpu: 20447.917153540577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14900.805436704923,
            "unit": "ns/iter",
            "extra": "iterations: 46977\ncpu: 14900.33633480201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16275.991028591303,
            "unit": "ns/iter",
            "extra": "iterations: 46481\ncpu: 16275.800864869496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11895.241496946735,
            "unit": "ns/iter",
            "extra": "iterations: 58626\ncpu: 11895.312659911922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 102579.14369502851,
            "unit": "ns/iter",
            "extra": "iterations: 6820\ncpu: 102573.73900293157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 132567.54917567217,
            "unit": "ns/iter",
            "extra": "iterations: 5277\ncpu: 132560.12886109482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32266.423018395497,
            "unit": "ns/iter",
            "extra": "iterations: 21687\ncpu: 32264.347304836934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33056.003286850166,
            "unit": "ns/iter",
            "extra": "iterations: 21297\ncpu: 33054.83401418033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32190.661587887244,
            "unit": "ns/iter",
            "extra": "iterations: 21790\ncpu: 32188.893988067714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66798.59014204967,
            "unit": "ns/iter",
            "extra": "iterations: 10489\ncpu: 66791.715130136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60509.97217902117,
            "unit": "ns/iter",
            "extra": "iterations: 11574\ncpu: 60508.7696561256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23869.25364620566,
            "unit": "ns/iter",
            "extra": "iterations: 29277\ncpu: 23868.644328312224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 118288.36111579949,
            "unit": "ns/iter",
            "extra": "iterations: 5915\ncpu: 118287.43871513101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94933.4770442788,
            "unit": "ns/iter",
            "extra": "iterations: 7362\ncpu: 94931.7576745458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96492.28577331113,
            "unit": "ns/iter",
            "extra": "iterations: 7261\ncpu: 96490.2768213748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96058.80430314863,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 96059.28463752221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 168443.79870131126,
            "unit": "ns/iter",
            "extra": "iterations: 4158\ncpu: 168444.30014430036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 571931.7292862599,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 571916.0787530757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 475625.60474573926,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 475616.8135593251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 472209.95500337007,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 472201.0073875078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 463578.7499999408,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 463571.36243386404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 312149.88041052385,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 312142.614904058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 460242.9815425592,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 460231.31179960974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23612.42619191951,
            "unit": "ns/iter",
            "extra": "iterations: 29658\ncpu: 23611.99001955631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120592.30645718108,
            "unit": "ns/iter",
            "extra": "iterations: 5792\ncpu: 120591.45372928174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96929.85823066153,
            "unit": "ns/iter",
            "extra": "iterations: 7223\ncpu: 96928.57538419009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97518.28173672524,
            "unit": "ns/iter",
            "extra": "iterations: 7255\ncpu: 97513.71467953033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93015.20527082871,
            "unit": "ns/iter",
            "extra": "iterations: 7551\ncpu: 93012.84598066569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 171258.17882582682,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 171253.42667649125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 571238.3704918488,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 571239.0983606568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 468731.6503355644,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 468702.41610738257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 472792.9279891031,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 472778.60054347705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 463793.5212201682,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 463794.4297082176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 308419.426048573,
            "unit": "ns/iter",
            "extra": "iterations: 2265\ncpu: 308413.289183225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 461079.86481108516,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 461071.96819085034 ns\nthreads: 1"
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
        "date": 1702503230931,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8353.653086903758,
            "unit": "ns/iter",
            "extra": "iterations: 84243\ncpu: 8353.130823926023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59611.048299996124,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59605.40999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110121.48317059902,
            "unit": "ns/iter",
            "extra": "iterations: 7784\ncpu: 110113.87461459405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160258.5976132777,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 160251.16539250422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 211743.74749807589,
            "unit": "ns/iter",
            "extra": "iterations: 3897\ncpu: 211735.74544521424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 260523.2118285805,
            "unit": "ns/iter",
            "extra": "iterations: 3314\ncpu: 260508.63005431488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 311422.8183123741,
            "unit": "ns/iter",
            "extra": "iterations: 2785\ncpu: 311409.6588868941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 361025.9734439834,
            "unit": "ns/iter",
            "extra": "iterations: 2410\ncpu: 360996.2655601661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 410332.8403202553,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 410307.2538860109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6868.802774723273,
            "unit": "ns/iter",
            "extra": "iterations: 101848\ncpu: 6868.185924122215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5661.290397538411,
            "unit": "ns/iter",
            "extra": "iterations: 123510\ncpu: 5660.997490081782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5589.9073354431275,
            "unit": "ns/iter",
            "extra": "iterations: 124805\ncpu: 5589.53086815432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5515.989590854257,
            "unit": "ns/iter",
            "extra": "iterations: 126043\ncpu: 5515.901716081011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9523.193996793521,
            "unit": "ns/iter",
            "extra": "iterations: 73594\ncpu: 9522.954316928011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29939.405271828236,
            "unit": "ns/iter",
            "extra": "iterations: 27315\ncpu: 29937.85465861252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 162171.6536207256,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 162163.3768198147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 124683.71170647466,
            "unit": "ns/iter",
            "extra": "iterations: 6868\ncpu: 124678.33430401838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 125894.83703159523,
            "unit": "ns/iter",
            "extra": "iterations: 6805\ncpu: 125885.21675238792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 118449.26849542238,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 118447.35383762792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 360299.4858993833,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 360284.71798780403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1921593.263048185,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1921557.8288100238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1528761.179276472,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1528690.296052632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1506673.955810076,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1506645.3355155454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1489043.9406100125,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1488975.76243981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 847919.363886385,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 847902.9330889075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1474418.3706069614,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1474340.4153354666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37447.950803302905,
            "unit": "ns/iter",
            "extra": "iterations: 22034\ncpu: 37446.13324861571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 198854.8951319498,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 198836.01000909918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 150884.55802555548,
            "unit": "ns/iter",
            "extra": "iterations: 5713\ncpu: 150878.06756520216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 154368.07733812425,
            "unit": "ns/iter",
            "extra": "iterations: 5560\ncpu: 154357.6978417271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 148555.31356226275,
            "unit": "ns/iter",
            "extra": "iterations: 5766\ncpu: 148544.91848768646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 312477.7061372126,
            "unit": "ns/iter",
            "extra": "iterations: 2770\ncpu: 312455.81227436796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1978023.7346072884,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1977914.2250530708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1553990.0369128797,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1553879.3624161032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1557232.9544688137,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1557145.1939291726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1513809.2345277288,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1513728.3387622056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 880226.6214420653,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 880179.4117647072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1506839.8766232631,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1506706.331168834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5435244.04999971,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5434939.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3250436.7979094596,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3250217.421602798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30378.15913803497,
            "unit": "ns/iter",
            "extra": "iterations: 27008\ncpu: 30376.632849526017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 152993.69870314738,
            "unit": "ns/iter",
            "extra": "iterations: 5629\ncpu: 152984.9173920777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 123196.27060675614,
            "unit": "ns/iter",
            "extra": "iterations: 6988\ncpu: 123188.27990841438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 121822.26415897979,
            "unit": "ns/iter",
            "extra": "iterations: 7045\ncpu: 121814.71965933322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 116691.33958417438,
            "unit": "ns/iter",
            "extra": "iterations: 7359\ncpu: 116683.74779181943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 276025.17832166026,
            "unit": "ns/iter",
            "extra": "iterations: 3146\ncpu: 276004.95867768547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1941067.082987613,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1940955.3941908604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1514826.0423452025,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1514752.931596101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1502925.1631663593,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1502810.662358647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1475709.7420885968,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1475618.1962025296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 835778.1909910602,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 835734.234234232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1466834.9544025366,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1466744.0251572323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3190.585790518075,
            "unit": "ns/iter",
            "extra": "iterations: 219628\ncpu: 3190.396488607988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20880.50960373996,
            "unit": "ns/iter",
            "extra": "iterations: 34674\ncpu: 20879.12556959112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15669.968425287378,
            "unit": "ns/iter",
            "extra": "iterations: 44751\ncpu: 15669.066613036666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16376.204468200527,
            "unit": "ns/iter",
            "extra": "iterations: 42657\ncpu: 16375.694493283616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11990.951871291249,
            "unit": "ns/iter",
            "extra": "iterations: 58302\ncpu: 11990.6298240197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 107365.66636029897,
            "unit": "ns/iter",
            "extra": "iterations: 6528\ncpu: 107356.51041666609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 137186.86495492427,
            "unit": "ns/iter",
            "extra": "iterations: 5102\ncpu: 137180.88984711855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33345.91000333166,
            "unit": "ns/iter",
            "extra": "iterations: 21023\ncpu: 33343.0766303573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33058.5825371296,
            "unit": "ns/iter",
            "extra": "iterations: 21142\ncpu: 33057.79964052577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32808.65792191025,
            "unit": "ns/iter",
            "extra": "iterations: 21308\ncpu: 32808.0673925286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66644.05536496907,
            "unit": "ns/iter",
            "extra": "iterations: 10494\ncpu: 66642.43377167925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62239.73514234782,
            "unit": "ns/iter",
            "extra": "iterations: 11240\ncpu: 62235.48042704635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24199.40776766321,
            "unit": "ns/iter",
            "extra": "iterations: 28889\ncpu: 24198.881927377144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120643.34401378225,
            "unit": "ns/iter",
            "extra": "iterations: 5805\ncpu: 120640.94745908803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96289.76822737078,
            "unit": "ns/iter",
            "extra": "iterations: 7283\ncpu: 96288.4250995477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97539.42347862474,
            "unit": "ns/iter",
            "extra": "iterations: 7181\ncpu: 97538.44868402639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95942.22542162886,
            "unit": "ns/iter",
            "extra": "iterations: 7293\ncpu: 95938.406691348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169046.50446321227,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 169041.56815440176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 585282.2755443894,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 585246.2311557818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 477075.53720143624,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 477058.4982935103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 476882.7357974111,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 476875.49623545917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 469725.96024252404,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 469704.71698113746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 311517.76232786657,
            "unit": "ns/iter",
            "extra": "iterations: 2251\ncpu: 311513.41625944176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 467841.2372994781,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 467816.3101604229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24053.958863691834,
            "unit": "ns/iter",
            "extra": "iterations: 29147\ncpu: 24054.015850687767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 122918.27132327025,
            "unit": "ns/iter",
            "extra": "iterations: 5698\ncpu: 122913.75921375767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 98547.7758257195,
            "unit": "ns/iter",
            "extra": "iterations: 7115\ncpu: 98546.7182009829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97747.08222810473,
            "unit": "ns/iter",
            "extra": "iterations: 7163\ncpu: 97744.00390897684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93934.00282675562,
            "unit": "ns/iter",
            "extra": "iterations: 7429\ncpu: 93925.45430071189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 167639.1962750619,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 167627.72206303672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 579546.4260941932,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 579541.7836498825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 475323.9087221105,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 475295.60513859877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 474920.0969491401,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 474889.69491525297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 462531.0206942661,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 462510.9479305687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 303122.13914178236,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 303096.9657563972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 462683.96947579016,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 462661.31386861147 ns\nthreads: 1"
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
        "date": 1705574875228,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8128.533703373246,
            "unit": "ns/iter",
            "extra": "iterations: 86297\ncpu: 8128.179426863043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59838.6651999931,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59837.29999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109731.58803222248,
            "unit": "ns/iter",
            "extra": "iterations: 7821\ncpu: 109727.63073775731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 164084.3494893326,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 164082.469823584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 208778.0258843999,
            "unit": "ns/iter",
            "extra": "iterations: 3477\ncpu: 208770.808167961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 259523.6402877905,
            "unit": "ns/iter",
            "extra": "iterations: 3336\ncpu: 259518.82494004807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 310118.95098393934,
            "unit": "ns/iter",
            "extra": "iterations: 2795\ncpu: 310118.03220035776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 359891.37567231595,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 359876.99627637543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 408597.9119585568,
            "unit": "ns/iter",
            "extra": "iterations: 2124\ncpu: 408586.1581920903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6665.7681129045595,
            "unit": "ns/iter",
            "extra": "iterations: 104939\ncpu: 6665.578097752023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5479.212585767544,
            "unit": "ns/iter",
            "extra": "iterations: 127525\ncpu: 5479.155459713783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5439.256797748118,
            "unit": "ns/iter",
            "extra": "iterations: 128241\ncpu: 5438.794925179938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5429.82577645545,
            "unit": "ns/iter",
            "extra": "iterations: 128404\ncpu: 5429.661848540551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9459.257222387378,
            "unit": "ns/iter",
            "extra": "iterations: 74006\ncpu: 9458.956030592111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30206.414367709414,
            "unit": "ns/iter",
            "extra": "iterations: 27005\ncpu: 30205.09164969451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 169150.79305610622,
            "unit": "ns/iter",
            "extra": "iterations: 5098\ncpu: 169150.23538642612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 132660.4950215439,
            "unit": "ns/iter",
            "extra": "iterations: 6729\ncpu: 132657.30420567704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 126285.11825420422,
            "unit": "ns/iter",
            "extra": "iterations: 6782\ncpu: 126282.51253317611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 119450.71346745349,
            "unit": "ns/iter",
            "extra": "iterations: 7158\ncpu: 119447.6669460744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 360642.1629855395,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 360636.63366336684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1941020.0968420547,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1940931.1578947396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1539524.988313819,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1539490.3171953259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1524691.9388428894,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1524650.2479338842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1517714.3017944458,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1517695.2691680258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 840271.0617059721,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 840223.3212341181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1480502.7243590476,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1480495.0320512822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37552.54325717318,
            "unit": "ns/iter",
            "extra": "iterations: 21927\ncpu: 37552.12751402379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 201359.7422489571,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 201355.46043498375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 151874.92416812832,
            "unit": "ns/iter",
            "extra": "iterations: 5710\ncpu: 151870.64798598946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 155571.67152102347,
            "unit": "ns/iter",
            "extra": "iterations: 5562\ncpu: 155569.56130888147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 146679.3752989408,
            "unit": "ns/iter",
            "extra": "iterations: 5854\ncpu: 146676.973009908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 312823.11302474694,
            "unit": "ns/iter",
            "extra": "iterations: 2787\ncpu: 312812.4506637954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1976911.4713376737,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1976839.0658174118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1579907.5517826895,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1579856.7062818317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1571913.3316326244,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1571906.9727891225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1542826.8026534158,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1542763.0182421287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 857618.7636195681,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 857595.6602031398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1510970.8975609376,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1510940.4878048773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5324383.130000569,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5324361.000000053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3202454.591065077,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3202312.027491411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30760.20812125829,
            "unit": "ns/iter",
            "extra": "iterations: 26720\ncpu: 30759.22529940112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 155299.76911950845,
            "unit": "ns/iter",
            "extra": "iterations: 5531\ncpu: 155288.44693545526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 123009.14874501935,
            "unit": "ns/iter",
            "extra": "iterations: 7012\ncpu: 123004.97718197329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 124406.57215153267,
            "unit": "ns/iter",
            "extra": "iterations: 6916\ncpu: 124395.0260266046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 117655.14207123686,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 117647.18745702037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 274185.45508983807,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 274171.4465805228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1938393.6937501288,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1938311.8749999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1525905.300653572,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1525775.9803921503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1523370.7210440736,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1523271.7781402953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1491414.6945337818,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1491354.1800643136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 827358.1593945016,
            "unit": "ns/iter",
            "extra": "iterations: 1123\ncpu: 827349.5102404272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1471436.9428572485,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1471333.4920634856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3189.803549302132,
            "unit": "ns/iter",
            "extra": "iterations: 220325\ncpu: 3189.761034834914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20698.768391805548,
            "unit": "ns/iter",
            "extra": "iterations: 33833\ncpu: 20697.874855910002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15709.729484032878,
            "unit": "ns/iter",
            "extra": "iterations: 44441\ncpu: 15709.71850318399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16392.91725548015,
            "unit": "ns/iter",
            "extra": "iterations: 44015\ncpu: 16391.980006815913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11982.528599808373,
            "unit": "ns/iter",
            "extra": "iterations: 58392\ncpu: 11982.381148102384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 100919.6924074219,
            "unit": "ns/iter",
            "extra": "iterations: 6941\ncpu: 100917.07246794393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135437.40675023815,
            "unit": "ns/iter",
            "extra": "iterations: 5185\ncpu: 135435.33269045412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33355.394226193894,
            "unit": "ns/iter",
            "extra": "iterations: 21026\ncpu: 33354.489679444625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32765.456496279494,
            "unit": "ns/iter",
            "extra": "iterations: 21343\ncpu: 32764.681628636867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32875.58399811101,
            "unit": "ns/iter",
            "extra": "iterations: 21185\ncpu: 32874.61411375963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65939.30479871958,
            "unit": "ns/iter",
            "extra": "iterations: 10607\ncpu: 65938.0880550582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61406.90888302479,
            "unit": "ns/iter",
            "extra": "iterations: 11370\ncpu: 61405.60246262087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23662.78765524133,
            "unit": "ns/iter",
            "extra": "iterations: 29551\ncpu: 23661.676423809626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119468.66300428942,
            "unit": "ns/iter",
            "extra": "iterations: 5825\ncpu: 119467.09012875333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97035.24840940478,
            "unit": "ns/iter",
            "extra": "iterations: 7230\ncpu: 97032.26832641732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96734.55623184594,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 96734.38926545902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95981.87946855277,
            "unit": "ns/iter",
            "extra": "iterations: 7301\ncpu: 95981.59156279863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 165752.22222221046,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 165746.83215129943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 586277.0750625675,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 586267.0558799012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 480606.3335626154,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 480597.7991746955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 479412.6828434351,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 479411.7566643837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 471485.3740765547,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 471475.8898589712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 304858.0230334462,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 304847.06649282697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 468320.74749496824,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 468297.39478957356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23976.083766055806,
            "unit": "ns/iter",
            "extra": "iterations: 29272\ncpu: 23974.30650450947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120345.93972366612,
            "unit": "ns/iter",
            "extra": "iterations: 5790\ncpu: 120344.35233160529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97244.87796750866,
            "unit": "ns/iter",
            "extra": "iterations: 7203\ncpu: 97237.09565458866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97893.12435232999,
            "unit": "ns/iter",
            "extra": "iterations: 7141\ncpu: 97887.43873407194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94156.98737916892,
            "unit": "ns/iter",
            "extra": "iterations: 7448\ncpu: 94150.99355531705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 167453.95784432377,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 167441.14970059812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 574834.9555189463,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 574823.8056013208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 480641.0351239217,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 480611.84573002625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 477179.7843003706,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 477153.31058020674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 472513.37870613125,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 472484.77088948974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 302533.7453523213,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 302510.0734976177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 465275.73141326447,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 465269.5914266496 ns\nthreads: 1"
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
        "date": 1705772698386,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8543.528412834095,
            "unit": "ns/iter",
            "extra": "iterations: 83501\ncpu: 8543.009065759692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61030.3154323641,
            "unit": "ns/iter",
            "extra": "iterations: 13854\ncpu: 61026.80814205285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 113331.34130634514,
            "unit": "ns/iter",
            "extra": "iterations: 7609\ncpu: 113325.36469969769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 164320.6128601303,
            "unit": "ns/iter",
            "extra": "iterations: 5241\ncpu: 164312.89830185083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 216265.29780329746,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 216258.16275586613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 267975.76896977145,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 267969.92597162223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 318703.8294117549,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 318701.9117647059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 370068.3436967734,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 370064.05451448035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 419306.7242877785,
            "unit": "ns/iter",
            "extra": "iterations: 2071\ncpu: 419290.82568807364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6924.318269259062,
            "unit": "ns/iter",
            "extra": "iterations: 101367\ncpu: 6924.2781181252285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5726.46697516532,
            "unit": "ns/iter",
            "extra": "iterations: 122529\ncpu: 5726.43374221613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5728.886706213412,
            "unit": "ns/iter",
            "extra": "iterations: 123396\ncpu: 5728.753768355544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5627.590909091046,
            "unit": "ns/iter",
            "extra": "iterations: 123970\ncpu: 5627.28482697427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9910.868138710886,
            "unit": "ns/iter",
            "extra": "iterations: 70650\ncpu: 9910.271762208064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29256.65873443288,
            "unit": "ns/iter",
            "extra": "iterations: 27861\ncpu: 29255.32823660319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148672.45033917247,
            "unit": "ns/iter",
            "extra": "iterations: 5749\ncpu: 148665.64619933907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 117509.08496282183,
            "unit": "ns/iter",
            "extra": "iterations: 7262\ncpu: 117502.18947948208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116692.62101211249,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 116688.118811881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 114192.9890520693,
            "unit": "ns/iter",
            "extra": "iterations: 7490\ncpu: 114188.7182910551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 365457.130787038,
            "unit": "ns/iter",
            "extra": "iterations: 2592\ncpu: 365437.65432098764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1988592.2829372615,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 1988476.2419006499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1600007.967241403,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1599941.3793103474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1573036.4332191367,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1572976.3698630154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1551865.457143039,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1551768.9075630223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 868580.8549905717,
            "unit": "ns/iter",
            "extra": "iterations: 1062\ncpu: 868524.6704331442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1554463.8729372937,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1554347.0297029698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36999.69890683402,
            "unit": "ns/iter",
            "extra": "iterations: 22229\ncpu: 36999.50964955685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 186817.91475054724,
            "unit": "ns/iter",
            "extra": "iterations: 4610\ncpu: 186812.47288503265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145380.25418287626,
            "unit": "ns/iter",
            "extra": "iterations: 5917\ncpu: 145375.8154470174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 146424.00513434605,
            "unit": "ns/iter",
            "extra": "iterations: 5843\ncpu: 146420.99948656542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 142825.09675258325,
            "unit": "ns/iter",
            "extra": "iterations: 5974\ncpu: 142822.71509876108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 319102.85340703215,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 319095.65377532196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2039425.9321663538,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2039370.2407002107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1623380.1368421635,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1623360.3508771847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1633996.290493055,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1633960.2112676012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1585323.897959246,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1585280.1020408198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 881554.8024691972,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 881526.6856600179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1561541.3198651772,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1561512.289562281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5382493.099999692,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5382330.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3209989.6068965285,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3209881.7241379498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30191.226229869,
            "unit": "ns/iter",
            "extra": "iterations: 27198\ncpu: 30190.34487829991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 141253.4414429205,
            "unit": "ns/iter",
            "extra": "iterations: 6071\ncpu: 141250.0411793773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114878.66979612815,
            "unit": "ns/iter",
            "extra": "iterations: 7456\ncpu: 114876.48873390556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113681.83162108487,
            "unit": "ns/iter",
            "extra": "iterations: 7495\ncpu: 113680.32021347515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 111653.10655524694,
            "unit": "ns/iter",
            "extra": "iterations: 7658\ncpu: 111650.99242622084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 275761.8778698836,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 275751.1798469376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2004910.3133047624,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 2004839.055793992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1591213.2453152617,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1591145.144804092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1568526.1785714594,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1568421.2585034093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1569660.3946038058,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1569611.6357504134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 846144.7358834991,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 846103.1876138389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1509289.1544715557,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1509198.373983738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3140.952497195274,
            "unit": "ns/iter",
            "extra": "iterations: 222850\ncpu: 3140.761498766008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20550.15157912989,
            "unit": "ns/iter",
            "extra": "iterations: 34101\ncpu: 20548.7522360048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15842.35134094341,
            "unit": "ns/iter",
            "extra": "iterations: 44148\ncpu: 15841.200054362658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16460.942290639236,
            "unit": "ns/iter",
            "extra": "iterations: 43979\ncpu: 16459.84674503735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11469.940889452613,
            "unit": "ns/iter",
            "extra": "iterations: 60869\ncpu: 11469.762933512919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 100519.44568803516,
            "unit": "ns/iter",
            "extra": "iterations: 6969\ncpu: 100517.69263882865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 138551.18219830797,
            "unit": "ns/iter",
            "extra": "iterations: 5022\ncpu: 138543.58821186735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34388.90252282152,
            "unit": "ns/iter",
            "extra": "iterations: 20374\ncpu: 34387.704918032796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33861.32950930278,
            "unit": "ns/iter",
            "extra": "iterations: 20746\ncpu: 33860.59481345797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33472.116805834885,
            "unit": "ns/iter",
            "extra": "iterations: 20838\ncpu: 33471.153661579636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67240.2263497319,
            "unit": "ns/iter",
            "extra": "iterations: 10391\ncpu: 67236.31989221467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62358.73209501373,
            "unit": "ns/iter",
            "extra": "iterations: 11198\ncpu: 62354.01857474503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24200.571798414643,
            "unit": "ns/iter",
            "extra": "iterations: 28970\ncpu: 24198.684846392604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 121662.65635320097,
            "unit": "ns/iter",
            "extra": "iterations: 5753\ncpu: 121654.23257430879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 98443.91628102928,
            "unit": "ns/iter",
            "extra": "iterations: 7131\ncpu: 98439.77001823125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 98934.44427178803,
            "unit": "ns/iter",
            "extra": "iterations: 7079\ncpu: 98933.95959881217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 98515.44289142324,
            "unit": "ns/iter",
            "extra": "iterations: 7083\ncpu: 98508.41451362256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 167031.91523398485,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 167021.39446036017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 597428.3376288665,
            "unit": "ns/iter",
            "extra": "iterations: 1164\ncpu: 597382.3883161559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 494103.29340897506,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 494084.1956059618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 486293.18871866364,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 486279.38718662877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 488892.25644596637,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 488869.6864111472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 315043.59784555936,
            "unit": "ns/iter",
            "extra": "iterations: 2228\ncpu: 315033.70736086246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 480888.52505154046,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 480857.30954015674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24329.40847723762,
            "unit": "ns/iter",
            "extra": "iterations: 28665\ncpu: 24328.80167451565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 123531.74902449,
            "unit": "ns/iter",
            "extra": "iterations: 5638\ncpu: 123529.88648456866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 99563.38347667186,
            "unit": "ns/iter",
            "extra": "iterations: 7093\ncpu: 99562.75200902204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 99714.36035394255,
            "unit": "ns/iter",
            "extra": "iterations: 7007\ncpu: 99713.82902811452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95257.98487120077,
            "unit": "ns/iter",
            "extra": "iterations: 7337\ncpu: 95254.99522965701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 170028.66731328692,
            "unit": "ns/iter",
            "extra": "iterations: 4124\ncpu: 170024.68477206607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 595416.0886615248,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 595397.5277067353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 488802.3937062578,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 488791.8181818141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 489306.83812198776,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 489292.8521373479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 483596.20041460084,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 483582.79198341817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 306199.1126822493,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 306194.43216968887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 478564.7077028912,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 478546.4924346612 ns\nthreads: 1"
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
        "date": 1705774117126,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8180.875876005006,
            "unit": "ns/iter",
            "extra": "iterations: 85616\ncpu: 8180.173098486265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60073.673599993075,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60072.90000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110120.88146911691,
            "unit": "ns/iter",
            "extra": "iterations: 7787\ncpu: 110117.4007961988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159817.51373421808,
            "unit": "ns/iter",
            "extra": "iterations: 5388\ncpu: 159816.20267260578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210376.64877449442,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 210366.61764705874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 260832.22018073627,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 260830.54216867473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 309648.6058446253,
            "unit": "ns/iter",
            "extra": "iterations: 2806\ncpu: 309638.27512473287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 361572.80764435575,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 361558.49605317815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 410434.0520340889,
            "unit": "ns/iter",
            "extra": "iterations: 2114\ncpu: 410410.97445600724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6696.442862866488,
            "unit": "ns/iter",
            "extra": "iterations: 104818\ncpu: 6695.985422351117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5631.975544568617,
            "unit": "ns/iter",
            "extra": "iterations: 124594\ncpu: 5631.654012231728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5524.583970494364,
            "unit": "ns/iter",
            "extra": "iterations: 126080\ncpu: 5524.160850253798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5516.008329724397,
            "unit": "ns/iter",
            "extra": "iterations: 127015\ncpu: 5515.991811990709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9596.067761271477,
            "unit": "ns/iter",
            "extra": "iterations: 72903\ncpu: 9595.542021590341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29140.239454269467,
            "unit": "ns/iter",
            "extra": "iterations: 27926\ncpu: 29138.867005657805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149332.5395858712,
            "unit": "ns/iter",
            "extra": "iterations: 5747\ncpu: 149324.06472942416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 119308.65451242823,
            "unit": "ns/iter",
            "extra": "iterations: 7158\ncpu: 119304.05141100878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118580.99443903746,
            "unit": "ns/iter",
            "extra": "iterations: 7193\ncpu: 118574.64201306867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 115434.4769147279,
            "unit": "ns/iter",
            "extra": "iterations: 7364\ncpu: 115430.64910374815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 364605.6289332214,
            "unit": "ns/iter",
            "extra": "iterations: 2606\ncpu: 364582.46354566386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1936689.086134401,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1936616.1764705856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1536874.3029800546,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1536840.3973509984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1535782.9125412493,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1535767.161716171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1519367.6409836132,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1519290.983606558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 848885.3091076403,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 848843.2382704671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1478469.3907496978,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1478396.9696969728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36978.290100249586,
            "unit": "ns/iter",
            "extra": "iterations: 22344\ncpu: 36976.78571428565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 189909.92413945906,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 189900.81122560805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145521.62309515092,
            "unit": "ns/iter",
            "extra": "iterations: 5906\ncpu: 145514.7307822554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 147047.03147451647,
            "unit": "ns/iter",
            "extra": "iterations: 5846\ncpu: 147037.85494355124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 143857.10744357476,
            "unit": "ns/iter",
            "extra": "iterations: 5938\ncpu: 143849.44425732587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 305590.76598009455,
            "unit": "ns/iter",
            "extra": "iterations: 2816\ncpu: 305574.928977273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1974718.3326270527,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1974663.1355932164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1569467.6408094852,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1569441.4839797684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1570032.5177665288,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1569972.758037229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1554515.0250416263,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1554488.3138564324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 860075.5102230107,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 860051.7657992584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1509707.7115073458,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1509687.6823338694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5334086.249999927,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5333703.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3223623.1655172654,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3223557.2413793188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30094.584178051966,
            "unit": "ns/iter",
            "extra": "iterations: 27228\ncpu: 30092.610547965352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142266.02372656015,
            "unit": "ns/iter",
            "extra": "iterations: 6027\ncpu: 142260.09623361588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 117072.00518134836,
            "unit": "ns/iter",
            "extra": "iterations: 7334\ncpu: 117066.30760839891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 114197.81508222694,
            "unit": "ns/iter",
            "extra": "iterations: 7479\ncpu: 114192.28506484863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 114722.48330216498,
            "unit": "ns/iter",
            "extra": "iterations: 7486\ncpu: 114719.14239914579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 274677.17904762994,
            "unit": "ns/iter",
            "extra": "iterations: 3150\ncpu: 274665.36507936387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1942813.8586279606,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1942718.503118515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1521155.7977161256,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1521079.7716150102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1514364.0764226876,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1514266.8292682976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1506170.943273914,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1506103.727714746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 828355.7324444297,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 828289.1555555555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1467264.895569758,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1467218.196202538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3148.5407564381026,
            "unit": "ns/iter",
            "extra": "iterations: 223204\ncpu: 3148.496442716073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20492.068123240402,
            "unit": "ns/iter",
            "extra": "iterations: 34144\ncpu: 20492.02202436748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16201.723730349868,
            "unit": "ns/iter",
            "extra": "iterations: 43063\ncpu: 16201.37705222591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15888.987623199515,
            "unit": "ns/iter",
            "extra": "iterations: 44034\ncpu: 15888.347640459608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12071.926188383899,
            "unit": "ns/iter",
            "extra": "iterations: 57999\ncpu: 12071.204675942583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 101607.41908353208,
            "unit": "ns/iter",
            "extra": "iterations: 6896\ncpu: 101601.66763341107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136203.95075904758,
            "unit": "ns/iter",
            "extra": "iterations: 5138\ncpu: 136196.37991436446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33504.560563243285,
            "unit": "ns/iter",
            "extra": "iterations: 20879\ncpu: 33502.121749125894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33491.72474202255,
            "unit": "ns/iter",
            "extra": "iterations: 20835\ncpu: 33489.39764818798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33215.51566218945,
            "unit": "ns/iter",
            "extra": "iterations: 21006\ncpu: 33213.596115395485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67464.16490486226,
            "unit": "ns/iter",
            "extra": "iterations: 10406\ncpu: 67459.40803382672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61696.81519434219,
            "unit": "ns/iter",
            "extra": "iterations: 11320\ncpu: 61695.90106007066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24024.98415044718,
            "unit": "ns/iter",
            "extra": "iterations: 29086\ncpu: 24024.960462077815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117767.32738295,
            "unit": "ns/iter",
            "extra": "iterations: 5938\ncpu: 117764.92084877129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96363.12019826738,
            "unit": "ns/iter",
            "extra": "iterations: 7263\ncpu: 96359.08026986051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97333.69630965538,
            "unit": "ns/iter",
            "extra": "iterations: 7208\ncpu: 97328.35738068793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96669.09072108043,
            "unit": "ns/iter",
            "extra": "iterations: 7253\ncpu: 96662.08465462591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 166882.42195703983,
            "unit": "ns/iter",
            "extra": "iterations: 4190\ncpu: 166873.67541766245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 579680.539353808,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 579668.0198840161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 473972.987829653,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 473946.65314401605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 475898.3608457995,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 475865.48431105097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 474516.14644067653,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 474488.2033898294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 304334.0625543238,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 304318.54908774875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 466395.7175216274,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 466388.47435043374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23836.93756379512,
            "unit": "ns/iter",
            "extra": "iterations: 29390\ncpu: 23836.88329363712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119364.5815578558,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 119358.36032043694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96020.50363062552,
            "unit": "ns/iter",
            "extra": "iterations: 7299\ncpu: 96015.44047129608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97666.57124896756,
            "unit": "ns/iter",
            "extra": "iterations: 7158\ncpu: 97663.7468566634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94048.17114455818,
            "unit": "ns/iter",
            "extra": "iterations: 7444\ncpu: 94047.07146695373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 171426.8969325157,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 171420.3680981593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 581693.0529801722,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 581656.539735106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 473549.21031205374,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 473547.4219810074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 475348.0642325666,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 475340.7707910756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 471107.4996651405,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 471090.622906898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 307308.06488382973,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 307303.0688294592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 466909.284759345,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 466890.70855615253 ns\nthreads: 1"
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
        "date": 1705777679935,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8327.331139199077,
            "unit": "ns/iter",
            "extra": "iterations: 85683\ncpu: 8327.035701364332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59753.40170000436,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59751.59999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109919.9634224322,
            "unit": "ns/iter",
            "extra": "iterations: 7819\ncpu: 109916.60058831048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160095.85982874493,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 160091.43708116162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209921.6287787162,
            "unit": "ns/iter",
            "extra": "iterations: 4135\ncpu: 209916.83192261177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 260923.69064099164,
            "unit": "ns/iter",
            "extra": "iterations: 3323\ncpu: 260917.87541378272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 307868.4512673918,
            "unit": "ns/iter",
            "extra": "iterations: 2801\ncpu: 307858.9789360944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 360901.2612126289,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 360891.69435215933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 410989.1749271125,
            "unit": "ns/iter",
            "extra": "iterations: 2058\ncpu: 410963.1195335277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6699.5732250713645,
            "unit": "ns/iter",
            "extra": "iterations: 104807\ncpu: 6699.184214794806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5542.348585755694,
            "unit": "ns/iter",
            "extra": "iterations: 126428\ncpu: 5541.979624766662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5573.2599523394465,
            "unit": "ns/iter",
            "extra": "iterations: 125473\ncpu: 5572.8244323479985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5538.373561669922,
            "unit": "ns/iter",
            "extra": "iterations: 126188\ncpu: 5538.094747519582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9668.209908753699,
            "unit": "ns/iter",
            "extra": "iterations: 72441\ncpu: 9667.488024737377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29177.716188054255,
            "unit": "ns/iter",
            "extra": "iterations: 28311\ncpu: 29176.051711348904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 150483.8448943767,
            "unit": "ns/iter",
            "extra": "iterations: 5680\ncpu: 150472.94014084522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 114681.66554779613,
            "unit": "ns/iter",
            "extra": "iterations: 7448\ncpu: 114676.31578947391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113352.29455315588,
            "unit": "ns/iter",
            "extra": "iterations: 7564\ncpu: 113343.20465362276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108511.58666155433,
            "unit": "ns/iter",
            "extra": "iterations: 7812\ncpu: 108506.06758832587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 371974.1170712465,
            "unit": "ns/iter",
            "extra": "iterations: 2554\ncpu: 371944.8316366481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1957074.3199153158,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1956978.3898305136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1542408.0382695477,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1542306.9883527462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1558438.1882352992,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1558350.9243697454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1507724.327361668,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1507629.153094463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 849609.123275014,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 849558.5096596164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1491761.6276082855,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1491644.4622792897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36732.66998838076,
            "unit": "ns/iter",
            "extra": "iterations: 22378\ncpu: 36732.03592814359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 181621.0098760235,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 181618.13406177776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137981.08894966068,
            "unit": "ns/iter",
            "extra": "iterations: 6217\ncpu: 137977.72237413542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 140841.7074485418,
            "unit": "ns/iter",
            "extra": "iterations: 6122\ncpu: 140839.38255472062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 138345.53026635374,
            "unit": "ns/iter",
            "extra": "iterations: 6195\ncpu: 138341.67877320398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 316957.72465907625,
            "unit": "ns/iter",
            "extra": "iterations: 2713\ncpu: 316950.05528934783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1998197.255364843,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1998063.9484978537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1568986.8967849854,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1568910.4906937492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1585895.0308218915,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1585790.068493151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1542561.910149669,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1542483.0282861905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 872850.0672348297,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 872787.6893939436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1523235.1315790021,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1523147.039473684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5414227.769999797,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5413950.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3376209.4818839976,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3376094.5652173865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29962.273606950675,
            "unit": "ns/iter",
            "extra": "iterations: 27386\ncpu: 29960.552837216066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138336.96151988264,
            "unit": "ns/iter",
            "extra": "iterations: 6211\ncpu: 138333.90758331976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108489.14005069876,
            "unit": "ns/iter",
            "extra": "iterations: 7890\ncpu: 108481.78707224406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109926.7394502437,
            "unit": "ns/iter",
            "extra": "iterations: 7749\ncpu: 109919.33152664942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 107585.19937304032,
            "unit": "ns/iter",
            "extra": "iterations: 7975\ncpu: 107578.2445141067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 279700.15125244256,
            "unit": "ns/iter",
            "extra": "iterations: 3114\ncpu: 279686.03082851734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1972500.0000000515,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1972366.878980896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1528094.6305419523,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1528023.8095238055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1539413.507462682,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1539310.9452736313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1501107.433870908,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1501023.7096774175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 838175.680216866,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 838107.1364046931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1485165.7259614426,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1485096.4743589729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3135.6414021872074,
            "unit": "ns/iter",
            "extra": "iterations: 223080\ncpu: 3135.4245113860707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20451.810314632254,
            "unit": "ns/iter",
            "extra": "iterations: 34262\ncpu: 20450.99819041497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16227.68683504811,
            "unit": "ns/iter",
            "extra": "iterations: 44740\ncpu: 16226.629414394278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16469.729734183544,
            "unit": "ns/iter",
            "extra": "iterations: 42473\ncpu: 16468.693052056537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12132.248320750452,
            "unit": "ns/iter",
            "extra": "iterations: 57615\ncpu: 12131.182851687918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 101648.62891987109,
            "unit": "ns/iter",
            "extra": "iterations: 6888\ncpu: 101645.84785133573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135509.62773009378,
            "unit": "ns/iter",
            "extra": "iterations: 5128\ncpu: 135505.05070202818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33720.285466542744,
            "unit": "ns/iter",
            "extra": "iterations: 20759\ncpu: 33719.53851341584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33298.69341014756,
            "unit": "ns/iter",
            "extra": "iterations: 21002\ncpu: 33297.69069612415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32277.21999716664,
            "unit": "ns/iter",
            "extra": "iterations: 21173\ncpu: 32276.380295659492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65812.31956234486,
            "unit": "ns/iter",
            "extra": "iterations: 10602\ncpu: 65807.70609318971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61396.2673215244,
            "unit": "ns/iter",
            "extra": "iterations: 11402\ncpu: 61391.264690405675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23671.549558393395,
            "unit": "ns/iter",
            "extra": "iterations: 29551\ncpu: 23670.420628743464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 118226.84222932355,
            "unit": "ns/iter",
            "extra": "iterations: 5939\ncpu: 118217.27563562855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95775.5158419858,
            "unit": "ns/iter",
            "extra": "iterations: 7417\ncpu: 95768.82836726357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96238.12486263295,
            "unit": "ns/iter",
            "extra": "iterations: 7280\ncpu: 96235.45329670378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95094.81762546532,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 95087.40650074702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169579.2190752698,
            "unit": "ns/iter",
            "extra": "iterations: 4131\ncpu: 169567.0055676574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 593012.2929720102,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 592969.0093141398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 480169.38128014636,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 480131.1080523073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 483744.7769337401,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 483726.9337016598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 481206.42405495775,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 481152.30240550014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 307487.45642603846,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 307466.3732394366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 472807.88964114897,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 472767.095463781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24104.286524773506,
            "unit": "ns/iter",
            "extra": "iterations: 29083\ncpu: 24102.98112299274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120667.88098095657,
            "unit": "ns/iter",
            "extra": "iterations: 5831\ncpu: 120657.70879780529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97477.0617266762,
            "unit": "ns/iter",
            "extra": "iterations: 7193\ncpu: 97474.43347699232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96231.88702929308,
            "unit": "ns/iter",
            "extra": "iterations: 7170\ncpu: 96229.21896792254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94743.49373905738,
            "unit": "ns/iter",
            "extra": "iterations: 7427\ncpu: 94736.48848795053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 170002.3338210174,
            "unit": "ns/iter",
            "extra": "iterations: 4101\ncpu: 169992.12387222602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 585179.6548522505,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 585133.8396624508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 473507.7737616755,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 473485.3413654654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 488071.285714301,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 488041.4701803025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474156.16124658857,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 474139.97289972805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 306053.5862521722,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 306045.4465849404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 472428.70791077305,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 472391.4131169752 ns\nthreads: 1"
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
        "date": 1705954301030,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8427.371231426587,
            "unit": "ns/iter",
            "extra": "iterations: 83188\ncpu: 8426.806750973697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60516.68128633883,
            "unit": "ns/iter",
            "extra": "iterations: 13931\ncpu: 60513.75349938985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111364.34362433276,
            "unit": "ns/iter",
            "extra": "iterations: 7709\ncpu: 111358.71059800235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160815.3522493885,
            "unit": "ns/iter",
            "extra": "iterations: 5357\ncpu: 160809.52025387352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 213029.35110024762,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 213019.31540342292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 262905.29930324934,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 262899.757649197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 313286.90505415905,
            "unit": "ns/iter",
            "extra": "iterations: 2770\ncpu: 313283.68231046916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 363154.75167225144,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 363125.5016722411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 412636.99144081457,
            "unit": "ns/iter",
            "extra": "iterations: 2103\ncpu: 412635.5682358537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6719.876606906958,
            "unit": "ns/iter",
            "extra": "iterations: 103693\ncpu: 6719.647420751657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5594.624961977983,
            "unit": "ns/iter",
            "extra": "iterations: 124926\ncpu: 5594.559979507862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5574.616240462862,
            "unit": "ns/iter",
            "extra": "iterations: 125292\ncpu: 5574.47323053348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5516.008486329203,
            "unit": "ns/iter",
            "extra": "iterations: 126910\ncpu: 5515.907335907339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9597.608122399728,
            "unit": "ns/iter",
            "extra": "iterations: 72811\ncpu: 9597.464668800038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30697.9453453449,
            "unit": "ns/iter",
            "extra": "iterations: 26640\ncpu: 30697.357357357334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 159807.28430277554,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 159805.70469798654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 122806.07744156587,
            "unit": "ns/iter",
            "extra": "iterations: 6973\ncpu: 122803.44184712457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 122615.64676403646,
            "unit": "ns/iter",
            "extra": "iterations: 6984\ncpu: 122614.0893470787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 118719.8272207425,
            "unit": "ns/iter",
            "extra": "iterations: 7171\ncpu: 118716.59461720793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 363608.9492112227,
            "unit": "ns/iter",
            "extra": "iterations: 2599\ncpu: 363600.50019238103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1975703.5320513558,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1975483.9743589722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1570034.3187181961,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1569979.5952782484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1562462.1885520888,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1562429.7979797993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1526407.8914473532,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1526332.8947368446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 857324.4569842431,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 857268.6401480092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1506536.2532468482,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1506457.6298701272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38800.927538948126,
            "unit": "ns/iter",
            "extra": "iterations: 21377\ncpu: 38797.86218833332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 196050.85224453913,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 196038.10060906858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 150090.1497904882,
            "unit": "ns/iter",
            "extra": "iterations: 5728\ncpu: 150077.33938547457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 149816.56097560414,
            "unit": "ns/iter",
            "extra": "iterations: 5740\ncpu: 149806.63763066224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 146919.518321928,
            "unit": "ns/iter",
            "extra": "iterations: 5840\ncpu: 146909.09246575387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 318666.9295203038,
            "unit": "ns/iter",
            "extra": "iterations: 2710\ncpu: 318646.0147601483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2045041.1494503885,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2044913.18681319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1606790.0274914324,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1603760.4810996575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1604802.9566725562,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1604716.811091846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1560428.5210083388,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1560312.6050420222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 874870.103871539,
            "unit": "ns/iter",
            "extra": "iterations: 1059\ncpu: 874859.5845136897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1538822.7624584655,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1538762.1262458463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5401818.78999988,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5401522.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3322428.5338081056,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3322095.7295373655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 31395.729816635132,
            "unit": "ns/iter",
            "extra": "iterations: 26123\ncpu: 31395.24556903878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 148395.81070812597,
            "unit": "ns/iter",
            "extra": "iterations: 5790\ncpu: 148391.07081174484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 120481.97069546623,
            "unit": "ns/iter",
            "extra": "iterations: 7132\ncpu: 120480.3561413354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 118853.33963839321,
            "unit": "ns/iter",
            "extra": "iterations: 7190\ncpu: 118844.81223922083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 116995.54781662456,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 116992.13712420083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 275970.5398229851,
            "unit": "ns/iter",
            "extra": "iterations: 3164\ncpu: 275957.269279392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1980624.1210191955,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1980525.9023354503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1553883.6193655215,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1553772.954924871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1550548.0968280204,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1550425.7095158612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1520003.755301857,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1519913.0505709616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 838601.5444743523,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 838554.716981133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1494239.368167206,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1494121.7041800593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3119.0689040055863,
            "unit": "ns/iter",
            "extra": "iterations: 225357\ncpu: 3118.8767156112403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20998.178593896322,
            "unit": "ns/iter",
            "extra": "iterations: 33383\ncpu: 20996.135757720916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16173.908819860522,
            "unit": "ns/iter",
            "extra": "iterations: 43266\ncpu: 16172.761521749097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16417.19333598943,
            "unit": "ns/iter",
            "extra": "iterations: 42677\ncpu: 16415.921925158767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12179.616630104767,
            "unit": "ns/iter",
            "extra": "iterations: 57438\ncpu: 12179.447404157509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 107640.15378695742,
            "unit": "ns/iter",
            "extra": "iterations: 6496\ncpu: 107629.72598522203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 137661.5609612059,
            "unit": "ns/iter",
            "extra": "iterations: 5077\ncpu: 137652.9643490239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33605.86818399455,
            "unit": "ns/iter",
            "extra": "iterations: 20870\ncpu: 33602.57307139433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33684.42647554048,
            "unit": "ns/iter",
            "extra": "iterations: 20789\ncpu: 33682.92847178828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33552.02700110381,
            "unit": "ns/iter",
            "extra": "iterations: 20851\ncpu: 33551.07189103633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66968.53628607083,
            "unit": "ns/iter",
            "extra": "iterations: 10431\ncpu: 66963.5605406962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61958.396623725945,
            "unit": "ns/iter",
            "extra": "iterations: 11255\ncpu: 61954.14482452228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24562.487883568956,
            "unit": "ns/iter",
            "extra": "iterations: 28515\ncpu: 24560.497983517413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 121967.20684236605,
            "unit": "ns/iter",
            "extra": "iterations: 5729\ncpu: 121960.5515796824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 98063.6672306817,
            "unit": "ns/iter",
            "extra": "iterations: 7092\ncpu: 98059.64467005181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 98788.37478753546,
            "unit": "ns/iter",
            "extra": "iterations: 7060\ncpu: 98783.81019830007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 97856.50048902926,
            "unit": "ns/iter",
            "extra": "iterations: 7157\ncpu: 97848.90317171936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 168055.77201825517,
            "unit": "ns/iter",
            "extra": "iterations: 4167\ncpu: 168042.02063834804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 596807.2175767869,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 596751.1945392558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 486794.1206415545,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 486754.60251046065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 493473.57752493455,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 493428.16500711057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 487627.3892005146,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 487620.40673211904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 310032.92774825,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 310018.8829787293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 482326.0635246031,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 482283.94808743265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24682.890968037533,
            "unit": "ns/iter",
            "extra": "iterations: 28377\ncpu: 24680.572294464197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 122689.54846626494,
            "unit": "ns/iter",
            "extra": "iterations: 5705\ncpu: 122683.435582823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 98426.01391035276,
            "unit": "ns/iter",
            "extra": "iterations: 7117\ncpu: 98418.5471406491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 98988.043767706,
            "unit": "ns/iter",
            "extra": "iterations: 7060\ncpu: 98981.52974504308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95347.61719494476,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 95339.85852265032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 167381.77655503005,
            "unit": "ns/iter",
            "extra": "iterations: 4180\ncpu: 167368.82775119672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 590933.4075630138,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 590891.7647058795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 480727.3096551806,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 480675.99999999907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 486205.7706740396,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 486154.82974286895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 473640.9613559448,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 473633.3559322082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 305881.51378555153,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 305867.308533912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 471992.3398781528,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 471991.13067028084 ns\nthreads: 1"
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
        "date": 1705956336481,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8289.392681975452,
            "unit": "ns/iter",
            "extra": "iterations: 84613\ncpu: 8289.197877394727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60069.53230000818,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60065.89 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110944.70073558395,
            "unit": "ns/iter",
            "extra": "iterations: 7749\ncpu: 110936.35307781646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 161561.6572015565,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 161555.2213711938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 211294.40249266743,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 211287.39002932547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 260761.87169471892,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 260749.00841346147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 312500.7443446942,
            "unit": "ns/iter",
            "extra": "iterations: 2785\ncpu: 312483.8779174147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 363874.00920504896,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 363864.05857740587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411029.3522727333,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 411011.1268939396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6670.746766325789,
            "unit": "ns/iter",
            "extra": "iterations: 104757\ncpu: 6670.571894956891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5569.06266775326,
            "unit": "ns/iter",
            "extra": "iterations: 125184\ncpu: 5568.750798824133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5537.925106612255,
            "unit": "ns/iter",
            "extra": "iterations: 126393\ncpu: 5537.610468934194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5525.066081936334,
            "unit": "ns/iter",
            "extra": "iterations: 126782\ncpu: 5524.7093435976685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9605.222817553353,
            "unit": "ns/iter",
            "extra": "iterations: 72602\ncpu: 9604.992975400139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29707.261702437394,
            "unit": "ns/iter",
            "extra": "iterations: 27302\ncpu: 29705.201084169654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 162959.88072699742,
            "unit": "ns/iter",
            "extra": "iterations: 5282\ncpu: 162951.57137447933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 124805.54136430226,
            "unit": "ns/iter",
            "extra": "iterations: 6890\ncpu: 124801.0304789551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 126830.40627311189,
            "unit": "ns/iter",
            "extra": "iterations: 6759\ncpu: 126824.95931350751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 120926.38260993124,
            "unit": "ns/iter",
            "extra": "iterations: 7096\ncpu: 120922.63246899638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 365936.0239013126,
            "unit": "ns/iter",
            "extra": "iterations: 2594\ncpu: 365916.4225134916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1959334.8191489333,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1959264.680851063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1540318.9184692258,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1540258.5690515842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1553124.3662206233,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1553032.6086956533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1525970.3884298273,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1525888.2644628081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 847921.9130036769,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 847886.9963369973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1498491.8077545727,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1498417.4474959592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36771.08433573777,
            "unit": "ns/iter",
            "extra": "iterations: 22446\ncpu: 36769.46449255988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 198662.30391932515,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 198654.13706165526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 149027.93651876797,
            "unit": "ns/iter",
            "extra": "iterations: 5860\ncpu: 149021.92832764474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 153137.4297623223,
            "unit": "ns/iter",
            "extra": "iterations: 5638\ncpu: 153129.4075913445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 148426.213117576,
            "unit": "ns/iter",
            "extra": "iterations: 5809\ncpu: 148417.49010156692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 314753.91902687575,
            "unit": "ns/iter",
            "extra": "iterations: 2754\ncpu: 314745.0980392153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2006919.9482756322,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2006864.2241379295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1585737.2034188146,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1585654.0170940203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1603633.5679862269,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1603549.5697073997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1568110.5707070786,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1568050.6734006717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 867050.9159663878,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 867015.8730158708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1525429.970394679,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1525334.539473689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5323682.560000407,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5323588.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3343709.616487801,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3343582.7956989263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30338.092113071536,
            "unit": "ns/iter",
            "extra": "iterations: 26956\ncpu: 30337.145718949214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 154253.78448892894,
            "unit": "ns/iter",
            "extra": "iterations: 5596\ncpu: 154246.6761972842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 122853.2297508928,
            "unit": "ns/iter",
            "extra": "iterations: 7025\ncpu: 122848.82562277613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 123496.59094827634,
            "unit": "ns/iter",
            "extra": "iterations: 6960\ncpu: 123493.97988505784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 117425.59110199138,
            "unit": "ns/iter",
            "extra": "iterations: 7305\ncpu: 117423.96988364153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 280416.1874396245,
            "unit": "ns/iter",
            "extra": "iterations: 3105\ncpu: 280404.76650563575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1972571.447033879,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1972493.6440677906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1541626.7774086187,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1541594.6843853868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1543470.607973337,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1543414.4518272325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1526127.5508196303,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1526082.7868852392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 839227.1954954873,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 839202.4324324334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1497915.3842444487,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1497832.7974276524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3211.4628358423874,
            "unit": "ns/iter",
            "extra": "iterations: 218369\ncpu: 3211.317998433844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20584.22333997922,
            "unit": "ns/iter",
            "extra": "iterations: 34096\ncpu: 20583.17984514303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15578.480560255648,
            "unit": "ns/iter",
            "extra": "iterations: 44908\ncpu: 15577.87476618868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16266.353723643457,
            "unit": "ns/iter",
            "extra": "iterations: 44580\ncpu: 16265.679676985217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12075.908733715878,
            "unit": "ns/iter",
            "extra": "iterations: 58028\ncpu: 12075.398083683749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 106126.48648648683,
            "unit": "ns/iter",
            "extra": "iterations: 6586\ncpu: 106124.93167324529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136209.43134965692,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 136208.5375340327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33358.39732228266,
            "unit": "ns/iter",
            "extra": "iterations: 20988\ncpu: 33357.23270440269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33344.468168183004,
            "unit": "ns/iter",
            "extra": "iterations: 21001\ncpu: 33343.99790486153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33246.25849307001,
            "unit": "ns/iter",
            "extra": "iterations: 21076\ncpu: 33244.78079331955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67866.53183847807,
            "unit": "ns/iter",
            "extra": "iterations: 10302\ncpu: 67865.52125800845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62171.90221827784,
            "unit": "ns/iter",
            "extra": "iterations: 11270\ncpu: 62168.09228039028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23953.232024251713,
            "unit": "ns/iter",
            "extra": "iterations: 29359\ncpu: 23952.45069654967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 118945.81342396057,
            "unit": "ns/iter",
            "extra": "iterations: 5885\ncpu: 118939.66015293052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 98260.41793334544,
            "unit": "ns/iter",
            "extra": "iterations: 7171\ncpu: 98255.06902802925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97361.23335181971,
            "unit": "ns/iter",
            "extra": "iterations: 7208\ncpu: 97360.61320754635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95808.8382151697,
            "unit": "ns/iter",
            "extra": "iterations: 7306\ncpu: 95807.32274842523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 167915.98704413607,
            "unit": "ns/iter",
            "extra": "iterations: 4168\ncpu: 167910.43666026846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 585613.1608039319,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 585574.3718592897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 478931.87251541496,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 478903.2213845143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 475436.09226597333,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 475420.6919945724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 482788.020069203,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 482753.9792387468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 307446.6841409421,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 307426.60792951594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 468647.0106737841,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 468623.6157438362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24253.579150044196,
            "unit": "ns/iter",
            "extra": "iterations: 28825\ncpu: 24252.617519514086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 121741.59982548044,
            "unit": "ns/iter",
            "extra": "iterations: 5730\ncpu: 121735.23560209457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 98255.0351914434,
            "unit": "ns/iter",
            "extra": "iterations: 7104\ncpu: 98251.37950450304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 99817.94972539936,
            "unit": "ns/iter",
            "extra": "iterations: 7101\ncpu: 99815.44852837553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94681.11751963722,
            "unit": "ns/iter",
            "extra": "iterations: 7386\ncpu: 94675.39940427731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 172090.3595974314,
            "unit": "ns/iter",
            "extra": "iterations: 4074\ncpu: 172085.07609229218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 582688.1831807215,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 582660.7826810951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 477657.0992470868,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 477631.27994524717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 487931.74877877,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 487911.4445219819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 472639.91926729307,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 472636.8385346056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 306298.0541011811,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 306285.253054099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 471568.4445191275,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 471537.59246805264 ns\nthreads: 1"
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
        "date": 1705957772120,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8189.463330862771,
            "unit": "ns/iter",
            "extra": "iterations: 85017\ncpu: 8189.447992754392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59292.088099994085,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109194.23509976201,
            "unit": "ns/iter",
            "extra": "iterations: 7869\ncpu: 109190.91371203457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 158896.25345366713,
            "unit": "ns/iter",
            "extra": "iterations: 5429\ncpu: 158892.6689998158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209189.86439449343,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 209186.0526951898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 257685.43938036897,
            "unit": "ns/iter",
            "extra": "iterations: 3357\ncpu: 257668.99016979442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 306874.6929607513,
            "unit": "ns/iter",
            "extra": "iterations: 2827\ncpu: 306871.27697205514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 358371.66447099374,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 358352.69658295606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 406265.59344264347,
            "unit": "ns/iter",
            "extra": "iterations: 2135\ncpu: 406252.1311475417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6707.746225881758,
            "unit": "ns/iter",
            "extra": "iterations: 104329\ncpu: 6707.6479214791725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5478.875301076774,
            "unit": "ns/iter",
            "extra": "iterations: 127459\ncpu: 5478.43384931625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5440.334851512582,
            "unit": "ns/iter",
            "extra": "iterations: 129102\ncpu: 5439.804960418891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5544.556917923204,
            "unit": "ns/iter",
            "extra": "iterations: 126577\ncpu: 5544.29951728987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9532.975349376378,
            "unit": "ns/iter",
            "extra": "iterations: 73345\ncpu: 9532.47528802235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30302.093314964255,
            "unit": "ns/iter",
            "extra": "iterations: 27584\ncpu: 30300.786687935073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 156905.25050211648,
            "unit": "ns/iter",
            "extra": "iterations: 5477\ncpu: 156893.7009311668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 124984.94570135174,
            "unit": "ns/iter",
            "extra": "iterations: 6851\ncpu: 124978.95197781327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 124281.9816700707,
            "unit": "ns/iter",
            "extra": "iterations: 6874\ncpu: 124277.29124236236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 120610.10569449393,
            "unit": "ns/iter",
            "extra": "iterations: 7077\ncpu: 120602.85431680048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 364911.54545454023,
            "unit": "ns/iter",
            "extra": "iterations: 2607\ncpu: 364884.9635596475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1923722.4530271478,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1923595.824634659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1529595.6907894642,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1529455.5921052608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1537337.8242122745,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1537281.2603648428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1507393.3068181644,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1507254.2207792243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 842795.9187956166,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 842751.8248175193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1474890.5605097278,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1474765.2866242067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36967.82426120825,
            "unit": "ns/iter",
            "extra": "iterations: 22266\ncpu: 36966.41067097827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 194967.3750281101,
            "unit": "ns/iter",
            "extra": "iterations: 4445\ncpu: 194951.13610798627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 150025.7960537739,
            "unit": "ns/iter",
            "extra": "iterations: 5727\ncpu: 150019.39933647658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 148423.95568201557,
            "unit": "ns/iter",
            "extra": "iterations: 5799\ncpu: 148412.26073460936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 146831.63483914713,
            "unit": "ns/iter",
            "extra": "iterations: 5844\ncpu: 146823.56262833648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 305774.5605953015,
            "unit": "ns/iter",
            "extra": "iterations: 2822\ncpu: 305753.50815024774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1975259.6059322802,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1975217.372881348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1564793.021959428,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1564738.1756756732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1581713.5101694814,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1581691.1864406813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1555162.2003338172,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1555119.5325542602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 882564.5532319583,
            "unit": "ns/iter",
            "extra": "iterations: 1052\ncpu: 882550.4752851736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1512386.9950981298,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1512313.562091503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5449226.429999498,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5449048.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3232334.131944409,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3232153.8194444412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30269.585866766192,
            "unit": "ns/iter",
            "extra": "iterations: 27170\ncpu: 30266.496135443434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 150868.87220279535,
            "unit": "ns/iter",
            "extra": "iterations: 5720\ncpu: 150860.8741258732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 120614.15895060962,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 120611.9388327717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 120638.91301293198,
            "unit": "ns/iter",
            "extra": "iterations: 7116\ncpu: 120635.14614952194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 118877.42240066799,
            "unit": "ns/iter",
            "extra": "iterations: 7223\ncpu: 118873.6259172081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 291244.49381890293,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 291230.50451052486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1935421.6395835048,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1935311.6666666726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1510255.462783349,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1510151.779935267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1562108.372742217,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1562005.090311981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1538765.0853890555,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1538691.2713472564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 828964.9357142333,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 828916.5178571383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1466197.8243670743,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1466112.8164556918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3181.447619349874,
            "unit": "ns/iter",
            "extra": "iterations: 220549\ncpu: 3181.2341021722896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20633.849579062004,
            "unit": "ns/iter",
            "extra": "iterations: 34922\ncpu: 20632.741538285194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16346.126003139781,
            "unit": "ns/iter",
            "extra": "iterations: 44610\ncpu: 16345.234252409697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15266.019111786101,
            "unit": "ns/iter",
            "extra": "iterations: 45417\ncpu: 15265.12319175634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12111.52580924309,
            "unit": "ns/iter",
            "extra": "iterations: 57770\ncpu: 12111.367491777708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 102810.76333185713,
            "unit": "ns/iter",
            "extra": "iterations: 6807\ncpu: 102804.92140443673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 129155.41130820088,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 129148.57723577229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33040.31770759638,
            "unit": "ns/iter",
            "extra": "iterations: 21183\ncpu: 33039.79134211402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32772.19809773817,
            "unit": "ns/iter",
            "extra": "iterations: 21343\ncpu: 32771.728435552606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32705.422819108506,
            "unit": "ns/iter",
            "extra": "iterations: 21333\ncpu: 32703.576618384577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66405.7425507655,
            "unit": "ns/iter",
            "extra": "iterations: 10538\ncpu: 66402.78041374097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61322.94194789018,
            "unit": "ns/iter",
            "extra": "iterations: 11438\ncpu: 61319.478929882986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23731.863793687702,
            "unit": "ns/iter",
            "extra": "iterations: 29470\ncpu: 23730.794027825053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117174.17604689277,
            "unit": "ns/iter",
            "extra": "iterations: 5970\ncpu: 117167.90619765442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95125.6916269609,
            "unit": "ns/iter",
            "extra": "iterations: 7345\ncpu: 95124.04356705095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96791.49386630322,
            "unit": "ns/iter",
            "extra": "iterations: 7255\ncpu: 96790.13094417748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96011.16014770487,
            "unit": "ns/iter",
            "extra": "iterations: 7312\ncpu: 96004.75929978122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 171113.23906137055,
            "unit": "ns/iter",
            "extra": "iterations: 4091\ncpu: 171104.17990711203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 577898.4256198406,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 577847.8512396631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 467254.51035409933,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 467237.40814962814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 465169.43861977215,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 465143.26476443367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 474296.09398239024,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 474293.9148072958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 312547.90102539153,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 312543.64690146904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 462608.637144693,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 462558.09649702744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23798.268445199577,
            "unit": "ns/iter",
            "extra": "iterations: 29425\ncpu: 23797.101104503257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118698.80047546807,
            "unit": "ns/iter",
            "extra": "iterations: 5889\ncpu: 118692.08694175587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96265.8903750706,
            "unit": "ns/iter",
            "extra": "iterations: 7252\ncpu: 96261.00386100437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96699.35829764875,
            "unit": "ns/iter",
            "extra": "iterations: 7237\ncpu: 96692.1099903265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94513.0234817805,
            "unit": "ns/iter",
            "extra": "iterations: 7410\ncpu: 94506.61268555999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 169492.35736753303,
            "unit": "ns/iter",
            "extra": "iterations: 4133\ncpu: 169482.3130897654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 574052.331970595,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 574030.8258381032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 469894.4332662639,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 469873.70892018825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 477406.49490145675,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 477378.7219578581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 467979.8609625767,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 467972.86096256756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 299890.2079589208,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 299873.7270004315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 477696.6055592452,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 477677.895433488 ns\nthreads: 1"
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
        "date": 1705959224574,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8201.862752923129,
            "unit": "ns/iter",
            "extra": "iterations: 85204\ncpu: 8201.408384582883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59375.71729999717,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59372.20000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 108926.92485177028,
            "unit": "ns/iter",
            "extra": "iterations: 7758\ncpu: 108921.42304717709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 158239.02936319576,
            "unit": "ns/iter",
            "extra": "iterations: 5449\ncpu: 158229.14296201145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 207923.39301934524,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 207915.37174276848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 257298.76662708053,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 257287.67814726845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 310293.154799865,
            "unit": "ns/iter",
            "extra": "iterations: 2823\ncpu: 310278.49805171794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 358009.4033717174,
            "unit": "ns/iter",
            "extra": "iterations: 2432\ncpu: 358001.0690789476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 406635.1636450263,
            "unit": "ns/iter",
            "extra": "iterations: 2096\ncpu: 406612.40458015265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6693.215535077837,
            "unit": "ns/iter",
            "extra": "iterations: 104396\ncpu: 6693.011226483783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5584.688138112018,
            "unit": "ns/iter",
            "extra": "iterations: 125174\ncpu: 5584.388930608599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5543.491760693185,
            "unit": "ns/iter",
            "extra": "iterations: 126649\ncpu: 5543.114434381647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5521.35540105353,
            "unit": "ns/iter",
            "extra": "iterations: 127003\ncpu: 5521.144382416157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9719.24670420222,
            "unit": "ns/iter",
            "extra": "iterations: 72289\ncpu: 9718.726223906826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29006.147118214813,
            "unit": "ns/iter",
            "extra": "iterations: 28229\ncpu: 29005.15073151725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149716.75175315526,
            "unit": "ns/iter",
            "extra": "iterations: 5704\ncpu: 149711.37798036463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 117737.57780225773,
            "unit": "ns/iter",
            "extra": "iterations: 7262\ncpu: 117736.76673092792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 117971.09074585776,
            "unit": "ns/iter",
            "extra": "iterations: 7240\ncpu: 117966.33977900588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 114894.75919191776,
            "unit": "ns/iter",
            "extra": "iterations: 7425\ncpu: 114893.27946127953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 363298.1633587798,
            "unit": "ns/iter",
            "extra": "iterations: 2620\ncpu: 363279.77099236584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1935412.7484278688,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1935374.423480088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1531330.1738410173,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1531271.6887417226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1530682.567656738,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1530626.0726072604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1495950.4172079226,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1495913.636363636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 850806.9438822108,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 850778.6568537242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1467795.3694268337,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1467746.0191082787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36292.180925292,
            "unit": "ns/iter",
            "extra": "iterations: 22501\ncpu: 36290.440424870096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 186525.8838362075,
            "unit": "ns/iter",
            "extra": "iterations: 4640\ncpu: 186523.77155172377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 144404.01773167774,
            "unit": "ns/iter",
            "extra": "iterations: 5978\ncpu: 144397.29006356688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144282.53023412463,
            "unit": "ns/iter",
            "extra": "iterations: 5937\ncpu: 144280.8320700688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 146704.6543629958,
            "unit": "ns/iter",
            "extra": "iterations: 5879\ncpu: 146697.83976866794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 312802.2728904731,
            "unit": "ns/iter",
            "extra": "iterations: 2785\ncpu: 312802.6211849198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1974467.692796475,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1974354.6610169532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1569906.5503354743,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1569874.328859064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1568238.0777028091,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1568182.4324324357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1539397.855960212,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1539379.9668874193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 867489.6185566672,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 867460.8247422724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1507551.1607142142,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1507503.0844155778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5366792.070000201,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5366636.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3242459.2752609416,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3242428.2229965096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29725.680774672994,
            "unit": "ns/iter",
            "extra": "iterations: 27573\ncpu: 29724.125049867547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142298.3154938921,
            "unit": "ns/iter",
            "extra": "iterations: 6054\ncpu: 142293.35976214168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114389.94148157598,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 114386.08857560884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 115107.98916677742,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 115104.93513441205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 112085.78497004152,
            "unit": "ns/iter",
            "extra": "iterations: 7678\ncpu: 112079.72128158316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 279356.5352022774,
            "unit": "ns/iter",
            "extra": "iterations: 3139\ncpu: 279341.03217585245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1934975.4116425088,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1934877.754677756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1517811.7667210912,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1517744.6982055444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1517405.6568627683,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1517297.875816992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1489605.8901830658,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1489578.7021630604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 831746.8303571575,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 831726.9642857157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1467436.1104100489,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1467385.64668769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3189.894704114963,
            "unit": "ns/iter",
            "extra": "iterations: 218717\ncpu: 3189.8306944590704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20372.71127539458,
            "unit": "ns/iter",
            "extra": "iterations: 34358\ncpu: 20371.948308981842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15392.46289027847,
            "unit": "ns/iter",
            "extra": "iterations: 45352\ncpu: 15391.77324043049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16133.613929592539,
            "unit": "ns/iter",
            "extra": "iterations: 43404\ncpu: 16133.423186803051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11897.035668184586,
            "unit": "ns/iter",
            "extra": "iterations: 58876\ncpu: 11896.616617976852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103974.11991016679,
            "unit": "ns/iter",
            "extra": "iterations: 6680\ncpu: 103974.17664670642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135409.95789067182,
            "unit": "ns/iter",
            "extra": "iterations: 5177\ncpu: 135404.8483677807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33029.94978702998,
            "unit": "ns/iter",
            "extra": "iterations: 21130\ncpu: 33029.3374349266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33075.88509933778,
            "unit": "ns/iter",
            "extra": "iterations: 21140\ncpu: 33075.12298959318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32664.386652395704,
            "unit": "ns/iter",
            "extra": "iterations: 21487\ncpu: 32664.392423325786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65342.684968665024,
            "unit": "ns/iter",
            "extra": "iterations: 10691\ncpu: 65340.68842951991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60856.659758946604,
            "unit": "ns/iter",
            "extra": "iterations: 11533\ncpu: 60855.10274863418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23735.9998647597,
            "unit": "ns/iter",
            "extra": "iterations: 29577\ncpu: 23730.415525577388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119236.3030044298,
            "unit": "ns/iter",
            "extra": "iterations: 5858\ncpu: 119228.21782178206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95294.31978246856,
            "unit": "ns/iter",
            "extra": "iterations: 7355\ncpu: 95292.57647858563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94767.66693766204,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 94764.72899728891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94712.6985782082,
            "unit": "ns/iter",
            "extra": "iterations: 7385\ncpu: 94706.43195666999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 168948.17967243018,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 168941.40173410313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 587216.7120067748,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 587159.6977330033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 481647.97248970263,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 481618.2255845856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 481759.094744109,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 481728.9073305652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 474200.7547425449,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 474176.6937669325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 311156.8554964093,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 311147.6507092168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 470652.7183288326,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 470618.6657681979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24529.619910297304,
            "unit": "ns/iter",
            "extra": "iterations: 28538\ncpu: 24529.357348097103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119402.89505120028,
            "unit": "ns/iter",
            "extra": "iterations: 5860\ncpu: 119398.87372013631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96292.33429356442,
            "unit": "ns/iter",
            "extra": "iterations: 7290\ncpu: 96292.3868312756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96868.14147018983,
            "unit": "ns/iter",
            "extra": "iterations: 7210\ncpu: 96862.95423023397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93532.77476145182,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 93530.11691976883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 174161.7242665188,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 174156.63848831368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 585291.5869564811,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 585269.8160535054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 476145.17314250517,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 476132.65167008154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 483517.72187716037,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483509.86887508986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 468674.9043478426,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 468663.41137123934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 313183.7087421997,
            "unit": "ns/iter",
            "extra": "iterations: 2242\ncpu: 313180.5530776085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 470548.15141318744,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470525.7065948791 ns\nthreads: 1"
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
        "date": 1705961290652,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8255.108738985477,
            "unit": "ns/iter",
            "extra": "iterations: 84781\ncpu: 8254.650216440004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59009.564900009085,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59005.65000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109053.35291133495,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 109050.6025624762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 158438.36981270745,
            "unit": "ns/iter",
            "extra": "iterations: 5446\ncpu: 158425.59676827025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 211428.31578946806,
            "unit": "ns/iter",
            "extra": "iterations: 4161\ncpu: 211419.8509973564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 257627.32154533264,
            "unit": "ns/iter",
            "extra": "iterations: 3365\ncpu: 257605.55720653798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 307187.4068697117,
            "unit": "ns/iter",
            "extra": "iterations: 2824\ncpu: 307185.97733711055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 357016.1999178904,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 356985.6732348112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 407373.70948155347,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 407343.0639887905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6780.390372616526,
            "unit": "ns/iter",
            "extra": "iterations: 102894\ncpu: 6780.1348961066615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5582.409547758662,
            "unit": "ns/iter",
            "extra": "iterations: 125265\ncpu: 5582.317486927707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5543.903430146387,
            "unit": "ns/iter",
            "extra": "iterations: 126292\ncpu: 5543.449307953004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5537.454567781855,
            "unit": "ns/iter",
            "extra": "iterations: 126221\ncpu: 5537.080200600525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9630.96802676273,
            "unit": "ns/iter",
            "extra": "iterations: 72936\ncpu: 9630.007129538219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29042.029659803953,
            "unit": "ns/iter",
            "extra": "iterations: 27984\ncpu: 29040.787592910176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 150222.78238794237,
            "unit": "ns/iter",
            "extra": "iterations: 5712\ncpu: 150214.28571428577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116347.08634074779,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 116340.06536837808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115376.54485980782,
            "unit": "ns/iter",
            "extra": "iterations: 7490\ncpu: 115370.18691588777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111455.00301204744,
            "unit": "ns/iter",
            "extra": "iterations: 7636\ncpu: 111451.06076479799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 363056.17138483305,
            "unit": "ns/iter",
            "extra": "iterations: 2614\ncpu: 363035.7689364956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1910661.747411849,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1910539.1304347832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1519596.8105436375,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1519463.92092257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1525830.0164744947,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1525779.2421746315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1487534.6067414838,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1487405.2969502416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 840430.6202186065,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 840370.765027322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1468947.820919229,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1468881.1410459562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36970.055498320304,
            "unit": "ns/iter",
            "extra": "iterations: 22325\ncpu: 36969.379619260886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 185458.78834616297,
            "unit": "ns/iter",
            "extra": "iterations: 4668\ncpu: 185453.27763496115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 143936.367602802,
            "unit": "ns/iter",
            "extra": "iterations: 5982\ncpu: 143930.12370444686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144890.84096303937,
            "unit": "ns/iter",
            "extra": "iterations: 5898\ncpu: 144885.92743302803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 141046.27320690796,
            "unit": "ns/iter",
            "extra": "iterations: 6065\ncpu: 141042.76999175607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 311650.52714848873,
            "unit": "ns/iter",
            "extra": "iterations: 2781\ncpu: 311631.75116864446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1969771.754756881,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1969647.1458773832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1565362.532663311,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1565295.4773869275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1597672.4355931443,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1597577.4576271262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1531304.1136738257,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1531203.6243822183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 891350.8188825448,
            "unit": "ns/iter",
            "extra": "iterations: 1038\ncpu: 891290.0770712928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1505505.2499999509,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1505436.5259740348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5498198.190000493,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5498029.000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3307818.3462896547,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3307583.3922261437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30034.414032776313,
            "unit": "ns/iter",
            "extra": "iterations: 27336\ncpu: 30032.55414105946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140989.0409862788,
            "unit": "ns/iter",
            "extra": "iterations: 6124\ncpu: 140980.25800130647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114811.15115424011,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 114805.70504337533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113759.03259279094,
            "unit": "ns/iter",
            "extra": "iterations: 7517\ncpu: 113747.7850206207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110106.57231006566,
            "unit": "ns/iter",
            "extra": "iterations: 7779\ncpu: 110099.84573852662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 277582.4433121097,
            "unit": "ns/iter",
            "extra": "iterations: 3140\ncpu: 277568.1528662418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1947635.1500001005,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1947486.8750000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1525786.6567655806,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1525673.1023102368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1528619.2615132234,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1528493.5855263195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1501238.754019267,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1501198.2315112627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 835691.1533631813,
            "unit": "ns/iter",
            "extra": "iterations: 1115\ncpu: 835638.5650224263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1471220.4817749406,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1471138.0348652983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3153.109369300691,
            "unit": "ns/iter",
            "extra": "iterations: 222055\ncpu: 3152.8414131633986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20398.46507288315,
            "unit": "ns/iter",
            "extra": "iterations: 34300\ncpu: 20397.67930029154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15094.495956001849,
            "unit": "ns/iter",
            "extra": "iterations: 46365\ncpu: 15093.096085409301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16262.013130629599,
            "unit": "ns/iter",
            "extra": "iterations: 42953\ncpu: 16260.945684818236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12179.548220617035,
            "unit": "ns/iter",
            "extra": "iterations: 57548\ncpu: 12178.987975255413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 102874.24863589232,
            "unit": "ns/iter",
            "extra": "iterations: 6781\ncpu: 102871.7445804446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136771.66952470905,
            "unit": "ns/iter",
            "extra": "iterations: 5365\ncpu: 136771.10904007388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33261.49015776566,
            "unit": "ns/iter",
            "extra": "iterations: 20981\ncpu: 33259.54911586664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32869.63518053912,
            "unit": "ns/iter",
            "extra": "iterations: 21131\ncpu: 32869.03601343968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32831.471472883364,
            "unit": "ns/iter",
            "extra": "iterations: 21278\ncpu: 32830.85346367126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65916.2034011646,
            "unit": "ns/iter",
            "extra": "iterations: 10467\ncpu: 65915.90713671537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61032.11703056605,
            "unit": "ns/iter",
            "extra": "iterations: 11450\ncpu: 61025.5109170303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24307.20849501131,
            "unit": "ns/iter",
            "extra": "iterations: 28864\ncpu: 24305.619456762455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119627.7592218818,
            "unit": "ns/iter",
            "extra": "iterations: 5449\ncpu: 119616.00293631967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96053.09289542219,
            "unit": "ns/iter",
            "extra": "iterations: 7277\ncpu: 96049.4434519724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96862.13891967003,
            "unit": "ns/iter",
            "extra": "iterations: 7220\ncpu: 96861.77285318382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96063.47023320806,
            "unit": "ns/iter",
            "extra": "iterations: 7290\ncpu: 96056.29629629651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170125.59868900466,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 170112.5030347151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 577183.4814509759,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 577128.112118709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 469667.4204163712,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 469640.5641370074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 481225.23521322635,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 481184.4566712514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 468786.88187916845,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 468784.7651006749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 309464.0575730943,
            "unit": "ns/iter",
            "extra": "iterations: 2258\ncpu: 309456.02302923054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 464874.6631158649,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 464837.35019973124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 25036.681081659703,
            "unit": "ns/iter",
            "extra": "iterations: 27957\ncpu: 25035.919447723278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120243.6862139886,
            "unit": "ns/iter",
            "extra": "iterations: 5832\ncpu: 120239.96913580243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97282.33578772796,
            "unit": "ns/iter",
            "extra": "iterations: 7198\ncpu: 97276.00722422928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97879.47545110816,
            "unit": "ns/iter",
            "extra": "iterations: 7149\ncpu: 97877.71716323834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93503.95142781688,
            "unit": "ns/iter",
            "extra": "iterations: 7494\ncpu: 93495.196156924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 171347.10500491492,
            "unit": "ns/iter",
            "extra": "iterations: 4076\ncpu: 171335.18155053759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 588672.0990764134,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 588644.4164567605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 472648.6918408354,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 472631.0182063386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 485447.13203614217,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 485393.4676858953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 473588.0318644453,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 473558.44067796733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 306269.18046428944,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 306248.97065264813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 471690.8411843737,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 471688.8963660856 ns\nthreads: 1"
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
        "date": 1705962747248,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8288.902461861926,
            "unit": "ns/iter",
            "extra": "iterations: 84367\ncpu: 8288.675667026208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60877.22192590644,
            "unit": "ns/iter",
            "extra": "iterations: 13874\ncpu: 60872.444860890886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 112199.16932115164,
            "unit": "ns/iter",
            "extra": "iterations: 7660\ncpu: 112185.9138381201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 163065.52816635414,
            "unit": "ns/iter",
            "extra": "iterations: 5290\ncpu: 163055.48204158794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 232718.07100591686,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 232709.85335734487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 266556.77651747037,
            "unit": "ns/iter",
            "extra": "iterations: 3262\ncpu: 266549.63212752936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 329930.6413993837,
            "unit": "ns/iter",
            "extra": "iterations: 2744\ncpu: 329920.9183673469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 368053.0604395921,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 368037.3626373621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 418589.56724304124,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 418568.4438040347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6776.939604432863,
            "unit": "ns/iter",
            "extra": "iterations: 102789\ncpu: 6776.8613373026155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5619.617709229045,
            "unit": "ns/iter",
            "extra": "iterations: 124421\ncpu: 5619.464559841186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5626.3156028085705,
            "unit": "ns/iter",
            "extra": "iterations: 124907\ncpu: 5626.333191894771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5599.5761330263795,
            "unit": "ns/iter",
            "extra": "iterations: 125990\ncpu: 5599.361060401623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9800.651628967697,
            "unit": "ns/iter",
            "extra": "iterations: 72285\ncpu: 9800.091305250051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29399.24474414942,
            "unit": "ns/iter",
            "extra": "iterations: 27731\ncpu: 29396.3001694854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 153982.28707020616,
            "unit": "ns/iter",
            "extra": "iterations: 5584\ncpu: 153970.36174785095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 119980.11563289953,
            "unit": "ns/iter",
            "extra": "iterations: 7126\ncpu: 119965.61886051079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 121011.38844847746,
            "unit": "ns/iter",
            "extra": "iterations: 7064\ncpu: 121007.21970554916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 116742.70897875344,
            "unit": "ns/iter",
            "extra": "iterations: 7295\ncpu: 116735.50376970512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 362464.0690839681,
            "unit": "ns/iter",
            "extra": "iterations: 2620\ncpu: 362434.65648855007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1923696.4070982584,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1923508.1419624165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1535148.8545455833,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1535059.0082644627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1522128.1309329574,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1522057.6104746314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1504757.687296435,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1504602.4429967436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 866460.4571966176,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 866361.2417685796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1478838.8500797169,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1478699.5215310978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37474.69114834642,
            "unit": "ns/iter",
            "extra": "iterations: 21962\ncpu: 37472.60267735168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 197292.95128614208,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 197279.76325973135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 151626.07627416946,
            "unit": "ns/iter",
            "extra": "iterations: 5690\ncpu: 151616.01054481545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 148537.11790091151,
            "unit": "ns/iter",
            "extra": "iterations: 5793\ncpu: 148526.7736923873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 146155.4598130921,
            "unit": "ns/iter",
            "extra": "iterations: 5885\ncpu: 146145.08071367868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 308842.3371469609,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 308820.87951376504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1974780.2399150773,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1974342.675159233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1576380.8115450724,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1576315.1103565374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1570247.8431702366,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1570142.8330522692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1550588.4150000308,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1550436.3333333277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 886072.6980952634,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 886024.2857142878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1520836.7307059383,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1520700.9852216758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5412879.540000404,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5412803.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3309519.4280700497,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3309294.3859649017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30037.37935081844,
            "unit": "ns/iter",
            "extra": "iterations: 27265\ncpu: 30035.94351732997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 146710.82935154432,
            "unit": "ns/iter",
            "extra": "iterations: 5860\ncpu: 146697.18430034115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 119050.38938785503,
            "unit": "ns/iter",
            "extra": "iterations: 7237\ncpu: 119042.55907143846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 115993.44201135242,
            "unit": "ns/iter",
            "extra": "iterations: 7398\ncpu: 115986.26655852913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 113724.76719787538,
            "unit": "ns/iter",
            "extra": "iterations: 7530\ncpu: 113721.14209827343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 278995.4928046073,
            "unit": "ns/iter",
            "extra": "iterations: 3127\ncpu: 278967.95650783344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1942200.6513570335,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1942101.2526096073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1526466.03789137,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1526319.1103789085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1522004.1470588155,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1521940.3594771212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1499896.6435484816,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1499773.5483870974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 849579.7650822182,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 849543.327239487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1474822.5863708595,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1474692.7099841572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3136.3702085892833,
            "unit": "ns/iter",
            "extra": "iterations: 224125\ncpu: 3128.533184606811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20675.529241410026,
            "unit": "ns/iter",
            "extra": "iterations: 33839\ncpu: 20673.74626909775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16165.714104543827,
            "unit": "ns/iter",
            "extra": "iterations: 43369\ncpu: 16165.724365330112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16176.985756635517,
            "unit": "ns/iter",
            "extra": "iterations: 43178\ncpu: 16176.995229051903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11970.31044087396,
            "unit": "ns/iter",
            "extra": "iterations: 58520\ncpu: 11970.210184552327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 100257.40494324778,
            "unit": "ns/iter",
            "extra": "iterations: 6959\ncpu: 100256.58859031467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 131042.102905355,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 131039.38144329915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33906.889206053565,
            "unit": "ns/iter",
            "extra": "iterations: 20669\ncpu: 33906.03802796477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33691.71132491125,
            "unit": "ns/iter",
            "extra": "iterations: 20892\ncpu: 33691.10664369132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33404.24494178153,
            "unit": "ns/iter",
            "extra": "iterations: 20956\ncpu: 33403.998854743186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65198.89256505984,
            "unit": "ns/iter",
            "extra": "iterations: 10760\ncpu: 65197.713754646495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62129.15866239519,
            "unit": "ns/iter",
            "extra": "iterations: 11244\ncpu: 62126.99217360328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24213.849308897632,
            "unit": "ns/iter",
            "extra": "iterations: 28867\ncpu: 24213.454809990664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 121680.25295138879,
            "unit": "ns/iter",
            "extra": "iterations: 5760\ncpu: 121679.39236111075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97209.4230022154,
            "unit": "ns/iter",
            "extra": "iterations: 7208\ncpu: 97209.42008878908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97667.54725673336,
            "unit": "ns/iter",
            "extra": "iterations: 7163\ncpu: 97663.84196565663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 98344.93982325519,
            "unit": "ns/iter",
            "extra": "iterations: 7129\ncpu: 98344.26988357458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170457.07339673323,
            "unit": "ns/iter",
            "extra": "iterations: 4101\ncpu: 170452.74323335884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 602191.0154771775,
            "unit": "ns/iter",
            "extra": "iterations: 1163\ncpu: 602175.9243336208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 491050.691444641,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 491041.93548387976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 488599.2218334823,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 488590.7627711674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 488668.8108483658,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 488664.4645340711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 319947.0360237037,
            "unit": "ns/iter",
            "extra": "iterations: 2193\ncpu: 319947.28682170185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 478738.82876707305,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 478722.5342465737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24284.58461859281,
            "unit": "ns/iter",
            "extra": "iterations: 28788\ncpu: 24284.14617201588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 123643.78174111914,
            "unit": "ns/iter",
            "extra": "iterations: 5663\ncpu: 123643.82835952814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 98227.20745723369,
            "unit": "ns/iter",
            "extra": "iterations: 7134\ncpu: 98227.2077375943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97875.04774573141,
            "unit": "ns/iter",
            "extra": "iterations: 7142\ncpu: 97872.99075889043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94718.71318145035,
            "unit": "ns/iter",
            "extra": "iterations: 7374\ncpu: 94717.79224301553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 170725.50707661285,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 170720.05856515426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 587137.1828858866,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 587132.3825503421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 485144.5980528654,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 485134.07510430505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 488929.1324457174,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 488921.5837421164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 475371.17152549373,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 475357.0169491545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 310062.78305237816,
            "unit": "ns/iter",
            "extra": "iterations: 2254\ncpu: 310059.3167701895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 474287.77430324105,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 474283.0047586667 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}