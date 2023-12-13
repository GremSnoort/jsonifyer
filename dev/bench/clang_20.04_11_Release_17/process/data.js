window.BENCHMARK_DATA = {
  "lastUpdate": 1702492928487,
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
      }
    ]
  }
}