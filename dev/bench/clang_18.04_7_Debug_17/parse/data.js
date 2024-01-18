window.BENCHMARK_DATA = {
  "lastUpdate": 1705574875670,
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
      }
    ]
  }
}