window.BENCHMARK_DATA = {
  "lastUpdate": 1702489559312,
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
      }
    ]
  }
}