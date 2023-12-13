window.BENCHMARK_DATA = {
  "lastUpdate": 1702504657099,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-14 22.04 Release c++-17": [
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
        "date": 1702490995975,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 740.0093319524319,
            "unit": "ns/iter",
            "extra": "iterations: 958749\ncpu: 739.9679165245545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11240.515848310233,
            "unit": "ns/iter",
            "extra": "iterations: 73888\ncpu: 11240.095820701601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25099.042723992505,
            "unit": "ns/iter",
            "extra": "iterations: 33260\ncpu: 25098.153938665055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39222.35491040646,
            "unit": "ns/iter",
            "extra": "iterations: 21597\ncpu: 39221.1603463444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50410.64570152667,
            "unit": "ns/iter",
            "extra": "iterations: 16122\ncpu: 50408.578340156295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51099.05430000481,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51096.86 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61863.15480000531,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61863.41999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69956.08590526211,
            "unit": "ns/iter",
            "extra": "iterations: 12118\ncpu: 69953.59795345762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80456.76211040381,
            "unit": "ns/iter",
            "extra": "iterations: 10652\ncpu: 80451.82125422459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 614.7597498085602,
            "unit": "ns/iter",
            "extra": "iterations: 1129535\ncpu: 614.7259713067776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 517.5172862001192,
            "unit": "ns/iter",
            "extra": "iterations: 1351743\ncpu: 517.5051026711442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 511.8757199830811,
            "unit": "ns/iter",
            "extra": "iterations: 1369303\ncpu: 511.86085183483823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 518.7250369562856,
            "unit": "ns/iter",
            "extra": "iterations: 1346861\ncpu: 518.7211597930304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1055.151944786061,
            "unit": "ns/iter",
            "extra": "iterations: 659687\ncpu: 1055.092490832775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4216.718878026631,
            "unit": "ns/iter",
            "extra": "iterations: 190878\ncpu: 4216.522595584609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19486.270861221816,
            "unit": "ns/iter",
            "extra": "iterations: 42579\ncpu: 19470.304610253883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15183.525258515196,
            "unit": "ns/iter",
            "extra": "iterations: 53962\ncpu: 15182.432081835355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14453.18709213329,
            "unit": "ns/iter",
            "extra": "iterations: 57004\ncpu: 14452.441933899418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15165.786730562157,
            "unit": "ns/iter",
            "extra": "iterations: 53838\ncpu: 15164.705226791517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47224.71524828723,
            "unit": "ns/iter",
            "extra": "iterations: 17661\ncpu: 47222.82996432814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 480114.0593784462,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 480071.1986681465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 391673.83213000844,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 391629.1064981942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 388253.00677509734,
            "unit": "ns/iter",
            "extra": "iterations: 2214\ncpu: 388242.6829268295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 395570.0142136956,
            "unit": "ns/iter",
            "extra": "iterations: 2181\ncpu: 395552.08619899146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 242763.40421402548,
            "unit": "ns/iter",
            "extra": "iterations: 3607\ncpu: 242757.66565012487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 393415.1147763086,
            "unit": "ns/iter",
            "extra": "iterations: 2213\ncpu: 393403.6601897883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1998415.4516130788,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1998148.6021505387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 815220.0838375068,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 815186.4304235087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2543681.505586435,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2543593.5754189948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4064.8801230386334,
            "unit": "ns/iter",
            "extra": "iterations: 197661\ncpu: 4064.637434799981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19199.88393917572,
            "unit": "ns/iter",
            "extra": "iterations: 42943\ncpu: 19198.637729082748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15473.075614860409,
            "unit": "ns/iter",
            "extra": "iterations: 53508\ncpu: 15472.275173805763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14733.289068361495,
            "unit": "ns/iter",
            "extra": "iterations: 55966\ncpu: 14732.360719007924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15541.142112824344,
            "unit": "ns/iter",
            "extra": "iterations: 52205\ncpu: 15540.408006895894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46992.371332727744,
            "unit": "ns/iter",
            "extra": "iterations: 17588\ncpu: 46988.19649761187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 495262.9680000037,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 495258.05714285653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 402393.9856015212,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 402372.45703669084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 399573.7293956274,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 399538.09523809626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 400804.9404216582,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 400777.4518790125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 238906.0479804617,
            "unit": "ns/iter",
            "extra": "iterations: 3689\ncpu: 238880.5096232034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 397510.53769300436,
            "unit": "ns/iter",
            "extra": "iterations: 2202\ncpu: 397495.7311534959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1997374.7846154436,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 1997108.131868139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 779882.4478476037,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 779838.6589403985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4276.088042343741,
            "unit": "ns/iter",
            "extra": "iterations: 187796\ncpu: 4275.906835076346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19027.561428768277,
            "unit": "ns/iter",
            "extra": "iterations: 43758\ncpu: 19026.315188079963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15185.375884835297,
            "unit": "ns/iter",
            "extra": "iterations: 54530\ncpu: 15184.62314322394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14492.376149359518,
            "unit": "ns/iter",
            "extra": "iterations: 57097\ncpu: 14491.256983729394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15287.64580288237,
            "unit": "ns/iter",
            "extra": "iterations: 54049\ncpu: 15286.501137856398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47725.166647632315,
            "unit": "ns/iter",
            "extra": "iterations: 17510\ncpu: 47718.68075385471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 478830.5815760218,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 478798.1687014414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 395460.20082534675,
            "unit": "ns/iter",
            "extra": "iterations: 2181\ncpu: 395418.29436038557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 391076.96117381623,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 391052.3702031591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 394786.56043956516,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 394753.9377289371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 240277.7497955828,
            "unit": "ns/iter",
            "extra": "iterations: 3669\ncpu: 240256.20059961718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 387418.8678057496,
            "unit": "ns/iter",
            "extra": "iterations: 2224\ncpu: 387399.05575539276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 312.43451678219236,
            "unit": "ns/iter",
            "extra": "iterations: 2241246\ncpu: 312.40992733506204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1664.5252536295432,
            "unit": "ns/iter",
            "extra": "iterations: 420791\ncpu: 1664.4253322908605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1250.467327959899,
            "unit": "ns/iter",
            "extra": "iterations: 559913\ncpu: 1250.344607108603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1274.5178891672695,
            "unit": "ns/iter",
            "extra": "iterations: 550361\ncpu: 1274.4498610911653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1070.8417344679992,
            "unit": "ns/iter",
            "extra": "iterations: 651658\ncpu: 1070.8465176519014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8081.859962395153,
            "unit": "ns/iter",
            "extra": "iterations: 86691\ncpu: 8081.661302788079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19056.591191640124,
            "unit": "ns/iter",
            "extra": "iterations: 37805\ncpu: 19055.312789313553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4544.857337848637,
            "unit": "ns/iter",
            "extra": "iterations: 153853\ncpu: 4544.828505131524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4538.522631575435,
            "unit": "ns/iter",
            "extra": "iterations: 153657\ncpu: 4538.188953318154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4592.052551050823,
            "unit": "ns/iter",
            "extra": "iterations: 152937\ncpu: 4591.727312553567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9630.228107198089,
            "unit": "ns/iter",
            "extra": "iterations: 72501\ncpu: 9629.363732914015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8582.22567673613,
            "unit": "ns/iter",
            "extra": "iterations: 81568\ncpu: 8581.898538642698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2411.045537165022,
            "unit": "ns/iter",
            "extra": "iterations: 290488\ncpu: 2411.056566880567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11911.48155204445,
            "unit": "ns/iter",
            "extra": "iterations: 58787\ncpu: 11910.049840951247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9451.246926313033,
            "unit": "ns/iter",
            "extra": "iterations: 73690\ncpu: 9450.629664811893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9365.726382357258,
            "unit": "ns/iter",
            "extra": "iterations: 74637\ncpu: 9364.794940847058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9992.711323421496,
            "unit": "ns/iter",
            "extra": "iterations: 70023\ncpu: 9992.091170044114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24836.576766156875,
            "unit": "ns/iter",
            "extra": "iterations: 27942\ncpu: 24834.145730441305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98241.02789850369,
            "unit": "ns/iter",
            "extra": "iterations: 7133\ncpu: 98239.78690592888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84085.75156400436,
            "unit": "ns/iter",
            "extra": "iterations: 8312\ncpu: 84080.3657362847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 81945.67303186664,
            "unit": "ns/iter",
            "extra": "iterations: 8536\ncpu: 81935.26241799488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 82840.2292429509,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 82836.43557340316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52002.69185959775,
            "unit": "ns/iter",
            "extra": "iterations: 13390\ncpu: 51998.70052277798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83333.9533777306,
            "unit": "ns/iter",
            "extra": "iterations: 8408\ncpu: 83331.66032350119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2348.459004949782,
            "unit": "ns/iter",
            "extra": "iterations: 299402\ncpu: 2348.3774323484936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11711.248692112165,
            "unit": "ns/iter",
            "extra": "iterations: 59447\ncpu: 11710.126667451637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9277.193621051989,
            "unit": "ns/iter",
            "extra": "iterations: 75467\ncpu: 9276.77792942605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9240.490585692143,
            "unit": "ns/iter",
            "extra": "iterations: 75842\ncpu: 9239.718098151347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9675.93664262534,
            "unit": "ns/iter",
            "extra": "iterations: 72241\ncpu: 9675.387937597807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23584.58618142782,
            "unit": "ns/iter",
            "extra": "iterations: 29786\ncpu: 23584.69750889677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95493.54575478505,
            "unit": "ns/iter",
            "extra": "iterations: 7267\ncpu: 95487.35379110929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80948.86638927595,
            "unit": "ns/iter",
            "extra": "iterations: 8652\ncpu: 80947.9079981504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 79599.31184389647,
            "unit": "ns/iter",
            "extra": "iterations: 8764\ncpu: 79598.14011866652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 79710.80608846177,
            "unit": "ns/iter",
            "extra": "iterations: 8705\ncpu: 79707.99540493968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52302.55282849325,
            "unit": "ns/iter",
            "extra": "iterations: 13364\ncpu: 52301.69111044683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81690.2527038024,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 81683.28875450695 ns\nthreads: 1"
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
        "date": 1702493612409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 726.6034788424538,
            "unit": "ns/iter",
            "extra": "iterations: 962849\ncpu: 726.5544233831059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11207.576184864627,
            "unit": "ns/iter",
            "extra": "iterations: 73827\ncpu: 11206.94055020521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25071.16836033302,
            "unit": "ns/iter",
            "extra": "iterations: 33458\ncpu: 25070.165580728073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40102.33047548267,
            "unit": "ns/iter",
            "extra": "iterations: 20295\ncpu: 40099.38408474992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49648.758532576714,
            "unit": "ns/iter",
            "extra": "iterations: 16437\ncpu: 49647.770274381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51264.43919999701,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51260.54 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62242.332700009225,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62240.07 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71667.93975304028,
            "unit": "ns/iter",
            "extra": "iterations: 12067\ncpu: 71663.56178006131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82191.08079767933,
            "unit": "ns/iter",
            "extra": "iterations: 10681\ncpu: 82190.89972848979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 614.2842811792875,
            "unit": "ns/iter",
            "extra": "iterations: 1143171\ncpu: 614.2851769332843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 522.6159402170389,
            "unit": "ns/iter",
            "extra": "iterations: 1335766\ncpu: 522.5711689023377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 518.5788109425974,
            "unit": "ns/iter",
            "extra": "iterations: 1349876\ncpu: 518.5487407732265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 524.4765277628844,
            "unit": "ns/iter",
            "extra": "iterations: 1336153\ncpu: 524.4455537651745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1039.5202103095714,
            "unit": "ns/iter",
            "extra": "iterations: 673864\ncpu: 1039.5248892951704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4206.447663634702,
            "unit": "ns/iter",
            "extra": "iterations: 190317\ncpu: 4206.232759028354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19333.877998955064,
            "unit": "ns/iter",
            "extra": "iterations: 42098\ncpu: 19333.40301201959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15457.80278606231,
            "unit": "ns/iter",
            "extra": "iterations: 52978\ncpu: 15456.995356563091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14754.925026020812,
            "unit": "ns/iter",
            "extra": "iterations: 55726\ncpu: 14755.001256146112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15502.148104041244,
            "unit": "ns/iter",
            "extra": "iterations: 52902\ncpu: 15501.954557483628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47689.595144243605,
            "unit": "ns/iter",
            "extra": "iterations: 17505\ncpu: 47688.449014567326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 492327.01916569646,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 492264.8816234487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 396413.6300046439,
            "unit": "ns/iter",
            "extra": "iterations: 2173\ncpu: 396398.89553612523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 393661.4950045539,
            "unit": "ns/iter",
            "extra": "iterations: 2202\ncpu: 393664.12352406996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 396915.26807922235,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 396915.4306771072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 242616.33812950284,
            "unit": "ns/iter",
            "extra": "iterations: 3614\ncpu: 242620.03320420545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 390460.54112358426,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 390461.168539325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1982167.4603853659,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1982044.111349035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 775340.0272276632,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 775345.7095709573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2536222.0716254446,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2536068.3195592226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4136.320329619079,
            "unit": "ns/iter",
            "extra": "iterations: 192586\ncpu: 4136.288722960128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18897.468745712773,
            "unit": "ns/iter",
            "extra": "iterations: 43738\ncpu: 18897.56733275415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15153.14145462702,
            "unit": "ns/iter",
            "extra": "iterations: 54392\ncpu: 15153.121782615064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14453.28571679037,
            "unit": "ns/iter",
            "extra": "iterations: 57039\ncpu: 14453.26706288685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15270.704249880553,
            "unit": "ns/iter",
            "extra": "iterations: 53978\ncpu: 15270.53984956835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47789.433722701564,
            "unit": "ns/iter",
            "extra": "iterations: 17721\ncpu: 47789.65633993553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 492229.6906515865,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 492226.28895184194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 399705.20356001094,
            "unit": "ns/iter",
            "extra": "iterations: 2191\ncpu: 399711.41031492344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 396693.3416402759,
            "unit": "ns/iter",
            "extra": "iterations: 2207\ncpu: 396695.2877208882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 398592.9945578238,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 398594.5578231288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 239597.57555131408,
            "unit": "ns/iter",
            "extra": "iterations: 3673\ncpu: 239596.596787366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 396510.88048887934,
            "unit": "ns/iter",
            "extra": "iterations: 2209\ncpu: 396512.5848800366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2003364.017543855,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2003273.2456140304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 775645.2273858761,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 775638.3402489636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4249.044425817054,
            "unit": "ns/iter",
            "extra": "iterations: 187301\ncpu: 4249.081958985812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19042.93523166247,
            "unit": "ns/iter",
            "extra": "iterations: 43231\ncpu: 19042.999236659005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15213.80631231727,
            "unit": "ns/iter",
            "extra": "iterations: 53958\ncpu: 15213.955298565454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14470.461633750794,
            "unit": "ns/iter",
            "extra": "iterations: 56508\ncpu: 14470.324555815152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15169.065222686319,
            "unit": "ns/iter",
            "extra": "iterations: 53371\ncpu: 15169.222986265931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47918.4365162029,
            "unit": "ns/iter",
            "extra": "iterations: 17280\ncpu: 47918.767361110746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 474859.3393050961,
            "unit": "ns/iter",
            "extra": "iterations: 1842\ncpu: 474862.269272528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 391924.9852414679,
            "unit": "ns/iter",
            "extra": "iterations: 2236\ncpu: 391931.0822898042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 387762.1926483878,
            "unit": "ns/iter",
            "extra": "iterations: 2258\ncpu: 387764.3046944212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 391309.74321881303,
            "unit": "ns/iter",
            "extra": "iterations: 2212\ncpu: 391315.5967450265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 241926.80853391855,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 241928.4190372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 385837.3577092771,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 385843.0837004426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 310.73735147463,
            "unit": "ns/iter",
            "extra": "iterations: 2251804\ncpu: 310.7420095177038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1643.976909696969,
            "unit": "ns/iter",
            "extra": "iterations: 426586\ncpu: 1643.979877445588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1331.1358628562875,
            "unit": "ns/iter",
            "extra": "iterations: 537888\ncpu: 1331.1453313700972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1295.9360027663408,
            "unit": "ns/iter",
            "extra": "iterations: 540789\ncpu: 1295.9448139662593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1081.0696574857536,
            "unit": "ns/iter",
            "extra": "iterations: 647827\ncpu: 1081.0739595601935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8188.065497115698,
            "unit": "ns/iter",
            "extra": "iterations: 86187\ncpu: 8188.202397113281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19248.32743484992,
            "unit": "ns/iter",
            "extra": "iterations: 36224\ncpu: 19248.43750000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4611.791085324563,
            "unit": "ns/iter",
            "extra": "iterations: 152019\ncpu: 4611.861017372871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4576.776973813033,
            "unit": "ns/iter",
            "extra": "iterations: 153130\ncpu: 4576.792921047476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4591.480517780146,
            "unit": "ns/iter",
            "extra": "iterations: 152729\ncpu: 4591.553012198128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9628.568660812554,
            "unit": "ns/iter",
            "extra": "iterations: 72880\ncpu: 9628.61553238204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8700.592687708455,
            "unit": "ns/iter",
            "extra": "iterations: 79045\ncpu: 8700.724903535887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2418.0099359230653,
            "unit": "ns/iter",
            "extra": "iterations: 291367\ncpu: 2417.988996694888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11903.174966924333,
            "unit": "ns/iter",
            "extra": "iterations: 58954\ncpu: 11903.21776300153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9436.296954075098,
            "unit": "ns/iter",
            "extra": "iterations: 74099\ncpu: 9436.329775030687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9364.175212079268,
            "unit": "ns/iter",
            "extra": "iterations: 74972\ncpu: 9364.226644613977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9920.05766394376,
            "unit": "ns/iter",
            "extra": "iterations: 70512\ncpu: 9920.24336283184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24697.58782737133,
            "unit": "ns/iter",
            "extra": "iterations: 28408\ncpu: 24697.68375105586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 96740.82748133418,
            "unit": "ns/iter",
            "extra": "iterations: 7234\ncpu: 96742.49377937455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83071.81971495277,
            "unit": "ns/iter",
            "extra": "iterations: 8420\ncpu: 83072.32779097478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 81895.20645690257,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 81895.5316411283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 82194.69905074287,
            "unit": "ns/iter",
            "extra": "iterations: 8533\ncpu: 82196.13266143159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52025.528762039765,
            "unit": "ns/iter",
            "extra": "iterations: 13490\ncpu: 52025.70051890274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 82290.129316416,
            "unit": "ns/iter",
            "extra": "iterations: 8514\ncpu: 82291.37890533287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2337.7375070972525,
            "unit": "ns/iter",
            "extra": "iterations: 299410\ncpu: 2337.7402224374678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11570.431378715663,
            "unit": "ns/iter",
            "extra": "iterations: 60404\ncpu: 11570.611217800342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9269.720674011201,
            "unit": "ns/iter",
            "extra": "iterations: 75607\ncpu: 9269.86522411954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9115.975009777152,
            "unit": "ns/iter",
            "extra": "iterations: 76710\ncpu: 9115.995307000336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9571.303733203,
            "unit": "ns/iter",
            "extra": "iterations: 73074\ncpu: 9571.452226510168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23575.59134615711,
            "unit": "ns/iter",
            "extra": "iterations: 29744\ncpu: 23575.41352877929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96350.53604284665,
            "unit": "ns/iter",
            "extra": "iterations: 7283\ncpu: 96352.02526431478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80513.14431791777,
            "unit": "ns/iter",
            "extra": "iterations: 8606\ncpu: 80514.44341157352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 79289.81659835906,
            "unit": "ns/iter",
            "extra": "iterations: 8784\ncpu: 79289.12795992802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 80000.6017810264,
            "unit": "ns/iter",
            "extra": "iterations: 8759\ncpu: 80001.92944399994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52254.974479873126,
            "unit": "ns/iter",
            "extra": "iterations: 13362\ncpu: 52255.30609190252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 80766.9673459876,
            "unit": "ns/iter",
            "extra": "iterations: 8636\ncpu: 80768.30708661463 ns\nthreads: 1"
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
        "date": 1702504656685,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 725.0940682876617,
            "unit": "ns/iter",
            "extra": "iterations: 968169\ncpu: 725.0754775251015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11223.85665791988,
            "unit": "ns/iter",
            "extra": "iterations: 73942\ncpu: 11223.751048118798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24954.77789404462,
            "unit": "ns/iter",
            "extra": "iterations: 33448\ncpu: 24954.155704376935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39094.363094945715,
            "unit": "ns/iter",
            "extra": "iterations: 20149\ncpu: 39093.92525683657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49201.6081835148,
            "unit": "ns/iter",
            "extra": "iterations: 16130\ncpu: 49200.117792932426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51047.69380000107,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51048.10000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61993.88619999126,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61992.820000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71102.98351512723,
            "unit": "ns/iter",
            "extra": "iterations: 12193\ncpu: 71099.91798572948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81750.90451697749,
            "unit": "ns/iter",
            "extra": "iterations: 10693\ncpu: 81749.55578415794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 607.527480004909,
            "unit": "ns/iter",
            "extra": "iterations: 1153657\ncpu: 607.517659061576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 501.0916163362299,
            "unit": "ns/iter",
            "extra": "iterations: 1297094\ncpu: 501.0538943206897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 493.3998475348063,
            "unit": "ns/iter",
            "extra": "iterations: 1418028\ncpu: 493.37565971899005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 503.26627471886474,
            "unit": "ns/iter",
            "extra": "iterations: 1391852\ncpu: 503.24926788193017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1039.492267976215,
            "unit": "ns/iter",
            "extra": "iterations: 674015\ncpu: 1039.4250869787752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4229.907845729098,
            "unit": "ns/iter",
            "extra": "iterations: 190626\ncpu: 4229.755647183493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19293.003415523617,
            "unit": "ns/iter",
            "extra": "iterations: 42746\ncpu: 19292.08814859871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15489.20942241341,
            "unit": "ns/iter",
            "extra": "iterations: 53256\ncpu: 15488.694231635885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14074.812275235514,
            "unit": "ns/iter",
            "extra": "iterations: 58394\ncpu: 14074.266191732042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15148.739603303131,
            "unit": "ns/iter",
            "extra": "iterations: 54248\ncpu: 15148.241409821576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47020.95248004008,
            "unit": "ns/iter",
            "extra": "iterations: 17782\ncpu: 47018.12507029572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 486523.40286190395,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 486391.90974132996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 392894.29262777104,
            "unit": "ns/iter",
            "extra": "iterations: 2211\ncpu: 392883.3559475356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 391798.4648139878,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 391790.27341999154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 394425.2509107584,
            "unit": "ns/iter",
            "extra": "iterations: 2196\ncpu: 394421.53916211345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 242950.3214086038,
            "unit": "ns/iter",
            "extra": "iterations: 3578\ncpu: 242944.49413079937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 389162.2649841821,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 389157.0977917978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1991473.6982758148,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1991240.9482758595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 772172.1765188952,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 772143.1034482769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2550268.0359115843,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2550110.7734806663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4131.71716309778,
            "unit": "ns/iter",
            "extra": "iterations: 189855\ncpu: 4131.655210555426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19290.409393164937,
            "unit": "ns/iter",
            "extra": "iterations: 43010\ncpu: 19290.18367821434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15510.545234065434,
            "unit": "ns/iter",
            "extra": "iterations: 53190\ncpu: 15510.406091370549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14791.486245925664,
            "unit": "ns/iter",
            "extra": "iterations: 55838\ncpu: 14791.267595544246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15600.917608458189,
            "unit": "ns/iter",
            "extra": "iterations: 52117\ncpu: 15600.48928372696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47649.62439917665,
            "unit": "ns/iter",
            "extra": "iterations: 17476\ncpu: 47649.26756694895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 496031.3183371045,
            "unit": "ns/iter",
            "extra": "iterations: 1756\ncpu: 496017.08428246086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 402219.0976852113,
            "unit": "ns/iter",
            "extra": "iterations: 2160\ncpu: 402216.1574074057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 399640.0899132702,
            "unit": "ns/iter",
            "extra": "iterations: 2191\ncpu: 399629.8950251055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 397724.90158730204,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 397716.1451247175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 235936.43692722273,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 235934.07008086203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 396857.5699551394,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 396849.2825112101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1992703.50438596,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 1992403.0701754447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 783380.299325515,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 783339.7976391214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4277.746420051233,
            "unit": "ns/iter",
            "extra": "iterations: 188201\ncpu: 4277.62073527772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19093.38375337414,
            "unit": "ns/iter",
            "extra": "iterations: 43726\ncpu: 19092.85093537026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15298.902393869881,
            "unit": "ns/iter",
            "extra": "iterations: 54556\ncpu: 15298.480460444258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14611.989034434899,
            "unit": "ns/iter",
            "extra": "iterations: 57179\ncpu: 14611.413281099645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15400.454530383211,
            "unit": "ns/iter",
            "extra": "iterations: 54289\ncpu: 15400.027629906675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48121.29046093887,
            "unit": "ns/iter",
            "extra": "iterations: 17486\ncpu: 48121.222692439456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 476406.1696969593,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 476387.38292010745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 393800.72854565963,
            "unit": "ns/iter",
            "extra": "iterations: 2214\ncpu: 393789.70189701876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 390406.11359570967,
            "unit": "ns/iter",
            "extra": "iterations: 2236\ncpu: 390387.43291591987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 392793.07120322465,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 392779.08968003595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 236710.70669185987,
            "unit": "ns/iter",
            "extra": "iterations: 3706\ncpu: 236708.52671343772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 386741.0713648633,
            "unit": "ns/iter",
            "extra": "iterations: 2242\ncpu: 386723.6842105275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 324.39038901709165,
            "unit": "ns/iter",
            "extra": "iterations: 2162630\ncpu: 324.3792049495306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1679.850252285404,
            "unit": "ns/iter",
            "extra": "iterations: 416988\ncpu: 1679.7939029420497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1261.3566365379738,
            "unit": "ns/iter",
            "extra": "iterations: 554845\ncpu: 1261.3677693770212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1303.138732094576,
            "unit": "ns/iter",
            "extra": "iterations: 538037\ncpu: 1303.1486682142672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1072.5849689292756,
            "unit": "ns/iter",
            "extra": "iterations: 653992\ncpu: 1072.5395723495096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8149.816236033017,
            "unit": "ns/iter",
            "extra": "iterations: 85920\ncpu: 8149.535614525112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19735.41593044617,
            "unit": "ns/iter",
            "extra": "iterations: 35542\ncpu: 19734.426875245907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4631.812636266489,
            "unit": "ns/iter",
            "extra": "iterations: 150899\ncpu: 4631.589341215026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4601.411049643832,
            "unit": "ns/iter",
            "extra": "iterations: 152023\ncpu: 4601.392552442715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4634.204584406239,
            "unit": "ns/iter",
            "extra": "iterations: 151121\ncpu: 4634.237465342348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9710.284444693629,
            "unit": "ns/iter",
            "extra": "iterations: 71564\ncpu: 9710.227209211336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8800.229484942272,
            "unit": "ns/iter",
            "extra": "iterations: 79661\ncpu: 8799.929702112659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2431.918361188923,
            "unit": "ns/iter",
            "extra": "iterations: 288331\ncpu: 2431.7895058110225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12038.61964601566,
            "unit": "ns/iter",
            "extra": "iterations: 58251\ncpu: 12038.186468901806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9616.900883595908,
            "unit": "ns/iter",
            "extra": "iterations: 72884\ncpu: 9616.352011415278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9487.55902429764,
            "unit": "ns/iter",
            "extra": "iterations: 73834\ncpu: 9487.543679063765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10046.877253095749,
            "unit": "ns/iter",
            "extra": "iterations: 69460\ncpu: 10046.847106248297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24865.58080034352,
            "unit": "ns/iter",
            "extra": "iterations: 28063\ncpu: 24865.003741581462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97557.34650709065,
            "unit": "ns/iter",
            "extra": "iterations: 7186\ncpu: 97553.65989423778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83552.27895556799,
            "unit": "ns/iter",
            "extra": "iterations: 8349\ncpu: 83548.26925380362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82089.00609399583,
            "unit": "ns/iter",
            "extra": "iterations: 8533\ncpu: 82085.15176374068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 82291.8108361727,
            "unit": "ns/iter",
            "extra": "iterations: 8527\ncpu: 82291.43895860198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52114.58854978474,
            "unit": "ns/iter",
            "extra": "iterations: 13467\ncpu: 52112.30415088782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 82556.66745393931,
            "unit": "ns/iter",
            "extra": "iterations: 8468\ncpu: 82553.57817666467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2356.6578089031123,
            "unit": "ns/iter",
            "extra": "iterations: 298006\ncpu: 2356.549868123442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11780.045381829817,
            "unit": "ns/iter",
            "extra": "iterations: 59385\ncpu: 11779.466195167233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9425.922973373245,
            "unit": "ns/iter",
            "extra": "iterations: 74286\ncpu: 9425.51220956846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9156.584552102522,
            "unit": "ns/iter",
            "extra": "iterations: 74392\ncpu: 9156.457683621955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9744.151778382186,
            "unit": "ns/iter",
            "extra": "iterations: 71835\ncpu: 9743.715459038014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23972.5575200057,
            "unit": "ns/iter",
            "extra": "iterations: 29242\ncpu: 23971.40756446204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96805.09706857364,
            "unit": "ns/iter",
            "extra": "iterations: 7232\ncpu: 96800.20741150502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81651.9469140142,
            "unit": "ns/iter",
            "extra": "iterations: 8571\ncpu: 81647.60238011909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80922.30227457125,
            "unit": "ns/iter",
            "extra": "iterations: 8661\ncpu: 80917.28437824782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81447.91276496937,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 81448.55578849338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52410.47479432216,
            "unit": "ns/iter",
            "extra": "iterations: 13370\ncpu: 52407.98803290902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81719.39253871358,
            "unit": "ns/iter",
            "extra": "iterations: 8524\ncpu: 81715.7203190988 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}