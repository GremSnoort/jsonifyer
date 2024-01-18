window.BENCHMARK_DATA = {
  "lastUpdate": 1705575649755,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-11 20.04 Release c++-17": [
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
        "date": 1702490342136,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1314.3182720311893,
            "unit": "ns/iter",
            "extra": "iterations: 534593\ncpu: 1314.2581365637036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15986.116553138823,
            "unit": "ns/iter",
            "extra": "iterations: 51676\ncpu: 15986.010914157443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33636.55506985672,
            "unit": "ns/iter",
            "extra": "iterations: 24478\ncpu: 33634.92523899012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50052.8656349343,
            "unit": "ns/iter",
            "extra": "iterations: 16671\ncpu: 50051.400635834696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55652.40229999517,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55652.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69555.53296349244,
            "unit": "ns/iter",
            "extra": "iterations: 12438\ncpu: 69554.32545425308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83137.85186965176,
            "unit": "ns/iter",
            "extra": "iterations: 10403\ncpu: 83134.54772661728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 94776.416594087,
            "unit": "ns/iter",
            "extra": "iterations: 9184\ncpu: 94769.82796167248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111650.33299154339,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 111644.41168931048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1101.7684675012383,
            "unit": "ns/iter",
            "extra": "iterations: 637038\ncpu: 1101.7113578781791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 903.866586409879,
            "unit": "ns/iter",
            "extra": "iterations: 775843\ncpu: 903.7707371207836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 922.2789845376481,
            "unit": "ns/iter",
            "extra": "iterations: 762372\ncpu: 922.2051701793869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 934.6969398404925,
            "unit": "ns/iter",
            "extra": "iterations: 752085\ncpu: 934.6758677543102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1804.7950239854092,
            "unit": "ns/iter",
            "extra": "iterations: 390031\ncpu: 1804.7157790021786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5214.928766745539,
            "unit": "ns/iter",
            "extra": "iterations: 152499\ncpu: 5214.474849015406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24086.816477290973,
            "unit": "ns/iter",
            "extra": "iterations: 33707\ncpu: 24085.483727415667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19080.283539733067,
            "unit": "ns/iter",
            "extra": "iterations: 42636\ncpu: 19079.665071770294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19883.949870713186,
            "unit": "ns/iter",
            "extra": "iterations: 40994\ncpu: 19883.734205005585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19556.299710554988,
            "unit": "ns/iter",
            "extra": "iterations: 41113\ncpu: 19555.551771945626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 55905.986400000525,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55905.15000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 560639.4989999898,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560633.8999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 560683.6254776878,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 560666.0509554138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 556735.3378205408,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 556720.0641025648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561409.9413659567,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 561391.8814432997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324770.37794395874,
            "unit": "ns/iter",
            "extra": "iterations: 2675\ncpu: 324765.34579439217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 559937.4932649393,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 559918.79409878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2382309.905612186,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2377285.2040816406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1091134.6587957975,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 1091034.5926800452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3301463.665480192,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3301232.0284697567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7661.078916112348,
            "unit": "ns/iter",
            "extra": "iterations: 108609\ncpu: 7660.404754670413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 42540.67381863577,
            "unit": "ns/iter",
            "extra": "iterations: 19342\ncpu: 42537.00754834047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34069.82384268575,
            "unit": "ns/iter",
            "extra": "iterations: 24410\ncpu: 34067.36173699316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 33114.95053989484,
            "unit": "ns/iter",
            "extra": "iterations: 24727\ncpu: 33112.62183038773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 33509.66966918131,
            "unit": "ns/iter",
            "extra": "iterations: 24757\ncpu: 33506.95964777631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 68814.35136433165,
            "unit": "ns/iter",
            "extra": "iterations: 12497\ncpu: 68793.73449627892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 588520.0380000698,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588465.7999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 583858.366329991,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 583848.6195286225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 576631.7258917297,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 576623.1836195508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 583804.4532615398,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 583800.2017484854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 340278.5790706644,
            "unit": "ns/iter",
            "extra": "iterations: 2561\ncpu: 340274.8535728242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574163.2072131771,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 574152.7868852452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2528957.5190216936,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2528859.782608702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1135033.0377587855,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 1135014.2509135215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5358.960728654671,
            "unit": "ns/iter",
            "extra": "iterations: 146901\ncpu: 5358.890000748806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24167.348061262288,
            "unit": "ns/iter",
            "extra": "iterations: 34017\ncpu: 24167.43393009394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19042.684930554886,
            "unit": "ns/iter",
            "extra": "iterations: 43200\ncpu: 19041.932870370387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18991.924326070322,
            "unit": "ns/iter",
            "extra": "iterations: 43291\ncpu: 18990.21736619619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20105.38436049023,
            "unit": "ns/iter",
            "extra": "iterations: 42853\ncpu: 20104.485100226288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 54465.43159999919,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54457.25000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 576910.489999932,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576891.6000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 571788.728403183,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 571727.9450261778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 569911.844691994,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 569867.8243774568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 576500.5972313181,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 576474.423203691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332192.1222857002,
            "unit": "ns/iter",
            "extra": "iterations: 2625\ncpu: 332167.39047619136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 563276.0123056688,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 563219.5595854962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 528.1259073070198,
            "unit": "ns/iter",
            "extra": "iterations: 1325213\ncpu: 528.0809952815134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3084.7253714695357,
            "unit": "ns/iter",
            "extra": "iterations: 227744\ncpu: 3084.424178024474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2264.471441089038,
            "unit": "ns/iter",
            "extra": "iterations: 309273\ncpu: 2264.247121475208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2371.8111639797226,
            "unit": "ns/iter",
            "extra": "iterations: 295701\ncpu: 2371.56587228316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1917.5936749004727,
            "unit": "ns/iter",
            "extra": "iterations: 364516\ncpu: 1917.4028026204558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16166.924648844531,
            "unit": "ns/iter",
            "extra": "iterations: 43357\ncpu: 16166.298406255064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30899.35234647579,
            "unit": "ns/iter",
            "extra": "iterations: 22651\ncpu: 30897.721954880646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7296.53519182175,
            "unit": "ns/iter",
            "extra": "iterations: 94880\ncpu: 7296.469224283181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7298.44803046827,
            "unit": "ns/iter",
            "extra": "iterations: 95835\ncpu: 7298.467157092885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7327.230480355177,
            "unit": "ns/iter",
            "extra": "iterations: 95596\ncpu: 7327.255324490555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14948.855351956974,
            "unit": "ns/iter",
            "extra": "iterations: 46824\ncpu: 14948.767725952417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14031.962199585454,
            "unit": "ns/iter",
            "extra": "iterations: 50264\ncpu: 14031.754337100278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5144.704962347082,
            "unit": "ns/iter",
            "extra": "iterations: 136508\ncpu: 5144.648665279723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26073.314922296915,
            "unit": "ns/iter",
            "extra": "iterations: 26705\ncpu: 26072.982587530045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21140.031165147102,
            "unit": "ns/iter",
            "extra": "iterations: 33146\ncpu: 21140.092318831466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21097.031374906204,
            "unit": "ns/iter",
            "extra": "iterations: 33275\ncpu: 21095.67242674691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21710.469854664138,
            "unit": "ns/iter",
            "extra": "iterations: 31995\ncpu: 21709.088920144008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52435.65586353587,
            "unit": "ns/iter",
            "extra": "iterations: 14070\ncpu: 52435.1670220326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157862.97067447755,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 157863.4558989378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130416.86328924997,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 130412.96330787893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130547.14002641477,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 130547.59388563684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131024.57757009417,
            "unit": "ns/iter",
            "extra": "iterations: 5350\ncpu: 131021.30841121478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81708.41611053291,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 81703.95738203809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132305.8807996953,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 132303.43266691905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5187.932127092295,
            "unit": "ns/iter",
            "extra": "iterations: 137286\ncpu: 5187.869119939462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25941.708700011506,
            "unit": "ns/iter",
            "extra": "iterations: 26931\ncpu: 25941.394675281386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21192.25639104646,
            "unit": "ns/iter",
            "extra": "iterations: 32037\ncpu: 21191.438024783718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21467.690555947782,
            "unit": "ns/iter",
            "extra": "iterations: 32539\ncpu: 21467.555856049956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22301.005037945724,
            "unit": "ns/iter",
            "extra": "iterations: 31362\ncpu: 22300.532491550057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49416.7389490055,
            "unit": "ns/iter",
            "extra": "iterations: 14139\ncpu: 49416.35193436629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153608.17846155673,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 153605.80219780185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129115.29656953497,
            "unit": "ns/iter",
            "extra": "iterations: 5422\ncpu: 129115.75064551864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127063.7814545394,
            "unit": "ns/iter",
            "extra": "iterations: 5500\ncpu: 127058.32727272599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127672.9640116785,
            "unit": "ns/iter",
            "extra": "iterations: 5474\ncpu: 127670.6430398239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81777.31146393176,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 81775.60121410224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128268.47828497192,
            "unit": "ns/iter",
            "extra": "iterations: 5411\ncpu: 128265.08963223077 ns\nthreads: 1"
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
        "date": 1702492926484,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1311.1545847245595,
            "unit": "ns/iter",
            "extra": "iterations: 530130\ncpu: 1311.1065210420086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15941.566769765775,
            "unit": "ns/iter",
            "extra": "iterations: 51730\ncpu: 15941.225594432632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33179.19163834367,
            "unit": "ns/iter",
            "extra": "iterations: 24421\ncpu: 33177.01977805987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49239.81890269195,
            "unit": "ns/iter",
            "extra": "iterations: 17151\ncpu: 49236.75587429302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 54757.38520000278,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54754.470000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69420.93502914223,
            "unit": "ns/iter",
            "extra": "iterations: 12698\ncpu: 69417.2389352654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82392.91871990547,
            "unit": "ns/iter",
            "extra": "iterations: 10593\ncpu: 82387.93542905692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 95568.08637617563,
            "unit": "ns/iter",
            "extra": "iterations: 9065\ncpu: 95559.37120794257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111267.58154203114,
            "unit": "ns/iter",
            "extra": "iterations: 7769\ncpu: 111260.94735487188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1117.4671000938738,
            "unit": "ns/iter",
            "extra": "iterations: 626172\ncpu: 1117.4349859144124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 911.8716335165255,
            "unit": "ns/iter",
            "extra": "iterations: 765153\ncpu: 911.8415532579768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 917.930507174865,
            "unit": "ns/iter",
            "extra": "iterations: 764194\ncpu: 917.8669290782198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 938.1887314952663,
            "unit": "ns/iter",
            "extra": "iterations: 745689\ncpu: 938.1224612405425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1819.853827372242,
            "unit": "ns/iter",
            "extra": "iterations: 382534\ncpu: 1819.6743296020752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5123.860531477942,
            "unit": "ns/iter",
            "extra": "iterations: 158050\ncpu: 5123.324897184431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24886.385726808276,
            "unit": "ns/iter",
            "extra": "iterations: 33083\ncpu: 24885.587764108477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 21572.472632840687,
            "unit": "ns/iter",
            "extra": "iterations: 40048\ncpu: 21570.867459049136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19699.23544621481,
            "unit": "ns/iter",
            "extra": "iterations: 39062\ncpu: 19698.38461932313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19674.9756683412,
            "unit": "ns/iter",
            "extra": "iterations: 41633\ncpu: 19674.794033579114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 55869.51400000544,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55866.47000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 556913.1029999425,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556801.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 552571.1209987528,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 552376.7605633806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 563612.5394483786,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 563578.6401539436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 560671.2885862626,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 560659.3385214022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324192.58779480355,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 324177.49906402087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 556247.7297124238,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 556216.4856230015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2363761.3316456242,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2363679.746835439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1087191.9237088854,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 1086935.915492957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3322541.5693950253,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3322373.6654804247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7776.5989204749085,
            "unit": "ns/iter",
            "extra": "iterations: 111160\ncpu: 7776.370097157251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 42086.40094655239,
            "unit": "ns/iter",
            "extra": "iterations: 19439\ncpu: 42086.39333299048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 33344.12809194234,
            "unit": "ns/iter",
            "extra": "iterations: 25146\ncpu: 33342.57933667395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32530.218345199683,
            "unit": "ns/iter",
            "extra": "iterations: 25707\ncpu: 32528.237445053965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32380.424711928164,
            "unit": "ns/iter",
            "extra": "iterations: 25688\ncpu: 32379.31719090632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 67987.43557025772,
            "unit": "ns/iter",
            "extra": "iterations: 12696\ncpu: 67975.85066162578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 594466.409000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594370.6000000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589711.6598916533,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 589659.756097562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 585036.0047042794,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 585004.1666666633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584017.7305629827,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 583964.4101876648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 343637.14268770296,
            "unit": "ns/iter",
            "extra": "iterations: 2530\ncpu: 343605.49407114735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576788.6740838152,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 576752.6178010483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2536940.7431695247,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2536600.8196721454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1078756.3310344368,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 1078656.666666664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5062.109560000181,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5061.526000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25775.34254781276,
            "unit": "ns/iter",
            "extra": "iterations: 32051\ncpu: 25773.548407225964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20264.86910276402,
            "unit": "ns/iter",
            "extra": "iterations: 40803\ncpu: 20263.0688919934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20469.96402538826,
            "unit": "ns/iter",
            "extra": "iterations: 40334\ncpu: 20468.81539148121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20613.96248072335,
            "unit": "ns/iter",
            "extra": "iterations: 39553\ncpu: 20611.97380729657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 55551.97260000568,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55545.560000000194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 571181.4809999396,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571171.3000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 569919.4438642403,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 569858.6161879902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 569595.4342447666,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 569528.1901041636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 567740.5297927832,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 567707.1891191693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 331513.66262779525,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 331497.9931843989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 557170.0759898094,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 557125.6066411257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 533.3629285015168,
            "unit": "ns/iter",
            "extra": "iterations: 1306238\ncpu: 533.3178945950151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3095.5044710280836,
            "unit": "ns/iter",
            "extra": "iterations: 225787\ncpu: 3095.2712069339755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2381.5092895017888,
            "unit": "ns/iter",
            "extra": "iterations: 293611\ncpu: 2381.3269938796575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2401.305188636958,
            "unit": "ns/iter",
            "extra": "iterations: 290558\ncpu: 2401.2414044700317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1928.2020814930504,
            "unit": "ns/iter",
            "extra": "iterations: 363393\ncpu: 1928.0822690585687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16318.722281698654,
            "unit": "ns/iter",
            "extra": "iterations: 42968\ncpu: 16318.194935766243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30570.13961474021,
            "unit": "ns/iter",
            "extra": "iterations: 23880\ncpu: 30568.036013400484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7249.213149676048,
            "unit": "ns/iter",
            "extra": "iterations: 96702\ncpu: 7248.777688155428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7190.503386728647,
            "unit": "ns/iter",
            "extra": "iterations: 96701\ncpu: 7189.710551080121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7242.077618805425,
            "unit": "ns/iter",
            "extra": "iterations: 96523\ncpu: 7241.4657646364885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14576.550020790142,
            "unit": "ns/iter",
            "extra": "iterations: 48100\ncpu: 14575.559251559234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13687.384219588886,
            "unit": "ns/iter",
            "extra": "iterations: 50531\ncpu: 13687.116819378081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5089.728541373345,
            "unit": "ns/iter",
            "extra": "iterations: 137369\ncpu: 5089.510733862789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26097.949189190833,
            "unit": "ns/iter",
            "extra": "iterations: 26825\ncpu: 26096.71202236726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20861.185991127437,
            "unit": "ns/iter",
            "extra": "iterations: 33593\ncpu: 20860.247670645786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20869.644566998486,
            "unit": "ns/iter",
            "extra": "iterations: 33545\ncpu: 20868.379788344315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21414.81825716028,
            "unit": "ns/iter",
            "extra": "iterations: 32579\ncpu: 21413.95070444159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49347.5043428781,
            "unit": "ns/iter",
            "extra": "iterations: 14046\ncpu: 49343.5141677344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154918.02450872585,
            "unit": "ns/iter",
            "extra": "iterations: 4529\ncpu: 154908.6553323031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129010.82138247433,
            "unit": "ns/iter",
            "extra": "iterations: 5425\ncpu: 129008.88479262653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130075.14937837614,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 130073.63147151667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129536.20643729751,
            "unit": "ns/iter",
            "extra": "iterations: 5406\ncpu: 129529.00480947217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81969.91096532719,
            "unit": "ns/iter",
            "extra": "iterations: 8536\ncpu: 81965.20618556783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129859.4642724026,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 129853.25641979872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5030.143516614673,
            "unit": "ns/iter",
            "extra": "iterations: 138639\ncpu: 5030.000937687091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25752.273858007105,
            "unit": "ns/iter",
            "extra": "iterations: 27255\ncpu: 25751.5795266927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22095.221824037442,
            "unit": "ns/iter",
            "extra": "iterations: 32927\ncpu: 22094.433139975983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21221.57838963789,
            "unit": "ns/iter",
            "extra": "iterations: 33123\ncpu: 21220.70766536853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21796.882777052673,
            "unit": "ns/iter",
            "extra": "iterations: 32178\ncpu: 21796.30803654666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48673.56125574073,
            "unit": "ns/iter",
            "extra": "iterations: 14366\ncpu: 48671.30029235657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 150352.57552084877,
            "unit": "ns/iter",
            "extra": "iterations: 4608\ncpu: 150344.7482638889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 125048.24388927761,
            "unit": "ns/iter",
            "extra": "iterations: 5564\ncpu: 125043.8892882831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126706.4597598083,
            "unit": "ns/iter",
            "extra": "iterations: 5579\ncpu: 126693.27836529847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 125788.41566156002,
            "unit": "ns/iter",
            "extra": "iterations: 5555\ncpu: 125782.44824482537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80697.76994818682,
            "unit": "ns/iter",
            "extra": "iterations: 8685\ncpu: 80695.45192861249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127134.47481361796,
            "unit": "ns/iter",
            "extra": "iterations: 5499\ncpu: 127118.94889979906 ns\nthreads: 1"
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
        "date": 1702503979612,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1362.705687870291,
            "unit": "ns/iter",
            "extra": "iterations: 516907\ncpu: 1362.6789732002082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16614.500622713178,
            "unit": "ns/iter",
            "extra": "iterations: 49782\ncpu: 16614.25615684384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34118.48281243638,
            "unit": "ns/iter",
            "extra": "iterations: 23709\ncpu: 34118.668016365096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50941.74715650187,
            "unit": "ns/iter",
            "extra": "iterations: 16441\ncpu: 50940.08880238431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56804.47579999281,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56803.06000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71813.81907353259,
            "unit": "ns/iter",
            "extra": "iterations: 12132\ncpu: 71811.63864160898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84584.24798267294,
            "unit": "ns/iter",
            "extra": "iterations: 10162\ncpu: 84581.39145837439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98379.21660123221,
            "unit": "ns/iter",
            "extra": "iterations: 8915\ncpu: 98373.595064498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112869.29888340007,
            "unit": "ns/iter",
            "extra": "iterations: 7702\ncpu: 112865.80109062592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1127.2024852046525,
            "unit": "ns/iter",
            "extra": "iterations: 620633\ncpu: 1127.1633960810973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 921.0917678900788,
            "unit": "ns/iter",
            "extra": "iterations: 759623\ncpu: 921.0503104829625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 925.7615488672142,
            "unit": "ns/iter",
            "extra": "iterations: 756243\ncpu: 925.7277092151612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 945.4842987212854,
            "unit": "ns/iter",
            "extra": "iterations: 739271\ncpu: 945.4795332158292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1851.69098523083,
            "unit": "ns/iter",
            "extra": "iterations: 378490\ncpu: 1851.6584321910775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5035.161179784862,
            "unit": "ns/iter",
            "extra": "iterations: 159046\ncpu: 5034.999937125109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25111.35524088082,
            "unit": "ns/iter",
            "extra": "iterations: 32485\ncpu: 25110.54948437743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19960.172563353233,
            "unit": "ns/iter",
            "extra": "iterations: 41040\ncpu: 19959.539473684177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19658.214973930862,
            "unit": "ns/iter",
            "extra": "iterations: 41619\ncpu: 19657.375237271448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19097.09071329899,
            "unit": "ns/iter",
            "extra": "iterations: 42717\ncpu: 19097.197836926716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 55804.30759999899,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55804.699999999844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561073.513999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561043.1000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 567034.119974064,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 567018.8067444875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 569283.309446232,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 569276.1563517909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 565069.3939790481,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 565047.2513089027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 331493.4952740842,
            "unit": "ns/iter",
            "extra": "iterations: 2645\ncpu: 331489.6408317584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 563975.8576031048,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 563967.5902061865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2390926.187179514,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2390921.0256410264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1117284.183132449,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 1117262.650602413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3339679.669064438,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3339526.2589928117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8186.742830809565,
            "unit": "ns/iter",
            "extra": "iterations: 104161\ncpu: 8186.714797284985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44172.151414660664,
            "unit": "ns/iter",
            "extra": "iterations: 18697\ncpu: 44171.36439000911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 34610.51948160127,
            "unit": "ns/iter",
            "extra": "iterations: 23920\ncpu: 34610.3302675587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 34499.5451837551,
            "unit": "ns/iter",
            "extra": "iterations: 23836\ncpu: 34499.36230911223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 34300.11528770502,
            "unit": "ns/iter",
            "extra": "iterations: 24209\ncpu: 34300.3056714446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 69361.05762603747,
            "unit": "ns/iter",
            "extra": "iterations: 12477\ncpu: 69359.95030856771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 593850.7639999671,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593842.2999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 594562.7101845284,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 594559.808612436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 584521.5790181946,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 584511.4996637537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 589269.866938204,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 589266.8703326546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 342286.40821919084,
            "unit": "ns/iter",
            "extra": "iterations: 2555\ncpu: 342284.89236790605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578551.1797753047,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 578542.3661599439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2537948.999999859,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2537906.267029984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1114419.98081545,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1114369.0647481973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5013.429319999432,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5013.463000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26518.32914363189,
            "unit": "ns/iter",
            "extra": "iterations: 31108\ncpu: 26518.00822939447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19068.105802801485,
            "unit": "ns/iter",
            "extra": "iterations: 40670\ncpu: 19067.23629210716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18940.77008535176,
            "unit": "ns/iter",
            "extra": "iterations: 43116\ncpu: 18940.507004360352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18100.000980480898,
            "unit": "ns/iter",
            "extra": "iterations: 44876\ncpu: 18099.725911400274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 54138.02990000249,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54138.38999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 570940.571000051,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570944.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 571495.0246913566,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 571498.0506822631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 567132.2918011606,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 567115.4938670142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 571234.4023437825,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 571224.9999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332224.97235897335,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 332226.6565694803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559428.3817718218,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 559417.1446781415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 533.831049409548,
            "unit": "ns/iter",
            "extra": "iterations: 1310537\ncpu: 533.8333828041501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3090.9797402136633,
            "unit": "ns/iter",
            "extra": "iterations: 225570\ncpu: 3090.8950658332237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2495.322739488726,
            "unit": "ns/iter",
            "extra": "iterations: 290609\ncpu: 2495.3339366640407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2495.0012389817375,
            "unit": "ns/iter",
            "extra": "iterations: 289754\ncpu: 2494.950199134444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1957.9112551257958,
            "unit": "ns/iter",
            "extra": "iterations: 356291\ncpu: 1957.843448192623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16297.407191517366,
            "unit": "ns/iter",
            "extra": "iterations: 42717\ncpu: 16296.359763091836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30891.32343584552,
            "unit": "ns/iter",
            "extra": "iterations: 22632\ncpu: 30890.04948745175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7334.350937360307,
            "unit": "ns/iter",
            "extra": "iterations: 95641\ncpu: 7334.0105185015345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7237.132346236142,
            "unit": "ns/iter",
            "extra": "iterations: 96512\ncpu: 7237.097977453492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7349.654467810358,
            "unit": "ns/iter",
            "extra": "iterations: 95774\ncpu: 7349.693027335129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14820.669320515992,
            "unit": "ns/iter",
            "extra": "iterations: 47227\ncpu: 14820.138903593364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13862.306240898697,
            "unit": "ns/iter",
            "extra": "iterations: 50137\ncpu: 13861.521431278452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5214.007923848405,
            "unit": "ns/iter",
            "extra": "iterations: 134783\ncpu: 5213.704250536088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26349.37792730233,
            "unit": "ns/iter",
            "extra": "iterations: 26603\ncpu: 26348.23516144818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21224.635530351294,
            "unit": "ns/iter",
            "extra": "iterations: 32620\ncpu: 21223.458001226147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20950.673201438556,
            "unit": "ns/iter",
            "extra": "iterations: 33360\ncpu: 20949.808153477556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21418.448093219482,
            "unit": "ns/iter",
            "extra": "iterations: 32096\ncpu: 21418.170488534703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49413.954776350496,
            "unit": "ns/iter",
            "extra": "iterations: 14174\ncpu: 49413.32721885131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154778.7168848461,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 154779.60949633986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129798.41271330173,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 129798.01237577217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129611.94670613787,
            "unit": "ns/iter",
            "extra": "iterations: 5404\ncpu: 129611.45447816518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129926.92322133435,
            "unit": "ns/iter",
            "extra": "iterations: 5327\ncpu: 129922.26393842655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81639.22617626976,
            "unit": "ns/iter",
            "extra": "iterations: 8374\ncpu: 81638.3090518273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129971.33898937491,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 129967.79787432385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5154.33412773383,
            "unit": "ns/iter",
            "extra": "iterations: 135532\ncpu: 5154.325177817805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25877.93408981995,
            "unit": "ns/iter",
            "extra": "iterations: 27143\ncpu: 25877.813800979755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21923.425348313165,
            "unit": "ns/iter",
            "extra": "iterations: 31868\ncpu: 21923.120371532463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21506.30402141172,
            "unit": "ns/iter",
            "extra": "iterations: 32501\ncpu: 21506.2213470358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22164.830155868323,
            "unit": "ns/iter",
            "extra": "iterations: 31629\ncpu: 22164.241676942278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49311.869097052004,
            "unit": "ns/iter",
            "extra": "iterations: 14209\ncpu: 49311.13378844395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153555.27899825206,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 153552.19683655805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127314.18130671786,
            "unit": "ns/iter",
            "extra": "iterations: 5510\ncpu: 127314.86388384816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128392.57425743573,
            "unit": "ns/iter",
            "extra": "iterations: 5454\ncpu: 128388.96222955664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131467.8417781308,
            "unit": "ns/iter",
            "extra": "iterations: 5309\ncpu: 131467.2066302509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82327.82278033566,
            "unit": "ns/iter",
            "extra": "iterations: 8481\ncpu: 82325.56302322846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129377.67970933016,
            "unit": "ns/iter",
            "extra": "iterations: 5367\ncpu: 129377.04490404231 ns\nthreads: 1"
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
        "date": 1705575646859,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1325.8440467035402,
            "unit": "ns/iter",
            "extra": "iterations: 500605\ncpu: 1325.7720158608086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16216.863921700095,
            "unit": "ns/iter",
            "extra": "iterations: 49861\ncpu: 16215.641483323641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33776.53105943337,
            "unit": "ns/iter",
            "extra": "iterations: 24598\ncpu: 33775.80697617693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50221.445259390945,
            "unit": "ns/iter",
            "extra": "iterations: 16770\ncpu: 50219.397734048885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55595.049800001565,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55594.82000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70573.9252374084,
            "unit": "ns/iter",
            "extra": "iterations: 12426\ncpu: 70572.80701754386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83579.63292612806,
            "unit": "ns/iter",
            "extra": "iterations: 10314\ncpu: 83576.10044599576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96755.32662538189,
            "unit": "ns/iter",
            "extra": "iterations: 9044\ncpu: 96753.00751879699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113678.2680250881,
            "unit": "ns/iter",
            "extra": "iterations: 7656\ncpu: 113674.56896551719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1106.1025430564248,
            "unit": "ns/iter",
            "extra": "iterations: 631091\ncpu: 1106.0869193190847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 905.9318023119496,
            "unit": "ns/iter",
            "extra": "iterations: 773340\ncpu: 905.8919750691807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 905.6759994709224,
            "unit": "ns/iter",
            "extra": "iterations: 771258\ncpu: 905.6260032310842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 928.5029282537039,
            "unit": "ns/iter",
            "extra": "iterations: 743788\ncpu: 928.4683269964023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1810.8914569900533,
            "unit": "ns/iter",
            "extra": "iterations: 386667\ncpu: 1810.7606803787257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5168.439471186993,
            "unit": "ns/iter",
            "extra": "iterations: 152795\ncpu: 5168.035603259269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24800.607196671946,
            "unit": "ns/iter",
            "extra": "iterations: 33182\ncpu: 24798.948224941243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19835.395804535037,
            "unit": "ns/iter",
            "extra": "iterations: 41235\ncpu: 19833.983266642426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 20081.394751767424,
            "unit": "ns/iter",
            "extra": "iterations: 40547\ncpu: 20079.75682541249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19789.397666968067,
            "unit": "ns/iter",
            "extra": "iterations: 40891\ncpu: 19787.943557262053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 58714.75569999802,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58706.699999999764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 559388.1849999889,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559359.3000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 560430.9164007775,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 560385.5775366933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 559932.7975420252,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 559889.3919793015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561906.8455548618,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 561893.8351719661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 328818.72106050997,
            "unit": "ns/iter",
            "extra": "iterations: 2678\ncpu: 328796.415235251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 559779.0362224743,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 559729.9482535579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2390186.262210792,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2389973.7789203036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1104965.3393285053,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1104895.5635491617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3296631.512455608,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3296307.4733096045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7789.145549757327,
            "unit": "ns/iter",
            "extra": "iterations: 105792\ncpu: 7788.589874470674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 42807.13824979634,
            "unit": "ns/iter",
            "extra": "iterations: 19472\ncpu: 42805.659408381274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 32440.90335010811,
            "unit": "ns/iter",
            "extra": "iterations: 25432\ncpu: 32439.9142812205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32019.62042865276,
            "unit": "ns/iter",
            "extra": "iterations: 25895\ncpu: 32018.40509750913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32216.857043237625,
            "unit": "ns/iter",
            "extra": "iterations: 25812\ncpu: 32216.6666666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 68560.72776259347,
            "unit": "ns/iter",
            "extra": "iterations: 12805\ncpu: 68558.44591956299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 595108.9000000139,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595098.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593723.2914676181,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 593672.2184300354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 595097.3858807379,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 595037.4228923959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 592367.3888131187,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 592358.1173260584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 347724.51523657487,
            "unit": "ns/iter",
            "extra": "iterations: 2494\ncpu: 347688.0112269442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580382.048909454,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 580314.871116986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2535425.5519125066,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2535215.8469945365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1118789.7826086988,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 1118696.7391304371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5129.755259999911,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5129.114000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 27177.180141981004,
            "unit": "ns/iter",
            "extra": "iterations: 30426\ncpu: 27174.452770656695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 21349.372679627802,
            "unit": "ns/iter",
            "extra": "iterations: 38733\ncpu: 21347.902305527612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 21570.488118526206,
            "unit": "ns/iter",
            "extra": "iterations: 38337\ncpu: 21568.36476510943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 21023.03036657347,
            "unit": "ns/iter",
            "extra": "iterations: 38628\ncpu: 21021.753650201965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 55608.82629999924,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55605.99000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 577586.3479999544,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577563.4999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 575941.1059907842,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 575923.3048057947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 574064.650657952,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 574016.8421052609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 574583.7859947532,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 574537.3691099486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 338183.69590194453,
            "unit": "ns/iter",
            "extra": "iterations: 2611\ncpu: 338178.2075833012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562716.5216268185,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 562669.0768237574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 541.969076105578,
            "unit": "ns/iter",
            "extra": "iterations: 1287160\ncpu: 541.9196525684456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3055.6242877229643,
            "unit": "ns/iter",
            "extra": "iterations: 229721\ncpu: 3049.7734208017637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2259.713478959742,
            "unit": "ns/iter",
            "extra": "iterations: 308644\ncpu: 2259.671336556036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2353.711872907272,
            "unit": "ns/iter",
            "extra": "iterations: 295092\ncpu: 2353.644287205349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1862.2792846157693,
            "unit": "ns/iter",
            "extra": "iterations: 376469\ncpu: 1862.233278171648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16040.84880150205,
            "unit": "ns/iter",
            "extra": "iterations: 43638\ncpu: 16040.767221229207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30373.5896783276,
            "unit": "ns/iter",
            "extra": "iterations: 22787\ncpu: 30372.168341597975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7312.155154999835,
            "unit": "ns/iter",
            "extra": "iterations: 97032\ncpu: 7312.020776650913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7249.234278962812,
            "unit": "ns/iter",
            "extra": "iterations: 96479\ncpu: 7249.046942858033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7191.469206797401,
            "unit": "ns/iter",
            "extra": "iterations: 97554\ncpu: 7191.367857801775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14567.662171105267,
            "unit": "ns/iter",
            "extra": "iterations: 48344\ncpu: 14567.487175243974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13754.430457711933,
            "unit": "ns/iter",
            "extra": "iterations: 50818\ncpu: 13754.218977527657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5147.413729672387,
            "unit": "ns/iter",
            "extra": "iterations: 136449\ncpu: 5147.320244193747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25856.8623175018,
            "unit": "ns/iter",
            "extra": "iterations: 27055\ncpu: 25855.653298835623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20802.949636441535,
            "unit": "ns/iter",
            "extra": "iterations: 33695\ncpu: 20802.148686749053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20678.52433043029,
            "unit": "ns/iter",
            "extra": "iterations: 33641\ncpu: 20677.753336702288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21412.10948637209,
            "unit": "ns/iter",
            "extra": "iterations: 32689\ncpu: 21411.502340236737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48745.511131275285,
            "unit": "ns/iter",
            "extra": "iterations: 14329\ncpu: 48742.885058273154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 153492.1084099795,
            "unit": "ns/iter",
            "extra": "iterations: 4566\ncpu: 153487.62593079192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 127627.54329990059,
            "unit": "ns/iter",
            "extra": "iterations: 5485\ncpu: 127622.60711029932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128974.45060818667,
            "unit": "ns/iter",
            "extra": "iterations: 5426\ncpu: 128973.82970881101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129186.60155526765,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 129178.3373449372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81467.05971586258,
            "unit": "ns/iter",
            "extra": "iterations: 8306\ncpu: 81464.55574283516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129020.04900148045,
            "unit": "ns/iter",
            "extra": "iterations: 5408\ncpu: 129015.14423077121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5031.736287237726,
            "unit": "ns/iter",
            "extra": "iterations: 139341\ncpu: 5031.3059329271155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26568.83322591607,
            "unit": "ns/iter",
            "extra": "iterations: 26377\ncpu: 26567.58918755009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21924.764010686715,
            "unit": "ns/iter",
            "extra": "iterations: 31815\ncpu: 21923.699512808387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21597.360287008887,
            "unit": "ns/iter",
            "extra": "iterations: 32055\ncpu: 21596.175323662348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21981.548093232686,
            "unit": "ns/iter",
            "extra": "iterations: 31834\ncpu: 21980.83495633562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49101.80154169901,
            "unit": "ns/iter",
            "extra": "iterations: 14270\ncpu: 49100.89698668535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 150306.14763947672,
            "unit": "ns/iter",
            "extra": "iterations: 4660\ncpu: 150300.42918454978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 124667.75664111717,
            "unit": "ns/iter",
            "extra": "iterations: 5609\ncpu: 124665.82278480998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126674.25689404664,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 126672.5689404929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126866.49111353331,
            "unit": "ns/iter",
            "extra": "iterations: 5514\ncpu: 126862.96699310961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80096.05631223749,
            "unit": "ns/iter",
            "extra": "iterations: 8737\ncpu: 80094.55190568813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126716.29573391896,
            "unit": "ns/iter",
            "extra": "iterations: 5532\ncpu: 126712.52711496594 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}