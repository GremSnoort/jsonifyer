window.BENCHMARK_DATA = {
  "lastUpdate": 1705954291584,
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
        "date": 1705576309474,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 729.6872914299665,
            "unit": "ns/iter",
            "extra": "iterations: 959510\ncpu: 729.6577419724653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11199.374574424248,
            "unit": "ns/iter",
            "extra": "iterations: 74311\ncpu: 11198.896529450556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24933.330845917753,
            "unit": "ns/iter",
            "extra": "iterations: 33502\ncpu: 24884.117366127393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41281.36802358125,
            "unit": "ns/iter",
            "extra": "iterations: 21716\ncpu: 41277.96555535088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49532.404219773845,
            "unit": "ns/iter",
            "extra": "iterations: 16162\ncpu: 49530.435589654735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51116.671999989194,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51114.909999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61698.13160000786,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61694.05000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70982.54519309755,
            "unit": "ns/iter",
            "extra": "iterations: 12170\ncpu: 70978.14297452752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80790.90870409824,
            "unit": "ns/iter",
            "extra": "iterations: 10811\ncpu: 80786.66173341963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 597.9267631604779,
            "unit": "ns/iter",
            "extra": "iterations: 1171405\ncpu: 597.9177141979078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 507.3852153449011,
            "unit": "ns/iter",
            "extra": "iterations: 1385220\ncpu: 507.3698040744425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 505.84014475778895,
            "unit": "ns/iter",
            "extra": "iterations: 1386592\ncpu: 505.8163468417524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 507.75454194052884,
            "unit": "ns/iter",
            "extra": "iterations: 1376284\ncpu: 507.7299452729227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1033.485377801671,
            "unit": "ns/iter",
            "extra": "iterations: 684473\ncpu: 1033.4122748450284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4211.768780987969,
            "unit": "ns/iter",
            "extra": "iterations: 191204\ncpu: 4211.585008681833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19356.868631510384,
            "unit": "ns/iter",
            "extra": "iterations: 42514\ncpu: 19355.184174624814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15515.933002108279,
            "unit": "ns/iter",
            "extra": "iterations: 53136\ncpu: 15515.003011141209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14530.752046255988,
            "unit": "ns/iter",
            "extra": "iterations: 55345\ncpu: 14529.102899990994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15115.074178214332,
            "unit": "ns/iter",
            "extra": "iterations: 54059\ncpu: 15114.541519450991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47490.403020979706,
            "unit": "ns/iter",
            "extra": "iterations: 17875\ncpu: 47487.53006993016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 466282.3030634604,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 466257.4398249454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 388015.44569119316,
            "unit": "ns/iter",
            "extra": "iterations: 2228\ncpu: 387995.5116696582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 389391.786065236,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 389382.0455560517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 392987.2953203304,
            "unit": "ns/iter",
            "extra": "iterations: 2201\ncpu: 392969.1049522942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 241364.05675146883,
            "unit": "ns/iter",
            "extra": "iterations: 3577\ncpu: 241348.58820240476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 387276.5228381161,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 387247.89356984466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1991293.3728448444,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1991021.1206896564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 792098.164429579,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 792061.4093959732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2552693.180055307,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2552455.1246537394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4194.902033175392,
            "unit": "ns/iter",
            "extra": "iterations: 191769\ncpu: 4194.794257674597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18923.316272695916,
            "unit": "ns/iter",
            "extra": "iterations: 43785\ncpu: 18922.770355144432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15184.93967914924,
            "unit": "ns/iter",
            "extra": "iterations: 54293\ncpu: 15184.511815519494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14410.985393770845,
            "unit": "ns/iter",
            "extra": "iterations: 56962\ncpu: 14410.710649204762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15235.377513015594,
            "unit": "ns/iter",
            "extra": "iterations: 53969\ncpu: 15235.099779503087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47475.30107404503,
            "unit": "ns/iter",
            "extra": "iterations: 17597\ncpu: 47474.427459226135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 494928.5561861787,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 494910.49943245953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 402487.70929161663,
            "unit": "ns/iter",
            "extra": "iterations: 2174\ncpu: 402487.9944802229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 401266.17486335605,
            "unit": "ns/iter",
            "extra": "iterations: 2196\ncpu: 401257.877959927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 395569.06681922165,
            "unit": "ns/iter",
            "extra": "iterations: 2185\ncpu: 395557.6201373003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 241377.8440567048,
            "unit": "ns/iter",
            "extra": "iterations: 3668\ncpu: 241375.5179934563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 394547.5392245025,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 394535.0766456286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2004234.8118159864,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2004060.1750547031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 780397.2522973338,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 780367.7527151237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4273.686924434859,
            "unit": "ns/iter",
            "extra": "iterations: 188076\ncpu: 4273.68989132053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18953.595381157305,
            "unit": "ns/iter",
            "extra": "iterations: 43604\ncpu: 18953.22447481879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15217.834504899467,
            "unit": "ns/iter",
            "extra": "iterations: 54201\ncpu: 15217.73399014784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14505.564235351181,
            "unit": "ns/iter",
            "extra": "iterations: 57157\ncpu: 14504.918032786862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15224.160146090511,
            "unit": "ns/iter",
            "extra": "iterations: 54213\ncpu: 15224.18976998142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47304.44197264815,
            "unit": "ns/iter",
            "extra": "iterations: 17621\ncpu: 47302.96237443961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 479539.91401975695,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 479518.7842278201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 390970.55140186584,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 390955.94125500723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 389908.32502229133,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 389884.6838824577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 387626.34724091314,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 387608.20995962183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 240528.54348413582,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 240519.4798157695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 385964.1068735948,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 385953.88026607473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 316.6210334083024,
            "unit": "ns/iter",
            "extra": "iterations: 2217710\ncpu: 316.61443561151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1660.7402874901616,
            "unit": "ns/iter",
            "extra": "iterations: 422136\ncpu: 1660.6685996929918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1343.2201870866938,
            "unit": "ns/iter",
            "extra": "iterations: 527456\ncpu: 1343.1874886246376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1200.1414894492523,
            "unit": "ns/iter",
            "extra": "iterations: 583464\ncpu: 1200.1429394101367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1065.108675277875,
            "unit": "ns/iter",
            "extra": "iterations: 660463\ncpu: 1065.079345852824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8159.124973000094,
            "unit": "ns/iter",
            "extra": "iterations: 87963\ncpu: 8158.941827814001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19616.918585802385,
            "unit": "ns/iter",
            "extra": "iterations: 35780\ncpu: 19616.45891559536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4605.882047375457,
            "unit": "ns/iter",
            "extra": "iterations: 152273\ncpu: 4605.849362657856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4536.575601586402,
            "unit": "ns/iter",
            "extra": "iterations: 154051\ncpu: 4536.469091404752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4589.570046529312,
            "unit": "ns/iter",
            "extra": "iterations: 151949\ncpu: 4589.339186174384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9719.76429614205,
            "unit": "ns/iter",
            "extra": "iterations: 71925\ncpu: 9719.550921098185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8371.631795766536,
            "unit": "ns/iter",
            "extra": "iterations: 83747\ncpu: 8371.644357409708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2398.486972836388,
            "unit": "ns/iter",
            "extra": "iterations: 292082\ncpu: 2398.399422080099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12006.407473462363,
            "unit": "ns/iter",
            "extra": "iterations: 58313\ncpu: 12006.190729339798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9519.831137577716,
            "unit": "ns/iter",
            "extra": "iterations: 73551\ncpu: 9519.527946594813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9329.599105217132,
            "unit": "ns/iter",
            "extra": "iterations: 75102\ncpu: 9329.229581102962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9953.70218903016,
            "unit": "ns/iter",
            "extra": "iterations: 70031\ncpu: 9953.716211391933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24658.299785037732,
            "unit": "ns/iter",
            "extra": "iterations: 28377\ncpu: 24657.669943969107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97687.08182324826,
            "unit": "ns/iter",
            "extra": "iterations: 7174\ncpu: 97684.97351547351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83345.76103771837,
            "unit": "ns/iter",
            "extra": "iterations: 8403\ncpu: 83343.1512555042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 81476.19390484208,
            "unit": "ns/iter",
            "extra": "iterations: 8597\ncpu: 81475.49145050594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 81810.62510225472,
            "unit": "ns/iter",
            "extra": "iterations: 8557\ncpu: 81809.57111137129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52573.38626287491,
            "unit": "ns/iter",
            "extra": "iterations: 13307\ncpu: 52571.458630796114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 82531.24242782836,
            "unit": "ns/iter",
            "extra": "iterations: 8452\ncpu: 82529.47231424518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2338.043299348315,
            "unit": "ns/iter",
            "extra": "iterations: 299150\ncpu: 2337.9645662711027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11651.15299687031,
            "unit": "ns/iter",
            "extra": "iterations: 60413\ncpu: 11651.03206263547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9297.453988381983,
            "unit": "ns/iter",
            "extra": "iterations: 75231\ncpu: 9297.20859751979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9137.016050042726,
            "unit": "ns/iter",
            "extra": "iterations: 76573\ncpu: 9136.747939874267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9690.509723402405,
            "unit": "ns/iter",
            "extra": "iterations: 71837\ncpu: 9690.310007377782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23775.721968510592,
            "unit": "ns/iter",
            "extra": "iterations: 29342\ncpu: 23773.611205780384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96217.8399004458,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 96210.61800083063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80482.77696106995,
            "unit": "ns/iter",
            "extra": "iterations: 8707\ncpu: 80478.54599747378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 79630.31992727904,
            "unit": "ns/iter",
            "extra": "iterations: 8802\ncpu: 79629.22063167517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 80172.335622712,
            "unit": "ns/iter",
            "extra": "iterations: 8736\ncpu: 80168.0746336982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52205.912466451024,
            "unit": "ns/iter",
            "extra": "iterations: 13412\ncpu: 52202.65433939753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82231.02518363089,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 82227.00244840773 ns\nthreads: 1"
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
        "date": 1705774123890,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 722.8800549594812,
            "unit": "ns/iter",
            "extra": "iterations: 967985\ncpu: 722.8559326849074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11072.811268511105,
            "unit": "ns/iter",
            "extra": "iterations: 74757\ncpu: 11072.303596987571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24786.749545521405,
            "unit": "ns/iter",
            "extra": "iterations: 33555\ncpu: 24786.103412308155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38746.41870721418,
            "unit": "ns/iter",
            "extra": "iterations: 21767\ncpu: 38745.4403454771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49311.83713756456,
            "unit": "ns/iter",
            "extra": "iterations: 16210\ncpu: 49310.49969154842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51117.16909999587,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51115.52000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61676.650899994456,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61674.73000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70737.79094161367,
            "unit": "ns/iter",
            "extra": "iterations: 12298\ncpu: 70736.91657180028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81789.47321014608,
            "unit": "ns/iter",
            "extra": "iterations: 10769\ncpu: 81787.61259169843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 598.7920176909312,
            "unit": "ns/iter",
            "extra": "iterations: 1168960\ncpu: 598.7752361073093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 509.1590745016134,
            "unit": "ns/iter",
            "extra": "iterations: 1343622\ncpu: 509.14602470039955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 503.9005323248379,
            "unit": "ns/iter",
            "extra": "iterations: 1388250\ncpu: 503.8840986853949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 504.0523799888425,
            "unit": "ns/iter",
            "extra": "iterations: 1393662\ncpu: 504.0546416562978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1011.2541427016591,
            "unit": "ns/iter",
            "extra": "iterations: 690069\ncpu: 1011.2274279818404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4033.0308883068806,
            "unit": "ns/iter",
            "extra": "iterations: 195608\ncpu: 4032.9761563944235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19406.82464946363,
            "unit": "ns/iter",
            "extra": "iterations: 42435\ncpu: 19406.405090137883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15608.267903756408,
            "unit": "ns/iter",
            "extra": "iterations: 52866\ncpu: 15608.088374380515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14891.11761702382,
            "unit": "ns/iter",
            "extra": "iterations: 54839\ncpu: 14890.873283612045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15562.70298621707,
            "unit": "ns/iter",
            "extra": "iterations: 52240\ncpu: 15562.530627871336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47816.13544717213,
            "unit": "ns/iter",
            "extra": "iterations: 17756\ncpu: 47815.0878576255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 481811.7027624271,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 481811.16022099485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 392840.5297591731,
            "unit": "ns/iter",
            "extra": "iterations: 2201\ncpu: 392823.2167196723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 391564.33634312556,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 391551.82844243833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 394541.87920700805,
            "unit": "ns/iter",
            "extra": "iterations: 2169\ncpu: 394540.71000461053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 243396.51512604769,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 243390.53221288597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 387799.9683035783,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 387787.6339285729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1983838.824411221,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1983660.3854389694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 795437.3589527109,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 795436.7398648668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2530827.8044076734,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2530571.074380161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4191.924620876542,
            "unit": "ns/iter",
            "extra": "iterations: 186285\ncpu: 4191.850122124702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18919.432705465035,
            "unit": "ns/iter",
            "extra": "iterations: 43852\ncpu: 18919.251117394902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15179.559322345922,
            "unit": "ns/iter",
            "extra": "iterations: 54364\ncpu: 15179.508498270947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14508.031889902035,
            "unit": "ns/iter",
            "extra": "iterations: 57040\ncpu: 14507.817321178205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15325.938456680797,
            "unit": "ns/iter",
            "extra": "iterations: 53832\ncpu: 15325.644598008621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47400.70974480911,
            "unit": "ns/iter",
            "extra": "iterations: 17712\ncpu: 47398.995031616636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 490538.9597277868,
            "unit": "ns/iter",
            "extra": "iterations: 1763\ncpu: 490517.58366420696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 403545.89578510565,
            "unit": "ns/iter",
            "extra": "iterations: 2159\ncpu: 403528.06855025265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 399147.41803279635,
            "unit": "ns/iter",
            "extra": "iterations: 2196\ncpu: 399132.4681238603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 398845.41769830644,
            "unit": "ns/iter",
            "extra": "iterations: 2181\ncpu: 398831.2700596043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 239830.4920634844,
            "unit": "ns/iter",
            "extra": "iterations: 3654\ncpu: 239820.27914614024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 396601.0669398677,
            "unit": "ns/iter",
            "extra": "iterations: 2196\ncpu: 396585.7468123882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1997544.449561442,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 1997370.1754385899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 771889.8746887897,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 771855.5186721947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4228.515289182008,
            "unit": "ns/iter",
            "extra": "iterations: 189742\ncpu: 4228.268385491901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18938.48117135755,
            "unit": "ns/iter",
            "extra": "iterations: 43949\ncpu: 18937.74147307105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15209.304811365722,
            "unit": "ns/iter",
            "extra": "iterations: 54683\ncpu: 15208.995483056908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14477.373926824004,
            "unit": "ns/iter",
            "extra": "iterations: 57423\ncpu: 14476.725353952237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15364.579513329894,
            "unit": "ns/iter",
            "extra": "iterations: 54123\ncpu: 15363.817600650345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47797.53699284483,
            "unit": "ns/iter",
            "extra": "iterations: 17598\ncpu: 47795.89157858828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 479762.06633773504,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 479745.83333333244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 396322.9380090059,
            "unit": "ns/iter",
            "extra": "iterations: 2210\ncpu: 396297.82805429754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 393085.30603063345,
            "unit": "ns/iter",
            "extra": "iterations: 2222\ncpu: 393065.6165616563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 394508.2272317664,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 394498.1064021633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 240465.59047617068,
            "unit": "ns/iter",
            "extra": "iterations: 3675\ncpu: 240456.2993197272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 388619.56891892775,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 388603.0180180193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.2226049499444,
            "unit": "ns/iter",
            "extra": "iterations: 2297833\ncpu: 302.21412957338526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1666.3789160591127,
            "unit": "ns/iter",
            "extra": "iterations: 420927\ncpu: 1666.373979336081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1238.619150943701,
            "unit": "ns/iter",
            "extra": "iterations: 565946\ncpu: 1238.595024967043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1289.134375539413,
            "unit": "ns/iter",
            "extra": "iterations: 573527\ncpu: 1289.0699130119417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1052.0406551694923,
            "unit": "ns/iter",
            "extra": "iterations: 662302\ncpu: 1051.997427155585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8185.327948436652,
            "unit": "ns/iter",
            "extra": "iterations: 85486\ncpu: 8185.0958051611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19449.26992281046,
            "unit": "ns/iter",
            "extra": "iterations: 36014\ncpu: 19448.89765091371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4584.065141179829,
            "unit": "ns/iter",
            "extra": "iterations: 152607\ncpu: 4584.0334978081655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4594.493895130672,
            "unit": "ns/iter",
            "extra": "iterations: 151846\ncpu: 4594.373246578788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4586.011749209281,
            "unit": "ns/iter",
            "extra": "iterations: 151840\ncpu: 4585.993150684945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10391.680398000844,
            "unit": "ns/iter",
            "extra": "iterations: 72462\ncpu: 10391.510032844695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8707.327863951465,
            "unit": "ns/iter",
            "extra": "iterations: 80265\ncpu: 8707.178720488397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2393.442896220434,
            "unit": "ns/iter",
            "extra": "iterations: 292091\ncpu: 2393.419858879602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11840.763761198888,
            "unit": "ns/iter",
            "extra": "iterations: 59279\ncpu: 11840.83908298046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9403.92024647189,
            "unit": "ns/iter",
            "extra": "iterations: 74329\ncpu: 9403.779144075772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9279.993934567416,
            "unit": "ns/iter",
            "extra": "iterations: 75345\ncpu: 9279.733227155013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9887.218505387236,
            "unit": "ns/iter",
            "extra": "iterations: 70520\ncpu: 9887.0859330686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24422.133607326043,
            "unit": "ns/iter",
            "extra": "iterations: 28711\ncpu: 24421.657204555497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97210.68665189545,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 97211.28496261548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83015.98992174571,
            "unit": "ns/iter",
            "extra": "iterations: 8434\ncpu: 83014.22812425891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82045.63075485572,
            "unit": "ns/iter",
            "extra": "iterations: 8558\ncpu: 82044.01729376105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 82151.7591026501,
            "unit": "ns/iter",
            "extra": "iterations: 8514\ncpu: 82149.81207423171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 51747.2565239874,
            "unit": "ns/iter",
            "extra": "iterations: 13527\ncpu: 51746.06342869785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 82495.2894736898,
            "unit": "ns/iter",
            "extra": "iterations: 8436\ncpu: 82495.7088667622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2331.793016152357,
            "unit": "ns/iter",
            "extra": "iterations: 300207\ncpu: 2331.748426918765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11575.197609070727,
            "unit": "ns/iter",
            "extra": "iterations: 60144\ncpu: 11575.06484437344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9332.074526556678,
            "unit": "ns/iter",
            "extra": "iterations: 75141\ncpu: 9331.874742151283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9184.697806810445,
            "unit": "ns/iter",
            "extra": "iterations: 76236\ncpu: 9184.53617713413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9683.009022326858,
            "unit": "ns/iter",
            "extra": "iterations: 72376\ncpu: 9683.056538078874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23701.845781583375,
            "unit": "ns/iter",
            "extra": "iterations: 29549\ncpu: 23701.13371010899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96453.33249756621,
            "unit": "ns/iter",
            "extra": "iterations: 7179\ncpu: 96451.72029530589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80485.00656530473,
            "unit": "ns/iter",
            "extra": "iterations: 8682\ncpu: 80484.02441833662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80054.54725627006,
            "unit": "ns/iter",
            "extra": "iterations: 8729\ncpu: 80053.94661473154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 80740.2953835568,
            "unit": "ns/iter",
            "extra": "iterations: 8643\ncpu: 80740.74973967265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52421.38896768098,
            "unit": "ns/iter",
            "extra": "iterations: 13397\ncpu: 52420.280659849326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82573.0116952216,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 82571.63614884784 ns\nthreads: 1"
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
        "date": 1705775565448,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 721.3316205029896,
            "unit": "ns/iter",
            "extra": "iterations: 966237\ncpu: 721.309161209931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11149.973085804288,
            "unit": "ns/iter",
            "extra": "iterations: 74496\ncpu: 11149.712736254296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25447.02174302117,
            "unit": "ns/iter",
            "extra": "iterations: 33528\ncpu: 25445.4098067287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39000.37574801553,
            "unit": "ns/iter",
            "extra": "iterations: 21557\ncpu: 38998.75678433922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48728.80984189443,
            "unit": "ns/iter",
            "extra": "iterations: 16318\ncpu: 48725.26657678633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50032.229099997494,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50029.41999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60794.80519999833,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60792.26999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69914.17977800757,
            "unit": "ns/iter",
            "extra": "iterations: 12343\ncpu: 69910.47557319942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80391.44524204229,
            "unit": "ns/iter",
            "extra": "iterations: 10866\ncpu: 80385.137124977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 594.3264049705846,
            "unit": "ns/iter",
            "extra": "iterations: 1179740\ncpu: 594.2897587604047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 503.4117357274967,
            "unit": "ns/iter",
            "extra": "iterations: 1390489\ncpu: 503.38312636777437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 503.5594293928975,
            "unit": "ns/iter",
            "extra": "iterations: 1393393\ncpu: 503.5379824643867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 501.2947332395475,
            "unit": "ns/iter",
            "extra": "iterations: 1399608\ncpu: 501.26163897319793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1013.094880715808,
            "unit": "ns/iter",
            "extra": "iterations: 691542\ncpu: 1013.0266852917108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4207.705259508654,
            "unit": "ns/iter",
            "extra": "iterations: 190398\ncpu: 4207.484847529913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19309.763040586506,
            "unit": "ns/iter",
            "extra": "iterations: 42847\ncpu: 19308.184937101785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15566.812430986764,
            "unit": "ns/iter",
            "extra": "iterations: 53431\ncpu: 15565.49942917035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14808.375206048835,
            "unit": "ns/iter",
            "extra": "iterations: 55812\ncpu: 14807.062997204916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15453.021461486538,
            "unit": "ns/iter",
            "extra": "iterations: 53165\ncpu: 15451.992852440462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47728.141085982774,
            "unit": "ns/iter",
            "extra": "iterations: 17422\ncpu: 47724.66995752504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 500457.1196438874,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 500299.77740678826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 392756.0975169165,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 392749.7968397284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 394708.1361161199,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 394699.18330308574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 397439.36475974333,
            "unit": "ns/iter",
            "extra": "iterations: 2185\ncpu: 397432.44851258595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 244181.92525480085,
            "unit": "ns/iter",
            "extra": "iterations: 3532\ncpu: 244177.71800679574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 393038.8179765217,
            "unit": "ns/iter",
            "extra": "iterations: 2214\ncpu: 393030.66847335163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2003625.9088938353,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2003380.043383953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 785501.3650662054,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 785484.0231788062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2535814.3526170147,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2535630.853994491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4136.382414529918,
            "unit": "ns/iter",
            "extra": "iterations: 188633\ncpu: 4136.284213260666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18967.737782967302,
            "unit": "ns/iter",
            "extra": "iterations: 43689\ncpu: 18967.570784408017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15478.34374076779,
            "unit": "ns/iter",
            "extra": "iterations: 54160\ncpu: 15477.96159527322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14494.071518059345,
            "unit": "ns/iter",
            "extra": "iterations: 56671\ncpu: 14493.951050802087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15221.260789748263,
            "unit": "ns/iter",
            "extra": "iterations: 53384\ncpu: 15221.015660122956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47883.198871728426,
            "unit": "ns/iter",
            "extra": "iterations: 17549\ncpu: 47882.80813721592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 497331.13538109657,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 497319.2832764499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 400554.4870489974,
            "unit": "ns/iter",
            "extra": "iterations: 2162\ncpu: 400551.15633672243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 400298.0496809005,
            "unit": "ns/iter",
            "extra": "iterations: 2194\ncpu: 400294.5761166822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 398870.018841953,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 398860.52389705734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 239053.32531099062,
            "unit": "ns/iter",
            "extra": "iterations: 3698\ncpu: 239051.21687398554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 396081.12129505,
            "unit": "ns/iter",
            "extra": "iterations: 2193\ncpu: 396074.41860465315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2003402.0701754035,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2003126.5350877144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 781812.1571906211,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 781794.8996655532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4284.662392752848,
            "unit": "ns/iter",
            "extra": "iterations: 187884\ncpu: 4284.630942496447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18893.717224947657,
            "unit": "ns/iter",
            "extra": "iterations: 43646\ncpu: 18893.40603949962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15152.939280330718,
            "unit": "ns/iter",
            "extra": "iterations: 54414\ncpu: 15152.616973573096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14425.468722098203,
            "unit": "ns/iter",
            "extra": "iterations: 57117\ncpu: 14425.169389148603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15160.081104050796,
            "unit": "ns/iter",
            "extra": "iterations: 54128\ncpu: 15159.843334318755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46594.33577370966,
            "unit": "ns/iter",
            "extra": "iterations: 18030\ncpu: 46593.92678868554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 484805.0193263396,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 484783.7106570985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 394699.2164716378,
            "unit": "ns/iter",
            "extra": "iterations: 2222\ncpu: 394695.6795679569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 393547.0428313901,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 393537.4211000878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 397698.9409340871,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 397692.07875458035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 241304.51084269935,
            "unit": "ns/iter",
            "extra": "iterations: 3643\ncpu: 241300.76859731038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 390679.153396327,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 390669.45569050795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 306.30447564570665,
            "unit": "ns/iter",
            "extra": "iterations: 2284810\ncpu: 306.3015743103357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1703.5393752259001,
            "unit": "ns/iter",
            "extra": "iterations: 412277\ncpu: 1703.5073506404663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1320.2626363370803,
            "unit": "ns/iter",
            "extra": "iterations: 529386\ncpu: 1320.2500632808612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1263.1535522885858,
            "unit": "ns/iter",
            "extra": "iterations: 553629\ncpu: 1263.14354919992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1069.3955598871294,
            "unit": "ns/iter",
            "extra": "iterations: 651560\ncpu: 1069.36782491252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8182.867764255923,
            "unit": "ns/iter",
            "extra": "iterations: 85703\ncpu: 8182.795234705918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18646.92817767932,
            "unit": "ns/iter",
            "extra": "iterations: 37551\ncpu: 18646.416873052745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4582.660030889079,
            "unit": "ns/iter",
            "extra": "iterations: 152808\ncpu: 4582.616747814242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4537.53459450677,
            "unit": "ns/iter",
            "extra": "iterations: 153825\ncpu: 4537.110352673452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4584.151039027146,
            "unit": "ns/iter",
            "extra": "iterations: 151921\ncpu: 4583.902159675037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9732.888706536927,
            "unit": "ns/iter",
            "extra": "iterations: 71900\ncpu: 9732.15299026423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8663.483215154085,
            "unit": "ns/iter",
            "extra": "iterations: 78553\ncpu: 8663.245197509925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2401.1840235208383,
            "unit": "ns/iter",
            "extra": "iterations: 292843\ncpu: 2401.083174260594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11851.277662253915,
            "unit": "ns/iter",
            "extra": "iterations: 59151\ncpu: 11850.668627749485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9416.692535791439,
            "unit": "ns/iter",
            "extra": "iterations: 74529\ncpu: 9416.064887493487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9326.740423151825,
            "unit": "ns/iter",
            "extra": "iterations: 75103\ncpu: 9326.002955940512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9953.513662836096,
            "unit": "ns/iter",
            "extra": "iterations: 70227\ncpu: 9952.807324818195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24556.017586971528,
            "unit": "ns/iter",
            "extra": "iterations: 28487\ncpu: 24554.24228595518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 96741.7671077076,
            "unit": "ns/iter",
            "extra": "iterations: 7029\ncpu: 96738.91022905153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83314.59657876128,
            "unit": "ns/iter",
            "extra": "iterations: 8418\ncpu: 83308.62437633584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 81758.55249651158,
            "unit": "ns/iter",
            "extra": "iterations: 8572\ncpu: 81753.3947736808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 81997.82935393375,
            "unit": "ns/iter",
            "extra": "iterations: 8544\ncpu: 81996.04400748962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 51912.22345412708,
            "unit": "ns/iter",
            "extra": "iterations: 13439\ncpu: 51911.34012947403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 82468.74841140123,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 82467.23935043455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2332.4968111053495,
            "unit": "ns/iter",
            "extra": "iterations: 300104\ncpu: 2332.436755258153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11660.86034929412,
            "unit": "ns/iter",
            "extra": "iterations: 60236\ncpu: 11660.82077163177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9296.663600334266,
            "unit": "ns/iter",
            "extra": "iterations: 75443\ncpu: 9296.45295123466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9065.212688399919,
            "unit": "ns/iter",
            "extra": "iterations: 77362\ncpu: 9064.972467102787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9624.282236372725,
            "unit": "ns/iter",
            "extra": "iterations: 72868\ncpu: 9624.057199319426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23583.119366628576,
            "unit": "ns/iter",
            "extra": "iterations: 29556\ncpu: 23582.44349709023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97923.03794985336,
            "unit": "ns/iter",
            "extra": "iterations: 7141\ncpu: 97922.36381459305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82256.81332236962,
            "unit": "ns/iter",
            "extra": "iterations: 8512\ncpu: 82254.6052631588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80531.22112708948,
            "unit": "ns/iter",
            "extra": "iterations: 8624\ncpu: 80529.19758812622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81107.69936185531,
            "unit": "ns/iter",
            "extra": "iterations: 8462\ncpu: 81106.0742141343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52603.841186210935,
            "unit": "ns/iter",
            "extra": "iterations: 13286\ncpu: 52602.34080987541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82567.42401037403,
            "unit": "ns/iter",
            "extra": "iterations: 8488\ncpu: 82566.85909519352 ns\nthreads: 1"
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
        "date": 1705779130334,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 731.0673182928654,
            "unit": "ns/iter",
            "extra": "iterations: 947885\ncpu: 731.0258100929965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11035.984928728161,
            "unit": "ns/iter",
            "extra": "iterations: 73451\ncpu: 11035.555676573498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24536.462336214918,
            "unit": "ns/iter",
            "extra": "iterations: 34038\ncpu: 24535.795287619723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38594.47098150828,
            "unit": "ns/iter",
            "extra": "iterations: 21090\ncpu: 38592.66002844952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48052.26525635606,
            "unit": "ns/iter",
            "extra": "iterations: 16403\ncpu: 48049.429982320304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60136.68657561113,
            "unit": "ns/iter",
            "extra": "iterations: 14131\ncpu: 60136.600382138524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60241.46340000697,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60237.17 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69300.40724487396,
            "unit": "ns/iter",
            "extra": "iterations: 12533\ncpu: 69294.33495571694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80989.47289651286,
            "unit": "ns/iter",
            "extra": "iterations: 10958\ncpu: 80985.80945427986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 602.7035419014284,
            "unit": "ns/iter",
            "extra": "iterations: 1155961\ncpu: 602.6626330819113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 516.621052398588,
            "unit": "ns/iter",
            "extra": "iterations: 1355095\ncpu: 516.6028212044181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 513.0007950122134,
            "unit": "ns/iter",
            "extra": "iterations: 1364759\ncpu: 512.9652195002924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 513.8703487105594,
            "unit": "ns/iter",
            "extra": "iterations: 1359408\ncpu: 513.8316090533531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1013.5336125097532,
            "unit": "ns/iter",
            "extra": "iterations: 691558\ncpu: 1013.4872273909059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4156.830436634382,
            "unit": "ns/iter",
            "extra": "iterations: 190159\ncpu: 4156.517966543782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19310.056057016747,
            "unit": "ns/iter",
            "extra": "iterations: 42653\ncpu: 19309.19044381403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15560.118279366501,
            "unit": "ns/iter",
            "extra": "iterations: 53213\ncpu: 15559.380226636316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14845.691889759506,
            "unit": "ns/iter",
            "extra": "iterations: 55769\ncpu: 14845.224049202947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15590.068310258759,
            "unit": "ns/iter",
            "extra": "iterations: 52730\ncpu: 15589.54674758201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47120.87317377995,
            "unit": "ns/iter",
            "extra": "iterations: 17591\ncpu: 47119.17457790911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 476901.9605262895,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 476877.74122806947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 390608.7016599476,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 390583.9838492604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 387741.55237241095,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 387720.18800358084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 394793.51675726136,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 394770.83333333314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 241799.41088285024,
            "unit": "ns/iter",
            "extra": "iterations: 3602\ncpu: 241799.2781787899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 387395.49797931965,
            "unit": "ns/iter",
            "extra": "iterations: 2227\ncpu: 387383.74494836084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1998578.5162689926,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 1998297.6138828688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 800289.5842600346,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 800224.2942686055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2552108.3195593567,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2551984.02203857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4320.628026436177,
            "unit": "ns/iter",
            "extra": "iterations: 182021\ncpu: 4320.478406337724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19173.033672957314,
            "unit": "ns/iter",
            "extra": "iterations: 43774\ncpu: 19172.2003929273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15288.651223195759,
            "unit": "ns/iter",
            "extra": "iterations: 54284\ncpu: 15288.245155110157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14538.217586267987,
            "unit": "ns/iter",
            "extra": "iterations: 57090\ncpu: 14537.719390436196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15288.646633359314,
            "unit": "ns/iter",
            "extra": "iterations: 53644\ncpu: 15288.248452762658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46395.58788076591,
            "unit": "ns/iter",
            "extra": "iterations: 18417\ncpu: 46393.538578487176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 493983.21061551775,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 493976.0587238849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 400295.2887970709,
            "unit": "ns/iter",
            "extra": "iterations: 2178\ncpu: 400283.1496786059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 397286.4012738727,
            "unit": "ns/iter",
            "extra": "iterations: 2198\ncpu: 397267.74340309546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 400395.4437869743,
            "unit": "ns/iter",
            "extra": "iterations: 2197\ncpu: 400382.4305871631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 239398.2922824246,
            "unit": "ns/iter",
            "extra": "iterations: 3654\ncpu: 239387.90366721418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 395508.8391167141,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 395499.0536277588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2009517.940659312,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2009188.351648358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 787011.376154464,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 786965.0713685955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4238.604491604642,
            "unit": "ns/iter",
            "extra": "iterations: 189331\ncpu: 4238.554700498051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19374.467971862876,
            "unit": "ns/iter",
            "extra": "iterations: 42650\ncpu: 19373.652989448994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15194.891525990935,
            "unit": "ns/iter",
            "extra": "iterations: 53847\ncpu: 15194.397088045856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14482.057044965279,
            "unit": "ns/iter",
            "extra": "iterations: 56622\ncpu: 14481.782699304218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14963.727874368462,
            "unit": "ns/iter",
            "extra": "iterations: 53490\ncpu: 14962.96504019436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46390.30180533353,
            "unit": "ns/iter",
            "extra": "iterations: 17836\ncpu: 46388.33258578177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 482461.172167268,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 482448.2398239818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 397674.53339432384,
            "unit": "ns/iter",
            "extra": "iterations: 2186\ncpu: 397649.77127173095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 394282.1988251463,
            "unit": "ns/iter",
            "extra": "iterations: 2213\ncpu: 394271.757794848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 397411.2967183013,
            "unit": "ns/iter",
            "extra": "iterations: 2194\ncpu: 397398.67821331066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 241574.9363285663,
            "unit": "ns/iter",
            "extra": "iterations: 3628\ncpu: 241566.48291069618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 388723.68112701614,
            "unit": "ns/iter",
            "extra": "iterations: 2236\ncpu: 388671.1538461537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 309.2043204587152,
            "unit": "ns/iter",
            "extra": "iterations: 2094685\ncpu: 309.18477002508763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1634.0626358597667,
            "unit": "ns/iter",
            "extra": "iterations: 429211\ncpu: 1633.9874793516517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1205.5425493481525,
            "unit": "ns/iter",
            "extra": "iterations: 581278\ncpu: 1205.444038824803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1260.3751798210794,
            "unit": "ns/iter",
            "extra": "iterations: 554718\ncpu: 1260.3582360767039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1073.079163779347,
            "unit": "ns/iter",
            "extra": "iterations: 652268\ncpu: 1073.0523343165698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8133.70909860314,
            "unit": "ns/iter",
            "extra": "iterations: 87442\ncpu: 8133.241462912574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19408.430198401904,
            "unit": "ns/iter",
            "extra": "iterations: 36088\ncpu: 19407.47062735538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4599.002589226563,
            "unit": "ns/iter",
            "extra": "iterations: 152169\ncpu: 4598.717215727259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4587.228209743796,
            "unit": "ns/iter",
            "extra": "iterations: 152224\ncpu: 4587.105187092706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4601.298906112161,
            "unit": "ns/iter",
            "extra": "iterations: 152118\ncpu: 4601.061018419857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9315.081004731814,
            "unit": "ns/iter",
            "extra": "iterations: 75045\ncpu: 9314.427343593816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8803.32752818982,
            "unit": "ns/iter",
            "extra": "iterations: 79642\ncpu: 8802.738504808967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2387.624623673245,
            "unit": "ns/iter",
            "extra": "iterations: 293628\ncpu: 2387.462026782195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11918.363613132475,
            "unit": "ns/iter",
            "extra": "iterations: 58697\ncpu: 11918.356985876639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9510.54961002272,
            "unit": "ns/iter",
            "extra": "iterations: 73594\ncpu: 9510.557925917761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9370.825631240627,
            "unit": "ns/iter",
            "extra": "iterations: 74417\ncpu: 9370.103605358949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10040.105133316185,
            "unit": "ns/iter",
            "extra": "iterations: 69721\ncpu: 10039.772808766413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24667.828252607284,
            "unit": "ns/iter",
            "extra": "iterations: 28408\ncpu: 24666.565756124885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97106.18219692221,
            "unit": "ns/iter",
            "extra": "iterations: 7201\ncpu: 97104.40216636473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83970.27833692216,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 83970.2971483342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82319.4661415405,
            "unit": "ns/iter",
            "extra": "iterations: 8506\ncpu: 82315.05995767703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83225.3580832615,
            "unit": "ns/iter",
            "extra": "iterations: 8431\ncpu: 83223.03404103877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52412.68995567456,
            "unit": "ns/iter",
            "extra": "iterations: 13311\ncpu: 52409.157839381114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83019.28200260214,
            "unit": "ns/iter",
            "extra": "iterations: 8429\ncpu: 83016.43136789725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2339.839829863114,
            "unit": "ns/iter",
            "extra": "iterations: 299288\ncpu: 2339.7807463045788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11561.272584432363,
            "unit": "ns/iter",
            "extra": "iterations: 60462\ncpu: 11560.901061823935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9273.102497411448,
            "unit": "ns/iter",
            "extra": "iterations: 75358\ncpu: 9272.888080893985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9155.744015142773,
            "unit": "ns/iter",
            "extra": "iterations: 76610\ncpu: 9155.265631118755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9664.905259520188,
            "unit": "ns/iter",
            "extra": "iterations: 72345\ncpu: 9664.665146174633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23810.075711711113,
            "unit": "ns/iter",
            "extra": "iterations: 29401\ncpu: 23808.499710894437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96561.38497588274,
            "unit": "ns/iter",
            "extra": "iterations: 7255\ncpu: 96553.72846312818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80968.47043820689,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 80967.26176675146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80195.57958715079,
            "unit": "ns/iter",
            "extra": "iterations: 8720\ncpu: 80189.64449541282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81015.334835869,
            "unit": "ns/iter",
            "extra": "iterations: 8652\ncpu: 81010.71428571374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52261.34545318615,
            "unit": "ns/iter",
            "extra": "iterations: 13394\ncpu: 52258.914439300584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82329.06651780388,
            "unit": "ns/iter",
            "extra": "iterations: 8509\ncpu: 82319.97884592877 ns\nthreads: 1"
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
        "date": 1705954290250,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 745.6695983165886,
            "unit": "ns/iter",
            "extra": "iterations: 942359\ncpu: 745.6491634292239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11316.301139853296,
            "unit": "ns/iter",
            "extra": "iterations: 73255\ncpu: 11313.701453825677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25132.98134746422,
            "unit": "ns/iter",
            "extra": "iterations: 33025\ncpu: 25132.263436790312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41262.85092095853,
            "unit": "ns/iter",
            "extra": "iterations: 21445\ncpu: 41261.07251107485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 52375.18270153116,
            "unit": "ns/iter",
            "extra": "iterations: 15643\ncpu: 52373.04225532182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50742.70029999752,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50738.36000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60368.59960000811,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60368.50999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69712.34949103948,
            "unit": "ns/iter",
            "extra": "iterations: 12378\ncpu: 69709.33915010499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79714.58700419709,
            "unit": "ns/iter",
            "extra": "iterations: 10942\ncpu: 79710.60135258641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 590.7726278746712,
            "unit": "ns/iter",
            "extra": "iterations: 1182115\ncpu: 590.7375339962686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 501.4014248132404,
            "unit": "ns/iter",
            "extra": "iterations: 1392744\ncpu: 501.38223535696403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 497.53420789878646,
            "unit": "ns/iter",
            "extra": "iterations: 1407175\ncpu: 497.5202799936042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 501.4052517283227,
            "unit": "ns/iter",
            "extra": "iterations: 1394817\ncpu: 501.38864094716394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1019.9559927544135,
            "unit": "ns/iter",
            "extra": "iterations: 684001\ncpu: 1019.9442690873259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3897.766143522535,
            "unit": "ns/iter",
            "extra": "iterations: 205361\ncpu: 3897.464951962644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17910.076024156897,
            "unit": "ns/iter",
            "extra": "iterations: 45867\ncpu: 17909.56679093904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14428.732519422569,
            "unit": "ns/iter",
            "extra": "iterations: 56763\ncpu: 14428.31598048022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13700.307370184906,
            "unit": "ns/iter",
            "extra": "iterations: 59700\ncpu: 13700.175879396991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14052.30642189207,
            "unit": "ns/iter",
            "extra": "iterations: 58067\ncpu: 14052.110493051128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46919.01072771266,
            "unit": "ns/iter",
            "extra": "iterations: 18084\ncpu: 46917.866622428606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 477163.3667574583,
            "unit": "ns/iter",
            "extra": "iterations: 1835\ncpu: 477147.46594005346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 390761.36796735844,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 390744.8729582571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 391707.6312247646,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 391703.6787797217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 398619.9187956226,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 398600.82116788387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 245635.0820916358,
            "unit": "ns/iter",
            "extra": "iterations: 3557\ncpu: 245625.75203823508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 389873.4959090627,
            "unit": "ns/iter",
            "extra": "iterations: 2200\ncpu: 389858.36363636394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2002736.9112553124,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2002603.4632034579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 802188.8083121134,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 802156.0644614073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2544149.234806533,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2544003.5911602136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4129.515610958846,
            "unit": "ns/iter",
            "extra": "iterations: 191404\ncpu: 4129.449227811328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18945.968391595976,
            "unit": "ns/iter",
            "extra": "iterations: 43596\ncpu: 18945.942288283375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15236.729986281807,
            "unit": "ns/iter",
            "extra": "iterations: 53938\ncpu: 15236.40476102189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14587.815471991598,
            "unit": "ns/iter",
            "extra": "iterations: 56696\ncpu: 14584.92662621699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14994.384925011773,
            "unit": "ns/iter",
            "extra": "iterations: 54408\ncpu: 14993.71967357738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47397.29773883678,
            "unit": "ns/iter",
            "extra": "iterations: 17690\ncpu: 47396.885245901525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 487691.0335990291,
            "unit": "ns/iter",
            "extra": "iterations: 1756\ncpu: 487674.37357631006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 402945.50229566573,
            "unit": "ns/iter",
            "extra": "iterations: 2178\ncpu: 402933.2874196529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 399533.185849039,
            "unit": "ns/iter",
            "extra": "iterations: 2120\ncpu: 399523.39622641535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 402765.7619918131,
            "unit": "ns/iter",
            "extra": "iterations: 2189\ncpu: 402757.05801735865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 239604.55431223515,
            "unit": "ns/iter",
            "extra": "iterations: 3664\ncpu: 239599.4541484717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 395481.17004958115,
            "unit": "ns/iter",
            "extra": "iterations: 2217\ncpu: 395462.5169147509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2006556.8515284455,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2006344.323144112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 792244.7238938609,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 792203.3628318622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4272.651303461007,
            "unit": "ns/iter",
            "extra": "iterations: 187309\ncpu: 4272.416701813568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18971.021978775865,
            "unit": "ns/iter",
            "extra": "iterations: 43724\ncpu: 18970.42814015179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14864.186925062655,
            "unit": "ns/iter",
            "extra": "iterations: 55006\ncpu: 14863.738501254444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14478.551423164889,
            "unit": "ns/iter",
            "extra": "iterations: 57056\ncpu: 14477.85859506452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15097.951806560382,
            "unit": "ns/iter",
            "extra": "iterations: 54136\ncpu: 15097.436086892241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47575.37744820201,
            "unit": "ns/iter",
            "extra": "iterations: 17666\ncpu: 47574.255632288136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 489366.68300835474,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 489357.9944289691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 396355.3847895295,
            "unit": "ns/iter",
            "extra": "iterations: 2209\ncpu: 396337.1208691704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 397922.8085972966,
            "unit": "ns/iter",
            "extra": "iterations: 2210\ncpu: 397911.5384615387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 396995.04361651186,
            "unit": "ns/iter",
            "extra": "iterations: 2201\ncpu: 396980.23625624686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 244289.2910874895,
            "unit": "ns/iter",
            "extra": "iterations: 3669\ncpu: 244278.35922594767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 390029.9487522225,
            "unit": "ns/iter",
            "extra": "iterations: 2244\ncpu: 390026.33689839684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 309.4581785195685,
            "unit": "ns/iter",
            "extra": "iterations: 2263203\ncpu: 309.45761383313624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1625.719570708648,
            "unit": "ns/iter",
            "extra": "iterations: 429545\ncpu: 1625.7169795946882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1325.539142636715,
            "unit": "ns/iter",
            "extra": "iterations: 528784\ncpu: 1325.472971950731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1298.6526052883512,
            "unit": "ns/iter",
            "extra": "iterations: 537714\ncpu: 1298.6072521823924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1069.9839761771143,
            "unit": "ns/iter",
            "extra": "iterations: 650469\ncpu: 1069.945070403047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8074.108183191867,
            "unit": "ns/iter",
            "extra": "iterations: 86030\ncpu: 8073.6975473671655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18600.954533419568,
            "unit": "ns/iter",
            "extra": "iterations: 37764\ncpu: 18599.872894820244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4590.267972442137,
            "unit": "ns/iter",
            "extra": "iterations: 152553\ncpu: 4590.017239910097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4541.503849862346,
            "unit": "ns/iter",
            "extra": "iterations: 153512\ncpu: 4541.302960029231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4569.7262526974855,
            "unit": "ns/iter",
            "extra": "iterations: 152491\ncpu: 4569.534595484308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9741.984187258347,
            "unit": "ns/iter",
            "extra": "iterations: 72157\ncpu: 9741.350111562368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8776.327158560158,
            "unit": "ns/iter",
            "extra": "iterations: 79787\ncpu: 8776.007369621522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2436.9378532450082,
            "unit": "ns/iter",
            "extra": "iterations: 287159\ncpu: 2436.8485751796197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11953.687660097386,
            "unit": "ns/iter",
            "extra": "iterations: 58558\ncpu: 11953.353939683613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9541.330493548889,
            "unit": "ns/iter",
            "extra": "iterations: 73245\ncpu: 9541.178237422399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9446.840327409023,
            "unit": "ns/iter",
            "extra": "iterations: 74158\ncpu: 9446.38070066618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10082.912144069836,
            "unit": "ns/iter",
            "extra": "iterations: 69466\ncpu: 10082.451846946697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24601.695168069677,
            "unit": "ns/iter",
            "extra": "iterations: 28560\ncpu: 24600.647759103766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98426.07626283399,
            "unit": "ns/iter",
            "extra": "iterations: 7107\ncpu: 98422.13310820339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83780.83794135049,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 83778.10891681598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82154.34148061328,
            "unit": "ns/iter",
            "extra": "iterations: 8510\ncpu: 82152.99647473593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 82223.73780701916,
            "unit": "ns/iter",
            "extra": "iterations: 8509\ncpu: 82220.86026560112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 51725.91251203504,
            "unit": "ns/iter",
            "extra": "iterations: 13499\ncpu: 51723.30543003196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 81840.37574206409,
            "unit": "ns/iter",
            "extra": "iterations: 8591\ncpu: 81837.7255267149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2361.277819353878,
            "unit": "ns/iter",
            "extra": "iterations: 296646\ncpu: 2361.229209225792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11603.31729268378,
            "unit": "ns/iter",
            "extra": "iterations: 60222\ncpu: 11603.075288100654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9188.452810361361,
            "unit": "ns/iter",
            "extra": "iterations: 76129\ncpu: 9188.15957125406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9084.238848790495,
            "unit": "ns/iter",
            "extra": "iterations: 77032\ncpu: 9084.118288503341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9592.897808219066,
            "unit": "ns/iter",
            "extra": "iterations: 73000\ncpu: 9592.521917808346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23403.68036437948,
            "unit": "ns/iter",
            "extra": "iterations: 29859\ncpu: 23402.48836196804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96343.64254265504,
            "unit": "ns/iter",
            "extra": "iterations: 7268\ncpu: 96340.97413318612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80361.06815053306,
            "unit": "ns/iter",
            "extra": "iterations: 8716\ncpu: 80358.29508949062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 79292.18436829587,
            "unit": "ns/iter",
            "extra": "iterations: 8841\ncpu: 79292.19545300366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 79710.4002048207,
            "unit": "ns/iter",
            "extra": "iterations: 8788\ncpu: 79707.10059171665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52139.804121391644,
            "unit": "ns/iter",
            "extra": "iterations: 13345\ncpu: 52138.0142375426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81407.34921004613,
            "unit": "ns/iter",
            "extra": "iterations: 8608\ncpu: 81405.95957249118 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}