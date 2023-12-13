window.BENCHMARK_DATA = {
  "lastUpdate": 1702490996385,
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
      }
    ]
  }
}